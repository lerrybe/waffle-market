import { rest } from 'msw';
import { User1 } from '../data/users';

export const authAPI = [
  // DESC: 요청 method, 요쳥 주소, 요청 data, 응답 (status, delay, 응답받는 데이터 등) 설정 가능
  rest.get(`/auth/refresh`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(0), ctx.json({
      accessToken: '######',
      refreshToken: '$$$$$$',
      user: User1,
    }));
  }),

  // other...

];
