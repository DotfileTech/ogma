"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[519],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8587:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(2245),o=r(5903),a=(r(9496),r(9613)),s=["components"],i={id:"mqtt",title:"Platform MQTT"},l="@ogma/platform-mqtt",p={unversionedId:"nestjs/rpc/mqtt",id:"nestjs/rpc/mqtt",isDocsHomePage:!1,title:"Platform MQTT",description:"The MqttParser parser for the OgmaInterceptor. This plugin class parses MQTT request and response object to be able to successfully log the data about the request. For more information, check out the @ogma/nestjs-module documentation.",source:"@site/docs/nestjs/rpc/mqtt.md",sourceDirName:"nestjs/rpc",slug:"/nestjs/rpc/mqtt",permalink:"/docs/nestjs/rpc/mqtt",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/rpc/mqtt.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1645669882,formattedLastUpdatedAt:"2/24/2022",frontMatter:{id:"mqtt",title:"Platform MQTT"},sidebar:"mySidebar",previous:{title:"Platform Kafka",permalink:"/docs/nestjs/rpc/kafka"},next:{title:"Platform Nats",permalink:"/docs/nestjs/rpc/nats"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ogmaplatform-mqtt"},"@ogma/platform-mqtt"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MqttParser")," parser for the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor"),". This plugin class parses MQTT request and response object to be able to successfully log the data about the request. For more information, check out the ",(0,a.kt)("a",{parentName:"p",href:"../module"},"@ogma/nestjs-module")," documentation."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Nothing special, standard ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i @ogma/platform-mqtt")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @ogma/platform-mqtt")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This plugin is to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaInterceptorOptions")," portion of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaModule")," during ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"forRootAsync")," registration. It can be used like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module(\n  OgmaModule.forRoot({\n    interceptor: {\n      rpc: MqttParser\n    }\n  })\n)\nexport class AppModule {}\n")))}u.isMDXComponent=!0}}]);