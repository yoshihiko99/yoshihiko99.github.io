(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8163:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(29),a=r(6835),i=r(7794),l=r.n(i),s=r(9008),c=r(1163),o=r(7294),d=r(1664),h=r.n(d),m=r(5944),u=function(e){var t=e.active,r=void 0!==t&&t,n=e.children,a=e.href,i=e.target;return(0,m.tZ)(h(),{href:a,children:(0,m.tZ)("a",{className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ".concat(r?"border-gray-900 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),target:i,children:n})})},f=function(e){var t=e.active,r=void 0!==t&&t,n=e.children,a=e.href,i=e.target;return(0,m.tZ)(h(),{href:a,children:(0,m.tZ)("a",{className:"block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 ".concat(r?"border-gray-900 text-gray-600 bg-gray-300":"border-transparent text-gray-600"),target:i,children:n})})},p=function(){return(0,m.tZ)(h(),{href:"/",children:(0,m.tZ)("a",{className:"font-logo inline-flex items-center px-1 pt-1 border-b-2 border-white border-opacity-0 text-3xl font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",children:"Yuta Euchi"})})},g=function(){var e=(0,c.useRouter)(),t=(0,o.useState)(!1),r=t[0],n=t[1];return(0,m.BX)("nav",{className:"bg-white border-b border-gray-100",children:[(0,m.tZ)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,m.BX)("div",{className:"flex justify-between h-16",children:[(0,m.tZ)("div",{className:"flex",children:(0,m.BX)("div",{className:"hidden font-ubuntu space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[(0,m.tZ)(p,{}),(0,m.tZ)(u,{href:"/",active:"/"===e.pathname,children:"Home"}),(0,m.tZ)(u,{href:"#about-me",children:"About Me"}),(0,m.tZ)(u,{href:"#works",children:"Works"}),(0,m.tZ)(u,{href:"#links",children:"Links"}),(0,m.tZ)(u,{href:"https://github.com/yoshihiko99/yoshihiko99.github.io",target:"_blank",children:"Source"})]})}),(0,m.tZ)("div",{className:"justify-self-start flex items-center sm:hidden",children:(0,m.tZ)(p,{})}),(0,m.tZ)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,m.tZ)("button",{onClick:function(){return n((function(e){return!e}))},className:"inline-flex border items-center justify-center p-2 rounded-md text-gray-400 text-gray-500 transition duration-150 ease-in-out",children:(0,m.tZ)("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:r?(0,m.tZ)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):(0,m.tZ)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),r&&(0,m.tZ)("div",{className:"block sm:hidden",children:(0,m.tZ)("div",{className:"py-1 border-t border-gray-200",children:(0,m.BX)("div",{className:"my-3 space-y-1",children:[(0,m.tZ)(f,{href:"/",active:"/"===e.pathname,children:"Home"}),(0,m.tZ)(f,{href:"#about-me",children:"About Me"}),(0,m.tZ)(f,{href:"#works",children:"Works"}),(0,m.tZ)(f,{href:"#links",children:"Links"}),(0,m.tZ)(f,{href:"https://github.com/yoshihiko99/yoshihiko99.github.io",target:"_blank",children:"Source"})]})})})]})},b=r(9499),v=r(7812),x=function(e){return(0,m.BX)("div",{className:"font-ubuntu "+e.className,children:[e.text,e.children]})},y=function(e){var t=e.text,r=e.cursor,n=void 0!==r&&r,a=e.prefix,i=void 0===a?"$ ":a,l=e.className;return(0,m.tZ)(m.HY,{children:(0,m.tZ)(x,{text:i+t,className:l,children:n&&(0,m.tZ)("span",{className:"content-[''] align-middle w-1.5 h-5 inline-block bg-gray-900 animate-blink"})})})},Z=function(e){return(0,m.tZ)(x,{text:e.text,className:e.className})};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e){var t=e.lines,r=e.canStart,n=e.lineClassName,i=e.typingInterval,l=void 0===i?50:i,s=e.ComputerInterval,c=void 0===s?200:s,d=e.UserInterval,h=void 0===d?2e3:d,u=o.useState([]),f=(0,a.Z)(u,2),p=f[0],g=f[1];(0,o.useEffect)((function(){if(r&&p.length<=t.length){var e=p[p.length-1],n=t[p.length-1];if(0!==p.length&&e.text.length<n.text.length){if("cmd"===e.type){var a,i=n.text[e.text.length],s=0===e.text.length;a=setTimeout((function(){var t=(0,v.Z)(p);t[t.length-1]=w(w({},e),{},{text:e.text.concat(i)}),g(t),clearTimeout(a)}),s?h:l)}else if("res"===p[p.length-1].type){var o=(0,v.Z)(p);o[o.length-1]=w(w({},e),{},{text:t[p.length-1].text}),g(o)}}else if(p.length<t.length){var d;d=setTimeout((function(){var e=[].concat((0,v.Z)(p),[{type:t[p.length].type,text:"",cursor:!0}]);e.length>1&&(e[e.length-2]=w(w({},p[e.length-2]),{},{cursor:!1})),g(e),clearTimeout(d)}),c)}}}),[r,p]);return(0,m.tZ)(m.HY,{children:p.map((function(e){return"cmd"===e.type?(0,m.tZ)(y,{text:e.text,cursor:e.cursor,className:n}):"res"===e.type?(0,m.tZ)(Z,{text:e.text,className:n}):void 0}))})},_=function(e){return(0,m.tZ)("div",{className:e.outerClassName,children:(0,m.tZ)(k,{lines:e.lines,canStart:e.canStart,lineClassName:e.lineClassName})})},j=r(131),O=(r(2523),function(e){return(0,m.tZ)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,m.BX)("div",{className:"rounded overflow-hidden shadow-lg grid md:grid-cols-2 transform transition duration-500 hover:scale-95 hover:opacity-50",children:[(0,m.tZ)("div",{className:"flex",children:(0,m.tZ)("img",{className:"w-full h-auto my-auto",src:e.ImageSrc,alt:e.ImageAlt})}),(0,m.BX)("div",{className:"grid mx-3 mt-6",children:[(0,m.BX)("div",{className:"mb-6",children:[(0,m.tZ)("h3",{className:"font-bold text-3xl mb-6",children:e.leading}),(0,m.tZ)("p",{className:"text-gray-700 text-base",children:e.content})]}),(0,m.tZ)("div",{className:"mb-3",children:e.tags.map((function(e){return(0,m.tZ)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:e},e)}))})]})]})})}),S=function(e){return(0,m.tZ)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,m.tZ)("div",{className:"rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-95 hover:opacity-50",children:(0,m.tZ)("p",{className:"text-gray-700 text-base p-6",children:e.title})})})},X=r(6868),B=r.n(X),P=r(5241),M=JSON.parse('{"background":{"color":"#dce8e8"},"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"retina_detect":true}'),L=function(){var e=(0,j.YD)({rootMargin:"-100px",triggerOnce:!0}),t=(0,a.Z)(e,2),r=t[0],i=t[1],c=(0,j.YD)({rootMargin:"-100px",triggerOnce:!0}),o=(0,a.Z)(c,2),d=o[0],h=o[1],u=(0,j.YD)({rootMargin:"-100px",triggerOnce:!0}),f=(0,a.Z)(u,2),p=f[0],b=f[1],v=function(){var e=(0,n.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.R)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.BX)("div",{children:[(0,m.tZ)(s.default,{children:(0,m.tZ)("title",{children:"Yuta Euchi"})}),(0,m.tZ)(g,{}),(0,m.BX)("main",{className:"w-full",children:[(0,m.tZ)(B(),{init:v,options:M,className:"-z-10 absolute"}),(0,m.tZ)("div",{className:"h-screen pb-16 flex items-center justify-center",children:(0,m.tZ)(_,{outerClassName:"h-56 w-4/5 sm:w-2/3 lg:w-1/3 p-7 rounded bg-white",lineClassName:"",lines:[{type:"cmd",text:"pwd"},{type:"res",text:"Yuta Euchi's portfolio"},{type:"cmd",text:"ls"},{type:"res",text:"about-me\u2003works\u2003Links"},{type:"cmd",text:"view all"},{type:"res",text:"please scroll..."},{type:"cmd",text:""}],canStart:!0})}),(0,m.tZ)("div",{className:"bg-white pb-6",children:(0,m.BX)("div",{className:"mx-auto max-w-5xl sm:w-3/5 px-8",children:[(0,m.BX)("div",{ref:r,className:"py-28",children:[(0,m.tZ)("a",{id:"about-me",children:(0,m.tZ)("h2",{className:"text-5xl mb-6 w-full",children:"About Me"})}),i&&(0,m.BX)("div",{className:"animate__animated animate__fadeInUp w-full grid md:grid-cols-2",children:[(0,m.BX)("div",{className:"my-auto",children:[(0,m.tZ)("p",{children:"\u6771\u4eac\u5de5\u696d\u5927\u5b66\u5927\u5b66\u9662\u60c5\u5831\u7406\u5de5\u5b66\u9662\u3001\u73fe\u5728\u4fee\u58eb\u4e00\u5e74\u3002\u795e\u5948\u5ddd\u770c\u51fa\u8eab\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3002 \u5927\u5b663\u5e74\u306e\u590f\u3001\u30b9\u30ad\u30eb\u30a2\u30c3\u30d7\u3092\u3059\u308b\u305f\u3081\u6771\u5927\u767a\u30d9\u30f3\u30c1\u30e3\u30fc\u300c\u682a\u5f0f\u4f1a\u793eDrafty\u300d\u306b\u6240\u5c5e\u3059\u308b\u3002 \u30c6\u30c3\u30af\u30ea\u30fc\u30c9\u3068\u3057\u3066\u30a8\u30f3\u30b8\u30cb\u30a2\u30c1\u30fc\u30e0\u306e\u30ea\u30fc\u30c0\u30fc\u306b\u7740\u4efb\u3001\u30e1\u30f3\u30d0\u30fc7\u4eba\u3092\u7d71\u7387\u3092\u4efb\u3055\u308c\u308b\u3002 2\u5e74\u9593\u306e\u30a4\u30f3\u30bf\u30fc\u30f3\u696d\u52d9\u3092\u7d4c\u3066\u3001AWS\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d0\u30fc\u69cb\u7bc9\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff08\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff09\u4f5c\u6210\u3001\u793e\u5185\u7528Python\u30c4\u30fc\u30eb\u306a\u3069\u3001\u5e45\u5e83\u304f\u958b\u767a\u696d\u52d9\u3092\u884c\u3046\u3002"}),(0,m.tZ)("a",{href:"https://github.com/yoshihiko99",target:"_blank",rel:"noopener noreferrer",children:(0,m.BX)("div",{className:"flex my-6 transform duration-200 hover:opacity-50",children:[(0,m.tZ)("img",{alt:"github",src:"/GitHub-Mark-64px.png",className:"w-6 mr-2"}),(0,m.tZ)("p",{className:"underline",children:"@yoshihiko99"})]})})]}),(0,m.tZ)("div",{className:"pt-10 md:pl-10 md:pt-0 flex",children:(0,m.tZ)("img",{className:"rounded-full border-8 m-auto w-60 md:max-w-xs md:w-full",src:"/profile.jpg",alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf"})})]})]}),(0,m.BX)("div",{className:"py-10",children:[(0,m.tZ)("a",{id:"works",children:(0,m.tZ)("h2",{className:"text-5xl mb-3 w-full",children:"Works"})}),(0,m.tZ)("div",{ref:d,className:"mb-10",children:h&&(0,m.tZ)("div",{className:"animate__animated animate__fadeInUp",children:(0,m.tZ)(O,{ImageSrc:"/tele_labo_image.jpeg",ImageAlt:"\u30c6\u30ec\u30e9\u30dc\u306e\u30a4\u30e1\u30fc\u30b8",leading:"\u30c6\u30ec\u30e9\u30dc",content:"\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30af\u3084\u5728\u5b85\u52e4\u52d9\u306a\u3069\u3001\u65b0\u3057\u3044\u50cd\u304d\u65b9\u306b\u7279\u5316\u3057\u305f\u6c42\u4eba\u30b5\u30a4\u30c8\u3002 10\u30f6\u6708\u306b\u3057\u3066\u6708\u959310\u4e07PV\u3001\u7d2f\u8a0855\u4e07PV\u3092\u9054\u6210\u3001\u6c42\u4eba\u63b2\u8f09\u4f01\u696d\u6570\u308235\u793e\u3092\u8d85\u3048\u3001\u7dcf\u984d4500\u4e07\u5186\u306e\u8cc7\u91d1\u8abf\u9054\u3082\u9054\u6210\u3057\u307e\u3057\u305f\u3002 \u696d\u754c\u6700\u5927\u7d1a\u306e\u898f\u6a21\u306e\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30af\u7279\u5316\u30e1\u30c7\u30a3\u30a2\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u672c\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u306f\u3001\u682a\u5f0f\u4f1a\u793eDrafty\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u30c8\u30c3\u30d7\u3068\u3057\u3066\u3001\u30a4\u30f3\u30d5\u30e9\u304b\u3089\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3001\u30d5\u30ed\u30f3\u30c8\u30b5\u30a4\u30c9\u307e\u3067\u5e45\u5e83\u304f\u62c5\u5f53\u3057\u307e\u3057\u305f\u3002 ",tags:["Laravel","PHP","JavaScript","AWS","MySQL"],link:"https://tele-labo.jp/"})})}),(0,m.tZ)("div",{ref:p,className:"mb-10",children:b&&(0,m.tZ)("div",{className:"animate__animated animate__fadeInUp",children:(0,m.tZ)(O,{ImageSrc:"/no_image.png",ImageAlt:"MyNote\u306e\u30a4\u30e1\u30fc\u30b8",leading:"MyNote",content:"\u4f5c\u6210\u4e2d...",tags:["Next.js","React","Laravel","PHP","AWS","MySQL"],link:"https://tele-labo.jp/"})})})]}),(0,m.BX)("div",{className:"py-10",children:[(0,m.tZ)("a",{id:"links"}),(0,m.tZ)("h2",{className:"text-5xl mb-3 w-full",children:"Links"}),(0,m.tZ)("div",{className:"mb-6",children:(0,m.tZ)(S,{title:"\u3010\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\u3011\u6c42\u4eba\u30b5\u30a4\u30c8\u306e\u958b\u767a\u3092\u884c\u3046\u6771\u5de5\u5927\u306e\u5b66\u751f\u30a8\u30f3\u30b8\u30cb\u30a2\u30fb\u990c\u6253\u3055\u3093\u306b\u3064\u3044\u3066\u5fb9\u5e95\u53d6\u6750\uff01",link:"https://tele-labo.jp/article/interview/6152"})}),(0,m.tZ)("div",{className:"mb-6",children:(0,m.tZ)(S,{title:"\u3010\u5929\u624d\u30a8\u30f3\u30b8\u30cb\u30a2\uff1f\u3011\u990c\u6253 \u512a\u592a\u3055\u3093 | \u30c6\u30c3\u30af\u30ea\u30fc\u30c9\u3068\u3057\u3066\u6700\u5f37\u30a8\u30f3\u30b8\u30cb\u30a2\u7d44\u7e54\u3092\u7bc9\u304f",link:"https://www.wantedly.com/companies/company_3769741/post_articles/381979"})}),(0,m.tZ)("div",{className:"mb-6",children:(0,m.tZ)(S,{title:"\u30ea\u30e2\u30fc\u30c8\u30ef\u30fc\u30ab\u30fc\u306e\u305f\u3081\u306e\u6c42\u4eba\u30e1\u30c7\u30a3\u30a2\u300c\u30c6\u30ec\u30e9\u30dc\u300d\u3092\u5c55\u958b\u3059\u308b\u682a\u5f0f\u4f1a\u793eDrafty\u3001\u7b2c\u4e09\u8005\u5272\u5f53\u5897\u8cc7\u306b\u3088\u308a\u7dcf\u984d4500\u4e07\u5186\u306e\u8cc7\u91d1\u8abf\u9054\u3092\u5b9f\u65bd",link:"https://prtimes.jp/main/html/rd/p/000000004.000067180.html"})})]}),(0,m.tZ)("div",{className:"text-gray-400 text-center",children:"\xa9 2022 Yuta Euchi. All Rights Reserved."})]})})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8163)}])}},function(e){e.O(0,[161,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);