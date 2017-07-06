/**
 * Created by yanxianliang on 2017/6/11.
 * 数据列表控件
 * Web端使用表格显示  移动端列表显示，列表不会显示全部字段 仅显示3或4个字段，其余字段隐藏 显示规则  过滤字段
 * data-row 控制行
 * data-index 控制列
 * fixed 表示固定的列
 * 表头固定，内容高度自己控制
 * 总会有自适应宽度的列  当存在fix时，fix区域就是自适应列，否则
 * titles:[{title:"",width:100,fixed:false,bindData:""}]  宽度默认值为100   如果没有fixed区域,进度条宽度需要保留  bindData:绑定的字段名
 * then执行actions回调
 * actions 传递按钮
 * fixedLeft 大小 30%
 * fixedRight 大小 30%
 * center 数据是否居中
 * 中间grid会对数据进行全部创建，用于在mobile中显示
 *
 *
 * 浏览器滚动条宽度设置为17px
 */
import dataGridTemp from './datagrid.art';
import dataRowsTemp from './rows.art';
import ListAction from '../grid-actions/grid-actions.es6';
class Grid{
    constructor(container,fixed,width,leftSpace,rightSpace){
        this.container=container;
        this.fixed=fixed;
        this.width=width;
        this.leftSpace=leftSpace;
        this.rightSpace=rightSpace;
    }
    create(){
        let gridRender=$(dataGridTemp({
            titles:this.titles,
            height:this.height+"px",
            fixed:this.fixed,
            width:this.width,
            leftSpace:this.leftSpace,
            rightSpace:this.rightSpace
        }));
        if(this.gridRender){
            this.gridRender.replaceWith(gridRender);
        }else{
            this.container.append(gridRender);
        }
        this.gridRender=gridRender;
        this.header=this.gridRender.find(".grid-header");
        this.content=this.gridRender.find(".grid-data");
        if(!this.fixed){
            this.scrollSync();
        }
        return this;
    }
    setTitles(titles,height){
        this.titles=titles;
        if(this.fixed){
            this.height=height+17;
        }else{
            this.height=height;
        }
        this.create();
        return this;
    }
    setActions(actions){
        this.actions=actions;
        return this;
    }
    scrollSync(){
        let _this=this;
        _this.content.on("scroll",function () {
            console.log(_this.content[0].scrollLeft);
            _this.header[0].scrollLeft=_this.content[0].scrollLeft;
        });
    }
    update(data){
        this.rowStart=0;
        let rows=$(dataRowsTemp({
            titles:this.titles,
            data:data,
            rowStart:this.rowStart,
            actions:this.actions,
            fixed:this.fixed
        })).filter(".data-row");
        this.gridRender.find(".data-row-group").empty().append(rows);
        this.rowStart+=data.length;
        return rows;
    }
    append(data){
        let rows=$(dataRowsTemp({
            titles:this.titles,
            data:data,
            rowStart:this.rowStart,
            actions:this.actions,
            fixed:this.fixed
        })).filter(".data-row");
        this.gridRender.find(".data-row-group").append(rows);
        this.rowStart+=data.length;
        return rows;
    }
    updateHeight(height){
        if(this.fixed){
            this.height=height-17;
        }else{
            this.height=height;
        }
        this.gridRender.children(".grid-data").css({
            height:this.height+"px"
        })
    }
}
class DataGrid{
    constructor(container,titles,height,leftFixedWidth,rightFixedWidth){//通过titles来构造表格
        this.container=container;
        //初始化三个Grid实例对象
        this.leftWidth=leftFixedWidth;
        this.rightWidth=rightFixedWidth;
        this.setTitles(titles,height);
        this.initActions();
    }
    calcH(leftRows,midRows,rightRows){
        //动态计算高度并且进行修改
        $.each(leftRows,function (i, v) {
            let row0=$(v);
            let row1=midRows.eq(i);
            let row2=rightRows.eq(i);
            let leftH=row0.height();
            let midH=row1.height();
            let rightH=row2.height();
            let max=Math.max(parseInt(leftH),parseInt(midH),parseInt(rightH));
            row0.css({
                height:max+"px"
            }).removeClass("in-calc");
            row1.css({
                height:max+"px"
            }).removeClass("in-calc");
            row2.css({
                height:max+"px"
            }).removeClass("in-calc");
        })
    }
    calcHeader(){
        //先计算宽度
        let rightW=this.rightGrid.gridRender.width();
        this.midGrid.gridRender.find(".grid-data > .data-grid").css({
            "padding-right":rightW+"px"
        });
        this.midGrid.gridRender.find(".grid-header > .data-grid").css({
            "padding-right":rightW+17+"px"
        });
        let header0=this.leftGrid.gridRender.find('[data-row="header"]');
        let header1=this.midGrid.gridRender.find('[data-row="header"]');
        let header2=this.rightGrid.gridRender.find('[data-row="header"]');
        let content0=this.leftGrid.gridRender.find('.grid-data');
        let content1=this.midGrid.gridRender.find('.grid-data');
        let content2=this.rightGrid.gridRender.find('.grid-data');
        let leftH=header0.height();
        let midH=header1.height();
        let rightH=header2.height();
        let max=Math.max(parseInt(leftH),parseInt(midH),parseInt(rightH));
        header0.css({
            height:max+"px"
        }).removeClass("in-calc");
        header1.css({
            height:max+"px"
        }).removeClass("in-calc");
        header2.css({
            height:max+"px"
        }).removeClass("in-calc");
        content0.css({
            "padding-top":max+"px"
        });
        content1.css({
            "padding-top":max+"px"
        });
        content2.css({
            "padding-top":max+"px"
        })
    }
    create(){
        this.leftGrid.create();
        this.midGrid.create();
        this.rightGrid.create();
        this.calcHeader();
        this.scrollSync();
        return this;
    }
    update(data){
        //更新数据
        let rows0=this.leftGrid.update(data);
        let rows1=this.midGrid.update(data);
        let rows2=this.rightGrid.update(data);
        this.calcH(rows0,rows1,rows2);
        return this;
    }
    append(data){
        let rows0=this.leftGrid.append(data);
        let rows1=this.midGrid.append(data);
        let rows2=this.rightGrid.append(data);
        this.calcH(rows0,rows1,rows2);
        return this;
    }
    scrollSync(){
        let leftContainer=this.leftGrid.content;
        let midContainer=this.midGrid.content;
        let rightContainer=this.rightGrid.content;
        midContainer.on("scroll",function () {
            leftContainer[0].scrollTop=rightContainer[0].scrollTop=midContainer[0].scrollTop;
        });
    }
    initActions(){
        let _this=this;
        this.container.on("click",".btn",function () {
            let data=$(this).parents(".data-row").attr("data-data");
            _this.callback&&_this.callback.call(_this,$(this).text(),data);
        });
        this.container.on("mouseover",".data-row",function () {
            let rowIndex=$(this).attr("data-row");
            _this.container.find('[data-row="'+rowIndex+'"]').addClass("hover");
        });
        this.container.on("mouseout",".data-row",function () {
            let rowIndex=$(this).attr("data-row");
            _this.container.find('[data-row="'+rowIndex+'"]').removeClass("hover");
        })
    }
    then(callback){
        this.callback=callback;
        return this;
    }
    setTitles(titles,height){
        let leftTitles=[];
        let midTitles=[];
        let rightTitles=[];
        titles.forEach(function (title,i) {
            title.width=title.width||100;
            if(title.fixed==="left"){
                leftTitles.push(title);
            }else if(title.fixed==="right"){
                rightTitles.push(title);
            }else{
                midTitles.push(title);
            }
        });
        height=height||300;
        this.leftTitles=leftTitles;
        this.midTitles=titles;
        this.rightTitles=rightTitles;
        leftTitles.length===0&&(this.leftWidth=0);
        rightTitles.length===0&&(this.rightWidth=0);
        this.leftGrid=new Grid(this.container,"left",this.leftWidth,0,0);
        this.midGrid=new Grid(this.container,null,"100%",this.leftWidth,this.rightWidth);
        this.rightGrid=new Grid(this.container,"right",this.rightWidth,0,0);
        this.leftGrid.setTitles(leftTitles,height);
        this.midGrid.setTitles(titles,height);
        this.rightGrid.setTitles(rightTitles,height);
        this.titles=titles;
        this.create();
        return this;
    }
    setActions(actions){
        this.actions=actions;
        this.leftGrid.setActions(actions);
        this.midGrid.setActions(actions);
        this.rightGrid.setActions(actions);
        return this;
    }
    /**
     * @params
     * container: 容器
     * titles:标题数组
     * height:内容高度
     * leftFixedWidth:左侧宽度
     * rightFixedWidth:右侧宽度
     */
    updateHeight(height){
        this.leftGrid.updateHeight(height);
        this.midGrid.updateHeight(height);
        this.rightGrid.updateHeight(height);
        return this;
    }
    static instance(params){
        let container=params.container||$("body");
        let titles=params.titles;
        let height=params.height||400;
        let leftFixedWidth=params.leftFixedWidth||"30%";
        let rightFixedWidth=params.rightFixedWidth||"30%";
        return new DataGrid(container,titles,height,leftFixedWidth,rightFixedWidth);
    }
}
export default DataGrid;