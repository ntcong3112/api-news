"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[1869],{61869:(f,n,t)=>{t.r(n),t.d(n,{default:()=>v});var e=t(74081),o=t(27279),l=t(94050),d=t(25074),r=t.n(d),s=t(58892),c=t.n(s),g=t(97487),u=t.n(g),y=t(96053),M=t.n(y),x=t(94305),L=t.n(x),a=t(50568),i=t.n(a),h=t(61020),p=t(27605),m=t(83067),j=t.n(m),O=t(65713),R=t.n(O),E=t(26793);const v=()=>{const C=(0,l.lm)(),{formatMessage:T}=(0,h.Z)(),[S,I]=(0,o.useState)(!1),[B,F]=(0,o.useState)(!1),[b,D]=(0,o.useState)("");(0,o.useEffect)(()=>{I(!0),(async()=>{const A=await E.Z.getSettings();if(A)return I(!1),D(A.data.apiKey)})()},[D]);const W=async()=>{F(!0),await E.Z.setSettings(b),F(!1),C({type:"success",message:T({id:(0,p.O)("settings.success-message"),defaultMessage:"Settings successfully updated"})})},K=$=>{D(()=>$.target.value)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.HeaderLayout,{id:"title",title:T({id:(0,p.O)("settings.title"),defaultMessage:"TinyMCE"}),subtitle:T({id:(0,p.O)("settings.subtitle"),defaultMessage:"Manage the settings of your TinyMCE plugin"}),primaryAction:S?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)(g.Button,{onClick:W,startIcon:(0,e.jsx)(R(),{}),size:"L",disabled:B,loading:B,children:T({id:(0,p.O)("settings.save-button"),defaultMessage:"Save"})})}),S?(0,e.jsx)(l.dO,{}):(0,e.jsx)(x.ContentLayout,{children:(0,e.jsx)(d.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(s.Stack,{size:3,children:[(0,e.jsx)(a.Typography,{children:T({id:(0,p.O)("settings.content-title"),defaultMessage:"Set your API key for TinyMCE editor."})}),(0,e.jsx)(y.Grid,{gap:6,children:(0,e.jsx)(y.GridItem,{col:8,s:18,children:(0,e.jsx)(m.TextInput,{id:"api-key",name:"key",onChange:K,label:T({id:(0,p.O)("settings.input-title"),defaultMessage:"API key"}),value:b,placeholder:T({id:(0,p.O)("settings.input-placeholder"),defaultMessage:"ex: ADASFNASF46564SAD"})})})})]})})})]})}},59817:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),l=t(20565),d=t(54673),r=t(44747),s=o.forwardRef(({children:c,name:g,error:u,hint:y,id:M,required:x=!1,...L},a)=>{const i=d.useId(M),h=o.useMemo(()=>({name:g,id:i,error:u,hint:y,required:x}),[u,i,y,g,x]);return e.jsx(r.Box,{ref:a,...L,children:e.jsx(l.FieldContext.Provider,{value:h,children:c})})});n.Field=s},20565:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=e.createContext({id:"",required:!1}),l=()=>e.useContext(o);n.FieldContext=o,n.useField=l},28518:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(20565),l=t(11880),d=()=>{const{id:r,error:s}=o.useField();return!s||typeof s!="string"?null:e.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-error`,textColor:"danger600","data-strapi-field-error":!0,children:s})};n.FieldError=d},63391:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(20565),l=t(11880),d=()=>{const{id:r,hint:s,error:c}=o.useField();return!s||c?null:e.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-hint`,textColor:"neutral600",children:s})};n.FieldHint=d},20601:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),l=t(7484),d=t(20565),r=t(5529),s=t(44747),c=t(35725),u=(a=>a&&a.__esModule?a:{default:a})(l),y={S:6.5,M:10.5},M=o.forwardRef(({endAction:a,startAction:i,disabled:h=!1,onChange:p,size:m="M",...j},O)=>{const{id:R,error:E,hint:P,name:v,required:C}=d.useField();let T;E?T=`${R}-error`:P&&(T=`${R}-hint`);const S=Boolean(E),I=B=>{!h&&p&&p(B)};return e.jsxs(L,{justifyContent:"space-between",hasError:S,disabled:h,children:[i?e.jsx(s.Box,{paddingLeft:3,paddingRight:2,children:i}):null,e.jsx(x,{id:R,name:v,ref:O,"aria-describedby":T,"aria-invalid":S,"aria-disabled":h,disabled:h,"data-disabled":h?"":void 0,hasLeftAction:Boolean(i),hasRightAction:Boolean(a),onChange:I,"aria-required":C,$size:m,...j}),a?e.jsx(s.Box,{paddingLeft:2,paddingRight:3,children:a}):null]})}),x=u.default.input`
  border: none;
  border-radius: ${({theme:a})=>a.borderRadius};
  padding-bottom: ${({$size:a})=>`${y[a]/16}rem`};
  padding-left: ${({theme:a,hasLeftAction:i})=>i?0:a.spaces[4]};
  padding-right: ${({theme:a,hasRightAction:i})=>i?0:a.spaces[4]};
  padding-top: ${({$size:a})=>`${y[a]/16}rem`};
  cursor: ${a=>a["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:a})=>a.colors.neutral800};
  font-weight: 400;
  font-size: ${a=>a.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:a})=>a.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,L=u.default(c.Flex)`
  border: 1px solid ${({theme:a,hasError:i})=>i?a.colors.danger600:a.colors.neutral200};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  ${r.inputFocusStyle()}

  ${({theme:a,disabled:i})=>i?l.css`
          color: ${a.colors.neutral600};
          background: ${a.colors.neutral150};
        `:void 0}
`;n.FieldInput=M,n.InputWrapper=L},69803:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),l=t(7484),d=t(20565),r=t(63832),s=t(11880),c=t(35725),u=(i=>i&&i.__esModule?i:{default:i})(l),y=r.once(console.warn),M=o.forwardRef(({children:i,action:h,required:p,...m},j)=>{const{id:O,required:R}=d.useField(),E=R||p;return p!==void 0&&y('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),e.jsxs(x,{ref:j,variant:"pi",textColor:"neutral800",htmlFor:O,fontWeight:"bold",as:"label",...m,children:[i,E&&e.jsx(L,{textColor:"danger600",children:"*"}),h&&e.jsx(a,{marginLeft:1,children:h})]})}),x=u.default(s.Typography)`
  display: flex;
  align-items: center;
`,L=u.default(s.Typography)`
  line-height: 0;
`,a=u.default(c.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:i})=>i.colors.neutral500};
  }
`;n.FieldLabel=M},44076:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(7484),l=t(83315),d=t(44747),c=(u=>u&&u.__esModule?u:{default:u})(o).default(d.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:u})=>u}, 1fr);
  ${({theme:u,gap:y})=>l("gap",y,u)}
`,g=u=>{const{gap:y="0",gridCols:M=12,...x}=u;return e.jsx(c,{gap:y,gridCols:M,...x})};n.Grid=g},3528:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(7484),o=t(44747),r=(s=>s&&s.__esModule?s:{default:s})(e).default(o.Box)`
  grid-column: span ${({col:s})=>s};
  max-width: 100%;

  ${({theme:s})=>s.mediaQueries.tablet} {
    grid-column: span ${({s})=>s};
  }

  ${({theme:s})=>s.mediaQueries.mobile} {
    grid-column: span ${({xs:s})=>s};
  }
`;n.GridItem=r},96053:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(44076),o=t(3528);n.Grid=e.Grid,n.GridItem=o.GridItem},91594:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(35725),l=({startActions:d,endActions:r})=>!d&&!r?null:e.jsxs(o.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(o.Flex,{gap:2,wrap:"wrap",children:d}),e.jsx(o.Flex,{gap:2,shrink:0,wrap:"wrap",children:r})]});n.ActionLayout=l},3823:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(44747),l=({children:d})=>e.jsx(o.Box,{paddingLeft:10,paddingRight:10,children:d});n.ContentLayout=l},20285:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(7484),d=(r=>r&&r.__esModule?r:{default:r})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:r})=>r.spaces[4]};
`;n.GridLayout=d},32213:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),l=t(7484),d=t(43809),r=t(29381),s=t(44747),c=t(35725),g=t(11880),u=i=>i&&i.__esModule?i:{default:i},y=u(o),M=u(l),x=i=>{const h=o.useRef(null),[p,m]=o.useState(null),[j,O]=d.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return r.useResizeObserver(j,()=>{j.current&&m(j.current.getBoundingClientRect())}),o.useEffect(()=>{h.current&&m(h.current.getBoundingClientRect())},[h]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:p?.height},ref:j,children:O&&e.jsx(a,{ref:h,...i})}),!O&&e.jsx(a,{...i,sticky:!0,width:p?.width})]})};x.displayName="HeaderLayout";const L=M.default(s.Box)`
  width: ${({width:i})=>i?`${i/16}rem`:void 0};
  z-index: ${({theme:i})=>i.zIndices[1]};
`,a=y.default.forwardRef(({navigationAction:i,primaryAction:h,secondaryAction:p,subtitle:m,title:j,sticky:O,width:R,...E},P)=>{const v=typeof m=="string";return O?e.jsx(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:R,"data-strapi-header-sticky":!0,children:e.jsxs(c.Flex,{justifyContent:"space-between",children:[e.jsxs(c.Flex,{children:[i&&e.jsx(s.Box,{paddingRight:3,children:i}),e.jsxs(s.Box,{children:[e.jsx(g.Typography,{variant:"beta",as:"h1",...E,children:j}),v?e.jsx(g.Typography,{variant:"pi",textColor:"neutral600",children:m}):m]}),p?e.jsx(s.Box,{paddingLeft:4,children:p}):null]}),e.jsx(c.Flex,{children:h?e.jsx(s.Box,{paddingLeft:2,children:h}):void 0})]})}):e.jsxs(s.Box,{ref:P,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:i?6:8,background:"neutral100","data-strapi-header":!0,children:[i?e.jsx(s.Box,{paddingBottom:2,children:i}):null,e.jsxs(c.Flex,{justifyContent:"space-between",children:[e.jsxs(c.Flex,{minWidth:0,children:[e.jsx(g.Typography,{as:"h1",variant:"alpha",...E,children:j}),p?e.jsx(s.Box,{paddingLeft:4,children:p}):null]}),h]}),v?e.jsx(g.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:m}):m]})});n.BaseHeaderLayout=a,n.HeaderLayout=x},65030:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(7484),l=t(44747),r=(u=>u&&u.__esModule?u:{default:u})(o),s=r.default(l.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:u})=>u?"auto 1fr":"1fr"};
`,c=r.default(l.Box)`
  overflow-x: hidden;
`,g=({sideNav:u,children:y})=>e.jsxs(s,{hasSideNav:Boolean(u),children:[u,e.jsx(c,{paddingBottom:10,children:y})]});n.Layout=g},90493:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(44076),l=t(3528),d=t(44747),r=({startCol:s,endCol:c})=>e.jsxs(o.Grid,{gap:4,children:[e.jsx(l.GridItem,{col:9,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:s})}),e.jsx(l.GridItem,{col:3,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:c})})]});n.TwoColsLayout=r},94305:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(65030),o=t(91594),l=t(3823),d=t(32213),r=t(90493),s=t(20285);n.Layout=e.Layout,n.ActionLayout=o.ActionLayout,n.ContentLayout=l.ContentLayout,n.BaseHeaderLayout=d.BaseHeaderLayout,n.HeaderLayout=d.HeaderLayout,n.TwoColsLayout=r.TwoColsLayout,n.GridLayout=s.GridLayout},15901:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),l=t(54673),d=t(59817),r=t(35725),s=t(69803),c=t(20601),g=t(63391),u=t(28518),y=o.forwardRef(({name:M,hint:x,error:L,label:a,labelAction:i,id:h,required:p,...m},j)=>{const O=l.useId(h),R=o.useRef(null),E=o.useRef(null);if(!a&&!m["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return o.useImperativeHandle(j,()=>({input:E,inputWrapperRef:R}),[]),e.jsx("div",{ref:R,children:e.jsx(d.Field,{name:M,hint:x,error:L,id:O,required:p,children:e.jsxs(r.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[a&&e.jsx(s.FieldLabel,{action:i,children:a}),e.jsx(c.FieldInput,{ref:E,...m}),e.jsx(g.FieldHint,{}),e.jsx(u.FieldError,{})]})})})});y.displayName="TextInput",n.TextInput=y},83067:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(15901);n.TextInput=e.TextInput},63832:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t="[@strapi/design-system]:",e=o=>{const l=o;let d=!1;if(typeof l!="function")throw new TypeError(`${t} once requires a function parameter`);return(...r)=>{d||(l(...r),d=!0)}};n.PREFIX=t,n.once=e},43809:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=l=>{const d=e.useRef(null),[r,s]=e.useState(!0),c=([g])=>{s(g.isIntersecting)};return e.useEffect(()=>{const g=d.current,u=new IntersectionObserver(c,l);return g&&u.observe(d.current),()=>{g&&u.disconnect()}},[d,l]),[d,r]};n.useElementOnScreen=o},54673:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),d=(c=>c&&c.__esModule?c:{default:c})(e).default["useId".toString()]||(()=>{});let r=0;const s=c=>{const[g,u]=e.useState(d());return e.useLayoutEffect(()=>{c||u(y=>y??String(r++))},[c]),c?.toString()??(g||"")};n.useId=s},29381:(f,n,t)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=t(81906),l=(d,r)=>{const s=o.useCallbackRef(r);e.useLayoutEffect(()=>{const c=new ResizeObserver(s);return Array.isArray(d)?d.forEach(g=>{g.current&&c.observe(g.current)}):d.current&&c.observe(d.current),()=>{c.disconnect()}},[d,s])};n.useResizeObserver=l},65713:(f,n,t)=>{const e=t(74081),o=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#212134",d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"})}),l=o;f.exports=l}}]);
