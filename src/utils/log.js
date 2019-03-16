import chalk from 'chalk';
import dateFormat from './dateFormat';

export default (b = new Date(), e = new Date()) => console.log(
`\
${chalk.cyan('request')} ${dateFormat(b)} \
${chalk.cyan('respose')} ${dateFormat(e)} \
${chalk.gray('=>')} \
${chalk.green(`${e.getTime() - b.getTime()}ms`)}\
`
);
