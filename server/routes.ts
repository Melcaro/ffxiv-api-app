import express from 'express';
import CompanyRouter from './routes/CompanyRouter';
import MemberRouter from './routes/MemberRouter';

export function routes(app: express.Application) {
  app.use('/api/v1/freeCompany', CompanyRouter);
  app.use('/api/v1/member', MemberRouter);
}
