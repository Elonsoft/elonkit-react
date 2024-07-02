"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[9579],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/documentation/MIGRATION.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const MIGRATIONraw_namespaceObject="# Migration Guide\n\n- [0.10.1 → 0.11.0](#0101--0110)\n  - [Package Name](#package-name)\n  - [CSS Theme Variables](#css-theme-variables)\n  - [Components Replacement](#components-replacement)\n\n## 0.10.1 → 0.11.0\n\n### Package Name\n\nPackage name is changed from `@elonkit/react` to `@esfront/react`.\n\n### CSS Theme Variables\n\nWe migrated our components and `createTheme` function to support\n[css theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/).\n\nIf your call of `createTheme` looks like this:\n\n```ts\nconst theme = createTheme(\n  {\n    palette: {\n      ...palettes.common,\n      ...palettes.light,\n    },\n  },\n  { ...ruRU, ru }\n);\n```\n\nPlease migrate it to look like this instead:\n\n```ts\nconst theme = createTheme(\n  {\n    paletteLight: {\n      ...palettes.common,\n      ...palettes.light,\n    },\n  },\n  { ...ruRU, ru }\n);\n```\n\nThen you need to replace all occurrences of `theme.palette` with `theme.vars.palette` throughout your project.\n\n### Components Replacement\n\nFollowing components from `@mui/material` have been reimplemented or copied and extended for our needs:\n\n- `ButtonBase`\n- `Button`\n- `ListItem`\n- `MenuItem`\n- `SwitchBase`\n- `Checkbox`\n- `Radio`\n- `Avatar`\n- `Badge`\n- `LinearProgress`\n\nIf you are using any of this components, please import them from `@esfront/react` instead of `@mui/material`. Some\nbreaking changes expected to occur.\n\nIf you are using our `@esfront/eslint-config` config you'll notice forbidden import errors which will help you to locate\nsuch imports to replace.\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Discover More/MIGRATION"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:MIGRATIONraw_namespaceObject})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}}}]);