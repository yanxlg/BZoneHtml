/**
 * Created by yanxlg on 2017/6/30 0030.
 * 达人认证
 */
import Input from '../package/widget/input/input.es6';//自动初始化，不需要调用
import Select from '../package/widget/select/select.es6';
import authorize from '../config/authorize.json';
import Datagrid from '../package/plugin/datagrid/datagrid.es6';
import dialog from '../package/plugin/dialog/cf-dialog.es6';
import Pager from '../package/plugin/pager/pager.es6';
import registerSource from '../config/registerSource.json';
import detail from '../artTemplate/talentRegister/detail.art';
import auditing from '../artTemplate/talentRegister/auditing.art';
import imgViewer from '../package/plugin/imgviewer/imgviewer.es6';

import fetch from './fetch.es6';
class Register{
    static initialize(){
        //初始化下拉选择控件
        this.pageSize=10;
        this.pageIndex=1;
        this.authStatus=Select.initWithElement($("#authStatus")).setOptions([{
            key:"请选择认证状态",
            value:""
        },{
            key:"已认证",
            value:authorize.Authenticated
        },{
            key:"待认证",
            value:authorize.Unauthorized
        }]).then(val=>{
            // alert(val);
        });
        //需要通过接口获取
        this.authType=Select.initWithElement($("#authType"));
        this.authTimes=Select.initWithElement($("#authTimes"));
        let _this=this;
        $("#search").on("click",function () {
            _this.search();
        });
        let titles=[{
            title:"序号",
            bindData:"index",
            flexed:"left"
        },{
            title:"姓名",
            bindData:"CustomerName"
        },{
            title:"手机号",
            bindData:"CustomerTel",
            width:100,
        },{
            title:"性别",
            bindData:"Sex",
            width:100,
            filter:function (sex) {
                return sex===1?"男":sex===2?"女":"未填写";
            }
        },{
            title:"认证类型",
            bindData:"TalentName",
            width:100,
        },{
            title:"是否首次认证",
            bindData:"IsFirstIdentification",
            width:100,
            filter:function (isFirst) {
                return isFirst?"是":"否"
            }
        },{
            title:"注册来源",
            bindData:"RegisterSource",
            width:100,
            filter:function (data) {
                return registerSource[data];
            }
        },{
            title:"注册时间",
            bindData:"CreateTime",
            width:100,
            filter:function (timeString) {
                return timeString?timeString.replace(/T/g," "):"";
            }
        },{
            title:"认证提交时间",
            bindData:"SubmitIdentificationTime",
            width:100,
            filter:function (timeString) {
                return timeString?timeString.replace(/T/g," "):"";
            }
        },{
            title:"操作",
            bindData:"actions",
            width:200,
            fixed:"right",
            filter:function (row,action) {
                return (row.IdentificationState===authorize.Unauthorized&&action==="认证审核"||action!=="认证审核")?"":"disabled";
            }
        }];
        let dataH=document.documentElement.offsetHeight-$(".page-datagrid").offset().top-140;
        this.datagrid=Datagrid.instance({
            container:$(".page-datagrid"),
            titles:titles,
            height:dataH,
            rightFixedWidth:"200px"
        }).setActions(["查看详情","认证审核"]).then((type,data)=>{
            data=data?JSON.parse(data):{};
            let size=navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig)?"full":"";
            switch (type){
                case "查看详情":
                    dialog({
                        title:"达人用户",
                        content:detail(data),
                        size:size
                    }).then(function () {
                        this.close();
                    });
                    break;
                case "认证审核":
                    let priceUnitSelect;
                    let pendingDialog=dialog({
                        title:"认证审核",
                        content:auditing(data),
                        modal:false,
                        size:size,
                        footerBtn:[{
                            text:"审核通过",
                            themeCss:"btn-primary"
                        },{
                            text:"审核不通过",
                            themeCss:"btn-primary"
                        },{
                            text:"取消"
                        }]
                    }).then(btn=>{
                        let price=$("#price").val();
                        data.Price=parseFloat(price);
                        let priceUnit=priceUnitSelect.value;
                        data.PriceUnit=priceUnit;
                        switch (btn){
                            case "operation_cusBtn0":
                                _this.pending(data,2,pendingDialog);
                                break;
                            case "operation_cusBtn1":
                                _this.pending(data,3,pendingDialog);
                                break;
                            case "operation_cusBtn2":
                                pendingDialog.close();
                                break;
                        }
                    });
                    priceUnitSelect=Select.initWithElement($("#changePrice"),"up").then(()=>{
                        $('#changePrice input').removeClass("validate-error");
                    });
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
        this.getAuthTypes(()=>{
            _this.search();
        });

        $("body").on("blur",'#price',function () {
            if($(this).val()){
                $(this).removeClass("validate-error");
            }
        });
        $("body").on("blur",'#reason',function () {
            if($(this).val()){
                $(this).removeClass("validate-error");
            }
        });
    }
    static pending(data,status,dialog){
        //检测price是否填写 ，单位是否选择
        if(status===2){
            $("#reason").removeClass("validate-error");
            if(!data.Price){
                $("#price").addClass("validate-error");
                return;
            }else{
                $("#price").removeClass("validate-error");
            }
            if(!data.PriceUnit){
                $("#changePrice input").addClass("validate-error");
                return;
            }else{
                $("#changePrice input").removeClass("validate-error");
            }
        }else{
            $("#price").removeClass("validate-error");
            $("#changePrice input").removeClass("validate-error");
            data.IdentificationMemo=$("#reason").val();
            if(!data.IdentificationMemo){
                $("#reason").addClass("validate-error");
                return;
            }
        }
        let params={
            Customer_TalentSkillIdentificationID:data.Customer_TalentSkillIdentificationID,
            Price:data.Price,
            PriceUnit:data.PriceUnit,
            IdentificationState:status,
            CustomerID:data.CustomerID,
            CustomerTalentTypeID:data.CustomerTalentTypeID,
            IdentificationMemo:data.IdentificationMemo
        },_this=this;
        fetch("/api/BenevolenceApi/IdentificateTalentSkill",params).then(res=>{
            if(res.ok){
                //刷新页面
                dialog.close();
                _this.pageIndex=1;
                alert(status===2?"已通过该认证":"已拒绝该认证").then(function () {
                    this.close();
                });
                _this.search();
            }else{
                alert(res.msg).then(btn=>{
                    if(btn==="operation_ok"){
                        if(res.overdue){
                            //如果是angular则跳转到老的页面
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
    static getAuthTypes(callback){
        let _this=this;
        fetch("/api/BenevolenceApi/GetCustomer_TalentType").then(res=>{
            if(res.ok){
                let skills=[{
                    key:"请选择认证类型",
                    value:""
                }];
                $.each(res.data,function (i, v) {
                    if(!v.IsDeleted){
                        skills.push({
                            key:v.TalentName,
                            value:v.TalentName
                        })
                    }
                });
                _this.authType.setOptions(skills).then(val=>{
                    // alert(val);
                });
                callback.call(_this);
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
    static search(){
        let userName=$("#userName").val(),phone=$("#phone").val(),status=this.authStatus.value,_this=this,skillName=this.authType.value,isFirst=this.authTimes.value;
        fetch("/api/BenevolenceApi/GetCustomerTalentSkillInfo?CustomerName="+userName+"&TelNo="+phone+"&IdentificationState="+status+"&TalentName="+skillName+"&IsFirstIdentification="+isFirst+"&PageSize="+this.pageSize+"&CurrentPage="+this.pageIndex).then(res=>{
            if(res.ok){
                console.log(res.data.List);
                _this.datagrid.update(res.data.List);
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
                            // window.top.location.replace("./login.html");
                        }
                    }
                });
            }
        })
    }
}
Register.initialize();