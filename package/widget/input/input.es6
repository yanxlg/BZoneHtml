/**
 * Created by yanxlg on 2017/6/27 0027.
 * input 初始化
 * 禁用中文输入法
 * //存在bug
 *  email url 中e.key不兼容部分浏览器 例如uc等
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
            let type=$(this).attr("type"),key=e.key||String.fromCharCode(currKey);
            switch (type)
            {
                case "number":
                    return /\d|Backspace|Left|Right|Delete/.test(key)||currKey>=96&&currKey<=105||currKey===37||currKey===39||currKey===8;
                case "email":
                    return /\d|Backspace|Left|Right|\.|\w|@/.test(key);//存在bug
                case "url":
                    return /\d|Backspace|Left|Right|\.|\w|@|:|\//.test(key);
                case "tel":
                    return /\d|Backspace|Left|Right|Delete/.test(key)||currKey>=96&&currKey<=105||currKey===37||currKey===39||currKey===8;
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