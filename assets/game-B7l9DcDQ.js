const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./game-CoP5Wb5Y.js","./GLTFLoader-DhGXkMM9.js"])))=>i.map(i=>d[i]);
import{T as E,a as g}from"./GLTFLoader-DhGXkMM9.js";const w="modulepreload",T=function(a,n){return new URL(a,n).href},h={},v=function(n,d,u){let f=Promise.resolve();if(d&&d.length>0){let b=function(e){return Promise.all(e.map(s=>Promise.resolve(s).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};const r=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),p=t?.nonce||t?.getAttribute("nonce");f=b(d.map(e=>{if(e=T(e,u),e in h)return;h[e]=!0;const s=e.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(u)for(let i=r.length-1;i>=0;i--){const c=r[i];if(c.href===e&&(!s||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":w,s||(o.as="script"),o.crossOrigin="",o.href=e,p&&o.setAttribute("nonce",p),document.head.appendChild(o),s)return new Promise((i,c)=>{o.addEventListener("load",i),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})}))}function m(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return f.then(r=>{for(const t of r||[])t.status==="rejected"&&m(t.reason);return n().catch(m)})};window.THREE=E;window.GLTFLoader=g;console.log("THREE loaded:",!!E);console.log("GLTFLoader loaded:",!!g);console.log("TWEEN loaded:",typeof TWEEN<"u");document.getElementById("app")?v(()=>import("./game-CoP5Wb5Y.js"),__vite__mapDeps([0,1]),import.meta.url).catch(a=>{console.error("Failed to load game:",a);const n=document.createElement("div");n.style.cssText=`
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
        `,n.innerHTML=`
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
        `,document.body.appendChild(n)}):console.log("This is the menu page. Start game from index.html");
