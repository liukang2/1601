var webpack = require('webpack');
var path = require('path');
//定义了一些文件夹的路径
var buildPath = path.resolve(__dirname, "dist/js/");
var viewPath = path.resolve(__dirname, 'src/view_modules');
var tplPath = path.resolve(__dirname, 'src/templates');
var modelPath = path.resolve(__dirname, 'model_modules');
var shimPath = path.resolve(__dirname, 'shim_modules');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        base : './src/view_modules/main'
    },
    output: {
        path: buildPath,
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.html$/, loader: 'html-loader?harmony' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=img/[name].[ext]'}
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    //devtool: 'eval-source-map',
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.html'],
        alias: {
            //基础框架
            //jquery: shimPath+'/jquery-min',
            //md5: shimPath+'/jquery-md5',
            //framework7: shimPath+'/framework7-min',
            underscore: shimPath+'/underscore',
            backbone: shimPath+'/backbone',
            fastclick : shimPath+'/fastclick',
            //rsa: shimPath+'/rsa.min',

            //MODEL层
            cmodel: modelPath+'/cmodel',
            cstore: modelPath+'/cstore',
            csession: modelPath+'/csession',
            models: modelPath+'/models',
            stores: modelPath+'/stores',
            inherit: modelPath+'/inherit',

            //控制层
            lib: viewPath+'/lib',
            app: viewPath+'/app',
            picker: viewPath+'/picker',
            login: viewPath+'/login',
            register: viewPath+'/register',
            registerfast: viewPath+'/registerfast',
            findpassword: viewPath+'/findpassword',
            userinformation: viewPath+'/userinformation',
            identityinfo: viewPath+'/identityinfo',
            jobinfo: viewPath+'/jobinfo',
            contactinfo: viewPath+'/contactinfo',
            creditcard: viewPath+'/creditcard',
            addcreditcard: viewPath+'/addcreditcard',
            mobilesupplyname: viewPath+'/mobilesupplyname',
            modifyservicepassword: viewPath+'/modifyservicepassword',
            internetinfo: viewPath+'/internetinfo',
            dwellinginfo: viewPath+'/dwellinginfo',
            morecontact: viewPath+'/morecontact',
            evidence: viewPath+'/evidence',
            evidencejob: viewPath+'/evidencejob',
            evidencedegree: viewPath+'/evidencedegree',
            limitnotenough: viewPath+'/limitnotenough',
            activationfail: viewPath+'/activationfail',
            activationsuccess: viewPath+'/activationsuccess',
            paysuccess: viewPath+'/paysuccess',
            my: viewPath+'/my',
            orderdetail: viewPath+'/orderdetail',
            repayment: viewPath+'/repayment',
            repaymentdetail: viewPath+'/repaymentdetail',
            go: viewPath+'/go',
            protocol: viewPath+'/protocol',
            /*protocolfq: viewPath+'/protocolfq',
            protocolloan: viewPath+'/protocolloan',
            protocolchargeback: viewPath+'/protocolchargeback',
            */

            //模板
            goTpl: tplPath+'/go',       //对外接链接中转
            headerTpl: tplPath+'/header',
            loginTpl: tplPath+'/login',     //登录
            registerTpl: tplPath+'/register',     //注册
            registerfastTpl: tplPath+'/register.fast',     //注册（商户给出用户手机号）
            findpasswordTpl: tplPath+'/findpassword',     //找回登录密码
            userinformationTpl: tplPath+'/userinformation',     //激活分期、我的应花资料
            identityinfoTpl: tplPath+'/identityinfo',     //身份认证
            jobinfoTpl: tplPath+'/jobinfo',       //工作信息
            contactinfoTpl: tplPath+'/contactinfo',       //联系信息
            creditcardTpl: tplPath+'/creditcard',     //信用卡
            addcreditcardTpl: tplPath+'/addcreditcard',       //添加信用卡
            mobilesupplynameTpl: tplPath+'/mobilesupplyname',     //手机运营商认证
            modifyservicepasswordTpl: tplPath+'/modifyservicepassword',     //修改手机服务密码
            internetinfoTpl: tplPath+'/internetinfo',     //互联网信息
            dwellinginfoTpl: tplPath+'/dwellinginfo',     //居住信息
            morecontactTpl: tplPath+'/morecontact',       //补充联系人
            evidenceTpl: tplPath+'/evidence',     //证明材料
            evidencejobTpl: tplPath+'/evidence.job',       //工作证明
            evidencedegreeTpl: tplPath+'/evidence.degree',     //学历证明
            limitnotenoughTpl: tplPath+'/limitnotenough',     //登录或激活后，额度不足
            activationfailTpl: tplPath+'/activationfail',     //开通失败（有/无订单）
            activationsuccessTpl: tplPath+'/activationsuccess',   //开通成功（有/无订单）
            paysuccessTpl: tplPath+'/paysuccess',     //订单支付成功
            myTpl: tplPath+'/my',     //我的应花分期
            orderdetailTpl: tplPath+'/orderdetail',     //订单详情
            repaymentTpl: tplPath+'/repayment',       //分期还款
            repaymentdetailTpl: tplPath+'/repayment.detail',       //分期还款明细
            protocolTpl: tplPath+'/protocol',       //相关协议

             /*protocolfqTpl: tplPath+'/protocolfq',     //应花分期协议
            protocolloanTpl: tplPath+'/protocolloan',     //三方借款协议
            protocolchargebackTpl: tplPath+'/protocolchargeback'     //扣款授权协议
            */
        }
    }
};