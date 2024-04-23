"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[8179],{"./src/documentation/theming.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Palette:()=>Palette,Typography:()=>theming_stories_Typography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>theming_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PALETTES=["primary","secondary","error","success","info","warning","monoA","monoB","greyscale","surface","common","overlay","black","white","red","brown","orange","yellow","green","marine","sky","blue","violet","purple","pink","teal","grey"],COLOR_IGNORE=["main","light","dark","contrastText","alpha","white","black"],PaletteDemoRoot=(0,styled.ZP)("div")((()=>({display:"grid",gap:4,gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))"}))),PaletteDemoPalette=(0,styled.ZP)(Typography.Z)((({theme})=>({backgroundColor:theme.palette.monoA.A50,borderRadius:2,display:"block",gridColumnEnd:-1,gridColumnStart:1,padding:"8px 16px","&:not(:first-child)":{marginTop:32}}))),PaletteDemoColorName=(0,styled.ZP)(Typography.Z)((({theme})=>({backgroundColor:theme.palette.monoA.A50,borderTopLeftRadius:2,borderTopRightRadius:2,display:"block",padding:"8px 16px"}))),PaletteDemoColorBackground=(0,styled.ZP)("div")((({theme})=>({border:`1px solid ${theme.palette.monoA.A50}`,borderBottomLeftRadius:2,borderBottomRightRadius:2,borderTop:0,padding:16}))),PaletteDemo=()=>{const theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(PaletteDemoRoot,{children:[PALETTES.map((palette=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(PaletteDemoPalette,{variant:"body100",children:(0,jsx_runtime.jsx)("code",{children:palette})}),Object.keys(theme.palette[palette]).filter((color=>!COLOR_IGNORE.includes(color))).map((color=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(PaletteDemoColorName,{variant:"caption",children:(0,jsx_runtime.jsx)("code",{children:color})}),(0,jsx_runtime.jsx)(PaletteDemoColorBackground,{sx:{backgroundColor:theme.palette[palette][color]}})]},color)))]},palette))),(0,jsx_runtime.jsx)(PaletteDemoPalette,{variant:"body100",children:(0,jsx_runtime.jsx)("code",{children:"shadow"})}),Object.keys(theme.palette.shadow).map((direction=>Object.keys(theme.palette.shadow[direction]).map((level=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PaletteDemoColorName,{sx:{boxShadow:theme.palette.shadow[direction][level],margin:"24px",borderRadius:"2px"},variant:"caption",children:(0,jsx_runtime.jsxs)("code",{children:[direction.toUpperCase()," ",level]})})},`${direction}-${level}`)))))]})};PaletteDemo.__docgenInfo={description:"",methods:[],displayName:"PaletteDemo"};var Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),TableHead=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js");const TypographyDemo=()=>(0,jsx_runtime.jsxs)(Table.Z,{children:[(0,jsx_runtime.jsx)(TableHead.Z,{children:(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:"Variant"}),(0,jsx_runtime.jsx)(TableCell.Z,{children:"Display"})]})}),(0,jsx_runtime.jsxs)(TableBody.Z,{children:[(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h1"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h1",children:"Heading 1"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h2"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h2",children:"Heading 2"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h3"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h3",children:"Heading 3"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h4"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h4",children:"Heading 4"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h5"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h5",children:"Heading 5"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"h6"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"h6",children:"Heading 6"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"subtitle1"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"subtitle1",children:"Subtitle 1"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"subtitle2"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"subtitle2",children:"Subtitle 2"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400",children:"Body 400"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400Medium",children:"Body 400 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body400Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body400Bold",children:"Body 400 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300",children:"Body 300"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300Medium",children:"Body 300 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body300Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body300Bold",children:"Body 300 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200",children:"Body 200"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200Medium",children:"Body 200 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body200Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body200Bold",children:"Body 200 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100",children:"Body 100"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100Medium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100Medium",children:"Body 100 | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"body100Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100Bold",children:"Body 100 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini200"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini200",children:"Mini 200"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini100"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini100",children:"Mini 100"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"mini100Bold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"mini100Bold",children:"Mini 100 | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"micro"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"micro",children:"Micro"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"button"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"button",children:"Button"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"caption"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"caption",children:"Caption"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"captionMedium"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"captionMedium",children:"Caption | Medium"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"captionBold"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"captionBold",children:"Caption | Bold"})})]}),(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)("code",{children:"overline"})}),(0,jsx_runtime.jsx)(TableCell.Z,{children:(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"overline",children:"Overline"})})]})]})]});TypographyDemo.__docgenInfo={description:"",methods:[],displayName:"TypographyDemo"};const theming_stories={title:"Getting Started/Theming",parameters:{viewMode:"docs"}},Palette={render:()=>(0,jsx_runtime.jsx)(PaletteDemo,{})},theming_stories_Typography={render:()=>(0,jsx_runtime.jsx)(TypographyDemo,{})};Palette.parameters={...Palette.parameters,docs:{...Palette.parameters?.docs,source:{originalSource:"{\n  render: () => <PaletteDemo />\n}",...Palette.parameters?.docs?.source}}},theming_stories_Typography.parameters={...theming_stories_Typography.parameters,docs:{...theming_stories_Typography.parameters?.docs,source:{originalSource:"{\n  render: () => <TypographyDemo />\n}",...theming_stories_Typography.parameters?.docs?.source}}};const __namedExportsOrder=["Palette","Typography"]}}]);