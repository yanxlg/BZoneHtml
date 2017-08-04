/**
 * Created by yanxlg on 2017/8/2 0002.
 */
import Input from '../package/widget/input/input.es6';//自动初始化，不需要调用
import Select from '../package/widget/select/select.es6';
import Datagrid from '../package/plugin/datagrid/datagrid.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import Pager from '../package/plugin/pager/pager.es6';
import edit from '../artTemplate/orderStatus.art';
import config from '../config/static.json';

import fetch from './fetch.es6';
class Order{
    static initialize(){
        //初始化下拉选择控件
        this.pageSize=20;
        this.pageIndex=1;
        this.orderStatus=Select.initWithElement($("#orderStatus"));
        let _this=this;
        $("#search").on("click",function () {
            _this.search();
        });
        $("#export").on("click",function () {
            _this.export();
        });
        let titles=[{
            title:"序号",
            bindData:"index",
            flexed:"left"
        },{
            title:"订单编号",
            bindData:"OrderCode"
        },{
            title:"姓名",
            bindData:"ContactName",
            width:100,
        },{
            title:"手机号码",
            bindData:"ShipCustomerTel",
            width:100,
        },{
            title:"商品",
            bindData:"GiftName",
            width:100,
        },{
            title:"数量",
            bindData:"Count",
            width:100,
        },{
            title:"金额",
            bindData:"Amount",
            width:100,
        },{
            title:"备注",
            bindData:"Remark",
            width:100,
        },{
            title:"状态",
            bindData:"QueryStatus",
            width:100
        },{
            title:"操作",
            bindData:"actions",
            width:200,
            fixed:"right",
            filter:function (row,action) {
                return (row.QueryStatus==="待支付"||row.QueryStatus==="已完成")?"disabled":"";
            }
        }];
        let dataH=document.documentElement.offsetHeight-$(".page-datagrid").offset().top-140;
        this.datagrid=Datagrid.instance({
            container:$(".page-datagrid"),
            titles:titles,
            height:dataH,
            rightFixedWidth:"200px"
        }).setActions(["编辑"]).then((type,data)=>{
            data=data?JSON.parse(data):{};
            let size=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig)?"full":"";
            switch (type){
                case "编辑":
                    let changeStatus;
                    dialog({
                        title:"订单状态修改",
                        content:edit(data),
                        size:size
                    }).then(function (operation) {
                        switch (operation){
                            case "operation_ok":
                                _this.edit(data.OrderID,changeStatus.value);
                                break;
                        }
                        this.close();
                    });
                    let options=[];
                    switch (data.QueryStatus){
                        case "已支付":
                            options.push({
                                key:"已发货",
                                value:"3"
                            });
                            options.push({
                                key:"已完成",
                                value:"4"
                            });
                            break;
                        case "已发货":
                            options.push({
                                key:"已完成",
                                value:"4"
                            });
                            break;
                    }
                    changeStatus=Select.initWithElement($("#changeStatus")).setOptions(options);
                    break;
            }
        });
        $(window).on("resize",function () {
            let dataH=document.documentElement.offsetHeight-$(".page-datagrid").offset().top-140;
            _this.datagrid.updateHeight(dataH);
        });
        this.pager=new Pager($(".page-pager"),0,true).then((index)=>{
            _this.pageIndex=index;
            _this.search();
        });
        _this.search();
    }
    static search(){
        let orderNumber=$("#orderNumber").val(),goods=$("#goods").val(),phone=$("#phone").val(),status=this.orderStatus.value||0,_this=this;
        fetch("/api/ManageOrder/GetGiftOrderList?giftName="+goods+"&orderCode="+orderNumber+"&telephone="+phone+"&queryStatus="+status+"&pageSize="+this.pageSize+"&pageIndex="+this.pageIndex).then(res=>{
            if(res.ok){
                _this.datagrid.update(res.data);
                _this.pager.setPageIndex(_this.pageIndex).setPageCount(res.data.TotalPages).update();
            }else{
                alert(res.msg).then(btn=>{
                    if(btn==="operation_ok"){
                        if(res.overdue){
                            if(location.hash==="#compatible"){
                                localStorage.removeItem("user");
                                window.top.location.replace("../../../BZone/index.html#/login");
                            }else{
                                window.top.location.replace("./login.html");
                            }
                        }
                    }
                });
            }
        })
    }
    static export(){
        $('<iframe src="'+config.webApiDomain+'/api/ManageOrder/ExportGiftExcel" style="display: none">' +  // action请求路径及推送方法
            '</iframe>')
            .appendTo('body');
    }
    static edit(id,value){
        fetch("/api/ManageOrder/EditGiftOrderStatus",{
            orderID:id,
            queryStatus:parseInt(value),
        }).then(res=>{
            if(res.ok){
                alert("订单状态修改成功").then(function (btn) {
                    location.reload();
                    this.close();
                });
            }else{
                alert(res.msg).then(function(btn){
                    if(btn==="operation_ok"){
                        if(res.overdue){
                            if(location.hash==="#compatible"){
                                localStorage.removeItem("user");
                                window.top.location.replace("../../../BZone/index.html#/login");
                            }else{
                                window.top.location.replace("./login.html");
                            }
                        }
                    }
                    this.close();
                });
            }
        })
    }
}
Order.initialize();