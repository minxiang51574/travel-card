/*
 * @Author: Mx
 * @Date: 2023-07-05 22:04:12
 * @Description:
 */
const { verify } = require('../utils/auth');
const response = require('../utils/response');

function authMiddleware(ctx, next) {
  const token = ctx.headers.authorization;
  if (token !== undefined && token !== '') {
    const { error, admin } = verify(token);
    if (error !== null) {
      logger.error(`登录错误${error.message}`);
      response.error(ctx, `登录过期请重新登录${error.message}`, '', 401);
    } else {
      console.log('获取登录信息如下')
      console.log(admin)
      console.log(admin)
      // console.log(admin._doc)  // 这个数据有点扯淡了一下载 admin._doc 一下子admin
      let userInfo = '';
      if (admin._doc) {
        // console.log('新增用户')
        userInfo = admin._doc;
      } else {
        // console.log('老用户')
        userInfo = admin;
      }
      // console.log(userInfo)
      ctx.userInfo = userInfo; // 直接将用户信息挂上去  admin._doc改为admin mongoose让返回的数据可以修改之后，这里的结构也修改了，注意。
      return next();
    }
  } else {
    response.error(ctx, 'token不能为空', '', 401);
  }
}
module.exports = authMiddleware;
