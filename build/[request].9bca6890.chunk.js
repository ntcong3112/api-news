"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[6750],{13069:(S,l,t)=>{t.r(l),t.d(l,{default:()=>_});var s=t(74081),n=t(27279),o=t(51447),h=t(94050),c=t(19553),C=t(61020),v=t(364),y=t(37539),j=t(27997),L=t(9941),M=t(27875),R=t(37472),G=t(26322),m=t(48102),V=t(2981),z=t(4987),B=t(74758),D=t(98410),W=t(67909),E=t(9902),I=t(93415),O=t(84366),$=t(23298),P=t(74577),F=t(12881),K=t(38724),N=t(35318),U=t(78665),Y=t(13789),J=t(56231),Q=t(7507),X=t(93478),b=t(38827),k=t(97963);let p=[];const w=()=>{const{formatMessage:ss}=(0,C.Z)(),[r,A]=(0,n.useState)(""),[ts,d]=(0,n.useState)(""),[i,Z]=(0,n.useState)(p),[x,g]=(0,n.useState)(!1),f=(0,n.useRef)(null),[ns,H]=(0,n.useState)(!1),[os,T]=(0,n.useState)(!1),[as,u]=(0,n.useState)(!1),es=y.Z.create({baseURL:"",headers:{Authorization:`Bearer ${h.I8.getToken()}`,"Content-Type":"application/json"}}),ls=()=>{Z([]),p=[],u(!1)},rs=a=>{d(!1),A(a.target.value)},ds=async a=>{if(a.preventDefault(),d(!1),!r){d("Prompt is required");return}g(!0);const{data:e}=await es.post("/strapi-chatgpt/prompt",{prompt:r});if(e.error||!e.response){g(!1),d(e.error);return}Z([...i,{you:r,bot:e.response}]),p=[...i,{you:r,bot:e.response}],g(!1),A("")};return(0,n.useEffect)(()=>{f.current&&f.current.scrollIntoView({behavior:"smooth"})},[i]),(0,s.jsxs)(j.A,{children:[(0,s.jsx)(v.q,{title:"Strapi ChatGPT"}),(0,s.jsxs)(L.o,{"aria-busy":!1,children:[(0,s.jsx)(M.T,{title:"ChatGPT",subtitle:ss({id:"chatgpt-headder",defaultMessage:"Chat bot"})}),(0,s.jsx)(R.Z,{startActions:(0,s.jsxs)(G.K,{horizontal:!0,gap:2,children:[(0,s.jsx)(m.z,{variant:"secondary",startIcon:(0,s.jsx)(K.Z,{}),onClick:()=>H(!0),children:"Prompt"}),(0,s.jsx)(m.z,{variant:"secondary",startIcon:(0,s.jsx)(N.Z,{}),onClick:()=>T(!0),children:"API Integration"})]}),endActions:(0,s.jsx)(V.u,{description:"Clear chatGPT history",position:"left",children:(0,s.jsx)(z.h,{disabled:x||i.length===0,onClick:()=>u(!0),icon:(0,s.jsx)(U.Z,{})})})}),(0,s.jsxs)(B.D,{children:[(0,s.jsx)(b.Z,{isOpen:as,setIsOpen:u,onConfirm:ls}),(0,s.jsx)(D.Z,{style:{position:"relative"},children:(0,s.jsx)(W.e,{style:{height:"64vh",overflowY:"scroll"},children:(0,s.jsxs)(E.a,{children:[(0,s.jsx)(X.Z,{isLoading:x}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto",justifyContent:"flex-end"},children:[i.map((a,e)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(J.Z,{data:a},e+"123"),(0,s.jsx)(I.x,{paddingTop:2,paddingBottom:4,children:(0,s.jsx)(O.i,{})})]})),(0,s.jsx)("div",{ref:f})]})})]})})}),(0,s.jsx)(I.x,{children:(0,s.jsx)("form",{onSubmit:ds,children:(0,s.jsxs)($.r,{gap:2,paddingTop:4,children:[(0,s.jsx)(P.P,{col:10,children:(0,s.jsx)(F.o,{id:"chatInput",placeholder:"Enter your prompt here","aria-label":"Content",name:"content",error:ts,onChange:rs,value:r,disabled:x,onpaste:a=>{a.preventDefault(),d(!1)}})}),(0,s.jsx)(P.P,{col:2,children:(0,s.jsx)(m.z,{fullWidth:!0,size:"L",startIcon:(0,s.jsx)(Y.Z,{}),type:"submit",loading:x,children:"Send"})})]})})})]}),(0,s.jsx)(Q.Z,{isOpen:ns,onClose:()=>H(!1)}),(0,s.jsx)(k.Z,{isOpen:os,onClose:()=>T(!1)})]})]})},q=()=>(0,s.jsx)(w,{}),_=()=>(0,s.jsx)("div",{children:(0,s.jsxs)(o.rs,{children:[(0,s.jsx)(o.AW,{path:`/plugins/${c.Z}`,component:q,exact:!0}),(0,s.jsx)(o.AW,{component:h.NotFound})]})})},62737:(S,l,t)=>{t.r(l),t.d(l,{default:()=>j});var s=t(74081),n=t(27279),o=t(51447),h=t(94050),c=t(81142);const v=()=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:[c.Z,"'s HomePage"]}),(0,s.jsx)("p",{children:"Happy coding"})]}),j=()=>(0,s.jsx)("div",{children:(0,s.jsxs)(o.rs,{children:[(0,s.jsx)(o.AW,{path:`/plugins/${c.Z}`,component:v,exact:!0}),(0,s.jsx)(o.AW,{component:h.Hn})]})})}}]);
