import{d as Y,r as j,u as O,a as ee,b as W,c as $,o as te,_ as ne,e as oe,f as q,g as L,n as ie,F as se,h as w,i as K,j as J,w as B,T as z,t as ae,k as D,p as re,l as de,m as ce,q as le,s as H,v as pe,x as E,y as U,z as V,A as ue,B as fe,C as F}from"./entry.96b66011.js";const ve={nuxt:{}},we=Y(ve);function Z(){const o=O();return o._appConfig||(o._appConfig=j(we)),o._appConfig}const A=o=>(re("data-v-2b9f80bf"),o=o(),de(),o),_e=A(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),he=A(()=>w("span",null,"Preview mode enabled",-1)),ye={key:0},me=A(()=>w("div",{id:"__preview_background"},null,-1)),ge=A(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ke=A(()=>w("p",null,"Initializing the preview...",-1)),Ce={key:0},Ie=A(()=>w("div",{id:"__preview_background"},null,-1)),Pe={id:"__preview_loader"},Se=ee({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const s=o,c=["__nuxt_preview","__preview_enabled"],f=O(),y=W(),r=$(!0),g=$(!1),i=$(!1),l=$("");let a;const h=async()=>{D("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await y.replace({query:{preview:void 0}}),window.location.reload()},R=async x=>{const _=await s.syncPreview(x);if(i.value!==!0){if(!_){setTimeout(()=>R(x),1e3);return}D("previewToken").value&&(i.value=!0,await y.replace({query:{}}),f.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&a.disconnect())}};return te(async()=>{a=(await ne(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let _;a.on("connect",()=>{_=setTimeout(()=>{i.value||(_=setTimeout(()=>{l.value="Preview sync timed out",i.value=!1},3e4),a.emit("draft:requestSync"))},3e4)});const I=()=>{_&&(clearTimeout(_),_=null)};a.on("draft:sync",async P=>{if(I(),!P){try{a.once("draft:ready",()=>{a.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(T){switch(I(),T.response.status){case 404:l.value="Preview draft not found",i.value=!1;break;default:l.value="An error occurred while syncing preview",i.value=!1}}return}R(P)}),a.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",i.value=!1}),a.on("disconnect",()=>{I()}),document.body.classList.add(...c),a.on("draft:update",P=>{g.value=!0,s.syncPreview(P),g.value=!1})}),oe(()=>{document.body.classList.remove(...c)}),(x,_)=>(q(),L("div",null,[r.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ie({__preview_ready:i.value,__preview_refreshing:g.value})},[i.value?(q(),L(se,{key:0},[_e,he,w("button",{onClick:h}," Close ")],64)):K("",!0)],2)):K("",!0),J(z,{name:"preview-loading"},{default:B(()=>[r.value&&!i.value&&!l.value?(q(),L("div",ye,[me,w("div",{id:"__preview_loader"},[ge,ke,w("button",{onClick:h}," Cancel ")])])):K("",!0)]),_:1}),J(z,{name:"preview-loading"},{default:B(()=>[l.value?(q(),L("div",Ce,[Ie,w("div",Pe,[w("p",null,ae(l.value),1),w("button",{onClick:h}," Exit preview ")])])):K("",!0)]),_:1})]))}});const xe=ce(Se,[["__scopeId","data-v-2b9f80bf"]]),Te=(o=[],s,c)=>{const f=[...s||[]],y=[...c||[]],r=JSON.parse(JSON.stringify(o));for(const i of f)if(i.oldPath)if(y.splice(y.findIndex(a=>a.path===i.oldPath),1),f.find(a=>a.path===i.oldPath))r.push({path:i.path,parsed:i.parsed});else{const a=r.find(h=>h.path===i.oldPath);a&&(a.path=i.path,i.parsed?a.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{a.parsed[h]=i.pathMeta[h]}))}else if(i.new)r.push({path:i.path,parsed:i.parsed});else{const l=r.find(a=>a.path===i.path);l&&Object.assign(l,{path:i.path,parsed:i.parsed})}for(const i of y)r.splice(r.findIndex(l=>l.path===i.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return r.sort((i,l)=>g.compare(i.path,l.path)),r},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},be=o=>{let s;return(...c)=>(s||(s=o()),s)};function G(o,s){for(const c in o){const f=s[c];c in s||delete o[c],f!==null&&typeof f=="object"&&G(o[c],s[c])}}function Q(o,s){for(const c in s){const f=s[c];f!==null&&typeof f=="object"?(o[c]=o[c]||{},Q(o[c],f)):o[c]=f}}const Ae=be(()=>JSON.parse(JSON.stringify(Z()))),$e=()=>{const o=O(),{studio:s,content:c}=le().public,f=Ae();let y;const r=H("studio-client-db",()=>null),g=H("studio-preview-db-files",()=>[]);r.value||(o.hook("content:storage",e=>{r.value=e}),pe("/non-existing-path").findOne());const i=async(e,n,d=!0)=>{const u=window.sessionStorage.getItem("previewToken"),v=await e.getKeys(`${u}:`);await Promise.all(v.map(p=>e.removeItem(p)));const t=new Set(n.map(p=>p.parsed._id.split(":").shift()));await e.setItem(`${u}$`,JSON.stringify({ignoreSources:Array.from(t)})),await Promise.all(n.map(p=>e.setItem(`${u}:${p.parsed._id}`,JSON.stringify(p.parsed))))},l=e=>{const n=U(o,Z);Q(n,V(e,f)),e||G(n,f)},a=e=>{var d,u,v,t;const n=(t=(v=(u=(d=o==null?void 0:o.vueApp)==null?void 0:d._context)==null?void 0:u.config)==null?void 0:v.globalProperties)==null?void 0:t.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(y||(y=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),U(o,n.updateTheme,[V(e,y)]))},h=async e=>{if(g.value=e.files=e.files||g.value||[],!r.value)return!1;const n=Te(e.files,e.additions,e.deletions),d=n.filter(t=>![C.appConfig,C.tokensConfig].includes(t.path));await i(r.value,d,(e.files||[]).length!==0);const u=n.find(t=>t.path===C.appConfig);l(u==null?void 0:u.parsed);const v=n.find(t=>t.path===C.tokensConfig);return a(v==null?void 0:v.parsed),T(),!0},R=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:e}})},x=()=>{const e=window.sessionStorage.getItem("previewToken"),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),ue(xe,{previewToken:e,apiURL:s==null?void 0:s.apiURL,syncPreview:h,requestPreviewSyncAPI:R}).mount(n)},_=async e=>{var u,v,t;const n=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let d=await((u=r.value)==null?void 0:u.getItem(`${n}:${e}`));return d||(d=await((v=r.value)==null?void 0:v.getItem(`cached:${e}`))),d||(d=d=await((t=r.value)==null?void 0:t.getItem(e))),d},I=e=>{var d;const n=window.sessionStorage.getItem("previewToken");r.value&&r.value.setItem(`${n}:${(d=e.parsed)==null?void 0:d._id}`,JSON.stringify(e.parsed))},P=async e=>{var d;const n=window.sessionStorage.getItem("previewToken");await((d=r.value)==null?void 0:d.removeItem(`${n}:${e}`))},T=async()=>{if(c!=null&&c.documentDriven){const{pages:e}=U(o,fe);for(const n in e.value)e.value[n]&&(e.value[n]=await _(e.value[n]._id))}await o.hooks.callHookParallel("app:data:refresh")};return{apiURL:s==null?void 0:s.apiURL,contentStorage:r,syncPreviewFiles:i,syncPreviewAppConfig:l,syncPreviewTokensConfig:a,requestPreviewSynchronization:R,findContentWithId:_,updateContent:I,removeContentWithId:P,requestRerender:T,mountPreviewUI:x,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=W(),n=E(),d=$(""),u=t=>({path:t.path,query:F(t.query),params:F(t.params),fullPath:t.fullPath,meta:F(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(t.origin))return;const{type:p,payload:b={}}=t.data||{};switch(p){case"nuxt-studio:editor:file-selected":{const m=await _(b.path);m&&(m._partial||m._path!==E().path&&(d.value=m._path,e.push(m._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:m=[],deletions:M=[]}=b;for(const k of m)await I(k);for(const k of M)await P(k.path);T();break}case"nuxt-studio:preview:sync":{h(b);break}case"nuxt-studio:config:file-changed":{const{additions:m=[],deletions:M=[]}=b,k=m.find(S=>S.path===C.appConfig);k&&l(k==null?void 0:k.parsed),M.find(S=>S.path===C.appConfig)&&l(void 0);const N=m.find(S=>S.path===C.tokensConfig);N&&a(N==null?void 0:N.parsed),M.find(S=>S.path===C.tokensConfig)&&a(void 0);break}}}),o.hook("page:finish",()=>{v(),o.payload.prerenderedAt&&T()}),o.hook("content:document-driven:finish",({route:t,page:p})=>{t.meta.studio_page_contentId=p==null?void 0:p._id}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:u(E())},"*"),setTimeout(()=>{v()},100)});function v(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(b=>b.getAttribute("data-content-id")),p=Array.from(new Set([n.meta.studio_page_contentId,...t])).filter(Boolean);if(d.value===p[0]){d.value="";return}window.openContentInStudioEditor(p,{navigate:!0,pageContentId:n.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,p={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...u(n),contentIds:t,...p}},"*")}}};export{$e as useStudio};
