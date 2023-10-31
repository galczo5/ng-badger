(self.webpackChunkng_badger_app=self.webpackChunkng_badger_app||[]).push([[262],{"./src/stories/styles/examples/host-listener.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,ExampleComponent:()=>ExampleComponent,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),projects_ng_badger_src_public_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/ng-badger/src/lib/functions/listener/host-listener.ts"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),_app_github_link_github_link_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/github-link/github-link.component.ts");let ExampleComponent=class ExampleComponent{constructor(){this.event$=(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.T)((0,projects_ng_badger_src_public_api__WEBPACK_IMPORTED_MODULE_2__.p)("mouseenter").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((()=>"Mouse Enter"))),(0,projects_ng_badger_src_public_api__WEBPACK_IMPORTED_MODULE_2__.p)("mouseleave").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((()=>"Mouse Leave"))),(0,projects_ng_badger_src_public_api__WEBPACK_IMPORTED_MODULE_2__.p)("click").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((()=>"Mouse Click"))))}};ExampleComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({selector:"app-example-wrapper",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe,_app_github_link_github_link_component__WEBPACK_IMPORTED_MODULE_0__.E],template:'\n      <app-github-link src="/src/stories/styles/examples/host-listener.stories.ts"/>\n      <div style="padding: 100px; border: 1px dashed black; display: flex; flex-direction: column; justify-content: center; align-items: center;">\n          <p>\n              Move mouse above this box to trigger events\n          </p>\n          <strong>{{ event$ | async }}</strong>\n      </div>\n  '})],ExampleComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Reactivity/Examples/hostListener",component:ExampleComponent},Example={}},"./projects/ng-badger/src/lib/functions/listener/host-listener.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>hostListener,_:()=>zonelessHostListener});var fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs");function hostListener(eventName){const elementRef=(0,core.inject)(core.ElementRef);return function listenerFactory(eventName){return elementRef=>(0,fromEvent.R)(elementRef.nativeElement,eventName)}(eventName)(elementRef)}function zonelessHostListener(eventName){const elementRef=(0,core.inject)(core.ElementRef);return function zonelessListenerFactory(eventName){const ngZone=(0,core.inject)(core.NgZone),destroyRef=(0,core.inject)(core.DestroyRef),result=new Subject.x;return elementRef=>(ngZone.runOutsideAngular((()=>{(0,fromEvent.R)(elementRef.nativeElement,eventName).pipe((0,rxjs_interop.sL)(destroyRef)).subscribe((event=>{result.next(event)}))})),result)}(eventName)(elementRef)}},"./src/app/github-link/github-link.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>GithubLinkComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts_css_ngResource_Users_kamil_Dev_ng_badger_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA_3D_3D_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/github-link/github-link.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA%3D%3D!./src/app/github-link/github-link.component.ts"),_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts_css_ngResource_Users_kamil_Dev_ng_badger_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA_3D_3D_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts_css_ngResource_Users_kamil_Dev_ng_badger_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA_3D_3D_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let GithubLinkComponent=class GithubLinkComponent{constructor(){this.src="",this.base="https://github.com/galczo5/ng-badger/tree/main"}static#_=this.propDecorators={src:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,args:[{required:!0}]}]}};GithubLinkComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-github-link",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:'\n    <a [href]="base + src" class="github-link" target="_blank">\n      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>\n      view in GitHub\n    </a>\n  ',styles:[_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts_css_ngResource_Users_kamil_Dev_ng_badger_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA_3D_3D_Users_kamil_Dev_ng_badger_app_src_app_github_link_github_link_component_ts__WEBPACK_IMPORTED_MODULE_0___default()]})],GithubLinkComponent)},"./src/app/github-link/github-link.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZ2l0aHViLWxpbmsgewogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOwogICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgI2RkZDsKICAgICAgZm9udC1zaXplOiAxZW07CiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07CiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICBnYXA6IDEwcHg7CiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgIGNvbG9yOiBibGFjazsKICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsKICAgICAgdHJhbnNpdGlvbjogYWxsIC4yczsKICAgIH0KCiAgICAuZ2l0aHViLWxpbms6aG92ZXIgewogICAgICBjb2xvcjogaW5kaWdvOwogICAgfQogIA%3D%3D!./src/app/github-link/github-link.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n    .github-link {\n      border: 1px solid #ddd;\n      box-shadow: 0 0 5px 0 #ddd;\n      font-size: 1em;\n      line-height: 1em;\n      display: inline-flex;\n      gap: 10px;\n      padding: 10px 15px;\n      border-radius: 6px;\n      text-decoration: none;\n      color: black;\n      margin-bottom: 25px;\n      transition: all .2s;\n    }\n\n    .github-link:hover {\n      color: indigo;\n    }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);