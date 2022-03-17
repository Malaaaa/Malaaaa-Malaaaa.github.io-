"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[105],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],o={},s=void 0,d={unversionedId:"Flutter/Flutterapp",id:"Flutter/Flutterapp",title:"Flutterapp",description:"Structure du code flottant",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Flutter/Flutterapp.md",sourceDirName:"Flutter",slug:"/Flutter/Flutterapp",permalink:"/fr/docs/Flutter/Flutterapp",editUrl:"https://github.com/Malaaaa/blog-sample/tree/main/docs/Flutter/Flutterapp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"D\xe9bogage des applications Flutter",permalink:"/fr/docs/Flutter/Dartanalysis"},next:{title:"Gestion des packages",permalink:"/fr/docs/Flutter/Package"}},u={},p=[{value:"Structure du code flottant",id:"structure-du-code-flottant",level:2},{value:"Cadre de base",id:"cadre-de-base",level:2},{value:"Composant de la page d&#39;accueil",id:"composant-de-la-page-daccueil",level:2},{value:"Classe d&#39;\xe9tat",id:"classe-d\xe9tat",level:3},{value:"Pourquoi mettre la m\xe9thode build dans State et non dans StatefulWidget ?",id:"pourquoi-mettre-la-m\xe9thode-build-dans-state-et-non-dans-statefulwidget-",level:4}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"structure-du-code-flottant"},"Structure du code flottant"),(0,l.kt)("h2",{id:"cadre-de-base"},"Cadre de base"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Importer des packages."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/mat\xe9riel.dart'\xa0;\n")),(0,l.kt)("p",{parentName:"li"},"Cette ligne de code agit comme une importation de la biblioth\xe8que de composants Material UI. ",(0,l.kt)("a",{parentName:"p",href:"https://material.io/guidelines"},"Material")," est un langage de conception visuel standard pour mobile et Web, et Flutter fournit par d\xe9faut un riche ensemble de composants d'interface utilisateur de style Material. 2.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"portail d'applications."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void main() => runApp(MyApp());\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Similaire \xe0 C/C++, Java, la fonction ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," dans l'application Flutter est le point d'entr\xe9e de l'application. La fonction ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," appelle la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"li"},"runApp")," , dont la fonction est de d\xe9marrer l'application Flutter. ",(0,l.kt)("inlineCode",{parentName:"li"},"runApp")," prend un param\xe8tre ",(0,l.kt)("inlineCode",{parentName:"li"},"Widget")," , qui dans ce cas est un objet ",(0,l.kt)("inlineCode",{parentName:"li"},"MyApp")," , et ",(0,l.kt)("inlineCode",{parentName:"li"},"MyApp()")," est le composant racine de l'application Flutter."),(0,l.kt)("li",{parentName:"ul"},"La fonction ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," utilise la notation (",(0,l.kt)("inlineCode",{parentName:"li"},"=>"),"), qui est un raccourci pour une fonction ou une m\xe9thode \xe0 une ligne dans Dart."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Structuration des candidatures."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyApp \xe9tend StatelessWidget {\n  @override\n  Widget build (contexte BuildContext) {\n    return new MaterialApp(\n      //nom de l'application  \n      titre\xa0: 'Flutter Demo', \n      th\xe8me\xa0: new ThemeData(\n        //th\xe8me bleu  \n        primarySwatch\xa0: couleurs. blue,\n      ),\n      //route de la page d'accueil de l'application  \n      home: new MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- La classe `MyApp` repr\xe9sente une application Flutter qui h\xe9rite de la classe `StatelessWidget` , ce qui signifie que l'application elle-m\xeame est \xe9galement un widget.\n\n- Dans Flutter, la plupart des choses sont des widgets (plus tard \"composants\" ou \"widgets\"), y compris l'alignement, le rembourrage, la mise en page, etc., qui sont tous fournis sous la forme de widgets.\n\n- Flutter appelle la m\xe9thode `build` d'un composant lors de la construction d'une page. Le travail principal d'un widget est de fournir une m\xe9thode build () pour d\xe9crire comment construire l'interface utilisateur (g\xe9n\xe9ralement en combinant et en assemblant d'autres widgets de base).\n\n- `MaterialApp` est le framework Flutter APP fourni dans la biblioth\xe8que de mat\xe9riaux, \xe0 travers lequel vous pouvez d\xe9finir le nom, le th\xe8me, la langue, la page d'accueil et la liste de routage de l'application. `MaterialApp` est \xe9galement un widget.\n\n- `home` est la page d'accueil de l'application Flutter, c'est aussi un widget.\n")))),(0,l.kt)("h2",{id:"composant-de-la-page-daccueil"},"Composant de la page d'accueil"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyHomePage extend StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n  titres de String final\xa0;\n  @override\n  _MyHomePageState createState() => new _MyHomePageState();\n}\n\nclasse _MyHomePageState \xe9tend l'\xe9tat<MyHomePage> {\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," est la page d'accueil de l'application Flutter, elle h\xe9rite de la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," , ce qui signifie qu'il s'agit d'un ",(0,l.kt)("strong",{parentName:"p"},"widget \xe0 \xe9tat")," (un composant \xe0 \xe9tat). Pour l'instant, consid\xe9rons bri\xe8vement qu'un widget avec \xe9tat est diff\xe9rent d'un widget sans \xe9tat de deux mani\xe8res."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Les widgets avec \xe9tat peuvent avoir des \xe9tats modifiables pendant le cycle de vie du widget, tandis que les widgets sans \xe9tat sont immuables.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Le widget avec \xe9tat se compose d'au moins deux classes."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Une classe ",(0,l.kt)("inlineCode",{parentName:"li"},"StatefulWidget"),"."),(0,l.kt)("li",{parentName:"ul"},"Une classe ",(0,l.kt)("inlineCode",{parentName:"li"},"\xc9tat")," \xa0; la classe ",(0,l.kt)("inlineCode",{parentName:"li"},"StatefulWidget")," elle-m\xeame est immuable, mais l'\xe9tat d\xe9tenu dans la classe ",(0,l.kt)("inlineCode",{parentName:"li"},"State")," peut changer au cours du cycle de vie du widget.")),(0,l.kt)("p",{parentName:"li"},"La classe ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState")," est la classe d'\xe9tat correspondant \xe0 la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage"),". Ici, le lecteur a peut-\xeatre remarqu\xe9 : Contrairement \xe0 la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"MyApp")," , il n'y a pas de m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," dans la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," , \xe0 la place, la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," a \xe9t\xe9 d\xe9plac\xe9e vers la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState"),"."))),(0,l.kt)("h3",{id:"classe-d\xe9tat"},"Classe d'\xe9tat"),(0,l.kt)("p",null,"Voyons ensuite ce que contient ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"l'\xe9tat du composant. Puisque nous n'avons besoin de maintenir qu'un compteur de clics, d\xe9finissez un \xe9tat ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter"),"."),(0,l.kt)("p",{parentName:"li"},"``dard int _counter = 0\xa0; // utilis\xe9 pour enregistrer le nombre total de clics sur le bouton"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\n`_counter` est l'\xe9tat qui contient le nombre de clics sur le bouton avec un signe \"+\" dans le coin inf\xe9rieur droit de l'\xe9cran.\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"D\xe9finissez la fonction d'auto-incr\xe9mentation pour l'\xe9tat."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void _incrementCounter() {\n  setState(() {\n     _counter++;\n  });\n}\n")),(0,l.kt)("p",{parentName:"li"},"   Cette fonction est appel\xe9e lorsque le bouton est cliqu\xe9. La fonction fonctionne en auto-incr\xe9mentant d'abord ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter")," puis en appelant la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"setState"),". Le but de la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"setState")," est de notifier au framework Flutter qu'un \xe9tat a chang\xe9. Lorsque le framework Flutter re\xe7oit la notification, il ex\xe9cute la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," pour reconstruire l'interface en fonction du nouvel \xe9tat. vous pouvez donc reconstruire tout ce qui doit \xeatre mis \xe0 jour sans avoir \xe0 modifier les widgets individuels.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Cr\xe9er une interface utilisateur"),(0,l.kt)("p",{parentName:"li"},"   La logique de construction de l'interface utilisateur se trouve dans la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),". Lorsque ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHomePage")," est cr\xe9\xe9 pour la premi\xe8re fois, la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState")," sera cr\xe9\xe9e, et lorsque l'initialisation sera termin\xe9e, le framework Flutter appellera la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," du widget pour construire l'arborescence du widget, et enfin affichera le arborescence de widgets \xe0 l'\xe9cran de l'appareil. Voyons donc ce qui est fait dans la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," de ",(0,l.kt)("inlineCode",{parentName:"p"},"_MyHomePageState"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  Widget build(BuildContext context) {\n    return new Scaffold(\n      appBar: new AppBar(\n        title: new Text(widget.title),\n      ),\n      body: new Center(\n        child: new Column(\n          mainAxisAlignment: MainAxisAlignment.center ,\n          enfants\xa0: <Widget>[\n            new Text(\n              'Vous avez appuy\xe9 plusieurs fois sur le bouton\xa0:',\n            ),\n            new Text(\n              '$_counter',\n              style\xa0: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton\xa0: new FloatingActionButton(\n        onPressed\xa0: _incrementCounter,\n        tooltip\xa0: 'Increment',\n        child\xa0: new Icon(Icons.add),\n      ),\n    );\n}\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- `Scaffold` est un \xe9chafaudage de page fourni dans la biblioth\xe8que de mat\xe9riaux qui fournit une barre de navigation par d\xe9faut, un en-t\xeate et une propri\xe9t\xe9 `corps` contenant l'arborescence des widgets de l'\xe9cran principal (appel\xe9e plus tard \"arborescence des composants\" ou \"arborescence des widgets\") . Les arbres de composants peuvent \xeatre tr\xe8s complexes. Dans les exemples plus loin dans ce livre, les routes sont cr\xe9\xe9es via `Scaffold` par d\xe9faut.\n- L'arborescence de composants de `corps` contient un composant `Center` et `Center` peut aligner ses arbres de composants enfants sur le centre de l'\xe9cran. Dans ce cas, le sous-composant `Centre` est un composant `Colonne` , et le r\xf4le de `Colonne` est d'aligner tous ses sous-composants verticalement le long de l'\xe9cran ; dans ce cas, le sous-composant `Colonne` est compos\xe9 de deux `Texte`s, et le premier `Texte` affiche le texte fixe \"Vous avez appuy\xe9 sur le bouton plusieurs fois\xa0:\", et le second `Texte` affiche la valeur du `_\xe9tat du compteur`.\n- Le `flottantActionButton` est le bouton de survol avec `+` dans le coin inf\xe9rieur droit de la page, sa propri\xe9t\xe9 `onPressed` accepte une fonction de rappel qui repr\xe9sente son gestionnaire lorsqu'il est cliqu\xe9, dans ce cas, la m\xe9thode `_incrementCounter` est directement utilis\xe9e comme sa fonction de gestionnaire.\n")))),(0,l.kt)("p",null,"Maintenant, encha\xeenons l'int\xe9gralit\xe9 du flux d'ex\xe9cution du compteur\xa0: lorsque le bouton ",(0,l.kt)("inlineCode",{parentName:"p"},"floatingActionButton")," dans le coin inf\xe9rieur droit est cliqu\xe9, la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"_incrementCounter")," est appel\xe9e. Dans la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"_incrementCounter")," , d'abord le compteur ",(0,l.kt)("inlineCode",{parentName:"p"},"_counter")," (\xe9tat) sera auto-incr\xe9ment\xe9, puis ",(0,l.kt)("inlineCode",{parentName:"p"},"setState")," notifiera le framework Flutter que l'\xe9tat a chang\xe9, puis le framework Flutter appellera la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," pour reconstruire l'interface utilisateur avec le nouvel \xe9tat et enfin l'afficher sur l'\xe9cran de l'appareil."),(0,l.kt)("h4",{id:"pourquoi-mettre-la-m\xe9thode-build-dans-state-et-non-dans-statefulwidget-"},"Pourquoi mettre la m\xe9thode build dans State et non dans StatefulWidget ?"),(0,l.kt)("p",null,"Maintenant, r\xe9pondons \xe0 la question pos\xe9e pr\xe9c\xe9demment, pourquoi la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," est-elle plac\xe9e dans State (au lieu de ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),") ? Il s'agit principalement d'augmenter la flexibilit\xe9 du d\xe9veloppement. Si la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," est plac\xe9e dans le ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," , il y a deux probl\xe8mes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Acc\xe8s \xe0 l'\xc9tat peu pratique"),(0,l.kt)("p",{parentName:"li"},"  Imaginez si notre ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," a plusieurs \xe9tats, et \xe0 chaque fois que l'\xe9tat change, nous devons appeler la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," , puisque l'\xe9tat est stock\xe9 dans State, si la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," est dans ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),", alors le ",(0,l.kt)("inlineCode",{parentName:"p"},"la m\xe9thode build")," et l'\xe9tat sont dans deux classes distinctes, il sera donc tr\xe8s g\xeanant de lire l'\xe9tat lors de la construction\xa0! serait tr\xe8s g\xeanant ! Imaginez si vous mettez r\xe9ellement la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," dans un StatefulWidget, puisque le processus de construction de l'interface utilisateur d\xe9pend de l'\xe9tat, la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," devrait avoir un param\xe8tre ",(0,l.kt)("inlineCode",{parentName:"p"},"State")," , quelque chose comme ce qui suit."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  Widget build (contexte BuildContext, \xe9tat de l'\xe9tat){\n      //state.counter\n...\n  }\n")),(0,l.kt)("p",{parentName:"li"},"  Dans ce cas, vous pouvez uniquement d\xe9clarer tout l'\xe9tat de l'\xe9tat comme public, de sorte que vous pouvez acc\xe9der \xe0 l'\xe9tat en dehors de la classe State ! Cependant, en rendant l'\xc9tat public, l'\xc9tat ne sera plus priv\xe9, ce qui signifie que les modifications de l'\xc9tat deviendront incontr\xf4lables. Mais si vous mettez la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build()")," dans l'\xe9tat, le processus de construction a non seulement un acc\xe8s direct \xe0 l'\xe9tat, mais n'a pas non plus besoin d'exposer l'\xe9tat priv\xe9, ce qui est tr\xe8s pratique.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"L'h\xe9ritage de ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," n'est pas pratique"),(0,l.kt)("p",{parentName:"li"},"  Par exemple, Flutter a une classe de base ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," pour les widgets anim\xe9s, qui h\xe9rite de la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),". Une m\xe9thode abstraite ",(0,l.kt)("inlineCode",{parentName:"p"},"build(BuildContext context)")," est introduite dans ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget"),", et tous les widgets anim\xe9s qui h\xe9ritent de ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," doivent impl\xe9menter cette m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),". Imaginez maintenant que si la classe ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," a d\xe9j\xe0 une m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," , comme d\xe9crit ci-dessus, la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," doit recevoir un objet d'\xe9tat, ce qui signifie que le ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimatedWidget")," doit passer son propre objet State (not\xe9 comme _animatedWidgetState) \xe0 sa classe enfant, car la classe enfant doit appeler la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," de la classe parent dans sa m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," , et le code peut ressembler \xe0 ceci."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class MyAnimationWidget \xe9tend AnimatedWidget{\n    @override\n    Widget build(BuildContext context, State state){\n      //puisque la sous-classe va utiliser l'objet d'\xe9tat _animatedWidgetState de l'AnimatedWidget.\n      // donc l'AnimatedWidget doit d'une mani\xe8re ou d'une autre exposer son objet d'\xe9tat _animatedWidgetState\n      // l'exposer \xe0 ses sous-classes   \n      super.build(context, _animatedWidgetState)\n    }\n}\n")),(0,l.kt)("p",{parentName:"li"},"  Cela n'a \xe9videmment aucun sens, car"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"1. l'objet d'\xe9tat de `AnimatedWidget` est un d\xe9tail d'impl\xe9mentation interne de `AnimatedWidget` et ne doit pas \xeatre expos\xe9 \xe0 l'ext\xe9rieur.\n2. si l'\xe9tat de la classe parent doit \xeatre expos\xe9 \xe0 la classe enfant, alors il doit y avoir un m\xe9canisme de passage, et il est inutile de faire cet ensemble de m\xe9canismes de passage, car le passage de l'\xe9tat entre les classes parent et enfant n'est pas pertinent pour la logique de la classe enfant elle-m\xeame.\n")))),(0,l.kt)("p",null,"En r\xe9sum\xe9, on peut constater que pour ",(0,l.kt)("inlineCode",{parentName:"p"},"StatefulWidget"),", mettre la m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," dans State peut apporter beaucoup de souplesse au d\xe9veloppement."))}m.isMDXComponent=!0}}]);