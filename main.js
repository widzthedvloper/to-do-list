(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".projects {\n    width: 25%;\n    background-color: rgb(19, 18, 18);\n    height: 100%;\n}\n\n.tasks {\n    width: 75%;\n    background-color: rgb(87, 85, 85);\n}\n\n.color-green {\n    color: rgb(96, 236, 96);\n}\n\n.color-white {\n    color: white;\n}\n\n.color-blue {\n    color: blue;\n}\n\n.project-div:hover {\n    background-color: rgb(87, 85, 85);\n    cursor: pointer;\n}\n\n.bold-text {\n    font-size: 2rem;\n}\n\n.bolden {\n    font-size: 1.5rem;\n}\n\n.show-task {\n    border-radius: 5px;\n    border: 1px solid rgb(96, 236, 96);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.show-project {\n    border-radius: 5px;\n    border: 1px solid rgb(96, 236, 96);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.radio {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    border: 1px solid;\n    cursor: pointer;\n}\n\n.to-do {\n    font-size: 1rem;\n}\n\n.icons {\n    font-size: 1rem;\n}",""]);const c=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var a=[].concat(e[d]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var d=e[r],a=t.base?d[0]+t.base:d[0],s=n[a]||0,l="".concat(a," ").concat(s);n[a]=s+1;var u=i(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:l,updater:f(p,t),references:1}),o.push(l)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var c=n.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function p(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function f(e,t){var n,o,r;if(t.singleton){var c=h++;n=m||(m=a(t)),o=u.bind(null,n,c,!1),r=u.bind(null,n,c,!0)}else n=a(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);c[r].references--}for(var a=d(e,t),s=0;s<n.length;s++){var l=i(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=a}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(426);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=(e,t,n,o)=>{o.todos.push({description:e,dueDate:t,priority:n,edit(e,t,n){this.description=e,this.dueDate=t,this.priority=n}})},c=document.getElementById("task-form");c.style.display="none";const i=e=>{document.querySelector("#task-div").innerHTML="",e.todos.forEach((e=>{const t=document.createElement("div");t.setAttribute("class","show-task mt-3 pt-1 px-2 mx-2 d-flex"),document.getElementById("task-div").appendChild(t);const n=document.createElement("div");n.setAttribute("class","d-flex");const o=document.createElement("div");o.setAttribute("class","radio color-green mt-1");const r=document.createElement("div");r.setAttribute("class","to-do color-white px-2 pt-1");const c=document.createElement("p"),i=document.createTextNode(e.description);c.appendChild(i),r.appendChild(c),n.appendChild(o),n.appendChild(r),t.appendChild(n);const d=document.createElement("div");d.setAttribute("class","d-flex icons pt-1");const a=document.createElement("div");a.setAttribute("class","color-white px-2");const s=document.createElement("p"),l=document.createTextNode("Due Date: "+e.dueDate);s.appendChild(l),a.appendChild(s),d.appendChild(a),t.appendChild(d);const u=document.createElement("div"),p=document.createElement("i");p.setAttribute("class","fas fa-pencil-alt color-green px-2"),u.appendChild(p),d.appendChild(u);const m=document.createElement("div"),h=document.createElement("i");h.setAttribute("class","fas fa-trash-alt color-green px-2"),m.appendChild(h),d.appendChild(m)}))},d=(e,t)=>({title:e,description:t,todos:[],edit(e,t){this.title=e,this.description=t}}),a=[],s=document.getElementById("new-project"),l=document.getElementById("project-form");l.style.display="none",document.getElementById("submit").addEventListener("click",(function(){l.style.display="none"}));const u=e=>{document.getElementById(e).addEventListener("click",(function(){(e=>{document.querySelector("#task-container").innerHTML="";let t=h[e];const n=document.createElement("p"),o=document.createTextNode(`Project: ${t.title}`);n.appendChild(o);const d=document.createElement("p"),a=document.createTextNode(`Description: ${t.description}`);d.appendChild(a);const s=document.createElement("div");s.setAttribute("class","color-white px-4 pt-5 bold-text"),s.appendChild(n),s.appendChild(d);const l=document.getElementById("task-container");l.appendChild(s);const u=document.createElement("button");u.setAttribute("class","btn btn-success px-5 mx-4 my-3"),u.setAttribute("id","new-task");const p=document.createTextNode('Add A New "To-Do"');u.appendChild(p),l.appendChild(u),document.getElementById("new-task").onclick=()=>{c.style.display="block"},document.getElementById("submit-task").onclick=()=>{const e=document.getElementById("exampleInputDescription").value,n=document.getElementById("exampleInputDueDate").value;let o;document.querySelector("#high").checked&&(o=high),document.querySelector("#medium").checked&&(o=medium),document.querySelector("#low").checked&&(o=low),r(e,n,o,t),c.style.display="none",i(t)}})(e),i(a[e])}))},p=()=>{let e=0;document.querySelector("#project-container").innerHTML="",a.forEach((t=>{const n=document.createElement("div");n.setAttribute("class","color-white px-4 bolden show-project mx-4 pt-3 mb-2 project-div"),n.setAttribute("id",e);const o=document.createElement("p"),r=document.createTextNode(`${t.title}`);o.appendChild(r),n.appendChild(o),document.getElementById("project-container").appendChild(n),e++})),function(){let e=document.getElementsByClassName("project-div");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){u(this.id)}))}()},m=()=>{const e=document.querySelector(".title").value,t=document.querySelector(".description").value,n=d(e,t);a.push(n),p(),u()},h=a;s.addEventListener("click",(function(){l.style.display="block"})),document.getElementById("submit").addEventListener("click",m)})()})();