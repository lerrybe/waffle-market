import {lazy, Suspense} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import SignUpPage from '../pages/signup';
import LoginPage from '../pages/login';
import KaKaoLogin from '../pages/login/kakao';
import GoogleLoginPage from '../pages/login/google';

import ProfilePage from '../pages/profile';
import ProfileOtherPage from '../pages/profile-other';
const MarketPage = lazy(() => import('../pages/market'));
import TradePostPage from '../pages/trade-post';
import ChatPage from '../pages/chat';

const SendReview = lazy(() => import('../pages/sendReview'));
const MyReviewPage = lazy(() => import('../pages/my-review'));
const OthersReviewPage = lazy(() => import('../pages/others-review'));
const NeighborhoodLanding = lazy(() => import('../pages/neighborhoodLanding'));
const NeighborhoodPostPage = lazy(() => import('../pages/neighborhoodPost'));
const SellHistoryMyPage = lazy(() => import('../pages/sell-history-my'));
const SellHistoryOthersPage = lazy(() => import('../pages/sell-history-others'));
const BuyHistoryPage = lazy(() => import('../pages/buy-history'));
const LikeHistoryPage = lazy(() => import('../pages/like-history'));
const NeighborHistoryPage = lazy(() => import('../pages/neighbor-history'));
const NeighborHistoryLikePage = lazy(() => import('../pages/neighbor-like-history'));

// DESC: 라우팅 관리를 위한 EntryRoute
function EntryRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/login/kakao" element={<KaKaoLogin />} />
          <Route path="/login/google" element={<GoogleLoginPage />} />
          {/*<Route element={<PrivateRoute minGrade={0} authentication />}>*/}
            <Route path="/profile/me" element={<ProfilePage />} />
          {/*</Route>*/}
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/me/review" element={<MyReviewPage />} />
          </Route>
          {/*<Route element={<PrivateRoute minGrade={0} authentication />}>*/}
          <Route path="/profile/:id" element={<ProfileOtherPage />} />
          {/*</Route>*/}
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/:id/review" element={<OthersReviewPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/me/sell" element={<SellHistoryMyPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/:id/sell" element={<SellHistoryOthersPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/me/buy" element={<BuyHistoryPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/profile/me/like" element={<LikeHistoryPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route
              path="/profile/me/neighborhood"
              element={<NeighborHistoryPage />}
            />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route
              path="/profile/me/neighborhoodlike"
              element={<NeighborHistoryLikePage />}
            />
          </Route>
          {/*<Route element={<PrivateRoute minGrade={0} authentication />}>*/}
            <Route path="/market" element={<MarketPage />} />
          {/*</Route>*/}
          {/*<Route element={<PrivateRoute minGrade={0} authentication />}>*/}
            <Route path="/tradepost/:id" element={<TradePostPage />} />
          {/*</Route>*/}
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/tradepost/:id/review" element={<SendReview />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/chat/messages/:UUID/:uid/:pid" element={<ChatPage />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/neighborhood" element={<NeighborhoodLanding />} />
          </Route>
          <Route element={<PrivateRoute minGrade={0} authentication />}>
            <Route path="/neighborhood/:id" element={<NeighborhoodPostPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default EntryRoute;
