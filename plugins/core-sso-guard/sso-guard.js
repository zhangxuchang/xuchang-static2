/**
 * @description Oasis core login sso guard.
 * @author xuchang
 * @version 1.0
 */

window.OasisCoreSSOGuard = {

    coreProxyPage: "http://sso-guard.oasisgames.cn/research/post-message/child.html?1",

    initialize: function (data) {
        console.log(data);
        OasisCoreSSOGuard.installProxy();
        OasisCoreSSOGuard.eventRegister();
    },

    deleteCookie: function (name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    
    installProxy: function () {
        var html = '<iframe id="oasis-core-sso-gruard-frame" src="'+ OasisCoreSSOGuard.coreProxyPage+'" style="display: none"></iframe>';
        var body = $('body');
        body.append(html);
        console.log('install proxy page');
    },
    
    eventRegister: function () {
        var handleReceive = function (data) {
            OasisCoreSSOGuard.ssoGuard(data);
        };
        window.addEventListener("message",handleReceive,false);
    },

    ssoGuard: function (data) {
        console.log('sso-guard');
        console.log(data.data);
    },
};

$(function () {
    var data = $('#oas-core-sso-guard').data();
    OasisCoreSSOGuard.initialize(data);
});


