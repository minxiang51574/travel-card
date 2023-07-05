const login_service = require('../services/login_service');
const response = require('../utils/response')
const {
    sign,
} = require('../utils/auth')

const login = async (ctx) => {
  const params = ctx.request.body;
  const { password } = params;
  // 校验用户
  const user = await login_service.login(params);
  let result
  if (user) {
    if (user[0].password === password) {
      const token = sign(user[0]);
      result = token;
    }
  } else {
    response.error(ctx, '账户或密码不正确')
  }
  response.success(ctx, result)
};

const findOneGetInfo = async (ctx) => {
  console.log('ctx',ctx);

  const user = await login_service.findOneGetInfo(ctx.userInfo);
  console.log('user',user);
  
  
}
module.exports = {
  login,
  findOneGetInfo
};
