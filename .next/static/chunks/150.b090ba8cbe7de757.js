(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{6150:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return G}});var t,o=e(5893),a=e(7294),u=e(3806),i=e(9394),c=e(3923),l=e(2404);!function(r){r.ready="ready",r.working="working"}(t||(t={}));var s=function(r,n){var e=(0,a.useState)(void 0),o=e[0],i=e[1],c=(0,l.CG)(u.GM),s=(0,a.useState)(!1),f=s[0],m=s[1];(0,a.useEffect)((function(){if(r!==t.ready)return function(){};if(!c||!c[n.workerName])return function(){};var e=c[n.workerName];return m(e.ready),function(){}}),[c,n.workerName,r]);var d=(0,l.CG)(u.Dj),h=(0,a.useState)(!1),y=h[0],b=h[1];return(0,a.useEffect)((function(){if(r!==t.working)return function(){};if(!d||!d[n.workerName])return function(){};var e=d[n.workerName];return b(e.working),function(){}}),[d,n.workerName,r]),(0,a.useEffect)((function(){return i((function(){switch(r){case t.ready:return f;case t.working:return y}})),function(){}}),[r,f,y]),[o]},f=e(4017),m=e(1280);function d(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}var h=function(r){return(0,o.jsx)(m.Z,function(r){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})))),t.forEach((function(n){d(r,n,e[n])}))}return r}({},r))},y=e(2714),b=e(6336),k=e(7957),p=e.n(k);function w(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function v(r){return function(r){if(Array.isArray(r))return w(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,n){if(!r)return;if("string"===typeof r)return w(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(r,n)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(r){var n=function(){return Math.pow(Math.fround(Math.random())*Math.random()*Math.random(),Math.random()*Math.random()*Math.random())},e=Array(r).fill(n()).map((function(e){var t=Array(r).fill(n()).reduce((function(r,n){return Math.tanh(Math.PI+r+n)+(Math.PI+n)+function(r){for(var n=2;n<r;n++)if(r%n===0)return!1;return r>1}(r+n*Math.random())?r+n*Math.random():Math.PI})),o=Array(r).fill(n()*n()*n());return[t].concat(v(o),[e])}));return Array(r).fill(e.reduce((function(r,n){return v(r).concat([n])}))).reduce((function(r,n){return[r].concat(v(n.reduce((function(r,n){return r+n})).split(","))).reduce((function(r,n){switch("undefined"===typeof n?"undefined":(e=n)&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e){case"string":return Number(n);case"number":return n}var e}),0)}))},g=e(3583),j=e(9459);function N(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function C(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,o,a=[],u=!0,i=!1;try{for(e=e.call(r);!(u=(t=e.next()).done)&&(a.push(t.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return N(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(r){var n=r.workerKey,e=r.globalComplexityValue,m=(0,l.TL)(),d=C(s(t.ready,n),1)[0],k=C(s(t.working,n),1)[0],w=(0,a.useMemo)((function(){return r=15,n=80,Math.floor(Math.random()*(n-r+1)+r);var r,n}),[]),v=(0,a.useState)(w),N=v[0],_=v[1];(0,a.useEffect)((function(){return _("number"!==typeof e?w:e),function(){}}),[e,w]);var S=C(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=(0,a.useState)(e),o=t[0],u=t[1],i=(0,a.useState)(void 0),c=i[0],l=i[1],s=(0,a.useRef)(0);return(0,a.useEffect)((function(){var e=function(){return window.clearInterval(s.current)};return o?s.current=window.setInterval((function(){return l(x(n))}),r):e(),function(){e()}}),[o,r,n]),(0,a.useEffect)((function(){return"undefined"===typeof c||(0,g._g)(j.z.reportJobDone,{keyNames:y.Nc,unknownData:{working:o,lastCalculations:c,timestamp:Date.now()}}),function(){}}),[c,o]),[o,function(){return u((function(r){return!r}))}]}(120,Number(N),!1),2),A=S[0],W=S[1],M=function(){return n.workerName===y.Nc.workerName};(0,a.useEffect)((function(){return m((0,u.Yj)({workerName:n.workerName,complexity:Number(N)})),function(){}}),[m,N,n.workerName]);var Z=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;return{color:r>y.Ek-n?"hsl(0,100%,97%)":"inherit"}},E=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;return r<n?p().buttonAnimationSoft:r>y.Ek-n?p().buttonAnimationHard:p().buttonAnimationMedium},O=function(r){return n={},e=r,t="hsl(".concat(y.Ek/2-Math.floor(Number(N)/2+9),"deg, 100%, 60%, ").concat(Math.floor(Number(N)/4+50)/100,")"),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n;var n,e,t};return M()||d?(0,o.jsxs)("section",{className:p().host,children:[(0,o.jsx)(o.Fragment,{children:M()?(0,o.jsx)(f.Z,{className:[p().mainFireButton,A?E(N):""].join(" "),style:O("backgroundColor"),onClick:W,children:(0,o.jsxs)("span",{style:Z(N),children:[n.workerName," ",A?(0,o.jsx)("strong",{children:" ON"}):"OFF"]})}):(0,o.jsx)(f.Z,{className:[p().mainFireButton,k?E(N):""].join(" "),style:O("backgroundColor"),onClick:function(){(0,i.R_)(n,k?{workerTaskName:c.I.turnOffCalculations}:{workerTaskName:c.I.turnOnCalculations,complexity:(0,i.Nx)(N,y.$Z,y.Ek)},'Triggering a switch at the "'.concat(n.workerName,'"'))},children:(0,o.jsxs)("span",{style:Z(N),children:[n.workerName.slice(18),k?(0,o.jsx)("strong",{children:" ON"}):" OFF"]})})}),(0,o.jsxs)("section",{className:p().complexityForm,children:[(0,o.jsx)(h,{disabled:k,value:N,inputProps:{type:"number"},onChange:function(r){return _(r.currentTarget.value)},onBlur:function(r){return _((0,i.Nx)(r.currentTarget.value,y.$Z,y.Ek))}}),(0,o.jsx)(b.ZP,{disabled:k,value:Number(N),onChange:function(r,n){_(Array.isArray(n)?n[0]:n)},"aria-labelledby":"input-slider",min:y.$Z,max:y.Ek,style:O("color")})]})]}):(0,o.jsx)("section",{className:p().host,children:(0,o.jsx)("div",{className:p().loadingPlaceholder})})},S=e(8767),A=e.n(S),W=e(4353),M=function(){var r=(0,l.CG)(u.NR),n=(0,l.CG)(u.Hc),e=(0,l.CG)(u.fJ),t=(0,a.useState)(void 0),c=t[0],s=t[1],m=(0,a.useState)(void 0),d=m[0],h=m[1],k=(0,a.useMemo)((function(){return"undefined"===typeof c}),[c]),p=(0,a.useMemo)((function(){return Array(r.amount).fill(void 0)}),[r]);return(0,o.jsxs)("main",{className:A().host,children:[(0,o.jsxs)("section",{children:[(0,o.jsx)(b.ZP,{valueLabelDisplay:"auto",disabled:n,"aria-labelledby":"input-slider",min:y.$Z,max:y.Ek,onChangeCommitted:function(r,n){!function(r){s(r)}(Array.isArray(n)?n[0]:n)}}),(0,o.jsx)(f.Z,{disabled:k||n||e,onClick:function(){h(Array.isArray(c)?c[0]:c)},children:(0,o.jsx)("span",{children:"SET"})}),(0,o.jsx)(f.Z,{onClick:function(){h((function(){return"NaN"})),(0,W.o)((function(){return window.setTimeout((function(){return h(void 0)}),0)}))},disabled:n||e,children:(0,o.jsx)("span",{children:"SET INITIAL"})})]}),(0,o.jsx)("section",{className:A().workersContainer,children:p.map((function(r,n){return(0,o.jsx)(_,{globalComplexityValue:d,workerKey:{workerName:(0,i.Uy)(n+1),fileName:"calculation-worker.js"}},n)}))})]})},Z=e(9774),E=e(6863),O=e(6585),T=e(2205),I=e.n(T),P=e(7257),F=function(){var r=(0,l.CG)(u.NR),n=(0,l.TL)(),e=(0,a.useState)(1),t=e[0],c=e[1];return(0,o.jsxs)("section",{className:I().host,children:[(0,o.jsxs)("span",{children:["0 - ",(0,o.jsx)(Z.Z,{placement:"top-start",title:"Number depends of your CPU cores amount",TransitionComponent:O.Z,arrow:!0,children:(0,o.jsx)("strong",{children:y.Un})})," "]}),(0,o.jsx)(h,{type:"number",value:t,"aria-label":"Expected Workers amount",placeholder:"0 - ".concat(y.Un),onChange:function(r){return c(r.currentTarget.value)},onBlur:function(r){return c((0,i.Nx)(r.currentTarget.value,0,y.Un))}}),(0,o.jsx)(f.Z,{onClick:function(){return n((0,u.Zu)({amountChangeCommand:P.uq.setAmount,amount:(0,i.Nx)(t,0,y.Un)}))},children:"Set specific Workers amount"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)(E.Z,{className:I().controlButtonGroup,children:[(0,o.jsx)(f.Z,{onClick:function(){return n((0,u.Zu)({amountChangeCommand:P.uq.setAmount,amount:y.Un}))},children:"Set Workers amount equals to yours CPU cores amount"}),(0,o.jsx)(f.Z,{disabled:r.amount===y.Un,onClick:function(){return n((0,u.Zu)({amountChangeCommand:P.uq.addOne}))},children:"Add new Worker +"}),(0,o.jsx)(f.Z,{disabled:0===r.amount,onClick:function(){return n((0,u.Zu)({amountChangeCommand:P.uq.removeLast}))},children:"Remove last Worker -"}),(0,o.jsx)(f.Z,{disabled:0===r.amount,onClick:function(){return n((0,u.Zu)({amountChangeCommand:P.uq.setAmount,amount:0}))},children:"Remove all Workers --"})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})},G=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{workerKey:y.Nc}),(0,o.jsx)(F,{}),(0,o.jsx)(M,{})]})}},2205:function(r){r.exports={controlButtonGroup:"WorkersAmount_controlButtonGroup__TCEj8"}},8767:function(r){r.exports={workersContainer:"WorkersView_workersContainer__eurbM"}},7957:function(r){r.exports={host:"WorkersWorkSwitch_host__2GPxp",loadingPlaceholder:"WorkersWorkSwitch_loadingPlaceholder__Z5myj",placeHolderShimmer:"WorkersWorkSwitch_placeHolderShimmer__zx3zp",mainFireButton:"WorkersWorkSwitch_mainFireButton__u5Q3x",complexityForm:"WorkersWorkSwitch_complexityForm__XoDg2",inputLabel:"WorkersWorkSwitch_inputLabel__ruCy7",buttonAnimationSoft:"WorkersWorkSwitch_buttonAnimationSoft__suOGL",vibrateSoft:"WorkersWorkSwitch_vibrateSoft__zofuN",buttonAnimationMedium:"WorkersWorkSwitch_buttonAnimationMedium__JX0zL",vibrateMedium:"WorkersWorkSwitch_vibrateMedium__IZ_cQ",buttonAnimationHard:"WorkersWorkSwitch_buttonAnimationHard__nZhwm",vibrateHard:"WorkersWorkSwitch_vibrateHard__zw37T"}}}]);