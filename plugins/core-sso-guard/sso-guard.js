/**
 * @description Oasis core login sso guard.
 * @author xuchang
 * @version 1.0
 */

window.OasisCoreSSOGuard = {

    //coreProxyPage: "http://sso-guard.oasisgames.cn/plugins/core-sso-guard/cross-domain-communicator.html?2",
    coreProxyPage: "//core.oasisgames.cn/cross-domain-communicator.html",
    loginCookies: [],
    loginCookieDomain:'',
    loginSessionStartTime: 0,
    loginUrl: '',
    guardStarted: true,

    initialize: function (data) {
        this.dataInitialize(data);
        this.installProxy();
        this.eventRegister();
    },
    
    dataInitialize: function (data) {

        this.output('data initialize:'); console.log(data);

        if(typeof(data.loginCookies) == 'undefined' || data.loginCookies.length == 0) {
            this.output('parameter missing: data-login-cookies');
            this.guardStarted = false;
        }
        else
        {
            this.loginCookies = data.loginCookies.split(",");
        }
        if(typeof(data.loginSessionStartTime) == 'undefined' || data.loginSessionStartTime.length == 0) {

            var startTime = this.getCookie('oasis-core-token-session-start-time');
            if(startTime.length == 0){
                this.output('parameter missing: data-login-session-start-time AND oasis-core-token-session-start-time cookie is empty');
                this.guardStarted = false;
            }
            else{
                this.loginSessionStartTime = parseInt(startTime);
            }
        }
        else
        {
            this.loginSessionStartTime = parseInt(data.loginSessionStartTime);
        }
        if(typeof(data.loginUrl) == 'undefined' || data.loginUrl.length == 0) {
            /* login url is optional parameter,sso-guard will reload page without it*/
            //this.output('parameter missing: data-login-url');
            //this.guardStarted = false;
        }
        else{
            this.loginUrl = data.loginUrl;
        }

        if(typeof(data.loginCookiesDomain) != 'undefined' && data.loginCookiesDomain.length > 0) {
            this.loginCookieDomain = data.loginCookiesDomain;
        }
    },

    output: function (msg) {
        console.log("[sso-guard] " + msg);
    },

    deleteCookie: function (name) {

        if(this.loginCookieDomain.length > 0) {
            document.cookie = name + '=;Path=/; domain='+ this.loginCookieDomain +'; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        else{
            var domain = document.domain;
            document.cookie = name + '=;Path=/; domain=.'+domain+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = name + '=;Path=/; domain='+domain+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

    },

    getCookie: function (c_name) {
        var i, x, y;
        var ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return decodeURI(y);
            }
        }

        return '';
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

        if(typeof(data.user_login_time) == 'undefined'){
            this.output("can not read 'user_login_time' from proxy message: ");
            console.log(data);
            return;
        }
        else{
            this.output('core user_login_time=' + data.user_login_time);
        }

        if(data.user_login_time <= this.loginSessionStartTime){
            return;
        }
        // clear login cookie and redirect to login url
        for(var i in this.loginCookies){
            this.deleteCookie(this.loginCookies[i]);
            this.output('delete cookie: ' + this.loginCookies[i]);
        }

        if(this.loginUrl.length > 0){
            window.top.location.href = this.loginUrl;
        }
        else{
            window.top.location.href = window.top.location.href;
        }
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


