import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '@/services/auth-api';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/auth', { replace: true });
    },
  });

  return { isLoading, logout };
}
