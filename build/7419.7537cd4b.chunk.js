"use strict";(self.webpackChunkmemory_backend=self.webpackChunkmemory_backend||[]).push([[7419],{37472:(X,U,t)=>{t.d(U,{Z:()=>m});var e=t(74081),u=t(10701);const m=({startActions:T,endActions:M})=>!T&&!M?null:(0,e.jsxs)(u.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(u.k,{gap:2,wrap:"wrap",children:T}),(0,e.jsx)(u.k,{gap:2,shrink:0,wrap:"wrap",children:M})]})},27997:(X,U,t)=>{t.d(U,{A:()=>x});var e=t(74081),u=t(7484),m=t(93415);const T=(0,u.default)(m.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:j})=>j?"auto 1fr":"1fr"};
`,M=(0,u.default)(m.x)`
  overflow-x: hidden;
`,x=({sideNav:j,children:W})=>(0,e.jsxs)(T,{hasSideNav:Boolean(j),children:[j,(0,e.jsx)(M,{paddingBottom:10,children:W})]})},68412:(X,U,t)=>{t.d(U,{r:()=>K});var e=t(74081),u=t(27279),m=t(48157),T=t(47533),M=t(7484),x=t(61657),j=t(32370),W=t(93415);const w=M.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:v})=>v?"none":void 0};
  color: ${({disabled:v,theme:O})=>v?O.colors.neutral600:O.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${j.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:v})=>v.colors.primary500};
  }

  &:active {
    color: ${({theme:v})=>v.colors.primary700};
  }

  ${x.BF};
`,Z=(0,M.default)(W.x)`
  display: flex;
`,K=u.forwardRef(({children:v,href:O,to:$,disabled:F=!1,startIcon:Q,endIcon:V,...q},G)=>{const ee=O?"_blank":void 0,z=O?"noreferrer noopener":void 0;return(0,e.jsxs)(w,{as:$&&!F?T.OL:"a",target:ee,rel:z,to:F?void 0:$,href:F?"#":O,disabled:F,ref:G,...q,children:[Q&&(0,e.jsx)(Z,{as:"span","aria-hidden":!0,paddingRight:2,children:Q}),(0,e.jsx)(j.Z,{children:v}),V&&!O&&(0,e.jsx)(Z,{as:"span","aria-hidden":!0,paddingLeft:2,children:V}),O&&(0,e.jsx)(Z,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(m.Z,{})})]})})},7419:(X,U,t)=>{t.r(U),t.d(U,{default:()=>ts});var e=t(74081),u=t(27279),m=t(93415),T=t(73411),M=t(10701),x=t(48102),j=t(5938),W=t(15244),w=t(77970),Z=t(6918),K=t(32370),v=t(23298),O=t(74577),$=t(2878),F=t(35250),Q=t(27875),V=t(68412),q=t(27997),G=t(9941),ee=t(37472),z=t(4987),Re=t(74758),Ie=t(10989),Ue=t(84366),c=t(94050),We=t(364),B=t(61020),S=t(51447),Ke=t(47533),s=t(19093),fs=t(31855),ue=t(29206),Fe=t(78665),Se=t(61287),be=t(6162),se=t(36938),Ze=t(57121),ze=t(76827),$e=t(35318),Qe=t(86485),Ve=t(66351),Ge=t(26784),te=t(7484),_=t(70627),He=t(71563),ke=t(10124),Ee=t(40464),hs=t(6078),Ms=t(47853),ms=t(50547),xs=t(74063);const Ne=(n,{pathname:o,query:r})=>{let l=[{id:null,label:{id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"},href:n?(0,s.a)(o,r):void 0}];return n?.parent?.parent&&l.push([]),n?.parent&&l.push({id:n.parent.id,label:n.parent.name,href:(0,s.a)(o,r,{folder:n.parent.id,folderPath:n.parent.path})}),n&&l.push({id:n.id,label:n.name}),l},Ye=n=>{const{id:o}=(0,s.u)();return(0,e.jsx)(m.x,{position:"relative",zIndex:2,children:(0,e.jsx)(T.C,{"aria-labelledby":`${o}-title`,...n})})},ne=({pagination:n})=>(0,e.jsx)(m.x,{paddingTop:6,children:(0,e.jsxs)(M.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(c.v4,{}),(0,e.jsx)(c.tU,{pagination:n})]})});ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:_.shape({page:_.number,pageCount:_.number,pageSize:_.number,total:_.number})};const pe=({selected:n,onSuccess:o})=>{const{formatMessage:r}=(0,B.Z)(),[l,d]=(0,u.useState)(!1),{isLoading:g,remove:E}=(0,s.b)(),f=async()=>{await E(n),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.z,{variant:"danger-light",size:"S",startIcon:(0,e.jsx)(Fe.Z,{}),onClick:()=>d(!0),children:r({id:"global.delete",defaultMessage:"Delete"})}),(0,e.jsx)(c.QH,{isConfirmButtonLoading:g,isOpen:l,onToggleDialog:()=>d(!1),onConfirm:f})]})};pe.propTypes={selected:_.arrayOf(s.A,s.F).isRequired,onSuccess:_.func.isRequired};const Je=()=>{const n=(0,c.lm)(),o=(0,Ee.useQueryClient)(),{post:r}=(0,c.kY)(),l=({destinationFolderId:E,filesAndFolders:f})=>{const p=f.reduce((h,y)=>{const{id:i,type:R}=y,D=R==="asset"?"fileIds":"folderIds";return h[D]||(h[D]=[]),h[D].push(i),h},{});return r("/upload/actions/bulk-move",{...p,destinationFolderId:E})},d=(0,Ee.useMutation)(l,{onSuccess(E){const{data:{data:f}}=E;f?.files?.length>0&&(o.refetchQueries([s.p,"assets"],{active:!0}),o.refetchQueries([s.p,"asset-count"],{active:!0})),o.refetchQueries([s.p,"folders"],{active:!0}),n({type:"success",message:{id:(0,s.g)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...d,move:(E,f)=>d.mutateAsync({destinationFolderId:E,filesAndFolders:f})}},ae=({onClose:n,selected:o,currentFolder:r})=>{const{formatMessage:l}=(0,B.Z)(),{data:d,isLoading:g}=(0,s.c)(),{move:E}=Je();if(!d)return null;const f=async(y,{setErrors:i})=>{try{await E(y.destination.value,o),n()}catch(R){const H=(0,c.OT)(R).errors.reduce((k,A)=>(k[A.values?.path?.length||"destination"]=A.defaultMessage,k),{});ke(H)||i(H)}},p=()=>{n()};if(g)return(0,e.jsx)(j.P,{onClose:p,labelledBy:"title",children:(0,e.jsx)(W.f,{children:(0,e.jsx)(M.k,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:(0,e.jsx)(w.a,{children:l({id:(0,s.g)("content.isLoading"),defaultMessage:"Content is loading."})})})})});const h={destination:{value:r?.id||"",label:r?.name||d[0].label}};return(0,e.jsx)(j.P,{onClose:p,labelledBy:"title",children:(0,e.jsx)(He.J9,{validateOnChange:!1,onSubmit:f,initialValues:h,children:({values:y,errors:i,setFieldValue:R})=>(0,e.jsxs)(c.l0,{noValidate:!0,children:[(0,e.jsx)(Z.x,{children:(0,e.jsx)(K.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:l({id:(0,s.g)("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),(0,e.jsx)(W.f,{children:(0,e.jsx)(v.r,{gap:4,children:(0,e.jsx)(O.P,{xs:12,col:12,children:(0,e.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)($.Q,{htmlFor:"folder-destination",children:l({id:(0,s.g)("form.input.label.folder-location"),defaultMessage:"Location"})}),(0,e.jsx)(s.S,{options:d,onChange:D=>{R("destination",D)},defaultValue:y.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:i?.destination,ariaErrorMessage:"destination-error"}),i.destination&&(0,e.jsx)(K.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600",children:i.destination})]})})})}),(0,e.jsx)(F.m,{startActions:(0,e.jsx)(x.z,{onClick:p,variant:"tertiary",name:"cancel",children:l({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(x.z,{type:"submit",loading:g,children:l({id:"modal.folder.move.submit",defaultMessage:"Move"})})})]})})})};ae.defaultProps={currentFolder:void 0},ae.propTypes={onClose:_.func.isRequired,currentFolder:s.F,selected:_.arrayOf(s.F,s.A).isRequired};const oe=({selected:n,onSuccess:o,currentFolder:r})=>{const{formatMessage:l}=(0,B.Z)(),[d,g]=(0,u.useState)(!1),E=()=>{g(!1),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.z,{variant:"secondary",size:"S",startIcon:(0,e.jsx)(Se.Z,{}),onClick:()=>g(!0),children:l({id:"global.move",defaultMessage:"Move"})}),d&&(0,e.jsx)(ae,{currentFolder:r,onClose:E,selected:n})]})};oe.defaultProps={currentFolder:void 0},oe.propTypes={onSuccess:_.func.isRequired,currentFolder:s.F,selected:_.arrayOf(s.A,s.F).isRequired};const ie=({selected:n,onSuccess:o,currentFolder:r})=>{const{formatMessage:l}=(0,B.Z)();return(0,e.jsxs)(M.k,{gap:2,paddingBottom:5,children:[(0,e.jsx)(K.Z,{variant:"epsilon",textColor:"neutral600",children:l({id:(0,s.g)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:n.filter(({type:d})=>d==="folder").length,numberAssets:n.filter(({type:d})=>d==="asset").length})}),(0,e.jsx)(pe,{selected:n,onSuccess:o}),(0,e.jsx)(oe,{currentFolder:r,selected:n,onSuccess:o})]})};ie.defaultProps={currentFolder:void 0},ie.propTypes={onSuccess:_.func.isRequired,currentFolder:s.F,selected:_.arrayOf(s.A,s.F).isRequired};const Xe=({isFiltering:n,canCreate:o,canRead:r})=>n?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:r?o?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},fe=({canCreate:n,isFiltering:o,canRead:r,onActionClick:l})=>{const{formatMessage:d}=(0,B.Z)(),g=Xe({isFiltering:o,canCreate:n,canRead:r});return(0,e.jsx)(s.E,{icon:r?null:be.Z,action:n&&!o&&(0,e.jsx)(x.z,{variant:"secondary",startIcon:(0,e.jsx)(se.Z,{}),onClick:l,children:d({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...g,id:(0,s.g)(g.id)})})};fe.propTypes={canCreate:_.bool.isRequired,canRead:_.bool.isRequired,isFiltering:_.bool.isRequired,onActionClick:_.func.isRequired};const we=()=>{const n=(0,u.useRef)(null),[o,r]=(0,u.useState)(!1),{formatMessage:l}=(0,B.Z)(),{trackUsage:d}=(0,c.rS)(),[{query:g},E]=(0,c.Kx)(),f=g?.filters?.$and||[],p=()=>r(i=>!i),h=i=>{E({filters:{$and:i},page:1})},y=i=>{d("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(i[i.length-1])[0]}),E({filters:{$and:i},page:1})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.z,{variant:"tertiary",ref:n,startIcon:(0,e.jsx)(Ze.Z,{}),onClick:p,size:"S",children:l({id:"app.utils.filters",defaultMessage:"Filters"})}),o&&(0,e.jsx)(s.d,{displayedFilters:s.e,filters:f,onSubmit:y,onToggle:p,source:n}),(0,e.jsx)(s.f,{appliedFilters:f,filtersSchema:s.e,onRemoveFilter:h})]})},re=({breadcrumbs:n,canCreate:o,folder:r,onToggleEditFolderDialog:l,onToggleUploadAssetDialog:d})=>{const{formatMessage:g}=(0,B.Z)(),{pathname:E}=(0,S.TH)(),[{query:f}]=(0,c.Kx)(),p={...f,folder:r?.parent?.id??void 0,folderPath:r?.parent?.path??void 0};return(0,e.jsx)(Q.T,{title:g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"}),subtitle:n&&r&&(0,e.jsx)(s.h,{as:"nav",label:g({id:(0,s.g)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:n,currentFolderId:r?.id}),navigationAction:r&&(0,e.jsx)(V.r,{startIcon:(0,e.jsx)(ze.Z,{}),to:`${E}?${(0,ue.stringify)(p,{encode:!1})}`,children:g({id:(0,s.g)("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:o&&(0,e.jsxs)(M.k,{gap:2,children:[(0,e.jsx)(x.z,{startIcon:(0,e.jsx)(se.Z,{}),variant:"secondary",onClick:l,children:g({id:(0,s.g)("header.actions.add-folder"),defaultMessage:"Add new folder"})}),(0,e.jsx)(x.z,{startIcon:(0,e.jsx)(se.Z,{}),onClick:d,children:g({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})};re.defaultProps={breadcrumbs:!1,folder:null},re.propTypes={breadcrumbs:_.oneOfType([s.B,_.bool]),canCreate:_.bool.isRequired,folder:s.F,onToggleEditFolderDialog:_.func.isRequired,onToggleUploadAssetDialog:_.func.isRequired};const qe=(0,te.default)(m.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,he=(0,te.default)(K.Z)`
  max-width: 100%;
`,Me=(0,te.default)(m.x)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }
`,es=()=>{const{push:n}=(0,S.k6)(),{canRead:o,canCreate:r,canUpdate:l,canCopyLink:d,canDownload:g,isLoading:E}=(0,s.i)(),f=(0,u.useRef)(),{formatMessage:p}=(0,B.Z)(),{pathname:h}=(0,S.TH)(),{trackUsage:y}=(0,c.rS)(),[{query:i},R]=(0,c.Kx)(),D=Boolean(i._q||i.filters),[H,k]=(0,c.Yw)(s.l.view,s.v.GRID),A=H===s.v.GRID,{data:L,isLoading:ns,errors:as}=(0,s.j)({skipWhen:!o,query:i}),{data:os,isLoading:is,errors:rs}=(0,s.k)({enabled:o&&L?.pagination?.page===1&&!(0,s.m)(i),query:i}),{data:le,isLoading:me,error:ls}=(0,s.n)(i?.folder,{enabled:o&&!!i?.folder});ls?.response?.status===404&&n(h);const N=os?.map(a=>({...a,type:"folder",folderURL:(0,s.a)(h,i,a.id),isSelectable:l}))??[],P=N?.length||0,Y=L?.results?.map(a=>({...a,type:"asset",isSelectable:l}))||[],C=Y?.length??0,ds=L?.pagination?.total,xe=me||is||E||ns,[cs,gs]=(0,u.useState)(!1),[_s,De]=(0,u.useState)(!1),[ve,de]=(0,u.useState)(void 0),[ce,Oe]=(0,u.useState)(void 0),[I,{selectOne:J,selectAll:Pe}]=(0,c.Uq)(["type","id"],[]),Ce=I?.length>0&&I?.length!==C+P,ge=()=>gs(a=>!a),je=({created:a=!1}={})=>{a&&i?.page!=="1"&&R({...i,page:1}),De(b=>!b)},ye=(a,b)=>{a.target.checked&&y("didSelectAllMediaLibraryElements"),Pe(b)},Ae=a=>{y("didSortMediaLibraryElements",{location:"upload",sort:a}),R({sort:a})},Le=a=>{Oe(a),De(!0)},us=a=>{Oe(null),je(a),f.current&&f.current.focus()},Te=a=>{a===C&&L.pagination.page===L.pagination.pageCount&&L.pagination.page>1&&R({...i,page:L.pagination.page-1})},Es=()=>{Pe(),Te(I.length)};return(0,c.go)(),(0,e.jsxs)(q.A,{children:[(0,e.jsxs)(G.o,{"aria-busy":xe,children:[(0,e.jsx)(re,{breadcrumbs:!me&&Ne(le,{pathname:h,query:i}),canCreate:r,onToggleEditFolderDialog:je,onToggleUploadAssetDialog:ge,folder:le}),(0,e.jsx)(ee.Z,{startActions:(0,e.jsxs)(e.Fragment,{children:[l&&A&&(C>0||P>0)&&(0,e.jsx)(qe,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:(0,e.jsx)(T.C,{"aria-label":p({id:(0,s.g)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Ce,value:(C>0||P>0)&&I.length===C+P,onChange:a=>ye(a,[...Y,...N])})}),o&&A&&(0,e.jsx)(s.o,{value:i?.sort,onChangeSort:Ae}),o&&(0,e.jsx)(we,{})]}),endActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.jW,{permissions:s.P.configureView,children:(0,e.jsx)(Me,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(z.h,{forwardedAs:Ke.rU,to:{pathname:`${h}/configuration`,search:(0,ue.stringify)(i,{encode:!1})},icon:(0,e.jsx)($e.Z,{}),label:p({id:"app.links.configure-view",defaultMessage:"Configure the view"})})})}),(0,e.jsx)(Me,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(z.h,{icon:A?(0,e.jsx)(Qe.Z,{}):(0,e.jsx)(Ve.Z,{}),label:p(A?{id:(0,s.g)("view-switch.list"),defaultMessage:"List View"}:{id:(0,s.g)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>k(A?s.v.LIST:s.v.GRID)})}),(0,e.jsx)(c.m,{label:p({id:(0,s.g)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),(0,e.jsxs)(Re.D,{children:[I.length>0&&(0,e.jsx)(ie,{currentFolder:le,selected:I,onSuccess:Es}),xe&&(0,e.jsx)(c.dO,{}),(as||rs)&&(0,e.jsx)(c.Hn,{}),P===0&&C===0&&(0,e.jsx)(fe,{canCreate:r,canRead:o,isFiltering:D,onActionClick:ge}),o&&!A&&(C>0||P>0)&&(0,e.jsx)(s.T,{assetCount:C,folderCount:P,indeterminate:Ce,onChangeSort:Ae,onChangeFolder:(a,b)=>n((0,s.a)(h,i,{folder:a,folderPath:b})),onEditAsset:de,onEditFolder:Le,onSelectOne:J,onSelectAll:ye,rows:[...N,...Y],selected:I,shouldDisableBulkSelect:!l,sortQuery:i?.sort??""}),o&&A&&(0,e.jsxs)(e.Fragment,{children:[P>0&&(0,e.jsx)(s.q,{title:(D&&C>0||!D)&&p({id:(0,s.g)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:P})||"",children:N.map(a=>{const ps=!!I.filter(({type:_e})=>_e==="folder").find(_e=>_e.id===a.id),Be=(0,s.a)(h,i,{folder:a?.id,folderPath:a?.path});return(0,e.jsx)(O.P,{col:3,children:(0,e.jsx)(s.r,{ref:ce&&a.id===ce.id?f:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:Be,startAction:J&&a.isSelectable?(0,e.jsx)(Ye,{"data-testid":`folder-checkbox-${a.id}`,value:ps,onChange:()=>J(a)}):null,cardActions:(0,e.jsx)(z.h,{icon:(0,e.jsx)(Ge.Z,{}),"aria-label":p({id:(0,s.g)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>Le(a)}),children:(0,e.jsx)(s.s,{children:(0,e.jsx)(s.t,{to:Be,children:(0,e.jsxs)(M.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[(0,e.jsxs)(he,{fontWeight:"semiBold",ellipsis:!0,children:[a.name,(0,e.jsx)(Ie.T,{children:":"})]}),(0,e.jsx)(he,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:p({id:(0,s.g)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})})]})})})})},`folder-${a.id}`)})}),C>0&&P>0&&(0,e.jsx)(m.x,{paddingTop:6,paddingBottom:4,children:(0,e.jsx)(Ue.i,{})}),C>0&&(0,e.jsx)(s.w,{assets:Y,onEditAsset:de,onSelectAsset:J,selectedAssets:I.filter(({type:a})=>a==="asset"),title:(!D||D&&P>0)&&L?.pagination?.page===1&&p({id:(0,s.g)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:ds})||""})]}),L?.pagination&&(0,e.jsx)(ne,{pagination:L.pagination})]})]}),cs&&(0,e.jsx)(s.U,{onClose:ge,trackedLocation:"upload",folderId:i?.folder}),_s&&(0,e.jsx)(s.x,{onClose:us,folder:ce,parentFolderId:i?.folder,location:"upload"}),ve&&(0,e.jsx)(s.y,{onClose:a=>{a===null&&Te(1),de(void 0)},asset:ve,canUpdate:l,canCopyLink:d,canDownload:g,trackedLocation:"upload"})]})},ss=(0,u.lazy)(()=>t.e(2473).then(t.bind(t,32473))),ts=()=>{const{config:{isLoading:n,isError:o,data:r}}=(0,s.z)(),[{rawQuery:l},d]=(0,c.Kx)(),{formatMessage:g}=(0,B.Z)(),E=g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"});return(0,u.useEffect)(()=>{n||o||l||d({sort:r.sort,page:1,pageSize:r.pageSize})},[n,o,r,l,d]),(0,c.go)(),(0,e.jsxs)(G.o,{"aria-busy":n,children:[(0,e.jsx)(We.q,{title:E}),n&&(0,e.jsx)(c.dO,{}),l?(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(c.dO,{}),children:(0,e.jsxs)(S.rs,{children:[(0,e.jsx)(S.AW,{exact:!0,path:`/plugins/${s.p}`,component:es}),(0,e.jsx)(S.AW,{exact:!0,path:`/plugins/${s.p}/configuration`,render:()=>(0,e.jsx)(ss,{config:r})})]})}):null]})}}}]);