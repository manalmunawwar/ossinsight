"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5863],{8106:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(67294),a=n(86010),r=n(95999),i=n(25108);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function l(e){let{code:t,className:n}=e;const[l,c]=(0,s.useState)(!1),p=(0,s.useRef)(void 0),m=(0,s.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(i.error),c(!0),p.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(p.current)),[]),s.createElement("button",{type:"button","aria-label":l?(0,r.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,r.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,r.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,o.copyButton,l&&o.copyButtonCopied),onClick:m},s.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},s.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),s.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},83289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>T,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var s=n(87462),a=(n(67294),n(3905)),r=n(26389),i=n(94891),o=n(75190),l=n(47507),c=n(24310),p=n(63303),m=(n(75035),n(85162));const u={id:"issue-creators-history",title:"Issue creators history",description:"Querying the historical trend of the number of issue creators in a given repository",sidebar_label:"Issue creators history",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"issue-creators-history",tags:["Issue Creators"],description:"Querying the historical trend of the number of issue creators in a given repository",parameters:[{schema:{type:"string",enum:["day","week","month"],default:"month"},in:"query",name:"per",required:!1,description:"The time interval of the data points."},{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the time range."},{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the time range."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}}},example:[{col:"date",data_type:"VARCHAR",nullable:!0},{col:"issue_creators",data_type:"DECIMAL",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{date:{type:"string",description:"The date of the data point"},issue_creators:{type:"string",description:"The number of issue creators on the date point"}}},example:[{date:"2023-04-01",issue_creators:"1546"},{date:"2023-05-01",issue_creators:"1560"},{date:"2023-06-01",issue_creators:"1568"},{date:"2023-07-01",issue_creators:"1579"},{date:"2023-08-01",issue_creators:"1580"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:5,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/issue_creators/history/",servers:[{url:"https://api.ossinsight.io/public"}],info:{title:"OSSInsight Public API",description:'\nHere are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/public\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**.\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/public/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Categories\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"0.0.1"},postman:{name:"Issue creators history",description:{content:"Querying the historical trend of the number of issue creators in a given repository",type:"text/plain"},url:{path:["repos",":owner",":repo","issue_creators","history",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The time interval of the data points.",type:"text/plain"},key:"per",value:""},{disabled:!1,description:{content:"The start date of the time range.",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"The end date of the time range.",type:"text/plain"},key:"to",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},d=void 0,h={unversionedId:"api/issue-creators-history",id:"api/issue-creators-history",title:"Issue creators history",description:"Querying the historical trend of the number of issue creators in a given repository",source:"@site/docs/api/issue-creators-history.api.mdx",sourceDirName:"api",slug:"/api/issue-creators-history",permalink:"/docs/api/issue-creators-history",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"issue-creators-history",title:"Issue creators history",description:"Querying the historical trend of the number of issue creators in a given repository",sidebar_label:"Issue creators history",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"issue-creators-history",tags:["Issue Creators"],description:"Querying the historical trend of the number of issue creators in a given repository",parameters:[{schema:{type:"string",enum:["day","week","month"],default:"month"},in:"query",name:"per",required:!1,description:"The time interval of the data points."},{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the time range."},{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the time range."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}}},example:[{col:"date",data_type:"VARCHAR",nullable:!0},{col:"issue_creators",data_type:"DECIMAL",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{date:{type:"string",description:"The date of the data point"},issue_creators:{type:"string",description:"The number of issue creators on the date point"}}},example:[{date:"2023-04-01",issue_creators:"1546"},{date:"2023-05-01",issue_creators:"1560"},{date:"2023-06-01",issue_creators:"1568"},{date:"2023-07-01",issue_creators:"1579"},{date:"2023-08-01",issue_creators:"1580"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:5,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/issue_creators/history/",servers:[{url:"https://api.ossinsight.io/public"}],info:{title:"OSSInsight Public API",description:'\nHere are documentation about the OSSInsight Public APIs (beta) which help developers integrate OSSInsight data into their applications easily and quickly.\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/public\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**.\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/public/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Categories\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"0.0.1"},postman:{name:"Issue creators history",description:{content:"Querying the historical trend of the number of issue creators in a given repository",type:"text/plain"},url:{path:["repos",":owner",":repo","issue_creators","history",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The time interval of the data points.",type:"text/plain"},key:"per",value:""},{disabled:!1,description:{content:"The start date of the time range.",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"The end date of the time range.",type:"text/plain"},key:"to",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List organizations of stargazers",permalink:"/docs/api/list-organizations-of-issue-creators"},next:{title:"Stargazers history",permalink:"/docs/api/stargazers-history"}},y={},g=[{value:"Issue creators history",id:"issue-creators-history",level:2}],f={toc:g};function T(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"issue-creators-history"},"Issue creators history"),(0,a.kt)("p",null,"Querying the historical trend of the number of issue creators in a given repository"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",enum:["day","week","month"],default:"month"},in:"query",name:"per",required:!1,description:"The time interval of the data points."},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the time range."},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the time range."},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Default Response")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`sql_endpoint`]",schema:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"columns"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"col",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the column in the query result."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"data_type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`CHAR`, `BIGINT`, `DECIMAL`, `INT`, `UNSIGNED BIGINT`, `TINYINT`, `TIMESTAMP`, `TEXT`, `VARCHAR`, `DATETIME`, `DOUBLE`, `FLOAT`, `DATE`, `TIME`, `YEAR`, `MEDIUMINT`, `SMALLINT`, `BIT`, `BINARY`, `VARBINARY`, `JSON`, `ENUM`, `SET`, `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`, `TINYBLOB`, `MEDIUMBLOB`, `BLOB`, `LONGBLOB`]",schema:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"nullable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the column is nullable."},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"rows"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"date",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The date of the data point"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"issue_creators",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The number of issue creators on the date point"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The code of the response."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The message of the response."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"start_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The start time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"end_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The end time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"latency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The latency of the query."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"row_count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows in the query result."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"row_affect",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows affected by the query."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of rows in the query result."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"databases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The databases used in the query.",items:{type:"string"}},mdxType:"SchemaItem"})))))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "date",\n        "data_type": "VARCHAR",\n        "nullable": true\n      },\n      {\n        "col": "issue_creators",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "date": "2023-04-01",\n        "issue_creators": "1546"\n      },\n      {\n        "date": "2023-05-01",\n        "issue_creators": "1560"\n      },\n      {\n        "date": "2023-06-01",\n        "issue_creators": "1568"\n      },\n      {\n        "date": "2023-07-01",\n        "issue_creators": "1579"\n      },\n      {\n        "date": "2023-08-01",\n        "issue_creators": "1580"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690957407469,\n      "end_ms": 1690957407499,\n      "latency": "30ms",\n      "row_count": 5,\n      "row_affect": 0,\n      "limit": 50,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);