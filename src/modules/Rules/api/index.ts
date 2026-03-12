import { supabase } from '../../../api';

export const rulesApiModule = {
  getRules: async () => {
    return await supabase.from('rules').select('*');
  },
};
