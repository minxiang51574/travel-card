const login_service = require('../services/login_service')
const login = async(ctx) => {
    let params = ctx.request.body
    
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let LoginInfo = await login_service.login(params)
     if(LoginInfo.length){
        result.data = LoginInfo[0]
        result.success = true
     }else{
        result.message = "请输入正确的账号密码"
     }
     ctx.body = result
}
module.exports  = {
    login
   
}