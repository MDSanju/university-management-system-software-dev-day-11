import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users/', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully!');
});

// app.get('/test-error', (req: Request, res: Response) => {
//   console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

export default app;
