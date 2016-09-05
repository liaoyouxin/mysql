/**
 * Created by 友新 on 2016/9/5.
 */
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    database:"stusys",
    user:"root",
    password:"liao3826"
});

connection.connect(function(err){
    if(err){
        console.info("数据库连接失败");
    }else{
        connection.query("select * from classInfo",function(err,result){
            if(err){
                console.info("班级信息查询失败");
            }else {
                console.info(result);
                connection.end();
            }
        })
    }
})