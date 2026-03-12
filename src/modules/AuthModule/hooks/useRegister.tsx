import { useState } from 'react';
import { authModule } from '../api';
import { FetchState } from '../../../types';

export const useRegister = () => {
  const [status, setState] = useState<FetchState>('idle');

  const [error, setError] = useState<string>();

  const register = async (email: string) => {
    try {
      setState('loading');
      setError(undefined);
      const { data: response, error: responseError } =
        await authModule.postRegister(email);
      if (response.user === null && !responseError) {
        setState('success');
        return;
      }
      if (responseError) {
        setError(responseError.message);
        setState('error');
        return;
      }
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };

  return { status, error, register };
};
