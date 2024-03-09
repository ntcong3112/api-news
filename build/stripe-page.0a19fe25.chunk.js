"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[1092],{81202:(A,g,e)=>{e.r(g),e.d(g,{default:()=>W});var a=e(40223),r=e(27279),C=e(61020),j=e(364),h=e(37539),m=e(94050),p=e(27997),E=e(9941),M=e(27875),d=e(48102),L=e(74758),s=e(93415),o=e(23298),l=e(74577),i=e(12881),f=e(5627),u=e(78955),K=e(32370),O=e(68412),R=e(59082);const D=[{value:"gpt-3.5-turbo-instruct",label:"similar capabilities as GPT-3 era models, compatible with legacy completions"},{value:"gpt-3.5-turbo",label:"optimized for chat completions, 4k tokens context window"},{value:"gpt-4",label:"most expensive, greater accuracy, 8k tokens context window"}],N=()=>{const{formatMessage:U}=(0,C.Z)(),v=(0,m.lm)(),[k,x]=(0,r.useState)(!1),y=(0,r.useRef)(""),T=(0,r.useRef)("gpt-4"),P=(0,r.useRef)(2048),I=h.Z.create({baseURL:"",headers:{Authorization:`Bearer ${m.I8.getToken()}`,"Content-Type":"application/json"}}),[c,B]=(0,r.useState)({apiKey:"",modelName:"gpt-4",maxTokens:2048}),S=t=>{B(t),y.current=t.apiKey,T.current=t.modelName,P.current=t.maxTokens},G=t=>n=>{switch(console.log("key",n),B(t==="modelName"?{...c,[t]:n}:{...c,[t]:n.target.value}),t){case"apiKey":y.current=n.target.value;break;case"modelName":T.current=n;break;case"maxTokens":P.current=n.target.value;break;default:break}};(0,r.useEffect)(()=>{x(!0),(async()=>{try{const{data:n}=await I.get("/strapi-chatgpt/config");S(n)}catch(n){console.log(n),v({type:"warning",message:{id:"chatgpt-config-fetch-error",defaultMessage:"Error while fetching the chatGPT configurations"}})}})(),x(!1)},[]);const $=async()=>{if(!{apiKey:y.current,modelName:T.current,maxTokens:P.current}.apiKey){v({type:"warning",message:{id:"chatgpt-config-api-key-required",defaultMessage:"Please enter the api key"}});return}x(!0);try{const{data:n}=await I.post("/strapi-chatgpt/config/update",{...c});n&&n.value&&S(JSON.parse(n.value)),x(!1),v({type:"success",message:{id:"chatgpt-config-save-success",defaultMessage:"ChatGPT configurations saved successfully"}})}catch(n){x(!1),console.log(n),v({type:"warning",message:{id:"chatgpt-config-save-error",defaultMessage:"Error while saving the chatGPT configurations"}})}};return(0,a.jsxs)(p.A,{children:[(0,a.jsx)(j.q,{title:"Strapi ChatGPT Configuration"}),(0,a.jsxs)(E.o,{"aria-busy":!1,children:[(0,a.jsx)(M.T,{title:"ChatGPT Configurations",subtitle:U({id:"chatgpt-config-headder",defaultMessage:"Configure the api key, model name and other parameters"}),primaryAction:(0,a.jsx)(d.z,{startIcon:(0,a.jsx)(R.Z,{}),onClick:$,loading:k,children:"Save"})}),(0,a.jsx)(L.D,{children:(0,a.jsxs)(s.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0,children:[(0,a.jsxs)(o.r,{gap:6,children:[(0,a.jsx)(l.P,{col:6,children:(0,a.jsx)(i.o,{type:"text",id:"apiKey",name:"apiKey",placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",label:"API Key",refs:y,value:c.apiKey,onChange:G("apiKey")})}),(0,a.jsx)(l.P,{col:6,children:(0,a.jsx)(i.o,{type:"text",id:"maxTokens",name:"maxTokens",label:"Max Tokens",placeholder:"2048",refs:P,value:c.maxTokens,onChange:G("maxTokens")})}),(0,a.jsx)(l.P,{children:(0,a.jsx)(f.P,{name:"modelName",id:"modelName",label:"Model Name",placeholder:"Select a model",refs:T,value:c.modelName,onChange:G("modelName"),children:D.map(t=>(0,a.jsxs)(u.W,{value:t.value,children:[t.value," - ",t.label]},t.value))})})]}),(0,a.jsx)(s.x,{paddingTop:5,children:(0,a.jsxs)(K.Z,{children:["You can set additional parameters"," (",(0,a.jsx)("span",{children:(0,a.jsx)(O.r,{href:"https://platform.openai.com/docs/api-reference/completions",target:"_blank",children:"ChatGPT doc"})}),") ","with the API Integration, available from Plugin > ChatGPT menu."]})})]})})]})]})},W=()=>(0,a.jsx)(N,{})},68412:(A,g,e)=>{e.d(g,{r:()=>L});var a=e(74081),r=e(27279),C=e(48157),j=e(47533),h=e(7484),m=e(61657),p=e(32370),E=e(93415);const M=h.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:s})=>s?"none":void 0};
  color: ${({disabled:s,theme:o})=>s?o.colors.neutral600:o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${p.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:s})=>s.colors.primary500};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary700};
  }

  ${m.BF};
`,d=(0,h.default)(E.x)`
  display: flex;
`,L=r.forwardRef(({children:s,href:o,to:l,disabled:i=!1,startIcon:f,endIcon:u,...K},O)=>{const R=o?"_blank":void 0,D=o?"noreferrer noopener":void 0;return(0,a.jsxs)(M,{as:l&&!i?j.OL:"a",target:R,rel:D,to:i?void 0:l,href:i?"#":o,disabled:i,ref:O,...K,children:[f&&(0,a.jsx)(d,{as:"span","aria-hidden":!0,paddingRight:2,children:f}),(0,a.jsx)(p.Z,{children:s}),u&&!o&&(0,a.jsx)(d,{as:"span","aria-hidden":!0,paddingLeft:2,children:u}),o&&(0,a.jsx)(d,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,a.jsx)(C.Z,{})})]})})}}]);
