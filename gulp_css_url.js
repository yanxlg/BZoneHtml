/**
 * Created by yanxlg on 2017/6/7 0007.
 * gulp 插件 对css sass less 中url的处理
 */
let path = require('path');
let modifyStreamContent=require("./modifyStreamContent.js");
function matchAll(str, reg) {
    var res = []
    var match
    while(match = reg.exec(str)) {
        res.push(match)
    }
    return res
}
module.exports=function (distPath) {
    return modifyStreamContent((content, filePath) => {
        let i=0;//统计是否已经导入
        if(!distPath) {
            return content
        }
        var matches = matchAll(content, /url\((\S+?)\)/gi);

        var currentDir = path.dirname(filePath);
        if(matches instanceof Array) {
            matches.forEach(match => {
                let url = match[1];
                if(url.toString().substr(0, 8) !== "/package") {
                    return
                }
                let file = __dirname+url.replace("'", "").replace('"', "");
                let originalPath = path.resolve(currentDir, file);
                let relative = path.relative(currentDir, originalPath);
                let res = relative.replace(/\\/g, "/");
                content = content.replace(url, res);
            })
        }
        return content
    })
}
