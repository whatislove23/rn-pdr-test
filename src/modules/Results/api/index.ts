import { supabase } from '../../../api';

export const resultsApiModule = {
  getUserResults: async (userId: string) => {
    return await supabase.from('users').select('*').eq('user_id', userId);
  },

  upsertUserResults: async (
    userId: string,
    payload: {
      avg_score: number;
      avg_time: number;
      tests_count: number;
    }
  ) => {
    return await supabase.from('users').upsert({ user_id: userId, ...payload });
  },
};
