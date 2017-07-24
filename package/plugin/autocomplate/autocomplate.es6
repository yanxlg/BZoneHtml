/**
 * Created by yanxlg on 2017/7/24 0024.
 */
import fetch from '../../../static/fetch.es6';
import list from './search-list.art';
class AutoComplate{
    static instance(input){
        this.ele=input;
        this.url=input.attr("data-url");
        this.list=list({});
    }
    static startSearch(){

    }
}