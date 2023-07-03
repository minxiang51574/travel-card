const login_model = require('./../models/login_model')

const user = {
    async login(params){
     let loginData = await login_model.login(params) || {}
     return loginData
    },

 }
 module.exports = user