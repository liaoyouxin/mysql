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
        console.info("数据库连接失败")
    }else{
        connection.query("insert into classInfo set ?",{cid:1004,cname:"YC25",status:1},function(err,result){
            if(err){
                console.info("班级信息添加失败");
            }else{
                console.info("班级信息添加成功");
                console.info(result);
                console.info(result.insertId); //获取刚才添加的那条数据d编号
            }
            connection.end();
        });
    }
})