# Facebook 产品调查

本文档中包含的调查产品为： **Account-kit**, **Messenger Platform**

##1.Account Kit

**优点:** 可以方便得向用户提供 SMS 或 Email 登录

**与facebook账号的关系:**  使用 account-kit 登录的用户不一定是facebook 用户

**Instant Verification:**  如果在移动端用户安装了Facebook App并登录，或者在网页端用户登录了FB账号的情况下使用 account-kit 进行sms登录的时候，不需要用户接受短信并输入验证码，就可以验证用户身份；使用email登录时候同理，可以更快捷的登录

**是否可集成到Oasis登录账号体系下:** 很遗憾我们恐怕没办法在Oasis Passport体系内集成account-kit登录,理由如下:

* account-kit 账号与facebook账号没有必然联系，所以在accont-kit的登录用户信息中找不到facebook用户的身份标识，这样比如一个我们的facebook老用户通过account-kit sms方式登录后，我们也只能认为他是一个oasis新用户，而这可能不是我们很喜欢得一个结果

* account-kit 登录与FB connect登录一样，也需要依托Facebook App来完成，但是经我们测试发现同一个手机号通过不同App登录后会得到不同得账号信息，例：

Login with app gogen

```ret1
User ID: 1277448299058011  (This is not  the user facebook app id)
Phone Number: +8615801309846
Email:
Access Token: EMAWeArNqYSbFNhBRJ8SG4GstujjgWD9drIxDZBH28y7DiPRPlZBBZCcIbL8ecIJrYWxVGQHPjY9ZAClykym3BArlce3RfXK3l9m3NdhdcWZB2f66NdilFqly1J90v9UTrn0WC8IoK6dso7W25uY04Sg0hQIR4SmtEZD
Refresh Interval: 2592000
```

Login with app app-old-1

```ret2
User ID: 573925959656204
Phone Number: +8615801309846
Email:
Access Token: EMAWfhVjYYmfA4wGZAgLBVJLh49VxzUTmNBQ2AMYA2UtXXdAzYhpAZAKZBloTGIcSyvdeXSUSQtD9jw35YzLLtFxnBt64JjZCYVA4ZCJphZB98DwZAUn9s3ZCftsZCueZAcCorpstZBJ4wjisubmo2b3wPiu4gy3eMZCZCRhJUZD
Refresh Interval: 2592000
```

Login with app goges

```ret3
User ID: 213919099194442
Phone Number: +8615801309846
Email:
Access Token: EMAWePnvHwpmXGNOVLbdWg1hHR6IrEAa9oruiEiyXuAcjN4pBVekOMJABOLHaIBXlp2jZB5hLh9iz6ll5hxg3u2Wn3vop1PdVVJrFZC9qruFSYbhNDmhaIpAhUrYAdXNpCaDA4QBfzVSKewIBcdQeYHobjc78hgZD
Refresh Interval: 2592000
```

可见，通过不同App登录得到的用户uid都是不同得，且account-kit没有提供类似business map 一类的工具可已识别用户，因此account-kit 不适合集成进 oasis 账号体系


##2.Messenger platform



### Chat extension

![MacDown Screenshot](http://xuchang-stat.oasgames.com/doc/img/chat-ex-shot.png)

