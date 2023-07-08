import {SearchScope} from '../../types/users';

export const mockUserMe = {
  id: 7,
  username: 'lerrybe',
  email: 'kyewl97@snu.ac.kr',
  location: '서울 관악구 봉천동 867-9',
  temperature: 38.5,
  img: 'https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('1 1 2023'),
};

export const mockModifiedUserMe = {
  id: 7,
  username: 'modifiedLerry',
  email: 'kyewl97@snu.ac.kr',
  location: '서울 관악구 봉천동 867-9',
  temperature: 38.5,
  img: 'https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('1 1 2023'),
};



export const User1 = {
  id: 1,
  username: '테스트유저',
  email: 'kyewl97@snu.ac.kr',
  location: '서울특별시 관악구 신림동',
  temperature: 55.2,
  imgUrl: 'https://avatars.githubusercontent.com/u/71599639?v=4',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('12 31 2022'),
  searchScope: SearchScope.WIDE,
};

export const User2 = {
  id: 2,
  username: '게임왕',
  email: 'kjhoon0330@snu.ac.kr',
  location: '서울특별시 관악구 청룡동',
  temperature: 40.7,
  imgUrl: 'https://avatars.githubusercontent.com/u/72662822?v=4',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('12 31 2022'),
  searchScope: SearchScope.WIDE,
};

export const User3 = {
  id: 3,
  username: '키보드사냥꾼',
  email: 'kyewl97@snu.ac.kr',
  location: '서울특별시 관악구 신림동',
  temperature: 39.5,
  imgUrl: 'https://st3.depositphotos.com/1001599/12874/v/450/depositphotos_128740646-stock-illustration-hunter-ready-to-hunt-with.jpg',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('12 31 2022'),
  searchScope: SearchScope.WIDE,
};

export const User4 = {
  id: 4,
  username: 'daangni',
  email: 'lerry597@naver.com',
  location: '경기도 용인시 수지구 성복동 760',
  temperature: 35.5,
  imgUrl: 'https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg',
  createdAt: new Date('12 31 2022'),
  updatedAt: new Date('1 1 2023'),
  searchScope: SearchScope.WIDE,
};
