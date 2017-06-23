/**
 * Created by yanxianliang on 2017/5/20.
 */
import fetchApi from '../static/fetch.es6';
import {store} from '../package/plugin/store/store.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import staticConfig from '../config/static.json';
import loading from '../package/plugin/loading/loading.es6';
import user from './user.es6';
/*const HttpSuccessStaatus=/^2\d{2}$/;
 let checkStatus=(response)=>{
 if (HttpSuccessStaatus.test(response.status)) {
 return response;
 } else {
 let error = new Error(response.statusText);
 error.response = response;
 throw error;
 }
 };*/

class THENCLASS{
    constructor(){
        return this;
    }
    then(){
        return this;
    }
}

let fetch=(url,data,login)=>{
    if(arguments.length===2){
        login=true;//不设置默认为true,即需要登录
    }
    let token=user.getToken();
    if(data){
        if(login&&!token){
            dialog({
                title:"未登录提示",
                content:"请先登录后再执行该操作",
                modal:false
            }).then(function(){
                this.close();
            });
            return new THENCLASS();
        }
        loading.show();
        return fetchApi(staticConfig.webApiDomain+url,{
            method: 'POST',
            headers:{
                Token:token,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                Content: data,
                Head: {
                    "AppType":staticConfig.AppType,
                    "ApiType": staticConfig.ApiType,
                    "AppVersion": staticConfig.AppVersion,
                    "ApiVersion": staticConfig.ApiVersion,
                    "Token": token
                }
            })
        }).then(response=>{
            loading.close();
            return response.json();
        }).then(json=>{
            if(json.Head.Ret===staticConfig.errorCode){
                return {
                    ok:false,
                    msg:json.Head.Msg
                }
            }
            if(json.Head.Ret===staticConfig.successCode){
                return {
                    ok:true,
                    data:json.Content
                }
            }
            return null;
        })
    }else{
        //get 方法
        loading.show();
        return fetchApi(staticConfig.webApiDomain+url,{
            method: 'GET',
            headers:{
                token:token
            }
        }).then(response=>{
            loading.close();
            return response.json();
        }).then(json=>{
            if(json.Head.Ret===staticConfig.errorCode){
                return {
                    ok:false,
                    msg:json.Head.Msg
                }
            }
            if(json.Head.Ret===staticConfig.successCode){
                return {
                    ok:true,
                    data:json.Content
                }
            }
            return null;
        })
    }
};
export default fetch;