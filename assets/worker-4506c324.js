(function(){"use strict";const s=({type:t,value:c})=>{self.postMessage(JSON.stringify({type:t,value:c}))};let e,n=null;const k=100;let r=0,a=null,o=!1,l=null;const i=t=>{e==null||e.send(JSON.stringify(t))},y=()=>{n=setInterval(()=>{i({type:2})},9900)},C=()=>{n&&(clearInterval(n),n=null)},u=()=>{if(C(),!o){if(o=!0,a&&(clearTimeout(a),a=null),r>=k){r=0;return}a=setTimeout(()=>{f(),r++,o=!1},2e3)}},v=()=>{u(),s({type:"error"})},d=()=>{u(),l=null,s({type:"close"})},m=()=>{s({type:"open"}),y()},p=t=>s({type:"message",value:t.data}),f=()=>{e==null||e.removeEventListener("message",p),e==null||e.removeEventListener("open",m),e==null||e.removeEventListener("close",d),e==null||e.removeEventListener("error",v),e=new WebSocket(`wss://api.mallchat.cn/websocket${l?`?token=${l}`:""}`),e.addEventListener("message",p),e.addEventListener("open",m),e.addEventListener("close",d),e.addEventListener("error",v)};self.onmessage=t=>{const{type:c,value:g}=JSON.parse(t.data);switch(c){case"initWS":{r=0,l=g,f();break}case"message":{if((e==null?void 0:e.readyState)!==1)return;i(g);break}}}})();