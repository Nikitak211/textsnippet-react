(this["webpackJsonptextsnippet-react"]=this["webpackJsonptextsnippet-react"]||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),s=n.n(r),o=(n(24),n(18)),u=n(1),i=n(10),j=n.n(i),l=n(13),b=n(8),h=n(2),f=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(b.a)(r,2),o=s[0],u=s[1],i=Object(c.useState)(""),f=Object(b.a)(i,2),p=f[0],O=f[1],d=Object(c.useState)(""),x=Object(b.a)(d,2),m=x[0],v=x[1],g=Object(c.useState)(""),S=Object(b.a)(g,2),w=S[0],N=S[1],y=Object(c.useState)(!1),k=Object(b.a)(y,2),C=k[0],E=k[1],T=Object(c.useRef)(),J=function(e){var t=new SpeechSynthesisUtterance(e);t.lang="en-US",T.current.speak(t)},A=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C?(E(!1),N("On"),v("speech Off")):(E(!0),N("Off"),v("speech On"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json"),e.next=4,fetch("/api/generateText",{method:"POST",headers:t,body:JSON.stringify({score:n})}).then((function(e){if(!e.ok)throw Error("could not fetch the data");return e.json()})).then((function(e){e.success&&(u(e.message),O(""),C&&J(e.message)),e.failure&&(O(e.error),u(""))})).catch((function(e){"AbortError"===e.name&&console.log("fetch aborted"),console.log(e.error)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N("On"),v("speech Off"),T.current=window.speechSynthesis}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("textarea",{className:"inputs-form",disabled:!0,onChange:function(e){return O(e.target.value)},value:p}),Object(h.jsx)("h2",{className:"container-title",children:"TextSnippet"}),Object(h.jsx)("button",{className:"sound-button",onClick:A,children:w}),Object(h.jsx)("small",{className:"sound-text",onChange:function(e){return v(e.target.value)},children:m}),Object(h.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return a(e.target.value)},className:"container-search"}),Object(h.jsx)("button",{className:"container-button",onClick:U,children:"Generate"}),Object(h.jsx)("textarea",{className:"container-text",disabled:!0,onChange:function(e){return u(e.target.value)},value:o})]})};var p=function(){return Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u.c,{children:Object(h.jsx)(u.a,{path:"/",children:Object(h.jsx)(f,{})})})})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.58a3f1fd.chunk.js.map