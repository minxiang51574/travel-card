const Koa = require('koa');

const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(`${__dirname}/public`));

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*") // 允许跨域访问
  ctx.set("Access-Control-Allow-Headers", "authorization,content-type,token,identify") // 允许自定义头跨域访问
  await next()
})

app.use(
  views(`${__dirname}/views`, {
    extension: 'ejs',
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
const routers = require('./routes/login');
const users = require('./routes/users')

app.use(routers.routes(), routers.allowedMethods());
app.use(users.routes(), users.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
