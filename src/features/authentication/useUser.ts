import { getCurrentUser } from '@/services/auth-api';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isLoading, error, data } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ['user'],
  });

  return {
    isLoading,
    error,
    data,
    isAuthenticated: data?.role === 'authenticated',
    companySet: !!data?.user_metadata?.companyId,
  };
}
