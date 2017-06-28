/**
 * Created by yanxianliang on 2017/6/24.
 * 设计：
 * 拖动改变位置并且弹出编辑界面，插件支持
 * 移动端可拖动标记事件 tap 按住   PC 端可拖动标记事件：click  用了fastclick 兼容click
 * 进入编辑界面：PC 端doubleclick 移动端 longTap
 */
import Sortable from '../sortable/sortable.es6';
import pluginTemp from './pluginPicker.art';
import idGenerate from '../../cf-idGenerator.es6';
import dialog from '../dialog/cf-dialog.es6';
/////////////////////导入plugins//////////////////////////////
import test from './plugins/test/test.es6';
/////////////////////////////////////////////////////////////
class Editor{
    constructor(container,plugins){
        this.pluginMarket={
            test:test.instance()
        };
        //sortable的容器
        let uuid=idGenerate.uuid(),_this=this;
        this.editorSortable=Sortable.create(container,{
            animation: 150,
            handle: ".plugin",
            draggable: ".plugin",
            onUpdate: function (evt/**Event*/){
                let item = evt.item; // the current dragged HTMLElement
            },
            group:{
                name: 'editor'+uuid,
                pull: false,
                put: true
            },
            onAdd:function (evt/**Event*/) {
                //判断是哪个instance
                let instance=_this.pluginMarket[$(evt.item).attr("data-instance")];
                let editDialog=dialog({
                    title:instance.edit.title,
                    content:instance.edit.content,
                    modal:true,
                    size:"full",
                    moveable:false
                }).then(msg=>{
                    //先触发哪个就是哪个
                    instance&&(dialogInstance=>{
                        let item=$(evt.item);
                        if(msg==="operation_cancel"||msg==="closeStart"){
                            item.remove();
                            instance=null;
                        }
                        if(msg==="operation_ok"){
                            //关闭当前dialog,传递数据，校验数据
                            let dialogID=editDialog.getID();
                            let dialogInstance=editDialog.getByID(dialogID);
                            let res=instance.checkData(dialogInstance.getContent());//报错在插件中直接提示，如果返回false 则数据校验失败，不进行操作，否则返回最后的数据，进行数据填充并且关闭dialog
                            if(res!==false){
                                //res为最终返回的数据，需要对item进行填充
                                instance.fillData(item);
                                instance=null;
                                dialogInstance.close();
                            }
                        }
                    })(this);
                })
            },
        });
        //在sortable 中添加元素 editableList.el.appendChild(el);
        this.pluginSortAble=Sortable.create($(container).next(".plugin-picker")[0],{
            animation: 150,
            handle: ".plugin",
            draggable: ".plugin",
            onUpdate: function (evt/**Event*/){
                let item = evt.item; // the current dragged HTMLElement
            },
            sort:false,//不进行排序
            group:{
                name: 'editor'+uuid,
                pull: 'clone',
                put: false
            }
        });
        //put只能在container中添加，不会跑到其他里，pull会跑到其他容器里面
        this.container=container;
        let pluginMap=[];
        plugins.forEach(function (v) {
            _this.pluginMarket[v]&&pluginMap.push(_this.pluginMarket[v]);
        });
        this.plugins=pluginMap;
        this.initPlugins();
    }
    initPlugins(){
        console.log(this.plugins);
        this.pluginPicker=$(pluginTemp({
            plugins:this.plugins
        }));
        $(this.container).next(".plugin-picker").empty().append(this.pluginPicker);
    }
}
new Editor(document.querySelector(".editor-content"),["test","2","3","4","5","6"]);