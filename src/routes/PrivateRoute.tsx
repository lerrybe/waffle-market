import { ReactElement } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { GradeScope } from '../types/users';
import { useAppSelector } from '../store/hooks';
import { normalToast } from '../utils/basic-toast-modal';
import { authStrategy, getGradeNum } from './authStrategy';

import Spinner from '../components/spinner';

interface PrivateRouteProps {
  minGrade?: number;
  authentication: boolean;
}

export default function PrivateRoute({
  minGrade,
  authentication,
}: PrivateRouteProps): ReactElement | null {
  const navigate = useNavigate();
  const { isLoggedIn, sessionLoading } = useAuth();
  const { me } = useAppSelector(state => state.users);

  const isAuthed = authStrategy(
    minGrade || 0,
    getGradeNum(me?.grade || GradeScope.SILVER),
  );

  if (sessionLoading) {
    return <Spinner />;
  }

  if (!authentication && isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (authentication && !isLoggedIn) {
    normalToast('로그인이 필요합니다.');
    return (
      <>
        <Navigate to="/" />
        <Navigate to="/login" />
      </>
    );
  }

  if (authentication && isLoggedIn && !isAuthed) {
    normalToast('접근 권한이 없습니다.');
    navigate(-1);
  }

  return <Outlet />;
}
