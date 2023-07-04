/*
 * @Author: Mx
 * @Date: 2023-07-04 09:34:28
 * @Description:
 */
const login_service = require('../services/login_service');
const {
    sign,
} = require('../utils/auth')

const login = async (ctx) => {
  const params = ctx.request.body;
  const { password } = params;
  const result = {
    success: false,
    message: '',
    data: null,
  };
  // 校验用户
  const user = await login_service.login(params);
  if (user) {
    if (user.password === password) {
      const token = sign(result);
      result.data = token;
      result.success = true;
    }
  } else {
    result.message = '账户或密码不正确~';
  }
  ctx.body = result;
};
module.exports = {
  login,
};
