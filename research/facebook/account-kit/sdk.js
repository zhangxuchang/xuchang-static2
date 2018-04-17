(function _(a, b) {
    var c = 24 * 60 * 60,
        d = 7 * c,
        e = "https://developers.facebook.com/docs/accountkit/integratingweb#configureloginhtml",
        f = "Please ensure the AccountKit SDK is hotlinked directly. See " + e,
        g = Math.floor(new Date().getTime() / 1e3) - b;
    if (g > d) throw new Error("The SDK is more than 7 days old. " + f);
    else if (g > c) {
        var h = window.console;
        if (h) h.warn("The SDK is more than 1 day old. " + f)
    }
    if (!window.AccountKit) window.AccountKit = {
        doNotLinkToSDKDirectly: "doNotLinkToSDKDirectly"
    };
    var i = document.createElement("script");
    i.src = a;
    i.async = true;
    var j = document.getElementsByTagName("script")[0];
    j.parentNode && j.parentNode.insertBefore(i, j)
})("https:\/\/sdk.accountkit.com\/en_US\/sdk.js?hash=7657d0766c87d780f8d6abb7914b75e2", 1523949293);