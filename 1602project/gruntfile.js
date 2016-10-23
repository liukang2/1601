/**
 * Created by lijian on 2016/5/9.
 */

module.exports = function(grunt){

    'use strict';

    grunt.initConfig({

        //读取package.json文件
        pkg: grunt.file.readJSON('package.json'),

        /**
         * 清除dist目录下文件
         */
        clean: {
            css: 'src/css',
            js: 'src/js'
        },

        /**
         * css压缩插件
         */
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            css: {
                src: 'dist/css/common.css', //将之前的common.css
                dest: 'dist/css/common.min.css'  //压缩
            }
        },
        /**
         * js文件压缩插件
         */
        uglify: {
            options: {
            },
            task: {
                //配置压缩条件（常用参数）
                options: {
                    //不混淆变量名
                    //mangle: true,
                    //删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    //preserveComments: false,
                    report: "gzip"
                },
                //配置压缩文件（可配置多个），输出路径：[压缩文件路径]
                files: {
                    'dist/js/base.min.js': ['dist/js/base.js'],
                    'dist/js/common.min.js': ['dist/js/common.js']
                }
            }
        },

        /**
         * JavaScript语法和风格检查
         * 相关参数说明参考：http://my.oschina.net/u/218583/blog/508143
         */
        jshint: {
            //具体任务配置
            uses_defaults: [
                'gruntfile.js',
                'src/js/*.js'
            ],
            options: {
                //大括号包裹
                curly: true,
                //对于简单类型，使用===和!==，而不是==和!=
                eqeqeq: true,
                //对于首字母大写的函数（声明的类），强制使用new
                newcap: true,
                //禁用arguments.caller和arguments.callee
                noarg: true,
                //对于属性使用aaa.bbb而不是aaa['bbb']
                sub: true,
                //查找所有未定义变量
                undef: true,
                //查找类似与if(a = 0)这样的代码
                boss: true,
                //指定运行环境为node.js
                node: true
            }
        },

		concat: {
            css: {
                src: ['src/css/*.css'],//当前grunt项目中路径下的src/css目录下的所有css文件
                dest: 'dist/css/common.css'  //生成到grunt项目路径下的dist/css文件夹下为common.css
            }
		}
    });

    //加载相关插件
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册插件
    grunt.registerTask('default', ['concat','cssmin','uglify']);

    //使用clean命令删除dist目录下文件
    grunt.registerTask('delCss', ['clean:css']); //css文件夹
    grunt.registerTask('delJs', ['clean:js']); //js文件夹

};