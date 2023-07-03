/*
 * @Author: Mx
 * @Date: 2023-07-03 21:23:03
 * @Description: 
 */
const router = require("koa-router")()
const login_controller = require('../controllers/login_controller')

router.prefix('/api')

const routers = router
 .post("/user/login",login_controller.login)

 module.exports = routers
