import { GradeScope } from '../types/users';

export type GetGradeNum = (grade: GradeScope | 'etc') => number;
export type AuthStrategyType = (minGrade: number, grade?: number) => boolean;

export const getGradeNum: GetGradeNum = grade => {
  return gradeMap[grade];
};

export const authStrategy: AuthStrategyType = (minGrade, grade) => {
  return grade ? grade >= minGrade : false;
};

const gradeMap: { [key in GradeScope]: number } = {
  [GradeScope.ETC]: 0,
  [GradeScope.SILVER]: 1,
  [GradeScope.GOLD]: 2,
  [GradeScope.PLATINUM]: 3,
};
