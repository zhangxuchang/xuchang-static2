# Facebook Feed 使用调查

起因: 由于 facebook feed dialog 升级，导致我们之前使用的api调用方式没办法分享图片，
      因此重新调查使用方法

##1. FB 文档资料

**FB.ui:**  <https://developers.facebook.com/docs/javascript/reference/FB.ui/>

**Feed Dialog:**  <https://developers.facebook.com/docs/sharing/reference/feed-dialog/>

**Share debugger** <https://developers.facebook.com/tools/debug/sharing//>

##2. API 使用测试

javascript sdk 调用:

```
FB.ui({
            method: 'feed',
            link: 'https://panel-deploy-center.oasgames.com/',
            redirect_uri: 'https://naruto.oasgames.com/de/',
            display: 'popup',
            source: 'https://img.oasgames.com/oasevent/1462345926.swf',
            picture: 'http://img.oasgames.com/oasevent/1471339989.jpg',
            ref: 'oas,dc',
            description: 'Pls Say something about this feed',
        }, function (response) {
        });
```

**link 参数**

- 可以通过该参数设置分享的目标页面url （点击分享内容后得去向）
- Facebook Crawler 会从link设定的页面中去抓取标题，图片，内容等信息(自动寻找合适内容);如分享目标网页为： https://oasgames.com/pc/en/home.html，效果:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/fb/1.png)


- 可以通过在目标页面中设置 meta-data 来为 crawler 提供指定内容

```
    <meta property="og:url" content="https://panel-deploy-center-dev.oasgames.com/"/>
    <meta property="og:type" content="oasapp"/>
    <meta property="og:title" content="OASIS deploy center"/>
    <meta property="og:description" content="Make it easy to publish product to aws ecs"/>
    <meta property="og:image" content="http://img.oasgames.com/oasevent/1471339989.jpg"/>
```

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/fb/2.png)

**source 参数**

- 根据文档中描述可以通过source在分享中加入swf或mp3 但同时要求通过 picture参数设置缩略图；
  但是测试结果是感觉这个参数无效！
  
**picture 参数**  

- 文档中标注为 deprecated; 但是如果分享模式是 plain text 即 link 参数为空时候，该参数还是有效的，可以为分享设置一张图 (类似微信朋友圈). 但是当分享被点击时候只能打开图片的地址； 我们也尝试了在这种模式下设置 redirect_uri 来企图改变分享地址，但是无效。

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/fb/3.png)


##3. 总结


-  只有通过在目标页面设置 meta-data 方式才能自主的控制分享内容 (plain text 不适合)
-  游戏内根据场景做社交分享的方式很难实现了



