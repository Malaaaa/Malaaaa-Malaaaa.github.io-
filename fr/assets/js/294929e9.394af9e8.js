"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Debugging Flutter applications",u={unversionedId:"Flutter/Dartanalysis",id:"Flutter/Dartanalysis",title:"Debugging Flutter applications",description:"Dart Analyzers",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Flutter/Dartanalysis.md",sourceDirName:"Flutter",slug:"/Flutter/Dartanalysis",permalink:"/fr/docs/Flutter/Dartanalysis",editUrl:"https://github.com/Malaaaa/blog-sample/main/docs/Flutter/Dartanalysis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter Learning",permalink:"/fr/docs/Flutter/"},next:{title:"Flutterapp",permalink:"/fr/docs/Flutter/Flutterapp"}},p=[{value:"Dart Analyzers",id:"dart-analyzers",children:[],level:3},{value:"Dart Observatory (statement-level single-step debugger and parser)",id:"dart-observatory-statement-level-single-step-debugger-and-parser",children:[],level:3},{value:"<code>debugger()</code> declaration",id:"debugger-declaration",children:[],level:3},{value:"<code>print</code>\u3001<code>debugPrint</code>\u3001<code>flutter logs</code>",id:"printdebugprintflutter-logs",children:[],level:3},{value:"Debug Mode Assertions",id:"debug-mode-assertions",children:[],level:3},{value:"Debugging application layers",id:"debugging-application-layers",children:[{value:"Widget tree",id:"widget-tree",children:[],level:4},{value:"Rendering tree",id:"rendering-tree",children:[],level:4},{value:"Layer tree",id:"layer-tree",children:[],level:4}],level:3},{value:"Semantics",id:"semantics",children:[],level:3},{value:"Scheduling",id:"scheduling",children:[],level:3},{value:"Visual debugging",id:"visual-debugging",children:[],level:3},{value:"Debugging animations",id:"debugging-animations",children:[],level:3},{value:"Debugging performance issues",id:"debugging-performance-issues",children:[],level:3},{value:"Statistical application startup time",id:"statistical-application-startup-time",children:[],level:3},{value:"Tracking Dart code performance",id:"tracking-dart-code-performance",children:[],level:3}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging-flutter-applications"},"Debugging Flutter applications"),(0,i.kt)("h3",{id:"dart-analyzers"},"Dart Analyzers"),(0,i.kt)("p",null,"Before running your application, run ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter analyze")," to test your code. This tool is a static code checking tool that is a wrapper around the ",(0,i.kt)("inlineCode",{parentName:"p"},"dartanalyzer")," tool and is mainly used to analyze code and help developers find possible errors. For example, the Dart analyzer makes heavy use of type annotations in the code to help track down problems and avoid ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", untyped parameters, untyped list text, etc."),(0,i.kt)("p",null,"If you are using the Flutter plugin for IntelliJ, the parser is automatically enabled when you open the IDE. If the reader is using another IDE, it is highly recommended that the reader enable the Dart parser because most of the time, the Dart parser can find most of the problems before the code runs."),(0,i.kt)("h3",{id:"dart-observatory-statement-level-single-step-debugger-and-parser"},"Dart Observatory (statement-level single-step debugger and parser)"),(0,i.kt)("p",null,"If we start the application using ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter run"),", then when it runs, we can open the web page of Observatory tool, for example Observatory listens to ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:8100/"},"http://127.0.0.1:8100/")," by default and can open the link directly in the browser. Connect to your application directly using the statement-level single-step debugger. If you are using IntelliJ, you can also use its built-in debugger to debug your application."),(0,i.kt)("p",null,"Observatory also supports analysis, heap checking, and more. For more information about Observatory refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://dart-lang.github.io/observatory/"},"Observatory documentation"),"."),(0,i.kt)("p",null,"If you use Observatory for analysis, be sure to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter run")," command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile"),' option to run the application. Otherwise, the main issue that will appear in the profile will be debugging assertions to verify the various invariants of the framework (see "Debugging Mode Assertions" below).'),(0,i.kt)("h3",{id:"debugger-declaration"},(0,i.kt)("inlineCode",{parentName:"h3"},"debugger()")," declaration"),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"debugger()")," statement can be used to insert programmatic breakpoints when using Dart Observatory (or another Dart debugger, such as the debugger in the IntelliJ IDE). To use this, you must add ",(0,i.kt)("inlineCode",{parentName:"p"},"import 'dart:developer';")," to the top of the relevant file."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"debugger()")," statement takes an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," reference."),(0,i.kt)("p",null,"parameter, you can specify that the parameter will only be interrupted when a specific condition is true, as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"void someFunction(double offset) {\n  debugger(when: offset > 30.0);\n  // ...\n}\n")),(0,i.kt)("h3",{id:"printdebugprintflutter-logs"},(0,i.kt)("inlineCode",{parentName:"h3"},"print"),"\u3001",(0,i.kt)("inlineCode",{parentName:"h3"},"debugPrint"),"\u3001",(0,i.kt)("inlineCode",{parentName:"h3"},"flutter logs")),(0,i.kt)("p",null,"The Dart ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," function will output to the system console and you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter logs")," to view it (basically a wrapper ",(0,i.kt)("inlineCode",{parentName:"p"},"adb logcat"),")."),(0,i.kt)("p",null,"If you output too much at once, then Android will sometimes discard some log lines. To avoid this, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/debugPrint.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPrint()"))," from Flutter's ",(0,i.kt)("inlineCode",{parentName:"p"},"foundation")," library. This is a wrapper print that limits the output to a level that avoids being dropped by the Android kernel."),(0,i.kt)("p",null,"Many classes in the Flutter framework have ",(0,i.kt)("inlineCode",{parentName:"p"},"toString")," implementations. By convention, this output usually includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimeType")," single-line output of the object, usually in the form ClassName(more information about this instance...). Some classes used in the tree also have ",(0,i.kt)("inlineCode",{parentName:"p"},"toStringDeep"),", which returns a multi-line description of the entire subtree from that point. Already some classes with detailed information ",(0,i.kt)("inlineCode",{parentName:"p"},"toString")," will implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"toStringShort")," which returns only the type of the object or other very short (one or two word) description."),(0,i.kt)("h3",{id:"debug-mode-assertions"},"Debug Mode Assertions"),(0,i.kt)("p",null,"During Flutter application debugging, the Dart ",(0,i.kt)("inlineCode",{parentName:"p"},"assert")," statement is enabled and used by the Flutter framework to perform a number of runtime checks to verify that some immutable rule is not violated."),(0,i.kt)("p",null,"When an immutable rule is violated, it is reported to the console with some contextual information to help track down the root cause of the problem."),(0,i.kt)("p",null,"To turn off debug mode and use release mode, run your application with ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter run --release"),". This also turns off the Observatory debugger. An intermediate mode that turns off all debugging aids except Observatory is called ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile mode"),", just replace ",(0,i.kt)("inlineCode",{parentName:"p"},"-release")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile"),"."),(0,i.kt)("h3",{id:"debugging-application-layers"},"Debugging application layers"),(0,i.kt)("p",null,"Each layer of the Flutter framework provides the ability to dump (dump) its current state or events to the console (using ",(0,i.kt)("inlineCode",{parentName:"p"},"-debugPrint"),")."),(0,i.kt)("h4",{id:"widget-tree"},"Widget tree"),(0,i.kt)("p",null,"To dump the state of the Widgets tree, call ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/widgets/debugDumpApp.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugDumpApp()")),". You can call this method (after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"runApp()"),") at any time when the application is not in the build phase (i.e., not called within the ",(0,i.kt)("inlineCode",{parentName:"p"},"build()")," method), as long as the application has been built at least once (i.e., at any time after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"build()"),")."),(0,i.kt)("p",null,"For example, this application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(\n    new MaterialApp(\n      home: new AppHome(),\n    ),\n  );\n}\n\nclass AppHome extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new Material(\n      child: new Center(\n        child: new FlatButton(\n          onPressed: () {\n            debugDumpApp();\n          },\n          child: new Text('Dump App'),\n        ),\n      ),\n    );\n  }\n}\n")),(0,i.kt)("p",null,"...will output something like this (the exact details will vary depending on the version of the framework, the size of the device, etc.)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'I/flutter ( 6559): WidgetsFlutterBinding - CHECKED MODE\nI/flutter ( 6559): RenderObjectToWidgetAdapter<RenderBox>([GlobalObjectKey RenderView(497039273)]; renderObject: RenderView)\nI/flutter ( 6559): \u2514MaterialApp(state: _MaterialAppState(1009803148))\nI/flutter ( 6559):  \u2514ScrollConfiguration()\nI/flutter ( 6559):   \u2514AnimatedTheme(duration: 200ms; state: _AnimatedThemeState(543295893; ticker inactive; ThemeDataTween(ThemeData(Brightness.light Color(0xff2196f3) etc...) \u2192 null)))\nI/flutter ( 6559):    \u2514Theme(ThemeData(Brightness.light Color(0xff2196f3) etc...))\nI/flutter ( 6559):     \u2514WidgetsApp([GlobalObjectKey _MaterialAppState(1009803148)]; state: _WidgetsAppState(552902158))\nI/flutter ( 6559):      \u2514CheckedModeBanner()\nI/flutter ( 6559):       \u2514Banner()\nI/flutter ( 6559):        \u2514CustomPaint(renderObject: RenderCustomPaint)\nI/flutter ( 6559):         \u2514DefaultTextStyle(inherit: true; color: Color(0xd0ff0000); family: "monospace"; size: 48.0; weight: 900; decoration: double Color(0xffffff00) TextDecoration.underline)\nI/flutter ( 6559):          \u2514MediaQuery(MediaQueryData(size: Size(411.4, 683.4), devicePixelRatio: 2.625, textScaleFactor: 1.0, padding: EdgeInsets(0.0, 24.0, 0.0, 0.0)))\nI/flutter ( 6559):           \u2514LocaleQuery(null)\nI/flutter ( 6559):            \u2514Title(color: Color(0xff2196f3))\n... \n')),(0,i.kt)("p",null,'This is a "flat" tree showing all the widgets projected by the various build functions (if you call ',(0,i.kt)("inlineCode",{parentName:"p"},"toStringDeepwidget")," at the root of the widget tree, this is the tree you get). You will see many widgets that do not appear in your application source code because they were inserted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"build()")," function of the widget in the framework. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/material/InkFeature-class.html"},(0,i.kt)("inlineCode",{parentName:"a"},"InkFeature"))," is an implementation detail of the Material widget ."),(0,i.kt)("p",null,"When debugDumpApp() is called when the button changes from being pressed to being released, the FlatButton object also calls ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," and marks itself as ",(0,i.kt)("inlineCode",{parentName:"p"},"dirty"),'. That\'s why if you look at the dump, you will see specific objects marked as "dirty". You can also see which gesture listeners have been registered; in this case, a single GestureDetector is listed and listens to the "tap" gesture ("tap" is ',(0,i.kt)("inlineCode",{parentName:"p"},"TapGestureDetector"),"s ",(0,i.kt)("inlineCode",{parentName:"p"},"toStringShort")," function outputs)"),(0,i.kt)("p",null,"If you write your own widget, you can add information by overriding ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/widgets/Widget/debugFillProperties.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugFillProperties()")),". Take the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/DiagnosticsProperty-class.html"},"DiagnosticsProperty")," object as a method parameter and call the parent class method. This function is used by this ",(0,i.kt)("inlineCode",{parentName:"p"},"toString")," method to populate the widget description information."),(0,i.kt)("h4",{id:"rendering-tree"},"Rendering tree"),(0,i.kt)("p",null,"If you try to debug layout issues, the widget tree may not be detailed enough. In this case, you can dump the render tree by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"debugDumpRenderTree()"),". As with ",(0,i.kt)("inlineCode",{parentName:"p"},"debugDumpApp()"),", you can call this function at any time other than during the layout or drawing phase. As a general rule, calling it from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/SchedulerBinding/addPersistentFrameCallback.html"},"frame callback")," or from an event handler is the best solution."),(0,i.kt)("p",null,"To call ",(0,i.kt)("inlineCode",{parentName:"p"},"debugDumpRenderTree()"),", you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"import'package:flutter/rendering.dart';")," to your source file."),(0,i.kt)("p",null,"The output of the small example above is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"I/flutter ( 6559): RenderView\nI/flutter ( 6559):  \u2502 debug mode enabled - android\nI/flutter ( 6559):  \u2502 window size: Size(1080.0, 1794.0) (in physical pixels)\nI/flutter ( 6559):  \u2502 device pixel ratio: 2.625 (physical pixels per logical pixel)\nI/flutter ( 6559):  \u2502 configuration: Size(411.4, 683.4) at 2.625x (in logical pixels)\nI/flutter ( 6559):  \u2502\nI/flutter ( 6559):  \u2514\u2500child: RenderCustomPaint\nI/flutter ( 6559):    \u2502 creator: CustomPaint \u2190 Banner \u2190 CheckedModeBanner \u2190\nI/flutter ( 6559):    \u2502   WidgetsApp-[GlobalObjectKey _MaterialAppState(1009803148)] \u2190\nI/flutter ( 6559):    \u2502   Theme \u2190 AnimatedTheme \u2190 ScrollConfiguration \u2190 MaterialApp \u2190\nI/flutter ( 6559):    \u2502   [root]\nI/flutter ( 6559):    \u2502 parentData: <none>\nI/flutter ( 6559):    \u2502 constraints: BoxConstraints(w=411.4, h=683.4)\nI/flutter ( 6559):    \u2502 size: Size(411.4, 683.4)\n... \n")),(0,i.kt)("p",null,"This is the output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"toStringDeep")," function of the root ",(0,i.kt)("inlineCode",{parentName:"p"},"RenderObject")," object."),(0,i.kt)("p",null,"When debugging layout issues, the key things to look at are the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"constraints")," fields. Constraints are passed down the tree and sizes are passed up."),(0,i.kt)("p",null,"If you write your own rendering objects, you can add the information to the dump by overriding ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/Layer/debugFillProperties.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugFillProperties()")),". Take the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/foundation/DiagnosticsProperty-class.html"},"DiagnosticsProperty")," object as a parameter to the method and call the parent method."),(0,i.kt)("h4",{id:"layer-tree"},"Layer tree"),(0,i.kt)("p",null,"The reader can understand that the rendering tree can be layered, and the final drawing requires composing different layers, while Layer is the layer to be composited when drawing. If you try to debug the composing problem, you can use ","[",(0,i.kt)("inlineCode",{parentName:"p"},"debugDumpLayerTree()"),"]","(",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/"},"https://docs.flutter.io/flutter/")," rendering/debugDumpLayerTree.html). For the above example, it would output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I/flutter : TransformLayer\nI/flutter :  \u2502 creator: [root]\nI/flutter :  \u2502 offset: Offset(0.0, 0.0)\nI/flutter :  \u2502 transform:\nI/flutter :  \u2502   [0] 3.5,0.0,0.0,0.0\nI/flutter :  \u2502   [1] 0.0,3.5,0.0,0.0\nI/flutter :  \u2502   [2] 0.0,0.0,1.0,0.0\nI/flutter :  \u2502   [3] 0.0,0.0,0.0,1.0\nI/flutter :  \u2502\nI/flutter :  \u251c\u2500child 1: OffsetLayer\nI/flutter :  \u2502 \u2502 creator: RepaintBoundary \u2190 _FocusScope \u2190 Semantics \u2190 Focus-[GlobalObjectKey MaterialPageRoute(560156430)] \u2190 _ModalScope-[GlobalKey 328026813] \u2190 _OverlayEntry-[GlobalKey 388965355] \u2190 Stack \u2190 Overlay-[GlobalKey 625702218] \u2190 Navigator-[GlobalObjectKey _MaterialAppState(859106034)] \u2190 Title \u2190 \u22ef\nI/flutter :  \u2502 \u2502 offset: Offset(0.0, 0.0)\nI/flutter :  \u2502 \u2502\nI/flutter :  \u2502 \u2514\u2500child 1: PictureLayer\nI/flutter :  \u2502\nI/flutter :  \u2514\u2500child 2: PictureLayer\n")),(0,i.kt)("p",null,"This is the output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"toStringDeep")," of the root ",(0,i.kt)("inlineCode",{parentName:"p"},"Layer"),"."),(0,i.kt)("p",null,"The root transformation is a transformation that applies a device pixel ratio; in this case, each logical pixel represents 3.5 device pixels."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RepaintBoundary")," widget creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"RenderRepaintBoundary")," in the layer of the render tree. This is used to reduce the amount of repainting required."),(0,i.kt)("h3",{id:"semantics"},"Semantics"),(0,i.kt)("p",null,"You can also call ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugDumpSemanticsTree.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugDumpSemanticsTree()"))," to get a dump of the semantics tree (the tree presented to the system accessibility API). To use this function, you must first enable the helper functions, such as enabling the system helper or ",(0,i.kt)("inlineCode",{parentName:"p"},"SemanticsDebugger")," (discussed below)."),(0,i.kt)("p",null,"For the above example, it will output :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'I/flutter : SemanticsNode(0; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :  \u251cSemanticsNode(1; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :  \u2502 \u2514SemanticsNode(2; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4); canBeTapped)\nI/flutter :  \u2514SemanticsNode(3; Rect.fromLTRB(0.0, 0.0, 411.4, 683.4))\nI/flutter :    \u2514SemanticsNode(4; Rect.fromLTRB(0.0, 0.0, 82.0, 36.0); canBeTapped; "Dump App")\n')),(0,i.kt)("h3",{id:"scheduling"},"Scheduling"),(0,i.kt)("p",null,"To find out where the start/end events occur relative to the frame, you can toggle the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintBeginFrameBanner.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPrintBeginFrameBanner"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintEndFrameBanner.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPrintEndFrameBanner"))," boolean values to print the start and end of the frame to the console."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I/flutter : \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584 Frame 12         30s 437.086ms \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\nI/flutter : Debug print: Am I performing this work more than once per frame?\nI/flutter : Debug print: Am I performing this work more than once per frame?\nI/flutter : \u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/debugPrintScheduleFrameStacks.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPrintScheduleFrameStacks")),"It can also be used to print the call stack that caused the current frame to be dispatched."),(0,i.kt)("h3",{id:"visual-debugging"},"Visual debugging"),(0,i.kt)("p",null,"You can also debug layout issues visually by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"debugPaintSizeEnabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This is a boolean value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"rendering")," library. It can be enabled at any time and affects drawing when it is true. The easiest way to set it is to set it at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"void main()"),"."),(0,i.kt)("p",null,"When it is enabled, all boxes get a bright dark cyan border, padding (from widgets like Padding) is shown in light blue, child widgets have a dark blue box around them, and alignment (from widgets like Center and Align) is shown as a yellow arrow. Blank (e.g. Container without any child nodes) is shown in gray."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPaintBaselinesEnabled.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPaintBaselinesEnabled"))," does something similar, but for objects with baselines, the text baseline is shown in green and ideographic baselines are shown in orange."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/debugPaintPointersEnabled.html"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPaintPointersEnabled"))," flag turns on a special mode where any object being clicked on is highlighted in dark cyan highlighting. This can help you determine if an object is hit-tested in some incorrect way (Flutter detects if the clicked location has a widget that responds to the user's actions), for example, if it is actually out of range of its parent item, it will not be considered for the hit test in the first place."),(0,i.kt)("p",null,"If you are trying to debug a composite layer, for example to determine if and where to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"RepaintBoundary")," widget, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPaintLayerBordersEnabled"))," /debugPaintLayerBordersEnabled.html) flag, which marks the borders of each layer with an orange or outlined line, or use the ","[",(0,i.kt)("inlineCode",{parentName:"p"},"debugRepaintRainbowEnabled"),"]","(",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/"},"https://docs.flutter.io/flutter/")," rendering/debugRepaintRainbowEnabled.html) flag whenever they redraw, which causes the layer to be covered by a set of rotating colors."),(0,i.kt)("p",null,"All these flags only work in debug mode. Normally, anything in the Flutter framework that starts with `",(0,i.kt)("inlineCode",{parentName:"p"},"debug... "),'" will only work in debug mode.'),(0,i.kt)("h3",{id:"debugging-animations"},"Debugging animations"),(0,i.kt)("p",null,"The easiest way to debug animations is to slow them down. To do this, set the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/scheduler/timeDilation.html"},(0,i.kt)("inlineCode",{parentName:"a"},"timeDilation"))," variable (in the scheduler library) to a number greater than 1.0, e.g. 50.0. It is best to set this only once when the application starts once. If you change it on the fly, and especially if you change its value to a smaller value while the animation is running, you may get regressions on observation, which may result in assertion hits, and this usually interferes with our development efforts."),(0,i.kt)("h3",{id:"debugging-performance-issues"},"Debugging performance issues"),(0,i.kt)("p",null,"To understand what causes your application to re-layout or re-draw, you can set ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/"},(0,i.kt)("inlineCode",{parentName:"a"},"debugPrintMarkNeedsLayoutStacks"))," separately debugPrintMarkNeedsLayoutStacks.html) and ","[",(0,i.kt)("inlineCode",{parentName:"p"},"debugPrintMarkNeedsPaintStacks"),"]","(",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.io/flutter/rendering/"},"https://docs.flutter.io/flutter/rendering/")," debugPrintMarkNeedsPaintStacks.html) flags. These log the stack trace to the console whenever the render box is asked to re-layout and repaint. If this method works for you, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"debugPrintStack()")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," library to print the stack trace on demand."),(0,i.kt)("h3",{id:"statistical-application-startup-time"},"Statistical application startup time"),(0,i.kt)("p",null,"To gather detailed information about how long it takes for a Flutter application to start, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"trace-startup")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," options when running ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter run"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter run --trace-startup --profile\n")),(0,i.kt)("p",null,"The trace output is saved as ",(0,i.kt)("inlineCode",{parentName:"p"},"start_up_info.json")," in the Flutter project directory under the build directory. The output lists the time spent from application startup to these trace events (captured in microseconds)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When entering the Flutter engine."),(0,i.kt)("li",{parentName:"ul"},"When displaying the first frame of the application."),(0,i.kt)("li",{parentName:"ul"},"When initializing the Flutter framework."),(0,i.kt)("li",{parentName:"ul"},"When completing the initialization of the Flutter framework.")),(0,i.kt)("p",null,"As :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "engineEnterTimestampMicros": 96025565262,\n  "timeToFirstFrameMicros": 2171978,\n  "timeToFrameworkInitMicros": 514585,\n  "timeAfterFrameworkInitMicros": 1657393\n}\n')),(0,i.kt)("h3",{id:"tracking-dart-code-performance"},"Tracking Dart code performance"),(0,i.kt)("p",null,"To perform a custom performance trace and measure the wall/CPU time of any code segment of Dart (similar to using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/profile/systrace.html"},"systrace")," on Android) Use ",(0,i.kt)("inlineCode",{parentName:"p"},"dart:developer"),"s ",(0,i.kt)("a",{parentName:"p",href:"https://api.dartlang.org/stable/dart-developer/Timeline-class.html"},"Timeline")," tool to include the block of code you want to test, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Timeline.startSync('interesting function');\n// iWonderHowLongThisTakes();\nTimeline.finishSync();\n")),(0,i.kt)("p",null,"Then open your application's Observatory timeline page, select the 'Dart' checkbox in 'Recorded Streams', and perform the function you want to measure."),(0,i.kt)("p",null,"Refreshing the page will display the application's timeline records in chronological order in Chrome's ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/developers/how-tos/trace-event-profiling-tool"},"Tracking Tools"),"."),(0,i.kt)("p",null,"Please make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter run")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-profile")," flag to ensure that the runtime performance characteristics are minimally different from your final product."))}c.isMDXComponent=!0}}]);