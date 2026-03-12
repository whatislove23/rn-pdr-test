import { useState } from 'react';
import { resultsApiModule } from '../api';
import { FetchState } from '../../../types';

export const useSaveResults = () => {
  const [status, setState] = useState<FetchState>('idle');
  const [error, setError] = useState<string>();

  const saveResults = async (
    userId: string,
    payload: {
      avg_score: number;
      avg_time: number;
      tests_count: number;
      rating: number;
    }
  ) => {
    try {
      const response = await resultsApiModule.upsertUserResults(
        userId,
        payload
      );
      if (response.error) {
        console.error(response.error);
        setError(response.error.message);
        setState('error');
        return;
      }
      setState('success');
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };

  // Нова логіка зміни рейтингу — додати/відняти або 0
  const getRatingChange = (score: number, seconds: number) => {
    const maxScore = 20;
    const maxTime = 1170;

    const accuracy = score / maxScore;
    const speed = Math.max(0, 1 - seconds / maxTime);

    if (accuracy === 1 && speed > 0.9) {
      return 5;
    }
    if (accuracy >= 0.9) {
      return 3;
    }
    if (accuracy < 0.4) {
      return -3;
    }
    if (accuracy < 0.6) {
      return -1;
    }
    return 0;
  };

  const processResults = async (
    userId: string,
    score: number,
    time: number
  ) => {
    try {
      setState('loading');
      setError(undefined);
      const previousResults = await resultsApiModule.getUserResults(userId);
      if (previousResults.error) {
        setError(previousResults.error.message);
        setState('error');
        return;
      }

      const ratingChange = getRatingChange(score, time);

      if (previousResults.data.length === 0) {
        const newResults = {
          avg_score: score,
          avg_time: time,
          tests_count: 1,
          rating: Math.max(0, 50 + ratingChange), // стартуємо з 50 + зміна
        };
        await saveResults(userId, newResults);
        return;
      }

      const { avg_score, avg_time, tests_count, rating } = previousResults
        .data[0] as {
        avg_score: number;
        avg_time: number;
        tests_count: number;
        rating: number;
      };

      const newTestsCount = tests_count + 1;
      const newAvgScore = (avg_score * tests_count + score) / newTestsCount;
      const newAvgTime = (avg_time * tests_count + time) / newTestsCount;
      const newRating = Math.max(0, rating + ratingChange);

      const newResults = {
        avg_score: Math.round(newAvgScore),
        avg_time: Math.round(newAvgTime),
        tests_count: newTestsCount,
        rating: newRating,
      };

      await saveResults(userId, newResults);
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };

  return { status, error, processResults };
};
