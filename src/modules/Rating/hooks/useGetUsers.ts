import { ratingApiModule } from '../api';
import { FetchState } from '../../../types';
import { useState } from 'react';

export const useGetUsers = () => {
  const [status, setState] = useState<FetchState>('idle');

  const [error, setError] = useState<string>();

  const [users, setUsers] = useState<
    {
      user_id: string;
      rating: number;
      name: string;
      surname: string;
    }[]
  >([]);

  const getUsers = async () => {
    try {
      setState('loading');
      setError(undefined);
      const { data: response, error: responseError } =
        await ratingApiModule.getRating();
      if (response && !responseError) {
        setUsers(response);
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

  return { status, error, getUsers, users };
};
