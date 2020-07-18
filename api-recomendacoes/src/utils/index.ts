enum TypeDB {
  mysql = 'mysql',
  postgres = 'postgres',
}
export const parseToInt = (num: any): number => parseInt(num, 10);
export const parseTypeDB = (db: string): TypeDB => TypeDB[db];
