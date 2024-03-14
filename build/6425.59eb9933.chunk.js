(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[6425],{29520:i=>{function u(n,r,s,t){for(var e=-1,o=n==null?0:n.length;++e<o;){var a=n[e];r(t,a,s(a),n)}return t}i.exports=u},67083:(i,u,n)=>{var r=n(62878);function s(t,e){var o=t==null?0:t.length;return!!o&&r(t,e,0)>-1}i.exports=s},65286:i=>{function u(n,r,s){for(var t=-1,e=n==null?0:n.length;++t<e;)if(s(r,n[t]))return!0;return!1}i.exports=u},83377:(i,u,n)=>{var r=n(54483),s=r("length");i.exports=s},98694:(i,u,n)=>{var r=n(1107);function s(t,e,o,a){return r(t,function(d,l,c){e(a,d,o(d),c)}),a}i.exports=s},1107:(i,u,n)=>{var r=n(84856),s=n(52593),t=s(r);i.exports=t},32652:i=>{function u(n,r,s,t){for(var e=n.length,o=s+(t?1:-1);t?o--:++o<e;)if(r(n[o],o,n))return o;return-1}i.exports=u},62878:(i,u,n)=>{var r=n(32652),s=n(2784),t=n(51425);function e(o,a,d){return a===a?t(o,a,d):r(o,s,d)}i.exports=e},2784:i=>{function u(n){return n!==n}i.exports=u},92403:(i,u,n)=>{var r=n(1107),s=n(47727);function t(e,o){var a=-1,d=s(e)?Array(e.length):[];return r(e,function(l,c,f){d[++a]=o(l,c,f)}),d}i.exports=t},16429:(i,u,n)=>{var r=n(36393),s=n(82393),t=n(90040),e=n(92403),o=n(63135),a=n(20435),d=n(9998),l=n(51339),c=n(26126);function f(v,x,g){x.length?x=r(x,function(h){return c(h)?function(p){return s(p,h.length===1?h[0]:h)}:h}):x=[l];var j=-1;x=r(x,a(t));var E=e(v,function(h,p,O){var m=r(x,function(C){return C(h)});return{criteria:m,index:++j,value:h}});return o(E,function(h,p){return d(h,p,g)})}i.exports=f},63135:i=>{function u(n,r){var s=n.length;for(n.sort(r);s--;)n[s]=n[s].value;return n}i.exports=u},21157:(i,u,n)=>{var r=n(44936),s=n(67083),t=n(65286),e=n(42435),o=n(83661),a=n(1695),d=200;function l(c,f,v){var x=-1,g=s,j=c.length,E=!0,h=[],p=h;if(v)E=!1,g=t;else if(j>=d){var O=f?null:o(c);if(O)return a(O);E=!1,g=e,p=new r}else p=f?[]:h;n:for(;++x<j;){var m=c[x],C=f?f(m):m;if(m=v||m!==0?m:0,E&&C===C){for(var M=p.length;M--;)if(p[M]===C)continue n;f&&p.push(C),h.push(m)}else g(p,C,v)||(p!==h&&p.push(C),h.push(m))}return h}i.exports=l},17654:(i,u,n)=>{var r=n(85194);function s(t,e){if(t!==e){var o=t!==void 0,a=t===null,d=t===t,l=r(t),c=e!==void 0,f=e===null,v=e===e,x=r(e);if(!f&&!x&&!l&&t>e||l&&c&&v&&!f&&!x||a&&c&&v||!o&&v||!d)return 1;if(!a&&!l&&!x&&t<e||x&&o&&d&&!a&&!l||f&&o&&d||!c&&d||!v)return-1}return 0}i.exports=s},9998:(i,u,n)=>{var r=n(17654);function s(t,e,o){for(var a=-1,d=t.criteria,l=e.criteria,c=d.length,f=o.length;++a<c;){var v=r(d[a],l[a]);if(v){if(a>=f)return v;var x=o[a];return v*(x=="desc"?-1:1)}}return t.index-e.index}i.exports=s},37177:(i,u,n)=>{var r=n(29520),s=n(98694),t=n(90040),e=n(26126);function o(a,d){return function(l,c){var f=e(l)?r:s,v=d?d():{};return f(l,a,t(c,2),v)}}i.exports=o},52593:(i,u,n)=>{var r=n(47727);function s(t,e){return function(o,a){if(o==null)return o;if(!r(o))return t(o,a);for(var d=o.length,l=e?d:-1,c=Object(o);(e?l--:++l<d)&&a(c[l],l,c)!==!1;);return o}}i.exports=s},83661:(i,u,n)=>{var r=n(31497),s=n(18920),t=n(1695),e=1/0,o=r&&1/t(new r([,-0]))[1]==e?function(a){return new r(a)}:s;i.exports=o},51425:i=>{function u(n,r,s){for(var t=s-1,e=n.length;++t<e;)if(n[t]===r)return t;return-1}i.exports=u},30930:(i,u,n)=>{var r=n(83377),s=n(11993),t=n(61781);function e(o){return s(o)?t(o):r(o)}i.exports=e},61781:i=>{var u="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",t=n+r+s,e="\\ufe0e\\ufe0f",o="["+u+"]",a="["+t+"]",d="\\ud83c[\\udffb-\\udfff]",l="(?:"+a+"|"+d+")",c="[^"+u+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",x="\\u200d",g=l+"?",j="["+e+"]?",E="(?:"+x+"(?:"+[c,f,v].join("|")+")"+j+g+")*",h=j+g+E,p="(?:"+[c+a+"?",a,f,v,o].join("|")+")",O=RegExp(d+"(?="+d+")|"+p+h,"g");function m(C){for(var M=O.lastIndex=0;O.test(C);)++M;return M}i.exports=m},63799:(i,u,n)=>{var r=n(71041),s=n(37177),t=Object.prototype,e=t.hasOwnProperty,o=s(function(a,d,l){e.call(a,l)?a[l].push(d):r(a,l,[d])});i.exports=o},63514:(i,u,n)=>{var r=n(13578),s=n(26126),t=n(27138),e="[object String]";function o(a){return typeof a=="string"||!s(a)&&t(a)&&r(a)==e}i.exports=o},18920:i=>{function u(){}i.exports=u},84921:(i,u,n)=>{var r=n(52695),s=n(4500),t=n(47727),e=n(63514),o=n(30930),a="[object Map]",d="[object Set]";function l(c){if(c==null)return 0;if(t(c))return e(c)?o(c):c.length;var f=s(c);return f==a||f==d?c.size:r(c).length}i.exports=l},51006:(i,u,n)=>{var r=n(93367),s=n(16429),t=n(52431),e=n(65145),o=t(function(a,d){if(a==null)return[];var l=d.length;return l>1&&e(a,d[0],d[1])?d=[]:l>2&&e(d[0],d[1],d[2])&&(d=[d[0]]),s(a,r(d,1),[])});i.exports=o},79146:(i,u,n)=>{var r=n(16946);function s(t){return r(t).toLowerCase()}i.exports=s},81465:(i,u,n)=>{var r=n(21157);function s(t){return t&&t.length?r(t):[]}i.exports=s},61121:(i,u,n)=>{"use strict";n.d(u,{O:()=>s});var r=n(8295);const s=r.Wx},68412:(i,u,n)=>{"use strict";n.d(u,{r:()=>v});var r=n(74081),s=n(27279),t=n(48157),e=n(47533),o=n(7484),a=n(61657),d=n(32370),l=n(93415);const c=o.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:x})=>x?"none":void 0};
  color: ${({disabled:x,theme:g})=>x?g.colors.neutral600:g.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${d.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:x})=>x.colors.primary500};
  }

  &:active {
    color: ${({theme:x})=>x.colors.primary700};
  }

  ${a.BF};
`,f=(0,o.default)(l.x)`
  display: flex;
`,v=s.forwardRef(({children:x,href:g,to:j,disabled:E=!1,startIcon:h,endIcon:p,...O},m)=>{const C=g?"_blank":void 0,M=g?"noreferrer noopener":void 0;return(0,r.jsxs)(c,{as:j&&!E?e.OL:"a",target:C,rel:M,to:E?void 0:j,href:E?"#":g,disabled:E,ref:m,...O,children:[h&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingRight:2,children:h}),(0,r.jsx)(d.Z,{children:x}),p&&!g&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingLeft:2,children:p}),g&&(0,r.jsx)(f,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,r.jsx)(t.Z,{})})]})})},71877:(i,u,n)=>{"use strict";n.d(u,{m:()=>a});var r=n(74081),s=n(7484),t=n(23298);const e=`${232/16}rem`,o=(0,s.default)(t.r)`
  width: ${e};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,a=({ariaLabel:d,...l})=>(0,r.jsx)(o,{"aria-label":d,as:"nav",...l})},17912:(i,u,n)=>{"use strict";n.d(u,{p:()=>h});var r=n(74081),s=n(27279),t=n(10382),e=n(7484),o=n(89166),a=n(74513);const d=p=>{const O=(0,s.useRef)();return(0,s.useEffect)(()=>{O.current=p}),O.current};var l=n(84366),c=n(93415),f=n(28479),v=n(31624),x=n(10701),g=n(32370),j=n(4987);const E=(0,e.default)(l.i)`
  width: ${24/16}rem;
  background-color: ${({theme:p})=>p.colors.neutral200};
`,h=({as:p="h2",label:O,searchLabel:m="",searchable:C=!1,onChange:M=()=>{},value:A="",onClear:L=()=>{},onSubmit:P=()=>{},id:T})=>{const[D,R]=(0,s.useState)(!1),W=d(D),b=(0,a.M)(T),y=(0,s.useRef)(void 0),S=(0,s.useRef)(void 0);(0,s.useEffect)(()=>{D&&y.current&&y.current.focus(),W&&!D&&S.current&&S.current.focus()},[D,W]);const I=()=>{R(B=>!B)},U=B=>{L(B),y.current.focus()},$=B=>{B.relatedTarget?.id!==b&&R(!1)},K=B=>{B.key===o.y.ESCAPE&&R(!1)};return D?(0,r.jsxs)(c.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(f.U,{children:(0,r.jsx)(v.w,{name:"searchbar",value:A,onChange:M,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:K,ref:y,onBlur:$,onClear:U,onSubmit:P,clearLabel:"Clear",size:"S",children:m})}),(0,r.jsx)(c.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(E,{})})]}):(0,r.jsxs)(c.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(x.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(g.Z,{variant:"beta",as:p,children:O}),C&&(0,r.jsx)(j.h,{ref:S,onClick:I,label:m,icon:(0,r.jsx)(t.Z,{})})]}),(0,r.jsx)(c.x,{paddingTop:4,children:(0,r.jsx)(E,{})})]})}},49370:(i,u,n)=>{"use strict";n.d(u,{E:()=>x});var r=n(74081),s=n(27279),t=n(79830),e=n(7484),o=n(93415),a=n(32370),d=n(10701),l=n(30413);const c=(0,e.default)(o.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:g})=>g.colors.neutral800};
  svg > * {
    fill: ${({theme:g})=>g.colors.neutral600};
  }

  &.active {
    ${({theme:g})=>`
      background-color: ${g.colors.primary100};
      border-right: 2px solid ${g.colors.primary600};
      svg > * {
        fill: ${g.colors.primary700};
      }
      ${a.Z} {
        color: ${g.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,f=(0,e.default)(t.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:g,$active:j})=>j?g.colors.primary600:g.colors.neutral600};
  }
`,v=e.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,x=s.forwardRef(({children:g,icon:j=null,withBullet:E=!1,as:h=l.f,isSubSectionChild:p=!1,...O},m)=>(0,r.jsxs)(c,{as:h,icon:j,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,ref:m,...O,children:[(0,r.jsxs)(d.k,{children:[j?(0,r.jsx)(v,{children:j}):(0,r.jsx)(f,{}),(0,r.jsx)(o.x,{paddingLeft:2,children:(0,r.jsx)(a.Z,{as:"span",children:g})})]}),E&&(0,r.jsx)(o.x,{as:d.k,paddingRight:4,children:(0,r.jsx)(f,{$active:!0})})]}))},20534:(i,u,n)=>{"use strict";n.d(u,{D:()=>j});var r=n(74081),s=n(27279),t=n(7484),e=n(10411),o=n(10701),a=n(93415),d=n(32370);const l=(0,t.default)(o.k)`
  border: none;
  padding: 0;
  background: transparent;
`,c=t.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:E})=>E?"0deg":"180deg"});
`,f=({collapsable:E=!1,label:h,onClick:p=()=>{},ariaExpanded:O,ariaControls:m})=>E?(0,r.jsxs)(l,{as:"button",onClick:p,"aria-expanded":O,"aria-controls":m,textAlign:"left",children:[(0,r.jsx)(a.x,{paddingRight:1,children:(0,r.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:h})}),E&&(0,r.jsx)(c,{rotated:O,children:(0,r.jsx)(e.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(l,{children:(0,r.jsx)(a.x,{paddingRight:1,children:(0,r.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:h})})});var v=n(74513),x=n(4963);const g=(0,t.default)(a.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:E})=>E.colors.neutral500};
    }
  }
`,j=({collapsable:E=!1,label:h,badgeLabel:p,children:O,id:m})=>{const[C,M]=(0,s.useState)(!0),A=(0,v.M)(m),L=()=>{M(P=>!P)};return(0,r.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(g,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(a.x,{position:"relative",paddingRight:p?6:0,children:[(0,r.jsx)(f,{onClick:L,ariaExpanded:C,ariaControls:A,collapsable:E,label:h}),p&&(0,r.jsx)(x.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:p})]})}),(!E||C)&&(0,r.jsx)("ol",{id:A,children:s.Children.map(O,(P,T)=>(0,r.jsx)("li",{children:P},T))})]})}},96220:(i,u,n)=>{"use strict";n.d(u,{Z:()=>o});var r=n(74081),s=n(27279),t=n(93415),e=n(10701);const o=({children:a,spacing:d=2,horizontal:l=!1,...c})=>(0,r.jsx)(t.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(e.k,{as:"ol",gap:d,direction:l?"row":"column",alignItems:l?"center":"stretch",...c,children:s.Children.map(a,(f,v)=>(0,r.jsx)("li",{children:f},v))})})}}]);
