import { supabase } from '../../../api';

export const authModule = {
  postRegister: async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    });
    return { data, error };
  },

  postVerifyOtp: async (email: string, token: string) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    return { data, error };
  },
};
