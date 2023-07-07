/*
 * @Author: Mx
 * @Date: 2023-07-04 10:26:48
 * @Description:
 */
const jwt = require('jsonwebtoken');
const config = require('../config');

function sign(data, time) {
  if (typeof data === 'object') {
    data = { ...data }; // 重新解析一遍
  }
  if (!time) {
    time = config.jwt.jwt_expire;
  }
  return jwt.sign(data, config.jwt.jwt_secret, { expiresIn: time });
}
function verify(token) {
  try {
    const decoded = jwt.verify(token, config.jwt.jwt_secret);
    return {
      admin: decoded,
      error: null,
    };
  } catch (err) {
    return {
      admin: null,
      error: err,
    };
  }
}
module.exports = {
  sign,
  verify,
};
