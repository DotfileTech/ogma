"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[847],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9625:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(2245),o=r(5903),a=(r(9496),r(9613)),p=["components"],c={id:"grpc",title:"Platform gRPC"},i="@ogma/platform-grpc",l={unversionedId:"nestjs/rpc/grpc",id:"nestjs/rpc/grpc",isDocsHomePage:!1,title:"Platform gRPC",description:"The GrpcParser parser for the OgmaInterceptor. This plugin class parses gRPC request and response object to be able to successfully log the data about the request. For more information, check out the @ogma/nestjs-module documentation.",source:"@site/docs/nestjs/rpc/grpc.md",sourceDirName:"nestjs/rpc",slug:"/nestjs/rpc/grpc",permalink:"/docs/nestjs/rpc/grpc",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/rpc/grpc.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1645669882,formattedLastUpdatedAt:"2/24/2022",frontMatter:{id:"grpc",title:"Platform gRPC"},sidebar:"mySidebar",previous:{title:"RPC Overview",permalink:"/docs/nestjs/rpc/overview"},next:{title:"Platform Kafka",permalink:"/docs/nestjs/rpc/kafka"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ogmaplatform-grpc"},"@ogma/platform-grpc"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GrpcParser")," parser for the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor"),". This plugin class parses gRPC request and response object to be able to successfully log the data about the request. For more information, check out the ",(0,a.kt)("a",{parentName:"p",href:"../module"},"@ogma/nestjs-module")," documentation."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Nothing special, standard ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i @ogma/platform-grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @ogma/platform-grpc")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This plugin is to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaInterceptorOptions")," portion of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaModule")," during ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"forRootAsync")," registration. It can be used like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module(\n  OgmaModule.forRoot({\n    interceptor: {\n      rpc: GrpcParser\n  })\n)\nexport class AppModule {}\n")))}m.isMDXComponent=!0}}]);