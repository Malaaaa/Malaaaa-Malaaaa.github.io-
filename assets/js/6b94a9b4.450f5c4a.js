"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="\u5305\u7ba1\u7406",u={unversionedId:"Flutter/Package",id:"Flutter/Package",title:"\u5305\u7ba1\u7406",description:"YAML\u662f\u4e00\u79cd\u76f4\u89c2\u3001\u53ef\u8bfb\u6027\u9ad8\u5e76\u4e14\u5bb9\u6613\u88ab\u4eba\u7c7b\u9605\u8bfb\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u5b83\u548cxml\u6216Json\u76f8\u6bd4\uff0c\u5b83\u8bed\u6cd5\u7b80\u5355\u5e76\u975e\u5e38\u5bb9\u6613\u89e3\u6790\uff0c\u6240\u4ee5YAML\u5e38\u7528\u4e8e\u914d\u7f6e\u6587\u4ef6\uff0cFlutter\u4e5f\u662f\u7528yaml\u6587\u4ef6\u4f5c\u4e3a\u5176\u914d\u7f6e\u6587\u4ef6\u3002Flutter\u9879\u76ee\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u662fpubspec.yaml\uff0c\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a",source:"@site/docs/Flutter/Package.md",sourceDirName:"Flutter",slug:"/Flutter/Package",permalink:"/docs/Flutter/Package",editUrl:"https://github.com/Malaaaa/blog-sample/main/docs/Flutter/Package.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutterapp",permalink:"/docs/Flutter/Flutterapp"},next:{title:"Resource Management",permalink:"/docs/Flutter/ResourceM"}},c=[{value:"Pub\u4ed3\u5e93",id:"pub\u4ed3\u5e93",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u5176\u5b83\u4f9d\u8d56\u65b9\u5f0f",id:"\u5176\u5b83\u4f9d\u8d56\u65b9\u5f0f",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5305\u7ba1\u7406"},"\u5305\u7ba1\u7406"),(0,l.kt)("p",null,"YAML\u662f\u4e00\u79cd\u76f4\u89c2\u3001\u53ef\u8bfb\u6027\u9ad8\u5e76\u4e14\u5bb9\u6613\u88ab\u4eba\u7c7b\u9605\u8bfb\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u5b83\u548cxml\u6216Json\u76f8\u6bd4\uff0c\u5b83\u8bed\u6cd5\u7b80\u5355\u5e76\u975e\u5e38\u5bb9\u6613\u89e3\u6790\uff0c\u6240\u4ee5YAML\u5e38\u7528\u4e8e\u914d\u7f6e\u6587\u4ef6\uff0cFlutter\u4e5f\u662f\u7528yaml\u6587\u4ef6\u4f5c\u4e3a\u5176\u914d\u7f6e\u6587\u4ef6\u3002Flutter\u9879\u76ee\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"\uff0c\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: flutter_in_action\ndescription: First Flutter application.\n\nversion: 1.0.0+1\n\ndependencies:\n  flutter:\n    sdk: flutter\n  cupertino_icons: ^0.1.2\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\nflutter:\n  uses-material-design: true\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),"\uff1a\u5e94\u7528\u6216\u5305\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description"),": \u5e94\u7528\u6216\u5305\u7684\u63cf\u8ff0\u3001\u7b80\u4ecb\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version"),"\uff1a\u5e94\u7528\u6216\u5305\u7684\u7248\u672c\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dependencies"),"\uff1a\u5e94\u7528\u6216\u5305\u4f9d\u8d56\u7684\u5176\u5b83\u5305\u6216\u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev_dependencies"),"\uff1a\u5f00\u53d1\u73af\u5883\u4f9d\u8d56\u7684\u5de5\u5177\u5305\uff08\u800c\u4e0d\u662fflutter\u5e94\u7528\u672c\u8eab\u4f9d\u8d56\u7684\u5305\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flutter"),"\uff1aflutter\u76f8\u5173\u7684\u914d\u7f6e\u9009\u9879\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u7684Flutter\u5e94\u7528\u672c\u8eab\u4f9d\u8d56\u67d0\u4e2a\u5305\uff0c\u6211\u4eec\u9700\u8981\u5c06\u6240\u4f9d\u8d56\u7684\u5305\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e0b\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a\u4e00\u4e0b\u5982\u4f55\u6dfb\u52a0\u3001\u4e0b\u8f7d\u5e76\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\u3002"),(0,l.kt)("h2",{id:"pub\u4ed3\u5e93"},"Pub\u4ed3\u5e93"),(0,l.kt)("p",null,"Pub\uff08",(0,l.kt)("a",{parentName:"p",href:"https://pub.dev/"},"https://pub.dev/")," \uff09\u662fGoogle\u5b98\u65b9\u7684",(0,l.kt)("strong",{parentName:"p"},"Dart Packages\u4ed3\u5e93"),"."),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u663e\u793a\u968f\u673a\u5b57\u7b26\u4e32\u7684widget\u3002\u6709\u4e00\u4e2a\u540d\u4e3a\u201cenglish_words\u201d\u7684\u5f00\u6e90\u8f6f\u4ef6\u5305\uff0c\u5176\u4e2d\u5305\u542b\u6570\u5343\u4e2a\u5e38\u7528\u7684\u82f1\u6587\u5355\u8bcd\u4ee5\u53ca\u4e00\u4e9b\u5b9e\u7528\u529f\u80fd\u3002\u6211\u4eec\u9996\u5148\u5728pub\u4e0a\u627e\u5230english_words\u8fd9\u4e2a\u5305\uff08\u5982\u56fe2-5\u6240\u793a\uff09\uff0c\u786e\u5b9a\u5176\u6700\u65b0\u7684\u7248\u672c\u53f7\u548c\u662f\u5426\u652f\u6301Flutter\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/2-5.png",alt:"\u56fe2-5"})),(0,l.kt)("p",null,"\u6211\u4eec\u770b\u5230\u201cenglish_words\u201d\u5305\u6700\u65b0\u7684\u7248\u672c\u662f3.1.3\uff0c\u5e76\u4e14\u652f\u6301flutter\uff0c\u63a5\u4e0b\u6765\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u201cenglish_words\u201d\uff083.1.3\u7248\u672c\uff09\u6dfb\u52a0\u5230\u4f9d\u8d56\u9879\u5217\u8868\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n\n  cupertino_icons: ^0.1.0\n  # \u65b0\u6dfb\u52a0\u7684\u4f9d\u8d56\n  : ^3.1.3\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5305\u3002\u5728Android Studio\u7684\u7f16\u8f91\u5668\u89c6\u56fe\u4e2d\u67e5\u770bpubspec.yaml\u65f6\uff08\u56fe2-6\uff09\uff0c\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Packages get")," \u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://pcdn.flutterchina.club/imgs/2-6.png",alt:"\u56fe2-6"})),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u4f1a\u5c06\u4f9d\u8d56\u5305\u5b89\u88c5\u5230\u60a8\u7684\u9879\u76ee\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'flutter packages get\nRunning "flutter packages get" in flutter_in_action...\nProcess finished with exit code 0\n')),(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\uff0c\u5b9a\u4f4d\u5230\u5f53\u524d\u5de5\u7a0b\u76ee\u5f55\uff0c\u7136\u540e\u624b\u52a8\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"flutter packages get")," \u547d\u4ee4\u6765\u4e0b\u8f7d\u4f9d\u8d56\u5305\u3002\u53e6\u5916\uff0c\u9700\u8981\u6ce8\u610f",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"dev_dependencies"),"\u7684\u533a\u522b\uff0c\u524d\u8005\u7684\u4f9d\u8d56\u5305\u5c06\u4f5c\u4e3aAPP\u7684\u6e90\u7801\u7684\u4e00\u90e8\u5206\u53c2\u4e0e\u7f16\u8bd1\uff0c\u751f\u6210\u6700\u7ec8\u7684\u5b89\u88c5\u5305\u3002\u800c\u540e\u8005\u7684\u4f9d\u8d56\u5305\u53ea\u662f\u4f5c\u4e3a\u5f00\u53d1\u9636\u6bb5\u7684\u4e00\u4e9b\u5de5\u5177\u5305\uff0c\u4e3b\u8981\u662f\u7528\u4e8e\u5e2e\u52a9\u6211\u4eec\u63d0\u9ad8\u5f00\u53d1\u3001\u6d4b\u8bd5\u6548\u7387\uff0c\u6bd4\u5982flutter\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u5305\u7b49\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"english_words"),"\u5305\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:english_words/english_words.dart';\n")),(0,l.kt)("p",{parentName:"li"},"\u5728\u8f93\u5165\u65f6\uff0cAndroid Studio\u4f1a\u81ea\u52a8\u63d0\u4f9b\u6709\u5173\u5e93\u5bfc\u5165\u7684\u5efa\u8bae\u9009\u9879\u3002\u5bfc\u5165\u540e\u8be5\u884c\u4ee3\u7801\u5c06\u4f1a\u663e\u793a\u4e3a\u7070\u8272\uff0c\u8868\u793a\u5bfc\u5165\u7684\u5e93\u5c1a\u672a\u4f7f\u7528\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"english_words"),"\u5305\u6765\u751f\u6210\u968f\u673a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class RandomWordsWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n   // \u751f\u6210\u968f\u673a\u5b57\u7b26\u4e32\n    final wordPair = new WordPair.random();\n    return Padding(\n      padding: const EdgeInsets.all(8.0),\n      child: new Text(wordPair.toString()),\n    );\n  }\n}\n")),(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"RandomWordsWidget")," \u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState.build")," \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Column"),"\u7684\u5b50widget\u4e2d\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: <Widget>[\n    RandomWordsWidget(),\n  ],\n)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\uff0c\u8bf7\u4f7f\u7528\u70ed\u91cd\u8f7d\u6309\u94ae\uff08\u26a1\ufe0f\u56fe\u6807\uff09 \u66f4\u65b0\u6b63\u5728\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6bcf\u6b21\u5355\u51fb\u70ed\u91cd\u8f7d\u6216\u4fdd\u5b58\u9879\u76ee\u65f6\uff0c\u90fd\u4f1a\u5728\u6b63\u5728\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u968f\u673a\u9009\u62e9\u4e0d\u540c\u7684\u5355\u8bcd\u5bf9\u3002 \u8fd9\u662f\u56e0\u4e3a\u5355\u8bcd\u5bf9\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u65b9\u6cd5\u5185\u90e8\u751f\u6210\u7684\u3002\u6bcf\u6b21\u70ed\u66f4\u65b0\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u65b9\u6cd5\u90fd\u4f1a\u88ab\u6267\u884c\uff0c\u8fd0\u884c\u6548\u679c\u5982\u56fe2-7\u6240\u793a\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://pcdn.flutterchina.club/imgs/2-7.png",alt:"\u56fe2-7"})))),(0,l.kt)("h2",{id:"\u5176\u5b83\u4f9d\u8d56\u65b9\u5f0f"},"\u5176\u5b83\u4f9d\u8d56\u65b9\u5f0f"),(0,l.kt)("p",null,"\u4e0a\u6587\u6240\u8ff0\u7684\u4f9d\u8d56\u65b9\u5f0f\u662f\u4f9d\u8d56Pub\u4ed3\u5e93\u7684\u3002\u4f46\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f9d\u8d56\u672c\u5730\u5305\u548cgit\u4ed3\u5e93\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u672c\u5730\u5305"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u6211\u4eec\u6b63\u5728\u672c\u5730\u5f00\u53d1\u4e00\u4e2a\u5305\uff0c\u5305\u540d\u4e3apkg1\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u65b9\u5f0f\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n    pkg1:\n        path: ../../code/pkg1\n")),(0,l.kt)("p",{parentName:"li"},"\u8def\u5f84\u53ef\u4ee5\u662f\u76f8\u5bf9\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f9d\u8d56Git\uff1a\u4f60\u4e5f\u53ef\u4ee5\u4f9d\u8d56\u5b58\u50a8\u5728Git\u4ed3\u5e93\u4e2d\u7684\u5305\u3002\u5982\u679c\u8f6f\u4ef6\u5305\u4f4d\u4e8e\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\u4e2d\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  pkg1:\n    git:\n      url: git://github.com/xxx/pkg1.git\n")),(0,l.kt)("p",{parentName:"li"},"\u4e0a\u9762\u5047\u5b9a\u5305\u4f4d\u4e8eGit\u5b58\u50a8\u5e93\u7684\u6839\u76ee\u5f55\u4e2d\u3002\u5982\u679c\u4e0d\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528path\u53c2\u6570\u6307\u5b9a\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  package1:\n    git:\n      url: git://github.com/flutter/packages.git\n      path: packages/package1\n")))),(0,l.kt)("p",null,"\u4e0a\u9762\u4ecb\u7ecd\u7684\u8fd9\u4e9b\u4f9d\u8d56\u65b9\u5f0f\u662fFlutter\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\uff0c\u4f46\u8fd8\u6709\u4e00\u4e9b\u5176\u5b83\u4f9d\u8d56\u65b9\u5f0f\uff0c\u5b8c\u6574\u7684\u5185\u5bb9\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u67e5\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.dartlang.org/tools/pub/dependencies"},"https://www.dartlang.org/tools/pub/dependencies")," \u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86Flutter\u4e2d\u5305\u7ba1\u7406\u3001\u5f15\u7528\u3001\u4e0b\u8f7d\u7684\u6574\u4f53\u6d41\u7a0b\uff0c\u6211\u4eec\u5c06\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u5e76\u53d1\u5e03\u6211\u4eec\u81ea\u5df1\u7684\u5305\u3002"))}s.isMDXComponent=!0}}]);