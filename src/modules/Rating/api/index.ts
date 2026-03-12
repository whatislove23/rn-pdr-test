import { supabase } from '../../../api';

export const ratingApiModule = {
  getRating: async (limit = 100) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('rating', { ascending: false })
      .limit(limit);
    return { data, error };
  },
};
