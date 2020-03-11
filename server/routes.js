const CompanyRouter = require('./routes/CompanyRouter');
const MemberRouter = require('./routes/MemberRouter');

function routes(app) {
  app.use('/api/v1/freeCompany', CompanyRouter);
  app.use('/api/v1/member', MemberRouter);
}

module.exports = routes;
