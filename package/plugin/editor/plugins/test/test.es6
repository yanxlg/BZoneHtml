/**
 * Created by yanxianliang on 2017/6/26 0026.
 * test plugin
 */
import testTemp from './test.art';
import dialogContentTemp from './dialog.art';
import dialog from '../../../dialog/cf-dialog.es6';
class Test{
    constructor(){
        this.render=testTemp({});
        this.edit={
            title:"Test",
            content:dialogContentTemp({})
        }
    }
    static instance(){
        return new Test();
    }
    checkData(/*Jq Ele*/content){
        //校验当前的值，获取当前的值，获取dialog中的值
        let test=content.find(".test_input").val();
        if(test){
            this.formData={
                input:test
            };
            return this.formData;
        }else{
            alert("输入值不能为空");
            return false;
        }
    }
    fillData(item){
        item.find(".test_input").text(this.formData.input);
    }
}
export default Test;