# Facebook 产品调查

本文中涉及的调查产品为： **Account-kit** 和 **Messenger Platform**

##1.Account Kit

**优点:** 可以方便得向用户提供 SMS 或 Email 登录

**与facebook账号的关系:**  使用 account-kit 登录的用户不一定有 facebook 账号

**Instant Verification:**  如果在移动端用户安装了Facebook App并登录，或者在网页端用户登录了FB账号的情况下使用 account-kit 进行sms登录的时候，不需要用户接受短信并输入验证码，就可以验证用户身份；使用email登录时候同理，可以更快捷的登录

**是否可集成到Oasis登录账号体系下:** 很遗憾我们恐怕没办法在Oasis Passport体系内集成account-kit登录,理由如下:

* account-kit 账号与facebook账号没有必然联系，所以在accont-kit的登录用户信息中找不到facebook用户的身份标识，这样比如一个我们的facebook老用户通过account-kit sms方式登录后，我们也只能认为他是一个oasis新用户，而这可能不是我们很喜欢得一个结果

* account-kit 登录与FB connect登录一样，也需要依托Facebook App来完成，但是经我们测试发现同一个手机号通过不同App登录后会得到不同得账号信息，例：

Login with app: gogen

```ret1
User ID: 1277448299058011 (This is not  the user facebook app id)
Phone Number: +8615801309846
Email:
Access Token: EMAWeArNqYSbFNhBRJ8SG4GstujjgWD9drIxDZBH28y7DiPRPlZBBZCcIbL8ecIJrYWxVGQHPjY9ZAClykym3BArlce3RfXK3l9m3NdhdcWZB2f66NdilFqly1J90v9UTrn0WC8IoK6dso7W25uY04Sg0hQIR4SmtEZD
Refresh Interval: 2592000
```

Login with app: app-old-1

```ret2
User ID: 573925959656204
Phone Number: +8615801309846
Email:
Access Token: EMAWfhVjYYmfA4wGZAgLBVJLh49VxzUTmNBQ2AMYA2UtXXdAzYhpAZAKZBloTGIcSyvdeXSUSQtD9jw35YzLLtFxnBt64JjZCYVA4ZCJphZB98DwZAUn9s3ZCftsZCueZAcCorpstZBJ4wjisubmo2b3wPiu4gy3eMZCZCRhJUZD
Refresh Interval: 2592000
```

Login with app: goges

```ret3
User ID: 213919099194442
Phone Number: +8615801309846
Email:
Access Token: EMAWePnvHwpmXGNOVLbdWg1hHR6IrEAa9oruiEiyXuAcjN4pBVekOMJABOLHaIBXlp2jZB5hLh9iz6ll5hxg3u2Wn3vop1PdVVJrFZC9qruFSYbhNDmhaIpAhUrYAdXNpCaDA4QBfzVSKewIBcdQeYHobjc78hgZD
Refresh Interval: 2592000
```

可见，通过不同App登录得到的用户uid都是不同得，且account-kit没有提供类似business map 一类的工具可已识别用户，因此account-kit 不适合集成进 oasis 账号体系

**结论:** 基于以上情况，我们对account-kit的调查就至此为止了。


##2.Messenger platform

Facebook messenger 是一个跨平台的IM沟通工具，可供用户在手机端，Web端使用，它独立于Facebook App 但同样使用Facebook 账号，并且该平台提供了丰富得工具和API供我们创建 messenger bot 来帮助我们提升与用户的沟通体验和效率。

有调查表明已经有很多公司在使用chatbots来提升企业效率: <https://www.socialmediaexaminer.com/chat-and-messenger-bots-new-research-for-marketers/>

```
Oracle reports that 80% of businesses want chatbots by 2020,
and many of those respondents were already using them.

Many businesses are already using bot technology for things like marketing, 
sales, and customer service.No longer will users have to go from a site 
to an application and back again. The flow will be seamless, based on the 
user’s needs and preferences.
```



### Messenger Bot 工作方式

*  **Facebook Page:** A Facebook Page will be used as the identity of your bot. When people chat with your app, they will see the Page name and the Page profile picture.

*  **Facebook App:** The Facebook app contains the settings for your Messenger bot

*  **Webhook URL:** Actions that take place in conversations with your bot such as new messages are sent as events to your webhook

### Messenger Bot 案例

The Wall Street Journal
通过messenger bot 发布新闻信息获得了更多得年轻用户

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/b1.png)

LEGO
通过messenger bot 帮助用户挑选商品

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/b2.png)

KPL

通过messenger bot 帮助用户便捷的了解航班信息

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/b3.png)

### Messenger Bot 特性

#### Quick replies
Messenger bot 可以通过quick reply 方式与用户进行交互，可以通过这种方式进行用户引导及准确辨识用户意图,

如LEGO Bot 就通过问答形式帮助用户挑选合适得玩具:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a9.png)

有效提升了成单率

#### Persistent menu
Messenger bot 可以定义固定菜单(如下图所示），方便用户了解并快捷使用bot提供的主要功能

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a5.png)

* 通过菜单按钮用户可以快速向bot发送一个指令或访问某个网址(URL)
* 菜单支持内嵌子菜单
* 菜单文字可以支持本地化设置


#### Built-in NLP
Messenger 平台提供了内置的自然语言处理功能，不过感觉目前也不算很强大

目前可以甄别出得用户事件只有:

```
greetings,thanks,bye （这三种仅支持英语）
```
```
datetime,amount_of_money,phone_number,email,distance,quantity,
temperature,volume,location,duration,url
```

支持的语言种类:

```
Arabic,Chinese,Dutch,English,French,German,Greek,Italian
Korean,Polish,Portuguese,Spanish,Swedish,Vietnamese
```

和 (我们业务未涉及的语种)
```
Croatian,Danish,Irish,Hebrew (modern),Hungarian,Norwegian Bokmål,Romanian
```

**示例**

用户输入: "Hello"

```
"text":"Hello",
"nlp":{
   "entities":
   {
      "greetings":[{"confidence":0.99983274937032,"value":"true",
   }
```

用户输入: "Tomorror at 3 pm"

```
"text":"Tomorrow at 3 pm",
"nlp":{
     "entities":
     {
        "datetime":[{"confidence":0.96442,"values":"2018-04-26T15:00:00.000+08:00"
     }
```

confidence 值体现npl识别辨认度，最大是1；
values 是解析后的可编程数据


#### Sender Actions
Messenger bot 可以反馈一些效果来提升用户体验，比如处理request的时候可以反馈用户一个typing on 效果:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a10.png)

待处理结束后再返回一个 typing off 和处理结果

#### Handover Protocol
通过 handover protocol 我们可以提供用户在于bot交流的时候切换到与真实客服人员沟通，如:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a11.png)

用户选择 “Pass to Inbox”， 消息的处理就会交到 FB Page的Inbox，由真实人员处理。直至conversion结束再交回messenger bot:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a12.png)

### Messenger Bot 推广

#### Chat plugin
可以挂载在网页上，用户可以直接与bot沟通

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a7.png)

#### Discover Tab
为了让新用户浏览或搜索到我们的messenger bot,需要将bot提交到 Discover，这个在Page 管理后台的Discover Settings 处设置提交:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a13.png)

#### Messenger Codes

messenger codes 就像是二维码效果一样，可以让通用通过扫描来把 messenger bot 加入自己的联系人:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a15.png)

#### m.me Links

快速访问messenger bot 的短连接:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a14.png)


#### Sharing Content

（1） 很多聊天内容都支持分享，如图片，模板消息等:

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a16.png)

可以分享给Facebook好友，或者群聊中

（2） Share button

通过share button可以将整个模板信息发送给好友，分享内容中包含了FB Page信息， 好友在接受到信息后可以一键点击直接开启一个与messenger bot的对话

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/a17.png)


### 用户身份识别(IDs&Profile)

#### (1).PSID/ASID

PSID Page-scoped ID， ASID App-scoped ID，messenger 平台提供了API。可以根据 PSID 获取用户在一个business内所有AppID：

```
GET /{user-id}
    ?fields=name,is_payment_enabled,ids_for_apps,ids_for_pages
    &access_token=[page_access_token]
    &appsecret_proof=[appsecret_proof]
```

根据这个功能，我们可以把Messenger内跟我们沟通的用户与用FB账号玩游戏的玩家对应起来。

#### (2).Account Linking

当用户与meesenger bot沟通的时候，可以提供一个登录功能，从而识别出我们业务的老用户，从而为用户提供认证后得服务

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/b4.png)

![MacDown Screenshot](https://xuchang-stat.oasgames.com/doc/img/b5.png)



### 支付(beta)

Messenger 平台提供的支付功能目前还处于beta阶段

### Instant games

Messenger 平台内的instant game具有以下特征:

* 免安装
* “与好友一起玩”模式能做到自传播
* 内嵌广告推广App安装

可以用作一种推广模式

