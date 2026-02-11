const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./game-BC1A890p.js","./GLTFLoader-DwKRNB9j.js"])))=>i.map(i=>d[i]);
import{T as g,a as b}from"./GLTFLoader-DwKRNB9j.js";const w="modulepreload",v=function(l,r){return new URL(l,r).href},h={},y=function(r,d,u){let f=Promise.resolve();if(d&&d.length>0){let E=function(e){return Promise.all(e.map(s=>Promise.resolve(s).then(i=>({status:"fulfilled",value:i}),i=>({status:"rejected",reason:i}))))};const o=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),p=t?.nonce||t?.getAttribute("nonce");f=E(d.map(e=>{if(e=v(e,u),e in h)return;h[e]=!0;const s=e.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(u)for(let c=o.length-1;c>=0;c--){const a=o[c];if(a.href===e&&(!s||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":w,s||(n.as="script"),n.crossOrigin="",n.href=e,p&&n.setAttribute("nonce",p),document.head.appendChild(n),s)return new Promise((c,a)=>{n.addEventListener("load",c),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})}))}function m(o){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=o,window.dispatchEvent(t),!t.defaultPrevented)throw o}return f.then(o=>{for(const t of o||[])t.status==="rejected"&&m(t.reason);return r().catch(m)})};window.THREE=g;window.GLTFLoader=b;document.getElementById("app")&&y(()=>import("./game-BC1A890p.js"),__vite__mapDeps([0,1]),import.meta.url).catch(l=>{console.error("Failed to load game:",l);const r=document.createElement("div");r.style.cssText=`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: #ff0000;
            padding: 40px;
            border-radius: 10px;
            border: 2px solid #ff0000;
            text-align: center;
            z-index: 10000;
        `,r.innerHTML=`
            <h2>ОШИБКА ЗАГРУЗКИ</h2>
            <p>Не удалось загрузить игру. Попробуйте перезагрузить страницу.</p>
            <button onclick="window.location.reload()" style="
                margin-top: 20px;
                padding: 10px 20px;
                background: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">ПЕРЕЗАГРУЗИТЬ</button>
        `,document.body.appendChild(r)});
