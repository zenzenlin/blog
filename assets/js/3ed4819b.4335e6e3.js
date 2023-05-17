"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1835],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,p=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=c(n),u=o,N=k["".concat(l,".").concat(u)]||k[u]||s[u]||p;return n?r.createElement(N,a(a({ref:e},m),{},{components:n})):r.createElement(N,a({ref:e},m))}));function N(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var p=n.length,a=new Array(p);a[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[k]="string"==typeof t?t:o,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1831:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const p={sidebar_position:6,authors:["zenzen"],tags:["\u7a0b\u5f0f"]},a="\u539f\u578b\u3001\u539f\u578b\u934a\u548c\u7e7c\u627f",i={unversionedId:"JavaScript/Prototype",id:"JavaScript/Prototype",title:"\u539f\u578b\u3001\u539f\u578b\u934a\u548c\u7e7c\u627f",description:"OOP \u57fa\u672c\u6982\u5ff5\u662f\uff1a\u63a1\u7528\u7269\u4ef6 (objects) \u4f86\u6a21\u5851\u771f\u5be6\u7684\u5be6\u7269\u4e16\u754c\uff1a\u4e5f\u5c31\u662f\u5728\u7a0b\u5f0f\u4e2d\u7684\u5448\u73fe\u662f\u900f\u904e objects \u4f86\u5851\u9020\u5176\u6a21\u578b\uff0c\u4e14\uff3c\u6216\u63d0\u4f9b\u7c21\u55ae\u65b9\u5f0f\u5b58\u53d6\u5176\u300c\u96e3\u4ee5\u6216\u4e0d\u53ef\u80fd\u63a1\u7528\u7684\u529f\u80fd\u300d\u3002",source:"@site/docs/JavaScript/Prototype.md",sourceDirName:"JavaScript",slug:"/JavaScript/Prototype",permalink:"/blog/docs/JavaScript/Prototype",draft:!1,tags:[{label:"\u7a0b\u5f0f",permalink:"/blog/docs/tags/\u7a0b\u5f0f"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,authors:["zenzen"],tags:["\u7a0b\u5f0f"]},sidebar:"tutorialSidebar",previous:{title:"JavaScript \u5e95\u5c64\u6982\u8ff0",permalink:"/blog/docs/JavaScript/First Post"},next:{title:"Tutorial - Basics",permalink:"/blog/docs/category/tutorial---basics"}},l={},c=[{value:"<strong>\u539f\u578b\u662f\u4ec0\u9ebc\uff1f</strong>",id:"\u539f\u578b\u662f\u4ec0\u9ebc",level:2},{value:"<strong>\u539f\u578b\u934a (prototype chain)</strong>",id:"\u539f\u578b\u934a-prototype-chain",level:2},{value:"\u51fd\u5f0f\u5efa\u69cb\u5f0f (function constructor)",id:"\u51fd\u5f0f\u5efa\u69cb\u5f0f-function-constructor",level:2},{value:"new",id:"new",level:2}],m={toc:c},k="wrapper";function s(t){let{components:e,...n}=t;return(0,o.kt)(k,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u539f\u578b\u539f\u578b\u934a\u548c\u7e7c\u627f"},"\u539f\u578b\u3001\u539f\u578b\u934a\u548c\u7e7c\u627f"),(0,o.kt)("p",null,"OOP \u57fa\u672c\u6982\u5ff5\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u63a1\u7528\u7269\u4ef6 (objects) \u4f86\u6a21\u5851\u771f\u5be6\u7684\u5be6\u7269\u4e16\u754c"),"\uff1a\u4e5f\u5c31\u662f\u5728\u7a0b\u5f0f\u4e2d\u7684\u5448\u73fe\u662f",(0,o.kt)("strong",{parentName:"p"},"\u900f\u904e objects \u4f86\u5851\u9020\u5176\u6a21\u578b\uff0c\u4e14\uff3c\u6216\u63d0\u4f9b\u7c21\u55ae\u65b9\u5f0f\u5b58\u53d6\u5176\u300c\u96e3\u4ee5\u6216\u4e0d\u53ef\u80fd\u63a1\u7528\u7684\u529f\u80fd\u300d"),"\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u70ba\u67d0\u500b\u8907\u96dc\u6771\u897f\u5efa\u7acb\u7c21\u55ae\u7684\u6a21\u578b\uff0c\u85c9\u4ee5\u4ee3\u8868\u5176\u6700\u91cd\u8981\u7684\u6982\u5ff5\u6216\u7279\u8cea\u6216\u8cc7\u6599\u6216\u529f\u80fd\uff0c\u63a5\u8005\u53ef\u5f9e\u9019\u500b\u300c\u985e\u5225\u300d\u5efa\u7acb\u7269\u4ef6\u5be6\u9ad4 (Object instance) \u2014 \u5373\u8a72\u7269\u4ef6\u5305\u542b\u4e86\u985e\u5225\u4e2d\u6240\u5b9a\u7fa9\u7684\u8cc7\u6599\u8207\u529f\u80fd\u3002\u5728\u6839\u64da\u985e\u5225\u5efa\u7acb\u7269\u4ef6\u5be6\u9ad4\u6642\uff0c\u5c31\u662f\u57f7\u884c\u985e\u5225\u7684\u300c\u5efa\u69cb\u5b50 (Constructor) \u51fd\u5f0f\u300d\u6240\u5efa\u7acb\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JavaScript \u662f\u4f7f\u7528\u539f\u578b\u800c\u975e class\uff0c\u56e0\u70ba JavaScript \u6839\u672c\u57fa\u672c\u4e0a\u90fd\u662f\u7269\u4ef6\uff0c\u4efb\u4f55\u7684\u5167\u5bb9\u90fd\u4ee5\u7269\u4ef6\u4f86\u505a\u5efa\u7acb\uff0c\u6240\u4ee5\u5fc5\u9808\u4ee5\u539f\u578b\u7684\u65b9\u5f0f\u4f5c\u51fa\u985e\u4f3c class \u7684\u65b9\u6cd5"),"\uff0c\u539f\u578b\u7e7c\u627f\u662f JavaScript \u7368\u6709\u7684\u7279\u6027\uff0c\u900f\u904e\u539f\u578b\u7684\u65b9\u5f0f\u505a\u51fa\u985e\u5225\u7e7c\u627f\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u539f\u578b\u662f\u4ec0\u9ebc"},(0,o.kt)("strong",{parentName:"h2"},"\u539f\u578b\u662f\u4ec0\u9ebc\uff1f")),(0,o.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u628a\u539f\u578b\u60f3\u50cf\u6210\u4e00\u500b",(0,o.kt)("strong",{parentName:"p"},"\u85cd\u5716"),"\u3002\u4f8b\u5982\u6211\u5011\u60f3\u5efa\u4e00\u53f0\u8eca\uff0c\u5c31\u6703\u60f3\u5230",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u53f0\u8eca\u6703\u5305\u62ec\u4ee5\u4e0b"),"\u7684\u7279\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8eca\u7684",(0,o.kt)("strong",{parentName:"li"},"\u7a2e\u985e")," (\u96fb\u52d5\u8eca\u3001\u8ca8\u8eca\u3001\u6469\u6258\u8eca...)"),(0,o.kt)("li",{parentName:"ul"},"\u8eca\u7684",(0,o.kt)("strong",{parentName:"li"},"\u984f\u8272")," (\u7d05\u8272\u3001\u9ed1\u8272\u3001\u85cd\u8272...)"),(0,o.kt)("li",{parentName:"ul"},"\u8eca\u7684",(0,o.kt)("strong",{parentName:"li"},"\u5750\u4f4d\u6578\u76ee"))),(0,o.kt)("p",null,"\u9019\u5c31\u662f\u4e00\u53f0\u8eca\u7684\u85cd\u5716\uff0c\u4f46\u5b83\u53ea\u662f\u4e00\u500b\u85cd\u5716\uff0c\u4e26\u4e0d\u662f\u5be6\u5be6\u5728\u5728\u7684\u4e00\u53f0\u8eca\u3002\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u5be6\u969b\u5efa\u51fa\u4e00\u53f0\u8eca\uff0c\u5c31\u53ef\u4ee5\u6309\u9019\u4efd\u85cd\u5716\u53bb\u5efa\u8d77\u4f86\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6211\u7684\u8eca\u5b50\u8ddf\u4f60\u7684\u8eca\u5b50",(0,o.kt)("strong",{parentName:"li"},"\u7121\u95dc\u4fc2"),"\uff0c\u662f\u5169\u6a23\u4e0d\u540c\u7684\u7269\u4ef6\uff0c\u5404\u81ea\u6309\u81ea\u5df1\u7684\u559c\u597d\u8abf\u6574\u5c6c\u6027\u503c"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u7684\u8eca\u5b50\u548c\u4f60\u7684\u8eca\u5b50",(0,o.kt)("strong",{parentName:"li"},"\u5171\u540c\u7e7c\u627f"),"\u4e86\u540c\u4e00\u500b\u85cd\u5716")),(0,o.kt)("h2",{id:"\u539f\u578b\u934a-prototype-chain"},(0,o.kt)("strong",{parentName:"h2"},"\u539f\u578b\u934a (prototype chain)")),(0,o.kt)("p",null,"\u7531\u65bc JavaScript \u4f7f\u7528\u7684\u662f prototypal inheritance\uff0c\u6240\u4ee5\u5fc5\u7136\u6703\u5305\u542b\u539f\u578b (prototype) \u7684\u6982\u5ff5\uff0c\u770b\u4e00\u4e0b\u9019\u5f35\u5716\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://4.bp.blogspot.com/-fatzOLLqlGM/V2dXLiCs5RI/AAAAAAAAmwE/PLkLHJTmOkIiIz0ftJVdsdWmVhzJqgt8wCLcB/s640/1.png",alt:"\u4e00\u500b\u7269\u4ef6\u88e1\u9762\u9664\u4e86\u6240\u7d66\u4e88\u7684\u5c6c\u6027\u503c\u5916\uff0c\u53e6\u5916\u4e5f\u5305\u542b\u539f\u578b prototype\u3002"})),(0,o.kt)("p",null,"\u4e00\u500b\u7269\u4ef6\u88e1\u9762\u9664\u4e86\u6240\u7d66\u4e88\u7684\u5c6c\u6027\u503c\u5916\uff0c\u53e6\u5916\u4e5f\u5305\u542b\u539f\u578b prototype\u3002"),(0,o.kt)("p",null,"JavaScript \u4e2d\u6703\u6709\u4e00\u4e9b\u9810\u8a2d\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u7269\u4ef6\u548c\u51fd\u5f0f\u90fd\u5305\u542b prototype \u9019\u500b\u5c6c\u6027"),"\uff0c\u5047\u8a2d\u6211\u5011\u628a prototype \u53eb\u505a proto\uff0c\u9019\u6642\u5019\u5982\u679c\u6211\u5011\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"obj.prop2")," \u7684\u6642\u5019\uff0cJavaScript \u5f15\u64ce\u6703\u5148\u5728 obj \u9019\u500b\u7269\u4ef6\u7684\u5c6c\u6027\u88e1\u53bb\u5c0b\u627e\u6709\u6c92\u6709\u53eb\u505a prop2 \u7684\u5c6c\u6027\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u5b83\u627e\u4e0d\u5230\uff0c\u9019\u6642\u5019\u5b83\u5c31\u6703\u518d\u9032\u4e00\u6b65\u5f80\u8a72\u7269\u4ef6\u7684 proto \u88e1\u9762\u53bb\u5c0b\u627e"),"\u3002\u6240\u4ee5\uff0c\u96d6\u7136\u6211\u5011\u8f38\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"obj.prop2")," \u7684\u6642\u5019\u6703\u5f97\u5230\u56de\u50b3\u503c\uff0c\u4f46\u5be6\u969b\u4e0a\u9019\u4e0d\u662f obj \u88e1\u9762\u76f4\u63a5\u7684\u5c6c\u6027\u540d\u7a31\uff0c\u800c\u662f",(0,o.kt)("strong",{parentName:"p"},"\u5728 obj \u7684 proto \u88e1\u9762\u627e\u5230\u7684\u5c6c\u6027"),"\u540d\u7a31 (\u5373\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"obj.proto.prop2"),"\uff0c\u4f46\u6211\u5011\u4e0d\u9700\u8981\u9019\u6a23\u6253)\u3002"),(0,o.kt)("p",null,"\u4e4d\u770b\u4e4b\u4e0b\uff0cprop3 \u5f88\u50cf\u662f\u5728\u7269\u4ef6 obj \u88e1\u9762\u7684\u5c6c\u6027\uff0c\u4f46\u5be6\u969b\u4e0a\u5b83\u662f\u5728 obj \u2192 prop \u2192 prop \u7684\u7269\u4ef6\u88e1\u9762\uff0c\u800c\u9019\u6a23",(0,o.kt)("strong",{parentName:"p"},"\u5f9e\u7269\u4ef6\u672c\u8eab\u5f80 proto \u5c0b\u627e\u4e0b\u53bb\u7684\u934a\u6211\u5011\u5c31\u7a31\u4f5c\u300c\u539f\u578b\u934a (prototype chain)\u300d"),"\u3002\u9019\u6a23\u4e00\u76f4\u5f80\u4e0b\u627e\u6703\u627e\u5230\u4ec0\u9ebc\u6642\u5019\u5462\uff1f\u5b83\u6703\u76f4\u5230\u67d0\u500b\u5c0d\u8c61\u7684\u539f\u578b\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," \u70ba\u6b62 (\u4e5f\u5c31\u662f\u4e0d\u518d\u6709\u539f\u578b\u6307\u5411)\u3002"),(0,o.kt)("h2",{id:"\u51fd\u5f0f\u5efa\u69cb\u5f0f-function-constructor"},"\u51fd\u5f0f\u5efa\u69cb\u5f0f (function constructor)"),(0,o.kt)("p",null,"\u7576\u4f7f\u7528\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"\xa0\u9019\u500b\u95dc\u9375\u5b57\u6642\uff0c\u5be6\u969b\u4e0a\u6703\u5148\u6709\u4e00\u500b\u7a7a\u7684\u7269\u4ef6\u88ab\u5efa\u7acb\uff0c\u63a5\u8457 ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u95dc\u9375\u5b57\u51fd\u5f0f\u6703\u88ab\u57f7\u884c\uff0c\u7576\u51fd\u5f0f\u57f7\u884c\u7684\u6642\u5019\uff0c\u5728 execution context \u4e2d\u6703\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u88ab\u5efa\u7acb\uff0c\u800c",(0,o.kt)("strong",{parentName:"p"},"\u7576\u6211\u5011\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"new")," \u7684\u6642\u5019\uff0c\u51fd\u5f0f\u88e1\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"this")," \u6703\u88ab\u6307\u5b9a\u6210\u525b\u525b\u6240\u5efa\u7acb\u7684\u90a3\u500b\u7a7a\u7269\u4ef6"),"\u3002\u53ea\u8981\u9019\u500b\u51fd\u5f0f\u5efa\u69cb\u5f0f\u6c92\u6709\u6307\u5b9a return \u70ba\u5176\u4ed6\u7269\u4ef6\uff0c\u5b83\u5c31\u6703\u76f4\u63a5\u56de\u50b3\u7d66\u6211\u5011\u9019\u500b\u65b0\u5efa\u7acb\u7684\u7269\u4ef6\uff0c\u82e5\u6709 return \u5176\u4ed6\u5167\u5bb9\uff0c\u539f\u672c\u88ab\u5efa\u7acb\u7684\u65b0\u7269\u4ef6\u4e0d\u6703\u88ab\u56de\u50b3\uff0c\u800c\u662f\u56de\u50b3\u6211\u5011\u6700\u5f8c return \u7d66\u5b83\u7684\u5167\u5bb9\u3002"),(0,o.kt)("p",null,"\u60f3\u8981\u5efa\u7acb\u51fa\u540c\u5c6c\u6027\u540d\u7a31\u4f46\u4e0d\u540c\u5c6c\u6027\u503c\u7684\u7269\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u628a\u7269\u4ef6\u7684\u5c6c\u6027\u503c\u8b8a\u6210\u53c3\u6578"),"\uff0c\u5982\u6b64\u5c31\u80fd",(0,o.kt)("strong",{parentName:"p"},"\u900f\u904e\u6b64 function constructor \u5efa\u7acb\u51fa\u8a31\u591a\u4e0d\u540c\u7684\u7269\u4ef6\u3002")),(0,o.kt)("h2",{id:"new"},"new"),(0,o.kt)("p",null,"\u6709\u4e86\u539f\u578b\u934a\u7684\u6982\u5ff5\u4e4b\u5f8c\uff0c\u5c31\u4e0d\u96e3\u7406\u89e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u9019\u500b\u95dc\u9375\u5b57\u80cc\u5f8c\u6703\u505a\u7684\u4e8b\u60c5\u662f\u4ec0\u9ebc\u3002"),(0,o.kt)("p",null,"\u5047\u8a2d\u73fe\u5728\u6709\u4e00\u884c\u7a0b\u5f0f\u78bc\u662f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"var nick = new Person('nick');"),"\uff0c\u90a3\u5b83\u6709\u4ee5\u4e0b\u5e7e\u4ef6\u4e8b\u60c5\u8981\u505a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5275\u51fa\u4e00\u500b\u65b0\u7684 object\uff0c\u6211\u5011\u53eb\u5b83 O"),(0,o.kt)("li",{parentName:"ol"},"\u628a O \u7684\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"__proto__"),"\xa0\u6307\u5411 Person \u7684 prototype\uff0c\u624d\u80fd\u7e7c\u627f\u539f\u578b\u934a"),(0,o.kt)("li",{parentName:"ol"},"\u62ff O \u7576\u4f5c context\uff0c\u547c\u53eb Person \u9019\u500b\u5efa\u69cb\u51fd\u5f0f"),(0,o.kt)("li",{parentName:"ol"},"\u56de\u50b3 O")),(0,o.kt)("p",null,"\u7528\u300c\u51fd\u5f0f\u5efa\u69cb\u5b50\u300d\u4f86\u4ee3\u8868\u90a3\u500b\u85cd\u5716\uff0c\u518d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u7684\u904b\u7b97\u5b50\u4f86\u57f7\u884c\u51fd\u5f0f\u5efa\u69cb\u5f0f\uff0c\u6703\u5148\u5efa\u7acb\u4e00\u500b\u7a7a\u7269\u4ef6\uff0c\u540c\u6642\u5c07",(0,o.kt)("strong",{parentName:"p"},"\u8a72\u5efa\u69cb\u5f0f\u4e2d prototype \u9019\u500b\u5c6c\u6027\u7684\u5167\u5bb9 (car.prototype)\uff0c\u8a2d\u7f6e\u5230\u8a72\u7269\u4ef6\u5be6\u4f8b\u7684 prototype \u4e2d (myCar."),"proto",(0,o.kt)("strong",{parentName:"p"},")"),"\u3002\u518d\u7522\u751f\u51fa\u4e00\u500b\u5be6\u9ad4\u7269\u4ef6 (myCar\u3001yourCar)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5efa\u7acb\u51fd\u5f0f\u5efa\u69cb\u5b50\nfunction car(type, color, person){\n  this.type = type;\n  this.color = color;\n  this.person = person;\n}\n\n// \u4e4b\u5f8c\u7528\u51fd\u5f0f\u5efa\u69cb\u5b50\u4f86\u7522\u751f\u5be6\u9ad4\u7269\u4ef6\nvar myCar = new car('\u96fb\u52d5\u8eca', '\u7d05\u8272', 4)\nvar yourCar = new car('\u8ca8\u8eca', '\u85cd\u8272', 2)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u51fd\u5f0f\u5efa\u69cb\u5b50"),"\u88cf\u9762\u6709\u4e00\u4e9b\u5c6c\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51fd\u5f0f\u88cf\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")," \u5c6c\u6027\uff0c\u662f\u4e00\u500b\u7a7a\u7269\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u9019\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")," \u5c6c\u6027\u88cf\u9762\uff0c\u518d\u6709 2 \u500b\u5c6c\u6027\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor")," \u5c6c\u6027 (\u6307\u56de\u9019\u4e00\u5c64\u5b83\u81ea\u5df1\u7684\u5efa\u69cb\u51fd\u5f0f\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"A.prototype.constructor === A"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"__proto__")," \u5c6c\u6027 (\u518d\u627e\u4e0a\u4e00\u5c64\u7684\u539f\u578b (prototype) ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),")")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," \u5c6c\u6027\uff0c\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6307\u56de\u81ea\u5df1\u9019\u500b\u51fd\u5f0f\u5efa\u69cb\u5b50\u7684\u672c\u8eab"),"\uff0c\u5373\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"car")," \u9019\u500b\u51fd\u5f0f\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c6c\u6027\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u9019\u500b\u51fd\u5f0f\u518d\u4e0a\u4e00\u5c64\u7684\u539f\u578b"),"\uff0c\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),"\uff0c\u56e0\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"function")," \u662f\u5c6c\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," \u578b\u5225\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5be6\u9ad4\u7269\u4ef6"),"\u7684\u7279\u5225\u4e4b\u8655\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7269\u4ef6\u88cf\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__"),"\uff0c\u88cf\u9762\u6709\uff1a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," \u5c6c\u6027 (\u6307\u5411\u4e0a\u4e00\u5c64\u5b83\u7684\u5efa\u69cb\u51fd\u5f0f)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c6c\u6027 (\u518d\u627e\u4e0a\u4e00\u5c64\u7684\u539f\u578b (prototype) ) ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u88cf\u9762\u9084\u8981\u5305\u591a\u4e00\u500b",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__"),"\uff0c\u9019\u88cf\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u662f\u6307\u5411\u5b83\u7684\u539f\u578b\uff0c\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u539f\u578b"),"\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5be6\u9ad4.__proto__ === \u539f\u578b.prototype"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b83\u5011\u90fd\u6709\u540c\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," \u5c6c\u6027\uff0c\u56e0\u70ba\u5b83\u5011\u90fd\u662f\u7531\u540c\u4e00\u500b\u51fd\u5f0f\u5efa\u69cb\u5b50\u7522\u751f\u7684\u3002"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5be6\u9ad4\u7269\u4ef6\u53ea\u6709",(0,o.kt)("inlineCode",{parentName:"strong"},"__proto__"),"\u5c6c\u6027"),"\uff0c\u4e0d\u540c\u65bc",(0,o.kt)("strong",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f\u540c\u6642\u64c1\u6709",(0,o.kt)("inlineCode",{parentName:"strong"},"__proto__"),"\u548c",(0,o.kt)("inlineCode",{parentName:"strong"},"prototype"),"\u9019\u5169\u500b\u5c6c\u6027"),"\u3002\u5be6\u9ad4\u7269\u4ef6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__"),"\uff0c\u6703\u6307\u5411\u4e0a\u4e00\u5c64\u7684\u539f\u578b\uff0c\u5373\u4e0a\u4e00\u5c64\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),"\uff0c\u9019\u500b\u4e0a\u4e00\u5c64\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),"\u6703\u653e\u8457\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor")," (\u6307\u56de\u9019\u4e00\u5c64\u5b83\u81ea\u5df1\u7684\u5efa\u69cb\u51fd\u5f0f)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__proto__")," (\u518d\u627e\u4e0a\u4e00\u5c64\u7684\u539f\u578b (prototype) )"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u4e4b\u524d\u5b9a\u7fa9\u597d\u7684\u65b9\u6cd5 (\u5982\u6709)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/brNPVuV.png",alt:"https://i.imgur.com/brNPVuV.png"})))}s.isMDXComponent=!0}}]);