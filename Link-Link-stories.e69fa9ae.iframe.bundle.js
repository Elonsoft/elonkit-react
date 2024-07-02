"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[8e3],{"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx.Z)(classes.root,className)},other))}))},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.ZP)("ESLink",slot)}const linkClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("ESLink",["root","inherit","underlineNone","underlineHover","underlineAlways","showVisited","startIcon","endIcon","icon","children"]);var composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const LinkRoot=(0,styled.ZP)(Typography.Z,{name:"ESLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{variant,underline,showVisited,startIcon,endIcon}}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(underline||"")}`],"inherit"===variant&&styles.inherit,!!showVisited&&styles.showVisited,!!startIcon&&styles.startIcon,!!endIcon&&styles.endIcon]}})((({theme,ownerState})=>{const color=function getPath(obj,path){return path.split(".").reduce(((acc,item)=>acc&&acc[item]?acc[item]:null),obj)}(theme,`palette.${ownerState.color}`)||ownerState.color;return{position:"relative",display:ownerState.startIcon||ownerState.endIcon?"inline-flex":"inline",alignItems:"baseline",textDecorationLine:"none",color,fontFamily:"inherit",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},..."inherit"===ownerState.variant&&{textDecorationThickness:"inherit"},...!!ownerState.showVisited&&{"&:visited":{color:theme.vars.palette.common.linkVisited}},[`& .${linkClasses.children}`]:{textDecorationStyle:"solid",textDecorationColor:"color-mix(in srgb, currentColor 40%, transparent)",..."always"===ownerState.underline&&{textDecorationLine:"underline"}},"&:hover":{[`& .${linkClasses.children}`]:{..."hover"===ownerState.underline&&{textDecorationLine:"underline"},textDecorationStyle:"solid",textDecorationColor:"inherit"}},"&:focus":{outline:"none"},"&:focus-visible":{"&::after":{content:'""',position:"absolute",top:"-1px",bottom:"-1px",left:ownerState.startIcon?"-1px":"-4px",right:ownerState.endIcon?"-1px":"-4px",border:`2px solid ${theme.vars.palette.monoA.A700}`,zIndex:1},[`& .${linkClasses.children}`]:{textDecorationLine:"none"}},"&:active":{[`& .${linkClasses.children}`]:{textDecorationLine:"none"}},"&:disabled":{color:theme.vars.palette.monoA.A400,cursor:"not-allowed",[`& .${linkClasses.children}`]:{textDecorationLine:"none"}}}})),LinkIcon=(0,styled.ZP)("span",{name:"ESLink",slot:"Icon",overridesResolver:(props,styles)=>styles.icon})((()=>({display:"inline-flex",alignSelf:"center"}))),LinkChildren=(0,styled.ZP)("span",{name:"ESLink",slot:"Children",overridesResolver:(props,styles)=>styles.children})((()=>({textDecorationThickness:"inherit"}))),Link=inProps=>{const{children,className,sx,startIcon,endIcon,variant="inherit",color="common.link",underline="always",showVisited,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESLink"}),ownerState={startIcon,endIcon,variant,color,underline,showVisited,...props},classes=(ownerState=>{const{classes,variant,underline,showVisited,startIcon,endIcon}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline||"")}`,"inherit"===variant&&"inherit",!!showVisited&&"showVisited",!!startIcon&&"startIcon",!!endIcon&&"endIcon"],icon:["icon"],children:["children"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(LinkRoot,{className:(0,clsx_m.Z)(classes.root,className),ownerState,sx,variant,...props,children:[!!startIcon&&(0,jsx_runtime.jsx)(LinkIcon,{className:classes.icon,children:startIcon}),(0,jsx_runtime.jsx)(LinkChildren,{className:classes.children,children}),!!endIcon&&(0,jsx_runtime.jsx)(LinkIcon,{className:classes.icon,children:endIcon})]})};try{Link.displayName="Link",Link.__docgenInfo={description:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles.",displayName:"Link",props:{component:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<LinkClasses> & Partial<ClassNameMap<never>>)"}},color:{defaultValue:{value:"'common.link'"},description:"The color of the link.",name:"color",required:!1,type:{name:"ResponsiveStyleValue<Color | readonly Color[]> | ((theme: Theme) => ResponsiveStyleValue<Color | readonly Color[]>)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},underline:{defaultValue:{value:"'always'"},description:"Controls when the link should have an underline.",name:"underline",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"always"'},{value:'"hover"'}]}},showVisited:{defaultValue:null,description:"Whether the link should show visited state.",name:"showVisited",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'inherit'"},description:"Applies the theme typography styles.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"caption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"inherit"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"overline"'},{value:'"body400"'},{value:'"body400Medium"'},{value:'"body400Bold"'},{value:'"body300"'},{value:'"body300Medium"'},{value:'"body300Bold"'},{value:'"body200"'},{value:'"body200Medium"'},{value:'"body200Bold"'},{value:'"body100"'},{value:'"body100Medium"'},{value:'"body100Bold"'},{value:'"captionMedium"'},{value:'"captionBold"'},{value:'"mini200"'},{value:'"mini100"'},{value:'"mini100Bold"'},{value:'"micro"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SvgIcon/SvgIcon.classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>svgIconClasses,h:()=>getSvgIconUtilityClass});var _mui_material__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.ZP)("ESSvgIcon",slot)}const svgIconClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("ESSvgIcon",["root","svg"])},"./src/components/SvgIcon/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),_SvgIcon_classes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SvgIcon/SvgIcon.classes.ts"),_mui_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SvgIconRoot=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)("div",{name:"ESSvgIcon",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({userSelect:"none",display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",overflow:"hidden"}))),SvgIconSvg=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)("svg",{name:"ESSvgIcon",slot:"Svg",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.svg,!ownerState.container&&styles.root]}})((()=>({userSelect:"none",display:"inline-flex",fill:"none",flexShrink:0}))),SvgIcon=inProps=>{const{children,className,classes:inClasses,sx,size,width,height,container,containerSize,containerWidth,containerHeight,title,ContainerProps,...props}=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)({props:inProps,name:"ESSvgIcon"}),classes=(ownerState=>{const{classes}=ownerState;return(0,_mui_base__WEBPACK_IMPORTED_MODULE_1__.Z)({root:["root"],svg:["svg"]},_SvgIcon_classes__WEBPACK_IMPORTED_MODULE_2__.h,classes)})({classes:inClasses,container}),svg=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SvgIconSvg,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(classes.svg,!container&&[classes.root,className]),focusable:"false",sx:container?void 0:sx,...props,style:{width:width||size,height:height||size,...props.style},children:[children,title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title}):null]});return container?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SvgIconRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(classes.root,className),sx,...ContainerProps,style:{width:containerWidth||containerSize||width||size,height:containerHeight||containerSize||height||size,...ContainerProps?.style},children:svg}):svg};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"Wrapper component for the svg icons.",displayName:"SvgIcon",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SvgIconClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},size:{defaultValue:null,description:"The width and height of the icon.",name:"size",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"The width of the icon.",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"The height of the icon.",name:"height",required:!1,type:{name:"string"}},container:{defaultValue:null,description:"If true, allows to set the container size, without resizing the svg element itself.",name:"container",required:!1,type:{name:"boolean"}},containerSize:{defaultValue:null,description:"The width and height of the icon container.",name:"containerSize",required:!1,type:{name:"string"}},containerWidth:{defaultValue:null,description:"The width of the icon container.",name:"containerWidth",required:!1,type:{name:"string"}},containerHeight:{defaultValue:null,description:"The height of the icon container.",name:"containerHeight",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"title",required:!1,type:{name:"string"}},ContainerProps:{defaultValue:null,description:"Props applied to the container element.",name:"ContainerProps",required:!1,type:{name:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/IconBookmark.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>IconBookmark});var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SvgIcon/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconBookmark=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{size:"24px",viewBox:"0 0 24 24",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{clipRule:"evenodd",d:"M7.5 7.75C7.5 6.7835 8.2835 6 9.25 6H14.75C15.7165 6 16.5 6.7835 16.5 7.75V17.0839C16.5 17.8805 15.5786 18.3233 14.9565 17.8257L12 15.4605L9.04346 17.8257C8.42144 18.3233 7.5 17.8805 7.5 17.0839V7.75ZM9.25 7.5C9.11193 7.5 9 7.61193 9 7.75V15.9395L11.469 13.9643C11.7794 13.716 12.2206 13.716 12.531 13.9643L15 15.9395V7.75C15 7.61193 14.8881 7.5 14.75 7.5H9.25Z",fill:"currentColor",fillRule:"evenodd"})});try{IconBookmark.displayName="IconBookmark",IconBookmark.__docgenInfo={description:"",displayName:"IconBookmark",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SvgIconClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},size:{defaultValue:null,description:"The width and height of the icon.",name:"size",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"The width of the icon.",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"The height of the icon.",name:"height",required:!1,type:{name:"string"}},container:{defaultValue:null,description:"If true, allows to set the container size, without resizing the svg element itself.",name:"container",required:!1,type:{name:"boolean"}},containerSize:{defaultValue:null,description:"The width and height of the icon container.",name:"containerSize",required:!1,type:{name:"string"}},containerWidth:{defaultValue:null,description:"The width of the icon container.",name:"containerWidth",required:!1,type:{name:"string"}},containerHeight:{defaultValue:null,description:"The height of the icon container.",name:"containerHeight",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"title",required:!1,type:{name:"string"}},ContainerProps:{defaultValue:null,description:"Props applied to the container element.",name:"ContainerProps",required:!1,type:{name:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/IconBookmark.tsx#IconBookmark"]={docgenInfo:IconBookmark.__docgenInfo,name:"IconBookmark",path:"src/icons/IconBookmark.tsx#IconBookmark"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alignment:()=>Alignment,Demo:()=>Demo,Typography:()=>Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Link/Link.tsx"),_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icons/IconBookmark.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const getLink=context=>"en"===context.globals.locale?"Link":"Ссылка",getLinkInherit=context=>"en"===context.globals.locale?"Link with inherited color":"Ссылка с унаследованным цветом",getLinkColor=context=>"en"===context.globals.locale?"Link with custom color":"Ссылка с произвольным цветом",getLinkIcon=context=>"en"===context.globals.locale?"Link with the icon":"Ссылка с иконкой",__WEBPACK_DEFAULT_EXPORT__={tags:["autodocs"],component:___WEBPACK_IMPORTED_MODULE_1__.r,parameters:{references:["Link"]},argTypes:{children:{table:{disable:!0}},component:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},color:{table:{disable:!0}},variant:{table:{disable:!0}},underline:{control:{type:"select"}}}},Demo={render:(args,context)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{display:"flex",flexWrap:"wrap",gap:"16px"},variant:"body100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{...args,component:"a",href:"https://google.com",target:"_blank",children:getLink(context)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{...args,color:"inherit",component:"a",href:"https://google.com",target:"_blank",children:getLinkInherit(context)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{...args,color:"secondary.300",component:"a",href:"https://google.com",target:"_blank",children:getLinkColor(context)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{...args,component:"a",endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.B,{container:!0,containerSize:"20px"}),href:"https://google.com",target:"_blank",children:getLinkIcon(context)})]})},Alignment={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{component:"div",variant:"body100",children:["Lorem ipsum dolor sit amet,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{component:"a",endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.B,{container:!0,containerSize:"20px"}),href:"#",target:"_blank",children:"consectetur"})," ","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{component:"a",href:"#",target:"_blank",children:"reprehenderit"})," ","in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{disabled:!0,component:"button",startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.B,{container:!0,containerSize:"20px"}),variant:"body100",children:"non proident"}),", sunt in culpa qui officia deserunt mollit anim id est laborum."]})},Typography={render:(args,context)=>{const text=getLink(context);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"baseline"},children:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body400","body300","body200","body100","mini100","mini200","micro","button","caption","overline"].map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.r,{component:"a",href:"#",target:"_blank",variant,...args,children:[text," ",variant]},variant)))})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: (args, context) => {\n    return <MuiTypography style={{\n      display: \'flex\',\n      flexWrap: \'wrap\',\n      gap: \'16px\'\n    }} variant="body100">\n        <Link {...args} component="a" href="https://google.com" target="_blank">\n          {getLink(context)}\n        </Link>\n        <Link {...args} color="inherit" component="a" href="https://google.com" target="_blank">\n          {getLinkInherit(context)}\n        </Link>\n        <Link {...args} color="secondary.300" component="a" href="https://google.com" target="_blank">\n          {getLinkColor(context)}\n        </Link>\n        <Link {...args} component="a" endIcon={<IconBookmark container containerSize="20px" />} href="https://google.com" target="_blank">\n          {getLinkIcon(context)}\n        </Link>\n      </MuiTypography>;\n  }\n}',...Demo.parameters?.docs?.source}}},Alignment.parameters={...Alignment.parameters,docs:{...Alignment.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <MuiTypography component="div" variant="body100">\n        Lorem ipsum dolor sit amet,{\' \'}\n        <Link component="a" endIcon={<IconBookmark container containerSize="20px" />} href="#" target="_blank">\n          consectetur\n        </Link>{\' \'}\n        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{\' \'}\n        <Link component="a" href="#" target="_blank">\n          reprehenderit\n        </Link>{\' \'}\n        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat{\' \'}\n        <Link disabled component="button" startIcon={<IconBookmark container containerSize="20px" />} variant="body100">\n          non proident\n        </Link>\n        , sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </MuiTypography>;\n  }\n}',...Alignment.parameters?.docs?.source}}},Typography.parameters={...Typography.parameters,docs:{...Typography.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const text = getLink(context);\n    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body400', 'body300', 'body200', 'body100', 'mini100', 'mini200', 'micro', 'button', 'caption', 'overline'];\n    return <div style={{\n      display: 'flex',\n      flexWrap: 'wrap',\n      gap: '8px',\n      alignItems: 'baseline'\n    }}>\n        {variants.map(variant => <Link key={variant} component=\"a\" href=\"#\" target=\"_blank\" variant={(variant as LinkProps['variant'])} {...args}>\n            {text} {variant}\n          </Link>)}\n      </div>;\n  }\n}",...Typography.parameters?.docs?.source}}};const __namedExportsOrder=["Demo","Alignment","Typography"]},"../../node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function __WEBPACK_DEFAULT_EXPORT__(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);