/*
 * @Author: Mx
 * @Date: 2023-07-03 21:25:13
 * @Description: 
 */
const dbUtils = require('./../utils/db-util')

const user = {
    /**
     * 查询message表所有数据
     */
  async login(params){
    //1 查看该账户是否存在 A存在,验证密码 B 不存在 返回不存在
    let _sql1 = `
    select * from sys_user WHERE username = '${params.username}' AND password = '${params.password}'`
    let mes1 = await dbUtils.query(_sql1)
    return mes1
  },
}

module.exports = user