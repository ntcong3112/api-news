(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[6187],{86961:(B,y,r)=>{var a=r(13578),p=r(27138),m="[object Boolean]";function M(n){return n===!0||n===!1||p(n)&&a(n)==m}B.exports=M},92249:(B,y,r)=>{var a=r(37997);function p(m){return a(m)&&m!=+m}B.exports=p},37997:(B,y,r)=>{var a=r(13578),p=r(27138),m="[object Number]";function M(n){return typeof n=="number"||p(n)&&a(n)==m}B.exports=M},76368:(B,y,r)=>{"use strict";r.d(y,{D:()=>n});var a=r(74081),p=r(93415),m=r(67621);function M(T,j,h){if(!T||!j||!h)return{display:"none"};const{x:I,y:x}=h;return{transform:`translate(${I}px, ${x}px)`}}const n=({renderItem:T})=>{const{itemType:j,isDragging:h,item:I,initialOffset:x,currentOffset:c,mouseOffset:$}=(0,m.useDragLayer)(l=>({item:l.getItem(),itemType:l.getItemType(),initialOffset:l.getInitialSourceClientOffset(),currentOffset:l.getSourceClientOffset(),isDragging:l.isDragging(),mouseOffset:l.getClientOffset()}));return h?(0,a.jsx)(p.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,a.jsx)(p.x,{style:M(x,c,$),children:T({type:j,item:I})})}):null}},55377:(B,y,r)=>{"use strict";r.d(y,{a:()=>P,b:()=>C,c:()=>K,d:()=>b,g:()=>l,i:()=>D,m:()=>U,s:()=>N,u:()=>E});var a=r(27279),p=r(67621),m=r(57150),M=r(30594),n=r(94050),T=r(98934),j=r(86961),h=r(10124),I=r(92249),x=r(51527),c=r(47853);const l=e=>`content-manager.${e}`;(0,a.createContext)();const u=(e,s,{onCancel:i,onDropItem:t,onGrabItem:d,onMoveItem:f})=>{const[o,_]=(0,a.useState)(!1),k=A=>{o&&(A==="UP"?f(s-1,s):A==="DOWN"&&f(s+1,s))},O=()=>{o?(t&&t(s),_(!1)):(d&&d(s),_(!0))},g=()=>{o&&(_(!1),i&&i(s))};return A=>{if(e&&!(A.key==="Tab"&&!o))switch(A.preventDefault(),A.key){case" ":case"Enter":O();break;case"Escape":g();break;case"ArrowDown":case"ArrowRight":k("DOWN");break;case"ArrowUp":case"ArrowLeft":k("UP");break}}},E=(e,{type:s="STRAPI_DND",index:i,item:t={},onStart:d,onEnd:f,onGrabItem:o,onDropItem:_,onCancel:k,onMoveItem:O,dropSensitivity:g="regular"})=>{const L=(0,a.useRef)(null),[{handlerId:A},w]=(0,p.useDrop)({accept:s,collect(v){return{handlerId:v.getHandlerId()}},hover(v,Q){if(!L.current)return;const z=v.index,Z=i;if(z!==Z){if(g==="regular"){const J=L.current.getBoundingClientRect(),V=(J.bottom-J.top)/2,X=Q.getClientOffset().y-J.top;if(z<Z&&X<V||z>Z&&X>V)return}O(Z,z),v.index=Z}}}),[{isDragging:R},Y,H]=(0,p.useDrag)({type:s,item(){d&&d();const{width:v}=L.current?.getBoundingClientRect()??{};return{index:i,width:v,...t}},end(){f&&f()},canDrag:e,isDragging:t.id?v=>t.id===v.getItem().id:void 0,collect:v=>({isDragging:v.isDragging()})}),G=u(e,i,{onGrabItem:o,onDropItem:_,onCancel:k,onMoveItem:O});return[{handlerId:A,isDragging:R,handleKeyDown:G},L,w,Y,H]},b=()=>e=>e["content-manager_app"]||M.J,C=()=>(0,m.P1)(b(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),U=()=>(0,m.P1)(b(),({components:e,models:s})=>({schemas:[...e,...s]})),N=(0,m.P1)(b(),e=>e.fieldSizes),S=(e,s)=>{typeof e=="function"?e(s):e!=null&&(e.current=s)},K=(...e)=>s=>e.forEach(i=>S(i,s));function D(e){return["integer","biginteger","decimal","float","number"].includes(e)}c.kM(c.nK,"defined",function(){return this.test("defined",n.I0.required,e=>e!==void 0)}),c.kM(c.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",n.I0.min,s=>h(s)?!0:s.length>=e)}),c.kM(c.Z_,"isInferior",function(e,s){return this.test("isInferior",e,function(i){return!i||Number.isNaN(x(i))?!0:x(s)>=x(i)})}),c.kM(c.Z_,"isSuperior",function(e,s){return this.test("isSuperior",e,function(i){return!i||Number.isNaN(x(i))?!0:x(i)>=x(s)})});const W=e=>T(e,["attributes"],{}),P=(e,{components:s},i={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const t=W(e);return c.Ry().shape(Object.keys(t).reduce((d,f)=>{const o=t[f];if(o.type!=="relation"&&o.type!=="component"&&o.type!=="dynamiczone"){const _=F(o.type,o,i);d[f]=_}if(o.type==="relation"&&(d[f]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(o.relationType)?c.Ry().nullable():c.IX().nullable()),o.type==="component"){const _=P(s[o.component],{components:s},{...i,isFromComponent:!0});if(o.repeatable===!0){const{min:O,max:g,required:L}=o;let A=c.Vo(w=>{let R=c.IX().of(_);return O?L?R=R.min(O,n.I0.min):L!==!0&&h(w)?R=R.nullable():R=R.min(O,n.I0.min):L&&!i.isDraft&&(R=R.min(1,n.I0.required)),g&&(R=R.max(g,n.I0.max)),R});return d[f]=A,d}const k=c.Vo(O=>O!==void 0?o.required===!0&&!i.isDraft?_.defined():_.nullable():o.required===!0?c.Ry().defined():c.Ry().nullable());return d[f]=k,d}if(o.type==="dynamiczone"){let _=c.IX().of(c.Vo(({__component:g})=>P(s[g],{components:s},{...i,isFromComponent:!0})));const{max:k,min:O}=o;O?o.required?_=_.test("min",n.I0.min,g=>i.isCreatingEntry?g&&g.length>=O:g===void 0?!0:g!==null&&g.length>=O).test("required",n.I0.required,g=>i.isCreatingEntry?g!==null||g!==void 0:g===void 0?!0:g!==null):_=_.notEmptyMin(O):o.required&&!i.isDraft&&(_=_.test("required",n.I0.required,g=>i.isCreatingEntry?g!==null||g!==void 0:g===void 0?!0:g!==null)),k&&(_=_.max(k,n.I0.max)),d[f]=_}return d},{}))},F=(e,s,i)=>{let t=c.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(t=c.Z_()),e==="blocks"&&(t=c.nK().test("isJSON",n.I0.json,d=>i.isJSONTestDisabled||i.isDraft?!0:!(d&&!Array.isArray(d)))),e==="json"&&(t=c.nK(n.I0.json).test("isJSON",n.I0.json,d=>{if(i.isJSONTestDisabled||!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",n.I0.required,d=>!(s.required&&(!d||!d.length)))),e==="email"&&(t=t.email(n.I0.email)),["number","integer","float","decimal"].includes(e)&&(t=c.Rx().transform(d=>I(d)?void 0:d).typeError()),e==="biginteger"&&(t=c.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(t=c.hT()),Object.keys(s).forEach(d=>{const f=s[d];if(f||!j(f)&&Number.isInteger(Math.floor(f))||f===0)switch(d){case"required":{i.isDraft||(e==="password"&&i.isCreatingEntry&&(t=t.required(n.I0.required)),e!=="password"&&(i.isCreatingEntry?t=t.required(n.I0.required):t=t.test("required",n.I0.required,o=>o===void 0&&!i.isFromComponent?!0:D(e)?o===0?!0:!!o:e==="boolean"?o!=null:e==="date"||e==="datetime"?typeof o=="string"?!h(o):!h(o?.toString()):!h(o))));break}case"max":{e==="biginteger"?t=t.isInferior(n.I0.max,f):t=t.max(f,n.I0.max);break}case"maxLength":t=t.max(f,n.I0.maxLength);break;case"min":{e==="biginteger"?t=t.isSuperior(n.I0.min,f):t=t.min(f,n.I0.min);break}case"minLength":{i.isDraft||(t=t.min(f,n.I0.minLength));break}case"regex":t=t.matches(new RegExp(f),{message:n.I0.regex,excludeEmptyString:!s.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(t=t.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(t=t.strict().uppercase());break;case"positive":D(e)&&(t=t.positive());break;case"negative":D(e)&&(t=t.negative());break;default:t=t.nullable()}}),t}},45322:(B,y,r)=>{"use strict";r.d(y,{U:()=>$,y:()=>x});var a=r(74081),p=r(27279),m=r(7484),M=r(39267),n=r(74513),T=r(32370),j=r(10701),h=r(93415);const I=({theme:l,expanded:u,variant:E,disabled:b,error:C})=>C?`1px solid ${l.colors.danger600} !important`:b?`1px solid ${l.colors.neutral150}`:u?`1px solid ${l.colors.primary600}`:E==="primary"?`1px solid ${l.colors.neutral0}`:`1px solid ${l.colors.neutral100}`,x=(0,m.default)(T.Z)``,c=(0,m.default)(h.x)`
  border: ${I};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:l})=>l.colors.primary600};

    ${x} {
      color: ${({theme:l,expanded:u})=>u?void 0:l.colors.primary700};
    }

    ${T.Z} {
      color: ${({theme:l,expanded:u})=>u?void 0:l.colors.primary600};
    }

    & > ${j.k} {
      background: ${({theme:l})=>l.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:l})=>l.colors.primary200};
    }
  }
`,$=({children:l,disabled:u=!1,error:E,expanded:b=!1,hasErrorMessage:C=!0,id:U,onToggle:N,toggle:S,size:K="M",variant:D="primary",shadow:W})=>{const P=(0,n.M)(U),F=p.useMemo(()=>({expanded:b,onToggle:N,toggle:S,id:P,size:K,variant:D,disabled:u}),[u,b,P,N,K,S,D]);return(0,a.jsxs)(M.S.Provider,{value:F,children:[(0,a.jsx)(c,{"data-strapi-expanded":b,disabled:u,"aria-disabled":u,expanded:b,hasRadius:!0,variant:D,error:E,shadow:W,children:l}),E&&C&&(0,a.jsx)(h.x,{paddingTop:1,children:(0,a.jsx)(T.Z,{variant:"pi",textColor:"danger600",children:E})})]})}},34642:(B,y,r)=>{"use strict";r.d(y,{v:()=>M});var a=r(74081),p=r(39267),m=r(93415);const M=({children:n,...T})=>{const{expanded:j,id:h}=(0,p.A)();if(!j)return null;const I=`accordion-content-${h}`,x=`accordion-label-${h}`,c=`accordion-desc-${h}`;return(0,a.jsx)(m.x,{role:"region",id:I,"aria-labelledby":x,"aria-describedby":c,...T,children:n})}},39267:(B,y,r)=>{"use strict";r.d(y,{A:()=>m,S:()=>p});var a=r(27279);const p=(0,a.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),m=()=>(0,a.useContext)(p)},24920:(B,y,r)=>{"use strict";r.d(y,{B:()=>l});var a=r(74081),p=r(10411),m=r(7484),M=r(45322),n=r(39267);const T=({expanded:u,disabled:E,variant:b})=>{let C="neutral100";return u?C="primary100":E?C="neutral150":b==="primary"&&(C="neutral0"),C};var j=r(1782),h=r(50703),I=r(10701),x=r(32370);const c=(0,m.default)(j.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:E})=>E?u.colors.primary600:u.colors.neutral500};
    }
  }
`,$=(0,m.default)(I.k)`
  min-height: ${({theme:u,size:E})=>u.sizes.accordions[E]};
  border-radius: ${({theme:u,expanded:E})=>E?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,l=({title:u,description:E,as:b="span",togglePosition:C="right",action:U,...N})=>{const{onToggle:S,toggle:K,expanded:D,id:W,size:P,variant:F,disabled:e}=(0,n.A)(),s=`accordion-content-${W}`,i=`accordion-label-${W}`,t=`accordion-desc-${W}`,d=P==="M"?6:4,f=P==="M"?d:d-2,o=T({expanded:D,disabled:e,variant:F}),k={as:b,fontWeight:P==="S"?"bold":void 0,id:i,textColor:D?"primary600":"neutral700",ellipsis:!0,variant:P==="M"?"delta":void 0},O=D?"primary600":"neutral600",g=D?"primary200":"neutral200",L=P==="M"?`${32/16}rem`:`${24/16}rem`,A=()=>{e||(K&&!S?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),K()):S&&S())},w=(0,a.jsx)(I.k,{justifyContent:"center",borderRadius:"50%",height:L,width:L,transform:D?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:g,cursor:e?"not-allowed":"pointer",onClick:A,shrink:0,children:(0,a.jsx)(h.J,{as:p.Z,width:P==="M"?`${11/16}rem`:`${8/16}rem`,color:D?"primary600":"neutral600"})});return(0,a.jsx)($,{paddingBottom:f,paddingLeft:d,paddingRight:d,paddingTop:f,background:o,expanded:D,size:P,justifyContent:"space-between",cursor:e?"not-allowed":"",children:(0,a.jsxs)(I.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&w,(0,a.jsx)(c,{onClick:A,"aria-disabled":e,"aria-expanded":D,"aria-controls":s,"aria-labelledby":i,"data-strapi-accordion-toggle":!0,expanded:D,type:"button",flex:1,minWidth:0,...N,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M.y,{...k,children:u}),E&&(0,a.jsx)(x.Z,{as:"p",id:t,textColor:O,children:E})]})}),C==="right"&&(0,a.jsxs)(I.k,{gap:3,children:[w,U]}),C==="left"&&U]})})}},53532:(B,y,r)=>{"use strict";r.d(y,{d7:()=>m});var a=r(5466);const{Axios:p,AxiosError:m,CanceledError:M,isCancel:n,CancelToken:T,VERSION:j,all:h,Cancel:I,isAxiosError:x,spread:c,toFormData:$,AxiosHeaders:l,HttpStatusCode:u,formToJSON:E,getAdapter:b,mergeConfig:C}=a.default}}]);
