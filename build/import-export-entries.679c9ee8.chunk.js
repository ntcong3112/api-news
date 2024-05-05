"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[3770],{2788:(L,h,e)=>{e.r(h),e.d(h,{default:()=>U});var n=e(74081),g=e(75307),x=e(27279),c=e(51447),u=e(11919),E=e.n(u),m=e(74758),t=e(10701),o=e(93415),l=e(32370),y=e(22572),a=e(5627),r=e(78955),d=e(68412),p=e(83395),j=e.n(p),v=e(94007),P=e(27875),f=e(41756);const I=()=>{const{i18n:s}=(0,f.Q)();return(0,n.jsx)(o.x,{background:"neutral100",children:(0,n.jsx)(P.A,{title:s("plugin.name","Import Export"),subtitle:s("plugin.description","Import/Export data from and to your database in just few clicks"),as:"h2"})})};var C=e(87939),B=e(92838),M=e(83726),R=e(35842),W=e(93574);const F=()=>{const{i18n:s}=(0,f.Q)(),{getPreferences:D,updatePreferences:K}=(0,M._)(),[O,Z]=(0,x.useState)(D()),A=(i,$)=>{K({[i]:$}),Z(D())};return(0,n.jsxs)(g.O4,{permissions:R.I.main,children:[(0,n.jsx)(I,{}),(0,n.jsx)(m.D,{children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:8,children:[(0,n.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,n.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.quick-actions.title","Quick Actions")}),(0,n.jsx)(o.x,{children:(0,n.jsx)(t.k,{direction:"column",alignItems:"start",gap:4,children:(0,n.jsxs)(t.k,{gap:4,children:[(0,n.jsx)(C.r,{}),(0,n.jsx)(v.j,{availableExportFormats:[W.g.JSON_V2]})]})})})]})}),(0,n.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,n.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.preferences.title","Preferences")}),(0,n.jsx)(o.x,{children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:4,children:[(0,n.jsx)(t.k,{justifyContent:"space-between",children:(0,n.jsx)(y.X,{value:O.applyFilters,onValueChange:i=>A("applyFilters",i),children:(0,n.jsx)(l.Z,{children:s("plugin.export.apply-filters-and-sort","Apply filters and sort to exported data")})})}),(0,n.jsx)(t.k,{justifyContent:"space-between",children:(0,n.jsx)(a.P,{label:s("plugin.export.deepness","Deepness"),placeholder:s("plugin.export.deepness","Deepness"),value:O.deepness,onChange:i=>A("deepness",i),children:j()(1,21).map(i=>(0,n.jsx)(r.W,{value:i,children:i},i))})})]})})]})}),(0,n.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,n.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.need-help.title","Feature Request / Bug Report")}),(0,n.jsx)(o.x,{children:(0,n.jsxs)(t.k,{direction:"column",alignItems:"start",gap:4,children:[(0,n.jsx)(l.Z,{children:s("plugin.page.homepage.section.need-help.description","Feel free to reach out on the product roadmap, discord or github \u270C\uFE0F")}),(0,n.jsxs)(t.k,{gap:4,children:[(0,n.jsx)(d.r,{href:"https://strapi-import-export-entries.canny.io",isExternal:!0,children:s("plugin.page.homepage.section.need-help.product-roadmap","Product Roadmap")}),(0,n.jsx)(d.r,{href:"https://discord.gg/dcqCAFFdP8",isExternal:!0,children:s("plugin.page.homepage.section.need-help.discord","Discord")}),(0,n.jsx)(d.r,{href:"https://github.com/Baboo7/strapi-plugin-import-export-entries/issues",isExternal:!0,children:s("plugin.page.homepage.section.need-help.github","GitHub")})]})]})})]})})]})}),(0,n.jsx)(B.p,{})]})},T=(0,x.memo)(F),U=()=>(0,n.jsx)("div",{children:(0,n.jsxs)(c.rs,{children:[(0,n.jsx)(c.AW,{path:`/plugins/${E()}`,component:T,exact:!0}),(0,n.jsx)(c.AW,{component:g.Hn})]})})},68412:(L,h,e)=>{e.d(h,{r:()=>y});var n=e(74081),g=e(27279),x=e(48157),c=e(47533),u=e(7484),E=e(61657),m=e(32370),t=e(93415);const o=u.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:a})=>a?"none":void 0};
  color: ${({disabled:a,theme:r})=>a?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${m.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:a})=>a.colors.primary500};
  }

  &:active {
    color: ${({theme:a})=>a.colors.primary700};
  }

  ${E.BF};
`,l=(0,u.default)(t.x)`
  display: flex;
`,y=g.forwardRef(({children:a,href:r,to:d,disabled:p=!1,startIcon:j,endIcon:v,...P},f)=>{const I=r?"_blank":void 0,C=r?"noreferrer noopener":void 0;return(0,n.jsxs)(o,{as:d&&!p?c.OL:"a",target:I,rel:C,to:p?void 0:d,href:p?"#":r,disabled:p,ref:f,...P,children:[j&&(0,n.jsx)(l,{as:"span","aria-hidden":!0,paddingRight:2,children:j}),(0,n.jsx)(m.Z,{children:a}),v&&!r&&(0,n.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:v}),r&&(0,n.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,n.jsx)(x.Z,{})})]})})}}]);
