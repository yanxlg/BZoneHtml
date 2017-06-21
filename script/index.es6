/**
 * Created by yanxlg on 2017/6/21 0021.
 * 懂老板后台管理主界面
 * 登入检查
 * 菜单配置
 */
import user from './user.es6';
import NavMenu from '../package/plugin/navmenu/navmenu.es6';
import myCenter from '../artTemplate/myCenter.art';
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
        this.nav=new NavMenu(menuList).then((data)=>{
            alert(data);
        });
    }
    static importMyCenter(){
        //注入个人中心模块  需要监听窗口改变事件
        let userCenter=$(myCenter({}));
        $(".nav.nav-left").prepend(userCenter).addClass("nav-left-animation");
    }
}

Index.init();