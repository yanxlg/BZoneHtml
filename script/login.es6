/**
 * Created by yanxlg on 2017/6/16 0016.
 * 登入页面脚本,缓存
 */
import Star from '../package/widget/star/star-effect.es6';
import {store} from '../package/plugin/store/store.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
class Login{
    static build(){
        Star.instance();//for background
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
                    width:"200",
                    title:"输入提示",
                    content:"请输入用户名",
                    modal:false
                }).then(function(){
                    this.close();
                });
            }else if(!password){
                dialog({
                    width:"200",
                    title:"输入提示",
                    content:"请输入密码",
                    modal:false
                }).then(function(){
                    this.close();
                });
            }
        })
    }
    static getUserInfo(){
        let user=store.get("_user");
        if(user){
            user=JSON.parse(user);
            $("#userName").val(user.userName);
            $("#password").val(user.password);
        }
    }
    static instance(){
        this.build();
        this.getUserInfo();
    }
}
Login.instance();