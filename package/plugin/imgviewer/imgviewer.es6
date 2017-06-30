/**
 * Created by yanxlg on 2017/6/30 0030.
 * 图片灯箱式预览插件
 * 图片点击的时候自动触发，封装成全局，不需要单独注册
 * img中需要有几个属性
 * data-toggle="lightbox"
 * data-group="分组"
 */
import viewerTemplate from './imgviewer.art';
import dialog from '../dialog/cf-dialog.es6';
class ImgViewer{
    constructor(element){
        this.$=element;
        this.options = this.getOptions();
        this.init();
    }
    getOptions(){
        //获取img上的属性
        let fromEle={
            group:this.$.attr("data-group"),
        };
        let imgs=[],eles=this.$;
        if(fromEle.group){
            //获取同一group的img
            eles=$('img[data-group="'+fromEle.group+'"]');
        }
        eles.each(function (i,ele) {
            imgs.push({
                image:$(ele).attr("src"),
                caption:$(ele).attr("alt"),
                index:i
            });
            $(ele).attr("data-group-index",i);
        });
        fromEle.imgs=imgs;
        fromEle.index=this.$.attr("data-group-index");
        console.log(fromEle);
        return fromEle;
    }
    init(){
        let isMobile=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig);
        let size=isMobile?"full":"";
        //PC高度动态计算
        let imgH=document.documentElement.offsetHeight*0.8;
        if(!isMobile){
            this.options.imgH=imgH;
        }
        let viewer=dialog({
            position:"center",
            showFooter:false,
            showHeader:false,
            moveable:false,
            size:size,
            customCss:"img-viewer",
            content:viewerTemplate(this.options)
        });
        let dialogEl=viewer._element.filter(".modal"),_this=this;
        dialogEl.on("click",".prev",function () {
            let current=parseInt(dialogEl.find(".viewer-img:not('.remove')").attr("data-index"));
            if(current>0){
                dialogEl.find("[data-index='"+current+"']").addClass("remove");
                dialogEl.find("[data-index='"+(current-1)+"']").removeClass("remove");
            }
            if(current-1===0){
                dialogEl.find(".prev").addClass("remove");
            }
            dialogEl.find(".next").removeClass("remove");
        });
        dialogEl.on("click",".next",function () {
            let current=parseInt(dialogEl.find(".viewer-img:not('.remove')").attr("data-index"));
            if(current<_this.options.imgs.length-1){
                dialogEl.find("[data-index='"+current+"']").addClass("remove");
                dialogEl.find("[data-index='"+(current+1)+"']").removeClass("remove");
            }
            if(current+1===_this.options.imgs.length-1){
                dialogEl.find(".next").addClass("remove");
            }
            dialogEl.find(".prev").removeClass("remove");
        });
        dialogEl.on("click",".dialog-close",function () {
            viewer.close();
        })
    }
    static initialize(){
        $("body").on("click","img",function () {
            if($(this).attr("data-toggle")==="viewer"){
                return new ImgViewer($(this));
            }
        })
    }
}
ImgViewer.initialize();