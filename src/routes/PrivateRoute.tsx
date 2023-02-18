import { ReactElement } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { GradeScope } from '../types/users';
import { normalToast } from '../utils/basic-toast-modal';
import { authStrategy, getGradeNum } from './authStrategy';

import Spinner from '../components/spinner';

interface PrivateRouteProps {
  minGrade?: number;
  isAuthNeeded: boolean;
}

export default function PrivateRoute({
  minGrade,
  isAuthNeeded,
}: PrivateRouteProps): ReactElement | null {
  const navigate = useNavigate();
  const { me, isLoggedIn, sessionLoading } = useAuth();
  const isAuthed = authStrategy(
    minGrade || 0,
    getGradeNum(me?.grade || GradeScope.SILVER),
  );

  if (sessionLoading) {
    return <Spinner />;
  }

  if (!isAuthNeeded && isLoggedIn) {
    navigate('/');
  }

  if (isAuthNeeded && !isLoggedIn) {
    normalToast('로그인이 필요합니다.');
    return (
      <>
        <Navigate to="/" />
        <Navigate to="/login" />
      </>
    );
  }

  if (isAuthNeeded && isLoggedIn && !isAuthed) {
    normalToast('접근 권한이 없습니다.');
    navigate(-1);
  }

  return <Outlet />;
}
