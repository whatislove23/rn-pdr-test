import { useState } from 'react';
import { authModule } from '../api';
import { FetchState } from '../../../types';

export const useVerifyOtp = () => {
  const [status, setState] = useState<FetchState>('idle');
  const [error, setError] = useState<string>();

  const verifyOtp = async (email: string, token: string) => {
    try {
      setState('loading');
      setError(undefined);
      const { data: response, error: responseError } =
        await authModule.postVerifyOtp(email, token);
      if (response.user !== null && !responseError) {
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
  return { status, error, verifyOtp };
};
