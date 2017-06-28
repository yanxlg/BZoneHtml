/**
 * Created by yanxianliang on 2017/6/24.
 * 针对旧版后台做兼容处理
 */
import user from './user.es6';
import staticConfig from '../config/static.json';
class Angular{
    static mounted(){
        this.frame=document.querySelector("iframe");
        let hash=location.hash;
        if(location.search="upload=true"){
            this.frame.src=staticConfig["angularWeb"]+"?from=new"+hash;
            return;
        }
        let userInfo=user.getInfo();
        let computeUser={
            "account": userInfo.User.UserName,
            "password": userInfo.User.Password,
            "userID": userInfo.User.UserID,
            "userName": userInfo.User.UserName,
            "hasLogin": true,
            "ApproveLevel": userInfo.User.ApproveLevel,
            "token": userInfo.Token,
            "module":[]
        };
        this.frame.src=staticConfig["angularWeb"]+"?user="+JSON.stringify(computeUser)+"&back="+location.host+location.pathname+hash;
    }
}
Angular.mounted();