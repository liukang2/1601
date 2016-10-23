define('models', ['cmodel', 'inherit'], function(cModel, Inherit){
	"use strict";
	var environment = 'pro',
		baseUrl= '',
		resourceUrl = '';

    //不同的环境调配置
	switch(environment){
        case 'dev':
            baseUrl = "http://localhost/openapi";
            resourceUrl = "http://192.168.1.83/yhfq_h5/dist";
            break;
		case 'pro':
			baseUrl = "/openapi";
			resourceUrl = "http://192.168.1.103/dist";
			break;
	}	
	var m = {};

    //demo
    m.demoModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/test";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);

    //获取访问应花token
    m.getAccessTokenModel = Inherit.Class(function(){
        this.url = baseUrl + "/auth/getAccessToken";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    //验证授权token并返回有关第三方请求数据
    m.checkAccessTokenModel = Inherit.Class(function(_aToken){
        this.url = baseUrl + "/auth/checkAccessToken";
        this.method = "post";
        this.param = "accessToken="+_aToken;
        this.dataType = 'json';
    }, cModel);
    //登录code和手机号是否匹配
    m.isCodeMatchPhoneModel = Inherit.Class(function(_code,_phone){
        this.url = baseUrl + "/user/isCodeMatchPhone";
        this.method = "get";
        this.param = "code="+_code+"&phone="+_phone;
        this.dataType = 'json';
    }, cModel);



    // 用户登录
    m.userLoginModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/login";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 用户注册
    m.userRegisterModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/register";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 忘记密码
    m.resetPasswordPwdModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/resetPassword";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 发送短信验证码
    m.phoneCodeModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/sendSmsVerify";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 图形验证码
    m.imgCodeModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/getVerifyCodeRequest";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取我的应花资料状态
    m.myDataStatusModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getMyDataStatus";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);


    // 获取身份认证信息
    m.getIdentityModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getIdentity";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 提交身份认证信息
    m.subIdentityInfoModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subIdentityInfo";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 获取获取借记卡列表
    m.getDebitBankCardModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getDebitBankCard";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);


    // 获取工作信息
    m.getJobInfoModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getJobInfo";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 提交工作信息
    m.subJobInfoModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subJobInfo";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取联系人信息
    m.getContractModel = Inherit.Class(function(_code, _type){
        this.url = baseUrl + "/member/getContract";
        this.method = "post";
        this.param = "code="+_code+"&type="+_type;
        this.dataType = 'json';
    }, cModel);
    // 提交联系人信息
    m.subContractModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subContract";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取芝麻分
    m.getZmfModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getZmf";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 芝麻分认证
    m.authorizeZmfModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/authorizeZmf";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 跳过芝麻认证
    m.skipZmfAuthorizeModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/skipZmfAuthorize";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);


    // 获取互联网信息
    m.getInternetInfoModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getInternetInfo";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 提交互联网信息
    m.subInternetInfoModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subInternetInfo";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取居住信息
    m.getLiveInfoModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getLiveInfo";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 提交居住信息
    m.subLiveInfoModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subLiveInfo";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取证明材料
    m.getProveInfoModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getProveInfo";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 提交工作证明
    m.subJobProveModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subJobProve";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 提交学历证明
    m.subEduProveModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subEduProve";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 获取信用卡信息
    m.getCreditBankCardModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/getCreditBankCard";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    // 添加信用卡信息
    m.subCreditcardModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/subCreditBankCard";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    // 更新信用卡信息
    m.updateCreditcardModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/updateCreditBankCard";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 手机运营商认证请求
    m.authOperatorTokenModel = Inherit.Class(function(_code){
        this.async = false;
        this.url = baseUrl + "/member/authOperatorToken";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);
    m.authOperatorModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/authOperator";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    //重置密码请求
    m.resetOperatorPwdReqModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/resetOperatorPwdReq";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);
    m.submitOperatorResetPwdModel = Inherit.Class(function(){
        this.url = baseUrl + "/member/submitOperatorResetPwd";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);


    // 激活应花额度
    m.activationMyLimitModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/member/activationMyLimit";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);

    // 应花分期下单
    m.installmentOrderModel = Inherit.Class(function(){
        this.url = baseUrl + "/order/installmentOrder";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);

    // 获取我的应花额度及订单状态
    m.myLimitOrderModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/user/getMyLimitOrder";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);

    // 获取我的应花待还款账单
    m.getMyBillModel = Inherit.Class(function(_code){
        this.url = baseUrl + "/order/getMyBill";
        this.method = "post";
        this.param = "code="+_code;
        this.dataType = 'json';
    }, cModel);

    // 获取订单详情
    m.getOrderDetailModel = Inherit.Class(function(_code,_oid){
        this.url = baseUrl + "/order/getOrderDetail";
        this.method = "get";
        this.param = "code="+_code+"&yhOrderNo="+_oid;
        this.dataType = 'json';
    }, cModel);

    // 获取订单详情
    m.getOrderDetailModel = Inherit.Class(function(_code,_oid){
        this.url = baseUrl + "/order/getOrderDetail";
        this.method = "get";
        this.param = "code="+_code+"&yhOrderNo="+_oid;
        this.dataType = 'json';
    }, cModel);

    // 获取协议值
    m.repayModel = Inherit.Class(function(){
        this.url = baseUrl + "/pay/repay";
        this.method = "post";
        this.param = "";
        this.dataType = 'json';
    }, cModel);

	// 获取选择器数据
	m.pageOptionModel = Inherit.Class(function(){
        //this.url = "http://192.168.1.83:8088/webs/yhfq_h5/d_api/optionData";
        this.url = resourceUrl + "/data/optionData";
        this.method = "get";
        this.param = "";
        this.dataType = 'json';
	}, cModel);

    // 获取地区数据
    m.addressModel = Inherit.Class(function(){
        //this.url = "http://192.168.1.83:8088/webs/yhfq_h5/d_api/addressData";
        this.url = resourceUrl + "/data/addressData";
        this.method = "get";
        this.param = "";
        this.dataType = 'json';
    }, cModel);

	m.baseUrl = baseUrl;
	m.resourceUrl = resourceUrl;

	return m;
});