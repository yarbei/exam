var mysql=require("../../libs/mysql");
class login {
    getUser(username,callback){
        mysql.query("select * from users where username=?",[username],function(err,result){
            if(err){
                callback(err,[])
            }else {
                callback(null,result);
            }
        })
    }
}
module.exports=new login();