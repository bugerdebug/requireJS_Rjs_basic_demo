({
    appDir: '../src', //app源码的根目录
    // baseUrl: "../src/js",  //error: has a source path that is same as output
    dir:"../release", //app发布代码的根目录，r.js把构建后的代码存放于此
    mainConfigFile:'../src/js/config.js', 

    paths: {
        one: "mod/one",
        two: "mod/two",
        three: "mod/three"
    },

    modules:[{  //合并策略，如one.js和two.js，合并成combine.js
    	name:"combine",
    	include:[
    		'one',
    		'two'
    	]
	},
    optimize: 'none'//默认为uglify，即压缩代码，none是不压缩
    /*
    * 如果还有其他要合并的（往往是有的），继续配置
    *
    * {
    *    name:"vendor",
    *    include:['jquery', 'jquery-ui', 'backbone'] 
    * }
    **/
   
    ]
})