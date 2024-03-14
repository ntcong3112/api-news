"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[1092],{81202:(I,c,e)=>{e.r(c),e.d(c,{default:()=>N});var a=e(74081),o=e(27279),d=e(61020),f=e(364),x=e(37539),g=e(94050),i=e(27997),u=e(9941),M=e(27875),v=e(48102),O=e(74758),s=e(93415),r=e(23298),h=e(74577),l=e(12881),y=e(5627),P=e(78955),D=e(32370),L=e(68412),B=e(59082);const K=[{value:"text-davinci-003",label:"higher quality, longer output, better instruction following"},{value:"text-curie-001",label:"faster and lower cost, suited for Q&A, translation, service bot"}],W=()=>{const{formatMessage:U}=(0,d.Z)(),T=(0,g.lm)(),[$,p]=(0,o.useState)(!1),C=(0,o.useRef)(""),j=(0,o.useRef)("text-davinci-003"),E=(0,o.useRef)(2048),S=x.Z.create({baseURL:"",headers:{Authorization:`Bearer ${g.I8.getToken()}`,"Content-Type":"application/json"}}),[m,R]=(0,o.useState)({apiKey:"",modelName:"text-davinci-003",maxTokens:2048}),G=t=>{R(t),C.current=t.apiKey,j.current=t.modelName,E.current=t.maxTokens},A=t=>n=>{switch(console.log("key",n),R(t==="modelName"?{...m,[t]:n}:{...m,[t]:n.target.value}),t){case"apiKey":C.current=n.target.value;break;case"modelName":j.current=n;break;case"maxTokens":E.current=n.target.value;break;default:break}};(0,o.useEffect)(()=>{p(!0),(async()=>{try{const{data:n}=await S.get("/strapi-chatgpt/config");G(n)}catch(n){console.log(n),T({type:"warning",message:{id:"chatgpt-config-fetch-error",defaultMessage:"Error while fetching the chatGPT configurations"}})}})(),p(!1)},[]);const Z=async()=>{if(!{apiKey:C.current,modelName:j.current,maxTokens:E.current}.apiKey){T({type:"warning",message:{id:"chatgpt-config-api-key-required",defaultMessage:"Please enter the api key"}});return}p(!0);try{const{data:n}=await S.post("/strapi-chatgpt/config/update",{...m});n&&n.value&&G(JSON.parse(n.value)),p(!1),T({type:"success",message:{id:"chatgpt-config-save-success",defaultMessage:"ChatGPT configurations saved successfully"}})}catch(n){p(!1),console.log(n),T({type:"warning",message:{id:"chatgpt-config-save-error",defaultMessage:"Error while saving the chatGPT configurations"}})}};return(0,a.jsxs)(i.A,{children:[(0,a.jsx)(f.q,{title:"Strapi ChatGPT Configuration"}),(0,a.jsxs)(u.o,{"aria-busy":!1,children:[(0,a.jsx)(M.T,{title:"ChatGPT Configurations",subtitle:U({id:"chatgpt-config-headder",defaultMessage:"Configure the api key, model name and other parameters"}),primaryAction:(0,a.jsx)(v.z,{startIcon:(0,a.jsx)(B.Z,{}),onClick:Z,loading:$,children:"Save"})}),(0,a.jsx)(O.D,{children:(0,a.jsxs)(s.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0,children:[(0,a.jsxs)(r.r,{gap:6,children:[(0,a.jsx)(h.P,{col:6,children:(0,a.jsx)(l.o,{type:"text",id:"apiKey",name:"apiKey",placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",label:"API Key",refs:C,value:m.apiKey,onChange:A("apiKey")})}),(0,a.jsx)(h.P,{col:6,children:(0,a.jsx)(l.o,{type:"text",id:"maxTokens",name:"maxTokens",label:"Max Tokens",placeholder:"2048",refs:E,value:m.maxTokens,onChange:A("maxTokens")})}),(0,a.jsx)(h.P,{children:(0,a.jsx)(y.P,{name:"modelName",id:"modelName",label:"Model Name",placeholder:"Select a model",refs:j,value:m.modelName,onChange:A("modelName"),children:K.map(t=>(0,a.jsxs)(P.W,{value:t.value,children:[t.value," - ",t.label]},t.value))})})]}),(0,a.jsx)(s.x,{paddingTop:5,children:(0,a.jsxs)(D.Z,{children:["You can set additional parameters"," (",(0,a.jsx)("span",{children:(0,a.jsx)(L.r,{href:"https://platform.openai.com/docs/api-reference/completions",target:"_blank",children:"ChatGPT doc"})}),") ","with the API Integration, available from Plugin > ChatGPT menu."]})})]})})]})]})},N=()=>(0,a.jsx)(W,{})},27997:(I,c,e)=>{e.d(c,{A:()=>g});var a=e(74081),o=e(7484),d=e(93415);const f=(0,o.default)(d.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:i})=>i?"auto 1fr":"1fr"};
`,x=(0,o.default)(d.x)`
  overflow-x: hidden;
`,g=({sideNav:i,children:u})=>(0,a.jsxs)(f,{hasSideNav:Boolean(i),children:[i,(0,a.jsx)(x,{paddingBottom:10,children:u})]})},68412:(I,c,e)=>{e.d(c,{r:()=>O});var a=e(74081),o=e(27279),d=e(48157),f=e(47533),x=e(7484),g=e(61657),i=e(32370),u=e(93415);const M=x.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:s})=>s?"none":void 0};
  color: ${({disabled:s,theme:r})=>s?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${i.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:s})=>s.colors.primary500};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary700};
  }

  ${g.BF};
`,v=(0,x.default)(u.x)`
  display: flex;
`,O=o.forwardRef(({children:s,href:r,to:h,disabled:l=!1,startIcon:y,endIcon:P,...D},L)=>{const B=r?"_blank":void 0,K=r?"noreferrer noopener":void 0;return(0,a.jsxs)(M,{as:h&&!l?f.OL:"a",target:B,rel:K,to:l?void 0:h,href:l?"#":r,disabled:l,ref:L,...D,children:[y&&(0,a.jsx)(v,{as:"span","aria-hidden":!0,paddingRight:2,children:y}),(0,a.jsx)(i.Z,{children:s}),P&&!r&&(0,a.jsx)(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:P}),r&&(0,a.jsx)(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,a.jsx)(d.Z,{})})]})})}}]);
