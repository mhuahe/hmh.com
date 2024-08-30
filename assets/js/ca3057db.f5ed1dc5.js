"use strict";(self.webpackChunkmhuahe_com=self.webpackChunkmhuahe_com||[]).push([[2300],{2112:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>h});var l=r(4848),i=r(8453);const n={},c="JAVA-\u9519\u8bef\u8bb0\u5f55",d={id:"java/JAVA-Hutool",title:"JAVA-\u9519\u8bef\u8bb0\u5f55",description:"\u5de5\u5177\u7c7b\u4f7f\u7528",source:"@site/docs/java/JAVA-Hutool.md",sourceDirName:"java",slug:"/java/JAVA-Hutool",permalink:"/mhuahe.com/docs/java/JAVA-Hutool",draft:!1,unlisted:!1,editUrl:"https://github.com/mhuahe/mhuahe.com/tree/master/docs/java/JAVA-Hutool.md",tags:[],version:"current",frontMatter:{},sidebar:"java",previous:{title:"JAVA-Hutool",permalink:"/mhuahe.com/docs/java/JAVA-Error-Record"},next:{title:"JAVA-JDK\u7248\u672c",permalink:"/mhuahe.com/docs/java/JAVA-JDK-Version"}},s={},h=[{value:"\u5de5\u5177\u7c7b\u4f7f\u7528",id:"\u5de5\u5177\u7c7b\u4f7f\u7528",level:3},{value:"Convert \u8f6c\u6362",id:"convert-\u8f6c\u6362",level:4},{value:"ObjectUtil \u5bf9\u8c61\u5224\u7a7a",id:"objectutil-\u5bf9\u8c61\u5224\u7a7a",level:4},{value:"CglibUtil \u62f7\u8d1d",id:"cglibutil-\u62f7\u8d1d",level:4},{value:"CaptchaUtil \u56fe\u50cf\u9a8c\u8bc1\u7801",id:"captchautil-\u56fe\u50cf\u9a8c\u8bc1\u7801",level:4},{value:"MailUtil \u90ae\u7bb1",id:"mailutil-\u90ae\u7bb1",level:4},{value:"RadixUtil \u8fdb\u5236\u8f6c\u6362",id:"radixutil-\u8fdb\u5236\u8f6c\u6362",level:4},{value:"PinyinUtil\u62fc\u97f3",id:"pinyinutil\u62fc\u97f3",level:4},{value:"\u5e38\u7528\u5de5\u5177\u7c7b",id:"\u5e38\u7528\u5de5\u5177\u7c7b",level:3},{value:"\u5176\u4ed6\u5de5\u5177\u7c7b",id:"\u5176\u4ed6\u5de5\u5177\u7c7b",level:3}];function o(t){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"java-\u9519\u8bef\u8bb0\u5f55",children:"JAVA-\u9519\u8bef\u8bb0\u5f55"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5de5\u5177\u7c7b\u4f7f\u7528",children:"\u5de5\u5177\u7c7b\u4f7f\u7528"}),"\n",(0,l.jsx)(e.h4,{id:"convert-\u8f6c\u6362",children:"Convert \u8f6c\u6362"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'//\u8f6c\u6362\u5de5\u5177\u7c7b\r\n//\u517c\u5bb9\u4e86"1,3"\u548c"[1,3]"\u683c\u5f0f\r\nString cover =  "[1,3]";\r\nList<String> list = Convert.toList(String.class, cover);\n'})}),"\n",(0,l.jsx)(e.h4,{id:"objectutil-\u5bf9\u8c61\u5224\u7a7a",children:"ObjectUtil \u5bf9\u8c61\u5224\u7a7a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"//\u517c\u5bb9list\u3001map\u3001CharSequence(String)\u3001Iterator\u3001Iterable(\u53ef\u8fed\u4ee3\u7684)\u5224\u7a7a\r\nObjectUtil.isNotEmpty(Object);\r\n//\u6bd4\u8f83\u5bf9\u8c61 BigDecimal \u3002\u517c\u5bb9String\u3001list\r\n//(a == b) || (a != null && a.equals(b));\r\nBigDecimal bigNum1 = new BigDecimal();\r\nBigDecimal bigNum2 = new BigDecimal();\r\nObjectUtil.equals(bigNum1, bigNum2);\r\n//\u5224\u65ad\u4e0d\u4e3anull\r\n//null != obj && false == obj.equals(null);\r\nObjectUtil.isNotNull(Object);\n"})}),"\n",(0,l.jsx)(e.h4,{id:"cglibutil-\u62f7\u8d1d",children:"CglibUtil \u62f7\u8d1d"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>cglib</groupId>\r\n    <artifactId>cglib</artifactId>\r\n    <version>3.1</version>\r\n</dependency>\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'//cglib\u62f7\u8d1d\r\nUser user = new User("key", "value");\r\nUser userCopy = CglibUtil.copy(user, User.class);\r\n//cglib\u62f7\u8d1dlist Supplier\u7528\u6765\u521b\u5efa\u5bf9\u8c61\u7684,\u6bcf\u6b21get\u90fd\u4f1a\u8c03\u7528\u6784\u9020\u65b9\u6cd5\uff0c\u83b7\u53d6\u7684\u5bf9\u8c61\u90fd\u4e0d\u540c\r\nSupplier<User> copy = User::new;\r\nUser user = copy.get();\r\nList<User> userList = new ArrayList<>();\r\nList<User> users = CglibUtil.copyList(userList, User::new);\n'})}),"\n",(0,l.jsx)(e.h4,{id:"captchautil-\u56fe\u50cf\u9a8c\u8bc1\u7801",children:"CaptchaUtil \u56fe\u50cf\u9a8c\u8bc1\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'//\u56fe\u50cf\u9a8c\u8bc1\u7801\r\n//\u7ebf\u5f62\u5e72\u6270\r\nLineCaptcha captcha = CaptchaUtil.createLineCaptcha(250, 120);\r\n//\u5706\u5f62\u5e72\u6270\r\nCircleCaptcha circleCaptcha = CaptchaUtil.createCircleCaptcha(250, 120);\r\n//\u626d\u66f2\u5e72\u6270\r\nShearCaptcha shearCaptcha = CaptchaUtil.createShearCaptcha(250, 120);\r\n//gif\r\nGifCaptcha gifCaptcha = CaptchaUtil.createGifCaptcha(250, 120);\r\n//\u56fe\u5f62\u9a8c\u8bc1\u7801\u5199\u51fa\uff0c\u53ef\u4ee5\u5199\u51fa\u5230\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5199\u51fa\u5230\u6d41\uff0c\u5373\u5728\u4f60\u7684\u7535\u8111D\u76d8\u4e2d\u4f1a\u6709\u4e00\u4e2ashear.png\u7684\u56fe\u7247\r\ngifCaptcha.write("D://image.jpg");\n'})}),"\n",(0,l.jsx)(e.h4,{id:"mailutil-\u90ae\u7bb1",children:"MailUtil \u90ae\u7bb1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-properties",children:"#mail.setting\r\n# \u90ae\u4ef6\u670d\u52a1\u5668\u7684SMTP\u5730\u5740\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3asmtp.<\u53d1\u4ef6\u4eba\u90ae\u7bb1\u540e\u7f00>\r\nhost = smtp.exmail.qq.com\r\n# \u90ae\u4ef6\u670d\u52a1\u5668\u7684SMTP\u7aef\u53e3\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba425\r\nport = 465\r\n# \u53d1\u4ef6\u4eba\uff08\u5fc5\u987b\u6b63\u786e\uff0c\u5426\u5219\u53d1\u9001\u5931\u8d25\uff09\r\nfrom = cscicloud@chinacsci.com\r\n# \u7528\u6237\u540d\uff0c\u9ed8\u8ba4\u4e3a\u53d1\u4ef6\u4eba\u90ae\u7bb1\u524d\u7f00\r\n# user = xxxx\r\n# \u5bc6\u7801\uff08\u6ce8\u610f\uff0c\u67d0\u4e9b\u90ae\u7bb1\u9700\u8981\u4e3aSMTP\u670d\u52a1\u5355\u72ec\u8bbe\u7f6e\u6388\u6743\u7801\uff0c\u8be6\u60c5\u67e5\u770b\u76f8\u5173\u5e2e\u52a9\uff09\r\npass = NDp0T1gi3U\r\n#\u4f7f\u7528 STARTTLS\u5b89\u5168\u8fde\u63a5\uff0cSTARTTLS\u662f\u5bf9\u7eaf\u6587\u672c\u901a\u4fe1\u534f\u8bae\u7684\u6269\u5c55\u3002\r\nstarttlsEnable = true\r\n\r\n# \u4f7f\u7528SSL\u5b89\u5168\u8fde\u63a5\r\nsslEnable = true\r\n# \u6307\u5b9a\u5b9e\u73b0javax.net.SocketFactory\u63a5\u53e3\u7684\u7c7b\u7684\u540d\u79f0,\u8fd9\u4e2a\u7c7b\u5c06\u88ab\u7528\u4e8e\u521b\u5efaSMTP\u7684\u5957\u63a5\u5b57\r\nsocketFactoryClass = javax.net.ssl.SSLSocketFactory\r\n# \u5982\u679c\u8bbe\u7f6e\u4e3atrue,\u672a\u80fd\u521b\u5efa\u4e00\u4e2a\u5957\u63a5\u5b57\u4f7f\u7528\u6307\u5b9a\u7684\u5957\u63a5\u5b57\u5de5\u5382\u7c7b\u5c06\u5bfc\u81f4\u4f7f\u7528java.net.Socket\u521b\u5efa\u7684\u5957\u63a5\u5b57\u7c7b, \u9ed8\u8ba4\u503c\u4e3atrue\r\nsocketFactoryFallback = true\r\n# \u6307\u5b9a\u7684\u7aef\u53e3\u8fde\u63a5\u5230\u5728\u4f7f\u7528\u6307\u5b9a\u7684\u5957\u63a5\u5b57\u5de5\u5382\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e,\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3456\r\nsocketFactoryPort = 465\r\n\r\n# SMTP\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u7f3a\u7701\u503c\u4e0d\u8d85\u65f6\r\ntimeout = 0\r\n# Socket\u8fde\u63a5\u8d85\u65f6\u503c\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u7f3a\u7701\u503c\u4e0d\u8d85\u65f6\r\nconnectionTimeout = 0\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>com.sun.mail</groupId>\r\n    <artifactId>javax.mail</artifactId>\r\n    <version>1.5.6</version>\r\n</dependency>\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'//\u9700\u8981\u5728resource\u4e0b\u5bb6mail.setting\u914d\u7f6e\r\nString sendText = MailUtil.sendText("1075335917@qq.com", "\u6d4b\u8bd5\u90ae\u4ef6", "\u8fd9\u662f\u6b63\u6587");\n'})}),"\n",(0,l.jsx)(e.h4,{id:"radixutil-\u8fdb\u5236\u8f6c\u6362",children:"RadixUtil \u8fdb\u5236\u8f6c\u6362"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'//012 \u8868\u793a 3\u8fdb\u5236\uff1b0-0,1-1,2-2\r\nString encode = RadixUtil.encode("012", 10);\r\n//ABC \u8868\u793a 3\u8fdb\u5236\uff1bA-0,B-1,C-2\r\nString encode = RadixUtil.encode("ABC", 10);\n'})}),"\n",(0,l.jsx)(e.h4,{id:"pinyinutil\u62fc\u97f3",children:"PinyinUtil\u62fc\u97f3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<dependency>\r\n    <groupId>com.belerweb</groupId>\r\n    <artifactId>pinyin4j</artifactId>\r\n    <version>2.5.0</version>\r\n</dependency>\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5e38\u7528\u5de5\u5177\u7c7b",children:"\u5e38\u7528\u5de5\u5177\u7c7b"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u7c7b"}),(0,l.jsx)(e.th,{children:"\u7c7b\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.map.MapUtil"}),(0,l.jsx)(e.td,{children:"Map\u5de5\u5177\u7c7b\u3001Map\u53c2\u6570\u6392\u5e8f(\u7528\u4e8e\u7b7e\u540d)\u3001\u952e\u503c\u4e92\u6362\u3001\u6392\u5e8f\u3001\u83b7\u53d6\u503c\u5e76\u8f6c\u6362\u7c7b\u578b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.json.JSONUtil"}),(0,l.jsx)(e.td,{children:"JSON\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.comparator.CompareUtil"}),(0,l.jsx)(e.td,{children:"\u6bd4\u8f83\u5668\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.collection.ListUtil"}),(0,l.jsx)(e.td,{children:"List\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ObjectUtil"}),(0,l.jsx)(e.td,{children:"\u5bf9\u8c61\u64cd\u4f5c\u5de5\u5177\u7c7b\u3001\u5224\u7a7a\u3001\u6bd4\u8f83"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.RadixUtil"}),(0,l.jsx)(e.td,{children:"\u8fdb\u5236\u8f6c\u6362\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.bean.BeanUtil"}),(0,l.jsx)(e.td,{children:"Bean\u5de5\u5177\u7c7b\u3001Bean\u8f6cMap"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.NumberUtil"}),(0,l.jsx)(e.td,{children:"\u6570\u5b57\u5de5\u5177\u7c7b\u3001BigDecimal\u8ba1\u7b97"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.thread.ThreadUtil"}),(0,l.jsx)(e.td,{children:"\u7ebf\u7a0b\u6c60\u5de5\u5177"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.http.HttpUtil"}),(0,l.jsx)(e.td,{children:"Http\u8bf7\u6c42\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.text.UnicodeUtil"}),(0,l.jsx)(e.td,{children:"Unicode\u5b57\u7b26\u4e32\u548c\u666e\u901a\u5b57\u7b26\u4e32\u8f6c\u6362\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.IdcardUtil"}),(0,l.jsx)(e.td,{children:"\u8eab\u4efd\u8bc1\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.servlet.ServletUtil"}),(0,l.jsx)(e.td,{children:"Servlet\u5de5\u5177\u7c7b\u3001\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u4f53\u3001\u8bf7\u6c42\u5934\u3001cookie\u64cd\u4f5c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.IdUtil"}),(0,l.jsx)(e.td,{children:"\u751f\u6210Id\u5de5\u5177\u7c7b\u3001UUID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.PageUtil"}),(0,l.jsx)(e.td,{children:"\u5206\u9875\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.PhoneUtil"}),(0,l.jsx)(e.td,{children:"\u7535\u8bdd\u53f7\u7801\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.pinyin.PinyinUtil"}),(0,l.jsx)(e.td,{children:"\u62fc\u97f3\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ReflectUtil"}),(0,l.jsx)(e.td,{children:"\u53cd\u5c04\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.spring.SpringUtil"}),(0,l.jsx)(e.td,{children:"\u4eceSpring\u5bb9\u5668\u4e2d\u83b7\u53d6Bean"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ZipUtil"}),(0,l.jsx)(e.td,{children:"\u538b\u7f29\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.TypeUtil"}),(0,l.jsx)(e.td,{children:"\u53c2\u6570\u7c7b\u578b\u5de5\u5177\u7c7b\u3001\u83b7\u53d6\u65b9\u6cd5\u7c7b\u578b\u3001\u6cdb\u578b\uff08\u53cd\u5c04\u65f6\u4f7f\u7528\uff09"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.annotation.AnnotationUtil"}),(0,l.jsx)(e.td,{children:"\u5feb\u901f\u83b7\u53d6\u6ce8\u89e3\u5bf9\u8c61\u3001\u6ce8\u89e3\u503c\u7b49\u5de5\u5177\u5c01\u88c5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.cache.CacheUtil"}),(0,l.jsx)(e.td,{children:"\u7f13\u5b58\u5de5\u5177\u7c7b\u3001\u521b\u5efa\u7f13\u5b58"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.resource.ResourceUtil"}),(0,l.jsx)(e.td,{children:"Resource\u8d44\u6e90\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.convert.Convert"}),(0,l.jsx)(e.td,{children:"\u7c7b\u578b\u8f6c\u6362\u5668\uff08\u901a\u7528\u7c7b\u578b\u8f6c\u6362\uff0c\u53ef\u4f7f\u7528\uff09"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.DesensitizedUtil"}),(0,l.jsx)(e.td,{children:"\u8131\u654f\u5de5\u5177\u7c7b"})]})]})]}),"\n",(0,l.jsx)(e.h3,{id:"\u5176\u4ed6\u5de5\u5177\u7c7b",children:"\u5176\u4ed6\u5de5\u5177\u7c7b"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u7c7b"}),(0,l.jsx)(e.th,{children:"\u7c7b\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.date.TemporalAccessorUtil"}),(0,l.jsx)(e.td,{children:"\u65f6\u95f4\u5de5\u5177\u7c7b\uff08\u65f6\u95f4\u683c\u5f0f\u8f6c\u6362\uff09\u3001TemporalAccessor\u65f6\u95f4\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.date.DateUtil"}),(0,l.jsx)(e.td,{children:"\u65f6\u95f4\u5de5\u5177\u7c7b\u3001Date\u3001\u683c\u5f0f\u8f6c\u6362"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.date.TemporalUtil"}),(0,l.jsx)(e.td,{children:"\u65f6\u95f4\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.date.LocalDateTimeUtil"}),(0,l.jsx)(e.td,{children:"LocalDateTime\u5de5\u5177\u7c7b\u5c01\u88c5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.date.CalendarUtil"}),(0,l.jsx)(e.td,{children:"Calendar\u5bf9\u8c61\u5c01\u88c5\u5de5\u5177\u7c7b\u3001\u65e5\u5386"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.compress.CompressUtil"}),(0,l.jsx)(e.td,{children:"\u538b\u7f29\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.lang.caller.CallerUtil"}),(0,l.jsx)(e.td,{children:"\u83b7\u53d6\u8c03\u7528\u8005"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.HashUtil"}),(0,l.jsx)(e.td,{children:"Hash\u7b97\u6cd5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.EnumUtil"}),(0,l.jsx)(e.td,{children:"\u679a\u4e3e\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.lang.tree.TreeUtil"}),(0,l.jsx)(e.td,{children:"\u6784\u5efa\u6811\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.CreditCodeUtil"}),(0,l.jsx)(e.td,{children:"\u7edf\u4e00\u793e\u4f1a\u4fe1\u7528\u4ee3\u7801\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ModifierUtil"}),(0,l.jsx)(e.td,{children:"\u4fee\u9970\u7b26\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.http.HtmlUtil"}),(0,l.jsx)(e.td,{children:"HTML\u5de5\u5177\u7c7b\u3001\u6e05\u9664Html\u6807\u7b7e\u6216\u5185\u5bb9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ReferenceUtil"}),(0,l.jsx)(e.td,{children:"\u5f15\u7528\u5de5\u5177\u7c7b\u3001\u521b\u5efa\u5f15\u7528\u3002new\u5bf9\u8c61\u9ed8\u8ba4\u5f3a\u5f15\u7528\u3002\u5de5\u5177\u53ef\u8bbe\u7f6e\u6210\u5176\u5b83\u5f15\u7528"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.mail.MailUtil"}),(0,l.jsx)(e.td,{children:"\u90ae\u4ef6\u5de5\u5177\u7c7b\uff0c\u57fa\u4e8ejavax.mail\u5c01\u88c5\u3001\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u7684\u90ae\u7bb1\u53d1\u9001"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.URLUtil"}),(0,l.jsx)(e.td,{children:"URL\u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.HexUtil"}),(0,l.jsx)(e.td,{children:"\u5b57\u8282\u6570\u7ec4\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u52a0\u5bc6\u8f6c\u6362"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.cron.CronUtil"}),(0,l.jsx)(e.td,{children:"\u5b9a\u65f6\u4efb\u52a1\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.cron.pattern.CronPatternUtil"}),(0,l.jsx)(e.td,{children:"\u5b9a\u65f6\u4efb\u52a1\u8868\u8fbe\u5f0f\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.RuntimeUtil"}),(0,l.jsx)(e.td,{children:"\u7cfb\u7edf\u8fd0\u884c\u65f6\u5de5\u5177\u7c7b\uff0c\u7528\u4e8e\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\u7684\u5de5\u5177"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.SecureUtil"}),(0,l.jsx)(e.td,{children:"\u5b89\u5168\u76f8\u5173\u5de5\u5177\u7c7b\u3001\u52a0\u5bc6\u7b97\u6cd5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.net.NetUtil"}),(0,l.jsx)(e.td,{children:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.EscapeUtil"}),(0,l.jsx)(e.td,{children:"\u8f6c\u4e49\u548c\u53cd\u8f6c\u4e49\u5de5\u5177\u7c7bEscape\u3001Unescape"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.BCUtil"}),(0,l.jsx)(e.td,{children:"Bouncy Castle\u76f8\u5173\u5de5\u5177\u7c7b\u5c01\u88c5\u3001BC\u516c\u94a5\u79c1\u94a5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.net.Ipv4Util"}),(0,l.jsx)(e.td,{children:"IPV4\u5730\u5740\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.digest.DigestUtil"}),(0,l.jsx)(e.td,{children:"\u6458\u8981\u7b97\u6cd5\u5de5\u5177\u7c7b\u3001MD5\u3001sha256"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.qrcode.QrCodeUtil"}),(0,l.jsx)(e.td,{children:"\u57fa\u4e8eZxing\u7684\u4e8c\u7ef4\u7801\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.system.oshi.OshiUtil"}),(0,l.jsx)(e.td,{children:"Oshi\u5e93\u5c01\u88c5\u7684\u5de5\u5177\u7c7b\uff0c\u901a\u8fc7\u6b64\u5de5\u5177\u7c7b\uff0c\u53ef\u83b7\u53d6\u7cfb\u7edf\u3001\u786c\u4ef6\u76f8\u5173\u4fe1\u606f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.socket.SocketUtil"}),(0,l.jsx)(e.td,{children:"Socket\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ServiceLoaderUtil"}),(0,l.jsx)(e.td,{children:"SPI\u673a\u5236\u4e2d\u7684\u670d\u52a1\u52a0\u8f7d\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.aop.ProxyUtil"}),(0,l.jsx)(e.td,{children:"\u4ee3\u7406\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.exceptions.ExceptionUtil"}),(0,l.jsx)(e.td,{children:"\u5f02\u5e38\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.XmlUtil"}),(0,l.jsx)(e.td,{children:"XML\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.img.GraphicsUtil"}),(0,l.jsx)(e.td,{children:"Graphics\u76f8\u5173\u5de5\u5177\u7c7b\u3001\u7ed8\u56fe\u3001\u753b\u7b14"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.img.FontUtil"}),(0,l.jsx)(e.td,{children:"AWT\u4e2d\u5b57\u4f53\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.compiler.CompilerUtil"}),(0,l.jsx)(e.td,{children:"\u6e90\u7801\u7f16\u8bd1\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.SmUtil"}),(0,l.jsx)(e.td,{children:"SM\u56fd\u5bc6\u7b97\u6cd5\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.dfa.SensitiveUtil"}),(0,l.jsx)(e.td,{children:"\u654f\u611f\u8bcd\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.KeyUtil"}),(0,l.jsx)(e.td,{children:"\u5bc6\u94a5\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.crypto.PemUtil"}),(0,l.jsx)(e.td,{children:"PEM\u683c\u5f0f\u5de5\u5177\u7c7b\u3001\u516c\u94a5\u79c1\u94a5\u3001\u8bc1\u4e66"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.setting.dialect.PropsUtil"}),(0,l.jsx)(e.td,{children:"Props\u5de5\u5177\u7c7b\u3001\u83b7\u53d6\u914d\u7f6e\u6587\u4ef6"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ClassUtil"}),(0,l.jsx)(e.td,{children:"\u7c7b\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ClassLoaderUtil"}),(0,l.jsx)(e.td,{children:"\u7c7b\u52a0\u8f7d\u5668\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.swing.ScreenUtil"}),(0,l.jsx)(e.td,{children:"\u5c4f\u5e55\u64cd\u4f5c\u3001\u622a\u56fe\u3001\u83b7\u53d6\u5c4f\u5e55\u5927\u5c0f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.captcha.CaptchaUtil"}),(0,l.jsx)(e.td,{children:"\u56fe\u7247\u9a8c\u8bc1\u7801\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.img.ImgUtil"}),(0,l.jsx)(e.td,{children:"\u56fe\u50cf\u5904\u7406\u5de5\u5177\u7c7b\u3001\u4e8c\u503c\u5316\u3001\u7f29\u653e\u3001\u6c34\u5370\u3001\u65cb\u8f6c\u3001\u538b\u7f29\u3001base64\u8f6c\u6362\u3001\u6587\u4ef6\u521b\u5efa\u56fe\u7247\u7b49"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.emoji.EmojiUtil"}),(0,l.jsx)(e.td,{children:"Emoji\u8868\u60c5\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.swing.RobotUtil"}),(0,l.jsx)(e.td,{children:"\u6a21\u62df\u9f20\u6807\u3001\u952e\u76d8\u64cd\u4f5c\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.swing.clipboard.ClipboardUtil"}),(0,l.jsx)(e.td,{children:"\u7cfb\u7edf\u526a\u8d34\u677f\u5de5\u5177\u7c7b\u3001\u76d1\u542c\u526a\u5207\u677f\u4fee\u6539"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.swing.DesktopUtil"}),(0,l.jsx)(e.td,{children:"\u684c\u9762\u76f8\u5173\u5de5\u5177"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.NioUtil"}),(0,l.jsx)(e.td,{children:"\u62f7\u8d1d\u6587\u4ef6\u6d41\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.IoUtil"}),(0,l.jsx)(e.td,{children:"IO\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.file.FileNameUtil"}),(0,l.jsx)(e.td,{children:"\u6587\u4ef6\u540d\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.BufferUtil"}),(0,l.jsx)(e.td,{children:"ByteBuffer\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.file.PathUtil"}),(0,l.jsx)(e.td,{children:"NIO\u4e2dPath\u5bf9\u8c61\u64cd\u4f5c\u5c01\u88c5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.FileUtil"}),(0,l.jsx)(e.td,{children:"\u6587\u4ef6\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.io.FileTypeUtil"}),(0,l.jsx)(e.td,{children:"\u6587\u4ef6\u7c7b\u578b\u5224\u65ad\u5de5\u5177\u7c7b\u3001\u89c6\u9891\u3001\u56fe\u7247\u7c7b\u578b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ArrayUtil"}),(0,l.jsx)(e.td,{children:"\u6570\u7ec4\u5de5\u5177\u7c7b\u3001\u6570\u7ec4\u64cd\u4f5c\u5143\u7d20"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.extra.cglib.CglibUtil"}),(0,l.jsx)(e.td,{children:"cglib\u5de5\u5177\u7c7b\u3001\u62f7\u8d1d\u5bf9\u8c61\u3001\u96c6\u5408\u3001\u5bf9\u8c61map\u4e92\u8f6c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.system.SystemUtil"}),(0,l.jsx)(e.td,{children:"Java\u7684System\u7c7b\u5c01\u88c5\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.collection.IterUtil"}),(0,l.jsx)(e.td,{children:"Iterable\u3001Iterator\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.collection.CollUtil"}),(0,l.jsx)(e.td,{children:"\u96c6\u5408\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.text.CharSequenceUtil"}),(0,l.jsx)(e.td,{children:"CharSequence\u76f8\u5173\u5de5\u5177\u7c7b\u5c01\u88c5"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.CharsetUtil"}),(0,l.jsx)(e.td,{children:"\u5b57\u7b26\u96c6\u5de5\u5177\u7c7b\u3001\u8f6c\u6362\u5b57\u7b26\u96c6\u7f16\u7801"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.StrUtil"}),(0,l.jsx)(e.td,{children:"\u5b57\u7b26\u4e32\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.ReUtil"}),(0,l.jsx)(e.td,{children:"\u6b63\u5219\u76f8\u5173\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.RandomUtil"}),(0,l.jsx)(e.td,{children:"\u968f\u673a\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.BooleanUtil"}),(0,l.jsx)(e.td,{children:"Boolean\u7c7b\u578b\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.math.MathUtil"}),(0,l.jsx)(e.td,{children:"\u6570\u5b66\u76f8\u5173\u65b9\u6cd5\u5de5\u5177\u7c7b\u3001\u8ba1\u7b97\u9636\u7ea7"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.PrimitiveArrayUtil"}),(0,l.jsx)(e.td,{children:"\u6570\u7ec4\u5de5\u5177\u7c7b"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"cn.hutool.core.util.CharUtil"}),(0,l.jsx)(e.td,{children:"\u5b57\u7b26\u5de5\u5177\u7c7b\uff0c\u5b57\u7b26\u5224\u65ad"})]})]})]})]})}function x(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(o,{...t})}):o(t)}},8453:(t,e,r)=>{r.d(e,{R:()=>c,x:()=>d});var l=r(6540);const i={},n=l.createContext(i);function c(t){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),l.createElement(n.Provider,{value:e},t.children)}}}]);