/*
 * @Author: Mx
 * @Date: 2023-07-04 10:26:48
 * @Description: 
 */
const jwt = require('jsonwebtoken')
const config = require('../config')

function sign(data,time){
    if(typeof(data) == 'object'){
        data = {...data} // 重新解析一遍
    }
    if(!time){
        time = config.jwt.jwt_expire
    }
    return jwt.sign(data,config.jwt.jwt_secret,{expiresIn:time})
}
module.exports = {
    sign,
}