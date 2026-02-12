import{T as te,a as ie}from"./GLTFLoader-DwKRNB9j.js";const ne="modulepreload",ae=function(t,e){return new URL(t,e).href},X={},se=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){let g=function(m){return Promise.all(m.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");r=g(i.map(m=>{if(m=ae(m,n),m in X)return;X[m]=!0;const c=m.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(n)for(let k=s.length-1;k>=0;k--){const S=s[k];if(S.href===m&&(!c||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${p}`))return;const x=document.createElement("link");if(x.rel=c?"stylesheet":ne,c||(x.as="script"),x.crossOrigin="",x.href=m,d&&x.setAttribute("nonce",d),document.head.appendChild(x),c)return new Promise((k,S)=>{x.addEventListener("load",k),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return r.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};window.THREE=te;window.GLTFLoader=ie;document.getElementById("app")&&se(()=>Promise.resolve().then(()=>Re),void 0,import.meta.url).catch(t=>{console.error("Failed to load game:",t);const e=document.createElement("div");e.style.cssText=`
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
        `,e.innerHTML=`
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
        `,document.body.appendChild(e)});class oe{constructor(){this.hitmarker=document.getElementById("hitmarker"),this.line1=this.hitmarker.querySelector(".line-1"),this.line2=this.hitmarker.querySelector(".line-2")}show(){this.resetAnimations(),setTimeout(()=>{this.line1.style.animation="xHitmarkerShow 0.4s ease-out forwards",this.line2.style.animation="xHitmarkerShow2 0.4s ease-out forwards",setTimeout(()=>{this.resetAnimations()},400)},10)}resetAnimations(){this.line1.style.animation="none",this.line2.style.animation="none",this.line1.offsetWidth,this.line2.offsetWidth}}class re{constructor(){this.effect=document.getElementById("screenEventEffect"),this.timeout=null}showEffect(e=.5,i="damage"){this.effect.classList.remove(...this.effect.classList),this.effect.classList.add(i),this.timeout&&(clearTimeout(this.timeout),this.effect.style.opacity="0");const n=.3+e*.5;this.effect.style.opacity=n.toString(),this.timeout=setTimeout(()=>{this.effect.style.opacity="0",this.timeout=null},300)}}class le{constructor(e,i,n){this.maxHealth=e,this.health=n,this.dashCooldown=0,this.maxDashCooldown=i,this.isDashReady=!0,this.waveCount=0,this.isMobile=this.checkIfMobile()}checkIfMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}createGUI(){this.guiContainer=document.createElement("div"),this.guiContainer.id="gameGUI",this.guiContainer.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10001;        // ← change from 100 to 10001
        `,document.body.appendChild(this.guiContainer),this.createHealthBar(),this.createDashBar(),this.createWaveCounter(),this.createControlButtons()}hideUI(){this.guiContainer.style.display="none"}createWaveCounter(){this.waveCounterContainer=document.createElement("div"),this.waveCounterContainer.id="waveCounter";const e=this.isMobile?"18px":"28px",i=this.isMobile?"6px 18px":"10px 30px";this.waveCounterContainer.style.cssText=`
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            font-family: 'Arial', sans-serif;
            font-size: ${e};
            font-weight: bold;
            padding: ${i};
            border: 2px solid #ffaa00;
            border-radius: 40px;
            box-shadow: 0 0 20px rgba(255, 170, 0, 0.5);
            text-shadow: 2px 2px 4px #000;
            letter-spacing: 2px;
            backdrop-filter: blur(4px);
            pointer-events: none;
            z-index: 10002;
        `,this.waveCounterContainer.textContent=`WAVE: ${this.waveCount}`,this.guiContainer.appendChild(this.waveCounterContainer)}createHealthBar(){this.healthBarContainer=document.createElement("div");const e=this.isMobile?"180px":"300px",i=this.isMobile?"24px":"40px",n=this.isMobile?"50px":"60px",r=this.isMobile?"12px":"16px";this.healthBarContainer.style.cssText=`
            position: absolute;
            bottom: ${n};
            left: 20px;
            width: ${e};
            height: ${i};
            background: rgba(0, 0, 0, 0.5);
            border: 2px solid #333;
            border-radius: 5px;
            overflow: hidden;
            pointer-events: auto;
        `,this.healthBarFill=document.createElement("div"),this.healthBarFill.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #00ff88, #00ff37, #00ff00);
            transition: width 0.3s ease;
        `,this.healthBarText=document.createElement("div"),this.healthBarText.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: Arial, sans-serif;
            font-weight: bold;
            font-size: ${r};
            text-shadow: 1px 1px 2px black;
            z-index: 1;
        `,this.healthBarText.textContent=`HEALTH: ${this.health}/${this.maxHealth}`,this.healthBarContainer.appendChild(this.healthBarFill),this.healthBarContainer.appendChild(this.healthBarText),this.guiContainer.appendChild(this.healthBarContainer)}createDashBar(){this.dashBarContainer=document.createElement("div");const e=this.isMobile?"120px":"200px",i=this.isMobile?"18px":"30px",n=(this.isMobile,"20px"),r=this.isMobile?"10px":"14px";this.dashBarContainer.style.cssText=`
            position: absolute;
            bottom: ${n};
            left: 20px;
            width: ${e};
            height: ${i};
            background: rgba(0, 0, 0, 0.5);
            border: 2px solid #333;
            border-radius: 5px;
            overflow: hidden;
            pointer-events: auto;
        `,this.dashBarFill=document.createElement("div"),this.dashBarFill.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #0066ff, #00ccff);
            transition: width 0.1s linear;
        `,this.dashBarText=document.createElement("div"),this.dashBarText.style.cssText=`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: Arial, sans-serif;
            font-weight: bold;
            font-size: ${r};
            text-shadow: 1px 1px 2px black;
            z-index: 1;
        `,this.dashBarText.textContent="DASH: READY",this.dashBarContainer.appendChild(this.dashBarFill),this.dashBarContainer.appendChild(this.dashBarText),this.guiContainer.appendChild(this.dashBarContainer)}createControlButtons(){this.buttonsContainer=document.createElement("div");const e=this.isMobile?"5px":"15px";this.buttonsContainer.style.cssText=`
            position: absolute;
            top: 20px;
            left: 20px;
            display: flex;
            gap: ${e};
            pointer-events: auto;
        `,this.menuButton=document.createElement("button");let i;this.isMobile?i=`
                padding: 4px 8px;
                background: linear-gradient(45deg, #d40c0c, #bb1212);
                color: white;
                border: 1px solid #000000;
                border-radius: 3px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                font-size: 10px;
                cursor: pointer;
                transition: all 0.2s;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            `:i=`
                padding: 12px 24px;
                background: linear-gradient(45deg, #d40c0c, #bb1212);
                color: white;
                border: 2px solid #000000;
                border-radius: 5px;
                font-family: Arial, sans-serif;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.2s;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            `,this.menuButton.style.cssText=i,this.menuButton.textContent="MENU",this.menuButton.onmouseover=()=>this.menuButton.style.background="linear-gradient(45deg, #A0522D, #8B4513)",this.menuButton.onmouseout=()=>this.menuButton.style.background="linear-gradient(45deg, #8B4513, #A0522D)",this.menuButton.onclick=()=>this.openMenu(),this.settingsButton=document.createElement("button"),this.settingsButton.style.cssText=i.replace("linear-gradient(45deg, #d40c0c, #bb1212)","linear-gradient(45deg, #707070, #6B6B6B)").replace("border: 2px solid #000000","border: 2px solid #2A2A2A").replace("border: 1px solid #000000","border: 1px solid #2A2A2A"),this.settingsButton.textContent="SETTINGS",this.settingsButton.onmouseover=()=>this.settingsButton.style.background="linear-gradient(45deg, #6B6B6B, #4A4A4A)",this.settingsButton.onmouseout=()=>this.settingsButton.style.background="linear-gradient(45deg, #4A4A4A, #6B6B6B)",this.settingsButton.onclick=()=>this.openSettings(),this.buttonsContainer.appendChild(this.menuButton),this.buttonsContainer.appendChild(this.settingsButton),this.guiContainer.appendChild(this.buttonsContainer)}updateHealth(e){this.health=Math.max(0,Math.min(e,this.maxHealth));const i=this.health/this.maxHealth*100;this.healthBarFill.style.width=`${i}%`,this.healthBarText.textContent=`HEALTH: ${Math.round(this.health)}/${this.maxHealth}`,i>50?this.healthBarFill.style.background="linear-gradient(to right, #5eff00, #ff9900)":i>25?this.healthBarFill.style.background="linear-gradient(to right, #ff9900, #ff0000)":this.healthBarFill.style.background="#ff0000"}updateWave(e){this.waveCount=e,this.waveCounterContainer&&(this.waveCounterContainer.textContent=`WAVE: ${this.waveCount}`)}takeDamage(e){this.updateHealth(this.health-e)}heal(e){this.updateHealth(this.health+e)}updateDashCooldown(e){this.dashCooldown=e;const i=e/this.maxDashCooldown*100;this.dashBarFill.style.width=`${100-i}%`,e<=0?(this.dashBarText.textContent="DASH: READY",this.isDashReady=!0):(this.dashBarText.textContent=`DASH: ${e.toFixed(1)}s`,this.isDashReady=!1)}startDashCooldown(){if(this.isDashReady){this.isDashReady=!1,this.dashCooldown=this.maxDashCooldown;const e=setInterval(()=>{this.dashCooldown-=.1,this.updateDashCooldown(this.dashCooldown),this.dashCooldown<=0&&(clearInterval(e),this.dashCooldown=0,this.updateDashCooldown(0))},100)}}openMenu(){window.location.href="./index.html"}openSettings(){window.open("./settings.html")}show(){this.guiContainer.style.display="block"}hide(){this.guiContainer.style.display="none"}}class he{constructor(){this.deathScreen=document.getElementById("deathScreen"),this.topOverlay=document.querySelector(".death-overlay.top"),this.bottomOverlay=document.querySelector(".death-overlay.bottom"),this.deathContent=document.querySelector(".death-content"),this.isActive=!1}show(e){if(this.isActive)return;this.isActive=!0,this.deathScreen.style.display="block",this.deathScreen.offsetWidth,this.deathScreen.classList.add("active");const i=document.getElementById("wave-number");i.innerHTML=`Вы дошли до волны: ${e}`,setTimeout(()=>{document.addEventListener("keydown",()=>{window.location.href="./index.html"}),document.addEventListener("touchstart",()=>{window.location.href="./index.html"})},2500)}hide(){this.isActive&&(this.isActive=!1,this.deathScreen.classList.remove("active"),setTimeout(()=>{this.isActive||(this.deathScreen.style.display="none")},1e3))}reset(){this.deathScreen.classList.remove("active"),this.deathScreen.style.display="none",this.isActive=!1}}class ce{constructor(e,i,n,r,a,s,l,d,g,m,c,p,x,k,S,j,L,O,A,I){this.speed=e,this.maxHealth=m,this.health=c,this.isInvicible=r,this.jumpSpeed=p,this.cameraObject=a,this.isDead=i,this.dashSpeed=x,this.dashRegenerationTime=k,this.dashCooldown=S,this.currentDashes=j,this.dashDuration=d,this.dashInvincibilityTime=g,this.screenEffect=new re,this.gameGUI=new le,this.deathScreen=new he,this.shootCooldown=L,this.shootDelay=O,this.parryCooldown=A,this.parryDelay=I,this.manager=s,this.handsObject=n,this.handAnimations=l}getDamage(e){this.isInvicible||(this.health-=e,this.screenEffect.showEffect(.7),this.gameGUI.takeDamage(e))}changeHealth(e){this.health=e,this.screenEffect.showEffect(.7,"heal"),this.gameGUI.updateHealth(e)}death(){this.isDead=!0,this.deathScreen.show(this.manager.waveNumber),this.gameGUI.hideUI()}}class de{constructor(e,i,n,r,a,s,l,d,g,m,c,p,x,k,S){this.objects=e,this.lvlName=i,this.loadedObjects=n,this.enemies=a,this.activeInstances=k,this.THREE=s,this.scene=l,this.loader=g,this.gameFieldBounds=d,this.player=m,this.gameGUI=r,this.enemyModelTemplate=null,this.enemyToxicModelTemplate=null,this.enemyMageModelTemplate=null,this.toxicProjectileTemplate=null,this.waveCooldown=c,this.waveDelay=p,this.waveNumber=x,this.enemyTypesData=null}loadModel(e){return new Promise((i,n)=>{this.loader.load(e,r=>{const a=r.scene;a.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!1)}),a.scale.set(.1,.1,.1),a.position.set(0,-1,0),a.rotation.set(0,0,0),i(a)},void 0,r=>{console.error("Error loading enemy model:",r),n(r)})})}async loadModels(e,i,n,r){try{this.enemyModelTemplate=await this.loadModel(e),this.toxicProjectileTemplate=await this.loadModel(n),this.enemyToxicModelTemplate=await this.loadModelTexture(this.enemyModelTemplate,i),this.enemyMageModelTemplate=await this.loadModelTexture(this.enemyModelTemplate,r)}catch(a){console.error("Failed to load enemy models:",a)}}async loadModelTexture(e,i){return new Promise((n,r)=>{new THREE.TextureLoader().load(i,s=>{s.wrapS=THREE.RepeatWrapping,s.wrapT=THREE.RepeatWrapping,s.flipY=!1,s.premultiplyAlpha=!1,s.needsUpdate=!0;const l=e.clone(!0);l.traverse(d=>{if(d.isMesh){const g=d.material;if(Array.isArray(g))d.material=g.map(m=>{const c=m.clone();return c.map=s,c.map.flipY=!1,c.color.copy(m.color),c.needsUpdate=!0,c});else{const m=g.clone();m.map=s,m.map.flipY=!1,m.color.copy(g.color),m.needsUpdate=!0,d.material=m}d.castShadow=!0,d.receiveShadow=!1}}),n(l)},void 0,s=>{console.error("Error loading texture for a model",s),r(s)})})}removeEnemyByID(e){this.enemies.delete(e)}requestWave(e){this.enemies.size>0||(this.waveCooldown-=e,!(this.waveCooldown>0)&&(this.waveNumber<=3?(this.spawnEnemy(this.waveNumber+1,.02,.07),this.waveDelay=4,this.waveCooldown=this.waveDelay):this.waveNumber<=6?(this.spawnEnemy(this.waveNumber+1,.03,.08),this.waveDelay=5,this.waveCooldown=this.waveDelay):this.waveNumber<=9&&(this.spawnEnemy(this.waveNumber+1,.05,.08),this.waveDelay=6,this.waveCooldown=this.waveDelay),this.waveNumber++,this.gameGUI.updateWave(this.waveNumber)))}setGameFieldBounds(){const e=new this.THREE.Box3;e.setFromObject(this.objects[0]);const i=new this.THREE.Vector3;e.getSize(i),this.gameFieldBounds=new this.THREE.Vector3(i.x,0,i.z)}setupInstanceObject(e){const i=crypto.randomUUID();return this.activeInstances.set(i,e),i}fillEnemyTypes(){let e=new Map;e.set(1,{health:3,speedMultiplier:1,type:1,damage:1,modelTemplateName:"enemyModelTemplate",attackDelay:2}),e.set(2,{health:5,speedMultiplier:0,type:2,damage:1,modelTemplateName:"enemyToxicModelTemplate",attackDelay:3}),e.set(3,{health:6,speedMultiplier:.9,type:3,damage:5,modelTemplateName:"enemyMageModelTemplate",attackDelay:3}),this.enemyTypesData=e}spawnEnemy(e=1,i,n,r=40,a=10){for(let s=0;s<e;s++){let l=this.enemyTypesData.get(1),d=Math.floor(Math.random()*100);d<=r&&(l=this.enemyTypesData.get(2)),d<=a&&(l=this.enemyTypesData.get(3));const g=this[l.modelTemplateName].clone(),m=(Math.random()-.5)*this.gameFieldBounds.x,c=(Math.random()-.5)*this.gameFieldBounds.y;g.position.set(m,l.type===3?3:-1,c);let p=new me;p.speed=(Math.random()*(n-i)+i)*l.speedMultiplier,p.maxHealth=l.health,p.health=p.maxHealth,p.damage=l.damage,p.attackDelay=l.attackDelay+Math.floor(Math.random()*3-Math.random()*2),p.attackCooldown=p.attackDelay,p.manager=this,p.enemyModel=g,p.enemyID=crypto.randomUUID(),p.type=l.type,l.type===2&&(p.enemyProjectileModel=this.toxicProjectileTemplate),p.spawn(),this.enemies.set(p.enemyID,p)}}getEnemyByID(e){return this.enemies.get(e)}}class me{constructor(e,i,n,r,a,s,l,d,g,m,c){this.speed=e,this.maxHealth=i,this.health=n,this.damage=m,this.type=c,this.attackCooldown=d,this.attackDelay=g,this.jumpSpeed=r,this.manager=a,this.enemyID=s,this.enemyModel=l,this.enemyProjectileModel=null,this.enemyLightRayCurrent=null,this.isActive=!1,this.isChasing=!1}spawn(){this.manager.scene.add(this.enemyModel),this.enemyModel.traverse(e=>{(e.isMesh||e.isObject3D)&&(e.userData.enemyInstance=this)}),this.isActive=!0,this.startChasing()}startChasing(){this.isChasing=!0}stopChasing(){this.isChasing=!1}update(){if(!this.isActive||!this.isChasing||!this.manager.player)return;if(this.health<=0)return this.remove();const e=this.manager.THREE,i=this.manager.player.cameraObject.position,n=this.enemyModel,r=n.position.clone(),a=new e.Vector3;if(a.subVectors(i,r),a.y=0,a.normalize(),a.length()>.001){const s=Math.atan2(a.x,a.z);n.rotation.y=s}if(this.attackCooldown<=0){if(this.type===2)return this.fireProjectile();if(this.type===3&&!this.enemyLightRayCurrent)return this.fireRay()}if(this.getDistanceToPlayer()<=1){if(this.type!=1)return;if(this.attackCooldown<=0){this.damagePlayer();return}return}n.position.x+=a.x*this.speed,n.position.z+=a.z*this.speed}fireProjectile(){let e=new pe;e.damage=2,e.speed=10,e.lifeTime=10,e.manager=this.manager,e.model=this.manager.toxicProjectileTemplate.clone();const i=this.manager.THREE;e.velocity=new i.Vector3;const n=new i.Vector3(0,0,1);this.enemyModel.getWorldDirection(n),e.moveDirection=n.clone(),e.projectileID=this.manager.setupInstanceObject(e),e.instantiate(this.enemyModel.rotation,this.enemyModel.position),this.attackCooldown=this.attackDelay}fireRay(){let e=new ue;e.damage=this.damage,e.remainTime=2,e.manager=this.manager,e.speed=.035,e.rayID=this.manager.setupInstanceObject(e),e.instantiate(),this.enemyLightRayCurrent=e,e.parentEnemy=this,this.attackCooldown=this.attackDelay}damagePlayer(){this.manager.player.getDamage(this.damage),this.attackCooldown=this.attackDelay}getDamage(e){this.health-=e}remove(){this.stopChasing(),this.isActive=!1,this.manager.removeEnemyByID(this.enemyID),this.enemyLightRayCurrent&&this.enemyLightRayCurrent.remove(),this.manager.scene.remove(this.enemyModel)}getDistanceToPlayer(){if(!this.manager.player)return 1/0;const e=this.manager.player.cameraObject.position,i=this.enemyModel.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}}class pe{constructor(e,i,n,r,a,s,l,d){this.projectileID=l,this.damage=e,this.speed=i,this.moveDirection=n,this.model=r,this.lifeTime=a,this.isActive=!1,this.manager=s,this.velocity=d,this.isParried=!1}instantiate(e,i){this.manager.scene.add(this.model),this.model.rotation.copy(e),this.model.position.copy(i),this.velocity.copy(this.moveDirection).multiplyScalar(this.speed),this.model.traverse(n=>{(n.isMesh||n.isObject3D)&&(n.userData.Projectile=this)}),this.isActive=!0}update(e){if(!this.isActive||this.lifeTime<=0)return;if(this.moveDirection&&(this.model.position.x+=this.velocity.x*e,this.model.position.z+=this.velocity.z*e),this.lifeTime-=e,this.getDistanceToPlayer()<=1){this.damagePlayer(),this.deactivate();return}if(this.lifeTime<=0&&this.deactivate(),!this.isParried)return;const i=this.getNearEnemy();i&&(this.damageEnemy(i),this.deactivate())}getNearEnemy(){if(this.manager.enemies.size<=0)return null;const e=this.model.position;let i=null;const n=2;return this.manager.enemies.forEach((r,a)=>{if(i)return;this.getDistance(r.enemyModel.position,e)<=n&&(i=r)}),i}getDistanceToPlayer(){return this.manager.player?this.getDistance(this.manager.player.cameraObject.position,this.model.position):1/0}damagePlayer(){this.manager.player.getDamage(this.damage),this.deactivate()}damageEnemy(e){e.getDamage(100)}onParry(){const e=this.manager.THREE,i=this.manager.player.cameraObject,n=new e.Vector3(0,0,-1);i.getWorldDirection(n),this.moveDirection=n.clone(),this.velocity.copy(this.moveDirection).multiplyScalar(this.speed*2);const r=Math.atan2(this.moveDirection.x,this.moveDirection.z);this.model.rotation.y=r,this.isParried=!0}getDistance(e,i){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}deactivate(){this.isActive=!1,this.manager.scene.remove(this.model),this.manager.activeInstances.delete(this.projectileID)}}class ue{constructor(e,i,n,r,a,s){this.damage=i,this.remainTime=n,this.manager=r,this.player=null,this.parentEnemy=null,this.object=a,this.rayID=e,this.speed=s}instantiate(){const e=this.manager.THREE,i=1,n=32,r=new e.CircleGeometry(i,n),a=new e.MeshBasicMaterial({color:16777215});a.transparent=!0,a.opacity=.2;const s=new e.Mesh(r,a);s.position.copy(this.manager.player.cameraObject.position),s.rotation.x=-Math.PI/2,this.object=s,this.manager.scene.add(this.object),s.position.y-=.99,this.player=this.manager.player}update(e){if(this.object.material.opacity>=1)return this.remainActivated(e);this.object.material.opacity+=e/2,this.object.scale.set(this.object.scale.x+=e,this.object.scale.y+=e,this.object.scale.z+=e);const i=this.manager.THREE,n=new i.Vector3;n.subVectors(this.player.cameraObject.position,this.object.position),n.y=0,n.normalize(),this.object.position.x+=n.x*this.speed,this.object.position.z+=n.z*this.speed}remainActivated(e){this.remainTime-=e,this.remainTime<=0&&this.remove(),this.getDistanceToPlayer()<=this.object.scale.x&&this.damagePlayer()}damagePlayer(){this.player.getDamage(this.damage),this.remove()}getDistanceToPlayer(){if(!this.player)return 1/0;const e=this.player.cameraObject.position,i=this.enemyModel.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}remove(){this.parentEnemy.enemyLightRayCurrent=null,this.manager.scene.remove(this.object),this.manager.activeInstances.delete(this.rayID)}getDistanceToPlayer(){if(!this.manager.player)return 1/0;const e=this.player.cameraObject.position,i=this.object.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}}const C={isCursorLocked:!1,sens:1,fov:75,invert:!1};function q(t){const e=JSON.parse(t);Object.entries(e).forEach(([i,n])=>{C[i]===void 0||C[i]===null||(C[i]=n,i==="fov"&&fe(n))})}window.addEventListener("storage",t=>{t.key==="settings"&&t.newValue&&q(t.newValue)});const B=new THREE.Scene;let R;B.background=ge();const f=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,1e3);B.add(f);q(localStorage.getItem("settings")||JSON.stringify({sens:1,invert:!1}));function fe(t){f.fov=t,f.updateProjectionMatrix()}const N=new THREE.Raycaster,M=new THREE.WebGLRenderer({antialias:!0});M.setSize(window.innerWidth,window.innerHeight);M.shadowMap.enabled=!0;M.shadowMap.type=THREE.PCFSoftShadowMap;M.toneMapping=THREE.ACESFilmicToneMapping;M.toneMappingExposure=1;M.setPixelRatio(.7);document.getElementById("app").appendChild(M.domElement);ye();function ye(){const t=new THREE.DirectionalLight(16777215,1.5);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=1,t.shadow.camera.far=50,t.shadow.camera.left=-20,t.shadow.camera.right=20,t.shadow.camera.top=20,t.shadow.camera.bottom=-20,t.shadow.bias=-.001,B.add(t),t.target.position.set(0,0,0),B.add(t.target);const e=new THREE.AmbientLight(16777215,.8);B.add(e)}function ge(){return new THREE.TextureLoader().load("./assets/skybox_default.png",e=>{e.mapping=THREE.EquirectangularReflectionMapping,B.background=e,console.log("Skybox loaded as equirectangular")},void 0,e=>{console.error("Error:",e),B.background=new THREE.Color(8900331)}),new THREE.Color(8900331)}const K=new GLTFLoader;let h=be();const b=xe(),H={},_=new oe;we("./models/model.glb");function we(t){K.load(t,function(e){const i=e.scene;i.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.receiveShadow=!1,n.material&&(n.material.roughness=0,n.material.metalness=0))}),i.scale.set(1,1,1),i.position.set(0,-1.65,.1),i.rotation.set(0,135,0),f.add(i),h.handsObject=i,R=new THREE.AnimationMixer(i),R.addEventListener("finished",ve),e.animations.length>0&&(h.handAnimations=e.animations,R.clipAction(e.animations[2]).play())},void 0,function(e){console.error("Error loading model:",e)})}function $(t){if(R&&h){R.stopAllAction();const e=h.handAnimations;if(e&&e.length>0){const i=R.clipAction(e[t]);i.setLoop(THREE.LoopOnce),i.clampWhenFinished=!0,i.reset(),i.play()}}}function ve(){$(2)}function be(){const t=new ce;return t.cameraObject=f,t.isDead=!1,t.speed=10,t.maxHealth=15,t.health=t.maxHealth,t.isInvicible=!1,t.dashSpeed=50,t.dashRegenerationTime=3,t.dashCooldown=0,t.dashDuration=0,t.dashInvincibilityTime=.5,t.shootDelay=.4,t.shootCooldown=0,t.parryDelay=.5,t.parryCooldown=0,t.gameGUI.maxHealth=t.maxHealth,t.gameGUI.health=t.maxHealth,t.gameGUI.maxDashCooldown=t.dashRegenerationTime,t.gameGUI.createGUI(),t}function xe(){const t=new de;return t.objects=[],t.enemies=new Map,t.activeInstances=new Map,t.THREE=THREE,t.scene=B,t.loader=K,t.player=h,t.waveDelay=2,t.waveCooldown=3,t.waveNumber=0,t.gameGUI=h.gameGUI,h.manager=t,t.loadModels("./models/enemy.glb","./assets/enemy_toxic.png","./models/toxic_projectile.glb","./assets/enemy_mage.png"),t.fillEnemyTypes(),t.objects.push(Ee()),t.setGameFieldBounds(),t}function Ee(){const t=new THREE.PlaneGeometry(50,50),e=document.createElement("canvas");e.width=1024,e.height=1024;const i=e.getContext("2d");for(let s=0;s<e.width;s+=4)for(let l=0;l<e.height;l+=4){const d=Math.random()*100;i.fillStyle=`rgb(${120+d}, ${100+d*.5}, ${80+d*.3})`,i.fillRect(s,l,4,4)}const n=new THREE.CanvasTexture(e);n.wrapS=THREE.RepeatWrapping,n.wrapT=THREE.RepeatWrapping,n.repeat.set(8,8);const r=new THREE.MeshStandardMaterial({map:n,roughness:.9,metalness:.1,side:THREE.DoubleSide}),a=new THREE.Mesh(t,r);return a.rotation.x=-Math.PI/2,a.position.y=-1,a.receiveShadow=!0,B.add(a),a}function J(t){N.far=t,N.setFromCamera(new THREE.Vector2(0,0),f);const e=N.intersectObjects(B.children);if(e.length>0)return e[0]}const y={velocity:new THREE.Vector3,isMoving:!1,shakeTime:0,bobPhase:0,moveSpeed:h.speed/100,yaw:0,pitch:0,sensitivity:.002,isLocked:!1};f.position.set(0,0,5);function Te(t){if(!y.isLocked)return;const e=t.movementX||t.mozMovementX||t.webkitMovementX||0,i=t.movementY||t.mozMovementY||t.webkitMovementY||0;y.yaw-=e*y.sensitivity*C.sens*(C.invert?-1:1),y.pitch-=i*y.sensitivity*C.sens*(C.invert?-1:1),y.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,y.pitch)),f.rotation.order="YXZ",f.rotation.y=y.yaw,f.rotation.x=y.pitch}function Ce(t){H[t.code]=!0}function Me(t){H[t.code]=!1}function ke(t){!h.isDead&&h.health<=0&&h.death(),h.dashCooldown-=t,h.shootCooldown-=t,h.parryCooldown-=t,h.dashDuration>0?(h.dashDuration-=t,h.isInvicible=!0):h.isInvicible&&(h.isInvicible=!1),b.requestWave&&b.requestWave(t),b.enemies&&b.enemies.forEach((e,i)=>{e.attackCooldown!==void 0&&(e.attackCooldown-=t)})}function De(){const t=new THREE.Vector3,e=new THREE.Vector3,i=new THREE.Vector3;f.getWorldDirection(e),e.y=0,e.normalize(),i.crossVectors(e,f.up),i.normalize();let n=!1;h.dashCooldown<=0&&(n=H.ShiftLeft);const r=n?h.dashSpeed:1;if(n&&(h.dashDuration=h.dashInvincibilityTime,h.dashCooldown=h.dashRegenerationTime,h.gameGUI&&h.gameGUI.startDashCooldown&&h.gameGUI.startDashCooldown()),H.KeyW&&t.add(e),H.KeyS&&t.sub(e),H.KeyA&&t.sub(i),H.KeyD&&t.add(i),n&&t.length()===0&&t.copy(e),t.length()>0){t.normalize();const s=y.moveSpeed*r;y.velocity.lerp(t.multiplyScalar(s),.2),y.isMoving=!0}else y.velocity.lerp(new THREE.Vector3,.1),y.isMoving=!1,y.shakeTime=0;const a=f.position.clone();if(f.position.add(y.velocity),b&&b.gameFieldBounds){const s=b.gameFieldBounds.x*.5,l=b.gameFieldBounds.z*.5;(f.position.x>s||f.position.x<-s||f.position.z>l||f.position.z<-l)&&f.position.copy(a)}}function Be(){let t=J(3);if(t){let e=t.object;if(e.userData&&e.userData.enemyInstance){const i=e.userData.enemyInstance;i.getDamage(.5),_.show();const n=h.cameraObject.position,r=i.enemyModel.position,a=new THREE.Vector3().subVectors(r,n).normalize(),s=5,l=300,d=r.clone().add(a.multiplyScalar(s));if(b&&b.gameFieldBounds){const g=b.gameFieldBounds.x*.5,m=b.gameFieldBounds.z*.5;d.x=THREE.MathUtils.clamp(d.x,-g,g),d.z=THREE.MathUtils.clamp(d.z,-m,m)}new TWEEN.Tween(i.enemyModel.position).to({x:d.x,y:r.y,z:d.z},l).easing(TWEEN.Easing.Quadratic.Out).start()}if(e.userData&&e.userData.Projectile){const i=e.userData.Projectile;h.changeHealth(h.maxHealth),i.onParry()}}$(1),h.parryCooldown=h.parryDelay}function W(){let t=J(1e3);if(t){let e=t.object;e.userData&&e.userData.enemyInstance&&(e.userData.enemyInstance.getDamage(1),_.show())}$(3),h.shootCooldown=h.shootDelay}function Se(t){M.domElement.requestPointerLock(),C.isCursorLocked=!0,t.button==0&&h.shootCooldown<=0&&W()}function He(){H.Escape&&C.isCursorLocked&&(document.exitPointerLock(),C.isCursorLocked=!1),H.KeyF&&h.parryCooldown<=0&&Be()}document.addEventListener("pointerlockchange",()=>{y.isLocked=!!document.pointerLockElement});M.domElement.addEventListener("mousemove",Te,!1);M.domElement.addEventListener("mousedown",Se,!1);window.addEventListener("keydown",Ce);window.addEventListener("keyup",Me);window.addEventListener("resize",()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(.7)});const Ie=new THREE.Clock;function Z(){if(h.isDead)return;requestAnimationFrame(Z),He(),TWEEN.update();const t=Ie.getDelta();b.enemies&&b.enemies.forEach((e,i)=>{e.update&&e.update()}),b.activeInstances&&b.activeInstances.forEach((e,i)=>{e.update&&e.update(t)}),De(),ke(t),R&&R.update(t),M.render(B,f)}window.camera=f;window.cameraState=y;Z();const Re=Object.freeze(Object.defineProperty({__proto__:null,PLAYER:h,camera:f,cameraState:y,gameplaySettings:C,shoot:W},Symbol.toStringTag,{value:"Module"}));(function(){if(!("ontouchstart"in window)&&navigator.maxTouchPoints<=0)return;const t=document.createElement("style");t.textContent=`
        @media (pointer: coarse) {
            .mobile-controls { display: block !important; }
            canvas { touch-action: none; }
        }
        .mobile-controls {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10000;
            user-select: none;
            -webkit-touch-callout: none;
        }
        .look-area {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: auto;
            touch-action: none;
        }
        .joystick-container {
            position: absolute;
            bottom: 100px;
            left: 30px;
            width: 60px;
            height: 60px;
            pointer-events: auto;
            touch-action: none;
        }
        .joystick-base {
            width: 100%;
            height: 100%;
            background: rgba(20, 25, 35, 0.8);
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.6);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
        }
        .joystick-knob {
            width: 30px;
            height: 30px;
            background: rgba(220, 240, 255, 0.95);
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 20px rgba(0,160,255,0.8);
            transition: transform 0.02s;
        }
        .action-buttons {
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 80px;
            pointer-events: auto;
            touch-action: manipulation;
        }
        .action-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(30, 35, 50, 0.8);
            border: 2px solid rgba(255,255,255,0.7);
            backdrop-filter: blur(4px);
            color: white;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 25px rgba(0,0,0,0.6);
            transition: all 0.1s;
            touch-action: manipulation;
        }
        .action-btn:active {
            transform: scale(0.85);
            background: rgba(100, 120, 200, 0.9);
            border-color: white;
            box-shadow: 0 0 30px rgba(100,200,255,0.9);
        }
        .dash-btn { background: rgba(200, 23, 0, 0.8); }
        .parry-btn { background: rgba(200, 0, 0, 0.8); }
    `,document.head.appendChild(t);const e=document.createElement("div");e.className="mobile-controls";const i=document.createElement("div");i.className="look-area",e.appendChild(i);const n=document.createElement("div");n.className="joystick-container",n.innerHTML=`
        <div class="joystick-base">
            <div class="joystick-knob" id="joystick-knob"></div>
        </div>
    `,e.appendChild(n);const r=document.createElement("div");r.className="action-buttons",r.innerHTML=`
        <div class="action-btn dash-btn" id="dash-btn">⚡</div>
        <div class="action-btn parry-btn" id="parry-btn">✋</div>
    `,e.appendChild(r),document.body.appendChild(e);function a(o,u){window.dispatchEvent(new KeyboardEvent(o,{code:u,key:u==="ShiftLeft"?"Shift":u.replace("Key",""),bubbles:!0,cancelable:!0}))}const s=document.querySelector(".joystick-base"),l=document.getElementById("joystick-knob"),d=55;let g=!1,m={x:0,y:0};const c={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD"};function p(o){const v=Math.hypot(o.x,o.y);if(v<.2){a("keyup",c.forward),a("keyup",c.backward),a("keyup",c.left),a("keyup",c.right);return}const D=o.x/v,E=-(o.y/v),T=D;E>.3?(a("keydown",c.forward),a("keyup",c.backward)):E<-.3?(a("keydown",c.backward),a("keyup",c.forward)):(a("keyup",c.forward),a("keyup",c.backward)),T>.3?(a("keydown",c.right),a("keyup",c.left)):T<-.3?(a("keydown",c.left),a("keyup",c.right)):(a("keyup",c.right),a("keyup",c.left))}function x(o){o.preventDefault(),g=!0}function k(o){if(!g)return;o.preventDefault();const u=o.touches[0],v=s.getBoundingClientRect(),D=v.left+v.width/2,w=v.top+v.height/2;let E=u.clientX-D,T=u.clientY-w;const z=Math.hypot(E,T);z>d&&(E=E/z*d,T=T/z*d),l.style.transform=`translate(${E}px, ${T}px)`,m.x=E/d,m.y=T/d,p(m)}function S(o){o.preventDefault(),g=!1,m={x:0,y:0},l.style.transform="translate(0px, 0px)",p(m)}s.addEventListener("touchstart",x,{passive:!1}),s.addEventListener("touchmove",k,{passive:!1}),s.addEventListener("touchend",S,{passive:!1}),s.addEventListener("touchcancel",S,{passive:!1});const j=document.getElementById("dash-btn");j.addEventListener("touchstart",o=>{o.preventDefault(),a("keydown","ShiftLeft")},{passive:!1}),j.addEventListener("touchend",o=>{o.preventDefault(),a("keyup","ShiftLeft")},{passive:!1}),j.addEventListener("touchcancel",o=>{o.preventDefault(),a("keyup","ShiftLeft")},{passive:!1});const L=document.getElementById("parry-btn");L.addEventListener("touchstart",o=>{o.preventDefault(),a("keydown","KeyF")},{passive:!1}),L.addEventListener("touchend",o=>{o.preventDefault(),a("keyup","KeyF")},{passive:!1}),L.addEventListener("touchcancel",o=>{o.preventDefault(),a("keyup","KeyF")},{passive:!1});const O=10,A=new Map;let I=null,U=0,G=0;function Y(o){if(o.target.closest(".joystick-container, .action-buttons, .action-btn, #gameGUI, button, .health-bar, .dash-bar"))return;const u=o.touches[0];if(u.clientX<window.innerWidth/2)return;o.preventDefault();const v=u.identifier;A.set(v,{startX:u.clientX,startY:u.clientY,moved:!1}),I=v,U=u.clientX,G=u.clientY}function V(o){if(I===null||o.target.closest(".joystick-container, .action-buttons"))return;o.preventDefault();for(let w=0;w<o.touches.length;w++){const E=o.touches[w],T=A.get(E.identifier);if(T){const z=E.clientX-T.startX,ee=E.clientY-T.startY;Math.hypot(z,ee)>O&&(T.moved=!0)}}let u=null;for(let w=0;w<o.touches.length;w++)if(o.touches[w].identifier===I){u=o.touches[w];break}if(!u){I=null;return}const v=u.clientX-U,D=u.clientY-G;if(v!==0||D!==0){const w=.002*(C?.sens||1)*(C?.invert?-1:1);y.yaw-=v*w,y.pitch-=D*w,y.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,y.pitch)),f.rotation.order="YXZ",f.rotation.y=y.yaw,f.rotation.x=y.pitch;const E=new MouseEvent("mousemove",{movementX:v,movementY:D,clientX:u.clientX,clientY:u.clientY,bubbles:!0,cancelable:!0});o.target.dispatchEvent(E)}U=u.clientX,G=u.clientY}function F(o){o.preventDefault();for(let u=0;u<o.changedTouches.length;u++){const D=o.changedTouches[u].identifier,w=A.get(D);w&&(!w.moved&&h&&h.shootCooldown<=0&&W(),A.delete(D)),D===I&&(I=null)}}const P=document.querySelector("canvas");P&&(P.addEventListener("touchstart",Y,{passive:!1}),P.addEventListener("touchmove",V,{passive:!1}),P.addEventListener("touchend",F,{passive:!1}),P.addEventListener("touchcancel",F,{passive:!1})),i.addEventListener("touchstart",Y,{passive:!1}),i.addEventListener("touchmove",V,{passive:!1}),i.addEventListener("touchend",F,{passive:!1}),i.addEventListener("touchcancel",F,{passive:!1}),document.addEventListener("touchmove",o=>{o.target.closest(".mobile-controls, canvas")&&o.preventDefault()},{passive:!1}),document.addEventListener("touchstart",o=>{o.target.closest("button, #gameGUI, .health-bar, .dash-bar")&&o.stopPropagation()},{passive:!1});function Q(){document.querySelector(".mobile-controls")&&h.isDead&&(s.style.display="none",j.style.display="none",L.style.display="none")}setInterval(Q,500)})();
