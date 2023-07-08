import { rest } from 'msw';
import { TradePostResponse } from '../data/tradepost';
import {TradeStatusType} from '../../types/tradePost';

export const tradePostAPI = [
  rest.get(`/tradeposts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(0), ctx.json(TradePostResponse));
  }),

  rest.get(`/tradepost`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(0), ctx.json(
      {
        postId: 1,
        title: 'pc 본체 팝니다',
        desc: '그래픽카드 3060\n' +
          'cpu. 11400f (i5)\n' +
          '메모리. 16g\n' +
          '노하드\n' +
          '\n' +
          '1년 사용이고\n' +
          '채굴따윈 한적없습니다\n' +
          '확인 테스트 충분히 하실수있고\n' +
          '보호비닐도 뜯지않은\n' +
          '케이스도 세련된\n' +
          '새제품 같은 컨디션 입니다\n' +
          '40대 보유중',
        price: 5000,
        likeCount: 60,
        isLiked: false,
        isOwner: false,
        seller: {
          id: 5,
          email: 'test@naver.com',
          username: 'testUser',
          location: '서울특별시 관악구 신림동',
          temperature: 36.5,
          imgUrl: null,
          roomUUID: '1234567',
        },
        buyer: null,
        createdAt: new Date('07 01 2023'),
        modifiedAt: new Date('07 01 2023'),
        reservationCount: 1,
        tradeStatus: TradeStatusType.RESERVATION,
        viewCount: 758,
        otherPosts: [],
        imageUrls: [
          'https://dnvefa72aowie.cloudfront.net/origin/article/202307/70592967d80de12517f078795249db2e7076d10dc9c09cb11ef16ab32a164c21_0.webp?q=95&s=1440x1440&t=inside&f=webp',
          'https://dnvefa72aowie.cloudfront.net/origin/article/202307/4acbdef67d8494eda12f4b75e2c56c545faf6a6baf6ad28775cdb534d23298e9_2.webp?q=95&s=1440x1440&t=inside&f=webp'
        ],
        reviews: [],
      },
    ));
  }),
];
