"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[740],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||c[g]||r;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7129:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>m});var o=n(2245),a=n(5903),r=(n(9496),n(9613)),i=["components"],s={id:"service",title:"NestJS Service"},l="@ogma/nestjs-module Service",d={unversionedId:"nestjs/service",id:"nestjs/service",isDocsHomePage:!1,title:"NestJS Service",description:"The @ogma/nestjs-module comes with its own decorator to be used with OgmaModule.forFeature(), very similar to @nestjs/typeorm and @nestjs/mongoose. To inject an OgmaService, simply use the @OgmaLogger() decorator and provide the context for the injection. E.g.",source:"@site/docs/nestjs/service.md",sourceDirName:"nestjs",slug:"/nestjs/service",permalink:"/docs/nestjs/service",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/service.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1645669882,formattedLastUpdatedAt:"2/24/2022",frontMatter:{id:"service",title:"NestJS Service"},sidebar:"mySidebar",previous:{title:"NestJS Module",permalink:"/docs/nestjs/module"},next:{title:"NestJS Interceptor",permalink:"/docs/nestjs/interceptor"}},p=[{value:"Request Scoped Logger",id:"request-scoped-logger",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"Meta",id:"meta",children:[],level:3},{value:"error",id:"error",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Replacing Nest&#39;s Logger",id:"replacing-nests-logger",children:[],level:2},{value:"Log and LogAll Decorators",id:"log-and-logall-decorators",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ogmanestjs-module-service"},"@ogma/nestjs-module Service"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@ogma/nestjs-module")," comes with its own decorator to be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaModule.forFeature()"),", very similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/typeorm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/mongoose"),". To inject an ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaService"),", simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OgmaLogger()")," decorator and provide the context for the injection. E.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [OgmaModule.forFeature(FooService)],\n  providers: [FooService]\n})\nexport class FooModule {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class FooService {\n  constructor(\n    @OgmaLogger(FooService) private readonly logger: OgmaService\n  ) {}\n}\n")),(0,r.kt)("p",null,"And as ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaService")," implements Nest's ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerService")," you can simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerService")," type instead in case you want to easily be able to swap out loggers in the future."),(0,r.kt)("h2",{id:"request-scoped-logger"},"Request Scoped Logger"),(0,r.kt)("p",null,"If you are using a request scoped logger, denoted by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"{ addRequestId: true }")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaModule.forFeature()"),", then you'll need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@OgmaLoggerRequestScoped()")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"@OgmaLogger()"),". This is to keep the injection tokens easily separated under the hood."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://docs.nestjs.com/fundamentals/injection-scopes#injection-scopes"},"Please make sure you understand the implications of using a request scoped service!")))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"For the most part, all of the methods for the ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaService")," are the same as using ",(0,r.kt)("inlineCode",{parentName:"p"},"Ogma")," directly, with the exception of being able to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"application")," to the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," parameter."),(0,r.kt)("h3",{id:"meta"},"Meta"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," parameter for all of the logging methods (",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"silly"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),") is an optional parameter where you can pass either a string for a separate context in the log, or an object with additional data defined in any way you would please. This is great for use with log aggregators like ",(0,r.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"DataDog")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.logdna.com/"},"LogDNA"),"."),(0,r.kt)("h3",{id:"error"},"error"),(0,r.kt)("p",null,"You'll also notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," has a slightly different signature than the other logging methods. This is due to keeping in line with Nest's ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerService")," interface. You can decide to pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," as a second parameter and a ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object as the third, or just pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object as the second parameter and Ogma will pass the information on as necessary to the appropriate methods."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"If you end up using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OgmaLogger()")," decorators and dependency injection, then you'll undoubtedly run into the need to mock out the logger during tests. For this, ",(0,r.kt)("inlineCode",{parentName:"p"},"@ogma/nestjs-module")," provides the two token creation methods for you, so all you need to do is provide a mock custom provider like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const modRef = await Test.createTestingModule({\n  providers: [\n    FooService,\n    {\n      provide: createProviderToken(FooService),\n      useValue: {\n        log: jest.fn()\n        // other logger methods that are used\n      }\n    }\n  ]\n}).compile();\n")),(0,r.kt)("h2",{id:"replacing-nests-logger"},"Replacing Nest's Logger"),(0,r.kt)("p",null,"As Nest provides developers the ability to call ",(0,r.kt)("inlineCode",{parentName:"p"},"app.useLogger()")," it's only fair to show how to get the root ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaService")," instance out of the Nest container so it can be set for the entire application. Just like any other DI component, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"app.get()")," to get the root service and pass it to Nest for general use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bootstrap = async () => {\n  const app = await NestFactory.create(AppModule, {\n    bufferLogs: true\n  });\n  const ogma = app.get(OgmaService, { strict: false });\n  app.useLogger(ogma);\n  await app.listen(3000);\n};\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"{ bufferLogs: true }")," was added in Nest v8. For before v8, you can either pass ",(0,r.kt)("inlineCode",{parentName:"p"},"{logger: false}")," or no options object"))),(0,r.kt)("h2",{id:"log-and-logall-decorators"},"Log and LogAll Decorators"),(0,r.kt)("p",null,"As of 3.2.0, ",(0,r.kt)("inlineCode",{parentName:"p"},"@ogma/nestjs-module")," has two new decorators on the scene: ",(0,r.kt)("inlineCode",{parentName:"p"},"@Log()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@LogAll()"),". This decorator will automatically add a method start and method end log to your class methods and add how long the method took to the end message. There is one limitation that should bne kept in mind: these decorators ",(0,r.kt)("strong",{parentName:"p"},"do not"),' work on controller methods, because of how Nest creates the route handlers via a proxy. This should not be too big of a deal however, because the interceptor essentially acts to add the same data, just without the "start" log.'),(0,r.kt)("p",null,"By default, the added code will assume you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," property as a part of the class, however, if you'd like to use a different property you can pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Log()")," decorator."),(0,r.kt)("p",null,"As it can get tedious to add the decorator to every method, there's also the ",(0,r.kt)("inlineCode",{parentName:"p"},"@LogAll()")," decorator which will find your class's methods and apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Log()")," decorator for you. You can customize the logger property the same way with this decorator too."),(0,r.kt)("p",null,"Lastly, the added code by default will log at the ",(0,r.kt)("inlineCode",{parentName:"p"},"fine")," level as this will end up adding a lot of data to your logs and can be considered noisy, but is also useful for tracing down time sinks. If you want to log at a higher level, you can pass a different level to the ",(0,r.kt)("inlineCode",{parentName:"p"},"traceMethod")," option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"OgmaModule.forRoot()")," configuration."))}m.isMDXComponent=!0}}]);