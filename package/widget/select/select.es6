/**
 * Created by yanxlg on 2017/6/27 0027.
 *
 */
import idGenerate from '../../cf-idGenerator.es6';
const SelectMap=new Map();

class SelectClass{
    constructor(select){
        this.$=select;
        this.id=idGenerate.uuid();
        this.value="";
        this.$.attr("data-init-id",this.id);
        //遍历当前的所有选项，获取选中的值
        let options=[];
        this.$.find(".select-options > li").each(function (i,v) {
            options.push({
                key:$(v).text(),
                value:$(v).attr("value")
            })
        });
        this.options=options;
        this.mounted();
    }
    mounted(){
        let _this=this,input=this.$.find(".input-icon > .input");
        let key=input.val();
        if(key){
            this.options.forEach(function (option) {
                if(option.key===key){
                    input.attr("data-select-val",option.value);
                    _this.$.find("li[value='"+option.value+"']").addClass("active");
                    _this.value=option.value;
                }
            })
        }
        this.$.on("click",".input-icon",function () {
            _this.show();
        }).on("click",".select-options > li",function () {
            $(this).addClass("active").siblings().removeClass("active");
            let key=$(this).text(),val=$(this).attr("value");
            input.val(key).attr("data-select-val",val);
            _this.$.trigger("change",val);
            _this.callback&&_this.callback.call(_this,val);
            _this.value=val;
            _this.hide();
        });
        $("body").on("click."+_this.id,function (e) {
            let target=e.target||e.srcElement;
            if($(target).parents(".select").length===0||$(target).parents(".select").attr("data-init-id")!==(_this.id+"")){
                _this.hide();
            }
        });
        return this;
    }
    show(){
        this.$.addClass("open");
        return this;
    }
    hide(){
        this.$.removeClass("open");
        return this;
    }
    addOptions(/*Array*/options){
        let optionsHtml=[];
        options.forEach(function (option) {
            optionsHtml.push('<li value="'+option.value+'">'+option.key+'</li>');
        });
        this.$.find(".select-options").append(optionsHtml.join(""));
        this.options=this.options.concat(options);
        return this;
    }
    setOptions(/*Array*/options){
        let optionsHtml=[];
        options.forEach(function (option) {
            optionsHtml.push('<li value="'+option.value+'">'+option.key+'</li>');
        });
        this.$.find(".select-options").html(optionsHtml.join(""));
        this.options=options;
        return this;
    }
    then(callback){
        this.callback=callback;
        return this;
    }
    static getInstance(id){
        return SelectMap.get(id);
    }
    static initWithElement(el){
        return new SelectClass(el);
    }
    static initialize(){
        //遍历所有的select元素
        $(".select").each(function (i, v) {
            if(!$(v).attr("data-init-id")){
                let instance=new SelectClass($(v));
                SelectMap.set(instance.id,instance);
            }
        })
    }
}
export default SelectClass;