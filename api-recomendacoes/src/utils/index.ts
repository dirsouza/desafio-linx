export enum Ranking {
  mostpopular = 'mostpopular',
  pricereduction = 'pricereduction',
}

export enum Format {
  complete = 'complete',
  compact = 'compact',
}

export const parseToInt = (num: any): number => parseInt(num, 10);
