/*
 * @Author: Mx
 * @Date: 2023-07-03 21:23:03
 * @Description:
 */
const router = require('koa-router')();
const login_controller = require('../controllers/login_controller');
const authMiddleware = require('../middleware/authMiddleware');

router.prefix('/api');

router.post('/user/login', login_controller.login);

router.use(authMiddleware); // 以下接口是需要登录校验判断才可访问的

router.get('/user/info', login_controller.findOneGetInfo);

module.exports = router;
