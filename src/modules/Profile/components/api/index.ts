import { supabase } from '../../../../api';

export const profileApiModule = {
  updateProfile: async (data: {
    name: string;
    surname: string;
    id: string;
  }) => {
    if (!data.id) {
      return { error: 'No user id' };
    }
    const payload = {
      user_id: data.id,
    } as { [key: string]: string };
    if (data.name) {
      payload.name = data.name;
    }
    if (data.surname) {
      payload.surname = data.surname;
    }
    return await supabase.from('users').upsert(payload);
  },
};
