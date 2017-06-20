/**
 * Created by yanxlg on 2017/6/20 0020.
 * user信息管理
 * key: _user
 */
import {store} from '../package/plugin/store/store.es6';
import staticConfig from '../config/static.json';
class USER{
    static setToken(token){
        let user=store.get(staticConfig.userLocalKey);
        user.Token=token;
        this.setInfo(user);
    }
    static getToken(){
        let user=store.get(staticConfig.userLocalKey);
        return user.Token;
    }
    static getInfo(){
        let user=store.get(staticConfig.userLocalKey);
        if(user&&user!=="undefined"&&typeof user!=="undefined"){
            return JSON.parse(user);
        }else{
            return {};
        }
    }
    static setInfo(user){
        //差量更新
        let user_old=this.getInfo();
        let user_new=$.extend(true,user_old,user);
        store.set(staticConfig.userLocalKey,user_new);
    }
}
export default USER;