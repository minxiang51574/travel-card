const login_model = require('./../models/login_model')

const user = {
    async login(params){
     let loginData = await login_model.login(params) || {}
     return loginData
    },
    async findOneGetInfo(params){
        let loginData = await login_model.findOneGetInfo(params) || {}
        return loginData
        
      }

 }
 module.exports = user