import { rulesApiModule } from '../api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FetchState } from '../../../types';
import { Rule } from '../types';

export const useGetRules = () => {
  const [status, setState] = useState<FetchState>('idle');
  const [error, setError] = useState<string>();
  const [rules, setRules] = useState<Rule[]>();

  const getRules = async () => {
    try {
      setState('loading');
      setError(undefined);
      const value = await AsyncStorage.getItem('rules');
      if (value) {
        setRules(JSON.parse(value));
        setState('success');
        return;
      }
      const response = await rulesApiModule.getRules();
      if (response.error) {
        setError(response.error.message);
        setState('error');
        return;
      }
      setState('success');
      await AsyncStorage.setItem('rules', JSON.stringify(response.data));
      setRules(response.data as Rule[]);
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };
  return { rules, status, error, getRules };
};
