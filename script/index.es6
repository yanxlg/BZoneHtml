/**
 * Created by yanxlg on 2017/6/21 0021.
 * 懂老板后台管理主界面
 * 登入检查
 * 菜单配置
 * 如果是移动端则使用iframe嵌套，保留菜单，PC跳转到新页面去
 */
import user from './user.es6';
import NavMenu from '../package/plugin/navmenu/navmenu.es6';
import myCenter from '../artTemplate/myCenter.art';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import changePwd from '../artTemplate/changePwd.art';
import Navigator from './navigator.es6';
import fetch from './fetch.es6';
class Index{
    static checkLogin(){
        if(!user.getToken()){
            Navigator.toLogin();
            return -1;
        }
    }
    static init(){
        this.checkLogin();
        this.initMenu();
        this.importMyCenter();
        this.LoginOut();
    }
    static initMenu(){
        let menus=user.getInfo().ModuleInfo;
        //参数改造
        let menuList=[];
        menus.forEach(function (module) {
            if(module.ModuleInfo){
                let pMenu={
                    name:module.ModuleInfo.Module.ModuleName,
                    data:""
                },childMenus=[],childMenuMap=module.ModuleInfo.Menu;
                if(childMenuMap&&childMenuMap.length>0){
                    if(childMenuMap.length===1&&childMenuMap[0].MenuName===module.ModuleInfo.Module.ModuleName){
                        pMenu.data=childMenuMap[0];
                    }else{
                        childMenuMap.forEach(function (item) {
                            childMenus.push({
                                name:item.MenuName,
                                data:item
                            })
                        })
                    }
                }
                if(childMenus.length>0){
                    pMenu.childMenus=[{
                        menus:childMenus
                    }];
                }
                menuList.push(pMenu);
            }
        });
        let _this=this;
        this.nav=new NavMenu(menuList).then((data)=>{
            if(data==="change"){
                //Todo 窗口resize处理
                _this.importMyCenter();
            }else{
                //Todo 菜单点击事件处理
                let menuDate=JSON.parse(data);
                if(Navigator.isExist(menuDate.NavigateUrl)){
                    Navigator.open(menuDate.NavigateUrl);
                }else{
                    Navigator.open("angularCompute",menuDate.NavigateUrl);
                }
            }
        });
        $("body").on("click",".nav-top .user-name",function () {
            $(this).addClass("hover");
        })
    }
    static importMyCenter(){
        //注入个人中心模块 先后顺序进行控制 ==> fix top 存在两种nav的时候
        let userCenter=$(myCenter({
            userName:user.getInfo().User.UserName
        }));
        if($(".nav.nav-left").length>0){
            $(".nav.nav-left").prepend(userCenter).addClass("nav-animation");
        }else if($(".nav.nav-top").length>0){
            $(".nav.nav-top").prepend(userCenter).addClass("nav-animation");
        }else if($(".nav.nav-pop").length>0){
            $(".nav.nav-pop").prepend(userCenter).addClass("nav-animation");
        }
    }
    static LoginOut(){
        $("body").on("click",'[data-user-action="loginOut"]',function () {
            alert("退出当前登录用户？").then(function (option) {
                if(/\S+ok$/.test(option)){
                    //退出登录
                    Navigator.toLogin();
                }
            })
        });
        $("body").on("click",'[data-user-action="changePwd"]',function () {
            //修改密码
            dialog({
                title:"修改密码",
                content:changePwd({})
            }).then(function (btn) {
                let $$dialog=this;
                if(/\S+ok$/.test(btn)){
                    let old_pwd=$("#old_pwd").val();
                    let new_pwd=$("#new_pwd").val();
                    //验证必填
                    if(!old_pwd){
                        $("#old_pwd").addClass("validate-error");
                    }
                    if(!new_pwd){
                        $("#new_pwd").addClass("validate-error");
                    }
                    if(!old_pwd||!new_pwd) return -1;
                    if(old_pwd===new_pwd){
                        alert("新密码不能与旧密码一致");
                        return -1;
                    }
                    let localPwd=user.getPassword();
                    if(old_pwd!==localPwd){
                        alert("原密码输入错误，请重新输入");
                        return -1;
                    }
                    fetch("/api/ManageUserInfoApi/ModifyUserInfoPassword",{
                        NewPassword:new_pwd,
                        OldPassword:old_pwd,
                        UpdateUser:user.getUserID()
                    }).then(res=>{
                        if(res.ok){
                            user.setPassword(new_pwd);
                            alert("修改成功").then(function () {
                                this.close();
                                $$dialog.close();
                            });
                        }else{
                            alert(res.msg).then(function(btn){
                                if(btn==="operation_ok"){
                                    if(res.overdue){
                                        Navigator.toLogin();
                                        return -1;
                                    }
                                    this.close();
                                    $$dialog.close();
                                }
                            });
                        }
                    })
                }
            });
        });
        $("body").on("input",'#old_pwd',function () {
            if($(this).val()){
                $(this).removeClass("validate-error");
            }
        });
        $("body").on("input",'#new_pwd',function () {
            if($(this).val()){
                $(this).removeClass("validate-error");
            }
        });
    }
}

Index.init();