/**
 * 基础请求成功值
 * @param {*} ctx 
 * @param {*} data 
 * @param {*} msg 
 * @param {*} code 
 */
 function success(ctx,data=[],msg = 'success',code = 200){ // 成功默认返回格式
    ctx.body = {
        code,
        msg,
        data
    }
}
/**
 * 基础错误信息格式
 * @param {*} ctx 
 * @param {*} msg 
 * @param {*} data 
 * @param {*} code 
 */
function error(ctx,msg = 'success',data=[],code = 1){ // 成功默认返回格式
    ctx.body = {
        code,
        msg,
        data
    }
}

module.exports = {
    success,
    error
}