/**
 * Created by yanxlg on 2017/6/20 0020.
 * user信息管理
 * key: _user
 * 加入缓存机制，页面不刷新不会重新获取
 */
import {store} from '../package/plugin/store/store.es6';
import staticConfig from '../config/static.json';
class USER{
    static setToken(token){
        let user=this.getInfo();
        user.Token=token;
        this.setInfo(user);
    }
    static getToken(){
        let user=this.getInfo();
        return user.Token;
    }
    static getInfo(){
        if(!this._user){
            let user=store.get(staticConfig.userLocalKey);
            if(user&&user!=="undefined"&&typeof user!=="undefined"){
                this._user=user;
            }else{
                this._user={};
            }
        }
        return this._user;
    }
    static setInfo(user){
        //差量更新
        let user_old=this.getInfo();
        let user_new=$.extend(true,user_old,user);
        console.log(user_new);
        store.set(staticConfig.userLocalKey,user_new);
        this._user=user_new;
    }
    static cacheLogin(){
        let user=this.getInfo();
        user.cache=true;
        this.setInfo(user);
    }
    static removeCache(){
        let user=this.getInfo();
        user.cache=false;
        this.setInfo(user);
    }
    static isCached(){
        let user=this.getInfo();
        return user.cache;
    }
}
export default USER;