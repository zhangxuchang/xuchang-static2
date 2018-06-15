"use strict";

import Vue from 'vue';

// noinspection JSUnresolvedVariable
Vue.config.productionTip = (process.env.NODE_ENV !== "production");

Vue.prototype.$toCssUrl = function (imageUrl) {
    return "url(" + imageUrl + ")";
};
Vue.prototype.$toCssBackgroundImage = function (imageUrl) {
    return {
        backgroundImage : this.$toCssUrl(imageUrl),
    };
};

export default {
    get bridge() {
        if (undefined === window.bridge) {
            return process.env.bridge;
        }
        else {
            return window.bridge;
        }
    },
    mount : function (vueComponent) {
        console.log("Will start to mount component to slimvue app", vueComponent);
        let div = document.getElementById('slimvue-app');
        if (div === null) {
            div = document.createElement('div');
            div.id = "slimvue-app";
            div.innerHTML = "<slimvue-page></slimvue-page>";
            document.body.appendChild(div);
        }
        else {
            console.warn("Div element already exists, will replace existing content.");
        }
        
        let app = window.slimvue = new Vue({
            components : {
                "slimvue-page" : vueComponent,
            },
            el         : "#slimvue-app",
        });
        
        return app;
    },
};
