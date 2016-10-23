define('main',
    ['lib','module','app','login','register','registerfast','findpassword','userinformation','identityinfo','jobinfo','contactinfo','creditcard','addcreditcard','mobilesupplyname','modifyservicepassword','internetinfo','dwellinginfo','morecontact','evidence','evidencejob','evidencedegree','limitnotenough','activationfail','activationsuccess','paysuccess','my','orderdetail','repayment','repaymentdetail','go','protocol'],
    function(Lib,Module,App,Login,Register,RegisterFast,FindPassword,UserInformation,IdentityInfo,JobInfo,ContactInfo,CreditCard,AddCreditCard,MobileSupplyName,ModifyServicePassword,InternetInfo,DwellingInfo,MoreContact,Evidence,EvidenceJob,EvidenceDegree,LimitNotEnough,ActivationFail,ActivationSuccess,PaySuccess,My,OrderDetail,Repayment,RepaymentDetail,Go,Protocol){
    "use strict";
    var router,rule,
        lastView = null,
        Router = Backbone.Router.extend({
            initialize: function(){
                Backbone.on('routerchange', this.routerChangeHandler, this);
            },
            routes: {
                'Login': 'login',
                'Register': 'register',
                'Register/Fast': 'registerfast',
                'FindPassword': 'findpassword',
                'Activation': 'userinformation',
                'MyInfo': 'userinformation',
                'Identity': 'identityinfo',
                'Jobs': 'jobinfo',
                'Contact': 'contactinfo',
                'CreditCard': 'creditcard',
                'AddCreditCard/:cardId': 'addcreditcard',
                'MobileSupplyName': 'mobilesupplyname',
                'ModifyServicePassword': 'modifyservicepassword',
                'Internet': 'internetinfo',
                'Dwelling': 'dwellinginfo',
                'MoreContact': 'morecontact',
                'Evidence': 'evidence',
                'Evidence/Job': 'evidencejob',
                'Evidence/Edu': 'evidencedegree',
                'LimitNotEnough': 'limitnotenough',
                'ActivationFail/HasOrder': 'activationfail',
                'ActivationFail/NoOrder': 'activationfail',
                'ActivationSuccess/HasOrder': 'activationsuccess',
                'ActivationSuccess/NoOrder': 'activationsuccess',
                'PaySuccess': 'paysuccess',
                'My': 'my',
                'OrderDetail': 'orderdetail',
                'Repayment': 'repayment',
                'Repayment/Detail': 'repaymentdetail',
                'Protocol/:pid': 'protocol',
                'Go': 'go',
                '': 'login'
            },
            params: null,
            login: function(){
                this.hideHandler();
                lastView = new Login();
                lastView.render();
            },
            register: function(){
                this.hideHandler();
                lastView = new Register();
                lastView.render();
            },
            registerfast: function(){
                this.hideHandler();
                lastView = new RegisterFast();
                lastView.render();
            },
            findpassword: function(){
                this.hideHandler();
                lastView = new FindPassword();
                lastView.render();
            },
            userinformation: function(){
                this.hideHandler();
                lastView = new UserInformation();
                lastView.render();
            },
            identityinfo: function(){
                this.hideHandler();
                lastView = new IdentityInfo();
                lastView.render();
            },
            jobinfo: function(){
                this.hideHandler();
                lastView = new JobInfo();
                lastView.render();
            },
            contactinfo: function(){
                this.hideHandler();
                lastView = new ContactInfo();
                lastView.render();
            },
            creditcard: function(){
                this.hideHandler();
                lastView = new CreditCard();
                lastView.render();
            },
            addcreditcard: function(){
                this.hideHandler();
                lastView = new AddCreditCard();
                lastView.render();
            },
            mobilesupplyname: function(){
                this.hideHandler();
                lastView = new MobileSupplyName();
                lastView.render();
            },
            modifyservicepassword: function(){
                this.hideHandler();
                lastView = new ModifyServicePassword();
                lastView.render();
            },
            internetinfo: function(){
                this.hideHandler();
                lastView = new InternetInfo();
                lastView.render();
            },
            dwellinginfo: function(){
                this.hideHandler();
                lastView = new DwellingInfo();
                lastView.render();
            },
            morecontact: function(){
                this.hideHandler();
                lastView = new MoreContact();
                lastView.render();
            },
            evidence: function(){
                this.hideHandler();
                lastView = new Evidence();
                lastView.render();
            },
            evidencejob: function(){
                this.hideHandler();
                lastView = new EvidenceJob();
                lastView.render();
            },
            evidencedegree: function(){
                this.hideHandler();
                lastView = new EvidenceDegree();
                lastView.render();
            },
            limitnotenough: function(){
                this.hideHandler();
                lastView = new LimitNotEnough();
                lastView.render();
            },
            activationfail: function(){
                this.hideHandler();
                lastView = new ActivationFail();
                lastView.render();
            },
            activationsuccess: function(){
                this.hideHandler();
                lastView = new ActivationSuccess();
                lastView.render();
            },
            paysuccess: function(){
                this.hideHandler();
                lastView = new PaySuccess();
                lastView.render();
            },
            my: function(){
                this.hideHandler();
                lastView = new My();
                lastView.render();
            },
            orderdetail: function(){
                this.hideHandler();
                lastView = new OrderDetail();
                lastView.render();
            },
            repayment: function(){
                this.hideHandler();
                lastView = new Repayment();
                lastView.render();
            },
            repaymentdetail: function(){
                this.hideHandler();
                lastView = new RepaymentDetail();
                lastView.render();
            },
            go: function(){
                this.hideHandler();
                lastView = new Go();
                lastView.render();
            },
            protocol: function(){
                this.hideHandler();
                lastView = new Protocol();
                lastView.render();
            },
            routerChangeHandler: function(_params){
                this.params = _params;
            },
            hideHandler: function(){
                if(lastView){
                    lastView.$el.html('');
                    lastView.hide();
                }
                $(window).scrollTop(0);
            }
        });

    router = new Router();
    Backbone.WEBAPP = {router: router};
    if(run()){
        return false;
    }
    Backbone.history.start({pushState: true});

    function run(){
        rule = App.locaHandler();
        //除以下页面不需登录，其它页面均先登录
        if(rule == 'Go' || rule == 'Login' || rule == 'Register' || rule == 'FindPassword' || rule == 'Protocol/Service' || rule == 'Protocol/Private' || rule == 'Protocol/YHFQ'){
            return false;
        }
        else{
            if(!App.isLogin){
                App.jumpRef("Login");
                return true;
            }
        }
        return false;
    }

    $(window).on("orientationchange", function() {
        location.reload();
    });

    //REM页面适配
    var _android = navigator.userAgent.match(/linux/i)||navigator.userAgent.match(/android/i)||navigator.platform.match(/android/i) ? true : false;
    var _iOS = navigator.userAgent.match(/(ipod|ipad|iphone)/i) ? true : false;
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(_android || _iOS){
                    clientWidth = clientWidth;
                }
                else{
                    clientWidth = 420;
                }
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
});