import { rest } from 'msw';
import { User1, User2, User3, User4, mockModifiedUserMe } from '../data/users';

export const usersAPI = [
  rest.get(`/users/me`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(3000), ctx.json(User1));
  }),

  rest.get(`/users/:id`, (req, res, ctx) => {
    const userId = Number(req.params.id);
    if (userId === 1) {
      return res(ctx.status(200), ctx.delay(0), ctx.json(User1));
    } else if (userId === 2) {
      return res(ctx.status(200), ctx.delay(0), ctx.json(User2));
    } else if (userId === 3) {
      return res(ctx.status(200), ctx.delay(0), ctx.json(User3));
    } else if (userId === 4) {
      return res(ctx.status(200), ctx.delay(0), ctx.json(User4));
    }
  }),

  rest.patch(`/users/me`, (req, res, ctx) => {
    // CASE 1: 액세스 토큰 없는 경우, code - 401
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.delay(3000));
    }
    // CASE 2: 정상 케이스
    return res(ctx.status(200), ctx.delay(3000), ctx.json(mockModifiedUserMe));
  }),

  rest.put(`/users/me/password`, (req, res, ctx) => {
    // CASE 1: 액세스 토큰 없는 경우, code - 401
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.delay(3000));
    }
    // CASE 2: 정상 케이스
    return res(ctx.status(200), ctx.delay(0));
  }),

  rest.get(`/tradepost/warmest-people`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(0), ctx.json([
      User1, User2, User3
    ]));
  }),
];
