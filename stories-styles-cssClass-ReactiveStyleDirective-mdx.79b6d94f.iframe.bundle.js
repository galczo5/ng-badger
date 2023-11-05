/*! For license information please see stories-styles-cssClass-ReactiveStyleDirective-mdx.79b6d94f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkng_badger_app=self.webpackChunkng_badger_app||[]).push([[603],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/styles/cssClass/ReactiveStyleDirective.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_kamil_Dev_ng_badger_app_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({pre:"pre",code:"code",h1:"h1",p:"p",h2:"h2"},(0,_Users_kamil_Dev_ng_badger_app_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Styles / Style / ReactiveStyleDirective"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import {ReactiveStyleDirective} from 'ng-badger';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Much like its counterpart, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveStyleDirective"})," upholds the values of reactivity and maintainability within Angular applications. It taps into the core functionality of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hostStyles"})," function, ensuring that developers can embrace the principles of reactive programming not just for class manipulation but also for styling. This is a significant departure from the traditional approach of imperative styling in Angular, offering a more descriptive, efficient, and expressive way to work with styles that aligns with the dynamic nature of web applications."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"achieving-the-same-advantages-now-for-styling",children:"Achieving the Same Advantages: Now for Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveStyleDirective"})," mirrors the key advantages and reactivity enhancements offered by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveClassDirective"}),", but it extends these benefits to styling. It empowers developers to streamline the management of styling in Angular components while reducing the need for imperative code. By defining styling streams using this directive, changes to these streams automatically propagate to your component's styling, creating a more efficient and responsive user interface."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"reactivity-beyond-styling-comprehensive-solution",children:"Reactivity Beyond Styling: Comprehensive Solution"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["With the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveStyleDirective"}),", reactivity extends to every aspect of your Angular application, including styling. This holistic approach fosters not just enhanced user experiences but also more maintainable codebases. The directive provides the means to ensure that your application's styling remains in sync with changes in data and user interactions, all while adhering to the principles of reactive programming."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In the chapters that follow, we will delve into the capabilities and practical usage of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveStyleDirective"}),". We will explore how this directive can be effectively employed in your Angular applications, offering a powerful new way to infuse reactivity into your styling code while maintaining clarity, performance, and maintainability. Whether you're a seasoned Angular developer or just beginning your journey, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveStyleDirective"})," is your ticket to creating responsive, efficient, and maintainable Angular components, where styling is as dynamic as the rest of your application."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:'import {Component, NgZone, ViewEncapsulation} from "@angular/core";\nimport {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";\nimport {ReactiveStyleDirective, StylesProperty} from "ng-badger";\nimport {interval, map, Observable} from "rxjs";\n\n@Component({\n    selector: \'app-example\',\n    template: `\n        <app-example-text [reactiveStyle]="classes$"/>\n    `,\n    imports: [\n        ExampleTextComponent,\n        ReactiveStyleDirective\n    ],\n    encapsulation: ViewEncapsulation.None,\n    standalone: true\n})\nexport class ZonelessExampleComponent {\n    classes$!: Observable<StylesProperty>;\n\n    constructor(ngZone: NgZone) {\n        ngZone.runOutsideAngular(() => {\n            this.classes$ = interval(1000)\n                .pipe(\n                    map(i => i % 2 ? {color: \'red\'} : {color: \'blue\'})\n                )\n        });\n    }\n}\n'})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_kamil_Dev_ng_badger_app_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);