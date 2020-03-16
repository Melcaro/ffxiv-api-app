const CompanyRouter = require('./routes/CompanyRouter');
const MemberRouter = require('./routes/MemberRouter');
const ItemsRouter = require('./routes/ItemsRouter');

function routes(app) {
  app.use('/api/v1/freeCompany', CompanyRouter);
  app.use('/api/v1/member', MemberRouter);
  app.use('/api/v1/item', ItemsRouter);
}

module.exports = routes;
