"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7848],{37848:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(45072),m=n(52822),r=(n(11504),n(69788)),i=["components"],l={},d="wrapper";function o(e){var t=e.components,n=(0,m.c)(e,i);return(0,r.mdx)(d,(0,a.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"event-emitter"},"Event Emitter"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"EventEmitter"),' can be used to create and emit custom events to facilitate communications between the emitting component (emitter) and the listening component (listener). The behavior of the event emitter is similar to the "pub/sub" model. When EventEmitter emits an event, listeners that have registered to listen to this event can act upon receiving the event.'),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"EventEmitter is a singleton that is shared throughout your application. It is important to unsubscribe by removing all listeners to all events when your application is unmounted."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import EventEmitter from 'terra-application/lib/utils/event-emitter';\n")),(0,r.mdx)("h2",{id:"api"},"API"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"method"),(0,r.mdx)("th",{parentName:"tr",align:null},"syntax"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"once")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.once('event-name', listener)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Adds a one-time listener function for the event named ",(0,r.mdx)("inlineCode",{parentName:"td"},"event-name"),". The next time ",(0,r.mdx)("inlineCode",{parentName:"td"},"event-name")," is triggered, this listener is removed and then invoked.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"on")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.on('event-name', listener)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Adds the listener function to the end of the listeners array for the event named ",(0,r.mdx)("inlineCode",{parentName:"td"},"event-name"),". No checks are made to see if the listener has already been added. Multiple calls passing the same combination of ",(0,r.mdx)("inlineCode",{parentName:"td"},"event-name")," and listener will result in the listener being added, and called, multiple times.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"addListener")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.addListener('event-name', listener)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Alias to ",(0,r.mdx)("inlineCode",{parentName:"td"},"on"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"off")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.off('event-name', listener)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Removes all specified listeners from the listener array for the event named ",(0,r.mdx)("inlineCode",{parentName:"td"},"event-name"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"removeListener")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.removeListener('event-name', listener)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Alias to ",(0,r.mdx)("inlineCode",{parentName:"td"},"off"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"removeAllListeners")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.removeAllListeners('event-name')")),(0,r.mdx)("td",{parentName:"tr",align:null},"Removes all listeners if not event names are specified, or those of the specified 'event-name'.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"emit")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.emit('event-name', arg1, arg2);")),(0,r.mdx)("td",{parentName:"tr",align:null},"Synchronously calls each of the listeners registered for the event named 'event-name', in the order they were registered, passing the supplied arguments to each.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventNames")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.eventNames()")),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns an array listing the event names for which the emitter has registered listeners. The values in the array will be strings.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"listenerCount")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.listenerCount('event-name')")),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns the number of listeners listening to the event named 'event-name'.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"listeners")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventEmitter.listeners('event-name')")),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns a copy of the array of listeners for the event named 'event-name'.")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"once"},(0,r.mdx)("inlineCode",{parentName:"h3"},"once")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.once('event-name', listener);\neventEmitter.emit('event-name');  // listenCount == 1\neventEmitter.emit('event-name');  // Ignored: listenCount == 1\n")),(0,r.mdx)("h3",{id:"on"},(0,r.mdx)("inlineCode",{parentName:"h3"},"on")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name', listener);\neventEmitter.emit('event-name');  // listenCount == 1\neventEmitter.emit('event-name');  // listenCount == 2\n")),(0,r.mdx)("h3",{id:"off"},(0,r.mdx)("inlineCode",{parentName:"h3"},"off")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name', listener);\neventEmitter.off('event-name', listener);\neventEmitter.emit('event-name');  // Ignored: listenCount == 0\n")),(0,r.mdx)("h3",{id:"removealllisteners"},(0,r.mdx)("inlineCode",{parentName:"h3"},"removeAllListeners")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name1', listener);\neventEmitter.on('event-name2', listener);\neventEmitter.on('event-name3', listener);\neventEmitter.removeAllListeners();\neventEmitter.emit('event-name1');  // Ignored: listenCount == 0\neventEmitter.emit('event-name2');  // Ignored: listenCount == 0\neventEmitter.emit('event-name3');  // Ignored: listenCount == 0\n")),(0,r.mdx)("h3",{id:"emit"},(0,r.mdx)("inlineCode",{parentName:"h3"},"emit")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = (count) => {\n  if (count) {\n    listenCount += count;\n  } else {\n    listenCount += 1;\n  }\n\neventEmitter.on('event-name', listener);\neventEmitter.emit('event-name');      // listenCount == 1\neventEmitter.emit('event-name', 50);  // listenCount == 51\n")),(0,r.mdx)("h3",{id:"eventnames"},(0,r.mdx)("inlineCode",{parentName:"h3"},"eventNames")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nconst eventNames = ['event-name1', 'event-name2', 'event-name3']\n\neventEmitter.on(eventNames[0], () => {});\neventEmitter.on(eventNames[1], () => {});\neventEmitter.on(eventNames[2], () => {});\n\neventEmitter.eventNames();  // ['event-name1', 'event-name2', 'event-name3']\n")),(0,r.mdx)("h3",{id:"listenercount"},(0,r.mdx)("inlineCode",{parentName:"h3"},"listenerCount")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\neventEmitter.on('event-name1', () => {});\neventEmitter.on('event-name2', () => {});\neventEmitter.on('event-name2', () => {});\n\neventEmitter.listenerCount('event-name1');  // 1\neventEmitter.listenerCount('event-name2');  // 2\n")),(0,r.mdx)("h3",{id:"listeners"},(0,r.mdx)("inlineCode",{parentName:"h3"},"listeners")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nconst listener1 = () => {};\nconst listener2 = () => {};\n\neventEmitter.on('event-name', listener1);\neventEmitter.on('event-name', listener2);\n\neventEmitter.listeners('event-name').length;  // 2\neventEmitter.listeners('event-name')[0];      // listener1\neventEmitter.listeners('event-name')[1];      // listener2\n")),(0,r.mdx)("p",null,"Follow the ",(0,r.mdx)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v10.x/api/events.html"},"official Node.js documentation")," for more examples and other less common APIs."))}o.isMDXComponent=!0},45072:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{c:()=>a})},52822:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,m=function(e,t){if(null==e)return{};var n,a,m={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(m[n]=e[n]);return m}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}n.d(t,{c:()=>a})}}]);