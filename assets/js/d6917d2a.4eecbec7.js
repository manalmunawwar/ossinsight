(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8608],{85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var a=n(67294),i=n(902);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function r(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=s);const r=(0,i.zX)(t),o=(0,i.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function o(){const[e,t]=(0,a.useState)(!1),[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");i(n)}),[s]);return r(s,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:o}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var a=n(92949),i=n(86668);function s(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>d,bc:()=>c,nZ:()=>p,nt:()=>u});var a=n(87594),i=n.n(a);const s=/title=(?<quote>["'])(?<title>.*?)\1/,r=/\{(?<range>[\d,-]+)\}/,o={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:a}=o[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function c(e){var t;return(null==e||null==(t=e.match(s))?void 0:t.groups.title)??""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:s,metastring:c}=t;if(c&&r.test(c)){const e=c.match(r).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,a=i()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(o),t)}}(a,s),d=n.split("\n"),p=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),f=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let i=0;i<d.length;){const e=d[i].match(u);if(!e){i+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?p[m[t]].range+=`${i},`:h[t]?p[h[t]].start=i:f[t]&&(p[f[t]].range+=`${p[f[t]].start}-${i-1},`),d.splice(i,1)}n=d.join("\n");const g={};return Object.entries(p).forEach((e=>{let[t,{range:n}]=e;i()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,i]=e;const s=t[a];s&&"string"==typeof i&&(n[s]=i)})),n}},21865:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>E,default:()=>j,frontMatter:()=>y,metadata:()=>I,toc:()=>S});var a=n(87462),i=n(67294),s=n(3905);n(44996),n(50941);n(63303),n(85162),n(93162);var r=n(86010),o=n(53438),l=n(39960),c=n(13919),u=n(95999);const d="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return i.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",d)},n)}function f(e){let{href:t,icon:n,title:a,description:s}=e;return i.createElement(h,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",p),title:a},n," ",a),s&&i.createElement("p",{className:(0,r.Z)("text--truncate",m),title:s},s))}function g(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?i.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return i.createElement(f,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(b,{item:t});case"category":return i.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,o.jA)();return i.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return i.createElement(k,e);const a=(0,o.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}const y={id:"ossinsight-public-api",title:"OSSInsight Public API",description:"Here are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null,slug:"/api"},E=void 0,I={unversionedId:"api/ossinsight-public-api",id:"api/ossinsight-public-api",title:"OSSInsight Public API",description:"Here are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.",source:"@site/docs/api/ossinsight-public-api.info.mdx",sourceDirName:"api",slug:"/api",permalink:"/docs/api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ossinsight-public-api",title:"OSSInsight Public API",description:"Here are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null,slug:"/api"},sidebar:"tutorialSidebar",previous:{title:"Advanced Features",permalink:"/docs/workshop/ossinsight-lite/advanced-features"},next:{title:"List trending repos",permalink:"/docs/api/list-trending-repos"}},N={},S=[{value:"Usage",id:"usage",level:2},{value:"Base URL",id:"base-url",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Rate Limit",id:"rate-limit",level:3},{value:"Example",id:"example",level:3},{value:"Categories",id:"categories",level:2},{value:"Request New API",id:"request-new-api",level:2}],A={toc:S};function j(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.0.1"),(0,s.kt)("h1",{id:"ossinsight-public-api"},"OSSInsight Public API"),(0,s.kt)("p",null,"Here are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"The OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," or web request libraries in different programming languages."),(0,s.kt)("h3",{id:"base-url"},"Base URL"),(0,s.kt)("p",null,"All API requests are based on the following URL:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"https://api.ossinsight.io/public\n")),(0,s.kt)("h3",{id:"authentication"},"Authentication"),(0,s.kt)("p",null,"No authentication is required for beta version of public APIs, but there are ",(0,s.kt)("a",{parentName:"p",href:"#rate-limit"},"rate limits")," for API requests."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note:\nWe will add authentication way for larger API requests in future releases.")),(0,s.kt)("h3",{id:"rate-limit"},"Rate Limit"),(0,s.kt)("p",null,"For each IP address, the rate limit allows for up to ",(0,s.kt)("strong",{parentName:"p"},"600 requests per hour"),"."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"For example, if you want to know what countries the stargazers in the ",(0,s.kt)("inlineCode",{parentName:"p"},"pingcap/tidb")," repository are located in, you can make a request using the curl command as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://api.ossinsight.io/public/repos/pingcap/tidb/stargazers/countries\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n'))),(0,s.kt)("h2",{id:"categories"},"Categories"),(0,s.kt)(w,{items:(0,o.jA)().items.filter((e=>"api/showcase"!==e.docId&&"api/ossinsight-public-api"!==e.docId)),mdxType:"DocCardList"}),(0,s.kt)("h2",{id:"request-new-api"},"Request New API"),(0,s.kt)("p",null,"If the API in the documentation does not meet your query requirements, please contact us as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Email us at ",(0,s.kt)("a",{parentName:"li",href:"mailto:ossinsight@pingcap.com"},"ossinsight@pingcap.com")),(0,s.kt)("li",{parentName:"ul"},"Open an issue in the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API"},"OSSInsight GitHub repository"))))}j.isMDXComponent=!0},93162:function(e,t,n){var a,i,s,r=n(25108);i=[],a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){r.error("could not download file")},a.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var r=o.URL||o.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?s(l):i(l.href)?a(e,t,n):s(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){s(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(i(e))a(e,n,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){s(o)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var s="application/octet-stream"===e.type,r=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&r||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,p=d.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});o.saveAs=c.saveAs=c,e.exports=c},void 0===(s="function"==typeof a?a.apply(t,i):a)||(e.exports=s)},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,i,s]=t;if(a&&s){a=parseInt(a),s=parseInt(s);const e=a<s?1:-1;"-"!==i&&".."!==i&&"\u2025"!==i||(s+=e);for(let t=a;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);