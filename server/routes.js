import examplesRouter from './api/controllers/token/router';

export default function routes(app) {
  app.use('/contract/api/v1/token', examplesRouter);
}
