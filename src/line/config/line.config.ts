import * as dotenv from 'dotenv';
import * as line from '@line/bot-sdk';
dotenv.config();

export const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);

export default client;
