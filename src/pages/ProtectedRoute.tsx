import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/features/authentication/useUser';
import Loader from '@/components/ui/loader';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, companySet, isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate('/auth');
      if (!isLoading && isAuthenticated && !companySet) navigate('/company');
    },
    [isAuthenticated, isLoading, navigate, companySet]
  );

  if (isLoading) return <Loader />;
  if (isAuthenticated) return children;
}
