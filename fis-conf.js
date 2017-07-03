/**
 * Created by yanxlg on 2017/5/19 0019.
 * 开发环境不进行压缩，不进行美化，不设置hash  默认为开发环境
 * 发布环境media=="pub"
 * fis不对es6进行处理，es6交给webpack进行处理
 */
fis.hook('relative');//模块使用相对路径，与webpack统一
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'build/**',
    'fis-conf.js',
    'package.json',
    'LICENSE',
    'README.md',
    'webpack.config.js',
    '.gitignore',
    'gulp_css_url.js',
    'gulpfile.js',
    '.modifyStreamContent.js',
    '**/*.es6',
    '**/*.scss',
    'package-lock.json'
]);
fis.match('::package', {
    postpackager: fis.plugin('loader', {})
});


//开发环境
fis.match('**.js', {
});

fis.match('**.css', {
});

fis.match('**.png', {
    optimizer: fis.plugin('png-compressor'),
});

fis.match('*', {
    useHash: false
});

fis.match('**.html', {
    relative:true
});
fis.match('**.css', {
    relative:true
});
fis.match('**.js', {
    relative:true
});


//发布环境
fis.media('prod')
    .match('**.css', {
        optimizer: fis.plugin('clean-css'),
    }).match('*.png', {
        optimizer: fis.plugin('png-compressor'),
    }).match('*', {
        useHash: false
    });

