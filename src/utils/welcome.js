import chalk from 'chalk';

export default (appName, urls) => {
  console.log();
  console.log(`${chalk.bold(appName)} is started.`);
  console.log();

  console.log(`  Local:    ${chalk.cyan(urls.localUrlForTerminal)}`);
  console.log(`  Network:  ${chalk.cyan(urls.lanUrlForTerminal)}`);

  console.log();
};
