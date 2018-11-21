var express = require('express');
var {checkLogin,isLogin}=require('../libs/util');
var router = express.Router();

var {login,admin}=require("../app/controllers");

/* 登录 */
router.route("/login")
.get(isLogin,login.signin)
.post(login.checkLogin)
/* 退出登录 */
router.get("/loginout",login.loginout)
/* 主页 */
router.get('/main',checkLogin,admin.main)

module.exports = router;
