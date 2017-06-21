/**
 * Created by yanxlg on 2017/6/16 0016.
 * 登入页面脚本,缓存
 */
import Star from '../package/widget/star/star-effect.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import fetch from './fetch.es6';
import user from './user.es6';
class Login{
    static build(){
        if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)){
            Star.instance();//for PC background
        }
        FastClick.attach(document.body);
        $("body").on("focus","input",function () {
            $(".login-card").addClass("focus");
            $(this).parent(".input-box").addClass("focus");
        });
        $("body").on("blur","input",function () {
            $(".login-card").removeClass("focus");
            $(this).parent(".input-box").removeClass("focus");
        });
        $("body").on("click","#login",function () {
            let userName=$("#userName").val();
            let password=$("#password").val();
            if(!userName){
                dialog({
                    title:"输入提示",
                    content:"请输入用户名",
                    modal:false
                }).then(function(){
                    this.close();
                });
            }else if(!password){
                dialog({
                    title:"输入提示",
                    content:"请输入密码",
                    modal:false
                }).then(function(){
                    this.close();
                });
            }else{
                if($("#saveUser")[0].checked){
                    user.cacheLogin();
                }else{
                    user.removeCache();
                }
                fetch("/api/LoginApi/Login",{
                    UserName:userName,
                    Password:password
                }).then(res=>{
                    if(!res.ok){
                        alert(res.msg);
                    }else{
                        user.setInfo(res.data);
                    }
                });
            }
        })
    }
    static getUserInfo(){
        let _user=user.getInfo();
        if(_user&&user.isCached()){
            $("#userName").val(_user.User.UserName);
            $("#password").val(_user.User.Password);
        }
    }
    static instance(){
        this.build();
        this.getUserInfo();
    }
}
Login.instance();