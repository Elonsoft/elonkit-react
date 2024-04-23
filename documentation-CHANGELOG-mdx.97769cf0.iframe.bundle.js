"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[1494],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/documentation/CHANGELOG.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOGraw_namespaceObject="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## 0.10.0 (2024-04-23)\n\n\n### ⚠ BREAKING CHANGES\n\n* **SFSButton:** combine button styles\n* **SortingMenu:** add new component\n\n### Features\n\n* **AlertTitle:** change color ([774a109](https://github.com/Elonsoft/elonkit-react/commit/774a109d74023671c52c8543748dc08fb955f1f2))\n* **DialogStack:** add history override ([e6b38ff](https://github.com/Elonsoft/elonkit-react/commit/e6b38ff9930e34d531886208e92a40882e40da09))\n* **ErrorPage:** add new component ([a9fca4c](https://github.com/Elonsoft/elonkit-react/commit/a9fca4cf2d9d4787474116df634f0cce3b6af2ad))\n* **MadeBy:** add new component ([8498590](https://github.com/Elonsoft/elonkit-react/commit/84985906aafcebf98201a7f22d839e0a1e14643b))\n* **SidebarItem:** improve hover behaviour for keyboard navigation ([1a532da](https://github.com/Elonsoft/elonkit-react/commit/1a532dad4b6a744aacbdf4dbd08cb05fe98b5489))\n* **SidebarToggle:** change label text ([901d0a0](https://github.com/Elonsoft/elonkit-react/commit/901d0a0114029e63b80de2514c39cc8a71bbd0a7))\n* **SortingMenu:** add new component ([99bb597](https://github.com/Elonsoft/elonkit-react/commit/99bb5973d6567702e7492615d663527497c2e96c))\n* **Switch:** add large size ([64bc0da](https://github.com/Elonsoft/elonkit-react/commit/64bc0da783408662df23f6e7b6c3aa37c5ca5419))\n\n\n### Bug Fixes\n\n* **AutocompleteMenu:** change ClickAwayListener mouseEvent ([031fee9](https://github.com/Elonsoft/elonkit-react/commit/031fee98f3500b2e2cd5716e22e215048ebb529d))\n* **SidebarItem:** prevent divider focus ([21d98ba](https://github.com/Elonsoft/elonkit-react/commit/21d98ba73ecc403f95cfbfd7bab8038d35afdf56))\n* **TableCell:** disable transition for border-bottom ([4b8b140](https://github.com/Elonsoft/elonkit-react/commit/4b8b140cbbe66bd4008afd4dbbdbdb9a647da066))\n\n\n### Refactor\n\n* **SFSButton:** combine button styles ([0dc9a18](https://github.com/Elonsoft/elonkit-react/commit/0dc9a187788dd2a55892d43af64244cfea0f404e))\n\n\n### 0.9.4 (2024-03-05)\n\n\n### Features\n\n* **Link:** change display type based on icon presence ([dca5175](https://github.com/Elonsoft/elonkit-react/commit/dca5175c13b8f86cf6d0a56a746dce7914280480))\n\n\n### Bug Fixes\n\n* **AutocompleteMenu:** safely pass callbacks from TransitionProps ([d2dce1d](https://github.com/Elonsoft/elonkit-react/commit/d2dce1db035d20bc34eba495705755ae9d61c871))\n\n### 0.9.3 (2024-03-04)\n\n\n### Features\n\n* **PageHGroupHeading:** add tooltip for overflown text ([34ee4f5](https://github.com/Elonsoft/elonkit-react/commit/34ee4f57474fba9c019334ad16520de282cfa252))\n\n\n### [0.9.2](https://github.com/Elonsoft/elonkit-react/compare/v0.9.1...v0.9.2) (2024-02-21)\n\n\n### Features\n\n* **scrollbars:** add color variants ([a474d19](https://github.com/Elonsoft/elonkit-react/commit/a474d19fee1284c7215dd57aaacf42fa8298be2d))\n\n\n### Bug Fixes\n\n* **GallerySwiperImage:** add utility class to image element ([2a594ec](https://github.com/Elonsoft/elonkit-react/commit/2a594ec6744b058bc47ffb61371e81338b7f1a5e))\n* **scrollbars:** disable scrollbar-width for webkit browsers ([b5ea6a7](https://github.com/Elonsoft/elonkit-react/commit/b5ea6a70539f8ea547964b1c66a5a9e157f0f7cf))\n* **Swiper:** update buttons and pagination states on children count change ([2d6df32](https://github.com/Elonsoft/elonkit-react/commit/2d6df32944000777857e2a7a39cde7ef1c0aa470))\n\n### [0.9.1](https://github.com/Elonsoft/elonkit-react/compare/v0.9.0...v0.9.1) (2024-02-19)\n\n\n### Features\n\n* **Gallery:** add fork ref for swiper actions ([e24b080](https://github.com/Elonsoft/elonkit-react/commit/e24b0807027edf1f9e19ce3a3327e6e420d0290e))\n\n## [0.9.0](https://github.com/Elonsoft/elonkit-react/compare/v0.8.13...v0.9.0) (2024-02-16)\n\n\n### ⚠ BREAKING CHANGES\n\n* **AutocompleteMenu:** add new component\n\n### Features\n\n* **AutocompleteMenu:** add new component ([6ff8e89](https://github.com/Elonsoft/elonkit-react/commit/6ff8e89dcc861d5f8b4bba345220e012a9d226bb))\n* **Gallery:** add new component ([f5311c6](https://github.com/Elonsoft/elonkit-react/commit/f5311c6e9afd1e39510e6d84586ab45c0b24daee))\n\n### [0.8.13](https://github.com/Elonsoft/elonkit-react/compare/v0.8.12...v0.8.13) (2024-02-16)\n\n\n### Features\n\n* **FileIconBadge:** increase border radius ([8d424da](https://github.com/Elonsoft/elonkit-react/commit/8d424da21af8adf83354842b765b62a848a8a2dd))\n\n\n### Bug Fixes\n\n* **Calendar:** pass ownerState to styled components ([9e29251](https://github.com/Elonsoft/elonkit-react/commit/9e29251c9605653e86092a9dfa95ad7a4c469cf9))\n* **CalendarButton:** reduce button height ([5dfb3ea](https://github.com/Elonsoft/elonkit-react/commit/5dfb3ea817dc421b667b89524ca02d44c7821f4f))\n* **CalendarButton:** replace of S syntax with subsequent-sibling combinator ([869c492](https://github.com/Elonsoft/elonkit-react/commit/869c492d75e4d969d264831bd0271197bbb6d095))\n* **Sidebar:** correct typos in styled components names ([c0fd0a4](https://github.com/Elonsoft/elonkit-react/commit/c0fd0a4fde2547b5f6cca95b4035ae0533527fdd))\n\n### [0.8.12](https://github.com/Elonsoft/elonkit-react/compare/v0.8.11...v0.8.12) (2024-02-09)\n\n\n### Features\n\n* **Autocomplete:** add inline search ([971e724](https://github.com/Elonsoft/elonkit-react/commit/971e7242c203d2094f79396a2f46b8d0ec1de948))\n* **Calendar:** add new component ([7c5e9ed](https://github.com/Elonsoft/elonkit-react/commit/7c5e9ed2cc2015deaa3017ae98f5727cd7e16fb6))\n\n### [0.8.11](https://github.com/Elonsoft/elonkit-react/compare/v0.8.10...v0.8.11) (2024-01-29)\n\n\n### Features\n\n* **Autocomplete:** add options grouping ([eb1aaba](https://github.com/Elonsoft/elonkit-react/commit/eb1aaba67a16342cd6705b59a1d22bbefdbf329d))\n* **BottomSheet:** add auto height option for snap point ([fff59bc](https://github.com/Elonsoft/elonkit-react/commit/fff59bcc89c511c05c4abfe68968f180d86d1e26))\n* **DialogStack:** add dialog auto close on component unmount ([7452f12](https://github.com/Elonsoft/elonkit-react/commit/7452f12483c64d7267833f305670c865813ca589))\n* **DialogStack:** improve backdrop transition ([aef8a29](https://github.com/Elonsoft/elonkit-react/commit/aef8a29c8f64205e4141447b5f3361aa2a1cf1f8))\n* **Divider:** add new component ([4dd17aa](https://github.com/Elonsoft/elonkit-react/commit/4dd17aa6441625d54e6e6dcdfcabb1dc33c5adff))\n* **EmptyStateCompact:** add new component ([5aaa24f](https://github.com/Elonsoft/elonkit-react/commit/5aaa24f81ba7bd9d98b739ce67f92e89dcbcbf8f))\n* **LoadingButton:** add new component ([e4678bd](https://github.com/Elonsoft/elonkit-react/commit/e4678bd6bfdc0e3fbd28b499dbfaacdd57a0255e))\n* **SvgIcon:** add title prop ([25595ca](https://github.com/Elonsoft/elonkit-react/commit/25595ca9091224574ca2b6b9bd93c700878e0601))\n* **Swiper:** add loop ([cf17a37](https://github.com/Elonsoft/elonkit-react/commit/cf17a377095af96a0d00964cb74cf72bf468fccf))\n\n### [0.8.10](https://github.com/Elonsoft/elonkit-react/compare/v0.8.9...v0.8.10) (2023-12-25)\n\n\n### Features\n\n* **Autocomplete:** use fixed menu width ([6224df7](https://github.com/Elonsoft/elonkit-react/commit/6224df7e8b851143f3e5ba48b3e3d9cdbfdb3268))\n* **useStuckSentinel:** add new hook ([82f4efa](https://github.com/Elonsoft/elonkit-react/commit/82f4efa8b880c410604751137c47045d19b630e0))\n\n\n### Bug Fixes\n\n* **Breadcrumb:** change tooltip reference element ([d9f542c](https://github.com/Elonsoft/elonkit-react/commit/d9f542cf2bd6396c7182d289646c428a093a653e))\n\n### [0.8.9](https://github.com/Elonsoft/elonkit-react/compare/v0.8.8...v0.8.9) (2023-12-11)\n\n\n### Bug Fixes\n\n* **Breadcrumbs:** select nodes inside root element instead of document ([8d26068](https://github.com/Elonsoft/elonkit-react/commit/8d260688d421cfa8ba39a0fdc39deae902ed83d7))\n\n### [0.8.8](https://github.com/Elonsoft/elonkit-react/compare/v0.8.7...v0.8.8) (2023-11-27)\n\n\n### Bug Fixes\n\n* **AutocompleteField:** safely pass callbacks from InputProps to Autocomplete component ([7c1fa99](https://github.com/Elonsoft/elonkit-react/commit/7c1fa9959c75020ff46f42765e3951dc6232580f))\n\n### [0.8.7](https://github.com/Elonsoft/elonkit-react/compare/v0.8.6...v0.8.7) (2023-11-02)\n\n\n### Features\n\n* **AppBar:** add new component ([1eb0654](https://github.com/Elonsoft/elonkit-react/commit/1eb0654124189696f5d314632735bfe3845e311c))\n* **PageHGroup:** add new component ([19f2d11](https://github.com/Elonsoft/elonkit-react/commit/19f2d11bd81f46ddb3fe0b4f894278965f453f26))\n* **TabBar:** add new component ([7bef7e1](https://github.com/Elonsoft/elonkit-react/commit/7bef7e183dc1d04437b2c7f39a2d887cae9224ba))\n\n\n### Bug Fixes\n\n* **TableScrollbar:** increase inner block height ([cc61416](https://github.com/Elonsoft/elonkit-react/commit/cc614162ec25a20952e4ed98adcaccf5345d1118))\n\n### [0.8.6](https://github.com/Elonsoft/elonkit-react/compare/v0.8.5...v0.8.6) (2023-10-12)\n\n\n### Bug Fixes\n\n* **Autocomplete:** improve blur detection ([bc0f2b2](https://github.com/Elonsoft/elonkit-react/commit/bc0f2b20151221e0009484bf98580544f11291cc))\n\n### [0.8.5](https://github.com/Elonsoft/elonkit-react/compare/v0.8.4...v0.8.5) (2023-10-12)\n\n\n### Features\n\n* **Autocomplete:** add support for custom option label and display value ([b28fc68](https://github.com/Elonsoft/elonkit-react/commit/b28fc68b7c0b125fc70154f84155d215d682e312))\n* **EmptyState:** add children container element ([a232d67](https://github.com/Elonsoft/elonkit-react/commit/a232d671b272305a56aa1b94eec6636a9b5d6f89))\n\n### [0.8.4](https://github.com/Elonsoft/elonkit-react/compare/v0.8.3...v0.8.4) (2023-09-15)\n\n\n### Features\n\n* **Autocomplete:** add controlled open state ([442cd9e](https://github.com/Elonsoft/elonkit-react/commit/442cd9eae5ac63da347aadcb93fd6e8bc6b9d4e3))\n* **Autocomplete:** add header prop ([934b71c](https://github.com/Elonsoft/elonkit-react/commit/934b71c77dac6602c8adb34e1577bc25a16dcd3d))\n* **Autocomplete:** add infinite scroll ([59f0140](https://github.com/Elonsoft/elonkit-react/commit/59f01405879a184a0db53bb0dbddf99de30f7043))\n* **Autocomplete:** add search input autoFocus ([ab76da0](https://github.com/Elonsoft/elonkit-react/commit/ab76da03035b4290dafee22c40352036a78d6a89))\n* **AutocompleteField:** add new component ([b27a95e](https://github.com/Elonsoft/elonkit-react/commit/b27a95ed2147a1fcc9e002eeeed2cb537d49ebef))\n* **EmptyState:** add small size variant ([db3aee7](https://github.com/Elonsoft/elonkit-react/commit/db3aee72a67f17523ce22570b80f6b080dc810de))\n\n### [0.8.3](https://github.com/Elonsoft/elonkit-react/compare/v0.8.2...v0.8.3) (2023-09-13)\n\n\n### Features\n\n* **Autocomplete:** add new component ([a0f5593](https://github.com/Elonsoft/elonkit-react/commit/a0f55933d4a2f8fe7293f5c3073d3335e2830c58))\n* **SFSFiltersGroup:** add style overrides for nested inputs ([e6e18e6](https://github.com/Elonsoft/elonkit-react/commit/e6e18e6916a99c1940a25a931b8d4afa7f07aca0))\n\n\n### Bug Fixes\n\n* **OutlinedInput:** add top property for disabled outline ([10cff52](https://github.com/Elonsoft/elonkit-react/commit/10cff524e91328407be8855bc92a5dec5b8a670a))\n\n### [0.8.2](https://github.com/Elonsoft/elonkit-react/compare/v0.8.1...v0.8.2) (2023-09-12)\n\n\n### Features\n\n* **Dialog:** add flex-end alignment ([8c8980b](https://github.com/Elonsoft/elonkit-react/commit/8c8980bc119cd01111d1c60550b03b102a48f0eb))\n* **EmptyState:** add new icon components ([3c61f14](https://github.com/Elonsoft/elonkit-react/commit/3c61f14a006c3c63c986187ffff9f7de4ce89435))\n* **MenuItem:** change focus state ([d0f0856](https://github.com/Elonsoft/elonkit-react/commit/d0f0856548d0e48dc66ef1e0f8ce0e29925c42fc))\n\n\n### Bug Fixes\n\n* **PaginationRange:** use correct overrides resolvers ([feb9395](https://github.com/Elonsoft/elonkit-react/commit/feb93951b6b323c535c73caa6ddc9f33ede7268c))\n\n### [0.8.1](https://github.com/Elonsoft/elonkit-react/compare/v0.8.0...v0.8.1) (2023-09-08)\n\n\n### Features\n\n* **BottomSheet:** add new component ([e7819f5](https://github.com/Elonsoft/elonkit-react/commit/e7819f54158103156a90d2255bd39afd29c7f80c))\n* **SFS:** add render props for filters and sorting buttons ([d784959](https://github.com/Elonsoft/elonkit-react/commit/d7849594a9269f561e24504b7df799ce87f686c7))\n* add memo for table components ([473c4ec](https://github.com/Elonsoft/elonkit-react/commit/473c4ecd0f55006576ddb4dd82e1eb55e2debe15))\n* **Table:** add column pinning ([1b310b9](https://github.com/Elonsoft/elonkit-react/commit/1b310b9d962fdc13b4554e0754c3404be7c9c33e))\n\n\n### Bug Fixes\n\n* **SidebarItem:** pass events to callbacks ([f75fa7f](https://github.com/Elonsoft/elonkit-react/commit/f75fa7fc7b6446fc814240d41ef9b896e4989380))\n\n## [0.8.0](https://github.com/Elonsoft/elonkit-react/compare/v0.7.0...v0.8.0) (2023-09-01)\n\n\n### ⚠ BREAKING CHANGES\n\n* **Table:** change sticky implementation\n\n### Features\n\n* **AudioPlayer:** change menu styles ([6525cac](https://github.com/Elonsoft/elonkit-react/commit/6525cac7c41af7ebae6873531413a3252dd43a05))\n\n\n### Bug Fixes\n\n* **Sidebar:** add missing context exports ([c80878e](https://github.com/Elonsoft/elonkit-react/commit/c80878e9ccb193d5c117f85459e7962bb44e36cf))\n* **SidebarItem:** remove selected styles from first tooltip item ([477be43](https://github.com/Elonsoft/elonkit-react/commit/477be438632dac2f3ca601a5672e30d6df461f55))\n* **Table:** change sticky implementation ([18938ce](https://github.com/Elonsoft/elonkit-react/commit/18938cebd12b5aa1f9b0cd7532359753972f6e90))\n\n## [0.7.0](https://github.com/Elonsoft/elonkit-react/compare/v0.6.5...v0.7.0) (2023-08-21)\n\n\n### ⚠ BREAKING CHANGES\n\n* **SvgIcon:** add new component\n* move background colors to surface palette\n\n### Features\n\n* **SidebarItem:** change tooltip styles ([846c58a](https://github.com/Elonsoft/elonkit-react/commit/846c58abb54054fa386f3aa61c2b58db4cd3821c))\n* **SvgIcon:** add new component ([08b962c](https://github.com/Elonsoft/elonkit-react/commit/08b962cbe3f378b364f2b27a944e567de6a1abae))\n* **TableText:** add tooltip for truncated text ([b3eafc6](https://github.com/Elonsoft/elonkit-react/commit/b3eafc6942b3b4d9de016559dfbd505e87208b2a))\n* **useTableSelection:** add new hook ([25c1b74](https://github.com/Elonsoft/elonkit-react/commit/25c1b74152ade0fdfc7c9b8e3bea0ee78e6ff9d5))\n* move background colors to surface palette ([75b9584](https://github.com/Elonsoft/elonkit-react/commit/75b9584e5d3c81e3ea1682b2343be94f78827f94))\n\n\n### Bug Fixes\n\n* **EmptyState:** change heading and subheading types to ReactNode ([e13913d](https://github.com/Elonsoft/elonkit-react/commit/e13913d1a916adb8fbb7f092729f23d912998286))\n* **SidenavItem:** change item selection ([f556835](https://github.com/Elonsoft/elonkit-react/commit/f55683513ef87070ef7709b83886e646e09fcd83))\n* **Swiper:** add smooth snap after mouse drag ([38ee777](https://github.com/Elonsoft/elonkit-react/commit/38ee7776ba91eff82aa9fae7eaaf2376b220f9bd))\n\n### [0.6.5](https://github.com/Elonsoft/elonkit-react/compare/v0.6.4...v0.6.5) (2023-07-14)\n\n\n### Features\n\n* **DialogActions:** change styles ([c7ffa91](https://github.com/Elonsoft/elonkit-react/commit/c7ffa913454122570f8ca3064e12d710b344e7ba))\n* **PaginationPages:** change button styles ([60353a1](https://github.com/Elonsoft/elonkit-react/commit/60353a19ae695e9ffac4f1b784d8b2d6810a593c))\n* **PasswordField:** add new component ([4902840](https://github.com/Elonsoft/elonkit-react/commit/4902840873a9b8e0ae8d8034ec849245d23aff4d))\n* **Sidebar:** add secondary color ([2c93adf](https://github.com/Elonsoft/elonkit-react/commit/2c93adf8cd800511c2fe315ff1b6e6f8fd690c57))\n* **Swiper:** add options for setActiveSlide method ([b9bc27c](https://github.com/Elonsoft/elonkit-react/commit/b9bc27c2409af134ddb8168fe04916626002d617))\n\n\n### Bug Fixes\n\n* **Breadcrumbs:** add child validity check ([450de1d](https://github.com/Elonsoft/elonkit-react/commit/450de1d58a27d63534634aa76c11e7cb47094d35))\n* **Kbd:** change root element name ([25ddfa7](https://github.com/Elonsoft/elonkit-react/commit/25ddfa708c8534dd94cf28d335338cd955a405df))\n* **Swiper:** add missing context exports ([72eeafa](https://github.com/Elonsoft/elonkit-react/commit/72eeafa3b90014de72d4ffe123479866b9c7ff37))\n* **Swiper:** add snap on resize ([f78d08d](https://github.com/Elonsoft/elonkit-react/commit/f78d08dcf09a32ef83a6b46545a8807e51e6e4cb))\n\n### [0.6.4](https://github.com/Elonsoft/elonkit-react/compare/v0.6.3...v0.6.4) (2023-05-22)\n\n\n### Bug Fixes\n\n* **TextFieldGroup:** fix styleOverrides typing ([3123f73](https://github.com/Elonsoft/elonkit-react/commit/3123f73fa58a51b0731736fbd9ab13edbf7a3dfd))\n\n### [0.6.3](https://github.com/Elonsoft/elonkit-react/compare/v0.6.2...v0.6.3) (2023-05-19)\n\n\n### Features\n\n* **DialogStack:** add new component ([87b7ca8](https://github.com/Elonsoft/elonkit-react/commit/87b7ca8916541c1b088e5f8d31ca27fcdf993c24))\n* **TextFieldGroup:** add new component ([a846f0a](https://github.com/Elonsoft/elonkit-react/commit/a846f0a8aa3f5013a248aad6ebf1f79b103a344c))\n\n\n### Bug Fixes\n\n* **SFSFilters:** add missing styled arg ([34a77c1](https://github.com/Elonsoft/elonkit-react/commit/34a77c1cc3bb272ef0ac359b7f0fb73d805a8922))\n\n### [0.6.2](https://github.com/Elonsoft/elonkit-react/compare/v0.6.1...v0.6.2) (2023-04-14)\n\n\n### Features\n\n* **Button:** add success color ([b7bbe83](https://github.com/Elonsoft/elonkit-react/commit/b7bbe83c31044fa2c3f650bdccbe7d548734b085))\n* **SFSFilters:** add new component ([6833ed2](https://github.com/Elonsoft/elonkit-react/commit/6833ed24f5afe1a581713e776a5f7c7a73bb1319))\n\n\n### Bug Fixes\n\n* add missing mini100 font ([e25b86e](https://github.com/Elonsoft/elonkit-react/commit/e25b86e092cb1e059b7b0342388941e46d94082d))\n\n### [0.6.1](https://github.com/Elonsoft/elonkit-react/compare/v0.6.0...v0.6.1) (2023-03-01)\n\n\n### Features\n\n* **Breadcrumbs:** add new component ([d7bb9f7](https://github.com/Elonsoft/elonkit-react/commit/d7bb9f760e364455c774beb5cab41d58a07d3ac6))\n* **SFS:** add new component ([2fecfc4](https://github.com/Elonsoft/elonkit-react/commit/2fecfc4484c5141ce35f3bcaa5eb9726c1dd10fc))\n\n\n### Bug Fixes\n\n* **MenuItem:** add overridable props ([036a32e](https://github.com/Elonsoft/elonkit-react/commit/036a32e72d17853ce0e9d4ef57631c9d514dc7c2))\n* **Sidebar:** clamp width on resize ([fe075ea](https://github.com/Elonsoft/elonkit-react/commit/fe075eae1b2cc42fc2e650923b3e22e7f7b9c0a3))\n* **SidebarItem:** update chevron styles ([bc16aaa](https://github.com/Elonsoft/elonkit-react/commit/bc16aaa53aee4e6592383436fbc5f03d2074e62c))\n\n## [0.6.0](https://github.com/Elonsoft/elonkit-react/compare/v0.5.0...v0.6.0) (2022-12-07)\n\n\n### ⚠ BREAKING CHANGES\n\n* **Button:** change button colors and sizes\n\n### Features\n\n* **Button:** change button colors and sizes ([c3e6b30](https://github.com/Elonsoft/elonkit-react/commit/c3e6b30033e8008b5392b81b67e04214227f0014))\n* **Sidebar:** add new component ([40a7f61](https://github.com/Elonsoft/elonkit-react/commit/40a7f61b8e968d884f45ee033ca5e1867aa483ee))\n* **Sidenav:** add new component ([e570cbe](https://github.com/Elonsoft/elonkit-react/commit/e570cbe3e67e1036abd37a8a54fce2cb2b95f410))\n\n\n### Bug Fixes\n\n* **Table:** add resize observer for the scrolling ancestor ([82138a1](https://github.com/Elonsoft/elonkit-react/commit/82138a1493aa579a7fdfdcf15fc53b6c5646a1df))\n* **Table:** propagate sx prop ([9c3453e](https://github.com/Elonsoft/elonkit-react/commit/9c3453e4715ade8f81d14b0e2cae296dc9724bd7))\n\n## [0.5.0](https://github.com/Elonsoft/elonkit-react/compare/v0.4.1...v0.5.0) (2022-11-10)\n\n\n### ⚠ BREAKING CHANGES\n\n* change primary and secondary palettes\n* rework theme creation\n* change overlay palette\n* rename mini typography\n\n### Features\n\n* add button and listItem mixins ([e970422](https://github.com/Elonsoft/elonkit-react/commit/e970422635768ce39f8c47b4227e681c117eb6aa))\n* **Alert:** change border radius ([3a152cb](https://github.com/Elonsoft/elonkit-react/commit/3a152cb54a23161fcff944399675e5fcfcca1a56))\n* **Kbd:** update styles ([15cf928](https://github.com/Elonsoft/elonkit-react/commit/15cf9280b89976a7ce0a86dec815787d63c3b64a))\n* **List:** disable hover on touch devices ([ae1766d](https://github.com/Elonsoft/elonkit-react/commit/ae1766dadcf8250c27c9a04b1a067fce52812f13))\n* **Table:** add column resize ([997e6ce](https://github.com/Elonsoft/elonkit-react/commit/997e6ce47632dd111c703b1c1c86eaa13e58bb57))\n* add custom scrollbars styles ([5fc1889](https://github.com/Elonsoft/elonkit-react/commit/5fc1889ef47a3d4cd7ba95f13bdc5dd2202b3693))\n* change overlay palette ([de03158](https://github.com/Elonsoft/elonkit-react/commit/de031583c65e14d5511a19e44bd3ab6527299b25))\n* change primary and secondary palettes ([78485cc](https://github.com/Elonsoft/elonkit-react/commit/78485cc467fa35a82ab2082bb61f04dac28d6a45))\n* rework theme creation ([de4a28b](https://github.com/Elonsoft/elonkit-react/commit/de4a28b892d29482319542c7e8f57276e53e38e9))\n* **AvatarGroup:** add new component ([b434fd9](https://github.com/Elonsoft/elonkit-react/commit/b434fd9c6e72ba51a201819775eba23957c6970b))\n* **Checkbox:** add check state animation ([87da01c](https://github.com/Elonsoft/elonkit-react/commit/87da01c5ea1b44f000e8b6245c97ec31a7a3e3a5))\n* **Radio:** add style overrides ([e90286e](https://github.com/Elonsoft/elonkit-react/commit/e90286e2c1dc70454ce1c4e9b418d79f53a34df1))\n* **Table:** add new component ([227153d](https://github.com/Elonsoft/elonkit-react/commit/227153d537adaa38b8ba212a63b275a9871dc78c))\n* rename mini typography ([a1ba7dc](https://github.com/Elonsoft/elonkit-react/commit/a1ba7dca752c591044696eb6cfd4c402b4d037b6))\n\n\n### Bug Fixes\n\n* **List:** fix ripple effect on safari ([be6be43](https://github.com/Elonsoft/elonkit-react/commit/be6be435944cd7062e1f0ee9c82cb26b860df8bc))\n* add missing ')' in orange color ([e9d7195](https://github.com/Elonsoft/elonkit-react/commit/e9d71955bc34650974d1b756b84677e1939b5bef))\n* replace FC with children prop ([46351ea](https://github.com/Elonsoft/elonkit-react/commit/46351ea0b957ebcc90a25f6279ad94e6d79edf7b))\n* **Dialog:** change paper background color ([d44f1e2](https://github.com/Elonsoft/elonkit-react/commit/d44f1e257323b0544f940e78d3c894e8fe466def))\n\n### [0.4.1](https://github.com/Elonsoft/elonkit-react/compare/v0.4.0...v0.4.1) (2022-05-19)\n\n\n### Features\n\n* **Alert:** add new component ([61baf45](https://github.com/Elonsoft/elonkit-react/commit/61baf454cecb9804cfd7a08db86022556d4fe9f1))\n* **List:** add style overrides ([15a8da0](https://github.com/Elonsoft/elonkit-react/commit/15a8da0e8479a87e47c47879d3a0f7b0d651c3f1))\n* **Switch:** add new component ([8829888](https://github.com/Elonsoft/elonkit-react/commit/8829888918df1f9f6cadcddbfa8a07e6dd73c387))\n* **useBoolean:** add new hook ([4b33007](https://github.com/Elonsoft/elonkit-react/commit/4b33007d166da5414e5f32b583ad1685a7f20bb0))\n* **useCallbackDebounce:** add new hook ([582de6d](https://github.com/Elonsoft/elonkit-react/commit/582de6d1f980688af1497fc000060c52fbbba02c))\n* **useClipboard:** add new hook ([ab480c4](https://github.com/Elonsoft/elonkit-react/commit/ab480c4dd6b5d2be3d3b62dc99ebfef379726ec5))\n* **useCookie:** add new hook ([ca2c1a9](https://github.com/Elonsoft/elonkit-react/commit/ca2c1a9fc6137ed8a5ca1c323387ff6b9ad35a59))\n* **useDebounce:** add new hook ([82b87f1](https://github.com/Elonsoft/elonkit-react/commit/82b87f15e21f6998116a4a765a79b7d6b0c0361f))\n* **useDragOver:** add new hook ([8ac42c6](https://github.com/Elonsoft/elonkit-react/commit/8ac42c6d6a1082dbbb014806352746a6ade990aa))\n* **useForceUpdate:** add new hook ([0cd5e55](https://github.com/Elonsoft/elonkit-react/commit/0cd5e559c2f2a2786168c473d2df3b4e886d7ab1))\n* **useGeolocation:** add new hook ([1ba7741](https://github.com/Elonsoft/elonkit-react/commit/1ba77414b8507e7c87c9d1d10754e4b1a672d168))\n* **useLocalStorage:** add new hook ([85f855f](https://github.com/Elonsoft/elonkit-react/commit/85f855f284dc97eaeb0afe478acb49cb61ef750f))\n* **usePermission:** add new hook ([bcc47ea](https://github.com/Elonsoft/elonkit-react/commit/bcc47eacabfb0cc2c5e3b60183732e302e749868))\n* **useUpdateEffect:** add new hook ([1125e63](https://github.com/Elonsoft/elonkit-react/commit/1125e63db5f9dcfe2410bb4e229a9e7e752395ec))\n* **useValueDebounce:** add new hook ([be7d176](https://github.com/Elonsoft/elonkit-react/commit/be7d1763e1505b927237a39380534e08881d9df6))\n* add new icons ([afd9aac](https://github.com/Elonsoft/elonkit-react/commit/afd9aacd884ace82791526ad7b4761e9f9130713))\n* **useSessionStorage:** add new hook ([85c9699](https://github.com/Elonsoft/elonkit-react/commit/85c9699282e22b2ad7a31d5dbc83b75b46f2d2c0))\n* add missing hues to info, success and warning palettes ([5306c66](https://github.com/Elonsoft/elonkit-react/commit/5306c66e209b40749e644e1049722dbf686f7c40))\n* change alpha, surface and background hues ([177ebcf](https://github.com/Elonsoft/elonkit-react/commit/177ebcf4d203e425ff68dc287251f0cd3e5510b3))\n* change switch hue ([65a2be3](https://github.com/Elonsoft/elonkit-react/commit/65a2be3d2c5300a74967e420227b3f2852b84936))\n\n\n### Bug Fixes\n\n* **AudioPlayer:** close menu on current time slider click ([566b2c6](https://github.com/Elonsoft/elonkit-react/commit/566b2c61fa72fd27e56000a455e5160fa337f769))\n* **Dialog:** add missing types ([976e0cb](https://github.com/Elonsoft/elonkit-react/commit/976e0cb0f706a416e0ba6b67f916abe1493eeeea))\n* **Dialog:** fix close by backdrop click ([89222d4](https://github.com/Elonsoft/elonkit-react/commit/89222d47df182cf48975b364d7dd5a1aac0e4691))\n* **Pagination:** add missing types ([8213e2e](https://github.com/Elonsoft/elonkit-react/commit/8213e2e64f66bf3751b2af99920391c025d5d5d0))\n* **SwiperButton:** increase styles specificity ([8a29d2c](https://github.com/Elonsoft/elonkit-react/commit/8a29d2c2727301f1669342812ca1b4024ceeb9a9))\n\n## [0.4.0](https://github.com/Elonsoft/elonkit-react/compare/v0.3.0...v0.4.0) (2022-03-14)\n\n\n### ⚠ BREAKING CHANGES\n\n* move overlay hues to separate palette\n* **Button:** change size and color props\n* **Swiper:** change interaction with subcomponents\n* add props for icons customization\n\n### Features\n\n* **AudioPlayer:** add new component ([60050d4](https://github.com/Elonsoft/elonkit-react/commit/60050d491938ec87a7803fc47632d36e67342543))\n* **Dialog:** add new component ([8aa01b9](https://github.com/Elonsoft/elonkit-react/commit/8aa01b9b99f5e231e08359596b4c11331010499f))\n* add A25 hues ([f4982dc](https://github.com/Elonsoft/elonkit-react/commit/f4982dc5cf14a6a428d5e263217f34f6f7797652))\n* move overlay hues to separate palette ([587fa10](https://github.com/Elonsoft/elonkit-react/commit/587fa10987fe027340d0b4e9986c93c9fa559453))\n* **Button:** change size and color props ([9134313](https://github.com/Elonsoft/elonkit-react/commit/91343131e80155bf67bfc93ecdf832122463dbb7))\n* **Flags:** add new components ([74d1a7d](https://github.com/Elonsoft/elonkit-react/commit/74d1a7d3decd09ef21a9d0aafc6d92222b2653db))\n* **Pagination:** horizontally center subcomponents on small screen ([da10d5c](https://github.com/Elonsoft/elonkit-react/commit/da10d5cbc678483466bb3e0d70ca416d825d0f36))\n* **Swiper:** change interaction with subcomponents ([87686d4](https://github.com/Elonsoft/elonkit-react/commit/87686d4a35bd9b229aa93eabbcbf3e4b36fe0798))\n* add medium and bold variants for body and caption typography ([313805b](https://github.com/Elonsoft/elonkit-react/commit/313805b66640e0e4380fb8ffa063915ff78e243f))\n* add props for icons customization ([cf2a976](https://github.com/Elonsoft/elonkit-react/commit/cf2a97666893fdc0a2383109a32f6e6d4cd4de9b))\n* **Link:** add new component ([9d9bf08](https://github.com/Elonsoft/elonkit-react/commit/9d9bf08c944fce9d80b47379be4f01af3841a78b))\n* add shadow palette ([ac75b6e](https://github.com/Elonsoft/elonkit-react/commit/ac75b6e33c0704d67a6d7d3b9c632aaa7c0488e1))\n* add sx prop support ([9c2a82c](https://github.com/Elonsoft/elonkit-react/commit/9c2a82c16476d76238e92e4d231d6e0588ee380a))\n\n## [0.3.0](https://github.com/Elonsoft/elonkit-react/compare/v0.2.2...v0.3.0) (2022-01-13)\n\n\n### ⚠ BREAKING CHANGES\n\n* rename surface palette hues\n* upgrade dependencies\n\n### Features\n\n* **Checkbox:** add style overrides ([8e03fe8](https://github.com/Elonsoft/elonkit-react/commit/8e03fe88c10cce5acd1d715113c9be79a3e34bc9))\n* rename surface palette hues ([716e63d](https://github.com/Elonsoft/elonkit-react/commit/716e63dbb75ad86dc2769bddac553c02b9694554))\n* **useOnLine:** add new hook ([4e53ee7](https://github.com/Elonsoft/elonkit-react/commit/4e53ee770fb73b48ebb1e9ae6522cf3db1704845))\n* **useWindowEventListener:** add new hook ([449146b](https://github.com/Elonsoft/elonkit-react/commit/449146b5c9e67e41f0aaf5e63a5b937d4a86e9a3))\n\n\n### Build Changes\n\n* upgrade dependencies ([7814547](https://github.com/Elonsoft/elonkit-react/commit/7814547f11d7930fa72a870e321c2eff39d7ef1d))\n\n### [0.2.2](https://github.com/Elonsoft/elonkit-react/compare/v0.2.1...v0.2.2) (2021-12-03)\n\n\n### Features\n\n* **Pagination:** add new component ([1cda548](https://github.com/Elonsoft/elonkit-react/commit/1cda54895f11cda5837b2f6891e0d7cb3155a665))\n\n\n### Bug Fixes\n\n* **TextField:** make input element to take all of the parent's height ([d15231e](https://github.com/Elonsoft/elonkit-react/commit/d15231e5f11e998ebe2c08bf8d8cb0414c4f0493))\n\n### [0.2.1](https://github.com/Elonsoft/elonkit-react/compare/v0.2.0...v0.2.1) (2021-11-12)\n\n\n### Bug Fixes\n\n* add new palettes to overrides ([19c489a](https://github.com/Elonsoft/elonkit-react/commit/19c489a3b06f16a87ad7de55cf7bc4e0ff8c95c5))\n\n## [0.2.0](https://github.com/Elonsoft/elonkit-react/compare/v0.1.0...v0.2.0) (2021-11-12)\n\n\n### ⚠ BREAKING CHANGES\n\n* add new palettes\n* upgrade dependencies\n\n### Features\n\n* add new palettes ([285d3dc](https://github.com/Elonsoft/elonkit-react/commit/285d3dc168567cb0eb5c2c5d71c0ab18a50bb79f))\n* **Kbd:** add new component ([f9dec1b](https://github.com/Elonsoft/elonkit-react/commit/f9dec1bd635872beffc692ba0ddfe04606510048))\n\n\n### Build Changes\n\n* upgrade dependencies ([34b993c](https://github.com/Elonsoft/elonkit-react/commit/34b993c043407499bb0d7f439c0eab0ad1808c41))\n\n## [0.1.0](https://github.com/Elonsoft/elonkit-react/compare/v0.0.2...v0.1.0) (2021-09-07)\n\n\n### ⚠ BREAKING CHANGES\n\n* upgrade and rename material-ui packages\n\n### Features\n\n* **FileIcon:** add new component ([9a0dc3a](https://github.com/Elonsoft/elonkit-react/commit/9a0dc3afd6ffba36f0f64ca54910ebec66e22dae))\n* **FileInfo:** add new component ([4f0e48c](https://github.com/Elonsoft/elonkit-react/commit/4f0e48cab0e767c22546e26cff6140c1c386b3d4))\n* **FormatDate:** add new component ([b60ab1e](https://github.com/Elonsoft/elonkit-react/commit/b60ab1e3e87c87161f1ccfaa81430a0e78655ce1))\n* **FormatSize:** add new component ([c1aced7](https://github.com/Elonsoft/elonkit-react/commit/c1aced7f0d18f043d583db2daa372c48baa395bc))\n* **Slider:** add style overrides ([7b6ceaa](https://github.com/Elonsoft/elonkit-react/commit/7b6ceaa7544a0c02ade24728b53e9f191a80c0d9))\n* **Spinner:** add new component ([fa251e3](https://github.com/Elonsoft/elonkit-react/commit/fa251e3564cbba049f909d9e3ad6a73d384a6d21))\n* add missing exports for utility classes ([a1bf8e5](https://github.com/Elonsoft/elonkit-react/commit/a1bf8e5af66abc7ff0c334220dfa45fe97a635d5))\n\n\n### Build Changes\n\n* upgrade and rename material-ui packages ([4c888a5](https://github.com/Elonsoft/elonkit-react/commit/4c888a5801c2f49a705041586ecde06b3dce6995))\n\n### [0.0.2](https://github.com/Elonsoft/elonkit-react/compare/v0.0.1...v0.0.2) (2021-08-16)\n\n\n### Bug Fixes\n\n* change useThemeProps imports ([fe6e43c](https://github.com/Elonsoft/elonkit-react/commit/fe6e43c482612690559a593750deb291252c0117))\n\n### 0.0.1 (2021-08-16)\n\n\n### Features\n\n* **TextField:** add style overrides ([4d04792](https://github.com/Elonsoft/elonkit-react/commit/4d047927c43f698c1d293b181fa2f5ac82506741))\n* add ThemeProvider ([39bb32b](https://github.com/Elonsoft/elonkit-react/commit/39bb32b2a7fed12774aa562ddbdf9178a7916e9b))\n* **Button:** add style overrides ([39ce003](https://github.com/Elonsoft/elonkit-react/commit/39ce003c25fbb199f05db3c3499a8fc6a1c2579c))\n* **Dropzone:** add new component ([259719e](https://github.com/Elonsoft/elonkit-react/commit/259719ee05fa3e21d9c604decc5724cae7284272))\n* **EmptyState:** add new component ([64c5ab0](https://github.com/Elonsoft/elonkit-react/commit/64c5ab0c30ee9bad3fa8aa5b3c043737ed6c56d8))\n* **Swiper:** add new component ([0ccbbaf](https://github.com/Elonsoft/elonkit-react/commit/0ccbbafa07771ffc5e763001813419cafe2fdb23))\n* **TableActions:** add new component ([a937c46](https://github.com/Elonsoft/elonkit-react/commit/a937c46e32c98e72d6f1b76f7be565418f41e030))\n* add assets and icons ([497f8df](https://github.com/Elonsoft/elonkit-react/commit/497f8df96d14c8edbf02928d8fb3d1c4689635ce))\n* add breakpoints and typography overrides ([1598964](https://github.com/Elonsoft/elonkit-react/commit/15989649f1af9fffb474972b92338648d1231d6e))\n* add locale support ([16bc83d](https://github.com/Elonsoft/elonkit-react/commit/16bc83d9659d92e1968395e192a301b75f89d59e))\n* add palette override ([a022046](https://github.com/Elonsoft/elonkit-react/commit/a02204614541b82fd06a73c8c1809f913f37c30f))\n* use defaultProps and styleOverrides from theme ([2277651](https://github.com/Elonsoft/elonkit-react/commit/2277651fac45d36eab7ce590107d026a798742df))\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Discover More/CHANGELOG"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}}}]);