import { FC, useEffect, useState, useRef, useCallback } from 'react';
import { Image, View, FlatList, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { APP_ROUTES } from '../../../../constants';

import { useGetTest } from '../../hooks/useGetTest';

import { PageItem } from '../PageItem';

import { Title } from '../../../../components/Title';
import { TextCard } from '../../../../components/TextCard';
import { Button } from '../../../../components/Button';
import { Loader } from '../../../../components/Loader';

export interface TestPageProps {}
export const TestPage: FC<TestPageProps> = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const listReference = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const { test, status, getTest } = useGetTest();

  const [currentAnswer, setCurrentAnswer] = useState<{
    questionId: number;
    answerId: number;
    isCorrect: boolean;
    page: number;
  } | null>(null);

  const [answers, setAnswers] = useState<
    {
      questionId: number;
      answerId: number;
      isCorrect: boolean;
      page: number;
    }[]
  >([]);

  useEffect(() => {
    getTest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMinutesString = useCallback(() => {
    const minutes = Math.floor(seconds / 60);
    const secondsString = seconds % 60;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    return `${minutesString}:${
      secondsString < 10 ? `0${secondsString}` : secondsString
    }`;
  }, [seconds]);

  const handleNavigateToResults = useCallback(
    (variant: 'success' | 'error') => {
      //@ts-ignore
      navigation.navigate(APP_ROUTES.RESULTS, {
        score: answers.filter((item) => item.isCorrect).length,
        time: getMinutesString(),
        variant: variant,
        seconds,
      });
      clearInterval(interval.current as NodeJS.Timeout);
    },
    [answers, getMinutesString, navigation, seconds]
  );

  useEffect(() => {
    const wrongAnswers = answers.filter((item) => !item.isCorrect).length;
    if (wrongAnswers >= 2) {
      handleNavigateToResults('error');
    }
    if (answers.length === test?.length) {
      handleNavigateToResults('success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  useEffect(() => {
    if (status === 'success') {
      interval.current = setInterval(() => {
        setSeconds((previous) => previous + 1);
      }, 1000);
      return () => {
        if (interval.current !== null) {
          clearInterval(interval.current);
        }
      };
    }
  }, [status]);

  useEffect(() => {
    if (seconds >= 20 * 60) {
      handleNavigateToResults('error');
    }
  }, [seconds, handleNavigateToResults]);

  useEffect(() => {
    if (listReference.current && status === 'success') {
      listReference.current.scrollToIndex({ index: currentPage });
    }
  }, [currentPage, status]);

  const handleCheckAnswer = (
    questionId: number,
    answerId: number,
    isCorrect: boolean
  ) => setCurrentAnswer({ questionId, answerId, isCorrect, page: currentPage });

  const handleSendAnswer = () => {
    if (!currentAnswer) {
      return;
    }
    setAnswers((previous) => [...previous, currentAnswer]);
    setCurrentAnswer(null);
  };

  const handleBack = () => setCurrentPage((previous) => previous - 1);

  const handleNext = () => {
    setCurrentPage((previous) => {
      const updatedPage = previous + 1;
      if (updatedPage !== test?.length) {
        return updatedPage;
      }
      return previous;
    });
  };

  const getAnswerVariant = (questionId: number, answerId: number) => {
    const userAnswer = answers.find((item) => item.questionId === questionId);
    const originalAnswer = test?.[currentPage].testAnswer.find(
      (item) => item.id === answerId
    );
    if (currentAnswer?.answerId === answerId) {
      return 'checked';
    }
    if (!userAnswer) {
      return 'unchecked';
    }
    if (!userAnswer.isCorrect && originalAnswer?.isCorrect) {
      return 'success';
    }
    if (
      userAnswer.questionId === questionId &&
      userAnswer.answerId === answerId
    ) {
      return userAnswer.isCorrect ? 'success' : 'error';
    }
    return 'secondary';
  };

  const getItemVariant = (index: number) => {
    const answer = answers.find((item) => item.page === index);
    if (index === currentPage && !answer) {
      return 'current';
    }
    if (!answer) {
      return 'default';
    }
    return answer.isCorrect ? 'success' : 'error';
  };

  return (
    <View style={styles.root}>
      {status === 'loading' ? (
        <View style={styles.loaderWrapper}>
          <Loader />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Title
              styles={styles.title}
            >{`${getMinutesString()} / 20 хв`}</Title>
            <View style={styles.listWrapper}>
              <FlatList
                horizontal
                data={test}
                ref={listReference}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ index }) => (
                  <View style={styles.listItem}>
                    <PageItem
                      number={index + 1}
                      variant={getItemVariant(index)}
                      onPress={() => setCurrentPage(index)}
                    />
                  </View>
                )}
              />
            </View>
          </View>
          {test && test[currentPage].imageUrl && (
            <Image
              style={styles.image}
              source={{
                uri: test[currentPage].imageUrl,
              }}
            />
          )}
          {test && (
            <Text style={styles.question}>{test[currentPage].question}</Text>
          )}
          {test && (
            <FlatList
              data={test[currentPage].testAnswer}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.answerItemWrapper}
                  onPress={() =>
                    answers.find((answer) => answer.page === currentPage)
                      ? null
                      : handleCheckAnswer(
                          test[currentPage].id,
                          item.id,
                          item.isCorrect
                        )
                  }
                >
                  <TextCard
                    text={item.answer}
                    variant={getAnswerVariant(test[currentPage].id, item.id)}
                  />
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
          <View style={styles.buttonWrapper}>
            {currentPage > 0 && <Button text="Назад" onPress={handleBack} />}
            <Button
              text={
                answers.find((item) => item.page === currentPage)
                  ? 'Далі'
                  : 'Надіслати'
              }
              variant="primary"
              onPress={!currentAnswer ? handleNext : handleSendAnswer}
              disabled={
                answers.find((item) => item.page === currentPage)
                  ? false
                  : !currentAnswer
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};
