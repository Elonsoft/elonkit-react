"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[5374,8179],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/documentation/theming.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_elonkit_react_elonkit_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_theming_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/documentation/theming.stories.tsx");function _createMdxContent(props){const _components={code:"code",h2:"h2",p:"p",pre:"pre",...(0,_home_runner_work_elonkit_react_elonkit_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_theming_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"palette",children:"Palette"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our design system build upon MUI palette and introduces new colors and hues. Palette can be customized via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," prop\nin ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ThemeProvider"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"import { createTheme, palettes } from '@elonkit/react';\n\nconst theme = createTheme({\n  palette: {\n    ...palettes.common,\n    ...palettes.light\n  }\n});\n\n<ThemeProvider theme={theme}>...</ThemeProvider>;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_theming_stories__WEBPACK_IMPORTED_MODULE_4__.Palette}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"typography",children:"Typography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Typography is based on the guidelines from the Material Design spec and is arranged into typography levels. Each level\nhas a font-size, line-height, font-weight and letter-spacing. Typography can be customized via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"typography"})," key in\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createTheme"})," options."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"// Default typography\nimport { createTypography } from '@elonkit/react';\n\nconst theme = createTheme({\n  palette: {\n    ...palettes.common,\n    ...palettes.light\n  },\n  typography: createTypography\n});\n\n<ThemeProvider theme={theme}>...</ThemeProvider>;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_theming_stories__WEBPACK_IMPORTED_MODULE_4__.Typography})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_elonkit_react_elonkit_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/documentation/theming.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Palette:()=>Palette,Typography:()=>theming_stories_Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>theming_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PALETTES=["primary","secondary","error","success","info","warning","monoA","monoB","greyscale","surface","common","overlay","black","white","red","brown","orange","yellow","green","marine","sky","blue","violet","purple","pink","teal","grey"],COLOR_IGNORE=["main","light","dark","contrastText","alpha","white","black"],PaletteDemoRoot=(0,styled.ZP)("div")((()=>({display:"grid",gap:4,gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))"}))),PaletteDemoPalette=(0,styled.ZP)(Typography.Z)((({theme})=>({backgroundColor:theme.palette.monoA.A50,borderRadius:2,display:"block",gridColumnEnd:-1,gridColumnStart:1,padding:"8px 16px","&:not(:first-child)":{marginTop:32}}))),PaletteDemoColorName=(0,styled.ZP)(Typography.Z)((({theme})=>({backgroundColor:theme.palette.monoA.A50,borderTopLeftRadius:2,borderTopRightRadius:2,display:"block",padding:"8px 16px"}))),PaletteDemoColorBackground=(0,styled.ZP)("div")((({theme})=>({border:`1px solid ${theme.palette.monoA.A50}`,borderBottomLeftRadius:2,borderBottomRightRadius:2,borderTop:0,padding:16}))),PaletteDemo=()=>{const theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(PaletteDemoRoot,{children:[PALETTES.map((palette=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(PaletteDemoPalette,{variant:"body100",children:(0,jsx_runtime.jsx)("code",{children:palette})}),Object.keys(theme.palette[palette]).filter((color=>!COLOR_IGNORE.includes(color))).map((color=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(PaletteDemoColorName,{variant:"caption",children:(0,jsx_runtime.jsx)("code",{children:color})}),(0,jsx_runtime.jsx)(PaletteDemoColorBackground,{sx:{backgroundColor:theme.palette[palette][color]}})]},color)))]},palette))),(0,jsx_runtime.jsx)(PaletteDemoPalette,{variant:"body100",children:(0,jsx_runtime.jsx)("code",{children:"shadow"})}),Object.keys(theme.palette.shadow).map((direction=>Object.keys(theme.palette.shadow[direction]).map((level=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PaletteDemoColorName,{sx:{boxShadow:theme.palette.shadow[direction][level],margin:"24px",borderRadius:"2px"},variant:"caption",children:(0,jsx_runtime.jsxs)("code",{children:[direction.toUpperCase()," ",level]})})},`${direction}-${level}`)))))]})};PaletteDemo.__docgenInfo={description:"",methods:[],displayName:"PaletteDemo"};var Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),TableHead=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js");const TypographyDemo=()=>(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(TableHead.Z,{children:(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:"Variant"}),(0,jsx_runtime.jsx)(TableCell.Z,{children:"Display"})]})}),(0,jsx_runtime.jsxs)(TableBody.Z,{children:[(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h1"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h1",children:"Heading 1"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h2"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h2",children:"Heading 2"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h3"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h3",children:"Heading 3"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h4"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h4",children:"Heading 4"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h5"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h5",children:"Heading 5"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h6"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h6",children:"Heading 6"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"subtitle1"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"subtitle1",children:"Subtitle 1"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"subtitle2"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"subtitle2",children:"Subtitle 2"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400",children:"Body 400"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400Medium",children:"Body 400 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400Bold",children:"Body 400 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300",children:"Body 300"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300Medium",children:"Body 300 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300Bold",children:"Body 300 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200",children:"Body 200"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200Medium",children:"Body 200 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200Bold",children:"Body 200 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100",children:"Body 100"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100Medium",children:"Body 100 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100Bold",children:"Body 100 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini200"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini200",children:"Mini 200"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini100"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini100",children:"Mini 100"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini100Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini100Bold",children:"Mini 100 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"micro"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"micro",children:"Micro"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"button"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"button",children:"Button"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"caption"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"caption",children:"Caption"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"captionMedium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"captionMedium",children:"Caption | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"captionBold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"captionBold",children:"Caption | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"overline"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"overline",children:"Overline"})})]})]})]});TypographyDemo.__docgenInfo={description:"",methods:[],displayName:"TypographyDemo"};const theming_stories={title:"Getting Started/Theming",parameters:{viewMode:"docs"}},Palette={render:()=>(0,jsx_runtime.jsx)(PaletteDemo,{})},theming_stories_Typography={render:()=>(0,jsx_runtime.jsx)(TypographyDemo,{})};Palette.parameters={...Palette.parameters,docs:{...Palette.parameters?.docs,source:{originalSource:"{\n  render: () => <PaletteDemo />\n}",...Palette.parameters?.docs?.source}}},theming_stories_Typography.parameters={...theming_stories_Typography.parameters,docs:{...theming_stories_Typography.parameters?.docs,source:{originalSource:"{\n  render: () => <TypographyDemo />\n}",...theming_stories_Typography.parameters?.docs?.source}}};const __namedExportsOrder=["Palette","Typography"]}}]);