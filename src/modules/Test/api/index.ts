import { supabase } from '../../../api';

export const testApiModule = {
  getTest: async (limit = 20) => {
    return await supabase.rpc('get_random_tests', { limit_count: limit });
  },
};
