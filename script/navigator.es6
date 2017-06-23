/**
 * Created by yanxlg on 2017/6/22 0022.
 * 导航跳转
 * 规则：
 *      1. PC端和Pad 打开新浏览器标签
 *      2. Mobile iframe中切换
 *
 * detech 功能   设备嗅探
 */
import router from '../config/router.json';
class Navigator{
    static detech() {
        this.isMobile=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig);
        return this.isMobile;
    }
    static open(page){
        let url=router[page];
        if((typeof this.isMobile!=="undefined"&&this.isMobile)||(typeof this.isMobile==="undefined"&&this.detech())){
            //Todo mobile

        }else{
            // Todo PC
            window.open(url,"_blank");
        }
    }
    static getHtml(page){
        return router[page];
    }
}
export default Navigator;
