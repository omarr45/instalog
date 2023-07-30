import * as dotenv from 'dotenv';

import cors from 'cors';
import { eventRouter } from './event/event.router';
import express from 'express';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/events', eventRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to InstaLog!' });
});
