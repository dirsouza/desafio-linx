export enum Format {
  complete = 'complete',
  compact = 'compact',
}

enum TypeDB {
  mysql = 'mysql',
  postgres = 'postgres',
}
export const parseToInt = (num: any): number => parseInt(num, 10);
export const parseTypeDB = (db: string): TypeDB => TypeDB[db];
export const joinAliasWithName = (alias: string, names: string[]) => {
  const aliasNames: string[] = [];
  for (const name of names) {
    aliasNames.push(`${alias}.${name}`);
  }
  return aliasNames;
}
