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

//开发环境
fis.media('upload').match('**.css', {
    optimizer: fis.plugin('clean-css'),
}).match('*.png', {
    optimizer: fis.plugin('png-compressor'),
}).match('*', {
    useHash: false
}).match('*.js', {
    optimizer: fis.plugin('uglify-js'),
}).match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.40.4.154:8077/api/Release/Replace',
        to: 'BZone/v1.0' // 注意这个是指的是测试机器的路径，而非本地机器
    })
});


//测试环境

fis.media('upload').match('**.css', {
    optimizer: fis.plugin('clean-css'),
}).match('*.png', {
    optimizer: fis.plugin('png-compressor'),
}).match('*', {
    useHash: false
}).match('*.js', {
    optimizer: fis.plugin('uglify-js'),
}).match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.40.4.154:8077/api/Release/Replace',
        to: 'BZone/v1.0' // 注意这个是指的是测试机器的路径，而非本地机器
    })
});

//正式环境不自动发布



//发布环境
fis.media('prod')
    .match('**.css', {
        optimizer: fis.plugin('clean-css'),
    }).match('*.png', {
        optimizer: fis.plugin('png-compressor'),
    }).match('*.js', {
    optimizer: fis.plugin('uglify-js'),
}).match('*', {
        useHash: false
    });

