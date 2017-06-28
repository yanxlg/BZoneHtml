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
import Navigator from './navigator.es6';
class Index{
    static checkLogin(){
        if(!user.getToken()){
            location.replace("./login.html");
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
                }
            })
        });
    }
}

Index.init();