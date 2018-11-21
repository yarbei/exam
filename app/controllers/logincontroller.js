var validate=require('../../libs/validate');
var {loginmodel}=require("../models");
class login{
    signin(req,res){
        res.render('admin/login')
    }
    checkLogin(req,res){
        if(! validate.isRequire(req.body.username)){
            res.json({code:404,msg:"账号不能为空"})
        }
        if(! validate.isRequire(req.body.password)){
            res.json({code:404,msg:"密码不能为空"})
        }
        var {username,password}=req.body;
        loginmodel.getUser(username,function(err,users){
            if(err){
                next(err);
            }else {
                if(users){
                    if(password==users[0].password){
                        req.session.isLogin=true;
                        res.json({code:200,msg:"登录成功",data:{url:"/admin/main"}})
                    }else {
                        res.json({code:404,msg:"密码错误"})
                    }
                }else {
                    res.json({code:404,msg:"账号错误"});
                }
            }
        })
    }
    loginout(req,res){
        req.session.destroy();
        res.redirect("/admin/login");
    }
}
module.exports=new login();