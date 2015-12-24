({
    appDir: '../src',
    // baseUrl: "../src/js",  //error: has a source path that is same as output
    dir:"../release",
    mainConfigFile:'../src/js/config.js',

    paths: {
        one: "mod/one",
        two: "mod/two",
        three: "mod/three"
    },

    modules:[{
    	name:"combine",
    	include:[
    		'one',
    		'two'
    	]
	}]
})