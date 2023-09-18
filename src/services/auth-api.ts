import { supabase } from '@/supabase/supabase';

type SignupProps = {
  email: string;
  password: string;
  fullName?: string;
};

export async function signup({ email, password, fullName }: SignupProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatarUrl: null,
        companyId: null,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: SignupProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error(sessionError.message);

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}
