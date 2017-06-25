/**
 * Created by yanxianliang on 2017/6/24.
 * 针对旧版后台做兼容处理
 */
class Angular{
    static mounted(){
        this.frame=document.querySelector("iframe");
        this.setLife();
        let hash=location.hash;
        this.frame.src="https://admin.5ishang.com/BZone/index.html"+hash;
    }
    static setLife(){
        let bindEvent=window.addEventListener?"addEventListener":"attachEvent";
        let one=true;
        this.frame[bindEvent]("load",()=>{
            one&&this.injectJS();
            one=false;
        })
    }
    static injectJS(){
        let script='<script>alert("aaaa");</script>';
        this.frame.src="data:text/html;charset=utf-8,"+encodeURI(script);
    }
}
Angular.mounted();