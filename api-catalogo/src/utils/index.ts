import * as cliProgress from 'cli-progress';
import * as color from 'colors';

export enum Format {
  complete = 'complete',
  compact = 'compact'
}

enum TypeDB {
  mysql = 'mysql',
  postgres = 'postgres',
}
export const parseToInt = (num: any) => parseInt(num, 10);
export const parseTypeDB = (db: string) => TypeDB[db];
export const progressBar = () => {
  return new cliProgress.SingleBar({
    format: 'Progress |' + color.cyan('{bar}') + '| {percentage}% || {value}/{total} || ETA: {eta}s',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
    clearOnComplete: true
  }, cliProgress.Presets.shades_classic);
};
