import superagent from 'superagent';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

import config from '../config';
import { bing, whitelist } from './config';
import {
  randomNumber,
  prepareUrls,
  welcome,
  log,
} from './utils';


const { PORT } = process.env;
if (!PORT) {
  throw new Error(
    chalk.red('The server `PORT` is required but was not specified.')
  );
}


const urls = prepareUrls(
  config.serverProtocol,
  config.serverHost,
  config.serverPort,
);
const options = whitelist(urls);

const app = express();

app.use(cors({ origin: options }));

app.all('*', (req, res, next) => {
  res.set({ 'Content-Type': 'application/json; charset=utf-8' });

  if (!res.get('Access-Control-Allow-Origin')) {
    return res.status(401).send({ msg: 'CORS is not allowed.' });
  }

  next();
});

app.get('/', (req, res, next) => {
  const { base, route, query } = bing;
  const idx = randomNumber({ min: 0, max: 6 });

  const reqTime = new Date();
  const nc = reqTime.getTime();

  superagent
    .get(`${base}${route}`)
    .query({ ...query, idx, nc })
    .on('end', () => log(reqTime))
    .then((result, error) => {
      const data = result.body;
      const tips = data.tooltips.walls;
      let { copyright, url } = data.images[0];

      if (!/^(http(s)?:)?\/\/.*$/.test(url)) {
        url = `${base}${url}`;
      }

      const time = new Date().toISOString();
      res.send({ tips, copyright, url, time });
    });
});

app.listen(PORT, () => welcome(config.appName, urls));
