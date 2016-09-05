/**
 * Created by 友新 on 2016/9/5.
 */
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"liao3826",
    multipleStatements:true

});

exports.conn=connection;
