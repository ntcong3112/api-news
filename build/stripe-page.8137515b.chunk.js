"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[1092],{81202:(et,j,s)=>{s.r(j),s.d(j,{default:()=>b});var t=s(74081),n=s(27279),y=s(61020),I=s(364),S=s(87328),P=s(94050),T=s(27997),Z=s(9941),L=s(27875),M=s(37472),R=s(26322),d=s(48102),A=s(2981),G=s(4987),V=s(74758),z=s(98410),B=s(67909),D=s(9902),f=s(93415),H=s(84366),E=s(23298),g=s(74577),O=s(12881),F=s(38724),K=s(35318),U=s(78665),W=s(13789),Y=s(56231),$=s(7507),J=s(93478),N=s(38827),Q=s(22499);let h=[];const X=()=>{const{formatMessage:k}=(0,y.Z)(),[e,m]=(0,n.useState)(""),[w,l]=(0,n.useState)(""),[r,C]=(0,n.useState)(h),[i,c]=(0,n.useState)(!1),v=(0,n.useRef)(null),[q,u]=(0,n.useState)(!1),[_,p]=(0,n.useState)(!1),[tt,x]=(0,n.useState)(!1),st=S.Z.create({baseURL:"",headers:{Authorization:`Bearer ${P.I8.getToken()}`,"Content-Type":"application/json"}}),nt=()=>{C([]),h=[],x(!1)},ot=o=>{l(!1),m(o.target.value)},at=async o=>{if(o.preventDefault(),l(!1),!e){l("Prompt is required");return}c(!0);const{data:a}=await st.post("/strapi-chatgpt/prompt",{prompt:e});if(a.error||!a.response){c(!1),l(a.error);return}C([...r,{you:e,bot:a.response}]),h=[...r,{you:e,bot:a.response}],c(!1),m("")};return(0,n.useEffect)(()=>{v.current&&v.current.scrollIntoView({behavior:"smooth"})},[r]),(0,t.jsxs)(T.A,{children:[(0,t.jsx)(I.q,{title:"Strapi ChatGPT"}),(0,t.jsxs)(Z.o,{"aria-busy":!1,children:[(0,t.jsx)(L.T,{title:"ChatGPT",subtitle:k({id:"chatgpt-headder",defaultMessage:"Chat bot"})}),(0,t.jsx)(M.Z,{startActions:(0,t.jsxs)(R.K,{horizontal:!0,gap:2,children:[(0,t.jsx)(d.z,{variant:"secondary",startIcon:(0,t.jsx)(F.Z,{}),onClick:()=>u(!0),children:"Prompt"}),(0,t.jsx)(d.z,{variant:"secondary",startIcon:(0,t.jsx)(K.Z,{}),onClick:()=>p(!0),children:"API Integration"})]}),endActions:(0,t.jsx)(A.u,{description:"Clear chatGPT history",position:"left",children:(0,t.jsx)(G.h,{disabled:i||r.length===0,onClick:()=>x(!0),icon:(0,t.jsx)(U.Z,{})})})}),(0,t.jsxs)(V.D,{children:[(0,t.jsx)(N.Z,{isOpen:tt,setIsOpen:x,onConfirm:nt}),(0,t.jsx)(z.Z,{style:{position:"relative"},children:(0,t.jsx)(B.e,{style:{height:"64vh",overflowY:"scroll"},children:(0,t.jsxs)(D.a,{children:[(0,t.jsx)(J.Z,{isLoading:i}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto",justifyContent:"flex-end"},children:[r.map((o,a)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y.Z,{data:o},a+"123"),(0,t.jsx)(f.x,{paddingTop:2,paddingBottom:4,children:(0,t.jsx)(H.i,{})})]})),(0,t.jsx)("div",{ref:v})]})})]})})}),(0,t.jsx)(f.x,{children:(0,t.jsx)("form",{onSubmit:at,children:(0,t.jsxs)(E.r,{gap:2,paddingTop:4,children:[(0,t.jsx)(g.P,{col:10,children:(0,t.jsx)(O.o,{id:"chatInput",placeholder:"Enter your prompt here","aria-label":"Content",name:"content",error:w,onChange:ot,value:e,disabled:i,onpaste:o=>{o.preventDefault(),l(!1)}})}),(0,t.jsx)(g.P,{col:2,children:(0,t.jsx)(d.z,{fullWidth:!0,size:"L",startIcon:(0,t.jsx)(W.Z,{}),type:"submit",loading:i,children:"Send"})})]})})})]}),(0,t.jsx)($.Z,{isOpen:q,onClose:()=>u(!1)}),(0,t.jsx)(Q.Z,{isOpen:_,onClose:()=>p(!1)})]})]})},b=()=>(0,t.jsx)(X,{})}}]);