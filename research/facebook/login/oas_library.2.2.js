/*
 * OAS Javascript Library
 *
 * Before use "mail.ru" login please inlude lib : <script type="text/javascript" src="//connect.mail.ru/js/loader.js"></script>
 *
 */

$(document).ready(function () {
    // Run
    OAS_GAMES_JS.main();
})

var OAS_GAMES_JS = {
    // facebook api
    facebook: {},
    google: {},
    tool: {

        _p: function (data) {
            if (window.console) window.console.info(data);
        },

        ajaxRequest: function (url, callback) {
            if (url == null || url.length == 0) {
                alert('ajaxRequest: url is null');
                return;
            }
            if (url.indexOf('?') > -1) {
                url += "&callback=?";
            }
            else {
                url += "?callback=?";
            }
            $.getJSON(
                url,
                function (data) {
                    callback(data);
                }
            );
        },
        getCookie: function (c_name) {
            var i, x, y;
            var ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return unescape(y);
                }
            }
        },
        setCookie: function (c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value + ';path=/; domain=.oasgames.com';
        }
    },
    main: function () {
        // sns init
        OAS_GAMES_JS.facebook.init();
        OAS_GAMES_JS.google.init();

        // init params
        if (typeof(OAS_PASSPORT_HOST) != 'undefined') {
            OAS_GAMES_JS.params.passportHost = OAS_PASSPORT_HOST;
        }

        if (typeof(OAS_MAILRU_APP_ID) != 'undefined') {
            OAS_GAMES_JS.params.mailruAppID = OAS_MAILRU_APP_ID;
        }

        if (typeof(OAS_MAILRU_PRIVATE_KEY) != 'undefined') {
            OAS_GAMES_JS.params.mailruPriKey = OAS_MAILRU_PRIVATE_KEY;
        }

        OAS_GAMES_JS.mailru.init();

    },
    commonLogin: {
        loginWindow: null,
        loginCallback: null,
        udfCbFun: null,
        loginMsg: null
    },
    params: {
        passportHost: 'passport.oasgames.com',
        mailruAppID: '741750',
        mailruPriKey: '79230f7841749c1c64a58d95553029dd'
    }
};


//--- Facebook combine ---

OAS_GAMES_JS.facebook.init = function () {

    if(typeof(FB) != 'undefined'){
        return;
    }

    // init app id,can be defined by set variable: FB_APP_ID
    OAS_GAMES_JS_facebookAppId = '528596217154255';
    if (typeof(FB_APP_ID) != 'undefined' && FB_APP_ID.length > 0) {
        OAS_GAMES_JS_facebookAppId = FB_APP_ID;
    }

    // init sdk language ,can be defined by set variable: FB_APP_LANGUAGE
    var fbLang = 'en_US';
    if (typeof(FB_APP_LANGUAGE) != 'undefined') {
        if (FB_APP_LANGUAGE.length > 0) fbLang = FB_APP_LANGUAGE;
    }

    window.fbAsyncInit = function () {
        FB.init({
            appId: OAS_GAMES_JS_facebookAppId,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.12'
        });
    };

    // Load the SDK Asynchronously
    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/" + fbLang + "/sdk.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
};

OAS_GAMES_JS.facebook.login = function (message, loginCallBack) {

    var ucCallback = function (data) {

        if (data.status == 'ok') {

            if (typeof(loginCallBack) != 'undefined') {

                loginCallBack(data.val);
            }
            else {

                var reHref = window.top.location.href;

                if (reHref.indexOf('?') > -1) {
                    reHref += "&fbfirst=";
                }
                else {
                    reHref += "?fbfirst=";
                }
                reHref += data.val.fbfirst;
                window.top.location.href = reHref;
            }
        }
        else {
            OAS_GAMES_JS.tool._p({'uc': 'login fail', 'data': data});
            alert(message.fail + '!');
        }
    };

    var fbCallback = function (response) {
        var ucFbLogin = "//passport.oasgames.com/index.php?m=fbAPILogin&access_token=" + response.authResponse.accessToken;
        OAS_GAMES_JS.tool.ajaxRequest(ucFbLogin, ucCallback);
    };

    FB.login(function (response) {

        if (response.authResponse) {
            OAS_GAMES_JS.tool._p(response);
            fbCallback(response);
        }
        else {
            OAS_GAMES_JS.tool._p(response);
            alert(message.fail);
        }
    },{
        auth_type: "reauthorize"
    });
};

//--- Google combine ---

OAS_GAMES_JS.google.init = function () {

    document.domain = 'oasgames.com';

    // Load the SDK Asynchronously
    (function (d) {
        var js, id = 'google-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "https://apis.google.com/js/platform.js?onload=OAS_GAMES_JS_google_sdkInit";
        ref.parentNode.insertBefore(js, ref);
    }(document));
};

var OAS_GAMES_JS_google_sdkInit = function () {
    gapi.load('auth2', function () {
    });
};

OAS_GAMES_JS.google.login = function (message, loginCallBack) {

    var gCallbackSucc = function (token) {
        var ucGLogin = "//passport.oasgames.com/index.php?m=googleLogin&access_token=" + token;
        OAS_GAMES_JS.tool.ajaxRequest(ucGLogin, ucCallback);
    };

    var gCallbackFail = function (error) {
        alert("Error:\n" + error);
    };

    var ucCallback = function (data) {

        if (data.status == 'ok') {

            if (typeof(loginCallBack) != 'undefined') {

                loginCallBack(data.val);
            } else {

                var reHref = window.top.location.href;

                if (reHref.indexOf('?') > -1) {
                    reHref += "&fbfirst=";
                }
                else {
                    reHref += "?fbfirst=";
                }
                reHref += data.val.fbfirst;
                window.top.location.href = reHref;
            }
        }
        else {
            OAS_GAMES_JS.tool._p({'uc': 'login fail', 'data': data});
            alert(message.fail + '!');
        }
    };

    gapi.auth2.authorize({
        client_id: '684208335311.apps.googleusercontent.com',
        scope: 'email profile openid',
        response_type: 'id_token permission'
    }, function (response) {
        if (response.error) {
            // An error happened!
            console.log(response.error);
            gCallbackFail(response.error);
            return;
        }
        // The user authorized the application for the scopes requested.
        var accessToken = response.access_token;
        var idToken = response.id_token;
        // You can also now use gapi.client to perform authenticated requests.
        console.log("ID Token: " + idToken);
        console.log("Access Token: " + accessToken);
        gCallbackSucc(idToken);
    });
};

OAS_GAMES_JS.twitter = {
    loginMsg: '',
    loginWindow: null
};

OAS_GAMES_JS.twitter.login = function (message, cbfun) {
    OAS_GAMES_JS.twitter.loginMsg = message;
    OAS_GAMES_JS.twitter.udfCbFun = cbfun;
    var reqHost = window.location.host;
    var ucLoginUrl = '//passport.oasgames.com/index.php?a=twitter&m=startLogin&r_host=' + reqHost;
    OAS_GAMES_JS.twitter.loginWindow = window.open(ucLoginUrl, "TwitterLogin", "height=650,width=750,scrollbars=no,resizable=no");
};

OAS_GAMES_JS.twitter.loginCallback = function (loginKey, loginRes, fbfirst) {

    OAS_GAMES_JS.twitter.loginWindow.close();

    if (loginRes == 'ok') {

        if (typeof(OAS_GAMES_JS.twitter.udfCbFun) != 'undefined') {
            OAS_GAMES_JS.twitter.udfCbFun(loginKey, loginRes, fbfirst);
        }
        else {

            var reHref = window.top.location.href;

            if (reHref.indexOf('?') > -1) {
                reHref += "&fbfirst=";
            }
            else {
                reHref += "?fbfirst=";
            }
            reHref += fbfirst;
            window.top.location.href = reHref;
        }
    }
    else {
        alert(OAS_GAMES_JS.twitter.loginMsg.fail + '!');
    }

};

OAS_GAMES_JS.VK = {};
OAS_GAMES_JS.VK.login = function (message, cbfun) {
    OAS_GAMES_JS.commonLogin.loginMsg = message;
    OAS_GAMES_JS.commonLogin.udfCbFun = cbfun;
    var reqHost = window.location.host;
    var ucLoginUrl = '//' + OAS_GAMES_JS.params.passportHost + '/index.php?a=russiasns&m=showVKLoginPage&r_host=' + reqHost;

    OAS_GAMES_JS.commonLogin.loginWindow = window.open(ucLoginUrl, "VKLogin", "height=650,width=750,scrollbars=no,resizable=no");
};

OAS_GAMES_JS.commonLogin.loginCallback = function (loginKey, loginRes, fbfirst) {

    OAS_GAMES_JS.commonLogin.loginWindow.close();

    if (loginRes == 'ok') {

        if (OAS_GAMES_JS.commonLogin.udfCbFun != null) {
            OAS_GAMES_JS.commonLogin.udfCbFun(loginKey, loginRes, fbfirst);
        }
        else {

            var reHref = window.top.location.href;

            if (reHref.indexOf('?') > -1) {
                reHref += "&fbfirst=";
            }
            else {
                reHref += "?fbfirst=";
            }
            reHref += fbfirst;
            window.top.location.href = reHref;
        }
    }
    else {
        alert(OAS_GAMES_JS.commonLogin.loginMsg.fail + '!');
    }

};

OAS_GAMES_JS.OK = {};
OAS_GAMES_JS.OK.login = function (message, cbfun) {

    OAS_GAMES_JS.commonLogin.loginMsg = message;
    OAS_GAMES_JS.commonLogin.udfCbFun = cbfun;
    var reqHost = window.location.host;
    var ucLoginUrl = '//' + OAS_GAMES_JS.params.passportHost + '/index.php?a=russiasns&m=showOKLoginPage&r_host=' + reqHost;

    OAS_GAMES_JS.commonLogin.loginWindow = window.open(ucLoginUrl, "OKLogin", "height=650,width=750,scrollbars=no,resizable=no");
};

//
// 使用mail.ru登录的话需在本库前加载：<script type="text/javascript" src="//connect.mail.ru/js/loader.js"></script>
//
OAS_GAMES_JS.mailru = {};
OAS_GAMES_JS.mailru.init = function () {

    if (typeof(mailru) == 'undefined') {
        return;
    }

    mailru.loader.require('api', function () {
        mailru.connect.init(OAS_GAMES_JS.params.mailruAppID, OAS_GAMES_JS.params.mailruPriKey);
    });

    OAS_GAMES_JS.mailru.eventListened = false;

};

OAS_GAMES_JS.mailru.login = function (message, loginCallBack) {

    var mailruCallbackSucc = function (sessionKey) {
        var ucGLoginUrl = "//"+ OAS_GAMES_JS.params.passportHost +"/index.php?a=russiasns&m=mailruLogin&appid=" + OAS_GAMES_JS.params.mailruAppID + "&session_key=" + sessionKey;
        OAS_GAMES_JS.tool.ajaxRequest(ucGLoginUrl, ucCallback);
    };

    var ucCallback = function (data) {

        if (data.status == 'ok') {

            if (typeof(loginCallBack) != 'undefined') {
                loginCallBack(data.val);
            }
            else {

                var reHref = window.top.location.href;

                if (reHref.indexOf('?') > -1) {
                    reHref += "&fbfirst=";
                }
                else {
                    reHref += "?fbfirst=";
                }
                reHref += data.val.fbfirst;
                window.top.location.href = reHref;
            }
        }
        else {
            OAS_GAMES_JS.tool._p({'uc': 'login fail', 'data': data});
            alert(message.fail + '!');
        }
    };

    if(OAS_GAMES_JS.mailru.eventListened == false)
    {
        OAS_GAMES_JS.mailru.eventListened = true;
        mailru.events.listen(mailru.connect.events.login, function(session) {
            OAS_GAMES_JS.tool._p(session);
            mailruCallbackSucc(session.session_key);
        });
    }

    mailru.connect.login(['widget', 'photos']);
};

OAS_GAMES_JS.Yahoo = {
    lang:'en'
};
OAS_GAMES_JS.Yahoo.login = function (message, cbfun) {

    OAS_GAMES_JS.commonLogin.loginMsg = message;
    OAS_GAMES_JS.commonLogin.udfCbFun = cbfun;
    var reqHost = window.location.host;
    var ucLoginUrl = '//' + OAS_GAMES_JS.params.passportHost + '/index.php?a=yahoo&m=showLoginPage&r_host=' + reqHost + '&r_lang=' + OAS_GAMES_JS.Yahoo.lang;

    OAS_GAMES_JS.commonLogin.loginWindow = window.open(ucLoginUrl, "YahooLogin", "height=650,width=750,scrollbars=no,resizable=no");
};

OAS_GAMES_JS.Steam = {};
OAS_GAMES_JS.Steam.login = function (message, cbfun) {

    OAS_GAMES_JS.commonLogin.loginMsg = message;
    OAS_GAMES_JS.commonLogin.udfCbFun = cbfun;
    var reqHost = window.location.host;
    var ucLoginUrl = '//' + OAS_GAMES_JS.params.passportHost + '/index.php?a=steam&m=login&r_host=' + reqHost;

    OAS_GAMES_JS.commonLogin.loginWindow = window.open(ucLoginUrl, "SteamLogin", "height=690,width=1060,scrollbars=no,resizable=no");
};
