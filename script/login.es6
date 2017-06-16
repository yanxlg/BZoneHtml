/**
 * Created by yanxlg on 2017/6/16 0016.
 * 登入页面脚本
 */
import Star from '../package/widget/star/star-effect.es6';
class Login{
    static build(){
        Star.instance();//for background
        $("body").on("focus","input",function () {
            $(".login-card").addClass("focus");
        });
        $("body").on("blur","input",function () {
            $(".login-card").removeClass("focus");
        });
    }
    static instance(){
        this.build();
    }
}
Login.instance();