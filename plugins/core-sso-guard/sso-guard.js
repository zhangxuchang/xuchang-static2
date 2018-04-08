/**
 * @description Oasis core login sso guard.
 * @author xuchang
 * @version 1.0
 */

window.OasisCoreSSOGuard = {

    coreProxyPage: "http://sso-guard.oasisgames.cn/plugins/core-sso-guard/cross-domain-communicator.html?1",
    loginCookies: [],
    loginSessionStartTime: 0,
    loginUrl: '',
    guardStarted: true,

    initialize: function (data) {
        this.dataInitialize(data);
        this.installProxy();
        this.eventRegister();
    },
    
    dataInitialize: function (data) {

        if(typeof(data.loginCookies) == 'undefined' || data.loginCookies.length == 0) {
            this.output('parameter missing: data-login-cookies');
            this.guardStarted = false;
        }
        else
        {
            this.loginCookies = data.loginCookies.split(",");
        }
        if(typeof(data.loginSessionStartTime) == 'undefined' || data.loginSessionStartTime.length == 0) {
            this.output('parameter missing: data-login-session-start-time');
            this.guardStarted = false;
        }
        else
        {
            this.loginSessionStartTime = parseInt(data.loginSessionStartTime);
        }
        if(typeof(data.loginUrl) == 'undefined' || data.loginUrl.length == 0) {
            this.output('parameter missing: data-login-url');
            this.guardStarted = false;
        }
        else{
            this.loginUrl = data.loginUrl;
        }
    },

    output: function (msg) {
        console.log("[sso-guard] " + msg);
    },

    deleteCookie: function (name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    
    installProxy: function () {
        var html = '<iframe id="oasis-core-sso-gruard-frame" src="'+ this.coreProxyPage+'" style="display: none"></iframe>';
        var body = $('body');
        body.append(html);
        this.output('install proxy page');
    },

    ssoGuard: function (data) {

        if(this.guardStarted == false){
            this.output('not started');
            return;
        }

        console.log(data);

        if(typeof(data.user_login_time) == 'undefined'){
            this.output("can not read 'user_login_time' from proxy message");
            return;
        }
        if(data.user_login_time <= this.loginSessionStartTime){
            return;
        }
        // clear login cookie and redirect to login url
        for(var i in this.loginCookies){
            this.deleteCookie(this.loginCookies[i]);
            this.output('delete cookie: ' + this.loginCookies[i]);
        }

        //window.top.location.href = this.loginUrl;
    },

    eventRegister: function () {
        var handleReceive = function (data) {
            OasisCoreSSOGuard.ssoGuard(data.data);
        };
        window.addEventListener("message",handleReceive,false);
    }
};

$(function () {
    var data = $('#oas-core-sso-guard').data();
    OasisCoreSSOGuard.initialize(data);
});


