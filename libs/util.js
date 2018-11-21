module.exports={
    checkLogin(req,res,next){
        if(req.session.isLogin){
            return next();
        }
        res.redirect("/admin/login");
    },
    isLogin(req,res,next){
        if(! req.session.isLogin){
            return next();
        }
        res.redirect('/admin/main');
    }
}