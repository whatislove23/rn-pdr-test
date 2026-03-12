import { profileApiModule } from '../api';
import { FetchState } from '../../../../types/index';
import { useState } from 'react';

export const useUpdateProfile = () => {
  const [status, setState] = useState<FetchState>('idle');

  const [error, setError] = useState<string>();

  const updateProfile = async (data: {
    name: string;
    surname: string;
    id: string;
  }) => {
    try {
      setState('loading');
      setError(undefined);
      const { error: responseError } = await profileApiModule.updateProfile(
        data
      );
      console.log(responseError);
      if (!responseError) {
        setState('success');
        return;
      }
      if (typeof responseError === 'string') {
        setError(responseError);
      } else {
        setError(JSON.stringify(responseError));
      }
      setState('error');
    } catch (unhandledError) {
      setError(JSON.stringify(unhandledError));
      setState('error');
    }
  };

  return { status, error, updateProfile };
};
