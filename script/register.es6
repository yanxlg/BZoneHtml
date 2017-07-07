/**
 * Created by yanxlg on 2017/6/27 0027.
 * 注册会员 脚本
 */
import Input from '../package/widget/input/input.es6';//自动初始化，不需要调用
import Select from '../package/widget/select/select.es6';
import authorize from '../config/authorize.json';
import Datagrid from '../package/plugin/datagrid/datagrid.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import Pager from '../package/plugin/pager/pager.es6';
import registerSource from '../config/registerSource.json';
import detail from '../artTemplate/register/detail.art';
import create from '../artTemplate/register/create.art';

import fetch from './fetch.es6';
class Register{
    static initialize(){
        //初始化下拉选择控件
        this.pageSize=10;
        this.pageIndex=1;
        this.select=Select.initWithElement($("#authStatus")).setOptions([{
            key:"已认证会员",
            value:authorize.Authenticated
        },{
            key:"待认证会员",
            value:authorize.Unauthorized
        }]).then(val=>{
            // alert(val);
        });
        let _this=this;
        $("#search").on("click",function () {
            _this.search();
        });
        let titles=[{
            title:"姓名",
            bindData:"CustomerName"
        },{
            title:"手机号",
            bindData:"CustomerTel",
            width:100,
        },{
            title:"职务",
            bindData:"CustomerPosition",
            width:100,
        },{
            title:"公司",
            bindData:"CompanyName",
            width:100,
        },{
            title:"注册来源",
            bindData:"RegisterSource",
            width:100,
            filter:function (data) {
                return registerSource[data];
            }
        },{
            title:"创建时间",
            bindData:"CreateTime",
            width:100,
            filter:function (timeString) {
                return timeString?timeString.replace(/T/g," "):"";
            }
        },{
            title:"提交认证时间",
            bindData:"LastSubmitIdentificationTime",
            width:100,
            filter:function (timeString) {
                return timeString?timeString.replace(/T/g," "):"";
            }
        },{
            title:"认证时间",
            bindData:"LastIdentificationTime",
            width:100,
            filter:function (timeString) {
                return timeString?timeString.replace(/T/g," "):"";
            }
        },{
            title:"操作",
            bindData:"actions",
            width:200,
            fixed:"right"
        }];

        let dataH=document.documentElement.offsetHeight-$(".page-datagrid").offset().top-140;
        this.datagrid=Datagrid.instance({
            container:$(".page-datagrid"),
            titles:titles,
            height:dataH,
            rightFixedWidth:"200px"
        }).setActions(["查看详情","编辑","删除"]).then((type,data)=>{
            data&&(typeof data!==undefined)&&(data=JSON.parse(data));
            switch (type){
                case "查看详情":
                    this.getDetail(data.CustomerID);
                    break;
            }
        });
        $(window).on("resize",function () {
            let dataH=document.documentElement.offsetHeight-$(".page-datagrid").offset().top-140;
            _this.datagrid.updateHeight(dataH);
        });

        this.pager=new Pager($(".page-pager"),0,false).then((index)=>{
            _this.pageIndex=index;
            _this.search();
        });
        _this.search();
    }
    static getDetail(userId){
        fetch("/api/ManageCustomerInfoApi/GetCustomerDetailInfoById?customerId="+userId).then(res=>{
            if(res.ok){
                //弹出dialog
                let size=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig)?"full":"";
                dialog({
                    title:"会员详情",
                    content:detail(res.data),
                    modal:false,
                    size:size,
                    footerBtn:[{
                        text:"取消"
                    }]
                }).then(function(btn){
                    this.close();
                });
            }else{
                alert(res.msg).then(function(btn){
                    if(btn==="operation_ok"){
                        if(res.overdue){
                            window.top.location.replace("./login.html");
                        }
                        this.close();
                    }
                });
            }
        })
    }
    static search(){
        let userName=$("#userName").val(),phone=$("#phone").val(),status=this.select.value||-1,_this=this;
        fetch("/api/ManageCustomerInfoApi/GetCustomerInfoList?IdentificationCount=-1&name="+userName+"&CustomerTel="+phone+"&IdentificationState="+status+"&PageSize="+this.pageSize+"&CurrentPage="+this.pageIndex).then(res=>{
            if(res.ok){
                console.log(res);
                _this.datagrid.update(res.data.List);
                _this.pager.setPageIndex(_this.pageIndex).setPageCount(res.data.TotalPages).update();
            }else{
                alert(res.msg).then(btn=>{
                    if(btn==="operation_ok"){
                        if(res.overdue){
                            window.top.location.replace("./login.html");
                        }
                    }
                });
            }
        })
    }
}
Register.initialize();