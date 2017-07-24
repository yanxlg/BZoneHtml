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
import edit from '../artTemplate/register/edit.art';

import fetch from './fetch.es6';
class Register{
    static initialize(){
        //初始化下拉选择控件
        this.pageSize=20;
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
                case "删除":
                    this.delete(data);
                    break;
                case "编辑":
                    this.getEdit(data.CustomerID);
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
        $("body").on("click",".icon-add",function () {
            $(this).parents(".item-name").parent().append('<div class="item">' +
                '                <div class="item-info"><label class="keep-all">职务：</label><input class="input" type="text"></div>' +
                '                <div class="item-info"><label class="keep-all">公司：</label><input class="input" type="text"></div>' +
                '                <div class="align-center" style="width: 5rem">' +
                '                    <input type="radio" name="authCompany"><label>认证</label>' +
                '                    <i class="icon icon-delete font-color-danger" style="margin:0.2rem 0 0 0.8rem;cursor: pointer"></i>' +
                '                </div>' +
                '            </div>');
        });
        $("body").on("click",".icon-delete",function () {
            $(this).parents(".item").remove();
        })
    }
    static edit(){

    }
    static delete(item){
        let staticThis=this;
        alert("用户删除后将无法恢复，确定要删除该数据吗？").then(function(btn){
            if(btn==="operation_ok"){
                item.IsDeleted=true;
                fetch("/api/ManageCustomerInfoApi/DeleteCustomerInfo",item).then(res=>{
                    if(res.ok){
                        //删除成功刷新当前分页
                        staticThis.search();
                        alert("删除成功");
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
                });
                this.close();
            }
        });
    }
    static getEdit(userId){
        //
        fetch("/api/ManageCustomerInfoApi/GetCustomerDetailInfoById?customerId="+userId).then(res=>{
            if(res.ok){
                //弹出dialog
                let size=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig)?"full":"";
                dialog({
                    title:"修改会员信息",
                    content:edit(res.data),
                    modal:false,
                    size:size,
                    footerBtn:[{
                        text:"取消"
                    },{
                        text:"修改",
                        themeCss:"btn-primary"
                    }]
                }).then(function(btn){
                    if(btn==="operation_cusBtn1"){
                        //Todo Edit
                    }
                    this.close();
                });
                this.getProvince(()=>{
                    let options=[];
                    $.each(this.provinces,function (i,province) {
                        options.push({
                            key:province.ProvinceName,
                            value:province.ProvinceCode
                        });
                    });
                    let ProvinceSelector=Select.initWithElement($("#province")).setOptions(options).then(val=>{
                        this.getCityByProvince(val,cities=>{
                            let _options=[];
                            $.each(cities,function (i,city) {
                                _options.push({
                                    key:city.CityName,
                                    value:city.CityCode
                                });
                            });
                            $("#city input").attr("placeholder","请选择城市");
                            let CitySelector=Select.initWithElement($("#city")).setOptions(_options).then(val=>{
                            })
                        })
                    });
                    let ProvinceSelector1=Select.initWithElement($("#homeprovince")).setOptions(options).then(val=>{
                        // alert(val);
                        this.getCityByProvince(val,cities=>{
                            let _options=[];
                            $.each(cities,function (i,city) {
                                _options.push({
                                    key:city.CityName,
                                    value:city.CityCode
                                });
                            });
                            $("#homecity input").attr("placeholder","请选择城市");
                            let CitySelector=Select.initWithElement($("#homecity")).setOptions(_options).then(val=>{
                            })
                        })
                    });
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
    static updateDetail(){
        let name=$("[data-form=\"userName\"]").val();
        let phone=$("[data-form=\"tel\"]").val();
        let sex=$("[name='sex']").val();
        let auth=$("[name='auth']").val();
        let vip=$("[name='vip']").val();
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
    static getProvince(callback){
        //后台请求
        if(this.provinces) return callback&&callback.call(this);
        fetch("/api/GroupActivityApi/GetProvinceList").then(res=>{
            if(res.ok){
                this.provinces=res.data.List;
                callback&&callback.call(this);
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
    static getCityByProvince(provinceCode,callback){
        fetch("/api/GroupActivityApi/GetCityList?ProvinceCode="+provinceCode).then(res=>{
            if(res.ok){
                callback&&callback.call(this,res.data.List);
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
}
Register.initialize();