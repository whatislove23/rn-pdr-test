import { useEffect, useState } from 'react';
import { supabase } from '../index';
import { User } from '@supabase/supabase-js';

export interface Profile {
  user_id: string;
  name: string | null;
  surname: string | null;
  avg_score: number;
  avg_time: number;
  tests_count: number;
  rating: number;
}
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const getProfile = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      const { data: profileData } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', data.session?.user.id)
        .single();
      setProfile(profileData);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        getProfile();
      }
      setUser(data.session?.user ?? null);
    };
    getUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => authListener?.subscription.unsubscribe();
  }, []);
  return { user, profile, getProfile };
}
