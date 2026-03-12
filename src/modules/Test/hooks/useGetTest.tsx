import { testApiModule } from '../api';
import { useState } from 'react';
import { FetchState } from '../../../types';
import { TestType } from '../types';
export const useGetTest = () => {
  const [status, setState] = useState<FetchState>('idle');
  const [error, setError] = useState<string>();
  const [test, setTest] = useState<TestType[]>();
  const getTest = async () => {
    try {
      setState('loading');
      setError(undefined);
      const response = await testApiModule.getTest();
      if (response.error) {
        setError(response.error.message);
        setState('error');
        return;
      }
      setState('success');
      setTest(response.data as TestType[]);
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };
  return { test, status, error, getTest };
};
