import{T as ee,a as te}from"./GLTFLoader-DwKRNB9j.js";const ie="modulepreload",ae=function(t,e){return new URL(t,e).href},q={},ne=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){let y=function(m){return Promise.all(m.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");o=y(i.map(m=>{if(m=ae(m,a),m in q)return;q[m]=!0;const c=m.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(a)for(let C=s.length-1;C>=0;C--){const k=s[C];if(k.href===m&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${p}`))return;const v=document.createElement("link");if(v.rel=c?"stylesheet":ie,c||(v.as="script"),v.crossOrigin="",v.href=m,d&&v.setAttribute("nonce",d),document.head.appendChild(v),c)return new Promise((C,k)=>{v.addEventListener("load",C),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&n(l.reason);return e().catch(n)})};window.THREE=ee;window.GLTFLoader=te;document.getElementById("app")&&ne(()=>Promise.resolve().then(()=>Ie),void 0,import.meta.url).catch(t=>{console.error("Failed to load game:",t);const e=document.createElement("div");e.style.cssText=`
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
        `,document.body.appendChild(e)});class se{constructor(){this.hitmarker=document.getElementById("hitmarker"),this.line1=this.hitmarker.querySelector(".line-1"),this.line2=this.hitmarker.querySelector(".line-2")}show(){this.resetAnimations(),setTimeout(()=>{this.line1.style.animation="xHitmarkerShow 0.4s ease-out forwards",this.line2.style.animation="xHitmarkerShow2 0.4s ease-out forwards",setTimeout(()=>{this.resetAnimations()},400)},10)}resetAnimations(){this.line1.style.animation="none",this.line2.style.animation="none",this.line1.offsetWidth,this.line2.offsetWidth}}class oe{constructor(){this.effect=document.getElementById("screenEventEffect"),this.timeout=null}showEffect(e=.5,i="damage"){this.effect.classList.remove(...this.effect.classList),this.effect.classList.add(i),this.timeout&&(clearTimeout(this.timeout),this.effect.style.opacity="0");const a=.3+e*.5;this.effect.style.opacity=a.toString(),this.timeout=setTimeout(()=>{this.effect.style.opacity="0",this.timeout=null},300)}}class re{constructor(e,i,a){this.maxHealth=e,this.health=a,this.dashCooldown=0,this.maxDashCooldown=i,this.isDashReady=!0,this.waveCount=0,this.isMobile=this.checkIfMobile()}checkIfMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}createGUI(){this.guiContainer=document.createElement("div"),this.guiContainer.id="gameGUI",this.guiContainer.style.cssText=`
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
        `,this.waveCounterContainer.textContent=`WAVE: ${this.waveCount}`,this.guiContainer.appendChild(this.waveCounterContainer)}createHealthBar(){this.healthBarContainer=document.createElement("div");const e=this.isMobile?"180px":"300px",i=this.isMobile?"24px":"40px",a=this.isMobile?"50px":"60px",o=this.isMobile?"12px":"16px";this.healthBarContainer.style.cssText=`
            position: absolute;
            bottom: ${a};
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
            font-size: ${o};
            text-shadow: 1px 1px 2px black;
            z-index: 1;
        `,this.healthBarText.textContent=`HEALTH: ${this.health}/${this.maxHealth}`,this.healthBarContainer.appendChild(this.healthBarFill),this.healthBarContainer.appendChild(this.healthBarText),this.guiContainer.appendChild(this.healthBarContainer)}createDashBar(){this.dashBarContainer=document.createElement("div");const e=this.isMobile?"120px":"200px",i=this.isMobile?"18px":"30px",a=(this.isMobile,"20px"),o=this.isMobile?"10px":"14px";this.dashBarContainer.style.cssText=`
            position: absolute;
            bottom: ${a};
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
            font-size: ${o};
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
            `,this.menuButton.style.cssText=i,this.menuButton.textContent="MENU",this.menuButton.onmouseover=()=>this.menuButton.style.background="linear-gradient(45deg, #A0522D, #8B4513)",this.menuButton.onmouseout=()=>this.menuButton.style.background="linear-gradient(45deg, #8B4513, #A0522D)",this.menuButton.onclick=()=>this.openMenu(),this.settingsButton=document.createElement("button"),this.settingsButton.style.cssText=i.replace("linear-gradient(45deg, #d40c0c, #bb1212)","linear-gradient(45deg, #707070, #6B6B6B)").replace("border: 2px solid #000000","border: 2px solid #2A2A2A").replace("border: 1px solid #000000","border: 1px solid #2A2A2A"),this.settingsButton.textContent="SETTINGS",this.settingsButton.onmouseover=()=>this.settingsButton.style.background="linear-gradient(45deg, #6B6B6B, #4A4A4A)",this.settingsButton.onmouseout=()=>this.settingsButton.style.background="linear-gradient(45deg, #4A4A4A, #6B6B6B)",this.settingsButton.onclick=()=>this.openSettings(),this.buttonsContainer.appendChild(this.menuButton),this.buttonsContainer.appendChild(this.settingsButton),this.guiContainer.appendChild(this.buttonsContainer)}updateHealth(e){this.health=Math.max(0,Math.min(e,this.maxHealth));const i=this.health/this.maxHealth*100;this.healthBarFill.style.width=`${i}%`,this.healthBarText.textContent=`HEALTH: ${Math.round(this.health)}/${this.maxHealth}`,i>50?this.healthBarFill.style.background="linear-gradient(to right, #5eff00, #ff9900)":i>25?this.healthBarFill.style.background="linear-gradient(to right, #ff9900, #ff0000)":this.healthBarFill.style.background="#ff0000"}updateWave(e){this.waveCount=e,this.waveCounterContainer&&(this.waveCounterContainer.textContent=`WAVE: ${this.waveCount}`)}takeDamage(e){this.updateHealth(this.health-e)}heal(e){this.updateHealth(this.health+e)}updateDashCooldown(e){this.dashCooldown=e;const i=e/this.maxDashCooldown*100;this.dashBarFill.style.width=`${100-i}%`,e<=0?(this.dashBarText.textContent="DASH: READY",this.isDashReady=!0):(this.dashBarText.textContent=`DASH: ${e.toFixed(1)}s`,this.isDashReady=!1)}startDashCooldown(){if(this.isDashReady){this.isDashReady=!1,this.dashCooldown=this.maxDashCooldown;const e=setInterval(()=>{this.dashCooldown-=.1,this.updateDashCooldown(this.dashCooldown),this.dashCooldown<=0&&(clearInterval(e),this.dashCooldown=0,this.updateDashCooldown(0))},100)}}openMenu(){window.location.href="./index.html"}openSettings(){window.open("./settings.html")}show(){this.guiContainer.style.display="block"}hide(){this.guiContainer.style.display="none"}}class le{constructor(){this.deathScreen=document.getElementById("deathScreen"),this.topOverlay=document.querySelector(".death-overlay.top"),this.bottomOverlay=document.querySelector(".death-overlay.bottom"),this.deathContent=document.querySelector(".death-content"),this.isActive=!1}show(e){if(this.isActive)return;this.isActive=!0,this.deathScreen.style.display="block",this.deathScreen.offsetWidth,this.deathScreen.classList.add("active");const i=document.getElementById("wave-number");i.innerHTML=`Вы дошли до волны: ${e}`,setTimeout(()=>{document.addEventListener("keydown",()=>{window.location.href="./index.html"}),document.addEventListener("touchstart",()=>{window.location.href="./index.html"})},2500)}hide(){this.isActive&&(this.isActive=!1,this.deathScreen.classList.remove("active"),setTimeout(()=>{this.isActive||(this.deathScreen.style.display="none")},1e3))}reset(){this.deathScreen.classList.remove("active"),this.deathScreen.style.display="none",this.isActive=!1}}class he{constructor(e,i,a,o,n,s,l,d,y,m,c,p,v,C,k,L,j,A,P,z){this.speed=e,this.maxHealth=m,this.health=c,this.isInvicible=o,this.jumpSpeed=p,this.cameraObject=n,this.isDead=i,this.dashSpeed=v,this.dashRegenerationTime=C,this.dashCooldown=k,this.currentDashes=L,this.dashDuration=d,this.dashInvincibilityTime=y,this.screenEffect=new oe,this.gameGUI=new re,this.deathScreen=new le,this.shootCooldown=j,this.shootDelay=A,this.parryCooldown=P,this.parryDelay=z,this.manager=s,this.handsObject=a,this.handAnimations=l}getDamage(e){this.isInvicible||(this.health-=e,this.screenEffect.showEffect(.7),this.gameGUI.takeDamage(e))}changeHealth(e){this.health=e,this.screenEffect.showEffect(.7,"heal"),this.gameGUI.updateHealth(e)}death(){this.isDead=!0,this.deathScreen.show(this.manager.waveNumber),this.gameGUI.hideUI()}}class ce{constructor(e,i,a,o,n,s,l,d,y,m,c,p,v,C,k){this.objects=e,this.lvlName=i,this.loadedObjects=a,this.enemies=n,this.activeInstances=C,this.THREE=s,this.scene=l,this.loader=y,this.gameFieldBounds=d,this.player=m,this.gameGUI=o,this.enemyModelTemplate=null,this.enemyToxicModelTemplate=null,this.enemyMageModelTemplate=null,this.toxicProjectileTemplate=null,this.waveCooldown=c,this.waveDelay=p,this.waveNumber=v,this.enemyTypesData=null}loadModel(e){return new Promise((i,a)=>{this.loader.load(e,o=>{const n=o.scene;n.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!1)}),n.scale.set(.1,.1,.1),n.position.set(0,-1,0),n.rotation.set(0,0,0),i(n)},void 0,o=>{console.error("Error loading enemy model:",o),a(o)})})}async loadModels(e,i,a,o){try{this.enemyModelTemplate=await this.loadModel(e),this.toxicProjectileTemplate=await this.loadModel(a),this.enemyToxicModelTemplate=await this.loadModelTexture(this.enemyModelTemplate,i),this.enemyMageModelTemplate=await this.loadModelTexture(this.enemyModelTemplate,o)}catch(n){console.error("Failed to load enemy models:",n)}}async loadModelTexture(e,i){return new Promise((a,o)=>{new THREE.TextureLoader().load(i,s=>{s.wrapS=THREE.RepeatWrapping,s.wrapT=THREE.RepeatWrapping,s.flipY=!1,s.premultiplyAlpha=!1,s.needsUpdate=!0;const l=e.clone(!0);l.traverse(d=>{if(d.isMesh){const y=d.material;if(Array.isArray(y))d.material=y.map(m=>{const c=m.clone();return c.map=s,c.map.flipY=!1,c.color.copy(m.color),c.needsUpdate=!0,c});else{const m=y.clone();m.map=s,m.map.flipY=!1,m.color.copy(y.color),m.needsUpdate=!0,d.material=m}d.castShadow=!0,d.receiveShadow=!1}}),a(l)},void 0,s=>{console.error("Error loading texture for a model",s),o(s)})})}removeEnemyByID(e){this.enemies.delete(e)}requestWave(e){this.enemies.size>0||(this.waveCooldown-=e,!(this.waveCooldown>0)&&(this.waveNumber<=3?(this.spawnEnemy(this.waveNumber+1,.02,.07),this.waveDelay=4,this.waveCooldown=this.waveDelay):this.waveNumber<=6?(this.spawnEnemy(this.waveNumber+1,.03,.08),this.waveDelay=5,this.waveCooldown=this.waveDelay):this.waveNumber<=9&&(this.spawnEnemy(this.waveNumber+1,.05,.08),this.waveDelay=6,this.waveCooldown=this.waveDelay),this.waveNumber++,this.gameGUI.updateWave(this.waveNumber)))}setGameFieldBounds(){const e=new this.THREE.Box3;e.setFromObject(this.objects[0]);const i=new this.THREE.Vector3;e.getSize(i),this.gameFieldBounds=new this.THREE.Vector3(i.x,0,i.z)}setupInstanceObject(e){const i=crypto.randomUUID();return this.activeInstances.set(i,e),i}fillEnemyTypes(){let e=new Map;e.set(1,{health:3,speedMultiplier:1,type:1,damage:1,modelTemplateName:"enemyModelTemplate",attackDelay:2}),e.set(2,{health:5,speedMultiplier:0,type:2,damage:1,modelTemplateName:"enemyToxicModelTemplate",attackDelay:3}),e.set(3,{health:6,speedMultiplier:.9,type:3,damage:5,modelTemplateName:"enemyMageModelTemplate",attackDelay:3}),this.enemyTypesData=e}spawnEnemy(e=1,i,a,o=40,n=10){for(let s=0;s<e;s++){let l=this.enemyTypesData.get(1),d=Math.floor(Math.random()*100);d<=o&&(l=this.enemyTypesData.get(2)),d<=n&&(l=this.enemyTypesData.get(3));const y=this[l.modelTemplateName].clone(),m=(Math.random()-.5)*this.gameFieldBounds.x,c=(Math.random()-.5)*this.gameFieldBounds.y;y.position.set(m,l.type===3?3:-1,c);let p=new de;p.speed=(Math.random()*(a-i)+i)*l.speedMultiplier,p.maxHealth=l.health,p.health=p.maxHealth,p.damage=l.damage,p.attackDelay=l.attackDelay+Math.floor(Math.random()*3-Math.random()*2),p.attackCooldown=p.attackDelay,p.manager=this,p.enemyModel=y,p.enemyID=crypto.randomUUID(),p.type=l.type,l.type===2&&(p.enemyProjectileModel=this.toxicProjectileTemplate),p.spawn(),this.enemies.set(p.enemyID,p)}}getEnemyByID(e){return this.enemies.get(e)}}class de{constructor(e,i,a,o,n,s,l,d,y,m,c){this.speed=e,this.maxHealth=i,this.health=a,this.damage=m,this.type=c,this.attackCooldown=d,this.attackDelay=y,this.jumpSpeed=o,this.manager=n,this.enemyID=s,this.enemyModel=l,this.enemyProjectileModel=null,this.enemyLightRayCurrent=null,this.isActive=!1,this.isChasing=!1}spawn(){this.manager.scene.add(this.enemyModel),this.enemyModel.traverse(e=>{(e.isMesh||e.isObject3D)&&(e.userData.enemyInstance=this)}),this.isActive=!0,this.startChasing()}startChasing(){this.isChasing=!0}stopChasing(){this.isChasing=!1}update(){if(!this.isActive||!this.isChasing||!this.manager.player)return;if(this.health<=0)return this.remove();const e=this.manager.THREE,i=this.manager.player.cameraObject.position,a=this.enemyModel,o=a.position.clone(),n=new e.Vector3;if(n.subVectors(i,o),n.y=0,n.normalize(),n.length()>.001){const s=Math.atan2(n.x,n.z);a.rotation.y=s}if(this.attackCooldown<=0){if(this.type===2)return this.fireProjectile();if(this.type===3&&!this.enemyLightRayCurrent)return this.fireRay()}if(this.getDistanceToPlayer()<=1){if(this.type!=1)return;if(this.attackCooldown<=0){this.damagePlayer();return}return}a.position.x+=n.x*this.speed,a.position.z+=n.z*this.speed}fireProjectile(){let e=new me;e.damage=2,e.speed=10,e.lifeTime=10,e.manager=this.manager,e.model=this.manager.toxicProjectileTemplate.clone();const i=this.manager.THREE;e.velocity=new i.Vector3;const a=new i.Vector3(0,0,1);this.enemyModel.getWorldDirection(a),e.moveDirection=a.clone(),e.projectileID=this.manager.setupInstanceObject(e),e.instantiate(this.enemyModel.rotation,this.enemyModel.position),this.attackCooldown=this.attackDelay}fireRay(){let e=new pe;e.damage=this.damage,e.remainTime=2,e.manager=this.manager,e.speed=.035,e.rayID=this.manager.setupInstanceObject(e),e.instantiate(),this.enemyLightRayCurrent=e,e.parentEnemy=this,this.attackCooldown=this.attackDelay}damagePlayer(){this.manager.player.getDamage(this.damage),this.attackCooldown=this.attackDelay}getDamage(e){this.health-=e}remove(){this.stopChasing(),this.isActive=!1,this.manager.removeEnemyByID(this.enemyID),this.enemyLightRayCurrent&&this.enemyLightRayCurrent.remove(),this.manager.scene.remove(this.enemyModel)}getDistanceToPlayer(){if(!this.manager.player)return 1/0;const e=this.manager.player.cameraObject.position,i=this.enemyModel.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}}class me{constructor(e,i,a,o,n,s,l,d){this.projectileID=l,this.damage=e,this.speed=i,this.moveDirection=a,this.model=o,this.lifeTime=n,this.isActive=!1,this.manager=s,this.velocity=d,this.isParried=!1}instantiate(e,i){this.manager.scene.add(this.model),this.model.rotation.copy(e),this.model.position.copy(i),this.velocity.copy(this.moveDirection).multiplyScalar(this.speed),this.model.traverse(a=>{(a.isMesh||a.isObject3D)&&(a.userData.Projectile=this)}),this.isActive=!0}update(e){if(!this.isActive||this.lifeTime<=0)return;if(this.moveDirection&&(this.model.position.x+=this.velocity.x*e,this.model.position.z+=this.velocity.z*e),this.lifeTime-=e,this.getDistanceToPlayer()<=1){this.damagePlayer(),this.deactivate();return}if(this.lifeTime<=0&&this.deactivate(),!this.isParried)return;const i=this.getNearEnemy();i&&(this.damageEnemy(i),this.deactivate())}getNearEnemy(){if(this.manager.enemies.size<=0)return null;const e=this.model.position;let i=null;const a=2;return this.manager.enemies.forEach((o,n)=>{if(i)return;this.getDistance(o.enemyModel.position,e)<=a&&(i=o)}),i}getDistanceToPlayer(){return this.manager.player?this.getDistance(this.manager.player.cameraObject.position,this.model.position):1/0}damagePlayer(){this.manager.player.getDamage(this.damage),this.deactivate()}damageEnemy(e){e.getDamage(100)}onParry(){const e=this.manager.THREE,i=this.manager.player.cameraObject,a=new e.Vector3(0,0,-1);i.getWorldDirection(a),this.moveDirection=a.clone(),this.velocity.copy(this.moveDirection).multiplyScalar(this.speed*2);const o=Math.atan2(this.moveDirection.x,this.moveDirection.z);this.model.rotation.y=o,this.isParried=!0}getDistance(e,i){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}deactivate(){this.isActive=!1,this.manager.scene.remove(this.model),this.manager.activeInstances.delete(this.projectileID)}}class pe{constructor(e,i,a,o,n,s){this.damage=i,this.remainTime=a,this.manager=o,this.player=null,this.parentEnemy=null,this.object=n,this.rayID=e,this.speed=s}instantiate(){const e=this.manager.THREE,i=1,a=32,o=new e.CircleGeometry(i,a),n=new e.MeshBasicMaterial({color:16777215});n.transparent=!0,n.opacity=.2;const s=new e.Mesh(o,n);s.position.copy(this.manager.player.cameraObject.position),s.rotation.x=-Math.PI/2,this.object=s,this.manager.scene.add(this.object),s.position.y-=.99,this.player=this.manager.player}update(e){if(this.object.material.opacity>=1)return this.remainActivated(e);this.object.material.opacity+=e/2,this.object.scale.set(this.object.scale.x+=e,this.object.scale.y+=e,this.object.scale.z+=e);const i=this.manager.THREE,a=new i.Vector3;a.subVectors(this.player.cameraObject.position,this.object.position),a.y=0,a.normalize(),this.object.position.x+=a.x*this.speed,this.object.position.z+=a.z*this.speed}remainActivated(e){this.remainTime-=e,this.remainTime<=0&&this.remove(),this.getDistanceToPlayer()<=this.object.scale.x&&this.damagePlayer()}damagePlayer(){this.player.getDamage(this.damage),this.remove()}getDistanceToPlayer(){if(!this.player)return 1/0;const e=this.player.cameraObject.position,i=this.enemyModel.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}remove(){this.parentEnemy.enemyLightRayCurrent=null,this.manager.scene.remove(this.object),this.manager.activeInstances.delete(this.rayID)}getDistanceToPlayer(){if(!this.manager.player)return 1/0;const e=this.player.cameraObject.position,i=this.object.position;return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.z-i.z,2))}}const b={isCursorLocked:!1,sens:1,fov:75,invert:!1};function K(t){const e=JSON.parse(t);Object.entries(e).forEach(([i,a])=>{b[i]===void 0||b[i]===null||(b[i]=a,i==="fov"&&ue(a))})}window.addEventListener("storage",t=>{t.key==="settings"&&t.newValue&&K(t.newValue)});const T=new THREE.Scene;let S;T.background=ye();const u=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,1e3);T.add(u);K(localStorage.getItem("settings")||JSON.stringify({sens:1,invert:!1}));function ue(t){u.fov=t,u.updateProjectionMatrix()}const G=new THREE.Raycaster,x=new THREE.WebGLRenderer({antialias:!0});x.setSize(window.innerWidth,window.innerHeight);x.shadowMap.enabled=!0;x.shadowMap.type=THREE.PCFSoftShadowMap;x.toneMapping=THREE.ACESFilmicToneMapping;x.toneMappingExposure=1;x.setPixelRatio(.7);document.getElementById("app").appendChild(x.domElement);fe();function fe(){const t=new THREE.DirectionalLight(16777215,1.5);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=1,t.shadow.camera.far=50,t.shadow.camera.left=-20,t.shadow.camera.right=20,t.shadow.camera.top=20,t.shadow.camera.bottom=-20,t.shadow.bias=-.001,T.add(t),t.target.position.set(0,0,0),T.add(t.target);const e=new THREE.AmbientLight(16777215,.8);T.add(e)}function ye(){return new THREE.TextureLoader().load("./assets/skybox_default.png",e=>{e.mapping=THREE.EquirectangularReflectionMapping,T.background=e,console.log("Skybox loaded as equirectangular")},void 0,e=>{console.error("Error:",e),T.background=new THREE.Color(8900331)}),new THREE.Color(8900331)}const X=new GLTFLoader;let h=ve();const w=be(),D={},_=new se;ge("./models/model.glb");function ge(t){X.load(t,function(e){const i=e.scene;i.traverse(a=>{a.isMesh&&(a.castShadow=!1,a.receiveShadow=!1,a.material&&(a.material.roughness=0,a.material.metalness=0))}),i.scale.set(1,1,1),i.position.set(0,-1.65,.1),i.rotation.set(0,135,0),u.add(i),h.handsObject=i,S=new THREE.AnimationMixer(i),S.addEventListener("finished",we),e.animations.length>0&&(h.handAnimations=e.animations,S.clipAction(e.animations[2]).play())},void 0,function(e){console.error("Error loading model:",e)})}function N(t){if(S&&h){S.stopAllAction();const e=h.handAnimations;if(e&&e.length>0){const i=S.clipAction(e[t]);i.setLoop(THREE.LoopOnce),i.clampWhenFinished=!0,i.reset(),i.play()}}}function we(){N(2)}function ve(){const t=new he;return t.cameraObject=u,t.isDead=!1,t.speed=10,t.maxHealth=15,t.health=t.maxHealth,t.isInvicible=!1,t.dashSpeed=50,t.dashRegenerationTime=3,t.dashCooldown=0,t.dashDuration=0,t.dashInvincibilityTime=.5,t.shootDelay=.4,t.shootCooldown=0,t.parryDelay=.5,t.parryCooldown=0,t.gameGUI.maxHealth=t.maxHealth,t.gameGUI.health=t.maxHealth,t.gameGUI.maxDashCooldown=t.dashRegenerationTime,t.gameGUI.createGUI(),t}function be(){const t=new ce;return t.objects=[],t.enemies=new Map,t.activeInstances=new Map,t.THREE=THREE,t.scene=T,t.loader=X,t.player=h,t.waveDelay=2,t.waveCooldown=3,t.waveNumber=0,t.gameGUI=h.gameGUI,h.manager=t,t.loadModels("./models/enemy.glb","./assets/enemy_toxic.png","./models/toxic_projectile.glb","./assets/enemy_mage.png"),t.fillEnemyTypes(),t.objects.push(xe()),t.setGameFieldBounds(),t}function xe(){const t=new THREE.PlaneGeometry(50,50),e=document.createElement("canvas");e.width=1024,e.height=1024;const i=e.getContext("2d");for(let s=0;s<e.width;s+=4)for(let l=0;l<e.height;l+=4){const d=Math.random()*100;i.fillStyle=`rgb(${120+d}, ${100+d*.5}, ${80+d*.3})`,i.fillRect(s,l,4,4)}const a=new THREE.CanvasTexture(e);a.wrapS=THREE.RepeatWrapping,a.wrapT=THREE.RepeatWrapping,a.repeat.set(8,8);const o=new THREE.MeshStandardMaterial({map:a,roughness:.9,metalness:.1,side:THREE.DoubleSide}),n=new THREE.Mesh(t,o);return n.rotation.x=-Math.PI/2,n.position.y=-1,n.receiveShadow=!0,T.add(n),n}function J(t){G.far=t,G.setFromCamera(new THREE.Vector2(0,0),u);const e=G.intersectObjects(T.children);if(e.length>0)return e[0]}const f={velocity:new THREE.Vector3,isMoving:!1,shakeTime:0,bobPhase:0,moveSpeed:h.speed/100,yaw:0,pitch:0,sensitivity:.002,isLocked:!1};u.position.set(0,0,5);function Ee(t){if(!f.isLocked)return;const e=t.movementX||t.mozMovementX||t.webkitMovementX||0,i=t.movementY||t.mozMovementY||t.webkitMovementY||0;f.yaw-=e*f.sensitivity*b.sens*(b.invert?-1:1),f.pitch-=i*f.sensitivity*b.sens*(b.invert?-1:1),f.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,f.pitch)),u.rotation.order="YXZ",u.rotation.y=f.yaw,u.rotation.x=f.pitch}function Ce(t){D[t.code]=!0}function Te(t){D[t.code]=!1}function ke(t){!h.isDead&&h.health<=0&&h.death(),h.dashCooldown-=t,h.shootCooldown-=t,h.parryCooldown-=t,h.dashDuration>0?(h.dashDuration-=t,h.isInvicible=!0):h.isInvicible&&(h.isInvicible=!1),w.requestWave&&w.requestWave(t),w.enemies&&w.enemies.forEach((e,i)=>{e.attackCooldown!==void 0&&(e.attackCooldown-=t)})}function Me(){const t=new THREE.Vector3,e=new THREE.Vector3,i=new THREE.Vector3;u.getWorldDirection(e),e.y=0,e.normalize(),i.crossVectors(e,u.up),i.normalize();let a=!1;h.dashCooldown<=0&&(a=D.ShiftLeft);const o=a?h.dashSpeed:1;if(a&&(h.dashDuration=h.dashInvincibilityTime,h.dashCooldown=h.dashRegenerationTime,h.gameGUI&&h.gameGUI.startDashCooldown&&h.gameGUI.startDashCooldown()),D.KeyW&&t.add(e),D.KeyS&&t.sub(e),D.KeyA&&t.sub(i),D.KeyD&&t.add(i),a&&t.length()===0&&t.copy(e),t.length()>0){t.normalize();const s=f.moveSpeed*o;f.velocity.lerp(t.multiplyScalar(s),.2),f.isMoving=!0}else f.velocity.lerp(new THREE.Vector3,.1),f.isMoving=!1,f.shakeTime=0;const n=u.position.clone();if(u.position.add(f.velocity),w&&w.gameFieldBounds){const s=w.gameFieldBounds.x*.5,l=w.gameFieldBounds.z*.5;(u.position.x>s||u.position.x<-s||u.position.z>l||u.position.z<-l)&&u.position.copy(n)}}function De(){let t=J(3);if(t){let e=t.object;if(e.userData&&e.userData.enemyInstance){const i=e.userData.enemyInstance;i.getDamage(.5),_.show();const a=h.cameraObject.position,o=i.enemyModel.position,n=new THREE.Vector3().subVectors(o,a).normalize(),s=5,l=300,d=o.clone().add(n.multiplyScalar(s));if(w&&w.gameFieldBounds){const y=w.gameFieldBounds.x*.5,m=w.gameFieldBounds.z*.5;d.x=THREE.MathUtils.clamp(d.x,-y,y),d.z=THREE.MathUtils.clamp(d.z,-m,m)}new TWEEN.Tween(i.enemyModel.position).to({x:d.x,y:o.y,z:d.z},l).easing(TWEEN.Easing.Quadratic.Out).start()}if(e.userData&&e.userData.Projectile){const i=e.userData.Projectile;h.changeHealth(h.maxHealth),i.onParry()}}N(1),h.parryCooldown=h.parryDelay}function $(){let t=J(1e3);if(t){let e=t.object;e.userData&&e.userData.enemyInstance&&(e.userData.enemyInstance.getDamage(1),_.show())}N(3),h.shootCooldown=h.shootDelay}function Be(t){x.domElement.requestPointerLock(),b.isCursorLocked=!0,t.button==0&&h.shootCooldown<=0&&$()}function Se(){D.Escape&&b.isCursorLocked&&(document.exitPointerLock(),b.isCursorLocked=!1),D.KeyF&&h.parryCooldown<=0&&De()}document.addEventListener("pointerlockchange",()=>{f.isLocked=!!document.pointerLockElement});x.domElement.addEventListener("mousemove",Ee,!1);x.domElement.addEventListener("mousedown",Be,!1);window.addEventListener("keydown",Ce);window.addEventListener("keyup",Te);window.addEventListener("resize",()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(.7)});const He=new THREE.Clock;function Z(){if(h.isDead)return;requestAnimationFrame(Z),Se(),TWEEN.update();const t=He.getDelta();w.enemies&&w.enemies.forEach((e,i)=>{e.update&&e.update()}),w.activeInstances&&w.activeInstances.forEach((e,i)=>{e.update&&e.update(t)}),Me(),ke(t),S&&S.update(t),x.render(T,u)}window.camera=u;window.cameraState=f;Z();const Ie=Object.freeze(Object.defineProperty({__proto__:null,PLAYER:h,camera:u,cameraState:f,gameplaySettings:b,shoot:$},Symbol.toStringTag,{value:"Module"}));let I=null;const Le=150;(function(){if(!("ontouchstart"in window)&&navigator.maxTouchPoints<=0)return;const t=document.createElement("style");t.textContent=`
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

        /* ----- JOYSTICK – bigger, placed higher ----- */
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

        /* ----- ACTION BUTTONS – vertical stack, right-middle ----- */
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
    `,document.head.appendChild(t);const e=document.createElement("div");e.className="mobile-controls";const i=document.createElement("div");i.className="look-area",e.appendChild(i);const a=document.createElement("div");a.className="joystick-container",a.innerHTML=`
        <div class="joystick-base">
            <div class="joystick-knob" id="joystick-knob"></div>
        </div>
    `,e.appendChild(a);const o=document.createElement("div");o.className="action-buttons",o.innerHTML=`
        <div class="action-btn dash-btn" id="dash-btn">⚡</div>
        <div class="action-btn parry-btn" id="parry-btn">✋</div>
    `,e.appendChild(o),document.body.appendChild(e);function n(r,g){window.dispatchEvent(new KeyboardEvent(r,{code:g,key:g==="ShiftLeft"?"Shift":g.replace("Key",""),bubbles:!0,cancelable:!0}))}const s=document.querySelector(".joystick-base"),l=document.getElementById("joystick-knob"),d=55;let y=!1,m={x:0,y:0};const c={forward:"KeyW",backward:"KeyS",left:"KeyA",right:"KeyD"};function p(r){const E=Math.hypot(r.x,r.y);if(E<.2){n("keyup",c.forward),n("keyup",c.backward),n("keyup",c.left),n("keyup",c.right);return}const H=r.x/E,M=-(r.y/E),B=H;M>.3?(n("keydown",c.forward),n("keyup",c.backward)):M<-.3?(n("keydown",c.backward),n("keyup",c.forward)):(n("keyup",c.forward),n("keyup",c.backward)),B>.3?(n("keydown",c.right),n("keyup",c.left)):B<-.3?(n("keydown",c.left),n("keyup",c.right)):(n("keyup",c.right),n("keyup",c.left))}function v(r){r.preventDefault(),y=!0}function C(r){if(!y)return;r.preventDefault();const g=r.touches[0],E=s.getBoundingClientRect(),H=E.left+E.width/2,F=E.top+E.height/2;let M=g.clientX-H,B=g.clientY-F;const U=Math.hypot(M,B);U>d&&(M=M/U*d,B=B/U*d),l.style.transform=`translate(${M}px, ${B}px)`,m.x=M/d,m.y=B/d,p(m)}function k(r){r.preventDefault(),y=!1,m={x:0,y:0},l.style.transform="translate(0px, 0px)",p(m)}s.addEventListener("touchstart",v,{passive:!1}),s.addEventListener("touchmove",C,{passive:!1}),s.addEventListener("touchend",k,{passive:!1}),s.addEventListener("touchcancel",k,{passive:!1});const L=document.getElementById("dash-btn");L.addEventListener("touchstart",r=>{r.preventDefault(),n("keydown","ShiftLeft")},{passive:!1}),L.addEventListener("touchend",r=>{r.preventDefault(),n("keyup","ShiftLeft")},{passive:!1}),L.addEventListener("touchcancel",r=>{r.preventDefault(),n("keyup","ShiftLeft")},{passive:!1});const j=document.getElementById("parry-btn");j.addEventListener("touchstart",r=>{r.preventDefault(),n("keydown","KeyF")},{passive:!1}),j.addEventListener("touchend",r=>{r.preventDefault(),n("keyup","KeyF")},{passive:!1}),j.addEventListener("touchcancel",r=>{r.preventDefault(),n("keyup","KeyF")},{passive:!1});let A=0,P=0,z=!1;function W(r){if(r.target.closest(".joystick-container, .action-buttons, .action-btn, #gameGUI, button, .health-bar, .dash-bar"))return;r.preventDefault(),I&&(clearTimeout(I),I=null);const g=r.touches[0];A=g.clientX,P=g.clientY,z=!0}function Y(r){if(!z||r.target.closest(".joystick-container, .action-buttons"))return;r.preventDefault();const g=r.touches[0],E=g.clientX-A,H=g.clientY-P;if(E!==0||H!==0){const F=.002*(b?.sens||1)*(b?.invert?-1:1);f.yaw-=E*F,f.pitch-=H*F,f.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,f.pitch)),u.rotation.order="YXZ",u.rotation.y=f.yaw,u.rotation.x=f.pitch;const M=new MouseEvent("mousemove",{movementX:E,movementY:H,clientX:g.clientX,clientY:g.clientY,bubbles:!0,cancelable:!0});r.target.dispatchEvent(M)}A=g.clientX,P=g.clientY}function O(r){r.preventDefault(),z=!1}function Q(){document.querySelector(".mobile-controls")&&h.isDead&&(s.style.display="none",L.style.display="none",j.style.display="none")}setInterval(Q,500);function V(r){r.target.closest(".joystick-container, .action-buttons, .action-btn, #gameGUI, button, .health-bar, .dash-bar")||(r.preventDefault(),I&&clearTimeout(I),I=setTimeout(()=>{h&&h.shootCooldown<=0&&$(),I=null},Le))}const R=document.querySelector("canvas");R&&(R.addEventListener("touchstart",W,{passive:!1}),R.addEventListener("touchmove",Y,{passive:!1}),R.addEventListener("touchend",O,{passive:!1}),R.addEventListener("touchcancel",O,{passive:!1}),R.addEventListener("touchstart",V,{passive:!1})),i.addEventListener("touchstart",W,{passive:!1}),i.addEventListener("touchmove",Y,{passive:!1}),i.addEventListener("touchend",O,{passive:!1}),i.addEventListener("touchcancel",O,{passive:!1}),i.addEventListener("touchstart",V,{passive:!1}),document.addEventListener("touchmove",r=>{r.target.closest(".mobile-controls, canvas")&&r.preventDefault()},{passive:!1}),document.addEventListener("touchstart",r=>{r.target.closest("button, #gameGUI, .health-bar, .dash-bar")&&r.stopPropagation()},{passive:!1})})();
