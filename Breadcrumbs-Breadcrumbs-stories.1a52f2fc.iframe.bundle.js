"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[9018],{"./src/components/SvgIcon/SvgIcon.classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>svgIconClasses,h:()=>getSvgIconUtilityClass});var _mui_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.Z)("ESSvgIcon",slot)}const svgIconClasses=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESSvgIcon",["root","svg"])},"./src/components/SvgIcon/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),_SvgIcon_classes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SvgIcon/SvgIcon.classes.ts"),_mui_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SvgIconRoot=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)("div",{name:"ESSvgIcon",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({userSelect:"none",display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",overflow:"hidden"}))),SvgIconSvg=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)("svg",{name:"ESSvgIcon",slot:"Svg",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.svg,!ownerState.container&&styles.root]}})((()=>({userSelect:"none",display:"inline-flex",fill:"none",flexShrink:0}))),SvgIcon=inProps=>{const{children,className,classes:inClasses,sx,size,width,height,container,containerSize,containerWidth,containerHeight,title,ContainerProps,...props}=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)({props:inProps,name:"ESSvgIcon"}),classes=(ownerState=>{const{classes}=ownerState;return(0,_mui_base__WEBPACK_IMPORTED_MODULE_1__.Z)({root:["root"],svg:["svg"]},_SvgIcon_classes__WEBPACK_IMPORTED_MODULE_2__.h,classes)})({classes:inClasses,container}),svg=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SvgIconSvg,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(classes.svg,!container&&[classes.root,className]),focusable:"false",sx:container?void 0:sx,...props,style:{width:width||size,height:height||size,...props.style},children:[children,title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title}):null]});return container?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SvgIconRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(classes.root,className),sx,...ContainerProps,style:{width:containerWidth||containerSize||width||size,height:containerHeight||containerSize||height||size,...ContainerProps?.style},children:svg}):svg};SvgIcon.__docgenInfo={description:"Wrapper component for the svg icons.",methods:[],displayName:"SvgIcon",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the svg element. */\n  svg: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"svg",value:{name:"string",required:!0},description:"Styles applied to the svg element."}]}}],raw:"Partial<SvgIconClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},size:{required:!1,tsType:{name:"string"},description:"The width and height of the icon."},width:{required:!1,tsType:{name:"string"},description:"The width of the icon."},height:{required:!1,tsType:{name:"string"},description:"The height of the icon."},container:{required:!1,tsType:{name:"boolean"},description:"If true, allows to set the container size, without resizing the svg element itself."},containerSize:{required:!1,tsType:{name:"string"},description:"The width and height of the icon container."},containerWidth:{required:!1,tsType:{name:"string"},description:"The width of the icon container."},containerHeight:{required:!1,tsType:{name:"string"},description:"The height of the icon container."},title:{required:!1,tsType:{name:"string"},description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent"},ContainerProps:{required:!1,tsType:{name:"DetailedHTMLProps",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"HTMLDivElement"}],raw:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},description:"Props applied to the container element."}}}},"./src/components/TooltipEllipsis/TooltipEllipsis.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>TooltipEllipsis});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useResizeObserver/useResizeObserver.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TooltipEllipsis=({children,...props})=>{const[overflow,setOverflow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),childrenRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.y)(ref,(()=>{const isOverflow=childrenRef.current&&childrenRef.current.scrollWidth>childrenRef.current.offsetWidth||ref.current&&ref.current.scrollWidth>ref.current.offsetWidth||childrenRef.current&&childrenRef.current.scrollHeight>childrenRef.current.offsetHeight||ref.current&&ref.current.scrollHeight>ref.current.offsetHeight;setOverflow(!!isOverflow)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{...props,disableFocusListener:!overflow,disableHoverListener:!overflow,disableTouchListener:!overflow,children:children({ref,childrenRef})})};TooltipEllipsis.__docgenInfo={description:"",methods:[],displayName:"TooltipEllipsis",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: {\n  ref: MutableRefObject<HTMLElement | null>;\n  childrenRef: MutableRefObject<HTMLElement | null>;\n}) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  ref: MutableRefObject<HTMLElement | null>;\n  childrenRef: MutableRefObject<HTMLElement | null>;\n}",signature:{properties:[{key:"ref",value:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>",required:!0}},{key:"childrenRef",value:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>",required:!0}}]}},name:"props"}],return:{name:"ReactElement"}}},description:""}}}},"./src/hooks/useResizeObserver/useResizeObserver.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useLatest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useLatest/useLatest.ts");const useResizeObserver=(element,callback,options)=>{const latestCallback=(0,_useLatest__WEBPACK_IMPORTED_MODULE_1__.d)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(element.current){const resizeObserver=new ResizeObserver((entries=>{latestCallback.current(entries)}));return resizeObserver.observe(element.current,options),()=>{resizeObserver.disconnect()}}}),[element.current])}},"./src/icons/IconBreadcrumbArrowRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>IconBreadcrumbArrowRight});var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SvgIcon/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconBreadcrumbArrowRight=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{size:"24px",viewBox:"0 0 24 24",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 8L14 12L10 16",stroke:"currentColor",strokeWidth:"1.5"})});IconBreadcrumbArrowRight.__docgenInfo={description:"",methods:[],displayName:"IconBreadcrumbArrowRight",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the svg element. */\n  svg: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"svg",value:{name:"string",required:!0},description:"Styles applied to the svg element."}]}}],raw:"Partial<SvgIconClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},size:{required:!1,tsType:{name:"string"},description:"The width and height of the icon."},width:{required:!1,tsType:{name:"string"},description:"The width of the icon."},height:{required:!1,tsType:{name:"string"},description:"The height of the icon."},container:{required:!1,tsType:{name:"boolean"},description:"If true, allows to set the container size, without resizing the svg element itself."},containerSize:{required:!1,tsType:{name:"string"},description:"The width and height of the icon container."},containerWidth:{required:!1,tsType:{name:"string"},description:"The width of the icon container."},containerHeight:{required:!1,tsType:{name:"string"},description:"The height of the icon container."},title:{required:!1,tsType:{name:"string"},description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent"},ContainerProps:{required:!1,tsType:{name:"DetailedHTMLProps",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"HTMLDivElement"}],raw:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},description:"Props applied to the container element."}}}},"./src/icons/IconDotsHorizontal2W300.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>IconDotsHorizontal2W300});var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SvgIcon/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconDotsHorizontal2W300=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{size:"24px",viewBox:"0 0 24 24",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M6.5 10.5C5.675 10.5 5 11.175 5 12C5 12.825 5.675 13.5 6.5 13.5C7.325 13.5 8 12.825 8 12C8 11.175 7.325 10.5 6.5 10.5ZM17.5 10.5C16.675 10.5 16 11.175 16 12C16 12.825 16.675 13.5 17.5 13.5C18.325 13.5 19 12.825 19 12C19 11.175 18.325 10.5 17.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z",fill:"currentColor"})});IconDotsHorizontal2W300.__docgenInfo={description:"",methods:[],displayName:"IconDotsHorizontal2W300",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the svg element. */\n  svg: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"svg",value:{name:"string",required:!0},description:"Styles applied to the svg element."}]}}],raw:"Partial<SvgIconClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},size:{required:!1,tsType:{name:"string"},description:"The width and height of the icon."},width:{required:!1,tsType:{name:"string"},description:"The width of the icon."},height:{required:!1,tsType:{name:"string"},description:"The height of the icon."},container:{required:!1,tsType:{name:"boolean"},description:"If true, allows to set the container size, without resizing the svg element itself."},containerSize:{required:!1,tsType:{name:"string"},description:"The width and height of the icon container."},containerWidth:{required:!1,tsType:{name:"string"},description:"The width of the icon container."},containerHeight:{required:!1,tsType:{name:"string"},description:"The height of the icon container."},title:{required:!1,tsType:{name:"string"},description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent"},ContainerProps:{required:!1,tsType:{name:"DetailedHTMLProps",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},{name:"HTMLDivElement"}],raw:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},description:"Props applied to the container element."}}}},"./src/components/Breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,DemoBase:()=>DemoBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");function getBreadcrumbsUtilityClass(slot){return(0,generateUtilityClass.Z)("ESBreadcrumbs",slot)}const breadcrumbsClasses=(0,generateUtilityClasses.Z)("ESBreadcrumbs",["root","list","buttonMore","menu","menuItem","tooltip"]);function getBreadcrumbUtilityClass(slot){return(0,generateUtilityClass.Z)("ESBreadcrumb",slot)}const breadcrumbClasses=(0,generateUtilityClasses.Z)("ESBreadcrumb",["root","content","separator","tooltip"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),tooltipClasses=__webpack_require__("./node_modules/@mui/material/Tooltip/tooltipClasses.js"),buttonBaseClasses=__webpack_require__("./node_modules/@mui/material/ButtonBase/buttonBaseClasses.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),IconBreadcrumbArrowRight=__webpack_require__("./src/icons/IconBreadcrumbArrowRight.tsx"),SvgIcon_classes=__webpack_require__("./src/components/SvgIcon/SvgIcon.classes.ts"),TooltipEllipsis=__webpack_require__("./src/components/TooltipEllipsis/TooltipEllipsis.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const BreadcrumbRoot=(0,styled.ZP)(Typography.Z,{name:"ESBreadcrumb",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{disabled,shouldFirstShrink}}=props;return[styles.root,disabled&&styles.disabled,shouldFirstShrink&&styles.shouldFirstShrink]}})((({ownerState})=>({flexShrink:0,display:"flex",alignItems:"center",minWidth:"56px",overflow:"hidden",[`&.${breadcrumbsClasses.buttonMore}`]:{minWidth:"40px"},span:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},...ownerState.shouldFirstShrink&&{"&:first-of-type":{flexShrink:"1",flexGrow:0}},...ownerState.disabled&&{div:{cursor:"not-allowed",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},"&:last-of-type":{minWidth:"40px",flexGrow:1,flexShrink:"1",flexBasis:"0px",[`.${breadcrumbClasses.separator}`]:{display:"none"}}}))),BreadcrumbTooltip=(0,styled.ZP)((({className,...props})=>(0,jsx_runtime.jsx)(TooltipEllipsis.p,{...props,classes:{popper:className}})),{name:"ESBreadcrumb",slot:"Tooltip",overridesResolver:(props,styles)=>styles.tooltip})((()=>({[`&[data-popper-placement*="top"] .${tooltipClasses.Z.tooltip}`]:{marginBottom:"10px !important"},[`&[data-popper-placement*="bottom"] .${tooltipClasses.Z.tooltip}`]:{marginBottom:"10px !important"}}))),BreadcrumbContent=(0,styled.ZP)(Button.Z,{name:"ESBreadcrumb",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme})=>({[`&.${buttonBaseClasses.Z.root}.${breadcrumbClasses.content}`]:{padding:"0 4px",width:"100%",maxWidth:"400px",...theme.mixins.button({background:"transparent",color:theme.palette.monoA.A900,hover:theme.palette.monoA.A50,focus:theme.palette.monoA.A200,active:theme.palette.monoA.A150}),[`&.${buttonBaseClasses.Z.disabled}`]:{color:theme.palette.monoA.A500,pointerEvents:"none"},[`& .${SvgIcon_classes.H.root}`]:{color:theme.palette.monoA.A500},...theme.typography.caption}}))),BreadcrumbSeparator=(0,styled.ZP)("div",{name:"ESBreadcrumb",slot:"Separator",overridesResolver:(props,styles)=>styles.separator})((({theme})=>({display:"flex",alignItems:"center",userSelect:"none",color:theme.palette.monoA.A500,[`& .${SvgIcon_classes.H.root}`]:{width:"16px"}}))),Breadcrumb=inProps=>{const{children,className,sx,style,separator=(0,jsx_runtime.jsx)(IconBreadcrumbArrowRight.$,{container:!0,containerWidth:"16px"}),disabled,position,shouldFirstShrink,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESBreadcrumb"}),ownerState={disabled,shouldFirstShrink,...props},classes=(ownerState=>{const{classes,disabled,shouldFirstShrink}=ownerState,slots={root:["root",disabled&&"disabled",shouldFirstShrink&&"shouldFirstShrink"],content:["content"],separator:["separator"],tooltip:["tooltip"]};return(0,composeClasses.Z)(slots,getBreadcrumbUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(BreadcrumbRoot,{noWrap:!0,align:"center",className:(0,clsx_m.Z)(classes.root,className),component:"li",itemProp:position?"itemListElement":void 0,itemScope:position?"":void 0,itemType:position?"https://schema.org/ListItem":void 0,ownerState,style,sx,children:[(0,jsx_runtime.jsx)(BreadcrumbTooltip,{arrow:!0,disableInteractive:!0,className:(0,clsx_m.Z)(classes.tooltip),placement:"top",title:(0,jsx_runtime.jsx)(Typography.Z,{variant:"caption",children}),...position?{}:{disableHoverListener:!0,disableFocusListener:!0,disableTouchListener:!0},children:({ref,childrenRef})=>(0,jsx_runtime.jsx)("div",{ref,style:{minWidth:0},children:(0,jsx_runtime.jsx)(BreadcrumbContent,{className:(0,clsx_m.Z)(classes.content),color:"monoA",disabled,itemProp:position?"item":void 0,size:"24",...props,children:position?(0,jsx_runtime.jsx)("span",{ref:childrenRef,itemProp:"name",children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})})})}),!!position&&(0,jsx_runtime.jsx)("meta",{content:position,itemProp:"position"}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{className:(0,clsx_m.Z)(classes.separator),children:separator})]})};Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};var react=__webpack_require__("../../node_modules/react/index.js"),paperClasses=__webpack_require__("./node_modules/@mui/material/Paper/paperClasses.js"),Menu=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),menuClasses=__webpack_require__("./node_modules/@mui/material/Menu/menuClasses.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),useEnhancedEffect=__webpack_require__("../../node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js"),useResizeObserver=__webpack_require__("./src/hooks/useResizeObserver/useResizeObserver.ts"),IconDotsHorizontal2W300=__webpack_require__("./src/icons/IconDotsHorizontal2W300.tsx");const BreadcrumbsRoot=(0,styled.ZP)(Typography.Z,{name:"ESBreadcrumbs",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({}))),BreadcrumbsList=(0,styled.ZP)("ol",{name:"ESBreadcrumbs",slot:"List",overridesResolver:(props,styles)=>styles.list})((({theme,ownerState})=>({display:"flex",alignItems:"center",listStyle:"none",padding:0,margin:0,...ownerState.open&&{[`.${breadcrumbsClasses.buttonMore}`]:{[`.${buttonBaseClasses.Z.root}.${breadcrumbClasses.content}`]:{backgroundColor:theme.palette.monoA.A50}}}}))),BreadcrumbsMenu=(0,styled.ZP)(Menu.Z,{name:"ESBreadcrumbs",slot:"Menu",overridesResolver:(props,styles)=>styles.menu})((()=>({[`& .${menuClasses.Z.list}`]:{padding:"4px 0",maxWidth:"240px"},[`.${paperClasses.Z.root}`]:{marginTop:"4px"}}))),BreadcrumbsTooltip=(0,styled.ZP)((({className,...props})=>(0,jsx_runtime.jsx)(TooltipEllipsis.p,{...props,classes:{popper:className}})),{name:"ESBreadcrumbs",slot:"Tooltip",overridesResolver:(props,styles)=>styles.tooltip})((()=>({[`&[data-popper-placement*="left"] .${tooltipClasses.Z.tooltip}`]:{marginLeft:"10px !important"},[`&[data-popper-placement*="right"] .${tooltipClasses.Z.tooltip}`]:{marginRight:"10px !important"}}))),BreadcrumbsMenuItem=(0,styled.ZP)(MenuItem.Z,{name:"ESBreadcrumbs",slot:"MenuItem",overridesResolver:(props,styles)=>styles.menuItem})((({theme})=>({minHeight:"32px",padding:"8px 12px",width:"100%",...theme.typography.caption}))),Breadcrumbs=inProps=>{const{children,className,iconButtonMore=(0,jsx_runtime.jsx)(IconDotsHorizontal2W300.N,{}),labelButtonMore,sx,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESBreadcrumbs"}),[lastIndex,setLastIndex]=(0,react.useState)(react.Children.count(children)-1);(0,useEnhancedEffect.Z)((()=>{setLastIndex(0)}),[]);const[anchorEl,setAnchorEl]=(0,react.useState)(null),open=Boolean(anchorEl),ref=(0,react.useRef)(null),onOpenMenu=event=>{setAnchorEl(event.currentTarget)},onCloseMenu=()=>{setAnchorEl(null)};(0,useResizeObserver.y)(ref,(()=>{if("undefined"!=typeof window&&ref.current){let width=0;const nodes=ref.current.querySelectorAll(`.${breadcrumbClasses.root}:not(.${breadcrumbsClasses.buttonMore})`),button=ref.current.querySelector(`.${breadcrumbsClasses.buttonMore}`);nodes.forEach((item=>{item.style.display="flex",width+=item.offsetWidth})),width>ref.current.offsetWidth&&(width+=button.offsetWidth);let i=1;for(;width>ref.current.offsetWidth&&i<nodes.length-1;)width-=nodes[i].offsetWidth,i++;for(let j=1;j<i;j++)nodes[j].style.display="none";onCloseMenu(),setLastIndex(i)}}));const ownerState={open,...props},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],list:["list"],buttonMore:["buttonMore"],menu:["menu"],menuItem:["menuItem"],tooltip:["tooltip"]},getBreadcrumbsUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(BreadcrumbsRoot,{className:(0,clsx_m.Z)(classes.root,className),component:"nav",sx,...props,children:[(0,jsx_runtime.jsx)(BreadcrumbsList,{ref,itemScope:!0,className:(0,clsx_m.Z)(classes.list),itemType:"https://schema.org/BreadcrumbList",ownerState,children:react.Children.map(children,((child,idx)=>{if(!(0,react.isValidElement)(child))return null;const item=(0,react.cloneElement)(child,{position:(idx+1).toString(),shouldFirstShrink:lastIndex>=react.Children.count(children)-1,style:{display:idx>0&&idx<lastIndex?"none":"flex"}});return(0,jsx_runtime.jsxs)(react.Fragment,{children:[item,0===idx&&(0,jsx_runtime.jsx)(Breadcrumb,{"aria-label":labelButtonMore,className:(0,clsx_m.Z)(classes.buttonMore),style:{display:lastIndex>1?"flex":"none"},onClick:onOpenMenu,children:iconButtonMore})]},idx)}))}),(0,jsx_runtime.jsx)(BreadcrumbsMenu,{anchorEl,className:(0,clsx_m.Z)(classes.menu),open,onClose:onCloseMenu,children:react.Children.map(children,((child,idx)=>{if(!(0,react.isValidElement)(child))return null;const{children,...rest}=child.props;return idx>=1&&idx<lastIndex?(0,jsx_runtime.jsx)(BreadcrumbsTooltip,{arrow:!0,disableInteractive:!0,className:(0,clsx_m.Z)(classes.tooltip),title:(0,jsx_runtime.jsx)(Typography.Z,{variant:"caption",children}),children:({ref,childrenRef})=>(0,jsx_runtime.jsx)(BreadcrumbsMenuItem,{ref,className:(0,clsx_m.Z)(classes.menuItem),...rest,children:(0,jsx_runtime.jsx)(Typography.Z,{ref:childrenRef,noWrap:!0,children})})}):null}))})]})};Breadcrumbs.__docgenInfo={description:'Breadcrumbs consist of a list of links that help a user visualize a page\'s location\nwithin the hierarchical structure of a website, and allow navigation up to any of its "ancestors".',methods:[],displayName:"Breadcrumbs",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the list element. */\n  list: string;\n  /** Styles applied to the button element. */\n  buttonMore: string;\n  /** Styles applied to the menu  element. */\n  menu: string;\n  /** Styles applied to the menu item element. */\n  menuItem: string;\n  /** Styles applied to the tooltip element. */\n  tooltip: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"list",value:{name:"string",required:!0},description:"Styles applied to the list element."},{key:"buttonMore",value:{name:"string",required:!0},description:"Styles applied to the button element."},{key:"menu",value:{name:"string",required:!0},description:"Styles applied to the menu  element."},{key:"menuItem",value:{name:"string",required:!0},description:"Styles applied to the menu item element."},{key:"tooltip",value:{name:"string",required:!0},description:"Styles applied to the tooltip element."}]}}],raw:"Partial<BreadcrumbsClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},iconButtonMore:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the button more."},labelButtonMore:{required:!1,tsType:{name:"string"},description:"Text for the button more aria-label."}}};const BREADCRUMBS={en:[{name:"Home"},{name:"Catalog"},{name:"Electronics"},{name:"Tablets"},{name:"Apple"}],ru:[{name:"Главная страница"},{name:"Каталог"},{name:"Электроника"},{name:"Планшеты"},{name:"Apple"}]},Breadcrumbs_stories={tags:["autodocs"],component:Breadcrumbs,parameters:{references:["Breadcrumbs","Breadcrumb"]}},DemoBase={tags:["test-only"],render:(_args,context)=>{const locale=context.globals.locale||"en";return(0,jsx_runtime.jsxs)(Breadcrumbs,{children:[BREADCRUMBS[locale].map((item=>(0,jsx_runtime.jsx)(Breadcrumb,{component:"button",onClick:()=>console.info(item.name),children:item.name},item.name))),(0,jsx_runtime.jsx)(Breadcrumb,{disabled:!0,children:"iPad Pro"})]})}},Demo={render:(args,context)=>(0,jsx_runtime.jsxs)(Box.Z,{sx:{padding:"25px 0"},children:[DemoBase.render?.(args,context)," "]})};DemoBase.parameters={...DemoBase.parameters,docs:{...DemoBase.parameters?.docs,source:{originalSource:"{\n  tags: ['test-only'],\n  render: (_args, context) => {\n    const locale = ((context.globals.locale || 'en') as 'en' | 'ru');\n    return <Breadcrumbs>\n        {BREADCRUMBS[locale].map(item => <Breadcrumb key={item.name} component=\"button\" onClick={() => console.info(item.name)}>\n            {item.name}\n          </Breadcrumb>)}\n\n        <Breadcrumb disabled>iPad Pro</Breadcrumb>\n      </Breadcrumbs>;\n  }\n}",...DemoBase.parameters?.docs?.source}}},Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    return <Box sx={{\n      padding: '25px 0'\n    }}>{DemoBase.render?.(args, context)} </Box>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["DemoBase","Demo"]}}]);