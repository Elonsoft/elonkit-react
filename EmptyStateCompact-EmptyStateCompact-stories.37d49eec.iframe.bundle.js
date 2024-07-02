"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[2189],{"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx.Z)(classes.root,className)},other))}))},"./src/components/EmptyStateCompact/EmptyStateCompact.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EmptyStateCompact_stories});var clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getEmptyStateUtilityClass(slot){return(0,generateUtilityClass.ZP)("ESEmptyStateCompact",slot)}(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("ESEmptyStateCompact",["root"]);var composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const EmptyStateCompactRoot=(0,styled.ZP)(Typography.Z,{name:"ESEmptyStateCompact",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})((({theme})=>({width:"100%",textAlign:"center",padding:"11px",borderRadius:"6px",border:`1px dashed ${theme.vars.palette.monoA.A300}`,color:theme.vars.palette.monoA.A550}))),EmptyStateCompact=inProps=>{const{children,className,sx,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESEmptyStateCompact"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getEmptyStateUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(EmptyStateCompactRoot,{className:(0,clsx_m.Z)(classes.root,className),component:"div",sx,variant:"caption",children})};try{EmptyStateCompact.displayName="EmptyStateCompact",EmptyStateCompact.__docgenInfo={description:"This component is a placeholder to use on pages without content.",displayName:"EmptyStateCompact",props:{classes:{defaultValue:null,description:"Class applied to the root element.",name:"classes",required:!1,type:{name:"Partial<EmptyStateCompactClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EmptyStateCompact/EmptyStateCompact.tsx#EmptyStateCompact"]={docgenInfo:EmptyStateCompact.__docgenInfo,name:"EmptyStateCompact",path:"src/components/EmptyStateCompact/EmptyStateCompact.tsx#EmptyStateCompact"})}catch(__react_docgen_typescript_loader_error){}const getChildren=(args,context)=>args.children||("en"===context.globals.locale?"There are no entities":"Сущностей нет"),EmptyStateCompact_stories={tags:["autodocs"],component:EmptyStateCompact,parameters:{references:["EmptyStateCompact"]}},Demo={render:(args,context)=>(0,jsx_runtime.jsxs)(EmptyStateCompact,{children:[" ",getChildren(args,context)]})};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    return <EmptyStateCompact> {getChildren(args, context)}</EmptyStateCompact>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"../../node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function __WEBPACK_DEFAULT_EXPORT__(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);