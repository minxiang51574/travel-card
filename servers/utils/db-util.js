/*
 * @Author: Mx
 * @Date: 2023-07-03 21:25:25
 * @Description: 
 */
const allConfig = require("../config")
const config = allConfig.database
const mysql = require("mysql")

const pool = mysql.createPool({
  host     :  config.HOST, 
  user     : config.USERNAME,
  password : config.PASSWORD,
  database : config.DATABASE
})

let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}


let select = function( table, keys ) {
  let  _sql =  "select * from user "
  return query( _sql)
}
let gethome = function( table, keys ) {
  let  _sql =  "select * from user where user_id = 1"
  return query( _sql)
}
// let updateData = function( table, values, id ) {
//   let _sql = "UPDATE ?? SET ? WHERE id = ?"
//   return query( _sql, [ table, values, id ] )
// }

module.exports = {
  query,
  gethome,
  select

}
