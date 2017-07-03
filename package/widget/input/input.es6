/**
 * Created by yanxlg on 2017/6/27 0027.
 * input 初始化
 * 禁用中文输入法
 */

class Input{
    static initialize(){
        $("body").on("focus","input",function () {
            let type=$(this).attr("type");
            if(!(!type||type==="text")){
                $(this).attr("onpaste","return false;");
            }
        }).on("keydown","input",function (e) {
            e=e||event;
            let currKey=e.keyCode||e.which||e.charCode;
            let type=$(this).attr("type"),key=String.fromCharCode(currKey);
            switch (type)
            {
                case "number":
                    return /\d|Backspace|Left|Right/.test(key);
                case "email":
                    return /\d|Backspace|Left|Right|\.|\w|@/.test(key);
                case "url":
                    return /\d|Backspace|Left|Right|\.|\w|@|:|\//.test(key);
                case "tel":
                    return /\d|Backspace|Left|Right/.test(key);
                default:
                    return true;
            }
        }).on("compositionstart","input",function (e) {
            let type=$(this).attr("type");
            switch (type)
            {
                case "number":
                    $(this).blur();
                    break;
                case "email":
                    $(this).blur();
                    break;
                case "url":
                    $(this).blur();
                    break;
                case "tel":
                    $(this).blur();
                    break;
                default:
                    break;
            }
        })
    }
}
Input.initialize();
export default Input;