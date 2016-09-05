/**
 * Created by 友新 on 2016/9/5.
 */
var mysql=require("mysql");

var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:'stusys',
    user:'root',
    password:'liao3826'
});

//
connection.connect(function(err){
    if(err){
        console.info("mysql连接失败");
    }else {
        console.info("mysql连接成功");
        connection.end(function(err){
            if(err){
                console.info("mysql关闭失败");
            }else {
                console.info("mysql关闭成功");
            }
        });

    }
});