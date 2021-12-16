"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[557],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80426:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="UnoswapRouter",c={unversionedId:"aggregation-protocol/smart-contract/UnoswapRouter",id:"aggregation-protocol/smart-contract/UnoswapRouter",isDocsHomePage:!1,title:"UnoswapRouter",description:"Derives",source:"@site/docs/aggregation-protocol/smart-contract/UnoswapRouter.md",sourceDirName:"aggregation-protocol/smart-contract",slug:"/aggregation-protocol/smart-contract/UnoswapRouter",permalink:"/docs/aggregation-protocol/smart-contract/UnoswapRouter",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/aggregation-protocol/smart-contract/UnoswapRouter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LimitOrderProtocolRFQ",permalink:"/docs/aggregation-protocol/smart-contract/LimitOrderProtocolRFQ"},next:{title:"UnoswapV3Router",permalink:"/docs/aggregation-protocol/smart-contract/UnoswapV3Router"}},s=[{value:"Derives",id:"derives",children:[]},{value:"Functions",id:"functions",children:[{value:"unoswapWithPermit",id:"unoswapwithpermit",children:[]},{value:"unoswap",id:"unoswap",children:[]}]}],m={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unoswaprouter"},"UnoswapRouter"),(0,o.kt)("h2",{id:"derives"},"Derives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/Permitable"},"Permitable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/EthReceiver"},"EthReceiver"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"unoswapwithpermit"},"unoswapWithPermit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function unoswapWithPermit(\n  contract IERC20 srcToken,\n  uint256 amount,\n  uint256 minReturn,\n  bytes32[] pools,\n  bytes permit\n) external returns (uint256 returnAmount)\n")),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"unoswap")," but calls permit first,\nallowing to approve token spending and make a swap in one transaction."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"srcToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Source token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of source tokens to swap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minReturn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimal allowed returnAmount to make transaction commit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pools")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pools chain used for swaps. Pools src and dst tokens should match to make swap happen")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"permit")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Should contain valid permit that can be used in ",(0,o.kt)("inlineCode",{parentName:"td"},"IERC20Permit.permit")," calls. See tests for examples")))),(0,o.kt)("h3",{id:"unoswap"},"unoswap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function unoswap(\n  contract IERC20 srcToken,\n  uint256 amount,\n  uint256 minReturn,\n  bytes32[] pools\n) public returns (uint256 returnAmount)\n")),(0,o.kt)("p",null,"Performs swap using Uniswap exchange. Wraps and unwraps ETH if required.\nSending non-zero ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.value")," for anything but ETH swaps is prohibited"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"srcToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Source token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of source tokens to swap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minReturn")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Minimal allowed returnAmount to make transaction commit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pools")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes32[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pools chain used for swaps. Pools src and dst tokens should match to make swap happen")))))}u.isMDXComponent=!0}}]);