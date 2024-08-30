"use strict";(self.webpackChunkmhuahe_com=self.webpackChunkmhuahe_com||[]).push([[3691],{1958:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var o=n(4848),i=n(8453);const t={},a="\u9879\u76ee-\u642d\u5efa\u5fae\u670d\u52a1",c={id:"project/PROJECT-Build-Microservices",title:"\u9879\u76ee-\u642d\u5efa\u5fae\u670d\u52a1",description:"\u4e00\u3001\u4f7f\u7528\u6280\u672f",source:"@site/docs/project/PROJECT-Build-Microservices.md",sourceDirName:"project",slug:"/project/PROJECT-Build-Microservices",permalink:"/mhuahe.com/docs/project/PROJECT-Build-Microservices",draft:!1,unlisted:!1,editUrl:"https://github.com/mhuahe/mhuahe.com/tree/master/docs/project/PROJECT-Build-Microservices.md",tags:[],version:"current",frontMatter:{},sidebar:"project",previous:{title:"\u9879\u76ee-\u535a\u5ba2",permalink:"/mhuahe.com/docs/project/PROJECT-Build-Blog"},next:{title:"\u9879\u76ee-\u624b\u5199Spring",permalink:"/mhuahe.com/docs/project/PROJECT-Handwritten-Spring"}},s={},p=[{value:"\u4e00\u3001\u4f7f\u7528\u6280\u672f",id:"\u4e00\u4f7f\u7528\u6280\u672f",level:3},{value:"\u4e8c\u3001\u642d\u5efa",id:"\u4e8c\u642d\u5efa",level:3},{value:"Nacos-Spring-Cloud",id:"nacos-spring-cloud",level:3}];function d(r){const e={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,i.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u9879\u76ee-\u642d\u5efa\u5fae\u670d\u52a1",children:"\u9879\u76ee-\u642d\u5efa\u5fae\u670d\u52a1"})}),"\n",(0,o.jsx)(e.h3,{id:"\u4e00\u4f7f\u7528\u6280\u672f",children:"\u4e00\u3001\u4f7f\u7528\u6280\u672f"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"1. spring-cloud\r\n2. jdk1.8\r\n3. maven\u7ba1\u7406\r\n4. redis\u7f13\u5b58\r\n5. mysql\u6570\u636e\u5e93\r\n6. mongodb\u6570\u636e\u5e93\r\n7. nacos\u6ce8\u518c\u4e2d\u5fc3\u548c\u670d\u52a1\u4e2d\u5fc3\r\n8. RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u4e8c\u642d\u5efa",children:"\u4e8c\u3001\u642d\u5efa"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"1. new module --\x3e archetypes:maven-archetype-quickstart\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"2. \u6a21\u5757\u5f15\u7528spring-boot-starter-parent\r\n<parent>\r\n    <groupId>org.springframework.boot</groupId>\r\n    <artifactId>spring-boot-starter-parent</artifactId>\r\n    <version>2.6.3</version>\r\n</parent>\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"\u4f5c\u7528\uff1a\r\n1. \u4f9d\u8d56\u7248\u672c\u7ba1\u7406<dependencyManagement>\r\nspring-boot-starter-parent\u7684\u4f9d\u8d56\u7ba1\u7406\u529f\u80fd\u4f9d\u6258\u4e8espring-boot-dependencies\r\n2. \u5c5e\u6027\u914d\u7f6e(\u6307\u5b9ajdk\u7248\u672c\u53ca\u7f16\u7801\u7b49)\r\n    <properties>\r\n        <java.version>1.8</java.version>\r\n        <resource.delimiter>@</resource.delimiter>\r\n        <maven.compiler.source>${java.version}</maven.compiler.source>\r\n        <maven.compiler.target>${java.version}</maven.compiler.target>\r\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\r\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\r\n    </properties>\r\n3. \u8d44\u6e90\u8fc7\u6ee4\r\nspring-boot-starter-parent \u6307\u5b9a\u4e86\u7f16\u8bd1\u8d44\u6e90\u6587\u4ef6\u65f6\u5c06 **/application*.properties\u3001**/application*.yml \u548c **/application*.yaml \u4e2d\u7684 maven \u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u5177\u4f53\u7684\u5c5e\u6027\u503c\r\n    <resources>\r\n          <resource>\r\n            <directory>${basedir}/src/main/resources</directory>\r\n            <filtering>true</filtering>\r\n            <includes>\r\n              <include>**/application*.yml</include>\r\n              <include>**/application*.yaml</include>\r\n              <include>**/application*.properties</include>\r\n            </includes>\r\n          </resource>\r\n          <resource>\r\n            <directory>${basedir}/src/main/resources</directory>\r\n            <excludes>\r\n              <exclude>**/application*.yml</exclude>\r\n              <exclude>**/application*.yaml</exclude>\r\n              <exclude>**/application*.properties</exclude>\r\n            </excludes>\r\n          </resource>\r\n    </resources>\r\n4. \u63d2\u4ef6\u914d\u7f6e\r\n\u5bf9\u4e8e maven-compiler-plugin\uff0cspring-boot-starter-parent \u4e3b\u8981\u914d\u7f6e\u4e86parameters \u53c2\u6570\uff0c\u4ee5\u4fbf\u5c06\u65b9\u6cd5\u53c2\u6570\u540d\u5199\u5165class\u6587\u4ef6\r\n\u5bf9\u4e8e spring-boot-maven-plugin \u63d2\u4ef6\uff0cspring-boot-starter-parent \u4e3a\u5176\u914d\u7f6e\u4e86 repackage \u76ee\u6807\u3002spring-boot-maven-plugin \u63d2\u4ef6 repackage \u76ee\u6807\u9ed8\u8ba4\u7ed1\u5b9a maven \u58f0\u660e\u5468\u671f\u4e2d\u7684 package \u9636\u6bb5\uff0c\u8fd9\u6837\u5f53\u6253\u5305\u540e\u8fd9\u4e2a\u63d2\u4ef6\u5c31\u4f1a\u8fdb\u4e00\u6b65\u5c06\u6240\u6709\u4f9d\u8d56\u7684 jar \u5305\u4ee5\u53ca\u5f53\u524d\u9879\u76ee\u7684\u4ee3\u7801\u6253\u5305\u5230\u4e00\u4e2a jar \u5305\u4e2d\uff0c\u4ece\u800c\u652f\u6301 jar -jar \u542f\u52a8 Spring Boot \u9879\u76ee\u3002\r\nspring-boot-starter-parent \u6307\u5b9a spring-boot-maven-plugin \u63d2\u4ef6\u76ee\u6807\u540e\uff0c\u5f53\u6211\u4eec\u7684\u9879\u76ee\u6307\u5b9a\u4e86 parent \u4e3a spring-boot-starter-parent \u540e\uff0c\u5c31\u53ef\u4ee5\u7701\u7565\u63d2\u4ef6\u76ee\u6807\u914d\u7f6e\u4e86\u3002\r\n    <build>\r\n        <plugins>\r\n            <plugin>\r\n                <groupId>org.springframework.boot</groupId>\r\n                <artifactId>spring-boot-maven-plugin</artifactId>\r\n            </plugin>\r\n        </plugins>\r\n    </build>\r\n5. \u4f9d\u8d56\u7248\u672c\u5347\u7ea7\r\n\u5bf9\u4e8e spring-boot-starter-parent \u800c\u8a00\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728 properties \u4e2d\u6307\u5b9a\u4f9d\u8d56\u7684\u7248\u672c\u3002\u4ee5\u524d\u6bb5\u65f6\u95f4\u66b4\u9732\u51fa\u6765\u7684 log4j 2 \u6f0f\u6d1e\u4e3a\u4f8b\uff0c\u4e3a\u4e86\u5347\u7ea7 log4j 2 \u7248\u672c\u53f7\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\u3002\r\n    <parent>\r\n        <groupId>org.springframework.boot</groupId>\r\n        <artifactId>spring-boot-starter-parent</artifactId>\r\n        <version>2.2.7.RELEASE</version>\r\n    </parent>\r\n    <properties>\r\n        <log4j2.version>2.17.2</log4j2.version>\r\n    </properties>\r\n\u5bf9\u4e8e spring-boot-dependencies\uff0c\u5982\u679c\u8981\u8fdb\u884c\u4f9d\u8d56\u5347\u7ea7\uff0c\u914d\u7f6e\u5c5e\u6027\u662f\u4e0d\u884c\u7684\uff0c\u9700\u8981\u5728 spring-boot-dependencies \u524d\u9762\u52a0\u4e0a\u8981\u5347\u7ea7\u7684\u4f9d\u8d56\u7684\u5750\u6807\u3002\r\n    <dependencyManagement>\r\n        <dependencies>\r\n            <dependency>\r\n                <groupId>org.apache.logging.log4j</groupId>\r\n                <artifactId>log4j-to-slf4j</artifactId>\r\n                <version>2.17.2</version>\r\n            </dependency>\r\n            <dependency>\r\n                <groupId>org.springframework.boot</groupId>\r\n                <artifactId>spring-boot-dependencies</artifactId>\r\n                <version>2.2.7.RELEASE</version>\r\n                <type>pom</type>\r\n                <scope>import</scope>\r\n            </dependency>\r\n        </dependencies>\r\n    </dependencyManagement>\r\n\u5982\u679c\u8981\u5347\u7ea7\u7684\u4f9d\u8d56\u4e0d\u662fspring-boot-starter-parent\u6216spring-boot-dependencies\u7ba1\u7406\u7684\u4f9d\u8d56\uff0c\u8fd8\u53ef\u4ee5\u76f4\u63a5\u628a\u5b83\u52a0\u5230 dependencies \u6807\u7b7e\u4e0b\uff0c\u8fd9\u6837\u4f9d\u636e\u6700\u77ed\u8def\u5f84\u539f\u5219\uff0c\u6211\u4eec\u76f4\u63a5\u914d\u7f6e\u7684\u4f9d\u8d56\u4f1a\u8986\u76d6\u95f4\u63a5\u5f15\u5165\u7684\u4f9d\u8d56\r\n    <dependencies>\r\n        <dependency>\r\n            <groupId>org.apache.logging.log4j</groupId>\r\n            <artifactId>log4j-core</artifactId>\r\n            <version>2.17.2</version>\r\n        </dependency>\r\n    </dependencies>\n"})}),"\n",(0,o.jsx)(e.h3,{id:"nacos-spring-cloud",children:"Nacos-Spring-Cloud"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"\u914d\u7f6e\u4e2d\u5fc3\uff1a\r\n1. \u4f9d\u8d56\r\n<dependency>\r\n    <groupId>com.alibaba.cloud</groupId>\r\n    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\r\n    <version>${latest.version}</version>\r\n</dependency>\r\n2. \u5728 bootstrap.properties \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\u548c\u5e94\u7528\u540d\r\nspring.cloud.nacos.config.server-addr=127.0.0.1:8848\r\nspring.application.name=example\r\n3. \u5728 Nacos Spring Cloud \u4e2d\uff0cdataId \u7684\u5b8c\u6574\u683c\u5f0f\u5982\u4e0b\uff1a\r\n${prefix}-${spring.profiles.active}.${file-extension}\r\nprefix \u9ed8\u8ba4\u4e3aspring.application.name\u503c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879spring.cloud.nacos.config.prefix\u6765\u914d\u7f6e\u3002\r\nspring.profiles.active \u5373\u4e3a\u5f53\u524d\u73af\u5883\u5bf9\u5e94\u7684profile\r\nfile-exetension\u4e3a\u914d\u7f6e\u5185\u5bb9\u7684\u6570\u636e\u683c\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879spring.cloud.nacos.config.file-extension \u6765\u914d\u7f6e\u3002\u76ee\u524d\u53ea\u652f\u6301properties\u548cyaml \u7c7b\u578b\r\n4. \u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 @RefreshScope \u5b9e\u73b0\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ya",children:"\u6ce8\u518c\u4e2d\u5fc3\uff1a\r\n1. \u4f9d\u8d56\r\n<dependency>\r\n    <groupId>com.alibaba.cloud</groupId>\r\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\r\n    <version>${latest.version}</version>\r\n</dependency>\r\n2. \u5728 application.properties \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\r\nserver.port=8070\r\nspring.application.name=service-provider\r\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\r\n3. \u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 @EnableDiscoveryClient \u5f00\u542f\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\r\n4. \u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 @EnableDiscoveryClient \u5f00\u542f\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\u3002\u7ed9 RestTemplate \u5b9e\u4f8b\u6dfb\u52a0 @LoadBalanced \u6ce8\u89e3\uff0c\u5f00\u542f @LoadBalanced \u4e0e Ribbon \u7684\u96c6\u6210\n"})})]})}function l(r={}){const{wrapper:e}={...(0,i.R)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(d,{...r})}):d(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>c});var o=n(6540);const i={},t=o.createContext(i);function a(r){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:a(r.components),o.createElement(t.Provider,{value:e},r.children)}}}]);