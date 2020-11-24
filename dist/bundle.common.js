"use strict";function e(e){return new Promise(((t,r)=>{const n=new FileReader;n.addEventListener("load",(()=>{t(n)})),n.addEventListener("error",(e=>{r(e)})),n.readAsDataURL(e)}))}Object.defineProperty(exports,"__esModule",{value:!0});var t={toDataURL:e,toImage:function(t,{width:r,height:n}){return new Promise(((a,o)=>{const i=new Image(r,n),s=webkitURL||s,d=s?s.createObjectURL(t):e(t);i.src=d,i.addEventListener("load",(()=>{a(i),s&&s.revokeObjectURL(d)})),i.addEventListener("error",(e=>o(e)))}))},fromDataURL:function(e,t){return new Promise(((r,n)=>{try{const n=e.split(",")[1],o=/^data:(.*?)(;base64)?,/,i=e.match(o)[1],s=atob(n),d=s.length,c=new Uint8Array(d);for(var a=0;a<d;a++)c[a]=s.charCodeAt(a);r(new Blob([c],{type:t||i}))}catch(e){n(e)}}))},fromCanvas:function(e,{type:t="image/jpeg",quality:r=.8}){return new Promise((n=>{e.toBlob(n,t,r)}))}};var r={fromURL:function(e){return new Promise(((t,r)=>{const n=new Image;n.addEventListener("load",(()=>{t(n)})),n.addEventListener("error",(e=>r(e))),n.src=e,n.setAttribute("crossOrigin","anonymous")}))},fromDataURL:function(e){return new Promise(((t,r)=>{const n=new Image;n.addEventListener("load",(()=>{t(n)})),n.addEventListener("error",(e=>r(e))),n.src=e}))},toCanvas:function(e){return new Promise((t=>{const r=document.createElement("canvas"),n=r.getContext("2d");r.width=e.naturalWidth,r.height=e.naturalHeight,n.drawImage(e,0,0,r.width,r.height),t(r)}))}};var n={toDataURL:function(e,t=.8,r="image/jpeg"){return new Promise((n=>{n(e.toDataURL(r,t))}))}};exports.Blob=t,exports.Canvas=n,exports.Image=r;
