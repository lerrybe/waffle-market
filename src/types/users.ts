import { Dispatch, SetStateAction } from 'react';

export type User = {
  id: number;
  username: string;
  email: string;
  location: string;
  temperature: number;
  imgUrl: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  searchScope?: SearchScope;
  grade?: GradeScope;
};

export enum GradeScope {
  ETC = 'etc',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

export enum SearchScope {
  NARROW = 'NARROW',
  NORMAL = 'NORMAL',
  WIDE = 'WIDE',
}

export type EditType = {
  img: boolean;
  username: boolean;
  password: boolean;
  location: boolean;
};

export type SetEditType = Dispatch<SetStateAction<EditType>>;
