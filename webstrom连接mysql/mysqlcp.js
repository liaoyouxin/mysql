/**
 * Created by 友新 on 2016/9/5.
 */
var connection=require("./connection").conn;

connection.connect(function(err){
    if(err){
        console.info("连接失败");
    }else{
        insertData();
    }
})

function insertData(){
    //一次性添加多条
    var sqlStr="";
    for(var i=1;i<=4;i++){
        sqlStr+="insert into stuInfo values(0,'画画_"+i+"',100"+i+",'男',"+(20+i)+",'aaa','1234567890"+i+"');";
    }
    console.info(sqlStr);
    connection.query(sqlStr,function(err,result){
        if(err){
            console.info("学生信息添加失败")
        }else{
            updateData();//如果成功则删除
        }
    });
}
function updateData(){
    connection.query("update stuInfo set sname=? where sid=?",['盼盼',10003],function(err,result){
        if(err){
            console.info("学生信息更新失败");
            console.end();
        }else{
            delData();
        }
    })
}



function delData(){
    connection.query("delete from stuInfo where sid=?",[10004],function(err,result){
        if(err){
            console.info("学生信息删除失败");
        }else{
            findData();
        }
    })
}

function findData(){
    connection.query("select * from stuInfo",function(err,result){
        if(err){
            console.info("学生信息查询失败");
            connection.end();
        }else {
            console.info(result);
            connection.end();
        }
    })
}