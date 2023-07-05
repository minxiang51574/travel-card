/*
 * @Author: Mx
 * @Date: 2023-07-04 09:34:28
 * @Description: 
 */
const config = {
    port:3031,
    database:{
        DATABASE: 'travel_card',  //库
        USERNAME: 'root',
        PASSWORD: 'Mx515520.',
        PORT: '3306',
        HOST: '114.132.248.143'
    },
    jwt:{
        jwt_secret:"546143220@qq.com",
        jwt_expire:"7d"
    },
}
module.exports = config