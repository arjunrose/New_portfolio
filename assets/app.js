var ks=new Map,we={on(n,t){return ks.has(n)||ks.set(n,new Set),ks.get(n).add(t),()=>we.off(n,t)},off(n,t){let e=ks.get(n);e&&e.delete(t)},emit(n,t){let e=ks.get(n);if(e)for(let i of Array.from(e))try{i(t)}catch(s){console.error("[bus]",n,s)}}};var he=(n,t=document)=>t.querySelector(n),zs=(n,t=document)=>Array.from(t.querySelectorAll(n)),ol=(n,t,e)=>Math.min(e,Math.max(t,n));var ch=()=>window.PORTFOLIO,di=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function A(n,t,...e){let i=document.createElement(n);return hh(i,t),uh(i,e),i}function Lt(n,t,...e){let i=document.createElementNS("http://www.w3.org/2000/svg",n);return hh(i,t),uh(i,e),i}function hh(n,t){if(t)for(let[e,i]of Object.entries(t))i==null||i===!1||(e==="class"?n.setAttribute("class",i):e==="dataset"?Object.assign(n.dataset,i):e==="style"&&typeof i=="object"?Object.assign(n.style,i):e==="html"?n.innerHTML=i:e.startsWith("on")&&typeof i=="function"?n.addEventListener(e.slice(2).toLowerCase(),i):n.setAttribute(e,i===!0?"":String(i)))}function uh(n,t){for(let e of t.flat(1/0))e==null||e===!1||n.append(e.nodeType?e:document.createTextNode(String(e)))}function al(n){let t=ch().levelLabels||{},e=A("span",{class:"meter","data-lvl":n,role:"img","aria-label":t[n]||n});for(let i=0;i<4;i++)e.append(document.createElement("i"));return e}var Sf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function _n(n){if(n==="present"){let i=new Date;return{y:i.getFullYear(),m:i.getMonth()+1}}let[t,e]=String(n).split("-").map(Number);return{y:t,m:e||1}}var Tn=({y:n,m:t})=>n*12+(t-1);function es(n){if(n==="present")return"present";let{y:t,m:e}=_n(n);return`${Sf[e-1]} ${t}`}function ll(n,t){return n===t?es(n):`${es(n)} to ${es(t)}`}function dh(n,t=ch()){return String(n).replace("{projects}",t.projects.length).replace("{certs}",t.certs.length)}function Jn(n,t,e={rootMargin:"120px 0px"}){if(!("IntersectionObserver"in window))return t(!0),()=>{};let i=new IntersectionObserver(s=>t(s[s.length-1].isIntersecting),e);return i.observe(n),()=>i.disconnect()}function Fi(){let n=getComputedStyle(document.documentElement),t=e=>n.getPropertyValue(e).trim();return{bg:t("--bg"),bg2:t("--bg-2"),bg3:t("--bg-3"),line:t("--line"),line2:t("--line-2"),ink:t("--ink"),ink2:t("--ink-2"),ink3:t("--ink-3"),run:t("--sig-run"),warn:t("--sig-warn"),fault:t("--sig-fault"),info:t("--sig-info"),runText:t("--run-text"),warnText:t("--warn-text"),faultText:t("--fault-text"),infoText:t("--info-text"),partA:t("--part-a"),partB:t("--part-b"),partC:t("--part-c"),peYellow:t("--pe-yellow"),peGreen:t("--pe-green"),floor:t("--scene-floor"),grid:t("--scene-grid"),body:t("--scene-body"),dark:t("--scene-dark"),belt:t("--scene-belt"),accent:t("--scene-accent"),mono:t("--font-mono"),ui:t("--font-ui"),theme:document.documentElement.dataset.theme==="light"?"light":"dark"}}var kn=[{name:"START",addr:"I0.0",kind:"input",desc:"Start pushbutton, momentary"},{name:"STOP_OK",addr:"I0.1",kind:"input",desc:"Stop pushbutton, normally closed. 1 = healthy"},{name:"ESTOP_OK",addr:"I0.2",kind:"input",desc:"Emergency stop, normally closed. 1 = healthy"},{name:"RESET",addr:"I0.3",kind:"input",desc:"Reset pushbutton. Clears the batch counter"},{name:"AUTO",addr:"I0.4",kind:"input",desc:"Mode selector. 1 = Auto, 0 = Manual"},{name:"PE_PICK",addr:"I0.5",kind:"input",desc:"Photoeye. A part is at the pick position"},{name:"VIS_A",addr:"I0.6",kind:"input",desc:"Vision result: cube"},{name:"VIS_B",addr:"I0.7",kind:"input",desc:"Vision result: cylinder"},{name:"VIS_C",addr:"I1.0",kind:"input",desc:"Vision result: hexagon"},{name:"ROBOT_DONE",addr:"I1.1",kind:"input",desc:"Robot finished its sort cycle"},{name:"CONVEYOR",addr:"Q0.0",kind:"output",desc:"Conveyor motor"},{name:"ROBOT_REQ",addr:"Q0.1",kind:"output",desc:"Request: robot sorts the part at pick"},{name:"LAMP_GREEN",addr:"Q0.2",kind:"output",desc:"Stack light, green"},{name:"LAMP_AMBER",addr:"Q0.3",kind:"output",desc:"Stack light, amber"},{name:"LAMP_RED",addr:"Q0.4",kind:"output",desc:"Stack light, red"},{name:"RUN",addr:"M0.0",kind:"marker",desc:"Run latch"},{name:"BATCH_DONE",addr:"M0.1",kind:"marker",desc:"Batch counter reached its preset"}],fh={STOP_OK:!0,ESTOP_OK:!0,AUTO:!0},cl=Object.fromEntries(kn.map(n=>[n.name,n.kind])),Mf=50;function wf(n){let t=0,e={},i={},s=r=>{r.uid==null&&(r.uid="e"+t),t++,r.t==="ton"&&(e[r.id]={pt:r.pt,et:0,q:!1,en:!1}),r.t==="ctu"&&(i[r.id]={pv:r.pv,cv:0,q:!1}),r.items&&r.items.forEach(s)};return n.forEach(r=>s(r.logic)),{timers:e,counters:i}}var kr=class{constructor(t,{scanMs:e=20}={}){this.program=t,this.scanMs=e,this._cpuRun=!0,this._listeners=new Set,this._proto=wf(t),this.reset()}reset(){this.mem=Object.create(null),this.inputs=Object.create(null),this.forced=Object.create(null);for(let t of kn)this.mem[t.name]=!1,t.kind==="input"&&(this.inputs[t.name]=!!fh[t.name],this.mem[t.name]=!!fh[t.name]);this.timers=JSON.parse(JSON.stringify(this._proto.timers)),this.counters=JSON.parse(JSON.stringify(this._proto.counters)),this._prev=Object.create(null),this._pulses=[],this._acc=0,this.simTime=0,this.scanCount=0,this._rungs=this.program.map(()=>({power:!1,elements:{},elementsIn:{}}))}get cpuRun(){return this._cpuRun}set cpuRun(t){t=!!t,t!==this._cpuRun&&(this._cpuRun=t,t||this._stopCpu())}_stopCpu(){for(let t of kn)t.kind!=="input"&&(this.mem[t.name]=!1);for(let t in this.timers)Object.assign(this.timers[t],{et:0,q:!1,en:!1});for(let t in this.counters)this.counters[t].q=!1;this._prev=Object.create(null),this._rungs=this.program.map(()=>({power:!1,elements:{},elementsIn:{}}))}setInput(t,e){cl[t]==="input"&&(this.inputs[t]=!!e)}pulse(t,e,i=!0){cl[t]==="input"&&(this.inputs[t]=!!i,this._pulses=this._pulses.filter(s=>s.tag!==t),this._pulses.push({tag:t,until:this.simTime+e,back:!i}))}force(t,e){return cl[t]!=="input"?!1:(e==null?delete this.forced[t]:this.forced[t]=!!e,!0)}releaseForces(){this.forced=Object.create(null)}isForced(t){return t in this.forced}get(t){let e=t.indexOf(".");if(e>0){let i=t.slice(0,e),s=t.slice(e+1).toLowerCase(),r=this.timers[i]||this.counters[i];return r?r[s]:!1}return!!this.mem[t]}step(t){this._acc+=Math.max(0,t);let e=0;for(;this._acc>=this.scanMs&&e<Mf;)this._scan(),this._acc-=this.scanMs,e++;if(this._acc>=this.scanMs&&(this._acc=0),e)for(let i of Array.from(this._listeners))i(this);return e}onScan(t){return this._listeners.add(t),()=>this._listeners.delete(t)}_scan(){this._pulses=this._pulses.filter(t=>t.until>this.simTime?!0:(this.inputs[t.tag]=t.back,!1));for(let t of kn)t.kind==="input"&&(this.mem[t.name]=t.name in this.forced?this.forced[t.name]:this.inputs[t.name]);this._cpuRun&&this.program.forEach((t,e)=>{let i=this._rungs[e];i.elements={},i.elementsIn={},i.power=this._solve(t.logic,!0,i)}),this.scanCount++,this.simTime+=this.scanMs}_read(t){return t.indexOf(".")>0?!!this.get(t):!!this.mem[t]}_solve(t,e,i){let s=!1;switch(t.t){case"no":s=e&&this._read(t.tag);break;case"nc":s=e&&!this._read(t.tag);break;case"series":{s=e;for(let r of t.items)s=this._solve(r,s,i);break}case"par":{for(let r of t.items)s=this._solve(r,e,i)||s;break}case"ote":this.mem[t.tag]=e,s=e;break;case"set":e&&(this.mem[t.tag]=!0),s=e;break;case"rst":e&&(this.mem[t.tag]=!1),s=e;break;case"ton":{let r=this.timers[t.id];r.en=e,r.et=e?Math.min(r.pt,r.et+this.scanMs):0,r.q=e&&r.et>=r.pt,s=r.q;break}case"ctu":{let r=this.counters[t.id],o=!!this._prev[t.uid];this._read(t.reset)?r.cv=0:e&&!o&&(r.cv=Math.min(32767,r.cv+1)),this._prev[t.uid]=e,r.q=r.cv>=r.pv,s=r.q;break}default:s=!1}return i.elementsIn[t.uid]=e,i.elements[t.uid]=s,s}snapshot(){let t={},e={};for(let i of kn)t[i.name]=!!this.mem[i.name],i.name in this.forced&&(e[i.name]=!0);for(let i in this.timers)t[i+".Q"]=this.timers[i].q;for(let i in this.counters)t[i+".Q"]=this.counters[i].q;return{tags:t,forced:e,timers:JSON.parse(JSON.stringify(this.timers)),counters:JSON.parse(JSON.stringify(this.counters)),rungs:this._rungs.map(i=>({power:i.power,elements:{...i.elements},elementsIn:{...i.elementsIn}})),scanCount:this.scanCount,scanMs:this.scanMs,cpuRun:this._cpuRun}}};var Be=n=>({t:"no",tag:n}),zr=n=>({t:"nc",tag:n}),zn=(...n)=>({t:"series",items:n}),ph=(...n)=>({t:"par",items:n}),ns=n=>({t:"ote",tag:n}),Ef=n=>({t:"set",tag:n}),Tf=n=>({t:"rst",tag:n}),Af=(n,t)=>({t:"ton",id:n,pt:t}),Cf=(n,t,e)=>({t:"ctu",id:n,pv:t,reset:e}),is=[{n:1,comment:"Start latches the run bit. Stop or E-stop releases it.",words:"Start, or Run already on, and Stop healthy, and E-stop healthy, switches Run on.",logic:zn(ph(Be("START"),Be("RUN")),Be("STOP_OK"),Be("ESTOP_OK"),ns("RUN"))},{n:2,comment:"Wait 1.5 s after RUN before anything moves (start-up warning).",words:"While Run is on, timer T0 counts to 1500 milliseconds.",logic:zn(Be("RUN"),Af("T0",1500))},{n:3,comment:"In Auto, run the conveyor unless a part is waiting at the pick position or the batch is complete.",words:"When T0 is done, in Auto, with no part at the pick position and the batch not complete, the conveyor runs.",logic:zn(Be("T0.Q"),Be("AUTO"),zr("PE_PICK"),zr("BATCH_DONE"),ns("CONVEYOR"))},{n:4,comment:"A classified part is waiting: request the robot.",words:"When T0 is done, in Auto, with a part at the pick position and the vision system reporting a cube, cylinder or hexagon, the robot request is set.",logic:zn(Be("T0.Q"),Be("AUTO"),Be("PE_PICK"),ph(Be("VIS_A"),Be("VIS_B"),Be("VIS_C")),Ef("ROBOT_REQ"))},{n:5,comment:"Robot reports done: clear the request.",words:"When the robot reports done, the robot request is reset.",logic:zn(Be("ROBOT_DONE"),Tf("ROBOT_REQ"))},{n:6,comment:"Count each completed sort. Reset clears the batch.",words:"Each time the robot reports done, counter C0 counts up to 6. Reset clears the count.",logic:zn(Be("ROBOT_DONE"),Cf("C0",6,"RESET"))},{n:7,comment:"Batch complete.",words:"When counter C0 reaches 6, the batch is complete.",logic:zn(Be("C0.Q"),ns("BATCH_DONE"))},{n:8,comment:"Green lamp: running and not finished.",words:"While running and the batch is not complete, the green lamp is on.",logic:zn(Be("RUN"),zr("BATCH_DONE"),ns("LAMP_GREEN"))},{n:9,comment:"Amber lamp: batch complete, waiting for Reset.",words:"When the batch is complete, the amber lamp is on until Reset is pressed.",logic:zn(Be("BATCH_DONE"),ns("LAMP_AMBER"))},{n:10,comment:"Red lamp: E-stop pressed or stop circuit broken.",words:"When the E-stop circuit is open, the red lamp is on.",logic:zn(zr("ESTOP_OK"),ns("LAMP_RED"))}],mh={failSafe:"Stop and E-stop are wired normally closed, so the PLC reads 1 while the circuit is healthy and 0 when the button is pressed or a wire breaks. A broken wire stops the machine instead of hiding the fault."};var Dt={beltX0:-3.6,beltX1:2.4,beltY:.55,beltW:.9,spawnX:-3.3,camX:-1.2,pickX:.6,base:{x:.6,z:-1.5},bins:{A:{x:-.74,z:-2.84},B:{x:.6,z:-3.4},C:{x:1.94,z:-2.84}},binSize:.8,binH:.36,partH:.22},Rf=1.3,Qe={A:{shape:"cube",name:"Cube",area:"Automation",short:"Automation",blurb:"Siemens PLCs, TIA Portal and Festo MPS",filter:{domain:"automation"}},B:{shape:"cylinder",name:"Cylinder",area:"Robotics",short:"Robotics",blurb:"Yaskawa, Igus and Dobot robots",filter:{domain:"robotics"}},C:{shape:"hexagon",name:"Hexagon",area:"Vision and AI",short:"Vision",blurb:"OpenCV, YOLO and Jetson Nano",filter:{domain:"vision"}}},Vs={theta:0,r:.75,y:1.95},Vr=[["approach",650],["descend",300],["grip",200],["lift",300],["transfer",900],["lower",250],["release",200],["raise",250],["return",700]],If=n=>n*n*(3-2*n),Hs=(n,t,e)=>n+(t-n)*e,Pf=9.8;function Lf(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function gh(n,t){let e=Dt.bins[n],i=t%4;return{x:e.x+(i%2-.5)*.28,z:e.z+(Math.floor(i/2)-.5)*.28}}var _h=(n=0)=>.04+Dt.partH/2+Math.floor(n/4)*Dt.partH,Df=()=>Dt.beltY+Dt.partH/2;function Hr(n,t,e){let i=n-Dt.base.x,s=t-Dt.base.z;return{theta:Math.atan2(i,s),r:Math.hypot(i,s),y:e}}function Nf(n){return{x:Dt.base.x+n.r*Math.sin(n.theta),y:n.y,z:Dt.base.z+n.r*Math.cos(n.theta)}}var Gr=class{constructor(t,{seed:e=7}={}){this.plc=t,this.seed=e,this._listeners=new Set,this.resetWorld()}on(t){return this._listeners.add(t),()=>this._listeners.delete(t)}_emit(t,e){for(let i of Array.from(this._listeners))try{i(t,e)}catch(s){console.error("[plant]",s)}}powerCycle(){this.plc.reset(),this.resetWorld(),this._emit("powercycle")}resetWorld(){this.rand=Lf(this.seed),this.parts=[],this.nextId=1,this.spawned=0,this.queue=[],this.bins={A:[],B:[],C:[]},this.counts={A:0,B:0,C:0},this.robot={phase:"idle",t:0,cyl:{...Vs},grip:1,holding:null,bin:null,slot:0,part:null,from:null,to:null,px:Dt.pickX},this.belt={offset:0,moving:!1},this.atPick=null,this.flash=null,this.time=0,this._acc=0,this._prev={run:!1,batch:!1,estop:!1,reset:!1},this._fillQueue(),this._spawn(-2,-1e3),this._spawn(Dt.spawnX,-1e3)}_fillQueue(){let t=["A","A","B","B","C","C"];for(let e=t.length-1;e>0;e--){let i=Math.floor(this.rand()*(e+1));[t[e],t[i]]=[t[i],t[e]]}this.queue=t}_spawn(t,e=this.time){this.queue.length||this._fillQueue();let i={id:this.nextId++,kind:this.queue.shift(),x:t,y:Df(),z:0,yaw:this.rand()*Math.PI,state:"belt",seen:!1,conf:.93+this.rand()*.06,bin:null,slot:0,vy:0,floor:0,ttl:0,born:e};return this.parts.push(i),this.spawned++,this._emit("spawn",i),i}tick(t){let e=this.plc.scanMs;this._acc+=Math.min(t,250);let i=0;for(;this._acc>=e&&i<12;)this._substep(e),this._acc-=e,i++;this._acc>=e&&(this._acc=0)}_substep(t){let e=this.plc;this._sense(),e.step(t);let i=!e.inputs.ESTOP_OK;this._belt(e.get("CONVEYOR")&&!i,t),this._robot(t,i,e.get("ROBOT_REQ")&&!e.get("ROBOT_DONE")),this._parts(t),this._edges(i),this.time+=t}_sense(){let t=this.parts.find(s=>s.state==="belt"&&Math.abs(s.x-Dt.pickX)<.05)||null;this.atPick=t;let e=t&&t.seen?t.kind:null,i=this.plc;i.setInput("PE_PICK",!!t),i.setInput("VIS_A",e==="A"),i.setInput("VIS_B",e==="B"),i.setInput("VIS_C",e==="C")}_belt(t,e){if(this.belt.moving=t,!t)return;let i=Rf*e/1e3;this.belt.offset+=i;for(let r of this.parts){if(r.state!=="belt")continue;let o=r.x+i;!r.seen&&r.x<Dt.camX&&o>=Dt.camX&&(r.seen=!0,this.flash={at:this.time,id:r.id},this._emit("vision",{part:r,confidence:r.conf})),r.x=o,r.x>Dt.beltX1+.12&&(r.state="falling",r.vy=0,r.floor=.16,r.bin=null)}let s=this.plc.counters.C0?this.plc.counters.C0.pv:6;if(this.spawned<s){let r=this.parts.filter(a=>a.state==="belt");(r.length?Math.min(...r.map(a=>a.x)):1/0)>Dt.spawnX+1.35&&this._spawn(Dt.spawnX)}}_robot(t,e,i){let s=this.robot;if(s.phase==="idle"){if(!i||e)return;let c=this.plc,h=this.atPick;s.part=h,s.px=h?h.x:Dt.pickX,s.bin=c.get("VIS_A")?"A":c.get("VIS_B")?"B":c.get("VIS_C")?"C":h?h.kind:"A",s.slot=this.bins[s.bin].length;let f=gh(s.bin,s.slot);s.way={abovePick:Hr(s.px,0,1.3),atPick:Hr(s.px,0,Dt.beltY+Dt.partH/2),aboveBin:Hr(f.x,f.z,1.35),atBin:Hr(f.x,f.z,_h(s.slot)+.7)},s.bin==="B"&&(s.way.aboveBin.theta=Math.abs(s.way.aboveBin.theta),s.way.atBin.theta=Math.abs(s.way.atBin.theta)),s.idx=0,s.t=0,this._enterPhase();return}if(e)return;let r=Vr[s.idx][1];s.t=Math.min(1,s.t+t/r);let o=If(s.t),a=s.cyl;a.theta=Hs(s.from.theta,s.to.theta,o),a.r=Hs(s.from.r,s.to.r,o),a.y=Hs(s.from.y,s.to.y,o);let l=Vr[s.idx][0];l==="grip"&&(s.grip=Hs(1,0,o)),l==="release"&&(s.grip=Hs(0,1,o)),s.t>=1&&this._leavePhase(l)}_enterPhase(){let t=this.robot,e=Vr[t.idx][0],i=t.way,s={approach:[Vs,i.abovePick],descend:[i.abovePick,i.atPick],grip:[i.atPick,i.atPick],lift:[i.atPick,i.abovePick],transfer:[i.abovePick,i.aboveBin],lower:[i.aboveBin,i.atBin],release:[i.atBin,i.atBin],raise:[i.atBin,i.aboveBin],return:[i.aboveBin,Vs]};t.phase=e,t.from={...t.idx===0?Vs:t.cyl},t.to={...s[e][1]},t.t=0}_leavePhase(t){let e=this.robot;if(t==="grip"){let i=e.part;i&&i.state==="belt"&&(i.state="held",e.holding=i.id,this._emit("pick",i))}if(t==="release"&&e.holding!=null){let i=this.parts.find(s=>s.id===e.holding);e.holding=null,i&&(i.state="falling",i.vy=0,i.bin=e.bin,i.slot=e.slot,i.floor=_h(e.slot),this.bins[e.bin].push(i.id))}if(e.idx===Vr.length-1){e.phase="idle",e.part=null,e.cyl={...Vs},this.plc.pulse("ROBOT_DONE",60),this._emit("cycle",{bin:e.bin});return}e.idx++,this._enterPhase()}_parts(t){let e=t/1e3,i=this.robot;for(let s of this.parts)if(s.state==="held"){let r=Nf(i.cyl);s.x=r.x,s.y=r.y,s.z=r.z}else if(s.state==="falling"){if(s.vy-=Pf*e,s.y+=s.vy*e,s.bin){let r=gh(s.bin,s.slot);s.x+=(r.x-s.x)*.3,s.z+=(r.z-s.z)*.3}else s.x+=.4*e;s.y<=s.floor&&(s.y=s.floor,s.bin?(s.state="binned",this.counts[s.bin]++,this._emit("sorted",{part:s,bin:s.bin})):(s.state="dead",s.ttl=2500))}else s.state==="dead"&&(s.ttl-=t);this.parts=this.parts.filter(s=>s.state!=="dead"||s.ttl>0)}_edges(t){let e=this.plc,i=e.get("RUN"),s=e.get("BATCH_DONE"),r=e.get("RESET");i&&!this._prev.run&&this._emit("start"),s&&!this._prev.batch&&this._emit("batch",{counts:{...this.counts}}),t&&!this._prev.estop&&this._emit("estop"),r&&!this._prev.reset&&this._clearBatch(),this._prev={run:i,batch:s,estop:t,reset:r}}_clearBatch(){this.parts=this.parts.filter(t=>t.state!=="binned"),this.bins={A:[],B:[],C:[]},this.counts={A:0,B:0,C:0},this.spawned=this.parts.filter(t=>t.state!=="dead").length,this._fillQueue(),this.parts.some(t=>t.state==="belt"||t.state==="held")||(this._spawn(-2),this._spawn(Dt.spawnX)),this._emit("clear")}};var $h=0,Hl=1,Xh=2;var Wi=1,qh=2,Rs=3,Ai=0,sn=1,bn=2,Xn=0,Is=1,Gl=2,Wl=3,$l=4,Yh=5;var $i=100,Zh=101,jh=102,Jh=103,Kh=104,Qh=200,tu=201,eu=202,nu=203,Xl=204,ql=205,iu=206,su=207,ru=208,ou=209,au=210,lu=211,cu=212,hu=213,uu=214,xo=0,yo=1,vo=2,xs=3,bo=4,So=5,Mo=6,wo=7,Yl=0,du=1,fu=2,Ln=0,Zl=1,jl=2,Jl=3,Kl=4,Ql=5,tc=6,ec=7;var nc=300,Ci=301,Xi=302,Qo=303,ta=304,_r=306,ys=1e3,yn=1001,Eo=1002,ze=1003,pu=1004;var xr=1005;var He=1006,ea=1007;var Ri=1008;var an=1009,ic=1010,sc=1011,Ps=1012,na=1013,Dn=1014,Nn=1015,Un=1016,ia=1017,sa=1018,Ls=1020,rc=35902,oc=35899,ac=1021,lc=1022,Sn=1023,Hn=1026,Ii=1027,cc=1028,ra=1029,Pi=1030,oa=1031;var aa=1033,yr=33776,vr=33777,br=33778,Sr=33779,la=35840,ca=35841,ha=35842,ua=35843,da=36196,fa=37492,pa=37496,ma=37488,ga=37489,Mr=37490,_a=37491,xa=37808,ya=37809,va=37810,ba=37811,Sa=37812,Ma=37813,wa=37814,Ea=37815,Ta=37816,Aa=37817,Ca=37818,Ra=37819,Ia=37820,Pa=37821,La=36492,Da=36494,Na=36495,Ua=36283,Fa=36284,wr=36285,Oa=36286;var Zs=2300,To=2301,mo=2302,Nl=2303,Ul=2400,Fl=2401,Ol=2402;var mu=3200;var Ba=0,gu=1,ai="",tn="srgb",js="srgb-linear",Js="linear",ue="srgb";var go=7680;var _u=519,xu=512,yu=513,vu=514,ka=515,bu=516,Su=517,za=518,Mu=519,wu=35044;var hc="300 es",Pn=2e3,vs=2001;function Uf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ff(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eu(){let n=Ks("canvas");return n.style.display="block",n}var xh={},bs=null;function uc(...n){let t="THREE."+n.shift();bs?bs("log",t,...n):console.log(t,...n)}function Tu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=Tu(n);let t="THREE."+n.shift();if(bs)bs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function $t(...n){n=Tu(n);let t="THREE."+n.shift();if(bs)bs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Vi(...n){let t=n.join(" ");t in xh||(xh[t]=!0,Ht(...n))}function Au(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Cu={[xo]:yo,[vo]:Mo,[bo]:wo,[xs]:So,[yo]:xo,[Mo]:vo,[wo]:bo,[So]:xs},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _o=Math.PI/180,Ao=180/Math.PI;function Er(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Of(n,t){return(n%t+t)%t}function hl(n,t,e){return(1-e)*n+e*t}function Gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gc=class gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;var te=gc,Wn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],g=r[o+1],_=r[o+2],w=r[o+3];if(f!==w||l!==d||c!==g||h!==_){let m=l*d+c*g+h*_+f*w;m<0&&(d=-d,g=-g,_=-_,w=-w,m=-m);let u=1-a;if(m<.9995){let b=Math.acos(m),N=Math.sin(b);u=Math.sin(u*b)/N,a=Math.sin(a*b)/N,l=l*u+d*a,c=c*u+g*a,h=h*u+_*a,f=f*u+w*a}else{l=l*u+d*a,c=c*u+g*a,h=h*u+_*a,f=f*u+w*a;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],d=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*g-c*d,t[e+1]=l*_+h*d+c*f-a*g,t[e+2]=c*_+h*g+a*d-l*f,t[e+3]=h*_-a*f-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),d=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f-d*g*_;break;case"YXZ":this._x=d*h*f+c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f+d*g*_;break;case"ZXY":this._x=d*h*f-c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f-d*g*_;break;case"ZYX":this._x=d*h*f-c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f+d*g*_;break;case"YZX":this._x=d*h*f+c*g*_,this._y=c*g*f+d*h*_,this._z=c*h*_-d*g*f,this._w=c*h*f-d*g*_;break;case"XZY":this._x=d*h*f-c*g*_,this._y=c*g*f-d*h*_,this._z=c*h*_+d*g*f,this._w=c*h*f+d*g*_;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+a+f;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_c=class _c{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;var j=_c,ul=new j,yh=new Wn,xc=class xc{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],g=i[5],_=i[8],w=s[0],m=s[3],u=s[6],b=s[1],N=s[4],M=s[7],C=s[2],E=s[5],R=s[8];return r[0]=o*w+a*b+l*C,r[3]=o*m+a*N+l*E,r[6]=o*u+a*M+l*R,r[1]=c*w+h*b+f*C,r[4]=c*m+h*N+f*E,r[7]=c*u+h*M+f*R,r[2]=d*w+g*b+_*C,r[5]=d*m+g*N+_*E,r[8]=d*u+g*M+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,g=c*r-o*l,_=e*f+i*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=f*w,t[1]=(s*c-h*i)*w,t[2]=(a*i-s*o)*w,t[3]=d*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=g*w,t[7]=(i*l-c*e)*w,t[8]=(o*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;var qt=xc,dl=new qt,vh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){let n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:t,whitePoint:i,transfer:Js,toXYZ:vh,fromXYZ:bh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:vh,fromXYZ:bh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}var ie=Bf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,Co=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=Ks("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fl(s[o].image)):r.push(fl(s[o]))}else r=fl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Co.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var zf=0,pl=new j,en=class n extends Gn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=yn,s=yn,r=He,o=Ri,a=Sn,l=an,c=n.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Er(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=nc;en.DEFAULT_ANISOTROPY=1;var yc=class yc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],g=l[5],_=l[9],w=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-w)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+w)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(c+1)/2,M=(g+1)/2,C=(u+1)/2,E=(h+d)/4,R=(f+w)/4,y=(_+m)/4;return N>M&&N>C?N<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(N),s=E/i,r=R/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=y/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=y/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-w)*(f-w)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-w)/b,this.z=(d-h)/b,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;var be=yc,Ro=class extends Gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Ro{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qs=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ko=class Ko{constructor(t,e,i,s,r,o,a,l,c,h,f,d,g,_,w,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,d,g,_,w,m)}set(t,e,i,s,r,o,a,l,c,h,f,d,g,_,w,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=g,u[7]=_,u[11]=w,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,g=o*f,_=a*h,w=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=g+_*c,e[5]=d-w*c,e[9]=-a*l,e[2]=w-d*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,g=l*f,_=c*h,w=c*f;e[0]=d+w*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=w+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,g=l*f,_=c*h,w=c*f;e[0]=d-w*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=w-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,g=o*f,_=a*h,w=a*f;e[0]=l*h,e[4]=_*c-g,e[8]=d*c+w,e[1]=l*f,e[5]=w*c+d,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,g=o*c,_=a*l,w=a*c;e[0]=l*h,e[4]=w-d*f,e[8]=_*f+g,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*f+_,e[10]=d-w*f}else if(t.order==="XZY"){let d=o*l,g=o*c,_=a*l,w=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+w,e[5]=o*h,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*h,e[10]=w*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Hf)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),fi.crossVectors(i,hn),fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),fi.crossVectors(i,hn)),fi.normalize(),Wr.crossVectors(hn,fi),s[0]=fi.x,s[4]=Wr.x,s[8]=hn.x,s[1]=fi.y,s[5]=Wr.y,s[9]=hn.y,s[2]=fi.z,s[6]=Wr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],g=i[13],_=i[2],w=i[6],m=i[10],u=i[14],b=i[3],N=i[7],M=i[11],C=i[15],E=s[0],R=s[4],y=s[8],S=s[12],O=s[1],k=s[5],W=s[9],D=s[13],U=s[2],F=s[6],L=s[10],z=s[14],q=s[3],Y=s[7],Q=s[11],nt=s[15];return r[0]=o*E+a*O+l*U+c*q,r[4]=o*R+a*k+l*F+c*Y,r[8]=o*y+a*W+l*L+c*Q,r[12]=o*S+a*D+l*z+c*nt,r[1]=h*E+f*O+d*U+g*q,r[5]=h*R+f*k+d*F+g*Y,r[9]=h*y+f*W+d*L+g*Q,r[13]=h*S+f*D+d*z+g*nt,r[2]=_*E+w*O+m*U+u*q,r[6]=_*R+w*k+m*F+u*Y,r[10]=_*y+w*W+m*L+u*Q,r[14]=_*S+w*D+m*z+u*nt,r[3]=b*E+N*O+M*U+C*q,r[7]=b*R+N*k+M*F+C*Y,r[11]=b*y+N*W+M*L+C*Q,r[15]=b*S+N*D+M*z+C*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],g=t[14],_=t[3],w=t[7],m=t[11],u=t[15],b=l*g-c*d,N=a*g-c*f,M=a*d-l*f,C=o*g-c*h,E=o*d-l*h,R=o*f-a*h;return e*(w*b-m*N+u*M)-i*(_*b-m*C+u*E)+s*(_*N-w*C+u*R)-r*(_*M-w*E+m*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],g=t[11],_=t[12],w=t[13],m=t[14],u=t[15],b=e*a-i*o,N=e*l-s*o,M=e*c-r*o,C=i*l-s*a,E=i*c-r*a,R=s*c-r*l,y=h*w-f*_,S=h*m-d*_,O=h*u-g*_,k=f*m-d*w,W=f*u-g*w,D=d*u-g*m,U=b*D-N*W+M*k+C*O-E*S+R*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/U;return t[0]=(a*D-l*W+c*k)*F,t[1]=(s*W-i*D-r*k)*F,t[2]=(w*R-m*E+u*C)*F,t[3]=(d*E-f*R-g*C)*F,t[4]=(l*O-o*D-c*S)*F,t[5]=(e*D-s*O+r*S)*F,t[6]=(m*M-_*R-u*N)*F,t[7]=(h*R-d*M+g*N)*F,t[8]=(o*W-a*O+c*y)*F,t[9]=(i*O-e*W-r*y)*F,t[10]=(_*E-w*M+u*b)*F,t[11]=(f*M-h*E-g*b)*F,t[12]=(a*S-o*k-l*y)*F,t[13]=(e*k-i*S+s*y)*F,t[14]=(w*N-_*C-m*b)*F,t[15]=(h*C-f*N+d*b)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,g=r*h,_=r*f,w=o*h,m=o*f,u=a*f,b=l*c,N=l*h,M=l*f,C=i.x,E=i.y,R=i.z;return s[0]=(1-(w+u))*C,s[1]=(g+M)*C,s[2]=(_-N)*C,s[3]=0,s[4]=(g-M)*E,s[5]=(1-(d+u))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(_+N)*R,s[9]=(m-b)*R,s[10]=(1-(d+w))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,f=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,e.setFromRotationMatrix(An),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),g=(i+s)/(i-s),_,w;if(l)_=r/(o-r),w=o*r/(o-r);else if(a===Pn)_=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===vs)_=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),g=-(i+s)/(i-s),_,w;if(l)_=1/(o-r),w=o/(o-r);else if(a===Pn)_=-2/(o-r),w=-(o+r)/(o-r);else if(a===vs)_=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ko.prototype.isMatrix4=!0;var ye=Ko,rs=new j,An=new ye,Vf=new j(0,0,0),Hf=new j(1,1,1),fi=new j,Wr=new j,hn=new j,Sh=new ye,Mh=new Wn,ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gf=0,wh=new j,os=new Wn,Kn=new ye,$r=new j,Ws=new j,Wf=new j,$f=new Wn,Eh=new j(1,0,0),Th=new j(0,1,0),Ah=new j(0,0,1),Ch={type:"added"},Xf={type:"removed"},as={type:"childadded",child:null},ml={type:"childremoved",child:null},Ge=class n extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,e=new ri,i=new Wn,s=new j(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new qt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$r.copy(t):$r.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ws,$r,this.up):Kn.lookAt($r,Ws,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Kn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ch),as.child=t,this.dispatchEvent(as),as.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ch),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new j(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},qf={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let m=e.getJointPose(w,i),u=this._getHandJoint(c,w);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function gl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Of(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=gl(o,r,t+1/3),this.g=gl(o,r,t),this.b=gl(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let i=Ru[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ie.workingToColorSpace(qe.copy(this),t),Math.round(re(qe.r*255,0,255))*65536+Math.round(re(qe.g*255,0,255))*256+Math.round(re(qe.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=tn){ie.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Xr);let i=hl(pi.h,Xr.h,e),s=hl(pi.s,Xr.s,e),r=hl(pi.l,Xr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Wt;Wt.NAMES=Ru;var tr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new j,Qn=new j,_l=new j,ti=new j,ls=new j,cs=new j,Rh=new j,xl=new j,yl=new j,vl=new j,bl=new be,Sl=new be,Ml=new be,ii=class n{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),Qn.subVectors(i,e),_l.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Qn),l=Cn.dot(_l),c=Qn.dot(Qn),h=Qn.dot(_l),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,g=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-g-_,_,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return bl.setScalar(0),Sl.setScalar(0),Ml.setScalar(0),bl.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,i),cs.subVectors(r,i),xl.subVectors(t,i);let l=ls.dot(xl),c=cs.dot(xl);if(l<=0&&c<=0)return e.copy(i);yl.subVectors(t,s);let h=ls.dot(yl),f=cs.dot(yl);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ls,o);vl.subVectors(t,r);let g=ls.dot(vl),_=cs.dot(vl);if(_>=0&&g<=_)return e.copy(r);let w=g*c-l*_;if(w<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(cs,a);let m=h*_-g*f;if(m<=0&&f-h>=0&&g-_>=0)return Rh.subVectors(r,s),a=(f-h)/(f-h+(g-_)),e.copy(s).addScaledVector(Rh,a);let u=1/(m+w+d);return o=w*u,a=d*u,e.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xi=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Yr.subVectors(this.max,$s),hs.subVectors(t.a,$s),us.subVectors(t.b,$s),ds.subVectors(t.c,$s),mi.subVectors(us,hs),gi.subVectors(ds,us),Oi.subVectors(hs,ds);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!wl(e,hs,us,ds,Yr)||(e=[1,0,0,0,1,0,0,0,1],!wl(e,hs,us,ds,Yr))?!1:(Zr.crossVectors(mi,gi),e=[Zr.x,Zr.y,Zr.z],wl(e,hs,us,ds,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new j,new j,new j,new j,new j,new j,new j,new j],Rn=new j,qr=new xi,hs=new j,us=new j,ds=new j,mi=new j,gi=new j,Oi=new j,$s=new j,Yr=new j,Zr=new j,Bi=new j;function wl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new j,jr=new te,Yf=0,vn=class extends Gn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ir=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ee=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zf=new xi,Xs=new j,El=new j,Hi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(El)),this.expandByPoint(Xs.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jf=0,xn=new ye,Tl=new Ge,fs=new j,un=new xi,qs=new xi,ke=new j,nn=class n extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(un.min,qs.min),un.expandByPoint(ke),ke.addVectors(un.max,qs.max),un.expandByPoint(ke)):(un.expandByPoint(qs.min),un.expandByPoint(qs.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),ke.add(fs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new j,l[y]=new j;let c=new j,h=new j,f=new j,d=new te,g=new te,_=new te,w=new j,m=new j;function u(y,S,O){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,O),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),_.fromBufferAttribute(r,O),h.sub(c),f.sub(c),g.sub(d),_.sub(d);let k=1/(g.x*_.y-_.x*g.y);isFinite(k)&&(w.copy(h).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(k),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(k),a[y].add(w),a[S].add(w),a[O].add(w),l[y].add(m),l[S].add(m),l[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,S=b.length;y<S;++y){let O=b[y],k=O.start,W=O.count;for(let D=k,U=k+W;D<U;D+=3)u(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let N=new j,M=new j,C=new j,E=new j;function R(y){C.fromBufferAttribute(s,y),E.copy(C);let S=a[y];N.copy(S),N.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(E,S);let k=M.dot(l[y])<0?-1:1;o.setXYZW(y,N.x,N.y,N.z,k)}for(let y=0,S=b.length;y<S;++y){let O=b[y],k=O.start,W=O.count;for(let D=k,U=k+W;D<U;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);let s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,h=new j,f=new j;if(t)for(let d=0,g=t.count;d<g;d+=3){let _=t.getX(d+0),w=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),g=0,_=0;for(let w=0,m=l.length;w<m;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*h;for(let u=0;u<h;u++)d[_++]=c[g++]}return new vn(d,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],g=t(d,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let g=c[f];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Al=new j,Jf=new j,Kf=new qt,In=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Al.subVectors(i,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Kf.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qf=0,oi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Is,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new In().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new j,Cl=new j,Jr=new j,Kr=new j,Es=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Cl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Kr.copy(this.origin).sub(Cl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Kr.dot(this.direction),l=-Kr.dot(Jr),c=Kr.lengthSq(),h=Math.abs(1-o*o),f,d,g,_;if(h>0)if(f=o*l-a,d=o*a-l,_=r*h,f>=0)if(d>=-_)if(d<=_){let w=1/h;f*=w,d*=w,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cl).addScaledVector(Jr,d),g}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,d=t.y-o.y,g=t.z-o.z,_=e.x-o.x,w=e.y-o.y,m=e.z-o.z,u=i.x-o.x,b=i.y-o.y,N=i.z-o.z,M=Math.abs(l),C=Math.abs(c),E=Math.abs(h),R,y,S,O,k,W,D,U,F,L,z,q;if(M>=C&&M>=E?(S=l,W=f,F=_,q=u,l>=0?(R=c,y=h,O=d,k=g,D=w,U=m,L=b,z=N):(R=h,y=c,O=g,k=d,D=m,U=w,L=N,z=b)):C>=E?(S=c,W=d,F=w,q=b,c>=0?(R=h,y=l,O=g,k=f,D=m,U=_,L=N,z=u):(R=l,y=h,O=f,k=g,D=_,U=m,L=u,z=N)):(S=h,W=g,F=m,q=N,h>=0?(R=l,y=c,O=f,k=d,D=_,U=w,L=u,z=b):(R=c,y=l,O=d,k=f,D=w,U=_,L=b,z=u)),S===0)return null;let Y=R/S,Q=y/S,nt=1/S,mt=O-Y*W,pt=k-Q*W,yt=D-Y*F,ut=U-Q*F,Mt=L-Y*q,X=z-Q*q,it=Mt*ut-X*yt,ct=mt*X-pt*Mt,Ct=yt*pt-ut*mt;if(s){if(it<0||ct<0||Ct<0)return null}else if((it<0||ct<0||Ct<0)&&(it>0||ct>0||Ct>0))return null;let dt=it+ct+Ct;if(dt===0)return null;let zt=nt*(it*W+ct*F+Ct*q);return(dt>0?zt<0:zt>0)?null:this.at(zt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ih=new ye,ki=new Es,Qr=new Hi,Ph=new j,to=new j,eo=new j,no=new j,Rl=new j,io=new j,Lh=new j,so=new j,Le=class extends Ge{constructor(t=new nn,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Rl.fromBufferAttribute(f,t),o?io.addScaledVector(Rl,h):io.addScaledVector(Rl.sub(e),h))}e.add(io)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Qr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Qr,Ph)===null||ki.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Ih),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,w=d.length;_<w;_++){let m=d[_],u=o[m.materialIndex],b=Math.max(m.start,g.start),N=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,C=N;M<C;M+=3){let E=a.getX(M),R=a.getX(M+1),y=a.getX(M+2);s=ro(this,u,t,i,c,h,f,E,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let m=_,u=w;m<u;m+=3){let b=a.getX(m),N=a.getX(m+1),M=a.getX(m+2);s=ro(this,o,t,i,c,h,f,b,N,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,w=d.length;_<w;_++){let m=d[_],u=o[m.materialIndex],b=Math.max(m.start,g.start),N=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,C=N;M<C;M+=3){let E=M,R=M+1,y=M+2;s=ro(this,u,t,i,c,h,f,E,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let m=_,u=w;m<u;m+=3){let b=m,N=m+1,M=m+2;s=ro(this,o,t,i,c,h,f,b,N,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tp(n,t,e,i,s,r,o,a){let l;if(t.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:n}}function ro(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,to),n.getVertexPosition(l,eo),n.getVertexPosition(c,no);let h=tp(n,t,e,i,to,eo,no,Lh);if(h){let f=new j;ii.getBarycoord(Lh,to,eo,no,f),s&&(h.uv=ii.getInterpolatedAttribute(s,a,l,c,f,new te)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,l,c,f,new te)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new j,materialIndex:0};ii.getNormal(to,eo,no,d.normal),h.face=d,h.barycoord=f}return h}var Po=class extends en{constructor(t=null,e=1,i=1,s,r,o,a,l,c=ze,h=ze,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=new Hi,ep=new te(.5,.5),oo=new j,Ts=class{constructor(t=new In,e=new In,i=new In,s=new In,r=new In,o=new In){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],g=r[7],_=r[8],w=r[9],m=r[10],u=r[11],b=r[12],N=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,g-h,u-_,C-b).normalize(),s[1].setComponents(c+o,g+h,u+_,C+b).normalize(),s[2].setComponents(c+a,g+f,u+w,C+N).normalize(),s[3].setComponents(c-a,g-f,u-w,C-N).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,g-d,u-m,C-M).normalize();else if(s[4].setComponents(c-l,g-d,u-m,C-M).normalize(),e===Pn)s[5].setComponents(c+l,g+d,u+m,C+M).normalize();else if(e===vs)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=ep.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vi=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lo=new j,Do=new j,Dh=new ye,Ys=new Es,ao=new Hi,Il=new j,Nh=new j,No=class extends Ge{constructor(t=new nn,e=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Lo.fromBufferAttribute(e,s-1),Do.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new Ee(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;Dh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Dh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let w=g,m=_-1;w<m;w+=c){let u=h.getX(w),b=h.getX(w+1),N=lo(this,t,Ys,l,u,b,w);N&&e.push(N)}if(this.isLineLoop){let w=h.getX(_-1),m=h.getX(g),u=lo(this,t,Ys,l,w,m,_-1);u&&e.push(u)}}else{let g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let w=g,m=_-1;w<m;w+=c){let u=lo(this,t,Ys,l,w,w+1,w);u&&e.push(u)}if(this.isLineLoop){let w=lo(this,t,Ys,l,_-1,g,_-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Lo.fromBufferAttribute(a,s),Do.fromBufferAttribute(a,r),e.distanceSqToSegment(Lo,Do,Il,Nh)>i)return;Il.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Il);if(!(c<t.near||c>t.far))return{distance:c,point:Nh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Uh=new j,Fh=new j,As=class extends No{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Uh.fromBufferAttribute(e,s),Fh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uh.distanceTo(Fh);t.setAttribute("lineDistance",new Ee(i,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sr=class extends en{constructor(t=[],e=Ci,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rr=class extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends en{constructor(t,e,i=Dn,s,r,o,a=ze,l=ze,c,h=Hn,f=1){if(h!==Hn&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uo=class extends bi{constructor(t,e=Dn,i=Ci,s,r,o=ze,a=ze,l,c=Hn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$n=class n extends nn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,g=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(f,2));function _(w,m,u,b,N,M,C,E,R,y,S){let O=M/R,k=C/y,W=M/2,D=C/2,U=E/2,F=R+1,L=y+1,z=0,q=0,Y=new j;for(let Q=0;Q<L;Q++){let nt=Q*k-D;for(let mt=0;mt<F;mt++){let pt=mt*O-W;Y[w]=pt*b,Y[m]=nt*N,Y[u]=U,c.push(Y.x,Y.y,Y.z),Y[w]=0,Y[m]=0,Y[u]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(mt/R),f.push(1-Q/y),z+=1}}for(let Q=0;Q<y;Q++)for(let nt=0;nt<R;nt++){let mt=d+nt+F*Q,pt=d+nt+F*(Q+1),yt=d+(nt+1)+F*(Q+1),ut=d+(nt+1)+F*Q;l.push(mt,pt,ut),l.push(pt,yt,ut),q+=6}a.addGroup(g,q,S),g+=q,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Si=class n extends nn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],g=[],_=0,w=[],m=i/2,u=0;b(),o===!1&&(t>0&&N(!0),e>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(g,2));function b(){let M=new j,C=new j,E=0,R=(e-t)/i;for(let y=0;y<=r;y++){let S=[],O=y/r,k=O*(e-t)+t;for(let W=0;W<=s;W++){let D=W/s,U=D*l+a,F=Math.sin(U),L=Math.cos(U);C.x=k*F,C.y=-O*i+m,C.z=k*L,f.push(C.x,C.y,C.z),M.set(F,R,L).normalize(),d.push(M.x,M.y,M.z),g.push(D,1-O),S.push(_++)}w.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let O=w[S][y],k=w[S+1][y],W=w[S+1][y+1],D=w[S][y+1];(t>0||S!==0)&&(h.push(O,k,D),E+=3),(e>0||S!==r-1)&&(h.push(k,W,D),E+=3)}c.addGroup(u,E,0),u+=E}function N(M){let C=_,E=new te,R=new j,y=0,S=M===!0?t:e,O=M===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,m*O,0),d.push(0,O,0),g.push(.5,.5),_++;let k=_;for(let W=0;W<=s;W++){let U=W/s*l+a,F=Math.cos(U),L=Math.sin(U);R.x=S*L,R.y=m*O,R.z=S*F,f.push(R.x,R.y,R.z),d.push(0,O,0),E.x=F*.5+.5,E.y=L*.5*O+.5,g.push(E.x,E.y),_++}for(let W=0;W<s;W++){let D=C+W,U=k+W;M===!0?h.push(U,U+1,D):h.push(U+1,U,D),y+=3}c.addGroup(u,y,M===!0?1:2),u+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class n extends Si{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var co=new j,ho=new j,Pl=new j,uo=new ii,lr=class extends nn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(_o*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:w,b:m,c:u}=uo;if(w.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),uo.getNormal(Pl),f[0]=`${Math.round(w.x*s)},${Math.round(w.y*s)},${Math.round(w.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){let N=(b+1)%3,M=f[b],C=f[N],E=uo[h[b]],R=uo[h[N]],y=`${M}_${C}`,S=`${C}_${M}`;S in d&&d[S]?(Pl.dot(d[S].normal)<=r&&(g.push(E.x,E.y,E.z),g.push(R.x,R.y,R.z)),d[S]=null):y in d||(d[y]={index0:c[b],index1:c[N],normal:Pl.clone()})}}for(let _ in d)if(d[_]){let{index0:w,index1:m}=d[_];co.fromBufferAttribute(a,w),ho.fromBufferAttribute(a,m),g.push(co.x,co.y,co.z),g.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new Ee(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Gi=class n extends nn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,g=[],_=[],w=[],m=[];for(let u=0;u<h;u++){let b=u*d-o;for(let N=0;N<c;N++){let M=N*f-r;_.push(M,-b,0),w.push(0,0,1),m.push(N/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){let N=b+c*u,M=b+c*(u+1),C=b+1+c*(u+1),E=b+1+c*u;g.push(N,M,E),g.push(M,C,E)}this.setIndex(g),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(w,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var cr=class n extends nn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new j,g=new j,_=new j;for(let w=0;w<=i;w++){let m=o+w/i*a;for(let u=0;u<=s;u++){let b=u/s*r;g.x=(t+e*Math.cos(m))*Math.cos(b),g.y=(t+e*Math.cos(m))*Math.sin(b),g.z=e*Math.sin(m),c.push(g.x,g.y,g.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),_.subVectors(g,d).normalize(),h.push(_.x,_.y,_.z),f.push(u/s),f.push(w/i)}}for(let w=1;w<=i;w++)for(let m=1;m<=s;m++){let u=(s+1)*w+m-1,b=(s+1)*(w-1)+m-1,N=(s+1)*(w-1)+m,M=(s+1)*w+m;l.push(u,b,M),l.push(b,N,M)}this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Oh(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Oh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=qi(n[e]);for(let s in i)t[s]=i[s]}return t}function Oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function np(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Iu={clone:qi,merge:Ze},ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new j().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fo=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oo=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ll(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var wi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends wi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fl:r=t,a=2*e-i;break;case Ol:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:o=t,l=2*i-e;break;case Ol:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,g=this._weightNext,_=(i-e)/(s-e),w=_*_,m=w*_,u=-d*m+2*d*w-d*_,b=(1+d)*m+(-1.5-2*d)*w+(-.5+d)*_+1,N=(-1-g)*m+(1.5+g)*w+.5*_,M=g*m-g*w;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+b*o[c+C]+N*o[l+C]+M*o[f+C];return r}},zo=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Vo=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends wi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(s-e),w=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*w+o[l+m]*_;return r}let d=a*2,g=t-1;for(let _=0;_!==a;++_){let w=o[c+_],m=o[l+_],u=g*d+_*2,b=f[u],N=f[u+1],M=t*d+_*2,C=h[M],E=h[M+1],R=op(i,e,b,C,s);r[_]=Pu(R,w,N,E,m)}return r}};function Pu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function rp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function op(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Pu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=rp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ll(t.settings)&&(i.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ll(this.settings)&&(Bh(this.settings.inTangents,t),Bh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ff(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,d=f-i,g=f+i;for(let _=0;_!==i;++_){let w=e[f+_];if(w!==e[d+_]||w!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let g=0;g!==i;++g)e[d+g]=e[f+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=To;var Ei=class extends fn{constructor(t,e,i){super(t,e,i)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Zs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};Go.prototype.ValueTypeName="color";var Wo=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};Wo.prototype.ValueTypeName="number";var $o=class extends wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},hr=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends fn{constructor(t,e,i){super(t,e,i)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Zs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};Xo.prototype.ValueTypeName="vector";var qo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lu=new qo,Yo=class{constructor(t){this.manager=t!==void 0?t:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},dr=class extends ur{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dl=new ye,kh=new j,zh=new j,Zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fo=new j,po=new Wn,Vn=new j,fr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(fo,po,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new j,Vh=new te,Hh=new te,Ye=class extends fr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Hh),e.subVectors(Hh,Vh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Cs=class extends fr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bl=class extends Zo{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ms=-90,gs=1,jo=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new Ye(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(ms,gs,t,e);a.layers=this.layers,this.add(a);let l=new Ye(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Jo=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fc="\\[\\]\\.:\\/",ap=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",lp="[^"+fc.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",pc),hp=/(WCOD+)?/.source.replace("WCOD",lp),up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),fp=new RegExp("^"+cp+hp+up+dp+"$"),pp=["material","materials","bones","map"],kl=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ap,"")}static parseTrackName(t){let e=fp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=kl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gy=new Float32Array(1);var Gh=new ye,mr=class{constructor(t,e,i=0,s=1/0){this.ray=new Es(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(t,e=!0,i=[]){return zl(t,this,i,e),i.sort(Wh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,i,e);return i.sort(Wh),i}};function Wh(n,t){return n.distance-t.distance}function zl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}var vc=class vc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};vc.prototype.isMatrix2=!0;var Vl=vc;var gr=class extends As{constructor(t=10,e=10,i=4473924,s=8947848){i=new Wt(i),s=new Wt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,g=0,_=-a;d<=e;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);let w=d===r?i:s;w.toArray(c,g),g+=3,w.toArray(c,g),g+=3,w.toArray(c,g),g+=3,w.toArray(c,g),g+=3}let h=new nn;h.setAttribute("position",new Ee(l,3)),h.setAttribute("color",new Ee(c,3));let f=new vi({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function mc(n,t,e,i){let s=mp(i);switch(e){case ac:return n*t;case cc:return n*t/s.components*s.byteLength;case ra:return n*t/s.components*s.byteLength;case Pi:return n*t*2/s.components*s.byteLength;case oa:return n*t*2/s.components*s.byteLength;case lc:return n*t*3/s.components*s.byteLength;case Sn:return n*t*4/s.components*s.byteLength;case aa:return n*t*4/s.components*s.byteLength;case yr:case vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case br:case Sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(n,16)*Math.max(t,8)/4;case la:case ha:return Math.max(n,8)*Math.max(t,8)/2;case da:case fa:case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case Mr:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case La:case Da:case Na:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ua:case Fa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wr:case Oa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(n){switch(n){case an:case ic:return{byteLength:1,components:1};case Ps:case sc:case Un:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case Dn:case na:case Nn:return{byteLength:4,components:1};case rc:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function td(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _p(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<f.length;g++){let _=f[d],w=f[g];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++d,f[d]=w)}f.length=d+1;for(let g=0,_=f.length;g<_;g++){let w=f[g];n.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:xp,alphahash_pars_fragment:yp,alphamap_fragment:vp,alphamap_pars_fragment:bp,alphatest_fragment:Sp,alphatest_pars_fragment:Mp,aomap_fragment:wp,aomap_pars_fragment:Ep,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Cp,beginnormal_vertex:Rp,bsdfs:Ip,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:zp,common:Vp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:$p,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Zp,envmap_fragment:jp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Kp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:um,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:ym,lightprobes_pars_fragment:vm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Cm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Nm,morphtarget_vertex:Um,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:zm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:$m,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:jm,dithering_pars_fragment:Jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:xg,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:bg,cube_vert:Sg,cube_frag:Mg,depth_vert:wg,depth_frag:Eg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Cg,equirect_frag:Rg,linedashed_vert:Ig,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:zg,meshphong_frag:Vg,meshphysical_vert:Hg,meshphysical_frag:Gg,meshtoon_vert:Wg,meshtoon_frag:$g,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:jg,sprite_frag:Jg},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Yn={basic:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ze([vt.common,vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ze([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Yn.physical={uniforms:Ze([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Va={r:0,b:0,g:0},Kg=new ye,ed=new qt;ed.set(-1,0,0,0,1,0,0,0,1);function Qg(n,t,e,i,s,r){let o=new Wt(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function g(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){let M=b.backgroundBlurriness>0;N=t.get(N,M)}return N}function _(b){let N=!1,M=g(b);M===null?m(o,a):M&&M.isColor&&(m(M,1),N=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,N){let M=g(N);M&&(M.isCubeTexture||M.mapping===_r)?(c===void 0&&(c=new Le(new $n(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:qi(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(N.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ed),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Le(new Gi(2,2),new dn({name:"BackgroundMaterial",uniforms:qi(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,N){b.getRGB(Va,dc(n)),e.buffers.color.setClear(Va.r,Va.g,Va.b,N,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,N=1){o.set(b),a=N,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:_,addToRenderList:w,dispose:u}}function t0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(k,W,D,U,F){let L=!1,z=f(k,U,D,W);r!==z&&(r=z,c(r.object)),L=g(k,U,D,F),L&&_(k,U,D,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,M(k,W,D,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function h(k){return n.deleteVertexArray(k)}function f(k,W,D,U){let F=U.wireframe===!0,L=i[W.id];L===void 0&&(L={},i[W.id]=L);let z=k.isInstancedMesh===!0?k.id:0,q=L[z];q===void 0&&(q={},L[z]=q);let Y=q[D.id];Y===void 0&&(Y={},q[D.id]=Y);let Q=Y[F];return Q===void 0&&(Q=d(l()),Y[F]=Q),Q}function d(k){let W=[],D=[],U=[];for(let F=0;F<e;F++)W[F]=0,D[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:D,attributeDivisors:U,object:k,attributes:{},index:null}}function g(k,W,D,U){let F=r.attributes,L=W.attributes,z=0,q=D.getAttributes();for(let Y in q)if(q[Y].location>=0){let nt=F[Y],mt=L[Y];if(mt===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(mt=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(mt=k.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function _(k,W,D,U){let F={},L=W.attributes,z=0,q=D.getAttributes();for(let Y in q)if(q[Y].location>=0){let nt=L[Y];nt===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(nt=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(nt=k.instanceColor));let mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),F[Y]=mt,z++}r.attributes=F,r.attributesNum=z,r.index=U}function w(){let k=r.newAttributes;for(let W=0,D=k.length;W<D;W++)k[W]=0}function m(k){u(k,0)}function u(k,W){let D=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;D[k]=1,U[k]===0&&(n.enableVertexAttribArray(k),U[k]=1),F[k]!==W&&(n.vertexAttribDivisor(k,W),F[k]=W)}function b(){let k=r.newAttributes,W=r.enabledAttributes;for(let D=0,U=W.length;D<U;D++)W[D]!==k[D]&&(n.disableVertexAttribArray(D),W[D]=0)}function N(k,W,D,U,F,L,z){z===!0?n.vertexAttribIPointer(k,W,D,F,L):n.vertexAttribPointer(k,W,D,U,F,L)}function M(k,W,D,U){w();let F=U.attributes,L=D.getAttributes(),z=W.defaultAttributeValues;for(let q in L){let Y=L[q];if(Y.location>=0){let Q=F[q];if(Q===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),Q!==void 0){let nt=Q.normalized,mt=Q.itemSize,pt=t.get(Q);if(pt===void 0)continue;let yt=pt.buffer,ut=pt.type,Mt=pt.bytesPerElement,X=ut===n.INT||ut===n.UNSIGNED_INT||Q.gpuType===na;if(Q.isInterleavedBufferAttribute){let it=Q.data,ct=it.stride,Ct=Q.offset;if(it.isInstancedInterleavedBuffer){for(let dt=0;dt<Y.locationSize;dt++)u(Y.location+dt,it.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let dt=0;dt<Y.locationSize;dt++)N(Y.location+dt,mt/Y.locationSize,ut,nt,ct*Mt,(Ct+mt/Y.locationSize*dt)*Mt,X)}else{if(Q.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)u(Y.location+it,Q.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let it=0;it<Y.locationSize;it++)m(Y.location+it);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let it=0;it<Y.locationSize;it++)N(Y.location+it,mt/Y.locationSize,ut,nt,mt*Mt,mt/Y.locationSize*it*Mt,X)}}else if(z!==void 0){let nt=z[q];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}b()}function C(){S();for(let k in i){let W=i[k];for(let D in W){let U=W[D];for(let F in U){let L=U[F];for(let z in L)h(L[z].object),delete L[z];delete U[F]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let W=i[k.id];for(let D in W){let U=W[D];for(let F in U){let L=U[F];for(let z in L)h(L[z].object),delete L[z];delete U[F]}}delete i[k.id]}function R(k){for(let W in i){let D=i[W];for(let U in D){let F=D[U];if(F[k.id]===void 0)continue;let L=F[k.id];for(let z in L)h(L[z].object),delete L[z];delete F[k.id]}}}function y(k){for(let W in i){let D=i[W],U=k.isInstancedMesh===!0?k.id:0,F=D[U];if(F!==void 0){for(let L in F){let z=F[L];for(let q in z)h(z[q].object),delete z[q];delete F[L]}delete D[U],Object.keys(D).length===0&&delete i[W]}}}function S(){O(),o=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:w,enableAttribute:m,disableUnusedAttributes:b}}function e0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==an&&R!==Nn&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:M,maxSamples:C,samples:E}}function i0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new In,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let g=f.length!==0||d||i!==0||s;return s=d,i=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,g){let _=f.clippingPlanes,w=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,N=b*4,M=u.clippingState||null;l.value=M,M=h(_,d,N,g);for(let C=0;C!==N;++C)M[C]=e[C];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,g,_){let w=f!==null?f.length:0,m=null;if(w!==0){if(m=l.value,_!==!0||m===null){let u=g+w*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let N=0,M=g;N!==w;++N,M+=4)o.copy(f[N]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,m}}var Ns=4,s0=6,r0=20,o0=256,Tr=new Cs,Du=new Wt,bc=null,Sc=0,Mc=0,wc=!1,a0=new j,Yi=new j,Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=a0}=r;bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Sc,Mc),this._renderer.xr.enabled=wc,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:Un,format:Sn,colorSpace:js,depthBuffer:!1},s=Nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l0(r)),this._blurMaterial=h0(r,t,e),this._ggxMaterial=c0(r,t,e)}return s}_compileMaterial(t){let e=new Le(new nn,t);this._renderer.compile(e,Tr)}_sceneToCubeUV(t,e,i,s,r){let l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,g=f.toneMapping;f.getClearColor(Du),f.toneMapping=Ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new $n,new yi({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,m=w.material,u=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,u=!0):(m.color.copy(Du),u=!0);for(let N=0;N<6;N++){let M=N%3;M===0?(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[N],r.y,r.z)):M===1?(l.up.set(0,0,c[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[N],r.z)):(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[N]));let C=this._cubeSize;Ds(s,M*C,N>2?C:0,C,C),f.setRenderTarget(s),u&&f.render(w,l),f.render(t,l)}f.toneMapping=g,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ci||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Tr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=c*1.25,g=f*d,{_lodMax:_}=this,w=this._sizeLods[i],m=3*w*(i>_-Ns?i-_+Ns:0),u=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,Ds(r,m,u,3*w,2*w),s.setRenderTarget(r),s.render(a,Tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ds(t,m,u,3*w,2*w),s.setRenderTarget(t),s.render(a,Tr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ns?s-this._lodMax+Ns:0),d=4*(this._cubeSize-h);Ds(e,f,d,3*h,2*h),o.setRenderTarget(e),o.render(l,Tr)}};function l0(n){let t=[],e=[],i=n,s=n-Ns+1+s0;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,g=3,_=new Float32Array(g*d*f),w=new Float32Array(g*d*f);for(let u=0;u<f;u++){let b=u%3*2/3-1,N=u>2?0:-1,M=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];_.set(M,g*d*u);for(let C=0;C<d;C++){let E=h[C*2]*2-1,R=h[C*2+1]*2-1;u===0?Yi.set(1,R,E):u===1?Yi.set(-E,1,-R):u===2?Yi.set(-E,R,1):u===3?Yi.set(-1,R,-E):u===4?Yi.set(-E,-1,R):Yi.set(E,R,-1),Yi.toArray(w,(u*d+C)*g)}}let m=new nn;m.setAttribute("position",new vn(_,g)),m.setAttribute("outputDirection",new vn(w,g)),e.push(new Le(m,null)),i>Ns&&i--}return{lodMeshes:e,sizeLods:t}}function Nu(n,t,e){let i=new on(n,t,e);return i.texture.mapping=_r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function c0(n,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function h0(n,t,e){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Uu(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Fu(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wa=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $n(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Xn});r.uniforms.tEquirect.value=e;let o=new Le(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=He),new jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function u0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,g=!1){return d==null?null:g?o(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Qo||g===ta)if(t.has(d)){let _=t.get(d).texture;return a(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let w=new Wa(_.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",c),a(w.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let g=d.mapping,_=g===Qo||g===ta,w=g===Ci||g===Xi;if(_||w){let m=e.get(d),u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Ga(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return _&&b&&b.height>0||w&&b&&l(b)?(i===null&&(i=new Ga(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,g){return g===Qo?d.mapping=Ci:g===ta&&(d.mapping=Xi),d}function l(d){let g=0,_=6;for(let w=0;w<_;w++)d[w]!==void 0&&g++;return g===_}function c(d){let g=d.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(d){let g=d.target;g.removeEventListener("dispose",h);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function d0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Vi("WebGLRenderer: "+i+" extension not supported."),s}}}function f0(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER)}function c(f){let d=[],g=f.index,_=f.attributes.position,w=0;if(_===void 0)return;if(g!==null){let b=g.array;w=g.version;for(let N=0,M=b.length;N<M;N+=3){let C=b[N+0],E=b[N+1],R=b[N+2];d.push(C,E,E,R,R,C)}}else{let b=_.array;w=_.version;for(let N=0,M=b.length/3-1;N<M;N+=3){let C=N+0,E=N+1,R=N+2;d.push(C,E,E,R,R,C)}}let m=new(_.count>=65535?ir:nr)(d,1);m.version=w;let u=r.get(f);u&&t.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function p0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let w=0;for(let m=0;m<g;m++)w+=d[m];e.update(w,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function g0(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],N=0;g===!0&&(N=1),_===!0&&(N=2),w===!0&&(N=3);let M=a.attributes.position.count*N,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*C*4*f),R=new Qs(E,M,C,f);R.type=Nn,R.needsUpdate=!0;let y=N*4;for(let O=0;O<f;O++){let k=m[O],W=u[O],D=b[O],U=M*C*4*O;for(let F=0;F<k.count;F++){let L=F*y;g===!0&&(s.fromBufferAttribute(k,F),E[U+L+0]=s.x,E[U+L+1]=s.y,E[U+L+2]=s.z,E[U+L+3]=0),_===!0&&(s.fromBufferAttribute(W,F),E[U+L+4]=s.x,E[U+L+5]=s.y,E[U+L+6]=s.z,E[U+L+7]=0),w===!0&&(s.fromBufferAttribute(D,F),E[U+L+8]=s.x,E[U+L+9]=s.y,E[U+L+10]=s.z,E[U+L+11]=D.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new te(M,C)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _0(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var x0={[Zl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Kl]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function y0(n,t,e,i,s,r){let o=new on(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new nn;c.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ee([0,2,0,0,2,0],2));let h=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Le(c,h),d=new Cs(-1,1,1,-1,0,1),g=null,_=null,w=!1,m,u=null,b=[],N=!1;this.setSize=function(M,C){o.setSize(M,C),a!==null&&a.setSize(M,C),l!==null&&l.setSize(M,C);for(let E=0;E<b.length;E++){let R=b[E];R.setSize&&R.setSize(M,C)}},this.setEffects=function(M){b=M,N=b.length>0&&b[0].isRenderPass===!0;let C=o.width,E=o.height;b.length>0&&a===null&&(a=new on(C,E,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new on(C,E,{type:Un,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let y=b[R];y.setSize&&y.setSize(C,E)}},this.begin=function(M,C){if(w||M.toneMapping===Ln&&b.length===0)return!1;if(u=C,C!==null){let E=C.width,R=C.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return N===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=Ln,!0},this.hasRenderPass=function(){return N},this.end=function(M,C){M.toneMapping=m,w=!0;let E=o,R=a;for(let y=0;y<b.length;y++){let S=b[y];S.enabled!==!1&&(S.render(M,R,E,C),S.needsSwap!==!1&&(E=R,R=R===a?l:a))}if(g!==M.outputColorSpace||_!==M.toneMapping){g=M.outputColorSpace,_=M.toneMapping,h.defines={},ie.getTransfer(g)===ue&&(h.defines.SRGB_TRANSFER="");let y=x0[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(u),M.render(f,d),u=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nd=new en,Ac=new bi(1,1),id=new Qs,sd=new Io,rd=new sr,Ou=[],Bu=[],ku=new Float32Array(16),zu=new Float32Array(9),Vu=new Float32Array(4);function Fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function v0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function S0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function w0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Ue(e,i)}}function E0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),Ue(e,i)}}function T0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Ue(e,i)}}function A0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function C0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function R0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function P0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function L0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function D0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function N0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function U0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=e.isReversedDepthBuffer()?za:ka,r=Ac):r=nd,e.setTexture2D(t||r,s)}function F0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sd,s)}function O0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||rd,s)}function B0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||id,s)}function k0(n){switch(n){case 5126:return v0;case 35664:return b0;case 35665:return S0;case 35666:return M0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return I0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}function z0(n,t){n.uniform1fv(this.addr,t)}function V0(n,t){let e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function H0(n,t){let e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function G0(n,t){let e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function W0(n,t){let e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $0(n,t){let e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function X0(n,t){let e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function q0(n,t){n.uniform1iv(this.addr,t)}function Y0(n,t){n.uniform2iv(this.addr,t)}function Z0(n,t){n.uniform3iv(this.addr,t)}function j0(n,t){n.uniform4iv(this.addr,t)}function J0(n,t){n.uniform1uiv(this.addr,t)}function K0(n,t){n.uniform2uiv(this.addr,t)}function Q0(n,t){n.uniform3uiv(this.addr,t)}function t_(n,t){n.uniform4uiv(this.addr,t)}function e_(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ac:o=nd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function n_(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sd,r[o])}function i_(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rd,r[o])}function s_(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||id,r[o])}function r_(n){switch(n){case 5126:return z0;case 35664:return V0;case 35665:return H0;case 35666:return G0;case 35674:return W0;case 35675:return $0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return j0;case 5125:return J0;case 36294:return K0;case 36295:return Q0;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}},Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Hu(n,t){n.seq.push(t),n.map[t.id]=t}function o_(n,t,e){let i=n.name,s=i.length;for(Ec.lastIndex=0;;){let r=Ec.exec(i),o=Ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hu(e,c===void 0?new Cc(a,n,t):new Rc(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ic(a),Hu(e,f)),e=f}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);o_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Gu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var a_=37297,l_=0;function c_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Wu=new qt;function h_(n){ie._getMatrix(Wu,ie.workingColorSpace,n);let t=`mat3( ${Wu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Js:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $u(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+c_(n.getShaderSource(t),a)}else return r}function u_(n,t){let e=h_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var d_={[Zl]:"Linear",[jl]:"Reinhard",[Jl]:"Cineon",[Kl]:"ACESFilmic",[tc]:"AgX",[ec]:"Neutral",[Ql]:"Custom"};function f_(n,t){let e=d_[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new j;function p_(){ie.getLuminanceCoefficients(Ha);let n=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function g_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function __(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function Xu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(x_,v_)}var y_=new Map;function v_(n,t){let e=Jt[t];if(e===void 0){let i=y_.get(t);if(i!==void 0)e=Jt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pc(e)}var b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(b_,S_)}function S_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var M_={[Wi]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function w_(n){return M_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E_={[Ci]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE_UV"};function T_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var A_={[Xi]:"ENVMAP_MODE_REFRACTION"};function C_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[du]:"ENVMAP_BLENDING_MIX",[fu]:"ENVMAP_BLENDING_ADD"};function I_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R_[n.combine]||"ENVMAP_BLENDING_NONE"}function P_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function L_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=w_(e),c=T_(e),h=C_(e),f=I_(e),d=P_(e),g=m_(e),_=g_(r),w=s.createProgram(),m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),u.length>0&&(u+=`
`)):(m=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),u=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Pc(o),o=Xu(o,e),o=qu(o,e),a=Pc(a),a=Xu(a,e),a=qu(a,e),o=Yu(o),a=Yu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let N=b+m+o,M=b+u+a,C=Gu(s,s.VERTEX_SHADER,N),E=Gu(s,s.FRAGMENT_SHADER,M);s.attachShader(w,C),s.attachShader(w,E),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function R(k){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(w)||"",D=s.getShaderInfoLog(C)||"",U=s.getShaderInfoLog(E)||"",F=W.trim(),L=D.trim(),z=U.trim(),q=!0,Y=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,w,C,E);else{let Q=$u(s,C,"vertex"),nt=$u(s,E,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+Q+`
`+nt)}else F!==""?Ht("WebGLProgram: Program Info Log:",F):(L===""||z==="")&&(Y=!1);Y&&(k.diagnostics={runnable:q,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:u}})}s.deleteShader(C),s.deleteShader(E),y=new Us(s,w),S=__(s,w)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(w,a_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=C,this.fragmentShader=E,this}var D_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Dc(t),e.set(t,i)),i}},Dc=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function N_(n){return n===Pi||n===Mr||n===wr}function U_(n,t,e,i,s,r){let o=new Ms,a=new Lc,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function w(y,S,O,k,W,D){let U=k.fog,F=W.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=t.get(y.envMap||L,z),Y=q&&q.mapping===_r?q.image.height:null,Q=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ht("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,mt=nt!==void 0?nt.length:0,pt=0;F.morphAttributes.position!==void 0&&(pt=1),F.morphAttributes.normal!==void 0&&(pt=2),F.morphAttributes.color!==void 0&&(pt=3);let yt,ut,Mt,X;if(Q){let me=Yn[Q];yt=me.vertexShader,ut=me.fragmentShader}else{yt=y.vertexShader,ut=y.fragmentShader;let me=a.getVertexShaderStage(y),le=a.getFragmentShaderStage(y);a.update(y,me,le),Mt=me.id,X=le.id}let it=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),Ct=W.isInstancedMesh===!0,dt=W.isBatchedMesh===!0,zt=!!y.map,gt=!!y.matcap,wt=!!q,Nt=!!y.aoMap,Et=!!y.lightMap,Tt=!!y.bumpMap&&y.wireframe===!1,Qt=!!y.normalMap,de=!!y.displacementMap,Ce=!!y.emissiveMap,oe=!!y.metalnessMap,ee=!!y.roughnessMap,G=y.anisotropy>0,Me=y.clearcoat>0,se=y.dispersion>0,v=y.retroreflectivity>0,p=y.iridescence>0,x=y.sheen>0,P=y.transmission>0,I=G&&!!y.anisotropyMap,V=Me&&!!y.clearcoatMap,tt=Me&&!!y.clearcoatNormalMap,Z=Me&&!!y.clearcoatRoughnessMap,B=p&&!!y.iridescenceMap,st=p&&!!y.iridescenceThicknessMap,ht=x&&!!y.sheenColorMap,lt=x&&!!y.sheenRoughnessMap,ot=!!y.specularMap,ft=!!y.specularColorMap,Rt=!!y.specularIntensityMap,Xt=P&&!!y.transmissionMap,$=P&&!!y.thicknessMap,_t=!!y.gradientMap,rt=!!y.alphaMap,xt=y.alphaTest>0,At=!!y.alphaHash,at=!!y.extensions,kt=Ln;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(kt=n.toneMapping);let Ot={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:yt,fragmentShader:ut,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:dt,batchingColor:dt&&W._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&W.instanceColor!==null,instancingMorph:Ct&&W.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:gt,envMap:wt,envMapMode:wt&&q.mapping,envMapCubeUVHeight:Y,aoMap:Nt,lightMap:Et,bumpMap:Tt,normalMap:Qt,displacementMap:de,emissiveMap:Ce,normalMapObjectSpace:Qt&&y.normalMapType===gu,normalMapTangentSpace:Qt&&y.normalMapType===Ba,packedNormalMap:Qt&&y.normalMapType===Ba&&N_(y.normalMap.format),metalnessMap:oe,roughnessMap:ee,anisotropy:G,anisotropyMap:I,clearcoat:Me,clearcoatMap:V,clearcoatNormalMap:tt,clearcoatRoughnessMap:Z,dispersion:se,retroreflection:v,iridescence:p,iridescenceMap:B,iridescenceThicknessMap:st,sheen:x,sheenColorMap:ht,sheenRoughnessMap:lt,specularMap:ot,specularColorMap:ft,specularIntensityMap:Rt,transmission:P,transmissionMap:Xt,thicknessMap:$,gradientMap:_t,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:xt,alphaHash:At,combine:y.combine,mapUv:zt&&_(y.map.channel),aoMapUv:Nt&&_(y.aoMap.channel),lightMapUv:Et&&_(y.lightMap.channel),bumpMapUv:Tt&&_(y.bumpMap.channel),normalMapUv:Qt&&_(y.normalMap.channel),displacementMapUv:de&&_(y.displacementMap.channel),emissiveMapUv:Ce&&_(y.emissiveMap.channel),metalnessMapUv:oe&&_(y.metalnessMap.channel),roughnessMapUv:ee&&_(y.roughnessMap.channel),anisotropyMapUv:I&&_(y.anisotropyMap.channel),clearcoatMapUv:V&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(y.sheenRoughnessMap.channel),specularMapUv:ot&&_(y.specularMap.channel),specularColorMapUv:ft&&_(y.specularColorMap.channel),specularIntensityMapUv:Rt&&_(y.specularIntensityMap.channel),transmissionMapUv:Xt&&_(y.transmissionMap.channel),thicknessMapUv:$&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Qt||G),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(zt||rt),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:pt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===ue,decodeVideoTextureEmissive:Ce&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)S.push(O),S.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(u(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function u(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function N(y){let S=g[y.type],O;if(S){let k=Yn[S];O=Iu.clone(k.uniforms)}else O=y.uniforms;return O}function M(y,S){let O=h.get(S);return O!==void 0?++O.usedTimes:(O=new L_(n,S,y,s),c.push(O),h.set(S,O)),O}function C(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function R(){a.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:N,acquireProgram:M,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:R}}function F_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function O_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ju(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function a(d,g,_,w,m,u){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:g,material:_,materialVariant:o(d),groupOrder:w,renderOrder:d.renderOrder,z:m,group:u},n[t]=b):(b.id=d.id,b.object=d,b.geometry=g,b.material=_,b.materialVariant=o(d),b.groupOrder=w,b.renderOrder=d.renderOrder,b.z=m,b.group=u),t++,b}function l(d,g,_,w,m,u,b){b.reversedDepth===!0&&(m=-m);let N=a(d,g,_,w,m,u);_.transmission>0?i.push(N):_.transparent===!0?s.push(N):e.push(N)}function c(d,g,_,w,m,u){let b=a(d,g,_,w,m,u);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,g){e.length>1&&e.sort(d||O_),i.length>1&&i.sort(g||ju),s.length>1&&s.sort(g||ju)}function f(){for(let d=t,g=n.length;d<g;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function B_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ju,n.set(i,[o])):s>=r.length?(o=new Ju,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function k_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new Wt};break;case"SpotLight":e={position:new j,direction:new j,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function z_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var V_=0;function H_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function G_(n){let t=new k_,e=z_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);let s=new j,r=new ye,o=new ye;function a(c){let h=0,f=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,_=0,w=0,m=0,u=0,b=0,N=0,M=0,C=0,E=0,R=0,y=0,S=0,O=0;c.sort(H_);for(let W=0,D=c.length;W<D;W++){let U=c[W],F=U.color,L=U.intensity,z=U.distance,q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Pi?q=U.shadow.map.texture:q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*L,f+=F.g*L,d+=F.b*L;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],L);O++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,nt=e.get(U);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=nt,i.sunShadowMap[_]=q;let mt=Q.getViewportCount();for(let pt=0;pt<mt;pt++)i.sunShadowMatrix[w+pt]=Q.getMatrix(pt),i.sunShadowCascade[w+pt]=Q._cascadeData[pt];w+=mt,_++}i.sun[g]=Y,g++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,nt=e.get(U);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=U.shadow.matrix,C++}i.directional[m]=Y,m++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(F).multiplyScalar(L),Y.distance=z,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[b]=Y;let Q=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,Q.updateMatrices(U),U.castShadow&&S++),i.spotLightMatrix[b]=Q.matrix,U.castShadow){let nt=e.get(U);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.spotShadow[b]=nt,i.spotShadowMap[b]=q,R++}b++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(F).multiplyScalar(L),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[N]=Y,N++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let Q=U.shadow,nt=e.get(U);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,i.pointShadow[u]=nt,i.pointShadowMap[u]=q,i.pointShadowMatrix[u]=U.shadow.matrix,E++}i.point[u]=Y,u++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(L),Y.groundColor.copy(U.groundColor).multiplyScalar(L),i.hemi[M]=Y,M++}}N>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let k=i.hash;(k.sunLength!==g||k.directionalLength!==m||k.pointLength!==u||k.spotLength!==b||k.rectAreaLength!==N||k.hemiLength!==M||k.numSunShadows!==_||k.numDirectionalShadows!==C||k.numPointShadows!==E||k.numSpotShadows!==R||k.numSpotMaps!==y||k.numLightProbes!==O)&&(i.sun.length=g,i.directional.length=m,i.spot.length=b,i.rectArea.length=N,i.point.length=u,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-S,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=O,k.sunLength=g,k.directionalLength=m,k.pointLength=u,k.spotLength=b,k.rectAreaLength=N,k.hemiLength=M,k.numSunShadows=_,k.numDirectionalShadows=C,k.numPointShadows=E,k.numSpotShadows=R,k.numSpotMaps=y,k.numLightProbes=O,i.version=V_++)}function l(c,h){let f=0,d=0,g=0,_=0,w=0,m=0,u=h.matrixWorldInverse;for(let b=0,N=c.length;b<N;b++){let M=c[b];if(M.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(u),f++}else if(M.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(M.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),_++}else if(M.isRectAreaLight){let C=i.rectArea[w];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),o.identity(),r.copy(M.matrixWorld),r.premultiply(u),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),w++}else if(M.isPointLight){let C=i.point[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:a,setupView:l,state:i}}function Ku(n){let t=new G_(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function W_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ku(n),t.set(s,[a])):r>=o.length?(a=new Ku(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q_=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Y_=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Qu=new ye,Ar=new j,Tc=new j;function Z_(n,t,e){let i=new Ts,s=new te,r=new te,o=new be,a=new Oo,l=new Bo,c={},h=e.maxTextureSize,f={[Ai]:sn,[sn]:Ai,[bn]:bn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:$_,fragmentShader:X_}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let _=new nn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Le(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let u=this.type;this.render=function(E,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===qh&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let S=n.getRenderTarget(),O=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Xn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let D=u!==this.type;D&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=E.length;U<F;U++){let L=E[U],z=L.shadow;if(z===void 0){Ht("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let q=z.getFrameExtents();s.multiply(q),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,z.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rs){if(L.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new on(s.x,s.y,{format:Pi,type:Un,minFilter:He,magFilter:He,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new bi(s.x,s.y,Nn),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=Hn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze}else L.isPointLight?(z.map=new Wa(s.x),z.map.depthTexture=new Uo(s.x,Dn)):(z.map=new on(s.x,s.y),z.map.depthTexture=new bi(s.x,s.y,Dn)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=Hn,this.type===Wi?(z.map.depthTexture.compareFunction=Y?za:ka,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();L.isPointLight!==!0&&z.updateMatrices(L,y);for(let nt=0;nt<Q;nt++){let mt=z.getCamera(nt);if(L.isPointLight){let pt=z.camera,yt=z.matrix,ut=L.distance||pt.far;ut!==pt.far&&(pt.far=ut,pt.updateProjectionMatrix()),Ar.setFromMatrixPosition(L.matrixWorld),pt.position.copy(Ar),Tc.copy(pt.position),Tc.add(q_[nt]),pt.up.copy(Y_[nt]),pt.lookAt(Tc),pt.updateMatrixWorld(),yt.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Qu.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qu,pt.coordinateSystem,pt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(z.map),n.clear());let pt=z.getViewport(nt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),W.viewport(o)}i=z.getFrustum(nt),M(R,y,mt,L,this.type)}z.isPointLightShadow!==!0&&this.type===Rs&&b(z,y),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,O,k)};function b(E,R){let y=t.update(w);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:Pi,type:Un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,y,d,w,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value.set(E.map.width,E.map.height),g.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,y,g,w,null)}function N(E,R,y,S){let O=null,k=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)O=k;else if(O=y.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let W=O.uuid,D=R.uuid,U=c[W];U===void 0&&(U={},c[W]=U);let F=U[D];F===void 0&&(F=O.clone(),U[D]=F,R.addEventListener("dispose",C)),O=F}if(O.visible=R.visible,O.wireframe=R.wireframe,S===Rs?O.side=R.shadowSide!==null?R.shadowSide:R.side:O.side=R.shadowSide!==null?R.shadowSide:f[R.side],O.alphaMap=R.alphaMap,O.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,O.map=R.map,O.clipShadows=R.clipShadows,O.clippingPlanes=R.clippingPlanes,O.clipIntersection=R.clipIntersection,O.displacementMap=R.displacementMap,O.displacementScale=R.displacementScale,O.displacementBias=R.displacementBias,O.wireframeLinewidth=R.wireframeLinewidth,O.linewidth=R.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let W=n.properties.get(O);W.light=y}return O}function M(E,R,y,S,O){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Rs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let D=t.update(E),U=E.material;if(Array.isArray(U)){let F=D.groups;for(let L=0,z=F.length;L<z;L++){let q=F[L],Y=U[q.materialIndex];if(Y&&Y.visible){let Q=N(E,Y,S,O);E.onBeforeShadow(n,E,R,y,D,Q,q),n.renderBufferDirect(y,null,D,Q,E,q),E.onAfterShadow(n,E,R,y,D,Q,q)}}}else if(U.visible){let F=N(E,U,S,O);E.onBeforeShadow(n,E,R,y,D,F,null),n.renderBufferDirect(y,null,D,F,E,null),E.onAfterShadow(n,E,R,y,D,F,null)}}let W=E.children;for(let D=0,U=W.length;D<U;D++)M(W[D],R,y,S,O)}function C(E){E.target.removeEventListener("dispose",C);for(let y in c){let S=c[y],O=E.target.uuid;O in S&&(S[O].dispose(),delete S[O])}}}function j_(n,t){function e(){let $=!1,_t=new be,rt=null,xt=new be(0,0,0,0);return{setMask:function(At){rt!==At&&!$&&(n.colorMask(At,At,At,At),rt=At)},setLocked:function(At){$=At},setClear:function(At,at,kt,Ot,me){me===!0&&(At*=Ot,at*=Ot,kt*=Ot),_t.set(At,at,kt,Ot),xt.equals(_t)===!1&&(n.clearColor(At,at,kt,Ot),xt.copy(_t))},reset:function(){$=!1,rt=null,xt.set(-1,0,0,0)}}}function i(){let $=!1,_t=!1,rt=null,xt=null,At=null;return{setReversed:function(at){if(_t!==at){let kt=t.get("EXT_clip_control");at?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),_t=at;let Ot=At;At=null,this.setClear(Ot)}},getReversed:function(){return _t},setTest:function(at){at?it(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(at){rt!==at&&!$&&(n.depthMask(at),rt=at)},setFunc:function(at){if(_t&&(at=Cu[at]),xt!==at){switch(at){case xo:n.depthFunc(n.NEVER);break;case yo:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case xs:n.depthFunc(n.LEQUAL);break;case bo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case Mo:n.depthFunc(n.GREATER);break;case wo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=at}},setLocked:function(at){$=at},setClear:function(at){At!==at&&(At=at,_t&&(at=1-at),n.clearDepth(at))},reset:function(){$=!1,rt=null,xt=null,At=null,_t=!1}}}function s(){let $=!1,_t=null,rt=null,xt=null,At=null,at=null,kt=null,Ot=null,me=null;return{setTest:function(le){$||(le?it(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(le){_t!==le&&!$&&(n.stencilMask(le),_t=le)},setFunc:function(le,En,On){(rt!==le||xt!==En||At!==On)&&(n.stencilFunc(le,En,On),rt=le,xt=En,At=On)},setOp:function(le,En,On){(at!==le||kt!==En||Ot!==On)&&(n.stencilOp(le,En,On),at=le,kt=En,Ot=On)},setLocked:function(le){$=le},setClear:function(le){me!==le&&(n.clearStencil(le),me=le)},reset:function(){$=!1,_t=null,rt=null,xt=null,At=null,at=null,kt=null,Ot=null,me=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d={},g=new WeakMap,_=[],w=null,m=!1,u=null,b=null,N=null,M=null,C=null,E=null,R=null,y=new Wt(0,0,0),S=0,O=!1,k=null,W=null,D=null,U=null,F=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=q>=2);let Q=null,nt={},mt=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),yt=new be().fromArray(mt),ut=new be().fromArray(pt);function Mt($,_t,rt,xt){let At=new Uint8Array(4),at=n.createTexture();n.bindTexture($,at),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<rt;kt++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(_t+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return at}let X={};X[n.TEXTURE_2D]=Mt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(xs),Tt(!1),Qt(Hl),it(n.CULL_FACE),Nt(Xn);function it($){h[$]!==!0&&(n.enable($),h[$]=!0)}function ct($){h[$]!==!1&&(n.disable($),h[$]=!1)}function Ct($,_t){return d[$]!==_t?(n.bindFramebuffer($,_t),d[$]=_t,$===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_t),$===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function dt($,_t){let rt=_,xt=!1;if($){rt=g.get(_t),rt===void 0&&(rt=[],g.set(_t,rt));let At=$.textures;if(rt.length!==At.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let at=0,kt=At.length;at<kt;at++)rt[at]=n.COLOR_ATTACHMENT0+at;rt.length=At.length,xt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,xt=!0);xt&&n.drawBuffers(rt)}function zt($){return w!==$?(n.useProgram($),w=$,!0):!1}let gt={[$i]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[jh]:n.FUNC_REVERSE_SUBTRACT};gt[Jh]=n.MIN,gt[Kh]=n.MAX;let wt={[Qh]:n.ZERO,[tu]:n.ONE,[eu]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[au]:n.SRC_ALPHA_SATURATE,[ru]:n.DST_COLOR,[iu]:n.DST_ALPHA,[nu]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[ou]:n.ONE_MINUS_DST_COLOR,[su]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[cu]:n.ONE_MINUS_CONSTANT_COLOR,[hu]:n.CONSTANT_ALPHA,[uu]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt($,_t,rt,xt,At,at,kt,Ot,me,le){if($===Xn){m===!0&&(ct(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),$!==Yh){if($!==u||le!==O){if((b!==$i||C!==$i)&&(n.blendEquation(n.FUNC_ADD),b=$i,C=$i),le)switch($){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$t("WebGLState: Invalid blending: ",$);break}else switch($){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",$);break}N=null,M=null,E=null,R=null,y.set(0,0,0),S=0,u=$,O=le}return}At=At||_t,at=at||rt,kt=kt||xt,(_t!==b||At!==C)&&(n.blendEquationSeparate(gt[_t],gt[At]),b=_t,C=At),(rt!==N||xt!==M||at!==E||kt!==R)&&(n.blendFuncSeparate(wt[rt],wt[xt],wt[at],wt[kt]),N=rt,M=xt,E=at,R=kt),(Ot.equals(y)===!1||me!==S)&&(n.blendColor(Ot.r,Ot.g,Ot.b,me),y.copy(Ot),S=me),u=$,O=!1}function Et($,_t){$.side===bn?ct(n.CULL_FACE):it(n.CULL_FACE);let rt=$.side===sn;_t&&(rt=!rt),Tt(rt),$.blending===Is&&$.transparent===!1?Nt(Xn):Nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let xt=$.stencilWrite;a.setTest(xt),xt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ce($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt($){k!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),k=$)}function Qt($){$!==$h?(it(n.CULL_FACE),$!==W&&($===Hl?n.cullFace(n.BACK):$===Xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),W=$}function de($){$!==D&&(z&&n.lineWidth($),D=$)}function Ce($,_t,rt){$?(it(n.POLYGON_OFFSET_FILL),(U!==_t||F!==rt)&&(U=_t,F=rt,o.getReversed()&&(_t=-_t),n.polygonOffset(_t,rt))):ct(n.POLYGON_OFFSET_FILL)}function oe($){$?it(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ee($){$===void 0&&($=n.TEXTURE0+L-1),Q!==$&&(n.activeTexture($),Q=$)}function G($,_t,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+L-1:rt=Q);let xt=nt[rt];xt===void 0&&(xt={type:void 0,texture:void 0},nt[rt]=xt),(xt.type!==$||xt.texture!==_t)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture($,_t||X[$]),xt.type=$,xt.texture=_t)}function Me(){let $=nt[Q];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function v(){try{n.compressedTexImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function p(){try{n.texSubImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function x(){try{n.texSubImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function P(){try{n.compressedTexSubImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function I(){try{n.compressedTexSubImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function V(){try{n.texStorage2D(...arguments)}catch($){$t("WebGLState:",$)}}function tt(){try{n.texStorage3D(...arguments)}catch($){$t("WebGLState:",$)}}function Z(){try{n.texImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function B(){try{n.texImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function st($){return f[$]!==void 0?f[$]:n.getParameter($)}function ht($,_t){f[$]!==_t&&(n.pixelStorei($,_t),f[$]=_t)}function lt($){yt.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),yt.copy($))}function ot($){ut.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),ut.copy($))}function ft($,_t){let rt=c.get(_t);rt===void 0&&(rt=new WeakMap,c.set(_t,rt));let xt=rt.get($);xt===void 0&&(xt=n.getUniformBlockIndex(_t,$.name),rt.set($,xt))}function Rt($,_t){let xt=c.get(_t).get($);l.get(_t)!==xt&&(n.uniformBlockBinding(_t,xt,$.__bindingPointIndex),l.set(_t,xt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,nt={},d={},g=new WeakMap,_=[],w=null,m=!1,u=null,b=null,N=null,M=null,C=null,E=null,R=null,y=new Wt(0,0,0),S=0,O=!1,k=null,W=null,D=null,U=null,F=null,yt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:ct,bindFramebuffer:Ct,drawBuffers:dt,useProgram:zt,setBlending:Nt,setMaterial:Et,setFlipSided:Tt,setCullFace:Qt,setLineWidth:de,setPolygonOffset:Ce,setScissorTest:oe,activeTexture:ee,bindTexture:G,unbindTexture:Me,compressedTexImage2D:se,compressedTexImage3D:v,texImage2D:Z,texImage3D:B,pixelStorei:ht,getParameter:st,updateUBOMapping:ft,uniformBlockBinding:Rt,texStorage2D:V,texStorage3D:tt,texSubImage2D:p,texSubImage3D:x,compressedTexSubImage2D:P,compressedTexSubImage3D:I,scissor:lt,viewport:ot,reset:Xt}}function J_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,f=new Set,d,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(v,p){return _?new OffscreenCanvas(v,p):Ks("canvas")}function m(v,p,x){let P=1,I=se(v);if((I.width>x||I.height>x)&&(P=x/Math.max(I.width,I.height)),P<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let V=Math.floor(P*I.width),tt=Math.floor(P*I.height);d===void 0&&(d=w(V,tt));let Z=p?w(V,tt):d;return Z.width=V,Z.height=tt,Z.getContext("2d").drawImage(v,0,0,V,tt),Ht("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+V+"x"+tt+")."),Z}else return"data"in v&&Ht("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),v;return v}function u(v){return v.generateMipmaps}function b(v){n.generateMipmap(v)}function N(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(v,p,x,P,I,V=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let tt;P&&(tt=t.get("EXT_texture_norm16"),tt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=p;if(p===n.RED&&(x===n.FLOAT&&(Z=n.R32F),x===n.HALF_FLOAT&&(Z=n.R16F),x===n.UNSIGNED_BYTE&&(Z=n.R8),x===n.UNSIGNED_SHORT&&tt&&(Z=tt.R16_EXT),x===n.SHORT&&tt&&(Z=tt.R16_SNORM_EXT)),p===n.RED_INTEGER&&(x===n.UNSIGNED_BYTE&&(Z=n.R8UI),x===n.UNSIGNED_SHORT&&(Z=n.R16UI),x===n.UNSIGNED_INT&&(Z=n.R32UI),x===n.BYTE&&(Z=n.R8I),x===n.SHORT&&(Z=n.R16I),x===n.INT&&(Z=n.R32I)),p===n.RG&&(x===n.FLOAT&&(Z=n.RG32F),x===n.HALF_FLOAT&&(Z=n.RG16F),x===n.UNSIGNED_BYTE&&(Z=n.RG8),x===n.UNSIGNED_SHORT&&tt&&(Z=tt.RG16_EXT),x===n.SHORT&&tt&&(Z=tt.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(x===n.UNSIGNED_BYTE&&(Z=n.RG8UI),x===n.UNSIGNED_SHORT&&(Z=n.RG16UI),x===n.UNSIGNED_INT&&(Z=n.RG32UI),x===n.BYTE&&(Z=n.RG8I),x===n.SHORT&&(Z=n.RG16I),x===n.INT&&(Z=n.RG32I)),p===n.RGB_INTEGER&&(x===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),x===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),x===n.UNSIGNED_INT&&(Z=n.RGB32UI),x===n.BYTE&&(Z=n.RGB8I),x===n.SHORT&&(Z=n.RGB16I),x===n.INT&&(Z=n.RGB32I)),p===n.RGBA_INTEGER&&(x===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),x===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),x===n.UNSIGNED_INT&&(Z=n.RGBA32UI),x===n.BYTE&&(Z=n.RGBA8I),x===n.SHORT&&(Z=n.RGBA16I),x===n.INT&&(Z=n.RGBA32I)),p===n.RGB&&(x===n.UNSIGNED_SHORT&&tt&&(Z=tt.RGB16_EXT),x===n.SHORT&&tt&&(Z=tt.RGB16_SNORM_EXT),x===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),p===n.RGBA){let B=V?Js:ie.getTransfer(I);x===n.FLOAT&&(Z=n.RGBA32F),x===n.HALF_FLOAT&&(Z=n.RGBA16F),x===n.UNSIGNED_BYTE&&(Z=B===ue?n.SRGB8_ALPHA8:n.RGBA8),x===n.UNSIGNED_SHORT&&tt&&(Z=tt.RGBA16_EXT),x===n.SHORT&&tt&&(Z=tt.RGBA16_SNORM_EXT),x===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),x===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function C(v,p){let x;return v?p===null||p===Dn||p===Ls?x=n.DEPTH24_STENCIL8:p===Nn?x=n.DEPTH32F_STENCIL8:p===Ps&&(x=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Dn||p===Ls?x=n.DEPTH_COMPONENT24:p===Nn?x=n.DEPTH_COMPONENT32F:p===Ps&&(x=n.DEPTH_COMPONENT16),x}function E(v,p){return u(v)===!0||v.isFramebufferTexture&&v.minFilter!==ze&&v.minFilter!==He?Math.log2(Math.max(p.width,p.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?p.mipmaps.length:1}function R(v){let p=v.target;p.removeEventListener("dispose",R),S(p),p.isVideoTexture&&h.delete(p),p.isHTMLTexture&&f.delete(p)}function y(v){let p=v.target;p.removeEventListener("dispose",y),k(p)}function S(v){let p=i.get(v);if(p.__webglInit===void 0)return;let x=v.source,P=g.get(x);if(P){let I=P[p.__cacheKey];I.usedTimes--,I.usedTimes===0&&O(v),Object.keys(P).length===0&&g.delete(x)}i.remove(v)}function O(v){let p=i.get(v);n.deleteTexture(p.__webglTexture);let x=v.source,P=g.get(x);delete P[p.__cacheKey],o.memory.textures--}function k(v){let p=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(p.__webglFramebuffer[P]))for(let I=0;I<p.__webglFramebuffer[P].length;I++)n.deleteFramebuffer(p.__webglFramebuffer[P][I]);else n.deleteFramebuffer(p.__webglFramebuffer[P]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[P])}else{if(Array.isArray(p.__webglFramebuffer))for(let P=0;P<p.__webglFramebuffer.length;P++)n.deleteFramebuffer(p.__webglFramebuffer[P]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let P=0;P<p.__webglColorRenderbuffer.length;P++)p.__webglColorRenderbuffer[P]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[P]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let x=v.textures;for(let P=0,I=x.length;P<I;P++){let V=i.get(x[P]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(x[P])}i.remove(v)}let W=0;function D(){W=0}function U(){return W}function F(v){W=v}function L(){let v=W;return v>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(v+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,v}function z(v){let p=[];return p.push(v.wrapS),p.push(v.wrapT),p.push(v.wrapR||0),p.push(v.magFilter),p.push(v.minFilter),p.push(v.anisotropy),p.push(v.internalFormat),p.push(v.format),p.push(v.type),p.push(v.generateMipmaps),p.push(v.premultiplyAlpha),p.push(v.flipY),p.push(v.unpackAlignment),p.push(v.colorSpace),p.join()}function q(v,p){let x=i.get(v);if(v.isVideoTexture&&G(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&x.__version!==v.version){let P=v.image;if(P===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(x,v,p);return}}else v.isExternalTexture&&(x.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,x.__webglTexture,n.TEXTURE0+p)}function Y(v,p){let x=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&x.__version!==v.version){ct(x,v,p);return}else v.isExternalTexture&&(x.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,x.__webglTexture,n.TEXTURE0+p)}function Q(v,p){let x=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&x.__version!==v.version){ct(x,v,p);return}e.bindTexture(n.TEXTURE_3D,x.__webglTexture,n.TEXTURE0+p)}function nt(v,p){let x=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&x.__version!==v.version){Ct(x,v,p);return}e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+p)}let mt={[ys]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},pt={[ze]:n.NEAREST,[pu]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[He]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},yt={[xu]:n.NEVER,[Mu]:n.ALWAYS,[yu]:n.LESS,[ka]:n.LEQUAL,[vu]:n.EQUAL,[za]:n.GEQUAL,[bu]:n.GREATER,[Su]:n.NOTEQUAL};function ut(v,p){if(p.type===Nn&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===He||p.magFilter===ea||p.magFilter===xr||p.magFilter===Ri||p.minFilter===He||p.minFilter===ea||p.minFilter===xr||p.minFilter===Ri)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,mt[p.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,mt[p.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,mt[p.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,pt[p.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,pt[p.minFilter]),p.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,yt[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===ze||p.minFilter!==xr&&p.minFilter!==Ri||p.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){let x=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,x.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function Mt(v,p){let x=!1;v.__webglInit===void 0&&(v.__webglInit=!0,p.addEventListener("dispose",R));let P=p.source,I=g.get(P);I===void 0&&(I={},g.set(P,I));let V=z(p);if(V!==v.__cacheKey){I[V]===void 0&&(I[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,x=!0),I[V].usedTimes++;let tt=I[v.__cacheKey];tt!==void 0&&(I[v.__cacheKey].usedTimes--,tt.usedTimes===0&&O(p)),v.__cacheKey=V,v.__webglTexture=I[V].texture}return x}function X(v,p,x){return Math.floor(Math.floor(v/x)/p)}function it(v,p,x,P){let V=v.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,x,P,p.data);else{V.sort((ht,lt)=>ht.start-lt.start);let tt=0;for(let ht=1;ht<V.length;ht++){let lt=V[tt],ot=V[ht],ft=lt.start+lt.count,Rt=X(ot.start,p.width,4),Xt=X(lt.start,p.width,4);ot.start<=ft+1&&Rt===Xt&&X(ot.start+ot.count-1,p.width,4)===Rt?lt.count=Math.max(lt.count,ot.start+ot.count-lt.start):(++tt,V[tt]=ot)}V.length=tt+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),B=e.getParameter(n.UNPACK_SKIP_PIXELS),st=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let ht=0,lt=V.length;ht<lt;ht++){let ot=V[ht],ft=Math.floor(ot.start/4),Rt=Math.ceil(ot.count/4),Xt=ft%p.width,$=Math.floor(ft/p.width),_t=Rt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,$),e.texSubImage2D(n.TEXTURE_2D,0,Xt,$,_t,rt,x,P,p.data)}v.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,B),e.pixelStorei(n.UNPACK_SKIP_ROWS,st)}}function ct(v,p,x){let P=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(P=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(P=n.TEXTURE_3D);let I=Mt(v,p),V=p.source;e.bindTexture(P,v.__webglTexture,n.TEXTURE0+x);let tt=i.get(V);if(V.version!==tt.__version||I===!0){if(e.activeTexture(n.TEXTURE0+x),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let rt=ie.getPrimaries(ie.workingColorSpace),xt=p.colorSpace===ai?null:ie.getPrimaries(p.colorSpace),At=p.colorSpace===ai||rt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let B=m(p.image,!1,s.maxTextureSize);B=Me(p,B);let st=r.convert(p.format,p.colorSpace),ht=r.convert(p.type),lt=M(p.internalFormat,st,ht,p.normalized,p.colorSpace,p.isVideoTexture);ut(P,p);let ot,ft=p.mipmaps,Rt=p.isVideoTexture!==!0,Xt=tt.__version===void 0||I===!0,$=V.dataReady,_t=E(p,B);if(p.isDepthTexture)lt=C(p.format===Ii,p.type),Xt&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,lt,B.width,B.height):e.texImage2D(n.TEXTURE_2D,0,lt,B.width,B.height,0,st,ht,null));else if(p.isDataTexture)if(ft.length>0){Rt&&Xt&&e.texStorage2D(n.TEXTURE_2D,_t,lt,ft[0].width,ft[0].height);for(let rt=0,xt=ft.length;rt<xt;rt++)ot=ft[rt],Rt?$&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ot.width,ot.height,st,ht,ot.data):e.texImage2D(n.TEXTURE_2D,rt,lt,ot.width,ot.height,0,st,ht,ot.data);p.generateMipmaps=!1}else Rt?(Xt&&e.texStorage2D(n.TEXTURE_2D,_t,lt,B.width,B.height),$&&it(p,B,st,ht)):e.texImage2D(n.TEXTURE_2D,0,lt,B.width,B.height,0,st,ht,B.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Rt&&Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,lt,ft[0].width,ft[0].height,B.depth);for(let rt=0,xt=ft.length;rt<xt;rt++)if(ot=ft[rt],p.format!==Sn)if(st!==null)if(Rt){if($)if(p.layerUpdates.size>0){let At=mc(ot.width,ot.height,p.format,p.type);for(let at of p.layerUpdates){let kt=ot.data.subarray(at*At/ot.data.BYTES_PER_ELEMENT,(at+1)*At/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,at,ot.width,ot.height,1,st,kt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,ot.width,ot.height,B.depth,st,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,lt,ot.width,ot.height,B.depth,0,ot.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?$&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,ot.width,ot.height,B.depth,st,ht,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,lt,ot.width,ot.height,B.depth,0,st,ht,ot.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{Rt&&Xt&&e.texStorage2D(n.TEXTURE_2D,_t,lt,ft[0].width,ft[0].height);for(let rt=0,xt=ft.length;rt<xt;rt++)ot=ft[rt],p.format!==Sn?st!==null?Rt?$&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,ot.width,ot.height,st,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,lt,ot.width,ot.height,0,ot.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?$&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ot.width,ot.height,st,ht,ot.data):e.texImage2D(n.TEXTURE_2D,rt,lt,ot.width,ot.height,0,st,ht,ot.data)}else if(p.isDataArrayTexture)if(Rt){if(Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,lt,B.width,B.height,B.depth),$)if(p.layerUpdates.size>0){let rt=mc(B.width,B.height,p.format,p.type);for(let xt of p.layerUpdates){let At=B.data.subarray(xt*rt/B.data.BYTES_PER_ELEMENT,(xt+1)*rt/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,B.width,B.height,1,st,ht,At)}p.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,st,ht,B.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,lt,B.width,B.height,B.depth,0,st,ht,B.data);else if(p.isData3DTexture)Rt?(Xt&&e.texStorage3D(n.TEXTURE_3D,_t,lt,B.width,B.height,B.depth),$&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,st,ht,B.data)):e.texImage3D(n.TEXTURE_3D,0,lt,B.width,B.height,B.depth,0,st,ht,B.data);else if(p.isFramebufferTexture){if(Xt)if(Rt)e.texStorage2D(n.TEXTURE_2D,_t,lt,B.width,B.height);else{let rt=B.width,xt=B.height;for(let At=0;At<_t;At++)e.texImage2D(n.TEXTURE_2D,At,lt,rt,xt,0,st,ht,null),rt>>=1,xt>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),B.parentNode!==rt){rt.appendChild(B),f.add(p),rt.onpaint=xt=>{let At=xt.changedElements;for(let at of f)At.includes(at.image)&&(at.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,B);else{let At=n.RGBA,at=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,at,kt,B)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ft.length>0){if(Rt&&Xt){let rt=se(ft[0]);e.texStorage2D(n.TEXTURE_2D,_t,lt,rt.width,rt.height)}for(let rt=0,xt=ft.length;rt<xt;rt++)ot=ft[rt],Rt?$&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,st,ht,ot):e.texImage2D(n.TEXTURE_2D,rt,lt,st,ht,ot);p.generateMipmaps=!1}else if(Rt){if(Xt){let rt=se(B);e.texStorage2D(n.TEXTURE_2D,_t,lt,rt.width,rt.height)}$&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st,ht,B)}else e.texImage2D(n.TEXTURE_2D,0,lt,st,ht,B);u(p)&&b(P),tt.__version=V.version,p.onUpdate&&p.onUpdate(p)}v.__version=p.version}function Ct(v,p,x){if(p.image.length!==6)return;let P=Mt(v,p),I=p.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+x);let V=i.get(I);if(I.version!==V.__version||P===!0){e.activeTexture(n.TEXTURE0+x);let tt=ie.getPrimaries(ie.workingColorSpace),Z=p.colorSpace===ai?null:ie.getPrimaries(p.colorSpace),B=p.colorSpace===ai||tt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let st=p.isCompressedTexture||p.image[0].isCompressedTexture,ht=p.image[0]&&p.image[0].isDataTexture,lt=[];for(let at=0;at<6;at++)!st&&!ht?lt[at]=m(p.image[at],!0,s.maxCubemapSize):lt[at]=ht?p.image[at].image:p.image[at],lt[at]=Me(p,lt[at]);let ot=lt[0],ft=r.convert(p.format,p.colorSpace),Rt=r.convert(p.type),Xt=M(p.internalFormat,ft,Rt,p.normalized,p.colorSpace),$=p.isVideoTexture!==!0,_t=V.__version===void 0||P===!0,rt=I.dataReady,xt=E(p,ot);ut(n.TEXTURE_CUBE_MAP,p);let At;if(st){$&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Xt,ot.width,ot.height);for(let at=0;at<6;at++){At=lt[at].mipmaps;for(let kt=0;kt<At.length;kt++){let Ot=At[kt];p.format!==Sn?ft!==null?$?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,0,0,Ot.width,Ot.height,ft,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,Xt,Ot.width,Ot.height,0,Ot.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,0,0,Ot.width,Ot.height,ft,Rt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,Xt,Ot.width,Ot.height,0,ft,Rt,Ot.data)}}}else{if(At=p.mipmaps,$&&_t){At.length>0&&xt++;let at=se(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Xt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){$?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,lt[at].width,lt[at].height,ft,Rt,lt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Xt,lt[at].width,lt[at].height,0,ft,Rt,lt[at].data);for(let kt=0;kt<At.length;kt++){let me=At[kt].image[at].image;$?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,0,0,me.width,me.height,ft,Rt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,Xt,me.width,me.height,0,ft,Rt,me.data)}}else{$?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ft,Rt,lt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Xt,ft,Rt,lt[at]);for(let kt=0;kt<At.length;kt++){let Ot=At[kt];$?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,0,0,ft,Rt,Ot.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,Xt,ft,Rt,Ot.image[at])}}}u(p)&&b(n.TEXTURE_CUBE_MAP),V.__version=I.version,p.onUpdate&&p.onUpdate(p)}v.__version=p.version}function dt(v,p,x,P,I,V){let tt=r.convert(x.format,x.colorSpace),Z=r.convert(x.type),B=M(x.internalFormat,tt,Z,x.normalized,x.colorSpace),st=i.get(p),ht=i.get(x);if(ht.__renderTarget=p,!st.__hasExternalTextures){let lt=Math.max(1,p.width>>V),ot=Math.max(1,p.height>>V);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?e.texImage3D(I,V,B,lt,ot,p.depth,0,tt,Z,null):e.texImage2D(I,V,B,lt,ot,0,tt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),ee(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,P,I,ht.__webglTexture,0,oe(p)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,P,I,ht.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(v,p,x){if(n.bindRenderbuffer(n.RENDERBUFFER,v),p.depthBuffer){let P=p.depthTexture,I=P&&P.isDepthTexture?P.type:null,V=C(p.stencilBuffer,I),tt=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ee(p)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(p),V,p.width,p.height):x?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(p),V,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,V,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,v)}else{let P=p.textures;for(let I=0;I<P.length;I++){let V=P[I],tt=r.convert(V.format,V.colorSpace),Z=r.convert(V.type),B=M(V.internalFormat,tt,Z,V.normalized,V.colorSpace);ee(p)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(p),B,p.width,p.height):x?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(p),B,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,B,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(v,p,x){let P=p.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let I=i.get(p.depthTexture);if(I.__renderTarget=p,(!I.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),P){if(I.__webglInit===void 0&&(I.__webglInit=!0,p.depthTexture.addEventListener("dispose",R)),I.__webglTexture===void 0){I.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),ut(n.TEXTURE_CUBE_MAP,p.depthTexture);let st=r.convert(p.depthTexture.format),ht=r.convert(p.depthTexture.type),lt;p.depthTexture.format===Hn?lt=n.DEPTH_COMPONENT24:p.depthTexture.format===Ii&&(lt=n.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,lt,p.width,p.height,0,st,ht,null)}}else q(p.depthTexture,0);let V=I.__webglTexture,tt=oe(p),Z=P?n.TEXTURE_CUBE_MAP_POSITIVE_X+x:n.TEXTURE_2D,B=p.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===Hn)ee(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,Z,V,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,B,Z,V,0);else if(p.depthTexture.format===Ii)ee(p)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,Z,V,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,B,Z,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(v){let p=i.get(v),x=v.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==v.depthTexture){let P=v.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),P){let I=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,P.removeEventListener("dispose",I)};P.addEventListener("dispose",I),p.__depthDisposeCallback=I}p.__boundDepthTexture=P}if(v.depthTexture&&!p.__autoAllocateDepthBuffer)if(x)for(let P=0;P<6;P++)gt(p.__webglFramebuffer[P],v,P);else{let P=v.texture.mipmaps;P&&P.length>0?gt(p.__webglFramebuffer[0],v,0):gt(p.__webglFramebuffer,v,0)}else if(x){p.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[P]),p.__webglDepthbuffer[P]===void 0)p.__webglDepthbuffer[P]=n.createRenderbuffer(),zt(p.__webglDepthbuffer[P],v,!1);else{let I=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=p.__webglDepthbuffer[P];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,V)}}else{let P=v.texture.mipmaps;if(P&&P.length>0?e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),zt(p.__webglDepthbuffer,v,!1);else{let I=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(v,p,x){let P=i.get(v);p!==void 0&&dt(P.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),x!==void 0&&wt(v)}function Et(v){let p=v.texture,x=i.get(v),P=i.get(p);v.addEventListener("dispose",y);let I=v.textures,V=v.isWebGLCubeRenderTarget===!0,tt=I.length>1;if(tt||(P.__webglTexture===void 0&&(P.__webglTexture=n.createTexture()),P.__version=p.version,o.memory.textures++),V){x.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0){x.__webglFramebuffer[Z]=[];for(let B=0;B<p.mipmaps.length;B++)x.__webglFramebuffer[Z][B]=n.createFramebuffer()}else x.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){x.__webglFramebuffer=[];for(let Z=0;Z<p.mipmaps.length;Z++)x.__webglFramebuffer[Z]=n.createFramebuffer()}else x.__webglFramebuffer=n.createFramebuffer();if(tt)for(let Z=0,B=I.length;Z<B;Z++){let st=i.get(I[Z]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ee(v)===!1){x.__webglMultisampledFramebuffer=n.createFramebuffer(),x.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,x.__webglMultisampledFramebuffer);for(let Z=0;Z<I.length;Z++){let B=I[Z];x.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,x.__webglColorRenderbuffer[Z]);let st=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),lt=M(B.internalFormat,st,ht,B.normalized,B.colorSpace,v.isXRRenderTarget===!0),ot=oe(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,lt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,x.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(x.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(x.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture),ut(n.TEXTURE_CUBE_MAP,p);for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0)for(let B=0;B<p.mipmaps.length;B++)dt(x.__webglFramebuffer[Z][B],v,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,B);else dt(x.__webglFramebuffer[Z],v,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(p)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){for(let Z=0,B=I.length;Z<B;Z++){let st=I[Z],ht=i.get(st),lt=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(lt=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,ht.__webglTexture),ut(lt,st),dt(x.__webglFramebuffer,v,st,n.COLOR_ATTACHMENT0+Z,lt,0),u(st)&&b(lt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Z=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,P.__webglTexture),ut(Z,p),p.mipmaps&&p.mipmaps.length>0)for(let B=0;B<p.mipmaps.length;B++)dt(x.__webglFramebuffer[B],v,p,n.COLOR_ATTACHMENT0,Z,B);else dt(x.__webglFramebuffer,v,p,n.COLOR_ATTACHMENT0,Z,0);u(p)&&b(Z),e.unbindTexture()}v.depthBuffer&&wt(v)}function Tt(v){let p=v.textures;for(let x=0,P=p.length;x<P;x++){let I=p[x];if(u(I)){let V=N(v),tt=i.get(I).__webglTexture;e.bindTexture(V,tt),b(V),e.unbindTexture()}}}let Qt=[],de=[];function Ce(v){if(v.samples>0){if(ee(v)===!1){let p=v.textures,x=v.width,P=v.height,I=n.COLOR_BUFFER_BIT,V=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=i.get(v),Z=p.length>1;if(Z)for(let st=0;st<p.length;st++)e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer);let B=v.texture.mipmaps;B&&B.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let st=0;st<p.length;st++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,tt.__webglColorRenderbuffer[st]);let ht=i.get(p[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,x,P,0,0,x,P,I,n.NEAREST),l===!0&&(Qt.length=0,de.length=0,Qt.push(n.COLOR_ATTACHMENT0+st),v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&(Qt.push(V),de.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let st=0;st<p.length;st++){e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,tt.__webglColorRenderbuffer[st]);let ht=i.get(p[st]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&l){let p=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function oe(v){return Math.min(s.maxSamples,v.samples)}function ee(v){let p=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function G(v){let p=o.render.frame;h.get(v)!==p&&(h.set(v,p),v.update())}function Me(v,p){let x=v.colorSpace,P=v.format,I=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||x!==js&&x!==ai&&(ie.getTransfer(x)===ue?(P!==Sn||I!==an)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",x)),p}function se(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=Nt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K_(n,t){function e(i,s=ai){let r,o=ie.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ic)return n.BYTE;if(i===sc)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===na)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===ac)return n.ALPHA;if(i===lc)return n.RGB;if(i===Sn)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===cc)return n.RED;if(i===ra)return n.RED_INTEGER;if(i===Pi)return n.RG;if(i===oa)return n.RG_INTEGER;if(i===aa)return n.RGBA_INTEGER;if(i===yr||i===vr||i===br||i===Sr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ha||i===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===da||i===fa||i===pa||i===ma||i===ga||i===Mr||i===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===da||i===fa)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ma)return r.COMPRESSED_R11_EAC;if(i===ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mr)return r.COMPRESSED_RG11_EAC;if(i===_a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xa||i===ya||i===va||i===ba||i===Sa||i===Ma||i===wa||i===Ea||i===Ta||i===Aa||i===Ca||i===Ra||i===Ia||i===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===Da||i===Na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===La)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ua||i===Fa||i===wr||i===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new dn({vertexShader:Q_,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Gn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,g=null,_=null,w=typeof XRWebGLBinding<"u",m=new Nc,u={},b=e.getContextAttributes(),N=null,M=null,C=[],E=[],R=new te,y=null,S=null,O=new Ye;O.viewport=new be;let k=new Ye;k.viewport=new be;let W=[O,k],D=new Jo,U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=C[X];return it===void 0&&(it=new ws,C[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=C[X];return it===void 0&&(it=new ws,C[X]=it),it.getGripSpace()},this.getHand=function(X){let it=C[X];return it===void 0&&(it=new ws,C[X]=it),it.getHandSpace()};function L(X){let it=E.indexOf(X.inputSource);if(it===-1)return;let ct=C[it];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let X=0;X<C.length;X++){let it=E[X];it!==null&&(E[X]=null,C[X].disconnect(it))}U=null,F=null,m.reset();for(let X in u)delete u[X];if(t.setRenderTarget(N),g=null,d=null,f=null,s=null,M=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Ct=null,dt=null;b.depth&&(dt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=b.stencil?Ii:Hn,Ct=b.stencil?Ls:Dn);let zt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new on(d.textureWidth,d.textureHeight,{format:Sn,type:an,depthTexture:new bi(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new on(g.framebufferWidth,g.framebufferHeight,{format:Sn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(X){for(let it=0;it<X.removed.length;it++){let ct=X.removed[it],Ct=E.indexOf(ct);Ct>=0&&(E[Ct]=null,C[Ct].disconnect(ct))}for(let it=0;it<X.added.length;it++){let ct=X.added[it],Ct=E.indexOf(ct);if(Ct===-1){for(let zt=0;zt<C.length;zt++)if(zt>=E.length){E.push(ct),Ct=zt;break}else if(E[zt]===null){E[zt]=ct,Ct=zt;break}if(Ct===-1)break}let dt=C[Ct];dt&&dt.connect(ct)}}let Y=new j,Q=new j;function nt(X,it,ct){Y.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);let Ct=Y.distanceTo(Q),dt=it.projectionMatrix.elements,zt=ct.projectionMatrix.elements,gt=dt[14]/(dt[10]-1),wt=dt[14]/(dt[10]+1),Nt=(dt[9]+1)/dt[5],Et=(dt[9]-1)/dt[5],Tt=(dt[8]-1)/dt[0],Qt=(zt[8]+1)/zt[0],de=gt*Tt,Ce=gt*Qt,oe=Ct/(-Tt+Qt),ee=oe*-Tt;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ee),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),dt[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let G=gt+oe,Me=wt+oe,se=de-ee,v=Ce+(Ct-ee),p=Nt*wt/Me*G,x=Et*wt/Me*G;X.projectionMatrix.makePerspective(se,v,p,x,G,Me),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function mt(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let it=X.near,ct=X.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),D.near=k.near=O.near=it,D.far=k.far=O.far=ct,(U!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,F=D.far),D.layers.mask=X.layers.mask|6,O.layers.mask=D.layers.mask&-5,k.layers.mask=D.layers.mask&-3;let Ct=X.parent,dt=D.cameras;mt(D,Ct);for(let zt=0;zt<dt.length;zt++)mt(dt[zt],Ct);dt.length===2?nt(D,O,k):D.projectionMatrix.copy(O.projectionMatrix),S===null&&X.isPerspectiveCamera&&(S={camera:X,fov:X.fov,zoom:X.zoom}),pt(X,D,Ct)};function pt(X,it,ct){ct===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ao*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(X){return u[X]};let yt=null;function ut(X,it){if(h=it.getViewerPose(c||o),_=it,h!==null){let ct=h.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let Ct=!1;ct.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let wt=0;wt<ct.length;wt++){let Nt=ct[wt],Et=null;if(g!==null)Et=g.getViewport(Nt);else{let Qt=f.getViewSubImage(d,Nt);Et=Qt.viewport,wt===0&&(t.setRenderTargetTextures(M,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(M))}let Tt=W[wt];Tt===void 0&&(Tt=new Ye,Tt.layers.enable(wt),Tt.viewport=new be,W[wt]=Tt),Tt.matrix.fromArray(Nt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Nt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Et.x,Et.y,Et.width,Et.height),wt===0&&(D.matrix.copy(Tt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(Tt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=i.getBinding();let wt=f.getDepthInformation(ct[0]);wt&&wt.isValid&&wt.texture&&m.init(wt,s.renderState)}if(dt&&dt.includes("camera-access")&&w){t.state.unbindTexture(),f=i.getBinding();for(let wt=0;wt<ct.length;wt++){let Nt=ct[wt].camera;if(Nt){let Et=u[Nt];Et||(Et=new or,u[Nt]=Et);let Tt=f.getCameraImage(Nt);Et.sourceTexture=Tt}}}}for(let ct=0;ct<C.length;ct++){let Ct=E[ct],dt=C[ct];Ct!==null&&dt!==void 0&&dt.update(Ct,it,c||o)}yt&&yt(X,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let Mt=new td;Mt.setAnimationLoop(ut),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},ex=new ye,od=new qt;od.set(-1,0,0,0,1,0,0,0,1);function nx(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,dc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,N,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),w(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,N):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=t.get(u),N=b.envMap,M=b.envMapRotation;N&&(m.envMap.value=N,m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(M)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(od),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,N){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=N*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function w(m,u){let b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ix(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,C){let E=C.program;i.uniformBlockBinding(M,E)}function c(M,C){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",b));let R=C.program;i.updateUBOMapping(M,R);let y=t.render.frame;r[M.id]!==y&&(d(M),r[M.id]=y)}function h(M){let C=f();M.__bindingPointIndex=C;let E=n.createBuffer(),R=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let C=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let y=0,S=E.length;y<S;y++){let O=E[y];if(Array.isArray(O))for(let k=0,W=O.length;k<W;k++)g(O[k],y,k,R);else g(O,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(M,C,E,R){if(w(M,C,E,R)===!0){let y=M.__offset,S=M.value;if(Array.isArray(S)){let O=0;for(let k=0;k<S.length;k++){let W=S[k],D=u(W);_(W,M.__data,O),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function _(M,C,E){typeof M=="number"||typeof M=="boolean"?C[0]=M:M.isMatrix3?(C[0]=M.elements[0],C[1]=M.elements[1],C[2]=M.elements[2],C[3]=0,C[4]=M.elements[3],C[5]=M.elements[4],C[6]=M.elements[5],C[7]=0,C[8]=M.elements[6],C[9]=M.elements[7],C[10]=M.elements[8],C[11]=0):ArrayBuffer.isView(M)?C.set(new M.constructor(M.buffer,M.byteOffset,C.length)):M.toArray(C,E)}function w(M,C,E,R){let y=M.value,S=C+"_"+E;if(R[S]===void 0)return typeof y=="number"||typeof y=="boolean"?R[S]=y:ArrayBuffer.isView(y)?R[S]=y.slice():R[S]=y.clone(),!0;{let O=R[S];if(typeof y=="number"||typeof y=="boolean"){if(O!==y)return R[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(O.equals(y)===!1)return O.copy(y),!0}}return!1}function m(M){let C=M.uniforms,E=0,R=16;for(let S=0,O=C.length;S<O;S++){let k=Array.isArray(C[S])?C[S]:[C[S]];for(let W=0,D=k.length;W<D;W++){let U=k[W],F=Array.isArray(U.value)?U.value:[U.value];for(let L=0,z=F.length;L<z;L++){let q=F[L],Y=u(q),Q=E%R,nt=Q%Y.boundary,mt=Q+nt;E+=nt,mt!==0&&R-mt<Y.storage&&(E+=R-mt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=Y.storage}}}let y=E%R;return y>0&&(E+=R-y),M.__size=E,M.__cache={},this}function u(M){let C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(C.boundary=16,C.storage=M.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",M),C}function b(M){let C=M.target;C.removeEventListener("dispose",b);let E=o.indexOf(C.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function N(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:N}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function rx(){return qn===null&&(qn=new Po(sx,16,16,Pi,Un),qn.name="DFG_LUT",qn.minFilter=He,qn.magFilter=He,qn.wrapS=yn,qn.wrapT=yn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var $a=class{constructor(t={}){let{canvas:e=Eu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:g=an}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let w=g,m=new Set([aa,oa,ra]),u=new Set([an,Dn,Ps,Ls,ia,sa]),b=new Uint32Array(4),N=new Int32Array(4),M=new j,C=null,E=null,R=[],y=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,k=!1,W=null,D=null,U=null,F=null;this._outputColorSpace=tn;let L=0,z=0,q=null,Y=-1,Q=null,nt=new be,mt=new be,pt=null,yt=new Wt(0),ut=0,Mt=e.width,X=e.height,it=1,ct=null,Ct=null,dt=new be(0,0,Mt,X),zt=new be(0,0,Mt,X),gt=!1,wt=new Ts,Nt=!1,Et=!1,Tt=new ye,Qt=new j,de=new be,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function ee(){return q===null?it:1}let G=i;function Me(T,H){return e.getContext(T,H)}let se,v,p,x,P,I,V,tt,Z,B,st,ht,lt,ot,ft,Rt,Xt,$,_t,rt,xt,At,at;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",En,!1),G===null){let H="webgl2";if(G=Me(H,T),G===null)throw Me(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(T){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",En,!1),$t("WebGLRenderer: "+T.message),T}function kt(){se=new d0(G),se.init(),xt=new K_(G,se),v=new n0(G,se,t,xt),p=new j_(G,se),v.reversedDepthBuffer&&d&&p.buffers.depth.setReversed(!0),D=G.createFramebuffer(),U=G.createFramebuffer(),F=G.createFramebuffer(),x=new m0(G),P=new F_,I=new J_(G,se,p,P,v,xt,x),V=new u0(O),tt=new _p(G),At=new t0(G,tt),Z=new f0(G,tt,x,At),B=new _0(G,Z,tt,At,x),$=new g0(G,v,I),ft=new i0(P),st=new U_(O,V,se,v,At,ft),ht=new nx(O,P),lt=new B_,ot=new W_(se),Xt=new Qg(O,V,p,B,_,l),Rt=new Z_(O,B,v),at=new ix(G,x,v,p),_t=new e0(G,se,x),rt=new p0(G,se,x),x.programs=st.programs,O.capabilities=v,O.extensions=se,O.properties=P,O.renderLists=lt,O.shadowMap=Rt,O.state=p,O.info=x}w!==an&&(S=new y0(w,e.width,e.height,a,s,r));let Ot=new Uc(O,G);this.xr=Ot,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(T){T!==void 0&&(it=T,this.setSize(Mt,X,!1))},this.getSize=function(T){return T.set(Mt,X)},this.setSize=function(T,H,et=!0){if(Ot.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=T,X=H,e.width=Math.floor(T*it),e.height=Math.floor(H*it),et===!0&&(e.style.width=T+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Mt*it,X*it).floor()},this.setDrawingBufferSize=function(T,H,et){Mt=T,X=H,it=et,e.width=Math.floor(T*et),e.height=Math.floor(H*et),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(w===an){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(nt)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,H,et,J){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,H,et,J),p.viewport(nt.copy(dt).multiplyScalar(it).round())},this.getScissor=function(T){return T.copy(zt)},this.setScissor=function(T,H,et,J){T.isVector4?zt.set(T.x,T.y,T.z,T.w):zt.set(T,H,et,J),p.scissor(mt.copy(zt).multiplyScalar(it).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){p.setScissorTest(gt=T)},this.setOpaqueSort=function(T){ct=T},this.setTransparentSort=function(T){Ct=T},this.getClearColor=function(T){return T.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,et=!0){let J=0;if(T){let K=!1;if(q!==null){let St=q.texture.format;K=m.has(St)}if(K){let St=q.texture.type,Pt=u.has(St),bt=Xt.getClearColor(),Ut=Xt.getClearAlpha(),Bt=bt.r,jt=bt.g,ne=bt.b;Pt?(b[0]=Bt,b[1]=jt,b[2]=ne,b[3]=Ut,G.clearBufferuiv(G.COLOR,0,b)):(N[0]=Bt,N[1]=jt,N[2]=ne,N[3]=Ut,G.clearBufferiv(G.COLOR,0,N))}else J|=G.COLOR_BUFFER_BIT}H&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),W=T},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Xt.dispose(),lt.dispose(),ot.dispose(),P.dispose(),V.dispose(),B.dispose(),At.dispose(),at.dispose(),st.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",th),Ot.removeEventListener("sessionend",eh),Ui.stop()};function me(T){T.preventDefault(),uc("WebGLRenderer: Context Lost."),k=!0}function le(){uc("WebGLRenderer: Context Restored."),k=!1;let T=x.autoReset,H=Rt.enabled,et=Rt.autoUpdate,J=Rt.needsUpdate,K=Rt.type;kt(),x.autoReset=T,Rt.enabled=H,Rt.autoUpdate=et,Rt.needsUpdate=J,Rt.type=K}function En(T){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function On(T){let H=T.target;H.removeEventListener("dispose",On),mf(H)}function mf(T){gf(T),P.remove(T)}function gf(T){let H=P.get(T).programs;H!==void 0&&(H.forEach(function(et){st.releaseProgram(et)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,et,J,K,St){H===null&&(H=Ce);let Pt=K.isMesh&&K.matrixWorld.determinantAffine()<0,bt=yf(T,H,et,J,K);p.setMaterial(J,Pt);let Ut=et.index,Bt=1;if(J.wireframe===!0){if(Ut=Z.getWireframeAttribute(et),Ut===void 0)return;Bt=2}let jt=et.drawRange,ne=et.attributes.position,Ft=jt.start*Bt,ce=(jt.start+jt.count)*Bt;St!==null&&(Ft=Math.max(Ft,St.start*Bt),ce=Math.min(ce,(St.start+St.count)*Bt)),Ut!==null?(Ft=Math.max(Ft,0),ce=Math.min(ce,Ut.count)):ne!=null&&(Ft=Math.max(Ft,0),ce=Math.min(ce,ne.count));let Ie=ce-Ft;if(Ie<0||Ie===1/0)return;At.setup(K,J,bt,et,Ut);let _e,pe=_t;if(Ut!==null&&(_e=tt.get(Ut),pe=rt,pe.setIndex(_e)),K.isMesh)J.wireframe===!0?(p.setLineWidth(J.wireframeLinewidth*ee()),pe.setMode(G.LINES)):pe.setMode(G.TRIANGLES);else if(K.isLine){let $e=J.linewidth;$e===void 0&&($e=1),p.setLineWidth($e*ee()),K.isLineSegments?pe.setMode(G.LINES):K.isLineLoop?pe.setMode(G.LINE_LOOP):pe.setMode(G.LINE_STRIP)}else K.isPoints?pe.setMode(G.POINTS):K.isSprite&&pe.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(se.get("WEBGL_multi_draw"))pe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let $e=K._multiDrawStarts,It=K._multiDrawCounts,Ke=K._multiDrawCount,ae=Ut?tt.get(Ut).bytesPerElement:1,gn=P.get(J).currentProgram.getUniforms();for(let Bn=0;Bn<Ke;Bn++)gn.setValue(G,"_gl_DrawID",Bn),pe.render($e[Bn]/ae,It[Bn])}else if(K.isInstancedMesh)pe.renderInstances(Ft,Ie,K.count);else if(et.isInstancedBufferGeometry){let $e=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,It=Math.min(et.instanceCount,$e);pe.renderInstances(Ft,Ie,It)}else pe.render(Ft,Ie)};function Qc(T,H,et,J){W!==null&&T.isNodeMaterial&&W.setObject(J,T),Nt===!0&&ft.setState(T,et,!1),T.transparent===!0&&T.side===bn&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Br(T,H,J),T.side=Ai,T.needsUpdate=!0,Br(T,H,J),T.side=bn):Br(T,H,J)}this.compile=function(T,H,et=null){et===null&&(et=T),W!==null&&W.renderStart(T,H,et),E=ot.get(et),E.init(H),y.push(E),et.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),T!==et&&T.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),W!==null&&W.updateLights(E.state.lightsArray),Et=this.localClippingEnabled,Nt=ft.init(this.clippingPlanes,Et),Nt===!0&&ft.setGlobalState(this.clippingPlanes,H),W!==null&&Rt.render(E.state.shadowsArray,et,H);let J=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){let bt=St[Pt];Qc(bt,et,H,K),J.add(bt)}else Qc(St,et,H,K),J.add(St)}),E=y.pop(),W!==null&&W.renderEnd(),J},this.compileAsync=function(T,H,et=null){let J=this.compile(T,H,et);return new Promise(K=>{function St(){if(J.forEach(function(Pt){let Ut=P.get(Pt).currentProgram;(Ut===void 0||Ut.isReady())&&J.delete(Pt)}),J.size===0){K(T);return}setTimeout(St,10)}se.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let sl=null;function _f(T){sl&&sl(T)}function th(){Ui.stop()}function eh(){Ui.start()}let Ui=new td;Ui.setAnimationLoop(_f),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){sl=T,Ot.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},Ot.addEventListener("sessionstart",th),Ot.addEventListener("sessionend",eh),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;W!==null&&W.renderStart(T,H);let et=Ot.enabled===!0&&Ot.isPresenting===!0,J=S!==null&&(q===null||et)&&S.begin(O,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(H),H=Ot.getCamera()),T.isScene===!0&&T.onBeforeRender(O,T,H,q),E=ot.get(T,y.length),E.init(H),E.state.textureUnits=I.getTextureUnits(),y.push(E),Tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),wt.setFromProjectionMatrix(Tt,Pn,H.reversedDepth),Et=this.localClippingEnabled,Nt=ft.init(this.clippingPlanes,Et),C=lt.get(T,R.length),C.init(),R.push(C),Ot.enabled===!0&&Ot.isPresenting===!0){let Pt=O.xr.getDepthSensingMesh();Pt!==null&&rl(Pt,H,-1/0,O.sortObjects)}rl(T,H,0,O.sortObjects),C.finish(),W!==null&&W.updateLights(E.state.lightsArray),O.sortObjects===!0&&C.sort(ct,Ct),oe=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,oe&&Xt.addToRenderList(C,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Nt===!0&&ft.beginShadows();let K=E.state.shadowsArray;if(Rt.render(K,T,H),Nt===!0&&ft.endShadows(),(J&&S.hasRenderPass())===!1){let Pt=C.opaque,bt=C.transmissive;if(E.setupLights(),H.isArrayCamera){let Ut=H.cameras;if(bt.length>0)for(let Bt=0,jt=Ut.length;Bt<jt;Bt++){let ne=Ut[Bt];ih(Pt,bt,T,ne)}oe&&Xt.render(T);for(let Bt=0,jt=Ut.length;Bt<jt;Bt++){let ne=Ut[Bt];nh(C,T,ne,ne.viewport)}}else bt.length>0&&ih(Pt,bt,T,H),oe&&Xt.render(T),nh(C,T,H)}q!==null&&z===0&&(I.updateMultisampleRenderTarget(q),I.updateRenderTargetMipmap(q)),J&&S.end(O),T.isScene===!0&&T.onAfterRender(O,T,H),At.resetDefaultState(),Y=-1,Q=null,y.pop(),y.length>0?(E=y[y.length-1],I.setTextureUnits(E.state.textureUnits),Nt===!0&&ft.setGlobalState(O.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,W!==null&&W.renderEnd()};function rl(T,H,et,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(wt)){J&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);let Pt=B.update(T),bt=T.material;bt.visible&&C.push(T,Pt,bt,et,de.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(wt))){let Pt=B.update(T),bt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),de.copy(Pt.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(bt)){let Ut=Pt.groups;for(let Bt=0,jt=Ut.length;Bt<jt;Bt++){let ne=Ut[Bt],Ft=bt[ne.materialIndex];Ft&&Ft.visible&&C.push(T,Pt,Ft,et,de.z,ne,H)}}else bt.visible&&C.push(T,Pt,bt,et,de.z,null,H)}}let St=T.children;for(let Pt=0,bt=St.length;Pt<bt;Pt++)rl(St[Pt],H,et,J)}function nh(T,H,et,J){let{opaque:K,transmissive:St,transparent:Pt}=T;E.setupLightsView(et),Nt===!0&&ft.setGlobalState(O.clippingPlanes,et),J&&p.viewport(nt.copy(J)),K.length>0&&Or(K,H,et),St.length>0&&Or(St,H,et),Pt.length>0&&Or(Pt,H,et),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function ih(T,H,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){let Ft=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new on(1,1,{generateMipmaps:!0,type:Ft?Un:an,minFilter:Ri,samples:Math.max(4,v.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let St=E.state.transmissionRenderTarget[J.id],Pt=J.viewport||nt;St.setSize(Pt.z*O.transmissionResolutionScale,Pt.w*O.transmissionResolutionScale);let bt=O.getRenderTarget(),Ut=O.getActiveCubeFace(),Bt=O.getActiveMipmapLevel();O.setRenderTarget(St),O.getClearColor(yt),ut=O.getClearAlpha(),ut<1&&O.setClearColor(16777215,.5),O.clear(),oe&&Xt.render(et);let jt=O.toneMapping;O.toneMapping=Ln;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),Nt===!0&&ft.setGlobalState(O.clippingPlanes,J),Or(T,et,J),I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ce=0,Ie=H.length;ce<Ie;ce++){let _e=H[ce],{object:pe,geometry:$e,material:It,group:Ke}=_e;if(It.side===bn&&pe.layers.test(J.layers)){let ae=It.side;It.side=sn,It.needsUpdate=!0,sh(pe,et,J,$e,It,Ke),It.side=ae,It.needsUpdate=!0,Ft=!0}}Ft===!0&&(I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St))}O.setRenderTarget(bt,Ut,Bt),O.setClearColor(yt,ut),ne!==void 0&&(J.viewport=ne),O.toneMapping=jt}function Or(T,H,et){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,St=T.length;K<St;K++){let Pt=T[K],{object:bt,geometry:Ut,group:Bt}=Pt,jt=Pt.material;jt.allowOverride===!0&&J!==null&&(jt=J),bt.layers.test(et.layers)&&sh(bt,H,et,Ut,jt,Bt)}}function sh(T,H,et,J,K,St){W!==null&&K.isNodeMaterial&&W.setObject(T,K),T.onBeforeRender(O,H,et,J,K,St),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(O,H,et,J,T,St),K.transparent===!0&&K.side===bn&&K.forceSinglePass===!1?(K.side=sn,K.needsUpdate=!0,O.renderBufferDirect(et,H,J,K,T,St),K.side=Ai,K.needsUpdate=!0,O.renderBufferDirect(et,H,J,K,T,St),K.side=bn):O.renderBufferDirect(et,H,J,K,T,St),T.onAfterRender(O,H,et,J,K,St)}function Br(T,H,et){H.isScene!==!0&&(H=Ce);let J=P.get(T),K=E.state.lights,St=E.state.shadowsArray,Pt=K.state.version,bt=st.getParameters(T,K.state,St,H,et,E.state.lightProbeGridArray),Ut=st.getProgramCacheKey(bt),Bt=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=V.get(T.envMap||J.environment,jt),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",On),Bt=new Map,J.programs=Bt);let ne=Bt.get(Ut);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===Pt)return oh(T,bt),ne}else bt.uniforms=st.getUniforms(T),W!==null&&T.isNodeMaterial&&W.build(T,et,bt),T.onBeforeCompile(bt,O),ne=st.acquireProgram(bt,Ut),Bt.set(Ut,ne),J.uniforms=bt.uniforms;let Ft=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=ft.uniform),oh(T,bt),J.needsLights=bf(T),J.lightsStateVersion=Pt,J.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.sunLights.value=K.state.sun,Ft.sunLightShadows.value=K.state.sunShadow,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.sunShadowMatrix.value=K.state.sunShadowMatrix,Ft.sunShadowCascade.value=K.state.sunShadowCascade,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=E.state.lightProbeGridArray.length>0,J.currentProgram=ne,J.uniformsList=null,ne}function rh(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Us.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function oh(T,H){let et=P.get(T);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function xf(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let et=0,J=T.length;et<J;et++){let K=T[et];if(K.texture!==null&&K.boundingBox.containsPoint(M))return K}return null}function yf(T,H,et,J,K){H.isScene!==!0&&(H=Ce),I.resetTextureUnits();let St=H.fog,Pt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,bt=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ie.workingColorSpace,Ut=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Bt=V.get(J.envMap||Pt,Ut),jt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ne=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!et.morphAttributes.position,ce=!!et.morphAttributes.normal,Ie=!!et.morphAttributes.color,_e=Ln;J.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(_e=O.toneMapping);let pe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,$e=pe!==void 0?pe.length:0,It=P.get(J),Ke=E.state.lights;if(Nt===!0&&(Et===!0||T!==Q)){let ge=T===Q&&J.id===Y;ft.setState(J,T,ge)}let ae=!1;J.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ke.state.version||It.outputColorSpace!==bt||K.isBatchedMesh&&It.batching===!1||!K.isBatchedMesh&&It.batching===!0||K.isBatchedMesh&&It.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&It.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&It.instancing===!1||!K.isInstancedMesh&&It.instancing===!0||K.isSkinnedMesh&&It.skinning===!1||!K.isSkinnedMesh&&It.skinning===!0||K.isInstancedMesh&&It.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&It.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&It.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&It.instancingMorph===!1&&K.morphTexture!==null||It.envMap!==Bt||J.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ft.numPlanes||It.numIntersection!==ft.numIntersection)||It.vertexAlphas!==jt||It.vertexTangents!==ne||It.morphTargets!==Ft||It.morphNormals!==ce||It.morphColors!==Ie||It.toneMapping!==_e||It.morphTargetsCount!==$e||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,It.__version=J.version);let gn=It.currentProgram;ae===!0&&(gn=Br(J,H,K),W&&J.isNodeMaterial&&W.onUpdateProgram(J,gn,It));let Bn=!1,ci=!1,Qi=!1,fe=gn.getUniforms(),Re=It.uniforms;if(p.useProgram(gn.program)&&(Bn=!0,ci=!0,Qi=!0),J.id!==Y&&(Y=J.id,ci=!0),It.needsLights){let ge=xf(E.state.lightProbeGridArray,K);It.lightProbeGrid!==ge&&(It.lightProbeGrid=ge,ci=!0)}if(Bn||Q!==T){p.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue(G,"projectionMatrix",T.projectionMatrix),fe.setValue(G,"viewMatrix",T.matrixWorldInverse);let ui=fe.map.cameraPosition;ui!==void 0&&ui.setValue(G,Qt.setFromMatrixPosition(T.matrixWorld)),v.logarithmicDepthBuffer&&fe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&fe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,ci=!0,Qi=!0)}if(It.needsLights&&(Ke.state.sunShadowMap.length>0&&fe.setValue(G,"sunShadowMap",Ke.state.sunShadowMap,I),Ke.state.directionalShadowMap.length>0&&fe.setValue(G,"directionalShadowMap",Ke.state.directionalShadowMap,I),Ke.state.spotShadowMap.length>0&&fe.setValue(G,"spotShadowMap",Ke.state.spotShadowMap,I),Ke.state.pointShadowMap.length>0&&fe.setValue(G,"pointShadowMap",Ke.state.pointShadowMap,I)),K.isSkinnedMesh){fe.setOptional(G,K,"bindMatrix"),fe.setOptional(G,K,"bindMatrixInverse");let ge=K.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue(G,"boneTexture",ge.boneTexture,I))}K.isBatchedMesh&&(fe.setOptional(G,K,"batchingTexture"),fe.setValue(G,"batchingTexture",K._matricesTexture,I),fe.setOptional(G,K,"batchingIdTexture"),fe.setValue(G,"batchingIdTexture",K._indirectTexture,I),fe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&fe.setValue(G,"batchingColorTexture",K._colorsTexture,I));let hi=et.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&$.update(K,et,gn),(ci||It.receiveShadow!==K.receiveShadow)&&(It.receiveShadow=K.receiveShadow,fe.setValue(G,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Re.envMapIntensity.value=H.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=rx()),ci){if(fe.setValue(G,"toneMappingExposure",O.toneMappingExposure),It.needsLights&&vf(Re,Qi),St&&J.fog===!0&&ht.refreshFogUniforms(Re,St),ht.refreshMaterialUniforms(Re,J,it,X,E.state.transmissionRenderTarget[T.id]),It.needsLights&&It.lightProbeGrid){let ge=It.lightProbeGrid;Re.probesSH.value=ge.texture,Re.probesMin.value.copy(ge.boundingBox.min),Re.probesMax.value.copy(ge.boundingBox.max),Re.probesResolution.value.copy(ge.resolution)}Us.upload(G,rh(It),Re,I)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Us.upload(G,rh(It),Re,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&fe.setValue(G,"center",K.center),fe.setValue(G,"modelViewMatrix",K.modelViewMatrix),fe.setValue(G,"normalMatrix",K.normalMatrix),fe.setValue(G,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ge=J.uniformsGroups;for(let ui=0,ts=ge.length;ui<ts;ui++){let lh=ge[ui];at.update(lh,gn),at.bind(lh,gn)}}return gn}function vf(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function bf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,H,et){let J=P.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),P.get(T.texture).__webglTexture=H,P.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){let et=P.get(T);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,et=0){q=T,L=H,z=et;let J=null,K=!1,St=!1;if(T){let bt=P.get(T);if(bt.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(G.FRAMEBUFFER,bt.__webglFramebuffer),nt.copy(T.viewport),mt.copy(T.scissor),pt=T.scissorTest,p.viewport(nt),p.scissor(mt),p.setScissorTest(pt),Y=-1;return}else if(bt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(bt.__hasExternalTextures)I.rebindTextures(T,P.get(T.texture).__webglTexture,P.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let jt=T.depthTexture;if(bt.__boundDepthTexture!==jt){if(jt!==null&&P.has(jt)&&(T.width!==jt.image.width||T.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(St=!0);let Bt=P.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?J=Bt[H][et]:J=Bt[H],K=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?J=P.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?J=Bt[et]:J=Bt,nt.copy(T.viewport),mt.copy(T.scissor),pt=T.scissorTest}else nt.copy(dt).multiplyScalar(it).floor(),mt.copy(zt).multiplyScalar(it).floor(),pt=gt;if(et!==0&&(J=D),p.bindFramebuffer(G.FRAMEBUFFER,J)&&p.drawBuffers(T,J),p.viewport(nt),p.scissor(mt),p.setScissorTest(pt),K){let bt=P.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,et)}else if(St){let bt=H;for(let Ut=0;Ut<T.textures.length;Ut++){let Bt=P.get(T.textures[Ut]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,et,bt)}}else if(T!==null&&et!==0){let bt=P.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bt.__webglTexture,et)}Y=-1};function ah(T){let H=P.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=v.textureFormatReadable(T.format),H.__typeReadable=v.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,et,J,K,St,Pt,bt=0){if(!(T&&T.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){p.bindFramebuffer(G.FRAMEBUFFER,Ut);try{let Bt=T.textures[bt],jt=Bt.format,ne=Bt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+bt);let Ft=ah(Bt);if(Ft.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&et>=0&&et<=T.height-K&&G.readPixels(H,et,J,K,xt.convert(jt),xt.convert(ne),St)}finally{let Bt=q!==null?P.get(q).__webglFramebuffer:null;p.bindFramebuffer(G.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,H,et,J,K,St,Pt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut)if(H>=0&&H<=T.width-J&&et>=0&&et<=T.height-K){p.bindFramebuffer(G.FRAMEBUFFER,Ut);let Bt=T.textures[bt],jt=Bt.format,ne=Bt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+bt);let Ft=ah(Bt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),G.readPixels(H,et,J,K,xt.convert(jt),xt.convert(ne),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ie=q!==null?P.get(q).__webglFramebuffer:null;p.bindFramebuffer(G.FRAMEBUFFER,Ie);let _e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Au(G,_e,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ce),G.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,et=0){let J=Math.pow(2,-et),K=Math.floor(T.image.width*J),St=Math.floor(T.image.height*J),Pt=H!==null?H.x:0,bt=H!==null?H.y:0;I.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,et,0,0,Pt,bt,K,St),p.unbindTexture()},this.copyTextureToTexture=function(T,H,et=null,J=null,K=0,St=0){let Pt,bt,Ut,Bt,jt,ne,Ft,ce,Ie,_e=T.isCompressedTexture?T.mipmaps[St]:T.image;if(et!==null)Pt=et.max.x-et.min.x,bt=et.max.y-et.min.y,Ut=et.isBox3?et.max.z-et.min.z:1,Bt=et.min.x,jt=et.min.y,ne=et.isBox3?et.min.z:0;else{let Re=Math.pow(2,-K);Pt=Math.floor(_e.width*Re),bt=Math.floor(_e.height*Re),T.isDataArrayTexture?Ut=_e.depth:T.isData3DTexture?Ut=Math.floor(_e.depth*Re):Ut=1,Bt=0,jt=0,ne=0}J!==null?(Ft=J.x,ce=J.y,Ie=J.z):(Ft=0,ce=0,Ie=0);let pe=xt.convert(H.format),$e=xt.convert(H.type),It;H.isData3DTexture?(I.setTexture3D(H,0),It=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),It=G.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),It=G.TEXTURE_2D),p.activeTexture(G.TEXTURE0),p.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),p.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),p.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let Ke=p.getParameter(G.UNPACK_ROW_LENGTH),ae=p.getParameter(G.UNPACK_IMAGE_HEIGHT),gn=p.getParameter(G.UNPACK_SKIP_PIXELS),Bn=p.getParameter(G.UNPACK_SKIP_ROWS),ci=p.getParameter(G.UNPACK_SKIP_IMAGES);p.pixelStorei(G.UNPACK_ROW_LENGTH,_e.width),p.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_e.height),p.pixelStorei(G.UNPACK_SKIP_PIXELS,Bt),p.pixelStorei(G.UNPACK_SKIP_ROWS,jt),p.pixelStorei(G.UNPACK_SKIP_IMAGES,ne);let Qi=T.isDataArrayTexture||T.isData3DTexture,fe=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){let Re=P.get(T),hi=P.get(H),ge=P.get(Re.__renderTarget),ui=P.get(hi.__renderTarget);p.bindFramebuffer(G.READ_FRAMEBUFFER,ge.__webglFramebuffer),p.bindFramebuffer(G.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ts=0;ts<Ut;ts++)Qi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(T).__webglTexture,K,ne+ts),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,P.get(H).__webglTexture,St,Ie+ts)),G.blitFramebuffer(Bt,jt,Pt,bt,Ft,ce,Pt,bt,G.DEPTH_BUFFER_BIT,G.NEAREST);p.bindFramebuffer(G.READ_FRAMEBUFFER,null),p.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||P.has(T)){let Re=P.get(T),hi=P.get(H);p.bindFramebuffer(G.READ_FRAMEBUFFER,U),p.bindFramebuffer(G.DRAW_FRAMEBUFFER,F);for(let ge=0;ge<Ut;ge++)Qi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Re.__webglTexture,K,ne+ge):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Re.__webglTexture,K),fe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hi.__webglTexture,St,Ie+ge):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hi.__webglTexture,St),K!==0?G.blitFramebuffer(Bt,jt,Pt,bt,Ft,ce,Pt,bt,G.COLOR_BUFFER_BIT,G.NEAREST):fe?G.copyTexSubImage3D(It,St,Ft,ce,Ie+ge,Bt,jt,Pt,bt):G.copyTexSubImage2D(It,St,Ft,ce,Bt,jt,Pt,bt);p.bindFramebuffer(G.READ_FRAMEBUFFER,null),p.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(It,St,Ft,ce,Ie,Pt,bt,Ut,pe,$e,_e.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(It,St,Ft,ce,Ie,Pt,bt,Ut,pe,_e.data):G.texSubImage3D(It,St,Ft,ce,Ie,Pt,bt,Ut,pe,$e,_e):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,Ft,ce,Pt,bt,pe,$e,_e.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,Ft,ce,_e.width,_e.height,pe,_e.data):G.texSubImage2D(G.TEXTURE_2D,St,Ft,ce,Pt,bt,pe,$e,_e);p.pixelStorei(G.UNPACK_ROW_LENGTH,Ke),p.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),p.pixelStorei(G.UNPACK_SKIP_PIXELS,gn),p.pixelStorei(G.UNPACK_SKIP_ROWS,Bn),p.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),St===0&&H.generateMipmaps&&G.generateMipmap(It),p.unbindTexture()},this.initRenderTarget=function(T){P.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),p.unbindTexture()},this.resetState=function(){L=0,z=0,q=null,p.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var ox={L1:1.2,L2:1.2,H0:.85,HAND:.42,COL_Y:.32},Ya=(n,t,e)=>Math.min(e,Math.max(t,n));function ld(n){let t=(s,r=.62,o=.12)=>new Mi({color:s,roughness:r,metalness:o}),e=s=>new Mi({color:s,emissive:s,emissiveIntensity:0,roughness:.4,metalness:0}),i={floor:t(n.floor,.95,0),body:t(n.body),dark:t(n.dark,.7,.2),accent:t(n.accent,.5,.1),belt:t(n.belt,.95,0),tape:t(cd(n),.9,0),partA:t(n.partA,.55,.05),partB:t(n.partB,.55,.05),partC:t(n.partC,.55,.05),lampGreen:e(n.run),lampAmber:e(n.warn),lampRed:e(n.fault),beam:new yi({color:n.info}),cone:new yi({color:n.info,transparent:!0,opacity:0,depthWrite:!1,side:bn}),ring:new Mi({color:n.info,emissive:n.info,emissiveIntensity:.15,roughness:.4}),edge:new vi({color:n.dark,transparent:!0,opacity:.55}),grid:new vi({color:n.grid,transparent:!0,opacity:.28})};return i.beltTex=ax(n),i.beltTop=new Mi({map:i.beltTex,roughness:.95,metalness:0}),i}function cd(n){return new Wt(n.peYellow).lerp(new Wt(n.floor),.45)}function hd(n,t){n.floor.color.set(t.floor),n.body.color.set(t.body),n.dark.color.set(t.dark),n.accent.color.set(t.accent),n.belt.color.set(t.belt),n.tape.color.set(cd(t)),n.partA.color.set(t.partA),n.partB.color.set(t.partB),n.partC.color.set(t.partC);for(let[e,i]of[["lampGreen",t.run],["lampAmber",t.warn],["lampRed",t.fault]])n[e].color.set(i),n[e].emissive.set(i);n.beam.color.set(t.info),n.cone.color.set(t.info),n.ring.color.set(t.info),n.ring.emissive.set(t.info),n.edge.color.set(t.dark),n.grid.color.set(t.grid),ud(n.beltTex.image,t),n.beltTex.needsUpdate=!0}function ud(n,t){let e=n.getContext("2d");e.fillStyle=t.belt,e.fillRect(0,0,n.width,n.height),e.fillStyle=t.theme==="light"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.12)",e.fillRect(0,0,5,n.height),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(5,0,2,n.height)}function ax(n){let t=document.createElement("canvas");t.width=64,t.height=32,ud(t,n);let e=new rr(t);return e.wrapS=ys,e.wrapT=yn,e.repeat.set((Dt.beltX1-Dt.beltX0)/.3,1),e.colorSpace=tn,e.anisotropy=4,e}var Se=(n,t,e,i)=>new Le(new $n(n,t,e),i),Ve=(n,t,e,i,s=32)=>new Le(new Si(n,t,e,s),i);function Zi(n){return n.rotation.z=Math.PI/2,n}function Kt(n,t,e,i){return n.position.set(t,e,i),n}function Os(n){return n.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),n}function dd(n){let t=new ve,e=new Le(new Gi(40,40),n.floor);e.rotation.x=-Math.PI/2,e.receiveShadow=!0;let i=new gr(40,80,16777215,16777215);i.material=n.grid,i.position.y=.002,t.add(e,i);let s=-4.3,r=3.5,o=-4.5,a=2,l=.07,c=(h,f,d,g)=>{let _=Se(d,.006,g,n.tape);return _.position.set(h,.005,f),_};return t.add(c((s+r)/2,o,r-s,l),c((s+r)/2,a,r-s,l),c(s,(o+a)/2,l,a-o),c(r,(o+a)/2,l,a-o)),t}function fd(n){let t=new ve,e=Dt.beltX1-Dt.beltX0,i=(Dt.beltX0+Dt.beltX1)/2,s=n.belt,r=new Le(new $n(e,.05,Dt.beltW),[s,s,n.beltTop,s,s,s]);r.position.set(i,Dt.beltY-.025,0),t.add(r);for(let o of[-1,1]){t.add(Kt(Se(e+.12,.14,.06,n.body),i,Dt.beltY-.07,o*(Dt.beltW/2+.03)));for(let a of[-3.2,-1.6,0,1.6,2.2])t.add(Kt(Se(.07,Dt.beltY-.14,.07,n.dark),a,(Dt.beltY-.14)/2,o*(Dt.beltW/2+.03)))}for(let o of[-3.2,-1.6,0,1.6,2.2])t.add(Kt(Se(.05,.05,Dt.beltW+.12,n.dark),o,.25,0));for(let o of[Dt.beltX0,Dt.beltX1])t.add(Kt(Ve(.07,.07,Dt.beltW+.04,n.dark,20),o,Dt.beltY-.07,0).rotateX(Math.PI/2));return t.add(Kt(Zi(Ve(.11,.11,.34,n.dark,24)),Dt.beltX1+.05,.3,.62)),Os(t)}function pd(n){let t=new ve,e=Dt.binSize,i=Dt.binH,s=.03;for(let r of["A","B","C"]){let o=new ve;o.add(Kt(Se(e,.04,e,n.dark),0,.02,0));for(let l of[-1,1])o.add(Kt(Se(s,i,e,n.dark),l*(e/2-s/2),i/2,0));for(let l of[-1,1])o.add(Kt(Se(e-2*s,i,s,n.dark),0,i/2,l*(e/2-s/2)));let a=n["part"+r];for(let l of[-1,1])o.add(Kt(Se(.05,.03,e+.02,a),l*(e/2-.02),i+.015,0));for(let l of[-1,1])o.add(Kt(Se(e-.06,.03,.05,a),0,i+.015,l*(e/2-.02)));o.position.set(Dt.bins[r].x,0,Dt.bins[r].z),o.rotation.y=Math.atan2(Dt.bins[r].x-Dt.base.x,Dt.bins[r].z-Dt.base.z),o.userData.bin=r,t.add(o)}return Os(t)}function md(n){let t=new ve,e=Dt.camX;for(let o of[-1,1])t.add(Kt(Se(.08,1.75,.08,n.dark),e,.875,o*.72));t.add(Kt(Se(.1,.1,1.6,n.body),e,1.75,0)),t.add(Kt(Se(.05,.3,.05,n.dark),e,1.55,0)),t.add(Kt(Se(.28,.2,.28,n.body),e,1.42,0)),t.add(Kt(Ve(.075,.075,.08,n.dark,24),e,1.28,0));let i=new Le(new cr(.11,.018,12,36),n.ring);i.rotation.x=Math.PI/2,i.position.set(e,1.3,0),t.add(i);let s=1.28-Dt.beltY,r=new Le(new ar(.34,s,36,1,!0),n.cone);return r.position.set(e,Dt.beltY+s/2,0),t.add(r),Os(t),r.castShadow=!1,r.receiveShadow=!1,{group:t,ring:i,cone:r}}function gd(n){let t=new ve,e=Dt.pickX;for(let s of[-1,1])t.add(Kt(Se(.05,.2,.05,n.dark),e,Dt.beltY+.02,s*.58)),t.add(Kt(Se(.08,.08,.08,n.body),e,Dt.beltY+.13,s*.58));let i=Kt(Se(.012,.012,1.1,n.beam),e,Dt.beltY+.11,0);return t.add(i),{group:Os(t),beam:i}}function _d(n){let t=new ve;t.position.set(2.85,0,.9),t.add(Kt(Ve(.12,.14,.05,n.dark,24),0,.025,0)),t.add(Kt(Ve(.025,.025,.5,n.dark,12),0,.3,0));let e={};return[["green","lampGreen",.6],["amber","lampAmber",.76],["red","lampRed",.92]].forEach(([i,s,r])=>{let o=Ve(.085,.085,.14,n[s],28);o.position.y=r,t.add(o),e[i]=o}),t.add(Kt(Ve(.09,.07,.04,n.dark,24),0,1.01,0)),{group:Os(t),lamps:e}}function xd(n){let{L1:t,L2:e,H0:i,HAND:s,COL_Y:r}=ox,o=new ve;o.position.set(Dt.base.x,0,Dt.base.z),o.add(Kt(Ve(.46,.5,.1,n.dark,40),0,.05,0)),o.add(Kt(Ve(.3,.38,.18,n.body,40),0,.19,0)),o.add(Kt(Ve(.34,.34,.03,n.accent,40),0,.105,0));let a=new ve;a.position.y=r,o.add(a);let l=i-r;a.add(Kt(Ve(.27,.27,.1,n.dark,36),0,.05,0)),a.add(Kt(Se(.34,l-.1,.3,n.body),0,.1+(l-.1)/2-.05,0)),a.add(Kt(Se(.5,.3,.34,n.body),0,l,0));for(let m of[-1,1])a.add(Kt(Zi(Ve(.17,.17,.05,n.dark,28)),m*.275,l,0)),a.add(Kt(Zi(Ve(.12,.12,.03,n.accent,28)),m*.31,l,0));let c=new ve;c.position.set(0,l,0),a.add(c),c.add(Kt(Se(.2,.26,t,n.body),0,0,t/2)),c.add(Kt(Se(.24,.1,t*.5,n.dark),0,.16,t*.3)),c.add(Kt(Zi(Ve(.15,.15,.3,n.dark,28)),0,0,t));for(let m of[-1,1])c.add(Kt(Zi(Ve(.11,.11,.03,n.accent,28)),m*.165,0,t));let h=new ve;h.position.set(0,0,t),c.add(h),h.add(Kt(Se(.16,.2,e,n.body),0,0,e/2)),h.add(Kt(Zi(Ve(.1,.1,.26,n.dark,24)),0,0,e));for(let m of[-1,1])h.add(Kt(Zi(Ve(.07,.07,.03,n.accent,24)),m*.14,0,e));let f=new ve;f.position.set(0,0,e),h.add(f);let d=new ve;f.add(d),d.add(Kt(Ve(.075,.075,.06,n.dark,24),0,-.03,0)),d.add(Kt(Se(.12,.2,.12,n.body),0,-.16,0)),d.add(Kt(Se(.36,.05,.13,n.dark),0,-.285,0));let g=[-1,1].map(m=>{let u=Kt(Se(.04,.22,.1,n.accent),m*.15,-.42,0);return u.position.y=-s+0,d.add(u),u});Os(o);let _={yaw:0};function w(m,u,b){a.rotation.y=m.theta;let N=m.r,M=m.y+s-i,C=Ya(Math.hypot(N,M),.4,t+e-.01),E=Math.atan2(M,N),R=Math.acos(Ya((t*t+C*C-e*e)/(2*t*C),-1,1)),y=Math.acos(Ya((t*t+e*e-C*C)/(2*t*e),-1,1)),S=E+R,O=S-(Math.PI-y);c.rotation.x=-S,h.rotation.x=S-O,f.rotation.x=O,_.yaw=b,d.rotation.y=b;let k=.11+Ya(u,0,1)*.08;g[0].position.x=-(k+.02),g[1].position.x=k+.02}return{group:o,pose:w,state:_}}function yd(n,t){let e=Qe[n].shape,i=Dt.partH,s;e==="cube"?s=new $n(i,i,i):e==="cylinder"?s=new Si(i/2,i/2,i,28):s=new Si(i*.57,i*.57,i,6);let r=new Le(s,t["part"+n]);r.castShadow=!0;let o=new As(new lr(s,35),t.edge),a=new ve;return a.add(r,o),a.userData.kind=n,a}var Rr=new j(.15,.62,-1.25),lx=n=>{let t=Math.PI/2;return((n+t/2)%t+t)%t-t/2};function vd({canvas:n,plant:t,plc:e,shadows:i=!0,pixelCap:s=2}){let r;try{r=new $a({canvas:n,antialias:!0,powerPreference:"high-performance"})}catch{return null}let o=Fi(),a=ld(o),l=new er;l.background=new Wt(o.bg),l.fog=new tr(o.bg,15,32);let c=new Ye(30,1,.5,80),h=new dr(16777215,9083042,1.15),f=new pr(16777215,2.1);f.position.set(4.5,8,5.5),f.target.position.copy(Rr),l.add(h,f,f.target),r.shadowMap.enabled=!!i,r.shadowMap.type=Wi,f.castShadow=!!i,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:24}),f.shadow.bias=-4e-4,l.add(dd(a)),l.add(fd(a));let d=pd(a);l.add(d);let g=md(a);l.add(g.group);let _=gd(a);l.add(_.group);let w=_d(a);l.add(w.group);let m=xd(a);l.add(m.group);let u=new ve;l.add(u);let b=new Map,N={},M={};function C(){let yt=new Wt(o.dark);N={green:new Wt(o.run),amber:new Wt(o.warn),red:new Wt(o.fault)},M={};for(let ut in N)M[ut]=N[ut].clone().lerp(yt,.72)}C();let E={w:1,h:1,az:.5,el:.5,dist:10,px:0,py:0,sx:0,sy:0},R=new mr,y=new te,S=new j,O=0,k=!1;function W(yt,ut){if(!yt||!ut)return;E.w=yt,E.h=ut,r.setPixelRatio(Math.min(window.devicePixelRatio||1,s)),r.setSize(yt,ut,!1),c.aspect=yt/ut;let Mt=yt/ut;c.fov=Mt<1?46:Mt<1.5?36:30,E.dist=8.6*Math.max(1,1.6/Mt)**.85,c.updateProjectionMatrix()}function D(){let yt=.46+E.sx*.12,ut=.5-E.sy*.06;c.position.set(Rr.x+E.dist*Math.sin(yt)*Math.cos(ut),Rr.y+E.dist*Math.sin(ut),Rr.z+E.dist*Math.cos(yt)*Math.cos(ut)),c.lookAt(Rr)}function U(){let yt=new Set;for(let ut of t.parts){yt.add(ut.id);let Mt=b.get(ut.id);Mt||(Mt=yd(ut.kind,a),Mt.userData.id=ut.id,b.set(ut.id,Mt),u.add(Mt));let X=(t.time-ut.born)/300;Mt.scale.setScalar(ut.state==="belt"&&X<1?Math.max(.01,X):1),Mt.position.set(ut.x,ut.y,ut.z),Mt.rotation.y=ut.state==="held"?t.robot.cyl.theta+O:ut.yaw,ut.state==="held"&&(ut.yaw=Mt.rotation.y)}for(let[ut,Mt]of b)yt.has(ut)||(u.remove(Mt),Mt.traverse(X=>{X.geometry&&X.geometry.dispose()}),b.delete(ut))}function F(yt){let ut=t.robot,Mt=1-Math.exp(-yt/70),X=0;ut.part&&["approach","descend","grip"].includes(ut.phase)?X=lx(ut.part.yaw-ut.cyl.theta):ut.holding!=null&&ut.phase!=="return"&&(X=O),O+=(X-O)*Mt,m.pose(ut.cyl,ut.grip,O),U(),a.beltTex.offset.x=-t.belt.offset/.3;for(let[ct,Ct]of[["green","LAMP_GREEN"],["amber","LAMP_AMBER"],["red","LAMP_RED"]]){let dt=e.get(Ct),zt=w.lamps[ct].material;zt.emissiveIntensity=dt?1.7:0,zt.color.copy(dt?N[ct]:M[ct])}let it=t.flash?(t.time-t.flash.at)/400:1;a.cone.opacity=it<1?.32*(1-it):0,a.ring.emissiveIntensity=.15+(it<1?2.2*(1-it):0),a.beam.color.set(t.atPick?o.warn:o.info),E.sx+=(E.px-E.sx)*.06,E.sy+=(E.py-E.sy)*.06,D()}function L(){r.render(l,c)}function z(){o=Fi(),hd(a,o),l.background.set(o.bg),l.fog.color.set(o.bg),h.color.set(o.theme==="light"?16777215:14674158),h.groundColor.set(o.floor),h.intensity=o.theme==="light"?1.5:1.1,f.intensity=o.theme==="light"?1.7:2.1,C()}z();function q(yt,ut){k||(E.px=ol(yt,-1,1),E.py=ol(ut,-1,1))}function Y(yt){k=!!yt,k&&(E.px=0,E.py=0)}function Q(yt,ut){let Mt=n.getBoundingClientRect();y.set((yt-Mt.left)/Mt.width*2-1,-((ut-Mt.top)/Mt.height)*2+1),R.setFromCamera(y,c)}function nt(yt,ut){Q(yt,ut);let Mt=R.intersectObjects([u,d],!0)[0];if(!Mt)return null;let X=Mt.object;for(;X;){if(X.userData.id!=null)return{type:"part",id:X.userData.id};if(X.userData.bin)return{type:"bin",bin:X.userData.bin};X=X.parent}return null}function mt(yt,ut,Mt){return S.set(yt,ut,Mt).project(c),{x:(S.x*.5+.5)*E.w,y:(-S.y*.5+.5)*E.h,behind:S.z>1}}function pt(){l.traverse(yt=>{yt.geometry&&yt.geometry.dispose()}),Object.values(a).forEach(yt=>{yt&&yt.dispose&&yt.dispose()}),a.beltTex.dispose(),r.dispose()}return{renderer:r,camera:c,resize:W,update:F,render:L,setTheme:z,setPointer:q,setCalm:Y,pick:nt,project:mt,dispose:pt,aim:D}}function cx(){return Lt("svg",{viewBox:"0 0 64 64",width:52,height:52,"aria-hidden":"true",focusable:"false"},Lt("circle",{cx:32,cy:32,r:30,class:"hmi-es-base"}),Lt("circle",{cx:32,cy:32,r:22,class:"hmi-es-head"}),Lt("path",{d:"M18 26a16 16 0 0 1 14-9",class:"hmi-es-shine",fill:"none"}))}function hx(n){let t=Qe[n].shape,e=t==="cube"?Lt("rect",{x:2,y:2,width:12,height:12,rx:1}):t==="cylinder"?Lt("circle",{cx:8,cy:8,r:6.5}):Lt("path",{d:"M8 1.5 14 5v6L8 14.5 2 11V5z"});return Lt("svg",{viewBox:"0 0 16 16",width:14,height:14,class:`hmi-glyph hmi-glyph--${n}`,"aria-hidden":"true",focusable:"false"},e)}function bd(n,{plc:t,plant:e,controls:i,onLadder:s}){let r=(R,y,S,O={})=>A("button",{type:"button",class:`hmi-pb ${S}`,"data-act":R,...O},A("span",{class:"hmi-cap","aria-hidden":"true"}),A("span",{class:"hmi-legend"},y)),o=r("start","Start","hmi-pb--start"),a=r("stop","Stop","hmi-pb--stop"),l=r("reset","Reset","hmi-pb--reset"),c=A("button",{type:"button",class:"hmi-pb hmi-pb--estop","data-act":"estop","aria-pressed":"false"},cx(),A("span",{class:"hmi-legend"},"E-stop")),h=A("button",{type:"button",class:"hmi-mode",role:"switch","aria-checked":"true","aria-label":"Mode: auto","data-act":"mode"},A("span",{class:"hmi-mode-opt"},"Manual"),A("span",{class:"hmi-mode-knob","aria-hidden":"true"}),A("span",{class:"hmi-mode-opt"},"Auto")),f=A("p",{class:"hmi-status","aria-live":"polite"},"Stopped. Press Start."),d=Array.from({length:t.counters.C0.pv},()=>A("i",{class:"hmi-seg"})),g=A("span",{class:"hmi-count-num mono"},"0 of 6"),_=A("i",{class:"hmi-timer-fill"}),w={},m=A("ul",{class:"hmi-bins","aria-label":"Parts in each bin"});for(let R of["A","B","C"]){let y=A("b",{class:"mono"},"0"),S=A("li",{class:"hmi-bin"},hx(R),A("span",null,Qe[R].area),y);w[R]=y,m.append(S)}let u=s?A("button",{type:"button",class:"link hmi-ladder",onclick:s},"See the ladder logic running this cell"):null,b=A("div",{class:"hmi",role:"group","aria-label":"Operator panel, cell 1"},A("div",{class:"hmi-ctl"},o,a,c,l,h),A("div",{class:"hmi-read"},f,A("div",{class:"hmi-meters"},A("div",{class:"hmi-count",role:"img","aria-label":"Parts sorted this batch"},A("span",{class:"hmi-segs"},d),g),A("div",{class:"hmi-timer","aria-hidden":"true",title:"Start-up delay T0"},_)),m,u));n.append(b),b.addEventListener("click",R=>{let y=R.target.closest("[data-act]");if(!y)return;let S=y.dataset.act;S==="start"?i.start():S==="stop"?i.stop():S==="reset"?i.reset():S==="estop"?i.toggleEstop():S==="mode"&&i.setAuto(!t.inputs.AUTO)});let N="",M="";function C(){let R=t.timers.T0;if(!t.cpuRun)return"The PLC is in STOP. Nothing is being solved.";if(!t.inputs.ESTOP_OK)return"E-stop pressed. Release it, then press Start.";if(t.get("BATCH_DONE"))return`Batch complete. ${t.counters.C0.cv} parts sorted. Press Reset to run another.`;if(!t.get("RUN"))return e.demo?"Stopped.":"Stopped. Press Start.";if(!t.get("AUTO"))return"Manual mode. This program only moves things in Auto.";if(!R.q)return`Start-up warning. Moving in ${((R.pt-R.et)/1e3).toFixed(1)} s.`;let y=e.robot;return y.phase!=="idle"&&y.bin?`Robot sorting a ${Qe[y.bin].name.toLowerCase()} into the ${Qe[y.bin].area} bin.`:e.atPick?`${Qe[e.atPick.kind].name} at the pick position. Requesting the robot.`:"Running. The conveyor is feeding parts under the camera."}function E(){let R=!t.inputs.ESTOP_OK,y=!!t.inputs.AUTO,S=t.counters.C0.cv,O=[R,y,S,t.get("RUN"),t.get("BATCH_DONE"),e.counts.A,e.counts.B,e.counts.C,t.cpuRun].join();if(O!==M){M=O,c.setAttribute("aria-pressed",String(R)),c.classList.toggle("is-latched",R),h.setAttribute("aria-checked",String(y)),h.setAttribute("aria-label",`Mode: ${y?"auto":"manual"}`),h.classList.toggle("is-manual",!y),o.classList.toggle("is-lit",t.get("RUN")),d.forEach((D,U)=>D.classList.toggle("is-on",U<S)),g.textContent=`${S} of ${t.counters.C0.pv}`;for(let D of["A","B","C"])w[D].textContent=String(e.counts[D]);l.classList.toggle("is-attn",t.get("BATCH_DONE"))}let k=t.timers.T0;_.style.transform=`scaleX(${k.pt?k.et/k.pt:0})`,_.parentNode.style.visibility=k.en&&!k.q?"visible":"hidden";let W=C();W!==N&&(N=W,f.textContent=W)}return E(),{update:E,destroy(){b.remove()}}}function Sd(n,{bus:t,calm:e=di(),autoplay:i=!0,onLadder:s}={}){let r=new kr(is),o=new Gr(r);o.demo=!1;let a=window.matchMedia("(max-width: 760px)").matches,l=A("canvas",{class:"cell-canvas",role:"img","aria-label":"A 3D sorting cell. A conveyor carries cubes, cylinders and hexagons past a camera. A six-axis robot sorts each into its own bin."}),c=A("div",{class:"cell-labels"}),h=A("p",{class:"cell-hint"},"Click a part or a bin"),f=A("div",{class:"cell-stage"},l,c,h),d=A("div"),g=A("div",{class:"cell"},f,d);n.append(g);let _=vd({canvas:l,plant:o,plc:r,shadows:!a,pixelCap:a?1.5:2});_||(l.remove(),f.append(A("p",{class:"cell-fallback"},"The 3D view isn't available in this browser. The panel below still runs the same cell."))),l.addEventListener("webglcontextlost",gt=>{gt.preventDefault(),_=null});let w={};for(let gt of["A","B","C"]){let wt=A("b",null,"0"),Nt=A("button",{type:"button",class:"cell-tag","data-k":gt,title:`Show the ${Qe[gt].area.toLowerCase()} builds`,"aria-label":`${Qe[gt].area} bin. Show the builds.`},A("span",null,Qe[gt].short),wt);Nt.addEventListener("click",()=>D(gt)),c.append(Nt),w[gt]={el:Nt,n:wt,count:-1}}let m=A("div",{class:"cell-vis","aria-hidden":"true"},"");c.append(m);let u="",b=30,N=0,M=!0;function C(){if(!_)return;let gt=["A","B","C"];if(M){for(let Et of gt)w[Et].w=w[Et].el.offsetWidth||90;N=f.clientWidth,M=!1}let wt=gt.map(Et=>{let Tt=w[Et],Qt=_.project(Dt.bins[Et].x,.78,Dt.bins[Et].z);return Tt.count!==o.counts[Et]&&(Tt.count=o.counts[Et],Tt.n.textContent=String(Tt.count),M=!0),{t:Tt,x:Qt.x,y:Qt.y}});wt.sort((Et,Tt)=>Et.x-Tt.x);for(let Et=0;Et<3;Et++)for(let Tt=1;Tt<wt.length;Tt++){let Qt=wt[Tt-1],de=wt[Tt];if(Math.abs(Qt.y-de.y)>=b)continue;let Ce=(Qt.t.w+de.t.w)/2+6,oe=de.x-Qt.x;if(oe<Ce){let ee=(Ce-oe)/2;Qt.x-=ee,de.x+=ee}}for(let Et of wt){let Tt=Et.t.w/2+4,Qt=N?Math.min(N-Tt,Math.max(Tt,Et.x)):Et.x;Et.t.el.style.transform=`translate(${Qt.toFixed(1)}px, ${Et.y.toFixed(1)}px) translate(-50%, -100%)`}let Nt=null;for(let Et of o.parts)Et.state==="belt"&&Et.seen&&Et.x<Dt.beltX1-.3&&(!Nt||Et.x>Nt.x)&&(Nt=Et);if(Nt){let Et=_.project(Nt.x,Dt.beltY+.55,0);m.style.transform=`translate(${Et.x.toFixed(1)}px, ${Et.y.toFixed(1)}px) translate(-50%, -100%)`;let Tt=`${Qe[Nt.kind].name.toLowerCase()} ${Nt.conf.toFixed(2)}`;Tt!==u&&(u=Tt,m.textContent=Tt),m.classList.add("is-on")}else m.classList.remove("is-on")}let E=!1,R=()=>{E=!0,o.demo=!1,h.classList.add("is-gone")},y=new Set,S=0,O=gt=>{y.add("timed"),clearTimeout(S),S=setTimeout(()=>{y.delete("timed")},gt),ut()},k={start(){R(),O(15e3),r.pulse("START",120),t&&t.emit("unlock","cell-start")},stop(){R(),O(8e3),r.pulse("STOP_OK",250,!1)},estop(){R(),O(8e3),r.setInput("ESTOP_OK",!1)},releaseEstop(){R(),r.setInput("ESTOP_OK",!0)},toggleEstop(){r.inputs.ESTOP_OK?k.estop():k.releaseEstop()},reset(){R(),O(8e3),r.pulse("RESET",120)},setAuto(gt){R(),r.setInput("AUTO",!!gt)},powerCycle(){R(),o.powerCycle()}},W=bd(d,{plc:r,plant:o,controls:k,onLadder:s});function D(gt){R(),t&&(t.emit("filter",Qe[gt].filter),t.emit("goto","builds"))}let U=0,F=new Set,L=0;o.on(gt=>{t&&(gt==="sorted"&&E&&++U===1&&t.emit("unlock","cell-sorted"),gt==="batch"&&(E&&(t.emit("unlock","cell-batch"),t.emit("toast",{text:"Batch of six sorted. Reset starts another.",kind:"ok"})),o.demo&&L<2&&(L++,setTimeout(()=>{o.demo&&r.pulse("RESET",120)},4200))),gt==="estop"&&(t.emit("unlock","cell-estop"),t.emit("toast",{text:"E-stop pressed. Belt and robot froze at once. Release it, then press Start.",kind:"warn"})))});function z(gt){let wt=Qe[gt];t&&(t.emit("toast",{text:`${wt.name}: ${wt.area}. ${wt.blurb}.`}),t.emit("unlock","cell-grab"),F.add(gt),F.size===3&&t.emit("unlock","cell-grab-all"))}let q=!1;f.addEventListener("pointermove",gt=>{if(gt.pointerType==="mouse"&&_){let Et=f.getBoundingClientRect();_.setPointer((gt.clientX-Et.left)/Et.width*2-1,(gt.clientY-Et.top)/Et.height*2-1)}if(q||!_||gt.pointerType!=="mouse")return;q=!0;let{clientX:wt,clientY:Nt}=gt;requestAnimationFrame(()=>{q=!1,_&&(l.style.cursor=_.pick(wt,Nt)?"pointer":"")})}),f.addEventListener("pointerleave",()=>{_&&_.setPointer(0,0)}),l.addEventListener("click",gt=>{if(!_)return;let wt=_.pick(gt.clientX,gt.clientY);if(wt)if(R(),wt.type==="bin")D(wt.bin);else{let Nt=o.parts.find(Et=>Et.id===wt.id);Nt&&z(Nt.kind)}});let Y=0,Q=0,nt=!1,mt=0,pt=()=>(nt||y.size>0)&&!document.hidden;function yt(gt){if(Y=0,!pt())return;let wt=Math.min(gt-Q,100);Q=gt,o.tick(wt),nt&&_&&(_.update(wt),_.render(),C()),mt+=wt,mt>100&&(mt=0,W.update()),Y=requestAnimationFrame(yt)}function ut(){!Y&&pt()&&(Q=performance.now(),Y=requestAnimationFrame(yt))}let Mt=()=>ut();document.addEventListener("visibilitychange",Mt);let X=!1;function it(){X||e||!i||(X=!0,setTimeout(()=>{!E&&nt&&!document.hidden&&(o.demo=!0,r.pulse("START",120))},1200))}let ct=Jn(f,gt=>{nt=gt,gt&&(it(),Ct()),ut()},{rootMargin:"0px",threshold:.2});function Ct(){_&&(_.update(0),_.render(),C()),W.update()}let dt=new ResizeObserver(()=>{_&&(_.resize(f.clientWidth,f.clientHeight),Ct())});dt.observe(f),new ResizeObserver(()=>{M=!0}).observe(f),_&&(_.setCalm(e),_.resize(f.clientWidth,f.clientHeight),Ct());let zt=t?t.on("theme",()=>{_&&(_.setTheme(),Ct())}):()=>{};return{plc:r,plant:o,controls:k,root:g,stage:f,hold(gt){y.add(gt),ut()},release(gt){y.delete(gt)},wake:ut,destroy(){cancelAnimationFrame(Y),document.removeEventListener("visibilitychange",Mt),ct(),zt(),dt.disconnect(),clearTimeout(S),W.destroy(),_&&_.dispose(),g.remove()}}}var wd=Object.fromEntries(kn.map(n=>[n.name,n.addr])),ux=new Set(kn.filter(n=>n.kind==="input").map(n=>n.name)),Fe={contact:76,coil:76,ton:108,ctu:112,pad:14,rail:12},Za=26,Oc=28,dx=8,Fc=new WeakMap,Md=n=>ux.has(n);function pn(n){if(Fc.has(n))return Fc.get(n);let t;switch(n.t){case"no":case"nc":t={w:Fe.contact,up:Za,down:Oc};break;case"ote":case"set":case"rst":t={w:Fe.coil,up:Za,down:Oc};break;case"ton":t={w:Fe.ton,up:28,down:44};break;case"ctu":t={w:Fe.ctu,up:28,down:62};break;case"series":{let e=n.items.map(pn);t={w:e.reduce((i,s)=>i+s.w,0),up:Math.max(...e.map(i=>i.up)),down:Math.max(...e.map(i=>i.down))};break}default:{let e=n.items.map(pn),i=[],s=0;e.forEach((r,o)=>{o&&(s+=e[o-1].down+r.up+dx),i.push(s)}),t={w:Math.max(...e.map(r=>r.w))+2*Fe.pad,up:e[0].up,down:s+e[e.length-1].down,offs:i}}}return Fc.set(n,t),t}function Ed(n){let t=n.logic.items;return{inputs:t.slice(0,-1),output:t[t.length-1]}}function Td(n){let t=0;for(let e of n){let{inputs:i,output:s}=Ed(e);t=Math.max(t,i.reduce((r,o)=>r+pn(o).w,0)+pn(s).w)}return Fe.rail*2+t+30}var Li=(n,t)=>{t=!!t,n._on!==t&&(n._on=t,n.classList.toggle("is-on",t))},Ad=(n,t)=>{n._t!==t&&(n._t=t,n.textContent=t)},Bc=(n,t,e)=>n.appendChild(Lt("path",{d:t,class:e})),Di=(n,t,e,i,s,r="middle")=>n.appendChild(Lt("text",{x:e,y:i,class:s,"text-anchor":r},t));function Mn(n,t,e,i,s){let r=Bc(n,t,"lad-w");e.upd.push(o=>Li(r,s==="in"?o.elementsIn[i]:o.elements[i]))}function fx(n,t,e,i,s){let r=Lt("g",{class:"lad-el lad-contact","data-tag":n.tag}),o=wd[n.tag]||n.tag,a=n.tag.indexOf(".")<0;Mn(r,`M${t} ${e}H${t+25}`,s,n.uid,"in"),Mn(r,`M${t+51} ${e}H${t+76}`,s,n.uid,"out");let l=Bc(r,`M${t+25} ${e-13}V${e+13}M${t+51} ${e-13}V${e+13}${n.t==="nc"?`M${t+29} ${e+12}L${t+47} ${e-12}`:""}`,"lad-sym"),c=r.appendChild(Lt("rect",{x:t+2,y:e-Za+2,width:Fe.contact-4,height:Za+Oc-4,rx:2,class:"lad-hit"})),h=Di(r,n.tag,t+38,e-16,"lad-tag");if(Di(r,o,t+38,e+25,"lad-addr"),Md(n.tag)){r.setAttribute("tabindex","0"),r.setAttribute("role","button"),r.classList.add("is-input");let f=()=>s.press(n.tag);r.addEventListener("click",f),r.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),f())})}else r.setAttribute("aria-hidden","true");s.upd.push((f,d)=>{let g=a?d.tags[n.tag]:n.tag==="T0.Q"?d.timers.T0.q:d.counters.C0.q,_=n.t==="no"?g:!g;Li(l,_);let w=!!d.forced[n.tag];if(Li(c,w),Li(h,w),!Md(n.tag))return;let m=`${n.tag}, ${n.t==="no"?"normally open":"normally closed"} contact, ${g?"1":"0"}${w?", forced":""}`;r._l!==m&&(r._l=m,r.setAttribute("aria-label",`${m}. Press to force it to ${g?"0":"1"}.`))}),i.append(r)}function px(n,t,e,i,s){let r=Lt("g",{class:"lad-el lad-coilg","aria-hidden":"true"});Mn(r,`M${t} ${e}H${t+25}`,s,n.uid,"in"),Mn(r,`M${t+51} ${e}H${t+76}`,s,n.uid,"out");let o=r.appendChild(Lt("circle",{cx:t+38,cy:e,r:13,class:"lad-coil"}));n.t!=="ote"&&Di(r,n.t==="set"?"S":"R",t+38,e+4,"lad-letter"),Di(r,n.tag,t+38,e-21,"lad-tag"),Di(r,wd[n.tag]||"",t+38,e+30,"lad-addr"),s.upd.push(a=>Li(o,a.elements[n.uid])),i.append(r)}function Cd(n,t,e,i,s,r){let o=pn(n).w,a=Lt("g",{class:"lad-el lad-block","aria-hidden":"true"});Mn(a,`M${t} ${e}H${t+14}`,s,n.uid,"in"),Mn(a,`M${t+o-14} ${e}H${t+o}`,s,n.uid,"out");let l=a.appendChild(Lt("rect",{x:t+14,y:e-22,width:o-28,height:r.h,rx:2,class:"lad-box"})),c=r.lines.map((h,f)=>Di(a,h,t+22,e-7+f*17,f===0?"lad-btitle":"lad-brow","start"));return i.append(a),{grp:a,rect:l,texts:c}}function mx(n,t,e,i,s){let r=Cd(n,t,e,i,s,{h:58,lines:[`TON ${n.id}`,`PT ${n.pt} ms`,"ET 0 ms"],aria:`Timer ${n.id}, on-delay, preset ${n.pt} milliseconds`});Di(r.grp,"timer",t+54,e-27,"lad-addr"),s.upd.push((o,a)=>{let l=a.timers[n.id];Li(r.rect,l.q),Ad(r.texts[2],`ET ${l.et} ms`)})}function gx(n,t,e,i,s){let r=Cd(n,t,e,i,s,{h:76,lines:[`CTU ${n.id}`,`PV ${n.pv}`,"CV 0",`R ${n.reset}`],aria:`Counter ${n.id}, counts up to ${n.pv}, reset by ${n.reset}`});Di(r.grp,"counter",t+56,e-27,"lad-addr"),s.upd.push((o,a)=>{let l=a.counters[n.id];Li(r.rect,l.q),Ad(r.texts[2],`CV ${l.cv}`),Li(r.texts[3],a.tags[n.reset])})}function _x(n,t,e,i,s){let r=t;for(let o of n.items)ja(o,r,e,i,s),r+=pn(o).w}function xx(n,t,e,i,s){let r=pn(n),o=r.w-2*Fe.pad,a=r.offs.map(c=>e+c),l=a[a.length-1];Mn(i,`M${t} ${e}H${t+Fe.pad}`,s,n.uid,"in"),Mn(i,`M${t+Fe.pad} ${e}V${l}`,s,n.uid,"in"),Mn(i,`M${t+Fe.pad+o} ${e}V${l}`,s,n.uid,"out"),Mn(i,`M${t+Fe.pad+o} ${e}H${t+r.w}`,s,n.uid,"out"),n.items.forEach((c,h)=>{ja(c,t+Fe.pad,a[h],i,s);let f=pn(c).w;f<o&&Mn(i,`M${t+Fe.pad+f} ${a[h]}H${t+Fe.pad+o}`,s,c.uid,"out")})}function ja(n,t,e,i,s){n.t==="no"||n.t==="nc"?fx(n,t,e,i,s):n.t==="ote"||n.t==="set"||n.t==="rst"?px(n,t,e,i,s):n.t==="ton"?mx(n,t,e,i,s):n.t==="ctu"?gx(n,t,e,i,s):n.t==="series"?_x(n,t,e,i,s):xx(n,t,e,i,s)}function Rd(n,t,e){let{inputs:i,output:s}=Ed(n),r=pn(s),o=i.reduce((m,u)=>m+pn(u).w,0),a=Math.max(...[...i,s].map(m=>pn(m).up)),l=Math.max(...[...i,s].map(m=>pn(m).down)),c=a+l+14,h=a+6,f={upd:[],press:e},d=Lt("svg",{class:"lad-svg",viewBox:`0 0 ${t} ${c}`,focusable:"false",role:"presentation"});d.style.minWidth=`${t}px`,d.style.aspectRatio=`${t} / ${c}`;let g=Lt("g");d.append(g),Bc(g,`M${Fe.rail} 2V${c-2}M${t-Fe.rail} 2V${c-2}`,"lad-rail");let _=Fe.rail;for(let m of i)ja(m,_,h,g,f),_+=pn(m).w;let w=t-Fe.rail-r.w;return Mn(g,`M${_} ${h}H${w}`,f,s.uid,"in"),ja(s,w,h,g,f),{svg:d,update(m,u){let b=m.rungs[u];for(let N of f.upd)N(b,m)}}}var yx=[["input","Inputs"],["output","Outputs"],["marker","Markers"]];function Id(n,t,{onFirstInteract:e,powerCycle:i}={}){let s=!1,r=()=>{s||(s=!0,e&&e())};function o(F){r();let L=t.snapshot();t.force(F,!L.tags[F]),R=!0}let a=Td(is),l=is.map(F=>{let L=Rd(F,a,o),z=A("span",{class:"lad-state"},"idle"),q=A("article",{class:"lad-rung","aria-label":`Network ${F.n}`},A("header",{class:"lad-head"},A("span",{class:"lad-num mono"},String(F.n)),A("p",{class:"lad-comment"},F.comment),z),A("p",{class:"sr-only"},F.words),A("div",{class:"lad-scroll",role:"group","aria-label":`Network ${F.n} diagram`,tabindex:"-1"},L.svg));return q.addEventListener("pointerdown",r),{art:q,d:L,label:z,on:null,scroll:q.lastChild,hasInput:!!L.svg.querySelector('[tabindex="0"]')}}),c=A("div",{class:"lad-diagram"},l.map(F=>F.art),A("p",{class:"lad-note hint"},mh.failSafe)),h=new Map,f=A("tbody");for(let[F,L]of yx){f.append(A("tr",{class:"lad-grp"},A("th",{colspan:4,scope:"colgroup"},L)));for(let z of kn.filter(q=>q.kind===F)){let q=A("span",{class:"lamp lamp--run","aria-hidden":"true"}),Y=A("span",{class:"mono lad-val"},"0"),Q=A("span",{class:"lad-fbadge"},"forced"),nt;if(F==="input"){let pt=A("button",{type:"button",class:"lad-force mono","aria-pressed":"false",title:"Click to force this input to the opposite value"},z.name);pt.addEventListener("click",()=>o(z.name)),nt=pt}else nt=A("span",{class:"mono"},z.name);let mt=A("tr",null,A("td",null,nt),A("td",{class:"mono lad-addr-c"},z.addr),A("td",{class:"lad-valc"},q,Y,Q),A("td",{class:"lad-desc"},z.desc));f.append(mt),h.set(z.name,{lamp:q,val:Y,forced:Q,btn:F==="input"?nt:null,v:null,f:null})}}let d={et:A("span",{class:"mono"},"0 of 1500 ms"),q:A("span",{class:"lamp lamp--run","aria-hidden":"true"})},g={cv:A("span",{class:"mono"},"0 of 6"),q:A("span",{class:"lamp lamp--run","aria-hidden":"true"})};f.append(A("tr",{class:"lad-grp"},A("th",{colspan:4,scope:"colgroup"},"Timers and counters")),A("tr",null,A("td",null,A("span",{class:"mono"},"T0")),A("td",{class:"mono lad-addr-c"},"T0"),A("td",{class:"lad-valc"},d.q,d.et),A("td",{class:"lad-desc"},"Start-up warning delay, on-delay timer")),A("tr",null,A("td",null,A("span",{class:"mono"},"C0")),A("td",{class:"mono lad-addr-c"},"C0"),A("td",{class:"lad-valc"},g.q,g.cv),A("td",{class:"lad-desc"},"Parts sorted this batch, up counter")));let _=A("table",{class:"lad-table"},A("caption",{class:"sr-only"},"Watch table: live values of every tag. Input names are buttons that force the input."),A("thead",null,A("tr",null,A("th",{scope:"col"},"Tag"),A("th",{scope:"col"},"Address"),A("th",{scope:"col"},"Value"),A("th",{scope:"col"},"Meaning"))),f),w=A("span",{class:"lamp lamp--run is-on","aria-hidden":"true"}),m=A("button",{type:"button",class:"btn btn--small","aria-pressed":"true"},w,A("span",null,"CPU running"));m.addEventListener("click",()=>{r(),t.cpuRun=!t.cpuRun,R=!0});let u=A("button",{type:"button",class:"btn btn--small",disabled:!0},"Release all forces");u.addEventListener("click",()=>{r(),t.releaseForces(),R=!0});let b=i?A("button",{type:"button",class:"btn btn--small"},"Power cycle"):null;b&&b.addEventListener("click",()=>{r(),i(),R=!0});let N=A("span",{class:"mono lad-scan"},"Scan 0"),M=A("div",{class:"lad-strip"},m,u,b,A("span",{class:"mono lad-scan"},`Scan time ${t.scanMs} ms`),N),C=A("div",{class:"lad-side"},A("p",{class:"hint lad-help"},"Click an input name to force it on or off. A forced value ignores the real wiring, as it would on a PLC in service. Release forces when you are done."),A("div",{class:"lad-tablewrap"},_)),E=A("div",{class:"lad"},M,A("div",{class:"lad-body"},c,C));n.append(E);let R=!0,y=!1,S=0,O=t.onScan(()=>{R=!0});function k(){let F=t.snapshot();l.forEach((z,q)=>{z.d.update(F,q);let Y=F.rungs[q].power;z.on!==Y&&(z.on=Y,z.art.classList.toggle("is-live",Y),z.label.textContent=Y?"energized":"idle",z.art.setAttribute("aria-label",`Network ${is[q].n}, ${Y?"energized":"not energized"}`))});let L=!1;for(let[z,q]of h){let Y=F.tags[z],Q=!!F.forced[z];Q&&(L=!0),q.v!==Y&&(q.v=Y,q.lamp.classList.toggle("is-on",Y),q.val.textContent=Y?"1":"0"),q.f!==Q&&(q.f=Q,q.forced.hidden=!Q,q.btn&&q.btn.setAttribute("aria-pressed",String(Q)),q.btn&&q.btn.classList.toggle("is-forced",Q))}d.et.textContent=`${F.timers.T0.et} of ${F.timers.T0.pt} ms`,d.q.classList.toggle("is-on",F.timers.T0.q),g.cv.textContent=`${F.counters.C0.cv} of ${F.counters.C0.pv}`,g.q.classList.toggle("is-on",F.counters.C0.q),u.disabled=!L,m.setAttribute("aria-pressed",String(F.cpuRun)),m.lastChild.textContent=F.cpuRun?"CPU running":"CPU stopped",w.classList.toggle("is-on",F.cpuRun),N.textContent=`Scan ${F.scanCount.toLocaleString("en-US")}`}function W(){S=0,y&&(R&&(R=!1,k()),S=requestAnimationFrame(W))}let D=Jn(E,F=>{y=F,F&&!S&&(R=!0,S=requestAnimationFrame(W))});k();let U=new ResizeObserver(()=>{for(let F of l){if(F.hasInput)continue;let L=F.scroll.scrollWidth>F.scroll.clientWidth+1;F.scroll.tabIndex=L?0:-1}});return U.observe(E),{destroy(){cancelAnimationFrame(S),O(),D(),U.disconnect(),E.remove()}}}var Ja=64,wn=52,Pd=38,ln=12,vx={industry:"Industry work and training",club:"Clubs",study:"Degree"},bx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ld(n){let t=Tn(_n(n.start)),i=Tn(_n(n.end))-t+1;if(n.end==="present")return`since ${es(n.start)}`;let s=Math.floor(i/12),r=i%12,o=[];return s&&o.push(`${s} ${s===1?"year":"years"}`),r&&o.push(`${r} ${r===1?"month":"months"}`),o.join(" ")}function Dd(n,t,{bus:e}){let i=t.experience,s=t.milestones||[],r=new Set(t.projects.flatMap(D=>D.skills)),o=new Date,a=o.getFullYear()*12+o.getMonth(),l=Math.min(...i.map(D=>Tn(_n(D.start))))-1,c=Math.max(2026*12+11,a+2)+1,h=c-l,f=[...i].filter(D=>D.kind==="industry").sort((D,U)=>Tn(_n(U.start))-Tn(_n(D.start)))[0]||i[0],d=f.id,g=!0;function _(D,U){let F=D.skills.map(L=>r.has(L)?A("button",{type:"button",class:"tag tm-chip",title:`Show the builds that use ${L}`,onclick:()=>{e.emit("filter",{skill:L}),e.emit("goto","builds")}},L):A("span",{class:"tag"},L));return U?A("div",{class:"tm-detail-in"},A("p",{class:"tm-meta"},`Duration: ${Ld(D)}.`),A("p",{class:"tm-text"},D.text),F.length?A("p",{class:"tm-chips"},F):null):A("div",{class:"tm-detail-in"},A("h3",null,D.org),A("p",{class:"tm-meta"},`${D.role}. ${ll(D.start,D.end)}, ${Ld(D)}.`),A("p",{class:"tm-text"},D.text),F.length?A("p",{class:"tm-chips"},F):null)}let w=A("div",{class:"tm-labels",role:"radiogroup","aria-label":"Choose an entry to read its detail"}),m=i.map(D=>{let U=A("button",{type:"button",role:"radio",class:`tm-ch tm-k-${D.kind}`,"data-id":D.id,"aria-checked":"false",tabindex:"-1"},A("span",{class:"tm-org"},D.short||D.org),A("span",{class:"tm-role"},D.roleShort||D.role));return U.addEventListener("click",()=>y(D.id,!0)),U});m.forEach(D=>w.append(D)),w.addEventListener("keydown",D=>{let U={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1};if(D.key==="Home"||D.key==="End"||U[D.key]){D.preventDefault();let F=m.findIndex(z=>z.dataset.id===d),L=D.key==="Home"?0:D.key==="End"?i.length-1:(F+U[D.key]+i.length)%i.length;y(i[L].id,!0),m[L].focus()}});let u=A("div",{class:"tm-plot"}),b=A("ul",{class:"tm-legend"},Object.entries(vx).map(([D,U])=>A("li",{class:`tm-k-${D}`},A("i",null),U))),N=A("div",{class:"tm-detail plate","aria-live":"polite"}),M=A("div",{class:"tm-wide"},A("div",{class:"tm-grid"},w,u),b,N),C=i.map(D=>{let U=(Tn(_n(D.start))-l)/h,F=(Tn(_n(D.end==="present"?`${o.getFullYear()}-${o.getMonth()+1}`:D.end))+1-l)/h,L=A("div",{class:"tm-card-body",hidden:!0}),z=A("button",{type:"button",class:"tm-card","aria-expanded":"false"},A("span",{class:"tm-org"},D.org),A("span",{class:"tm-role"},`${D.role}, ${ll(D.start,D.end)}`),A("span",{class:"tm-bar","aria-hidden":"true"},A("i",{style:{left:`${(U*100).toFixed(2)}%`,width:`${Math.max(1.2,(F-U)*100).toFixed(2)}%`}})));z.addEventListener("click",()=>y(d===D.id&&!L.hidden?null:D.id,!0));let q=A("li",{class:`tm-item tm-k-${D.kind}`,"data-id":D.id},z,L);return{e:D,li:q,btn:z,body:L}}),E=A("ul",{class:"tm-narrow"},C.map(D=>D.li)),R=A("div",{class:"tm"},M,E);n.append(R);function y(D,U){U&&D&&D!==f.id&&g&&(g=!1,e.emit("unlock","timeline-select")),d=D;let F=i.find(L=>L.id===D);m.forEach(L=>{let z=L.dataset.id===D;L.setAttribute("aria-checked",String(z)),L.tabIndex=z||!D&&L===m[0]?0:-1}),u.querySelectorAll(".tm-trace").forEach(L=>L.classList.toggle("is-sel",L.dataset.id===D)),u.classList.toggle("has-sel",!!D),F&&N.replaceChildren(_(F)),C.forEach(L=>{let z=L.e.id===D;L.btn.setAttribute("aria-expanded",String(z)),L.body.hidden=!z,L.li.classList.toggle("is-open",z),z&&L.body.replaceChildren(_(L.e,!0))})}function S(D){let U=D-2*ln,F=wn+Pd+i.length*Ja+10,L=X=>ln+(X-l)/h*U,z=Lt("svg",{class:"tm-svg",width:D,height:F,viewBox:`0 0 ${D} ${F}`,"aria-hidden":"true",focusable:"false"}),q=Lt("g");z.append(q);let Y=Math.floor(l/12),Q=Math.floor((c-1)/12);for(let X=l;X<=c;X++){let it=(X%12+12)%12,ct=L(X);q.append(Lt("path",{d:`M${ct} ${wn-(it===0?14:6)}V${wn}`,class:it===0?"tm-tick tm-tick--yr":"tm-tick"})),it===0&&(q.append(Lt("path",{d:`M${ct} ${wn}V${F}`,class:"tm-gridline"})),ct+44<D&&q.append(Lt("text",{x:ct+5,y:16,class:"tm-year"},String(Math.floor(X/12)))))}q.append(Lt("path",{d:`M${ln} ${wn}H${D-ln}`,class:"tm-axis"}));let nt=wn+18;q.append(Lt("path",{d:`M${ln} ${nt}H${D-ln}`,class:"tm-rail"})),s.forEach(X=>{let it=_n(X.date),ct=L(Tn(it)+.5),Ct=ct>D-230;q.append(Lt("path",{d:`M${ct} ${nt-7}L${ct+7} ${nt}L${ct} ${nt+7}L${ct-7} ${nt}Z`,class:"tm-diamond"})),q.append(Lt("text",{x:Ct?ct-12:ct+12,y:nt+4,class:"tm-mile","text-anchor":Ct?"end":"start"},`${X.label}, ${es(X.date)}`))});let mt=L(a+o.getDate()/31);i.forEach((X,it)=>{let ct=wn+Pd+it*Ja,Ct=ct+Ja-14,dt=ct+14,zt=L(Tn(_n(X.start))),gt=X.end==="present",wt=gt?mt:L(Tn(_n(X.end))+1),Nt=Lt("g",{class:`tm-trace tm-k-${X.kind}`,"data-id":X.id});Nt.append(Lt("rect",{x:0,y:ct,width:D,height:Ja,class:"tm-hit"})),Nt.append(Lt("path",{d:`M${ln} ${ct}H${D-ln}`,class:"tm-rowline"})),Nt.append(Lt("rect",{x:zt,y:dt,width:Math.max(1,wt-zt),height:Ct-dt,class:"tm-fill"}));let Et=`M${ln} ${Ct}H${zt}V${dt}H${wt}${gt?"":`V${Ct}H${D-ln}`}`;Nt.append(Lt("path",{d:Et,class:"tm-line"})),gt&&(Nt.append(Lt("path",{d:`M${wt} ${dt}H${D-ln}`,class:"tm-line tm-line--open"})),Nt.append(Lt("circle",{cx:wt,cy:dt,r:4.5,class:"tm-live"}))),Nt.addEventListener("click",()=>y(X.id,!0)),q.append(Nt)}),q.append(Lt("path",{d:`M${mt} ${wn-14}V${F}`,class:"tm-today"})),q.append(Lt("text",{x:mt-5,y:16,class:"tm-today-t","text-anchor":"end"},"Today"));let pt=Lt("g",{class:"tm-cursor",visibility:"hidden"}),yt=Lt("path",{d:`M0 ${wn-14}V${F}`,class:"tm-cursor-l"}),ut=Lt("rect",{y:wn-36,width:78,height:18,rx:2,class:"tm-cursor-bg"}),Mt=Lt("text",{y:wn-23,class:"tm-cursor-t","text-anchor":"middle"},"");pt.append(yt,ut,Mt),q.append(pt),z.addEventListener("pointermove",X=>{let it=z.getBoundingClientRect(),ct=X.clientX-it.left,Ct=Math.floor(l+(ct-ln)/U*h);if(Ct<l||Ct>=c){pt.setAttribute("visibility","hidden");return}let dt=Math.max(ln+39,Math.min(D-ln-39,ct));yt.setAttribute("d",`M${ct} ${wn-14}V${F}`),ut.setAttribute("x",dt-39),Mt.setAttribute("x",dt),Mt.textContent=`${bx[(Ct%12+12)%12]} ${Math.floor(Ct/12)}`,pt.setAttribute("visibility","visible")}),z.addEventListener("pointerleave",()=>pt.setAttribute("visibility","hidden")),u.replaceChildren(z),u.querySelectorAll(".tm-trace").forEach(X=>X.classList.toggle("is-sel",X.dataset.id===d)),u.classList.toggle("has-sel",!!d)}let O=0;function k(){let U=R.clientWidth>=900;if(M.hidden=!U,E.hidden=U,U){let F=Math.floor(u.clientWidth);F>200&&F!==O&&(O=F,S(F))}}let W=new ResizeObserver(k);return W.observe(R),y(d,!1),k(),{destroy(){W.disconnect(),R.remove()},select:D=>y(D,!1)}}function kc(n,t){return A("section",{class:"pf-plate plate","aria-label":n},A("h3",null,n),A("dl",{class:"pf-list"},t.map(e=>A("div",{class:"pf-entry"},A("dt",null,e.title),e.org?A("dd",{class:"pf-org"},e.org):null,e.text?A("dd",{class:"pf-org"},e.text):null,A("dd",{class:"pf-meta"},e.when?A("span",{class:"mono"},e.when):null,e.result?A("span",null,e.result):null)))))}function Nd(n,t){let e=t.education.map(o=>({title:o.title,org:o.org,when:o.years,result:o.result})),i=t.awards.map(o=>({title:o.title,org:o.org,when:o.when})),s=t.community.map(o=>({title:o.title,text:o.text,when:o.when})),r=A("div",{class:"pf-grid"},kc("Education",e),kc("Awards",i),kc("Community",s));return n.append(r),{destroy(){r.remove()}}}var Sx=[["Automation and industry",["automation"]],["AI and vision",["vision","ai"]],["CAD and programming",["cad","programming"]],["IT and communication",["it","soft"]]];function Ud(n,t){let e=Sx.map(([r,o])=>{let a=t.certs.filter(l=>o.includes(l.topic));return a.length?A("tbody",null,A("tr",{class:"pf-grp"},A("th",{colspan:2,scope:"colgroup"},r)),a.map(l=>A("tr",null,A("td",null,l.title),A("td",{class:"pf-issuer"},l.issuer)))):null}),i=A("table",{class:"pf-table"},A("caption",{class:"sr-only"},"Certifications and courses, grouped by topic"),A("thead",null,A("tr",null,A("th",{scope:"col"},"Certificate or course"),A("th",{scope:"col"},"Issuer"))),e),s=A("div",{class:"pf-certs"},A("h3",null,`${t.certs.length} certificates and courses`),A("div",{class:"pf-tablewrap plate"},i));return n.append(s),{destroy(){s.remove()}}}var Mx=360,wx=220,Zt=(n,t,e,i,s)=>Lt("line",{x1:n,y1:t,x2:e,y2:i,class:s}),Yt=(n,t,e,i,s,r)=>Lt("rect",{x:n,y:t,width:e,height:i,rx:s||null,class:r}),Te=(n,t,e,i)=>Lt("circle",{cx:n,cy:t,r:e,class:i}),Ex=(n,t,e,i,s)=>Lt("ellipse",{cx:n,cy:t,rx:e,ry:i,class:s}),De=(n,t)=>Lt("path",{d:n,class:t}),Oe=(n,...t)=>Lt("g",n?{class:n}:null,...t),Gt=n=>Math.round(n*10)/10;function Ir(n,t,e,i){let s=Math.hypot(e-n,i-t)||1,r=(e-n)/s,o=(i-t)/s,a=(r-o)*3.2,l=(o+r)*3.2;return Oe("thin",Zt(n,t,e,i),Zt(n-a,t-l,n+a,t+l),Zt(e-a,i-l,e+a,i+l))}function Tx(n,t,e,i=8,s=6){let r="";for(let o=n+4;o<=t;o+=i)r+=`M${o} ${e}l${-s*.7} ${s}`;return Oe("thin",Zt(n,e,t,e),De(r))}function Ax(n,t,e,i,s){let r=(t-n)*.14,o=n+r,a=t-r,l=(a-o)/(2*s),c=`M${n} ${e}H${o}`;for(let h=0;h<2*s;h++)c+=`L${Gt(o+l*(h+.5))} ${e+(h%2?i:-i)}`;return c+`L${a} ${e}H${t}`}function Ka(n,t,e,i,s,r="k"){let o=Math.atan2(i-t,e-n),a=-Math.sin(o)*(s/2),l=Math.cos(o)*(s/2),c=s/2;return De(`M${Gt(n+a)} ${Gt(t+l)}L${Gt(e+a)} ${Gt(i+l)}A${c} ${c} 0 0 0 ${Gt(e-a)} ${Gt(i-l)}L${Gt(n-a)} ${Gt(t-l)}A${c} ${c} 0 0 0 ${Gt(n+a)} ${Gt(t+l)}Z`,r)}var zc=(n,t,e)=>Oe(null,Te(n,t,e,"k"),Te(n,t,e*.45),Te(n,t,1,"led"));function Cx(){let n=Oe("draw");n.append(Yt(14,150,332,9,1,"k"));for(let h=24;h<336;h+=20)n.append(Yt(h,152.5,11,4,2,"thin"));n.append(Yt(24,130,7,20,1,"k"),Yt(241,130,7,20,1,"k"));let t=(h,f,d)=>Te(h,f,1.9,d?"led":null),e=(h,f)=>{let d=Oe(null,Yt(h,54,f,96,2.5,"k"));for(let g=0;g<3;g++)d.append(Zt(h+6,59+g*3.2,h+f-6,59+g*3.2,"thin"));return d},i=(h,f)=>{let d=Oe(null,Yt(h+4,116,f-8,30,1.5,"k")),g=Math.floor((f-14)/6.5)+1;for(let _=0;_<g;_++)d.append(Yt(h+7+_*6.5,120,3.6,3.6,.5,"thin"),Yt(h+7+_*6.5,130,3.6,3.6,.5,"thin"));return d},s=(h,f,d)=>{let g=Oe(null);for(let _=0;_<4;_++)g.append(t(h+f/2-6,91+_*6.5,d[_*2]),t(h+f/2+6,91+_*6.5,d[_*2+1]));return g},r=(h,f)=>Oe("thin",Yt(h+5,70,f-10,11,1),Zt(h+8,75.5,h+f-14,75.5));n.append(e(34,36),r(34,36),t(52,92,!0),Yt(41,100,22,8,1.5,"thin"),i(34,36)),n.append(e(72,52),Yt(78,68,40,20,2,"thin"),Zt(82,74,108,74,"thin"),Zt(82,79,100,79,"thin"),Zt(82,83.5,104,83.5,"thin"),t(82,96,!0),t(92,96,!1),t(102,96,!1),Yt(80,103,13,8,2,"thin"),Zt(86.5,103,86.5,111,"thin"),Yt(102,103,14,7,1,"thin"),Yt(78,118,18,26,1.5,"k"),Yt(100,118,18,26,1.5,"k"),Yt(83,123,8,7,.5,"thin"),Yt(105,123,8,7,.5,"thin")),n.append(e(126,36),r(126,36),s(126,36,[1,0,0,1,1,1,0,0]),i(126,36)),n.append(e(164,36),r(164,36),s(164,36,[0,1,1,0,0,0,1,0]),i(164,36)),n.append(e(202,36),r(202,36),s(202,36,[1,0,0,0,0,0,0,0]),i(202,36));for(let h=0;h<6;h++)n.append(Yt(258+h*11,126,9,24,1,"k"),Te(262.5+h*11,134,2,"thin"),Zt(262.5+h*11,142,262.5+h*11,148,"thin"));let o=Oe(null,Zt(144,146,144,184),Yt(139,184,10,7,2,"k"),Zt(144,191,144,194),Yt(134,194,20,10,1.5,"k")),a=Oe(null,Zt(182,146,182,187),Te(182,196,9,"k"),Zt(175.6,189.6,188.4,202.4),Zt(188.4,189.6,175.6,202.4)),l=Oe(null,Zt(220,146,220,188),Yt(210,188,20,11,1,"k"),Zt(212,204,228,184,"thin"),De("M224.5 184.5l3.5-.5-1 3.5","thin"));n.append(o,a,l);let c=h=>`H${h-3.5}a3.5 3.5 0 0 1 7 0`;return n.append(Yt(262,22,84,62,4,"k"),Yt(268,28,72,38,2),Yt(274,34,30,5,1,"thin"),Yt(274,34,18,5,1,"thin"),Yt(274,45,16,9,2,"thin"),De("M300 59l6-8 6 4 6-10 8 6 6-3","thin"),...[0,1,2,3].map(h=>Yt(272+h*17,72,12,6,1,"thin")),Yt(298,84,12,6,1,"k"),De(`M82 144V170${c(144)}${c(182)}${c(220)}H304V90`,"acc")),n.append(Zt(34,207,34,218,"thin"),Zt(238,207,238,218,"thin"),Ir(34,213,238,213)),n}function Rx(){let n=Oe("draw");n.setAttribute("transform","translate(180 110) scale(1.14) translate(-180 -110)");let t=150,e=210,i=180,s=22,r=198,o=l=>De(`M${t} ${l}H${i-12}L${i-5} ${l-6}L${i+5} ${l+6}L${i+12} ${l}H${e}`);n.append(Zt(t,s,t,r),Zt(e,s,e,r),o(s),o(r));for(let l=38;l<=190;l+=16)n.append(De(`M${t} ${l}Q${i} ${l+7} ${e} ${l}`,"thin"));n.append(Zt(i,s-10,i,r+10,"ctr")),n.append(Zt(62,150,62,100,"thin"),De("M56 108L62 99 68 108","thin")),n.append(Yt(108,137,144,6,1,"k"));let a=(l,c)=>{let h=Oe(null);h.append(Yt(c,87,26,50,3,"k"),Zt(c+5,94,c+21,94,"thin"),Zt(c+5,98,c+21,98,"thin"),Zt(c+5,126,c+21,126,"thin"),Zt(c+5,130,c+21,130,"thin")),h.append(Te(l,112,15,"k"),Te(l,112,11.5,"thin hid"),Te(l,112,4.2,"k"),Te(l,112,1,"led"));for(let f=0;f<4;f++){let d=f*Math.PI/2+Math.PI/4;h.append(Zt(l+Math.cos(d)*4.2,112+Math.sin(d)*4.2,l+Math.cos(d)*11.5,112+Math.sin(d)*11.5,"thin"))}return h};return n.append(a(135,96),a(225,238)),n.append(Yt(108,81,60,6,1,"k"),Yt(192,81,60,6,1,"k"),De(Ax(168,192,84,5.5,4),"acc")),n.append(Yt(176,52,8,29,1,"k"),Yt(176,46,70,6,1,"k"),De("M246 46c10 0 14 8 10 16-2-5-6-8-10-8","k")),n.append(Zt(252,84,298,84,"thin"),Zt(252,140,298,140,"thin"),Ir(292,84,292,140)),n.append(Zt(t,168,t,180,"thin"),Zt(e,168,e,180,"thin"),Ir(t,176,e,176)),n}var Ix=.46,Px=.3,Lx=6,Dx=208,Vt=(n,t,e)=>[Lx+n+e*Ix,Dx-t-e*Px],Qa=n=>`${Gt(n[0])} ${Gt(n[1])}`,Fn=(n,t)=>De(`M${n.map(Qa).join("L")}Z`,t),We=(n,t,e)=>Zt(Gt(n[0]),Gt(n[1]),Gt(t[0]),Gt(t[1]),e);function je(n,t,e,i,s,r){return Oe(null,Fn([Vt(n+i,t,e),Vt(n+i,t,e+r),Vt(n+i,t+s,e+r),Vt(n+i,t+s,e)],"k"),Fn([Vt(n,t+s,e),Vt(n+i,t+s,e),Vt(n+i,t+s,e+r),Vt(n,t+s,e+r)],"k"),Fn([Vt(n,t,e),Vt(n+i,t,e),Vt(n+i,t+s,e),Vt(n,t+s,e)],"k"))}function Fd(n,t,e,i,s,r,o){let a=Math.PI/r,l=g=>Array.from({length:r},(_,w)=>{let m=a+w*2*Math.PI/r;return Vt(n+e*Math.cos(m),g,t+e*Math.sin(m))}),c=l(i),h=l(i+s),f=Oe(null);return o?(f.append(Fn(c,"hid thin"),Fn(h,"hid thin")),c.forEach((g,_)=>f.append(We(g,h[_],"hid thin"))),f):(c.map((g,_)=>{let w=(_+1)%r,m=(c[_][1]+c[w][1])/2;return{k:_,j:w,zc:m}}).sort((g,_)=>g.zc-_.zc).forEach(({k:g,j:_})=>f.append(Fn([c[g],c[_],h[_],h[g]],"k"))),f.append(Fn(h,"k")),f)}function Nx(n,t,e,i,s){let r=Vt(n,t,e),o=Vt(n,t,e+i),a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l)||1,h=-l/c*s,f=a/c*s,d=[[r[0]+h,r[1]+f],[o[0]+h,o[1]+f],[o[0]-h,o[1]-f],[r[0]-h,r[1]-f]];return{f:r,topF:[r[0]-h,r[1]-f],topB:[o[0]-h,o[1]-f],g:Oe(null,Te(Gt(o[0]),Gt(o[1]),s,"k"),Fn(d,"kf"),We(d[0],d[1]),We(d[3],d[2]),Te(Gt(r[0]),Gt(r[1]),s,"k"))}}function Ux(){let n=Oe("draw"),t=150,e=222;n.append(je(t-3,0,72,6,146,6));let i=Nx(e,88,72,28,7),s=(u,b,N)=>[u[0]+(b[0]-u[0])*N,u[1]+(b[1]-u[1])*N],r=s(i.topF,i.topB,.22),o=s(i.topF,i.topB,.8),a=Vt(e+24,104,86);n.append(je(e-3,0,72,6,81,6),i.g,We(r,[r[0],r[1]-8]),We(o,[o[0],o[1]-8]),We([r[0],r[1]-8],a,"thin"),We([o[0],o[1]-8],a,"thin"),je(e+24,98,86,18,12,12)),n.append(je(274,0,56,6,62,6),je(32,0,56,6,62,6)),n.append(je(20,62,20,262,14,44)),n.append(We(Vt(20,71,20),Vt(282,71,20),"thin"),We(Vt(20,76,24),Vt(282,76,24),"thin"),We(Vt(20,76,60),Vt(282,76,60),"thin"));for(let u=28;u<282;u+=14)n.append(We(Vt(u,76,24),Vt(u,76,60),"thin"));n.append(je(274,0,24,6,62,6),je(32,0,24,6,62,6),We(Vt(38,22,27),Vt(274,22,27),"thin")),n.append(Fn([Vt(e-14,76,20),Vt(e+14,76,20),Vt(e+14,34,4),Vt(e-14,34,4)],"k")),n.append(je(e-22,0,-16,44,34,24),Fn([Vt(e-19,34,-13),Vt(e+19,34,-13),Vt(e+19,34,5),Vt(e-19,34,5)],"thin")),n.append(We(i.f,Vt(e,88,57),"rod"),je(e-7,78,54,14,20,3)),n.append(je(t-3,0,6,6,146,6),je(t-3,140,6,6,6,72)),n.append(je(48,76,30,20,20,20));let l=Vt(t,76,43),c=Vt(t,100,43);n.append(De(`M${Gt(l[0]-10)} ${Gt(c[1])}V${Gt(l[1])}A10 5.5 0 0 0 ${Gt(l[0]+10)} ${Gt(l[1])}V${Gt(c[1])}`,"k"),Ex(Gt(c[0]),Gt(c[1]),10,5.5,"k")),n.append(Fd(e,38,11,76,22,6,!1));let h=[Vt(t-22,76,27),Vt(t+22,76,27),Vt(t+22,76,59),Vt(t-22,76,59)],f=Vt(t,112,43);n.append(je(t-2,134,41,4,6,4),je(t-9,118,36,18,16,14),je(t-3,112,41,6,6,4)),n.append(Fn(h,"hid thin"),...h.map(u=>We(f,u,"hid thin")));let d=l[0],g=c[1]-11,_=l[1]+11,w=17,m=7;return n.append(De(`M${Gt(d-w)} ${Gt(g+m)}V${Gt(g)}H${Gt(d-w+m)}M${Gt(d+w-m)} ${Gt(g)}H${Gt(d+w)}V${Gt(g+m)}M${Gt(d+w)} ${Gt(_-m)}V${Gt(_)}H${Gt(d+w-m)}M${Gt(d-w+m)} ${Gt(_)}H${Gt(d-w)}V${Gt(_-m)}`,"acc")),n.append(Fd(e,12,10,50,20,6,!0)),n.append(We(Vt(e,77,34),Vt(e,77,24),"thin hid"),De(`M${Qa(Vt(e-4,77,29))}L${Qa(Vt(e,77,22))}L${Qa(Vt(e+4,77,29))}`,"thin")),n.append(We(Vt(35,0,24),Vt(35,0,-30),"thin"),We(Vt(277,0,24),Vt(277,0,-30),"thin"),Ir(...Vt(35,0,-26),...Vt(277,0,-26))),n}function Fx(){let n=Oe("draw");n.append(Tx(16,344,196));let t=[66,168],e=[94,124],i=[136,144];n.append(Yt(40,178,54,18,2,"k"),Te(48,187,2,"thin"),Te(86,187,2,"thin")),n.append(Ka(e[0],e[1],i[0],i[1],8),Ka(t[0],t[1],e[0],e[1],8),Te(i[0],i[1],5,"k"));let s=(l,c,h)=>Oe(null,Te(l[0],l[1],c,"k"),De(`M${Gt(l[0]+Math.cos(h-2.2)*c*.62)} ${Gt(l[1]+Math.sin(h-2.2)*c*.62)}A${c*.62} ${c*.62} 0 0 1 ${Gt(l[0]+Math.cos(h+2.2)*c*.62)} ${Gt(l[1]+Math.sin(h+2.2)*c*.62)}`,"thin"),Zt(l[0],l[1],Gt(l[0]+Math.cos(h)*c*.9),Gt(l[1]+Math.sin(h)*c*.9)),Te(l[0],l[1],1.2,"led"));n.append(s(t,8,-1.1),s(e,7.5,.4)),n.append(Yt(150,166,52,30,2,"k"),Yt(165,174,22,14,1,"thin"));for(let l=0;l<5;l++)n.append(Zt(145,170+l*5.5,150,170+l*5.5,"thin"),Zt(202,170+l*5.5,207,170+l*5.5,"thin"));let r=[290,160],o=[250,100],a=[314,76];return n.append(Yt(256,176,72,20,2,"k"),Te(266,186,2,"thin"),Te(318,186,2,"thin")),n.append(Yt(274,146,34,30,3,"k"),Te(280,152,1.6,"thin"),Te(302,152,1.6,"thin"),Zt(276,170,306,170,"thin")),n.append(Yt(226,91,24,18,2,"k"),Te(231,96,1.4,"thin"),Te(231,104,1.4,"thin")),n.append(Ka(r[0],r[1],o[0],o[1],11),Ka(o[0],o[1],a[0],a[1],9)),n.append(zc(r[0],r[1],9),zc(o[0],o[1],8.5),zc(a[0],a[1],5.5)),n.append(Yt(319,69,12,14,1.5,"k"),De("M331 70.5H345V74"),De("M331 81.5H345V78"),Zt(318,76,349,76,"ctr")),n.append(De("M262.7 118.4A24 24 0 0 0 272.4 92","thin")),n.append(De("M94 116V98H176V166","acc hid"),De("M207 181H236V109M236 164H274","acc hid")),n.append(Zt(334,76,356,76,"thin"),Zt(330,196,356,196,"thin"),Ir(352,76,352,196)),n}var Ox={plc:Cx,climber:Rx,vision:Ux,arm:Fx};function Od(n){let t=Lt("svg",{class:`art art-${n}`,viewBox:`0 0 ${Mx} ${wx}`,"aria-hidden":"true",focusable:"false",fill:"none",stroke:"currentColor","stroke-width":1.5,"stroke-linecap":"round","stroke-linejoin":"round"}),e=Ox[n];return e&&t.append(e()),t}var Bx={plc:"Line drawing: a DIN rail carrying a power supply, a CPU and three I/O modules, with an operator panel wired to the CPU.",climber:"Line drawing: a two-wheel climbing carriage clamped around an areca palm trunk by a spring, with a harvesting boom.",vision:"Line drawing: a conveyor with three parts, a camera on a gantry looking down, and a pneumatic pusher sending one part down a chute into a bin.",arm:"Line drawing: a small potentiometer arm and a controller board driving a two-link servo arm with a gripper."};function Bd(n,t,{bus:e}){let i=L=>t.domainLabels[L]||L,s=L=>L.domains.map(i).join(", "),r=t.projects.filter(L=>L.featured),o=t.projects.filter(L=>!L.featured),a=new Set(t.projects.flatMap(L=>L.skills)),l={domain:"all",skill:null},c=!1,h=(L,z)=>L.links&&L.links.length?A("p",{class:z},L.links.map(q=>A("a",{class:"link",href:q.href,target:"_blank",rel:"noopener"},q.label))):null,f=L=>(l.domain==="all"||L.domains.includes(l.domain))&&(!l.skill||L.skills.includes(l.skill)),g=[["all","All"],...Object.entries(t.domainLabels)].map(([L,z])=>{let q=L==="all"?t.projects.length:t.projects.filter(Q=>Q.domains.includes(L)).length,Y=A("button",{type:"button",role:"radio",class:"pj-opt","data-id":L,"aria-checked":"false",tabindex:"-1"},A("span",null,z),A("span",{class:"pj-n mono"},String(q)));return Y.addEventListener("click",()=>U({domain:L})),Y}),_=A("div",{class:"pj-filter",role:"radiogroup","aria-label":"Filter builds by area"},g);_.addEventListener("keydown",L=>{let z={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[L.key];if(!z&&L.key!=="Home"&&L.key!=="End")return;L.preventDefault();let q=g.findIndex(Q=>Q.dataset.id===l.domain),Y=L.key==="Home"?0:L.key==="End"?g.length-1:(q+z+g.length)%g.length;U({domain:g[Y].dataset.id}),g[Y].focus()});let w=A("p",{class:"pj-skill",hidden:!0}),m=A("p",{class:"pj-status","aria-live":"polite"}),u=A("div",{class:"pj-bar"},_,w,m);function b(L,z){let q=A("figure",{class:"pj-fig",role:"img","aria-label":Bx[L.art]||L.title},Od(L.art)),Y=A("dl",{class:"pj-facts"},(L.facts||[]).map(([nt,mt])=>A("div",null,A("dt",null,nt),A("dd",null,mt)))),Q=A("dl",{class:"pj-tb"},A("div",null,A("dt",null,"Area"),A("dd",null,s(L))),A("div",null,A("dt",null,"Tools"),A("dd",null,L.tags.join(", "))),A("div",null,A("dt",null,"Sheet"),A("dd",{class:"mono"},`${z+1} of ${r.length}`)));return A("article",{class:"pj-sheet plate","data-id":L.id},q,A("div",{class:"pj-body"},A("h3",null,L.title),A("p",{class:"pj-sum"},L.summary),Y,h(L,"pj-links")),Q)}let N=r.map((L,z)=>({p:L,el:b(L,z)})),M=A("h3",{class:"pj-h"},"In detail"),C=A("div",{class:"pj-sheets"},N.map(L=>L.el)),E=L=>A("td",{class:"pj-tools"},L.tags.map(z=>a.has(z)?A("button",{type:"button",class:"tag pj-tagbtn",title:`Show the builds that use ${z}`,onclick:()=>U({skill:z})},z):A("span",{class:"tag"},z))),R=o.map(L=>({p:L,tr:A("tr",{"data-id":L.id},A("th",{scope:"row"},L.title,A("span",{class:"pj-sub"},s(L)),h(L,"pj-rowlinks")),A("td",{class:"pj-area"},s(L)),E(L))})),y=A("h3",{class:"pj-h"},"The rest of the register"),S=A("table",{class:"pj-reg"},A("caption",{class:"sr-only"},"Other builds, with area and tools"),A("thead",null,A("tr",null,A("th",{scope:"col"},"Build"),A("th",{scope:"col",class:"pj-area"},"Area"),A("th",{scope:"col"},"Tools"))),A("tbody",null,R.map(L=>L.tr))),O=A("div",{class:"pj-regwrap"},y,A("div",{class:"plate pj-tablewrap"},S)),k=A("p",{class:"pj-empty",hidden:!0},"No builds match this filter. ",A("button",{type:"button",class:"link",onclick:()=>U({domain:"all",skill:null})},"Clear the filter"),"."),W=A("div",{class:"pj"},u,M,C,O,k);n.append(W);function D(){g.forEach(Q=>{let nt=Q.dataset.id===l.domain;Q.setAttribute("aria-checked",String(nt)),Q.tabIndex=nt?0:-1}),w.hidden=!l.skill,l.skill&&w.replaceChildren("Skill: ",A("strong",null,l.skill),A("button",{type:"button",class:"pj-clear","aria-label":`Clear the ${l.skill} filter`,onclick:()=>U({skill:null})},"Clear"));let L=0;N.forEach(({p:Q,el:nt})=>{let mt=f(Q);nt.hidden=!mt,mt&&(nt.classList.toggle("pj-flip",L%4===1||L%4===2),L++)});let z=0;R.forEach(({p:Q,tr:nt})=>{let mt=f(Q);nt.hidden=!mt,mt&&z++}),M.hidden=L===0,O.hidden=z===0;let q=L+z;k.hidden=q!==0;let Y=t.projects.length;m.textContent=q===Y?`Showing all ${Y} builds.`:q?`Showing ${q} of ${Y} builds.`:"No builds match."}function U(L){let z={domain:l.domain,skill:l.skill};"domain"in L&&(z.domain=L.domain&&t.domainLabels[L.domain]?L.domain:"all"),"skill"in L&&(z.skill=L.skill||null),!(z.domain===l.domain&&z.skill===l.skill)&&(Object.assign(l,z),D(),c||(c=!0,e.emit("unlock","project-open")))}let F=e.on("filter",L=>L&&U(L));return D(),{setFilter(L){U(L||{domain:"all",skill:null})},destroy(){F(),W.remove()}}}var kx=1800*1e3,zx=6e3,Vx={Python:"#3572a5",JavaScript:"#f1e05a",TypeScript:"#3178c6",HTML:"#e34c26",CSS:"#7e57c2","C++":"#f34b7d",C:"#8a8a8a",Java:"#b07219","Jupyter Notebook":"#da5b0b",MATLAB:"#e16737",Shell:"#89e051",Arduino:"#00979d",Go:"#00add8",Rust:"#dea584",PHP:"#4f5d95",Kotlin:"#a97bff",Dart:"#00b4ab"},Vc=n=>Vx[n]||"#7f8c93";function kd(n){let t=Math.floor((Date.now()-new Date(n).getTime())/864e5);if(!Number.isFinite(t)||t<0)return null;if(t===0)return"today";if(t===1)return"1 day ago";if(t<60)return`${t} days ago`;let e=Math.round(t/30.4);return e<24?`${e} months ago`:`${Math.round(e/12)} years ago`}async function Hx(n){let t=`gh:${n}`;try{let s=sessionStorage.getItem(t);if(s){let{t:r,list:o}=JSON.parse(s);if(Date.now()-r<kx&&Array.isArray(o))return o}}catch{}let e=new AbortController,i=setTimeout(()=>e.abort(),zx);try{let s=await fetch(`https://api.github.com/users/${encodeURIComponent(n)}/repos?per_page=100&sort=pushed`,{signal:e.signal,headers:{Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error("bad status");let r=await s.json();if(!Array.isArray(r))throw new Error("bad json");try{sessionStorage.setItem(t,JSON.stringify({t:Date.now(),list:r}))}catch{}return r}finally{clearTimeout(i)}}function zd(n,{user:t,bus:e,hide:i=[]}){let s=`https://github.com/${encodeURIComponent(t)}`,r=A("section",{class:"gh","aria-labelledby":"gh-h"},A("h3",{id:"gh-h"},"Live from GitHub")),o=A("div",{class:"gh-body","aria-live":"polite"},A("p",{class:"gh-note"},"Checking the latest activity."));r.append(o),n.append(r);let a=!1,l=!0;function c(){o.replaceChildren(A("p",{class:"gh-note"},"The live feed isn\u2019t available right now. ",A("a",{class:"link",href:s,target:"_blank",rel:"noopener"},"Open the profile on GitHub"),"."))}function h(f){let d=f.filter(E=>E&&!E.fork&&typeof E.name=="string");if(!d.length){c();return}let g=new Set(i.map(E=>String(E).toLowerCase())),_=d.reduce((E,R)=>new Date(R.pushed_at)>new Date(E.pushed_at)?R:E),w=d.filter(E=>!g.has(E.name.toLowerCase())).sort((E,R)=>new Date(R.pushed_at)-new Date(E.pushed_at)).slice(0,6);if(!w.length){c();return}let m=new Map;d.forEach(E=>{E.language&&m.set(E.language,(m.get(E.language)||0)+1)});let u=[...m.entries()].sort((E,R)=>R[1]-E[1]),b=u.reduce((E,[,R])=>E+R,0),N=A("p",{class:"gh-stats"},A("span",null,A("strong",{class:"mono"},String(d.length))," public repositories"),_.pushed_at?A("span",null,"Last pushed ",A("strong",null,kd(_.pushed_at)||"recently")):null),M=w.map(E=>{let R=A("a",{class:"gh-name",href:String(E.html_url||`${s}/${E.name}`),target:"_blank",rel:"noopener"},E.name);return R.addEventListener("click",()=>{l&&(l=!1,e&&e.emit("unlock","github-open"))}),A("li",null,R,E.description?A("p",{class:"gh-desc"},String(E.description)):null,A("p",{class:"gh-meta"},E.language?A("span",{class:"gh-lang"},A("i",{style:{background:Vc(E.language)},"aria-hidden":"true"}),E.language):null,E.stargazers_count>0?A("span",null,`${E.stargazers_count} ${E.stargazers_count===1?"star":"stars"}`):null,E.pushed_at?A("span",null,`Updated ${kd(E.pushed_at)||"recently"}`):null))}),C=[N,A("ul",{class:"gh-list"},M)];if(b){let E=A("div",{class:"gh-bar",role:"img","aria-label":`Languages by repository: ${u.map(([y,S])=>`${y} ${S}`).join(", ")}`},u.map(([y,S])=>A("i",{style:{width:`${S/b*100}%`,background:Vc(y)},title:`${y}, ${S}`}))),R=A("ul",{class:"gh-legend"},u.slice(0,6).map(([y,S])=>A("li",null,A("i",{style:{background:Vc(y)},"aria-hidden":"true"}),`${y} ${S}`)));C.push(E,R)}C.push(A("p",{class:"gh-more"},A("a",{class:"link",href:s,target:"_blank",rel:"noopener"},"See everything on GitHub"))),o.replaceChildren(...C)}return Hx(t).then(f=>{a||h(f)}).catch(()=>{a||c()}),{destroy(){a=!0,r.remove()}}}var Gx={adv:11.5,int:9.5,hands:8,bas:6.5},Vd={adv:.5,int:.3,hands:.16,bas:0},Wx={Automation:[.12,.46],"Robotics and vision":[.33,.72],Platforms:[.52,.22],Programming:[.7,.72],Tools:[.89,.44]},$x=.978,Pr=.01,Hd=n=>/[.!?]$/.test(n)?n:`${n}.`;function Xx(n){let t=n;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gd(n,t,{bus:e}){let i=t.levelLabels||{},s=t.skills.filter(x=>!x.soft),r=t.skills.filter(x=>x.soft),o=Xx(11),a=di(),l=[],c=new Map,h=new Map,f=[],d=x=>t.projects.filter(P=>P.skills.includes(x)),g=x=>t.experience.filter(P=>P.skills.includes(x)),_=x=>(Object.assign(x,{x:0,y:0,vx:0,vy:0,w:2*x.r,h:2*x.r,oy:0}),l.push(x),c.set(x.key,x),h.set(x.key,new Set),x),w=(x,P,I)=>{f.push({a:x,b:P,rest:I}),h.get(x.key).add(P.key),h.get(P.key).add(x.key)};s.forEach((x,P)=>x.items.forEach(I=>_({key:`s:${I.n}`,type:"skill",id:I.n,label:I.n,lvl:I.lvl,group:x.group,gi:P,r:Gx[I.lvl]||6,evidence:d(I.n).length+g(I.n).length>0})));let m=x=>c.get(`s:${x}`);t.projects.filter(x=>x.skills.some(m)).forEach(x=>{let P=_({key:`b:${x.id}`,type:"build",id:x.id,label:x.title,featured:!!x.featured,r:x.featured?6.5:4.5,tags:x.tags,skills:x.skills});x.skills.forEach(I=>{let V=m(I);V&&w(P,V,x.featured?72:58)})}),t.experience.filter(x=>x.skills.some(m)).forEach(x=>{let P=_({key:`e:${x.id}`,type:"exp",id:x.id,label:x.org,kind:x.kind,r:6.5,role:x.role,start:x.start,end:x.end,skills:x.skills});x.skills.forEach(I=>{let V=m(I);V&&w(P,V,64)})});let u=l.filter(x=>x.type==="skill"),b={selected:null,hover:null,kb:null,drag:null,view:null,visible:!1,size:null,alpha:0,dirty:!0},N=Fi(),M=!1,C=null,E=0,R=new Map,y=A("canvas",{class:"gx-canvas",tabindex:"0",role:"img","aria-label":"Skill map. Skills are circles, builds are squares and internships are diamonds, joined by lines where one uses the other. Arrow keys step through the skills. The List view has the same information as text."}),S=y.getContext("2d"),O=A("div",{class:"gx-panel","aria-live":"polite"}),k=A("div",{class:"gx-stage"},y),W=x=>{let P=Lt("svg",{viewBox:"0 0 18 18",width:16,height:16,"aria-hidden":"true"});return x==="skill"&&P.append(Lt("circle",{cx:9,cy:9,r:6.5,fill:"none",stroke:"currentColor","stroke-width":1.6})),x==="feat"&&P.append(Lt("rect",{x:3,y:3,width:12,height:12,fill:"var(--sig-warn)"})),x==="build"&&P.append(Lt("rect",{x:5,y:5,width:8,height:8,fill:"var(--ink-3)"})),x==="role"&&P.append(Lt("path",{d:"M9 2 16 9 9 16 2 9Z",fill:"none",stroke:"var(--warn-text)","stroke-width":1.8})),P},D=A("ul",{class:"gx-legend"},A("li",null,W("skill"),"Skill. Bigger and darker means stronger."),A("li",null,W("feat"),"Build shown in detail"),A("li",null,W("build"),"Other build"),A("li",null,W("role"),"Internship or training")),U=A("div",{class:"gx-map"},k,O,D),F=A("div",{class:"gx-list"}),L=["map","list"].map(x=>{let P=A("button",{type:"button",role:"radio","data-view":x,"aria-checked":"false",tabindex:"-1"},x==="map"?"Map":"List");return P.addEventListener("click",()=>Me(x)),P}),z=A("div",{class:"gx-switch",role:"radiogroup","aria-label":"Skills view"},L);z.addEventListener("keydown",x=>{if(!["ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Home","End"].includes(x.key))return;x.preventDefault();let P=x.key==="Home"||x.key==="ArrowLeft"||x.key==="ArrowUp"?"map":"list";Me(P),L.find(I=>I.dataset.view===P).focus()});let q=A("div",{class:"gx-bar"},z,A("p",{class:"gx-hint"},"Select a skill to see the builds and roles that show it.")),Y=A("div",{class:"gx"},q,U,F);n.append(Y);let Q=(x,P)=>{let I=x.type==="skill"?[...d(x.id).map(V=>V.title),...g(x.id).map(V=>V.org)]:[];return I.length>P?`${I.slice(0,P).join("; ")}; and ${I.length-P} more`:I.join("; ")};function nt(x){e.emit("filter",{skill:x}),e.emit("goto","builds")}function mt(x){if(!x)return[A("p",{class:"gx-muted"},"Select a circle to see where that skill shows up. Drag any node to rearrange the map.")];if(x.type==="skill"){let P=d(x.id),I=[A("div",{class:"gx-ph"},A("strong",null,x.id),al(x.lvl),A("span",{class:"gx-lvl"},i[x.lvl]||""))],V=Q(x,6);return I.push(V?A("p",null,A("span",{class:"gx-k"},"Used in "),Hd(V)):A("p",{class:"gx-muted"},`${i[x.lvl]||"Listed"} level, under ${x.group}.`)),P.length&&b.selected===x&&I.push(A("button",{type:"button",class:"btn btn--small",onclick:()=>nt(x.id)},P.length===1?"Show this build":"Show these builds")),I}return x.type==="build"?[A("div",{class:"gx-ph"},A("strong",null,x.label)),A("p",null,A("span",{class:"gx-k"},"Skills "),`${x.skills.join(", ")}.`),x.tags&&x.tags.length?A("p",{class:"gx-muted"},`Tools: ${x.tags.join(", ")}.`):null]:[A("div",{class:"gx-ph"},A("strong",null,x.label),A("span",{class:"gx-lvl"},x.role)),A("p",null,A("span",{class:"gx-k"},"Skills "),`${x.skills.join(", ")}.`)]}function pt(){let x=b.hover||b.kb||b.selected;O.replaceChildren(...mt(x).filter(Boolean)),O.classList.toggle("is-preview",!!x&&x!==b.selected)}let yt=new Map;function ut(x,P){let I=d(x.n),V=g(x.n),tt=m(x.n),Z=A("button",{type:"button",class:"gx-name","aria-pressed":"false"},x.n);Z.addEventListener("click",()=>X(b.selected===tt?null:tt,!0));let B=A("button",{type:"button",class:"btn btn--small gx-go",hidden:!0,onclick:()=>nt(x.n)},I.length===1?"Show this build":"Show these builds"),st=[];I.length&&st.push(`${I.length} ${I.length===1?"build":"builds"}`),V.length&&st.push(`${V.length} ${V.length===1?"role":"roles"}`);let ht=[...I.map(ft=>ft.title),...V.map(ft=>ft.org)],lt=ht.length?Hd(`Used in ${st.join(" and ")}: ${ht.length>4?`${ht.slice(0,4).join("; ")}; and ${ht.length-4} more`:ht.join("; ")}`):"",ot=A("li",{class:"gx-row","data-skill":x.n},Z,A("span",{class:"gx-lv"},al(x.lvl),A("span",{class:"gx-lvl"},i[x.lvl]||"")),lt?A("p",{class:"gx-used"},lt):null,B);return yt.set(x.n,{li:ot,name:Z,go:B,hasBuilds:I.length>0}),ot}s.forEach(x=>F.append(A("section",{class:"gx-group"},A("h3",null,x.group),A("ul",null,x.items.map(P=>ut(P,x)))))),r.forEach(x=>F.append(A("section",{class:"gx-group"},A("h3",null,x.group),A("p",{class:"gx-soft"},x.items.map(P=>P.n).join(", ")))));function Mt(x){return x?typeof x=="object"?x:c.get(`s:${x}`)||c.get(`b:${x}`)||c.get(`e:${x}`)||null:null}function X(x,P){let I=Mt(x);b.selected=I,yt.forEach((V,tt)=>{let Z=!!I&&I.type==="skill"&&I.id===tt;V.name.setAttribute("aria-pressed",String(Z)),V.li.classList.toggle("is-selected",Z),V.go.hidden=!(Z&&V.hasBuilds)}),pt(),b.dirty=!0,Tt(),P&&I&&!M&&(M=!0,e.emit("unlock","graph-select")),I&&I.type==="skill"&&d(I.id).length?(C=I.id,e.emit("filter",{skill:I.id})):C&&(C=null,e.emit("filter",{skill:null}))}function it(){if(b.size){S.font=`600 12px ${N.ui}`;for(let x of l)x.type==="skill"?(x.w=Math.max(2*x.r,S.measureText(x.label).width)+6,x.h=2*x.r+18,x.oy=9):(x.w=2*x.r+6,x.h=2*x.r+6,x.oy=0)}}function ct(x,P){s.forEach((I,V)=>{let tt=Wx[I.group]||[.5+.36*Math.cos(V/s.length*6.283),.5+.3*Math.sin(V/s.length*6.283)];R.set(I.group,[tt[0]*x,tt[1]*P])}),u.forEach(I=>{let[V,tt]=R.get(I.group);I.x=V+(o()-.5)*150,I.y=tt+(o()-.5)*110}),l.filter(I=>I.type!=="skill").forEach(I=>{let V=[...h.get(I.key)].map(tt=>c.get(tt));I.x=V.reduce((tt,Z)=>tt+Z.x,0)/V.length+(o()-.5)*40,I.y=V.reduce((tt,Z)=>tt+Z.y,0)/V.length+(o()-.5)*40})}function Ct(x){let P=b.drag&&b.drag.n,I=!1;for(let V=0;V<l.length;V++){let tt=l[V];for(let Z=V+1;Z<l.length;Z++){let B=l[Z],st=B.x-tt.x,ht=B.y+B.oy-(tt.y+tt.oy),lt=(tt.w+B.w)/2+4-Math.abs(st),ot=(tt.h+B.h)/2+2-Math.abs(ht);if(!(lt<=0||ot<=0))if(I=!0,lt<ot){let ft=(st<0?-1:1)*lt*x;tt!==P&&(tt.x-=ft),B!==P&&(B.x+=ft)}else{let ft=(ht<0?-1:1)*ot*x;tt!==P&&(tt.y-=ft),B!==P&&(B.y+=ft)}}}return I}function dt(){let{w:x,h:P}=b.size;for(let I of l){let V=I.w/2+8;I.x=Math.min(x-V,Math.max(V,I.x)),I.y=Math.min(P-I.h/2-22,Math.max(I.h/2+22,I.y))}}function zt(){for(let x=0;x<60;x++){let P=Ct(.5);if(dt(),!P)break}}function gt(){let x=b.alpha,{w:P,h:I}=b.size;for(let V=0;V<l.length;V++){let tt=l[V];for(let Z=V+1;Z<l.length;Z++){let B=l[Z],st=B.x-tt.x,ht=B.y-tt.y,lt=st*st+ht*ht;lt<.5&&(st=o()-.5,ht=o()-.5,lt=.5);let ot=Math.sqrt(lt);if(ot<190){let ft=2400/lt*x;tt.vx-=st/ot*ft,tt.vy-=ht/ot*ft,B.vx+=st/ot*ft,B.vy+=ht/ot*ft}}}Ct(.25);for(let V of f){let tt=V.b.x-V.a.x,Z=V.b.y-V.a.y,B=Math.hypot(tt,Z)||1,st=(B-V.rest)*.03*x;V.a.vx+=tt/B*st,V.a.vy+=Z/B*st,V.b.vx-=tt/B*st,V.b.vy-=Z/B*st}for(let V of l){if(V.type==="skill"){let[Z,B]=R.get(V.group);V.vx+=(Z-V.x)*.03*x,V.vy+=(B-V.y)*.03*x}else V.vx+=(P/2-V.x)*.004*x,V.vy+=(I/2-V.y)*.004*x;if(V===(b.drag&&b.drag.n)){V.vx=0,V.vy=0;continue}V.vx*=.62,V.vy*=.62,V.x+=V.vx,V.y+=V.vy;let tt=V.w/2+8;V.x=Math.min(P-tt,Math.max(tt,V.x)),V.y=Math.min(I-V.h/2-22,Math.max(V.h/2+22,V.y))}b.alpha*=$x}function wt(x=320){let P=0;for(;b.alpha>Pr&&P++<x;)gt();zt()}function Nt(){if(!b.size)return;let{w:x,h:P}=b.size,I=N,V=Math.min(window.devicePixelRatio||1,2);S.setTransform(V,0,0,V,0,0),S.clearRect(0,0,x,P);let tt=b.hover||b.kb||b.selected,Z=tt?new Set([tt.key,...h.get(tt.key)]):null;S.textAlign="center",S.textBaseline="alphabetic",S.font=`600 12px ${I.ui}`,S.globalAlpha=Z?.35:1,S.lineWidth=1,S.setLineDash([3,4]),s.forEach(B=>{let st=u.filter(Rt=>Rt.group===B.group),ht=Math.min(...st.map(Rt=>Rt.x-Rt.w/2))-14,lt=Math.max(...st.map(Rt=>Rt.x+Rt.w/2))+14,ot=Math.min(...st.map(Rt=>Rt.y-Rt.r))-30,ft=Math.max(...st.map(Rt=>Rt.y+Rt.r+18))+12;S.strokeStyle=I.line,S.beginPath(),S.roundRect?S.roundRect(ht,ot,lt-ht,ft-ot,8):S.rect(ht,ot,lt-ht,ft-ot),S.stroke(),S.setLineDash([]),S.textAlign="left",S.fillStyle=I.ink3,S.fillText(B.group,ht+10,ot+17),S.textAlign="center",S.setLineDash([3,4])}),S.setLineDash([]);for(let B of f){let st=!!tt&&(B.a===tt||B.b===tt);S.globalAlpha=Z?st?1:.1:.6,S.strokeStyle=st?I.info:I.line2,S.lineWidth=st?1.8:1,S.beginPath(),S.moveTo(B.a.x,B.a.y),S.lineTo(B.b.x,B.b.y),S.stroke()}S.font=`600 12px ${I.ui}`;for(let B of l){let st=Z&&!Z.has(B.key)?.28:1,ht=b.selected===B,lt=b.hover===B||b.kb===B;S.globalAlpha=st,B.type==="skill"?(S.beginPath(),S.arc(B.x,B.y,B.r,0,6.2832),S.fillStyle=I.bg2,S.fill(),Vd[B.lvl]&&(S.globalAlpha=st*Vd[B.lvl],S.fillStyle=I.ink,S.fill(),S.globalAlpha=st),ht&&(S.globalAlpha=st*.3,S.fillStyle=I.info,S.fill(),S.globalAlpha=st),S.lineWidth=ht?2.8:1.6,S.strokeStyle=ht?I.info:lt?I.ink:B.evidence?I.ink2:I.ink3,S.stroke(),S.lineJoin="round",S.lineWidth=4,S.strokeStyle=I.bg2,S.strokeText(B.label,B.x,B.y+B.r+14),S.fillStyle=lt||ht||B.evidence?I.ink:I.ink3,S.fillText(B.label,B.x,B.y+B.r+14)):B.type==="build"?(S.fillStyle=B.featured?I.warn:I.ink3,S.fillRect(B.x-B.r,B.y-B.r,2*B.r,2*B.r),(ht||lt)&&(S.lineWidth=2.2,S.strokeStyle=ht?I.info:I.ink,S.strokeRect(B.x-B.r-2,B.y-B.r-2,2*B.r+4,2*B.r+4))):(S.beginPath(),S.moveTo(B.x,B.y-B.r-1),S.lineTo(B.x+B.r+1,B.y),S.lineTo(B.x,B.y+B.r+1),S.lineTo(B.x-B.r-1,B.y),S.closePath(),S.fillStyle=I.bg2,S.fill(),S.lineWidth=ht||lt?2.8:2,S.strokeStyle=ht?I.info:B.kind==="industry"?I.warn:I.ink2,S.stroke())}if(S.globalAlpha=1,tt&&tt.type!=="skill"){let B=tt.label,st=S.measureText(B).width+16,ht=Math.min(x-st/2-6,Math.max(st/2+6,tt.x)),lt=tt.y-tt.r-22;S.fillStyle=I.bg3,S.strokeStyle=I.line2,S.lineWidth=1,S.fillRect(ht-st/2,lt-14,st,22),S.strokeRect(ht-st/2+.5,lt-13.5,st-1,21),S.fillStyle=I.ink,S.fillText(B,ht,lt+1)}b.kb&&(S.setLineDash([4,3]),S.lineWidth=2,S.strokeStyle=I.warn,S.beginPath(),S.arc(b.kb.x,b.kb.y,b.kb.r+6,0,6.2832),S.stroke(),S.setLineDash([]))}function Et(){if(E=0,!b.visible||b.view!=="map"||!b.size)return;(b.alpha>Pr||b.drag)&&(gt(),b.drag&&gt(),b.alpha<=Pr&&!b.drag&&zt()),Nt(),b.dirty=!1,(b.alpha>Pr||b.drag)&&Tt()}function Tt(){!E&&b.visible&&b.view==="map"&&b.size&&(E=requestAnimationFrame(Et))}function Qt(x=.3){b.alpha=Math.max(b.alpha,x),a&&(wt(),b.dirty=!0),Tt()}function de(){let x=k.getBoundingClientRect(),P=Math.round(x.width),I=Math.round(x.height);if(P<50||I<50)return;let V=Math.min(window.devicePixelRatio||1,2);y.width=Math.round(P*V),y.height=Math.round(I*V);let tt=b.size;if(b.size={w:P,h:I},it(),tt)l.forEach(Z=>{Z.x*=P/tt.w,Z.y*=I/tt.h}),s.forEach(Z=>{let B=R.get(Z.group);R.set(Z.group,[B[0]*P/tt.w,B[1]*I/tt.h])}),Qt(.3);else{ct(P,I),b.alpha=1;let Z=a?400:130;for(let B=0;B<Z&&b.alpha>Pr;B++)gt();a||(b.alpha=Math.max(b.alpha,.35))}b.dirty=!0,Tt()}let Ce=x=>{let P=y.getBoundingClientRect();return[x.clientX-P.left,x.clientY-P.top]};function oe(x,P){let I=null,V=1e9;for(let tt of l){let Z=x-tt.x,B=P-tt.y,st=Math.hypot(Z,B),ht=Math.max(tt.r+5,12);tt.type==="skill"&&Math.abs(Z)<tt.w/2&&B>0&&B<tt.r+18&&(st=Math.min(st,ht-1)),st<=ht&&st<V&&(I=tt,V=st)}return I}function ee(x){b.hover!==x&&(b.hover=x,y.style.cursor=x?"pointer":"default",pt(),b.dirty=!0,Tt())}y.addEventListener("pointerdown",x=>{let[P,I]=Ce(x);b.drag={n:oe(P,I),sx:P,sy:I,moved:!1},y.setPointerCapture(x.pointerId)}),y.addEventListener("pointermove",x=>{let[P,I]=Ce(x),V=b.drag;if(V&&V.n){if(!V.moved&&Math.hypot(P-V.sx,I-V.sy)<5)return;V.moved=!0,V.n.x=Math.min(b.size.w-10,Math.max(10,P)),V.n.y=Math.min(b.size.h-10,Math.max(10,I)),V.n.vx=0,V.n.vy=0,b.alpha=Math.max(b.alpha,.3),b.dirty=!0,Tt()}else V||ee(oe(P,I))});let G=(x,P)=>{let I=b.drag;b.drag=null,I&&!I.moved&&!P&&X(I.n&&b.selected===I.n?null:I.n,!0),I&&I.moved&&Qt(.25),x&&x.pointerType==="touch"&&ee(null)};y.addEventListener("pointerup",x=>G(x,!1)),y.addEventListener("pointercancel",x=>G(x,!0)),y.addEventListener("pointerleave",()=>{b.drag||ee(null)}),y.addEventListener("focus",()=>{b.kb||(b.kb=u[0],pt(),b.dirty=!0,Tt())}),y.addEventListener("blur",()=>{b.kb=null,pt(),b.dirty=!0,Tt()}),y.addEventListener("keydown",x=>{let P=Math.max(0,u.indexOf(b.kb)),I={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[x.key];I?(x.preventDefault(),b.kb=u[(P+I+u.length)%u.length],pt(),b.dirty=!0,Tt()):x.key==="Enter"||x.key===" "?(x.preventDefault(),X(b.selected===b.kb?null:b.kb,!0)):x.key==="Escape"&&b.selected&&X(null)});function Me(x){b.view=x,L.forEach(P=>{let I=P.dataset.view===x;P.setAttribute("aria-checked",String(I)),P.tabIndex=I?0:-1}),U.hidden=x!=="map",F.hidden=x!=="list",x==="map"&&requestAnimationFrame(()=>{de(),Tt()})}let se=new ResizeObserver(()=>{b.view==="map"&&de()});se.observe(k);let v=Jn(k,x=>{b.visible=x,x&&(b.dirty=!0,Tt())},{rootMargin:"60px 0px"}),p=e.on("theme",()=>{N=Fi(),it(),b.dirty=!0,Tt()});return document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{N=Fi(),it(),b.dirty=!0,Tt()}),pt(),Me(window.matchMedia("(max-width: 639px)").matches?"list":"map"),{select(x){X(x,!1)},destroy(){se.disconnect(),v(),p(),cancelAnimationFrame(E),Y.remove()}}}var qx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Nr=n=>{if(n==="present")return"present";let[t,e]=String(n).split("-").map(Number);return`${qx[(e||1)-1]} ${t}`},$c=(n,t)=>n===t?Nr(n):`${Nr(n)} to ${Nr(t)}`,Je=n=>n.length<2?n.join(""):`${n.slice(0,-1).join(", ")} and ${n[n.length-1]}`,Wd=n=>n.charAt(0).toUpperCase()+n.slice(1),$d=["none","one","two","three","four","five","six","seven","eight","nine","ten"],Lr=n=>n<$d.length?$d[n]:String(n),tl=(n,t,e)=>`${n} ${n===1?t:e}`,Zd=n=>{let t=String(n).match(/^.*?[.!?](\s|$)/);return t?t[0].trim():String(n)},jd=(n,t)=>n.length>t?`${n.slice(0,t).join(", ")}, and ${n.length-t} more`:Je(n),Yx=n=>/[.!?]$/.test(n)?n:`${n}.`,Xd=n=>n.replace(/,\s*Karunya$/,""),Zx=new Set("a an the of to in on for and or is are was were be been being do does did can could would should will has have had he his him she her they them it its this that these those i me my we you your what which who whom whose how why when where about with at by from as into than then so if any some there tell give show please also very more most much many get got know knows like want just see".split(" ")),jx={plc:["siemens","tia","ladder","s7","scada","codesys"],siemens:["plc","tia","s7"],tia:["siemens","plc"],ladder:["plc","siemens"],scada:["plc","siemens"],robot:["yaskawa","igus","dobot","cobot","motoman","robotics"],cobot:["yaskawa","hc10","robot"],yaskawa:["robot","motoman","cobot"],igus:["delta","robot"],dobot:["magician","robot"],arm:["robot","servo"],vision:["opencv","camera","detection","yolo","computer"],opencv:["vision","python"],yolo:["yolov8","detection","vision"],camera:["vision","opencv"],detect:["vision","yolo","opencv"],ai:["vision","yolo","jetson","nvidia","detection"],iot:["esp32","esp8266","embedded","sensor","raspberry"],embedded:["esp32","stm32","arduino","microcontroller","keil"],microcontroller:["esp32","esp8266","stm32","arduino"],cad:["fusion","solidworks","autocad","autodesk"],design:["cad","fusion","solidworks"],contact:["email","phone","linkedin","github"],hire:["available","open","contact"],resume:["cv"],cv:["resume"],intern:["internship","yaskawa","tamil","newsprint","training"],cgpa:["degree","education","karunya"],college:["karunya","degree","education"],university:["karunya","degree"],certificate:["cert","course","certified"],course:["certificate"],python:["programming","opencv"],programming:["python","c","matlab"],pneumatic:["hydraulics","sorting"],sort:["vision","conveyor","pneumatic"],instrument:["euphonium","band","music"],music:["euphonium","band","ncc"],volunteer:["rotaract","nss","community"]};function el(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?`${n.slice(0,-3)}y`:n.endsWith("ing")&&n.length>5?n.slice(0,-3):n.endsWith("ed")&&n.length>4||/(ch|sh|x|s|z)es$/.test(n)&&n.length>4?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&n.length>3?n.slice(0,-1):n}var Jx=Object.fromEntries(Object.entries(jx).map(([n,t])=>[el(n),t]));function Gc(n){return String(n).toLowerCase().replace(/['’]s\b/g,"").replace(/[^a-z0-9+#\s]/g," ").split(/\s+/).filter(t=>t&&!Zx.has(t)&&(t.length>1||t==="c")).map(el)}var Dr=n=>` ${String(n).toLowerCase().replace(/['’]s\b/g,"").replace(/[^a-z0-9+#\s]/g," ").replace(/\s+/g," ").trim()} `,Kx=new Set(["C","CAN"]),Qx={"Hydraulics & Pneumatics":["hydraulics","pneumatics"],"Keil \xB5Vision":["keil","uvision"],STM32F407:["stm32"],"Igus Delta":["igus"],"Dobot Magician":["dobot"],"Yaskawa HC10 Cobot":["hc10"],"Yaskawa Motoman":["motoman"],CAN:["can bus","can protocol","can communication"],"Team collaboration":["teamwork"],"Problem-solving":["problem solving"]},ty=new Set(["Robotics","Computer Vision"]),Wc=(n,t)=>String(n).split(t)[0].trim(),ey=n=>n.split(/\s+/).filter(t=>/^[A-Z]/.test(t)).map(t=>t[0]).join("");function ny(n){let t=Wc(n,","),e=t.split(/\s+/)[0],i=[n,t];return(/^[A-Z]{2,}$/.test(e)||e.length>=7)&&i.push(e),t.split(/\s+/).length>=3&&i.push(ey(t)),i}var iy=["soft skills","working style","team player"],sy={yaskawa:["yaskawa india","yaskawa internship","at yaskawa"],tnpl:["tnpl","tamil nadu newsprint","newsprint"],"siemens-training":["siemens training","siemens plc training","siemens course"],gdsc:["gdsc","google developer student club"],"iot-club":["iot club","iot and robotics club","robotics club"]},Hc=new WeakMap;function ry(n){if(Hc.has(n))return Hc.get(n);let t=n.person,e=n.levelLabels||{},i=u=>u.domains.map(b=>n.domainLabels[b]||b).join(", "),s={label:"Email Arjun",href:`mailto:${t.email}?subject=Opportunity%20for%20Arjun`},r={label:"Copy email",copy:t.email},o=[],a=u=>(u.tok=new Set(Gc(`${u.title} ${u.text} ${u.extra||""}`)),u.titleTok=new Set(Gc(u.title)),u.names=(u.names||[]).filter(Boolean).map(b=>Kx.has(b)?{cs:new RegExp(`(^|[^A-Za-z0-9+#])${b}($|[^A-Za-z0-9+#])`)}:{n:Dr(b),np:`${Dr(b).slice(0,-1)}s `}),u.refs=u.refs||[],u.followups=u.followups||[],o.push(u),u),l=u=>n.projects.filter(b=>b.skills.includes(u)),c=u=>n.experience.filter(b=>b.skills.includes(u)),h={label:"See it on the timeline",goto:"timeline"},f={label:"See the proof section",goto:"proof"};a({id:"about",type:"about",title:"About Arjun",text:t.summary,extra:"who profile background bio overview introduce",refs:[h,{label:"Meet the cell",goto:"cell"}],followups:["What PLCs has he used?","Why hire Arjun?"]}),a({id:"availability",type:"availability",title:"Availability",text:`${t.status}. Open to:
${t.openTo.map(u=>`- ${u}`).join(`
`)}`,extra:"available open hire hiring job opportunity work looking graduated",refs:[s,{label:"Download r\xE9sum\xE9",href:t.resume,action:"resume"}],followups:["How do I contact him?"]}),a({id:"contact",type:"contact",title:"Contact",text:`- Email: ${t.email}
- Phone: ${t.phone}
- LinkedIn: ${t.linkedin}
- GitHub: ${t.github}`,extra:"contact email phone reach linkedin github mobile call message",refs:[s,r,{label:"LinkedIn",href:t.linkedin},{label:"GitHub",href:t.github}],followups:["Can I download his r\xE9sum\xE9?"]}),a({id:"resume",type:"resume",title:"R\xE9sum\xE9",text:"The r\xE9sum\xE9 is a PDF with his education, internships, projects and certificates.",extra:"resume cv download pdf",refs:[{label:"Open r\xE9sum\xE9",href:t.resume,action:"resume"}]});let d=n.platforms||{};a({id:"platforms",type:"platforms",title:"Robots, PLCs and cells",text:`Robots: ${Je(d.robots||[])}. Siemens PLC families: ${Je(d.plcFamilies||[])}. Cells: ${Je(d.cells||[])}.`,extra:"robot robotics plc yaskawa igus dobot siemens festo cobot hardware equipment hands-on",refs:[{label:"See the skills map",goto:"skills"}]}),a({id:"site",type:"site",title:"About this site",text:"This is Arjun's portfolio, built as a working model of an automation cell. The 3D scene is driven by a PLC scan-cycle engine written in JavaScript, the ladder diagram shows that real logic, and everything runs in your browser. The only network request is the live GitHub feed. Nothing you type or click is sent anywhere.",extra:"site website page built made how works javascript threejs ladder simulation",refs:[{label:"See the ladder logic",goto:"logic"}]}),n.experience.filter(u=>u.kind!=="study").forEach(u=>a({id:`exp:${u.id}`,type:"experience",title:u.org,text:`${u.org}: ${u.role.toLowerCase()}, ${$c(u.start,u.end)}. ${u.text}${u.skills.length?` Skills: ${Je(u.skills)}.`:""}`,extra:`${u.role} ${u.skills.join(" ")} ${u.kind}`,names:[u.org,u.short,...sy[u.id]||[]],refs:[h],followups:["What projects has he built?"]})),n.projects.forEach(u=>{let b=u.summary?`${u.title}. ${u.summary}${u.facts?` ${u.facts.map(([N,M])=>`${N}: ${M}.`).join(" ")}`:""}`:`${u.title}. Area: ${i(u)}. Built with ${Je(u.tags)}.`;a({id:`proj:${u.id}`,type:"project",title:u.title,text:b,extra:`${u.tags.join(" ")} ${u.skills.join(" ")} ${i(u)}`,names:[u.title],project:u,refs:[{label:"See it in Builds",goto:"builds",filter:u.skills[0]?{skill:u.skills[0]}:{domain:u.domains[0]}},...(u.links||[]).map(N=>({label:N.label,href:N.href})),...u.summary?[]:[{label:"Ask Arjun about it",href:s.href}]],followups:["What projects has he built?"]})}),n.skills.forEach(u=>{a({id:`group:${u.group}`,type:"group",title:u.group,text:u.soft?`Working style: ${Je(u.items.map(b=>b.n))}.`:`${u.group}: ${u.items.map(b=>`${b.n} (${e[b.lvl]||"listed"})`).join(", ")}.`,extra:u.soft?"soft skills leadership teamwork collaboration management communication":"skills tools tech stack",names:u.soft?[...u.items.map(b=>b.n),...iy]:[],refs:[{label:"See the skills map",goto:"skills"}],group:u}),!u.soft&&u.items.forEach(b=>{let N=l(b.n),M=c(b.n),C=[...N.map(R=>R.title),...M.map(R=>R.org)],E=b.n.length>3?n.certs.filter(R=>Dr(R.title).includes(Dr(b.n))):[];a({id:`skill:${b.n}`,type:"skill",title:b.n,skill:b,group:u.group,text:`${b.n}: ${e[b.lvl]||"listed"} level, under ${u.group}.${C.length?` Used in ${jd(C,5)}.`:""}${E.length?` Certificate: ${E.map(R=>`${R.title} (${R.issuer})`).join("; ")}.`:""}`,extra:u.group,names:ty.has(b.n)?[]:[b.n,...Qx[b.n]||[]],refs:[...N.length?[{label:N.length===1?"Show this build":"Show these builds",goto:"builds",filter:{skill:b.n}}]:[],{label:"See the skills map",goto:"skills"}],followups:N.length?[`Tell me about ${N.sort((R,y)=>(y.featured?1:0)-(R.featured?1:0))[0].title}`]:[]})})}),n.education.forEach(u=>a({id:`edu:${u.title}`,type:"education",title:u.title,text:`${u.title}, ${u.org}, ${u.years}. ${u.result}.`,extra:"education school college degree cgpa marks percent graduate study",names:[u.title],refs:[f]})),n.awards.forEach(u=>a({id:`award:${u.title}`,type:"award",title:u.title,text:`${u.title}, ${u.org}, ${u.when}.`,extra:"award honour recognition won",names:[u.title,Wc(u.org,",")],refs:[f]})),n.community.forEach(u=>a({id:`com:${u.title}`,type:"community",title:u.title,text:`${u.title}. ${u.text} ${u.when}.`,extra:"community club volunteer hobby extracurricular",names:ny(u.title),refs:[f]})),n.certs.forEach(u=>a({id:`cert:${u.title}`,type:"cert",title:u.title,text:`${u.title}, from ${u.issuer}.`,extra:`certificate course ${u.topic} ${u.issuer}`,names:[u.title,u.title.includes(":")?Wc(u.title,":"):""],refs:[{label:"See all certificates",goto:"proof"}]}));let g=o.length,_=new Map,w=new Map;o.forEach(u=>{u.tok.forEach(b=>_.set(b,(_.get(b)||0)+1)),u.titleTok.forEach(b=>w.set(`${u.type}|${b}`,(w.get(`${u.type}|${b}`)||0)+1))});let m={data:n,docs:o,N:g,df:_,titleDf:w,mail:s,copyMail:r,email:t.email,byId:new Map(o.map(u=>[u.id,u])),projectsFor:l,rolesFor:c,areas:i};return Hc.set(n,m),m}var oy=(n,t,e)=>n.cs?n.cs.test(t):e.includes(n.n)||e.includes(n.np);function ay(n,t){let e=Gc(t),i=Dr(t),s=new Map;e.forEach(a=>s.set(a,1)),e.forEach(a=>(Jx[a]||[]).forEach(l=>{let c=el(l);s.has(c)||s.set(c,.5)}));let r=a=>Math.log(1+n.N/(n.df.get(a)||n.N)),o=n.docs.map(a=>{let l=0;s.forEach((h,f)=>{a.tok.has(f)&&(l+=h*r(f)*(a.titleTok.has(f)?2:1))});let c=a.names.some(h=>oy(h,t,i));return c&&(l+=8),{d:a,s:l,named:c}}).filter(a=>a.s>0).sort((a,l)=>l.s-a.s);return{qt:e,scored:o}}var ly=new Set("project build vision robot robotic automation control system based industrial autonomous detection real time management wireless using via plc siemens digital prototype demonstration analysis kinematic embedded iot hydraulic pneumatic sensor communication tool internship training club member work experience level scale smart".split(" ").map(el));function qd(n,t,e){let i=[...t.titleTok].filter(r=>!ly.has(r)),s=[...new Set(e)].filter(r=>i.includes(r));return s.length>=2?!0:s.length===1&&s[0].length>3&&n.titleDf.get(`${t.type}|${s[0]}`)===1&&s.length/i.length>=.5}var Ni=["What PLCs has he used?","Show vision projects","Why hire Arjun?","How do I contact him?"],Ae=(n,t=[],e=[],i=!0)=>({text:n,refs:t,followups:e,found:i}),cy=(n,t)=>Ae(`${t} on this site. The quickest way to find out is to email him: ${n.email}.`,[n.mail,n.copyMail],Ni,!1),hy=[[/\b(salary|ctc|compensation|stipend|pay expectation|expected pay|how much (does|would) (he|arjun) (earn|want|expect))\b/,"His salary expectation isn't"],[/\b(notice period|start date|joining date|when (can|could|will) (he|arjun) (start|join)|how soon (can|could) (he|arjun))\b/,"His notice period and start date aren't"],[/\b(relocat\w*|willing to (move|relocate)|open to (moving|relocating)|work (remotely|from home)|remote work)\b/,"Whether he will relocate or work remotely isn't"],[/\b(where (does|do|is) (he|arjun|you) (live|based|located|stay|from)|(his|your|current|home|residential|postal) (location|city|address)|(which|what) (city|town|country|state|place) (is|does) (he|arjun)|based in)\b/,"Where he lives isn't"],[/\b(how old|age|date of birth|birthday|dob)\b/,"His age isn't"],[/\b(references?|referees?)\b/,"References aren't"],[/\b(visa|citizenship|nationality|work permit|passport)\b/,"His visa or citizenship status isn't"],[/\b(married|marital|religion|gender|caste|girlfriend|boyfriend|family)\b/,"That personal detail isn't"]];function uy(n){let t=n.data,e=t.person,i=t.experience.find(h=>h.kind==="study"),s=t.education[0],r=t.experience.filter(h=>h.role==="Internship"),o=t.certs.find(h=>/siemens/i.test(h.issuer)),a=t.platforms||{},l=t.experience.filter(h=>h.kind==="club").map(h=>h.org),c=[`${e.status}. ${s.title}, ${s.result}${i?`, finished ${Nr(i.end)}`:""}.`,`- Industry time: ${tl(r.length,"internship","internships")}, at ${Yx(Je(r.map(h=>h.org)))} ${r[0]?Zd(r[0].text):""}`,`- PLC depth: ${o?`${o.title} (${o.issuer}), `:""}${Je(a.plcFamilies||[])} in TIA Portal, and a ladder-logic build with HMI faceplates.`,`- Hands-on hardware: ${Je(a.robots||[])}, and the ${Je(a.cells||[])} cell.`,`- Breadth: ${t.projects.length} builds in ${Lr(Object.keys(t.domainLabels).length)} areas (${Object.values(t.domainLabels).join(", ")}), plus ${t.certs.length} certificates and courses.`,`- Teamwork: ${Je(t.community.map(h=>Xd(h.title)))}, plus ${Je(l.map(Xd))}.`];return Ae(c.join(`
`),[n.mail,{label:"See the builds",goto:"builds"},{label:"Download r\xE9sum\xE9",href:e.resume,action:"resume"}],["What PLCs has he used?","Which robots has he worked with?","How do I contact him?"])}var dy=["Siemens","NVIDIA","Autodesk","AWS","Google","Microsoft","Cisco"];function Yd(n,t){let e=n.data.certs,i=dy.map(r=>e.find(o=>o.issuer===r)).filter(Boolean),s=t?`${e.length} certificates and courses. Examples: ${i.map(r=>`${r.title} (${r.issuer})`).join("; ")}.`:`${e.length} certificates and courses, from issuers such as ${Je(i.map(r=>r.issuer))}.`;return Ae(s,[{label:"See all certificates",goto:"proof"}],["What PLCs has he used?"])}function fy(n,t){let e=n.data,i=e.domainLabels[t]||t,s=e.projects.filter(o=>o.domains.includes(t));if(!s.length)return null;let r=s.map(o=>`- ${o.title}${o.featured?" (shown in detail)":""}`);return Ae(`${tl(s.length,"build","builds")} in ${i}:
${r.join(`
`)}`,[{label:`Show ${i} builds`,goto:"builds",filter:{domain:t}}],s.filter(o=>o.featured).slice(0,1).map(o=>`Tell me about ${o.title}`))}function py(n,t){let e=n.projectsFor(t.skill.n);return e.length?Ae(`${tl(e.length,"build uses","builds use")} ${t.skill.n}:
${e.map(i=>`- ${i.title}`).join(`
`)}`,[{label:"Show these builds",goto:"builds",filter:{skill:t.skill.n}},{label:"See the skills map",goto:"skills"}],[`Tell me about ${e[0].title}`]):Zn(t,"")}var my=[["vision",/\b(vision|opencv|yolo|camera|detect\w*|image|face)\b/],["automation",/\b(automation|plc|siemens|industrial|scada)\b/],["embedded",/\b(embedded|iot|esp32|esp8266|arduino|stm32|microcontroller|sensors?)\b/],["robotics",/\b(robot\w*|mechanical|arm|cad|fusion)\b/]],gy=[{id:"plc",title:"PLC and automation",q:/\b(plcs?|siemens|tia|ladder|s7|scada|codesys|festo|programmable)\b/,group:"Automation",skill:n=>/plc|tia|ladder|scada|codesys|festo/i.test(n),role:/plc|siemens|scada/i,domain:"automation",intro:n=>((n.platforms||{}).plcFamilies||[]).length?`Siemens ${Je(n.platforms.plcFamilies)} PLCs, programmed in TIA Portal.`:""},{id:"robots",title:"Robots and robotics",q:/\b(robots?|cobots?|yaskawa|igus|dobot|motoman|manipulators?|robotic)\b/,skill:n=>/yaskawa|igus|dobot|robotics/i.test(n),role:/robot|yaskawa|motoman/i,domain:"robotics",intro:n=>((n.platforms||{}).robots||[]).length?`Hands-on with ${Je(n.platforms.robots)}.`:""},{id:"vision",title:"Vision and AI",q:/\b(vision|opencv|yolo|camera|detection|jetson|image|computer vision)\b/,skill:n=>/vision|opencv|jetson/i.test(n),role:/vision|opencv|jetson|camera/i,domain:"vision"},{id:"embedded",title:"Embedded and IoT",q:/\b(embedded|iot|microcontrollers?|esp32|esp8266|arduino|stm32|raspberry|firmware)\b/,skill:n=>/esp32|esp8266|arduino|stm32|raspberry|jetson/i.test(n)||n==="CAN",role:/iot|embedded|raspberry/i,domain:"embedded"},{id:"cad",title:"CAD and design",q:/\b(cad|fusion|solidworks|autocad|digital twins?)\b/,skill:n=>/fusion|solidworks|autocad/i.test(n),proj:/fusion|solidworks|autocad|digital twin/i},{id:"prog",title:"Programming",q:/\b(programming|languages?|coding|code|python|matlab)\b/,group:"Programming"}];function _y(n,t){let e=n.data,i=e.levelLabels||{},s=[];e.skills.forEach(h=>{h.soft||h.items.forEach(f=>{(t.group&&h.group===t.group||t.skill&&t.skill(f.n))&&s.push(f)})});let r=t.role?e.experience.filter(h=>h.kind!=="study"&&t.role.test(`${h.org} ${h.role} ${h.text} ${h.skills.join(" ")}`)):[],o=new Set(s.map(h=>h.n)),a=e.projects.filter(h=>t.domain&&h.domains.includes(t.domain)||h.skills.some(f=>o.has(f))||t.proj&&t.proj.test(`${h.title} ${h.tags.join(" ")} ${h.skills.join(" ")}`)).sort((h,f)=>(f.featured?1:0)-(h.featured?1:0)),l=[t.intro&&t.intro(e)||`${t.title}:`];s.length&&l.push(`- Skills: ${s.map(h=>`${h.n} (${i[h.lvl]||"listed"})`).join(", ")}.`),r.length&&l.push(`- On the job: ${r.map(h=>`${h.org} (${h.role.toLowerCase()}, ${$c(h.start,h.end)})`).join("; ")}.`),a.length&&l.push(`- Builds: ${jd(a.map(h=>h.title),4)}.`);let c=[];if(t.domain&&a.length)c.push({label:`Show ${e.domainLabels[t.domain]||t.domain} builds`,goto:"builds",filter:{domain:t.domain}});else{let h=s.find(f=>n.projectsFor(f.n).length);h&&c.push({label:`Show builds that use ${h.n}`,goto:"builds",filter:{skill:h.n}})}return c.push({label:"See the skills map",goto:"skills"}),r.length&&c.push({label:"See the timeline",goto:"timeline"}),Ae(l.join(`
`),c,a.filter(h=>h.featured).slice(0,1).map(h=>`Tell me about ${h.title}`))}function Zn(n,t,e,i){let s=`${t}${n.text}`,r=[...n.refs];if(e&&i){let o=e.find(a=>a.d!==n&&a.d.type!==n.type&&a.s>=i.s*.6&&a.s>=2.4&&["project","experience"].includes(a.d.type));o&&(s+=`
Also relevant: ${o.d.title}.`,r=[...r,...o.d.refs.slice(0,1)])}return Ae(s,r.slice(0,4),n.followups.slice(0,3))}function Jd(n,t){let e=ry(t),i=String(n||"").trim().slice(0,300),s=t.person;if(!i)return Ae("Ask me about his PLC work, robots, projects, education or how to reach him.",[],Ni,!1);let r=/^\s*(hi+|hello|hey|namaste|good (morning|afternoon|evening))\b[\s,!.]*/,o=r.test(i.toLowerCase()),a=i.toLowerCase().replace(r,"").replace(/['’]s\b/g," is");if(!a.replace(/[^a-z0-9]/g,""))return o?Ae("Hello. I answer questions about Arjun using only what is on this site. Ask about his PLC work, robots, projects or how to reach him.",[],Ni):Ae("Ask me about his PLC work, robots, projects, education or how to reach him.",[],Ni,!1);let{qt:l,scored:c}=ay(e,i);if(/\b(thanks|thank you|thx|cheers)\b/.test(a))return Ae(`You're welcome. If you would like to talk to Arjun directly, the quickest way is email: ${e.email}.`,[e.mail],[]);if(/\b(who are you|what are you|are you (an? )?(ai|bot|robot|chatgpt|gpt|claude|llm|real|human)|which model|how do you work)\b/.test(a))return Ae("I am a small search program that runs in your browser. I look for the closest entries in this site's own content and read them back. There is no AI model behind me and nothing you type leaves this page, so I cannot invent facts. If something is not on the site, I will say so.",[{label:"About this site",goto:"logic"}],Ni);if(/^\s*(help|\?|what can (you|i) (do|ask)|what (do|can) you (know|answer)|how (do|can) i (use|ask))/.test(a))return Ae(`Ask me about:
- his PLC and robot experience
- projects, by area or by skill
- internships, education, certificates and awards
- how to contact him or get his r\xE9sum\xE9
Type / to see the console commands.`,[],Ni);for(let[M,C]of hy)if(M.test(a))return cy(e,C);if(/\bwhy\b.*\b(hire|pick|choose)\b|\bstrengths?\b|\bwhat makes (him|arjun)\b|\bsell (me|him)\b|\bbest (reason|fit)\b|\bwhat (can|does) (he|arjun) (bring|offer)\b/.test(a))return uy(e);if(/\bhow many\b.*\b(projects?|builds?|certificates?|certifications?|courses?)\b/.test(a)){if(/certific|course/.test(a))return Yd(e,!1);let M=Object.entries(t.domainLabels).map(([C,E])=>`${E} ${t.projects.filter(R=>R.domains.includes(C)).length}`);return Ae(`${t.projects.length} builds. ${Wd(Lr(t.projects.filter(C=>C.featured).length))} are shown in detail and the rest are in the register. By area (some count twice): ${M.join(", ")}.`,[{label:"See the builds",goto:"builds"}],["Show vision projects","Show robotics projects"])}if(/\b(resume|résumé|cv|curriculum vitae)\b/.test(a))return Zn(e.byId.get("resume"),"Yes. ");if(/\b(contact|e-?mail|phone|call him|mobile|reach|linkedin|get in touch|message him|talk to|speak to|connect with)\b/.test(a)){let M=e.byId.get("contact");return Ae(M.text,M.refs,M.followups)}if(/\bgithub\b/.test(a)&&!/\b(projects?|builds?)\b/.test(a))return Ae(`GitHub: ${s.github}. The Builds section shows a live feed of his most recent repositories.`,[{label:"Open GitHub",href:s.github},{label:"See the builds",goto:"builds"}],[]);if(/\b(available|availability|open to work|looking for (a )?(job|work|role)|hiring|job search|open for)\b/.test(a))return Zn(e.byId.get("availability"),"");if(/\b(who (is|are) (he|arjun)|tell me about (him|arjun|himself|yourself)|about arjun|introduce|his (bio|profile|summary)|overview of arjun|summary of arjun)\b/.test(a)||/\bwhat does (he|arjun) do[?.! ]*$/.test(a))return Zn(e.byId.get("about"),"");if(/\b(this (site|website|page|portfolio)|the (site|website)|how (is|was) (this|it) (built|made)|built with|made with|three\.?js)\b/.test(a))return Zn(e.byId.get("site"),"");let h=c.find(M=>M.named&&["project","experience","award","education","community"].includes(M.d.type)),f=c.find(M=>["project","experience"].includes(M.d.type)&&qd(e,M.d,l)),d=h||f;if(d)return Zn(d.d,"",c,d);let g=c.find(M=>M.named&&M.d.type==="group");if(g)return Zn(g.d,"",c,g);let _=/\b(projects?|builds?|built|prototypes?|worked on)\b/.test(a),w=c.find(M=>M.named&&M.d.type==="skill");if(w)return _?py(e,w.d):Zn(w.d,"",c,w);let m=c.find(M=>M.d.type==="cert"&&(M.named||qd(e,M.d,l)));if(m)return Zn(m.d,"",c,m);let u=my.find(([,M])=>M.test(a));if(_&&u){let M=fy(e,u[0]);if(M)return M}if(_){let M=t.projects.filter(E=>E.featured),C=/\b(best|favou?rite|proudest|top|main|key|featured|highlights?|biggest)\b/.test(a);return Ae(`${C?"I can't rank them, but":`${t.projects.length} builds in ${Lr(Object.keys(t.domainLabels).length)} areas: ${Object.values(t.domainLabels).join(", ")}.`} ${C?Lr(M.length):Wd(Lr(M.length))} are shown in detail:
${M.map(E=>`- ${E.title}`).join(`
`)}${C?"":`
The rest are in the register.`}`,[{label:"See the builds",goto:"builds"}],["Show vision projects","Show robotics projects","Show embedded projects"])}if(/\b(education|degree|cgpa|gpa|college|university|school|stud(y|ied|ying)|marks|grades?|graduat\w*|qualifications?|b\.?tech|academic)\b/.test(a)){let M=t.education[0];return Ae(`${M.title}, ${M.org}, ${M.years}. ${M.result}.
Earlier: ${t.education.slice(1).map(C=>`${C.title} (${C.result})`).join("; ")}.`,[{label:"See the proof section",goto:"proof"}],["What certificates does he have?"])}if(/\b(certificates?|certifications?|certified|courses?|licen[cs]es?)\b/.test(a))return Yd(e,!0);if(/\b(awards?|honou?rs?|achievements?|recognition|prizes?|won)\b/.test(a))return Ae(`${t.awards.map(M=>`${M.title}, ${M.org}, ${M.when}`).join(". ")}.`,[{label:"See the proof section",goto:"proof"}],[]);if(/\b(clubs?|community|volunteer\w*|extracurricular|activities|hobbies|interests?|outside|ncc|rotaract|nss|band|music|musical|instruments?|euphonium)\b/.test(a)){let M=t.experience.filter(C=>C.kind==="club");return Ae(`${t.community.map(C=>`${C.title} (${C.text.split(".")[0].toLowerCase()})`).join("; ")}. Clubs: ${M.map(C=>C.org).join("; ")}.`,[{label:"See the proof section",goto:"proof"}],[])}let b=gy.find(M=>M.q.test(a));if(b)return _y(e,b);if(/\b(internships?|experience|industry|jobs?|where (has|did|does) (he|arjun) work|work history|employment|fresher|freshers|full[- ]time)\b/.test(a)){let M=t.experience.filter(R=>R.kind==="industry"),C=t.experience.find(R=>R.kind==="study"),E=M.map(R=>`- ${R.org}: ${R.role.toLowerCase()}, ${$c(R.start,R.end)}. ${Zd(R.text)}`);return Ae(`${C?`He finished his degree in ${Nr(C.end)}. `:""}Industry experience so far, ${tl(M.length,"placement","placements")}:
${E.join(`
`)}`,[{label:"See the timeline",goto:"timeline"}],["Tell me about the Yaskawa internship","What PLCs has he used?"])}if(/\b(skills?|tech stack|technolog\w*|tools?|software|stack)\b/.test(a)){let M=t.skills.filter(C=>!C.soft).map(C=>`- ${C.group}: ${C.items.slice(0,5).map(E=>E.n).join(", ")}${C.items.length>5?", and more":""}`);return Ae(`Skills by group:
${M.join(`
`)}`,[{label:"See the skills map",goto:"skills"}],["What PLCs has he used?","Does he know Python?"])}let N=c[0];return N&&N.s>=2.4&&!["group","site"].includes(N.d.type)?Zn(N.d,"",c,N):Ae(`I couldn't find that on this site. I can answer questions about his PLC work, robots, vision projects, internships, education, certificates and how to contact him. For anything else, email him: ${e.email}.`,[e.mail,e.copyMail],Ni,!1)}var Xc=Ni;var Ur=[{name:"help",desc:"List the commands"},{name:"about",desc:"Who Arjun is"},{name:"experience",desc:"Internships and training"},{name:"projects",args:"[area]",desc:"Builds, or one area: automation, robotics, vision, embedded"},{name:"skills",args:"[name]",desc:"All skills, or one skill and where he used it"},{name:"education",desc:"Degree and results"},{name:"certs",desc:"Certificates and courses"},{name:"contact",desc:"Email, phone and links"},{name:"resume",desc:"Open the r\xE9sum\xE9 (PDF)"},{name:"theme",desc:"Switch between night and daylight"},{name:"start",desc:"Start the cell"},{name:"stop",desc:"Stop the cell"},{name:"estop",desc:"Press the emergency stop"},{name:"release",desc:"Release the emergency stop"},{name:"reset",desc:"Reset the batch counter"},{name:"status",desc:"Show the state of the cell"},{name:"ls",desc:"List the sections of this page"},{name:"cd",args:"<section>",desc:"Go to a section"},{name:"clear",desc:"Clear the screen"},{name:"close",desc:"Close the console"}],xy=["whoami","sound","sudo"],yy={exit:"close",quit:"close",cls:"clear",cv:"resume",email:"contact","?":"help",man:"help"},vy=/^(help|clear|cls|ls|exit|quit|whoami|cd(\s.*)?)$/i,by=[["cell","The cell, live in 3D"],["logic","The ladder logic behind it"],["builds","Projects and the live GitHub feed"],["skills","Skills map"],["timeline","Timeline"],["proof","Education, awards and certificates"],["contact","Contact"]];function Sy(n,t){let e=Array.from({length:n.length+1},(i,s)=>[s,...Array(t.length).fill(0)]);for(let i=1;i<=t.length;i++)e[0][i]=i;for(let i=1;i<=n.length;i++)for(let s=1;s<=t.length;s++)e[i][s]=Math.min(e[i-1][s]+1,e[i][s-1]+1,e[i-1][s-1]+(n[i-1]===t[s-1]?0:1));return e[n.length][t.length]}function Kd(n,t){let e=null,i=99;for(let s of t){let r=s.startsWith(n)||n.startsWith(s)?.5:Sy(n,s);r<i&&(i=r,e=s)}return i<=Math.max(2,Math.floor(n.length/3))?e:null}var My=(n,t)=>{let e=0;for(let i of t)i===n[e]&&e++;return e===n.length};function wy(n){return n=n.toLowerCase(),n?Ur.map((t,e)=>({c:t,i:e,sc:t.name===n?100:t.name.startsWith(n)?80:t.name.includes(n)?50:My(n,t.name)?20:0})).filter(t=>t.sc>0).sort((t,e)=>e.sc-t.sc||t.i-e.i).map(t=>t.c):Ur}var Ey=n=>!!n&&(/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n.isContentEditable||!!n.closest('[role="textbox"]')),Ty='button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';function Qd({data:n,bus:t,actions:e={}}={}){let i=di(),s=n.person,r=v=>{t&&t.emit("unlock",v)},o=[],a=0,l=null,c,h,f,d,g=!1,_=null,w=null,m={items:[],at:0},u=!1,b=!1,N=[],M=!1,C=[],E=null,R=()=>{c&&(c.scrollTop=c.scrollHeight)};function y(v){for(c.append(v);c.children.length>80;)c.firstElementChild.remove();R()}function S(v){d.textContent="",setTimeout(()=>{d.textContent=String(v).replace(/^- /gm,"")},30)}function O(v){let p=[],x=null;for(let P of v.split(`
`))P.startsWith("- ")?(x||(x=A("ul",{class:"cs-list"}),p.push(x)),x.append(A("li",null,P.slice(2)))):(x=null,P.trim()&&p.push(A("p",null,P)));return p}async function k(v){if(e.copy)return e.copy(v);try{return await navigator.clipboard.writeText(v),!0}catch{return!1}}function W(v,p){if(v.run){ct(v.run);return}if(v.copy){Promise.resolve(k(v.copy)).then(x=>{let P=v.label;p.textContent=x?"Copied":"Could not copy",setTimeout(()=>{p.textContent=P},1800)});return}if(v.action==="resume"){e.openResume?e.openResume():window.open(v.href,"_blank","noopener");return}v.filter&&e.filter&&e.filter(v.filter),v.goto&&(ee({restore:!1}),e.goto&&e.goto(v.goto))}function D(v){if(v.href&&!v.action&&!v.copy&&!v.run){let x=/^https?:/.test(v.href);return A("a",{class:"btn btn--small cs-ref",href:v.href,target:x?"_blank":null,rel:x?"noopener noreferrer":null},v.label)}let p=A("button",{type:"button",class:"btn btn--small cs-ref"},v.label);return p.addEventListener("click",()=>W(v,p)),p}let U=v=>A("div",{class:"cs-chips",role:"group","aria-label":"Suggested questions"},v.map(p=>A("button",{type:"button",class:"cs-chip",onclick:()=>ct(p)},p))),F=v=>y(A("div",{class:"cs-echo"},A("span",{class:"cs-caret","aria-hidden":"true"},">"),A("span",null,v)));function L(v,p){let x=document.createTreeWalker(v,NodeFilter.SHOW_TEXT),P=[];for(let ot=x.nextNode();ot;ot=x.nextNode())P.push({n:ot,t:ot.nodeValue});let I=P.reduce((ot,ft)=>ot+ft.t.length,0);if(i||!I){p();return}M=!0,P.forEach(ot=>{ot.n.nodeValue=""});let V=A("span",{class:"cs-cur","aria-hidden":"true"}),tt=Math.max(2,Math.ceil(I/42)),Z=0,B=0,st=!1,ht=()=>{st||(st=!0,cancelAnimationFrame(B),P.forEach(ot=>{ot.n.nodeValue=ot.t}),V.remove(),w=null,M=!1,p(),nt())},lt=()=>{let ot=tt;for(;ot>0&&Z<P.length;){let ft=P[Z],Rt=ft.n.nodeValue.length,Xt=Math.min(ot,ft.t.length-Rt);ft.n.nodeValue=ft.t.slice(0,Rt+Xt),ot-=Xt,Rt+Xt>=ft.t.length&&Z++}Z<P.length?(P[Z].n.parentNode.insertBefore(V,P[Z].n.nextSibling),R(),B=requestAnimationFrame(lt)):ht()};w=ht,lt()}function z(v){let p=A("div",{class:"cs-body"},O(v.text)),x=A("div",{class:"cs-msg"},p);y(x),L(p,()=>{v.refs&&v.refs.length&&x.append(A("div",{class:"cs-refs"},v.refs.map(D))),v.followups&&v.followups.length&&x.append(U(v.followups)),R(),S(v.text)})}function q(v,p=[]){let x=v.map(I=>Array.isArray(I)?A("div",{class:`cs-l cs-l--${I[1]}`},I[0]):A("div",{class:"cs-l"},I)),P=A("div",{class:"cs-msg cs-msg--sys"},A("div",{class:"cs-out"},x));p.length&&P.append(A("div",{class:"cs-refs"},p.map(D))),y(P),S(v.map(I=>Array.isArray(I)?I[0]:I).filter(Boolean).join(". "))}let Y=v=>z(Jd(v,n));function Q(v,p){if(M){C.push([v,p]);return}y(A("div",{class:`cs-notice cs-notice--${p||"info"}`,role:"status"},v))}let nt=()=>{let v=C;C=[],v.forEach(([p,x])=>Q(p,x))},mt=()=>by.filter(([v])=>document.getElementById(v)),pt=v=>{let p=Math.max(...v.map(([x])=>x.length));return v.map(([x,P])=>`${x.padEnd(p+2)}${P}`)},yt=(v,p)=>{let x=e.cell;if(!x||!x[v]){q(["The cell is not available on this page."]);return}x[v](),q([p],[{label:"Watch the cell",goto:"cell"}])},ut=v=>{let p=v.toLowerCase(),x=Object.entries(n.domainLabels).find(([P,I])=>P.startsWith(p)||I.toLowerCase().startsWith(p));return x?x[0]:null},Mt=v=>{let p=v.toLowerCase();for(let x of n.skills)for(let P of x.items)if(P.n.toLowerCase()===p)return P.n;for(let x of n.skills)for(let P of x.items)if(P.n.toLowerCase().startsWith(p))return P.n;return null},X={help(){let v=Ur.map(p=>{let x=A("button",{type:"button",class:"cs-row"},A("span",{class:"cs-cmd"},`/${p.name}`,p.args?A("i",null,` ${p.args}`):null),A("span",{class:"cs-desc"},p.desc));return x.addEventListener("click",()=>{p.args?(h.value=`/${p.name} `,gt(),h.focus()):ct(`/${p.name}`)}),x});y(A("div",{class:"cs-msg cs-msg--sys"},A("p",{class:"cs-lead"},"Commands start with a slash. Anything else you type is a question."),A("div",{class:"cs-help"},v),U(Xc))),S("Commands start with a slash. Anything else is a question.")},about:()=>Y("Tell me about Arjun"),experience:()=>Y("What internships has he done?"),projects(v){if(!v)return Y("What projects has he built?");let p=ut(v);if(p)return Y(`Show ${p} projects`);let x=Mt(v);if(x)return Y(`Which projects use ${x}?`);q([`No area or skill called "${v}".`,`Areas: ${Object.keys(n.domainLabels).join(", ")}.`])},skills(v){if(!v)return Y("What skills does he have?");let p=Mt(v);return Y(`Does he know ${p||v}?`)},education:()=>Y("What is his education?"),certs:()=>Y("What certificates does he have?"),contact:()=>Y("How do I contact him?"),resume(){q(["Opening the r\xE9sum\xE9 (PDF)."]),e.openResume?e.openResume():window.open(s.resume,"_blank","noopener")},theme(){e.toggleTheme&&e.toggleTheme(),q([`Theme: ${document.documentElement.getAttribute("data-theme")==="light"?"daylight":"night"}.`])},start:()=>yt("start","Start pressed. The belt should run and the robot sort what arrives."),stop:()=>yt("stop","Stop pressed. The belt halts after the current part."),estop:()=>yt("estop","Emergency stop pressed. Everything is frozen. Use /release, then /start."),release:()=>yt("release","Emergency stop released. Use /start to run again."),reset:()=>yt("reset","Reset pressed. The batch counter is cleared."),status(){let v=e.cell;if(!v||!v.status){q(["The cell is not available on this page."]);return}q(pt(v.status()),[{label:"Watch the cell",goto:"cell"}])},ls(){let v=mt();q(pt(v.map(([p,x])=>[p,x])),v.map(([p])=>({label:p,goto:p})))},cd(v){let p=mt();if(!v){q(["usage: cd <section>",`sections: ${p.map(([I])=>I).join(", ")}`]);return}let x=v.replace(/^\/|\/$/g,"").toLowerCase(),P=p.find(([I])=>I===x)||p.find(([I])=>I.startsWith(x));if(!P){let I=Kd(x,p.map(([V])=>V));q([`cd: no section called ${v}.`,I?`Did you mean ${I}?`:`sections: ${p.map(([V])=>V).join(", ")}`]);return}q([`Going to ${P[0]}.`]),ee({restore:!1}),e.goto&&e.goto(P[0])},clear(){c.replaceChildren(),Ct()},close(){ee()},whoami:()=>q(["recruiter, most likely.","Nothing you type here leaves your browser."]),sound:()=>q(["There is no audio on this site, so there is nothing to turn on."]),sudo(v){let p=v.toLowerCase().replace(/\s+/g," ").trim();p==="hire arjun"?(r("secret"),q(["password for recruiter: ************",["Access granted.","ok"],"",...pt([["candidate",s.name],["status",s.status],["scan time","20 ms"],["start date","ask him"]]),"","Offer letter queued. Please attach a salary, a start date and a laptop."],[{label:"Email Arjun",href:`mailto:${s.email}?subject=Opportunity%20for%20Arjun`},{label:"Copy email",copy:s.email}])):q(p?["recruiter is not in the sudoers file. This incident will be reported to nobody."]:["usage: sudo <command>"])}};function it(v){let p=v.replace(/^\//,"").trim().match(/^(\S+)\s*(.*)$/);if(!p)return;let x=p[1].toLowerCase();if(x=yy[x]||x,!X[x]||!(Ur.some(P=>P.name===x)||xy.includes(x))){let P=Kd(x,Ur.map(I=>I.name));q([`Unknown command: /${p[1]}`,P?`Did you mean /${P}?`:"Type /help for the list."],P?[{label:`Run /${P}`,run:`/${P}`}]:[]);return}!b&&x!=="close"&&x!=="clear"&&(b=!0,r("console-cmd")),X[x](p[2].trim())}function ct(v){let p=String(v).trim();p&&(w&&w(),o[o.length-1]!==p&&o.push(p),a=o.length,F(p),h.value="",dt(),p.startsWith("/")||/^sudo(\s|$)/i.test(p)||vy.test(p)?it(p):(Y(p),u||(u=!0,r("console-ask"))))}function Ct(){y(A("div",{class:"cs-msg cs-intro"},A("p",null,"Ask about Arjun, or type / for commands. I read only what is on this site, so I cannot make things up."),U(Xc)))}function dt(){m={items:[],at:0},f&&(f.hidden=!0,f.replaceChildren()),h&&(h.setAttribute("aria-expanded","false"),h.removeAttribute("aria-activedescendant"))}function zt(){f.replaceChildren(...m.items.map((p,x)=>{let P=A("li",{id:`cs-opt-${x}`,role:"option",class:"cs-opt","aria-selected":String(x===m.at)},A("span",{class:"cs-cmd"},`/${p.name}`,p.args?A("i",null,` ${p.args}`):null),A("span",{class:"cs-desc"},p.desc));return P.addEventListener("mousedown",I=>I.preventDefault()),P.addEventListener("click",()=>wt(p,!0)),P})),h.setAttribute("aria-activedescendant",`cs-opt-${m.at}`);let v=f.children[m.at];v&&v.scrollIntoView({block:"nearest"})}function gt(){let v=h.value,p=/^\/([a-z?]*)$/i.exec(v);if(!p){dt();return}let x=wy(p[1]);if(!x.length){dt();return}m={items:x,at:0},f.hidden=!1,h.setAttribute("aria-expanded","true"),zt(),R()}function wt(v,p){if(p&&!v.args){ct(`/${v.name}`);return}h.value=`/${v.name}${v.args?" ":""}`,dt(),h.focus(),p&&v.args&&ct(`/${v.name}`)}function Nt(v){if(v)for(let p of Array.from(document.body.children))p===l||p.id==="toasts"||p.tagName==="SCRIPT"||p.inert||(p.inert=!0,N.push(p));else N.splice(0).forEach(p=>{p.inert=!1})}function Et(){let v=window.visualViewport;!v||!l||(l.style.setProperty("--cs-h",`${v.height}px`),l.style.setProperty("--cs-y",`${v.offsetTop}px`))}function Tt(v){if(v.key==="Escape"){v.stopPropagation(),f.hidden?ee():dt();return}if(v.key==="Tab"){let p=Array.from(l.querySelectorAll(Ty)).filter(I=>I.offsetParent!==null);if(!p.length)return;let x=p[0],P=p[p.length-1];v.shiftKey&&document.activeElement===x?(v.preventDefault(),P.focus()):!v.shiftKey&&document.activeElement===P?(v.preventDefault(),x.focus()):v.target===h&&!f.hidden&&!v.shiftKey&&(v.preventDefault(),wt(m.items[m.at],!1))}}function Qt(v){if(!f.hidden){if(v.key==="ArrowDown"){v.preventDefault(),m.at=(m.at+1)%m.items.length,zt();return}if(v.key==="ArrowUp"){v.preventDefault(),m.at=(m.at-1+m.items.length)%m.items.length,zt();return}if(v.key==="Enter"&&!v.isComposing){let p=h.value.slice(1).toLowerCase(),x=m.items[m.at];x&&p!==x.name&&(v.preventDefault(),wt(x,!0))}return}v.key==="ArrowUp"&&o.length&&(h.value===""||a<o.length)?(v.preventDefault(),a===o.length&&(a=o.length),a=Math.max(0,a-1),h.value=o[a]):v.key==="ArrowDown"&&a<o.length&&(v.preventDefault(),a=Math.min(o.length,a+1),h.value=a===o.length?"":o[a])}let de=v=>{(!v.target.closest||!v.target.closest(".cs-log, .cs-pal"))&&v.preventDefault()};function Ce(){let v=Lt("svg",{viewBox:"0 0 16 16",width:14,height:14,"aria-hidden":"true",focusable:"false"},Lt("path",{d:"M3 3l10 10M13 3L3 13",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round"})),p=A("button",{type:"button",class:"cs-x","aria-label":"Close the console"},v);p.addEventListener("click",()=>ee()),c=A("div",{class:"cs-log",role:"log","aria-label":"Conversation","aria-live":"off",tabindex:"0"}),f=A("ul",{class:"cs-pal",id:"cs-pal",role:"listbox","aria-label":"Commands",hidden:!0});let x=window.matchMedia("(max-width: 640px)").matches;h=A("input",{id:"cs-input",class:"cs-input",type:"text",role:"combobox",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"send","aria-autocomplete":"list","aria-expanded":"false","aria-controls":"cs-pal",placeholder:x?"Ask, or type /":"Ask about Arjun, or type / for commands",maxlength:"300"}),h.addEventListener("input",gt),h.addEventListener("keydown",Qt);let P=A("form",{class:"cs-form"},A("label",{class:"cs-prompt",for:"cs-input"},A("span",{class:"sr-only"},"Question or command"),A("span",{"aria-hidden":"true"},">")),h,A("button",{class:"btn btn--primary cs-send",type:"submit"},"Send"));P.addEventListener("submit",tt=>{tt.preventDefault(),ct(h.value)}),d=A("div",{class:"sr-only",role:"status","aria-live":"polite"});let I=A("div",{class:"cs-dlg",role:"dialog","aria-modal":"true","aria-labelledby":"cs-title"},A("div",{class:"pe-stripe","aria-hidden":"true"}),A("header",{class:"cs-head"},A("span",{class:"lamp lamp--run is-on","aria-hidden":"true"}),A("h2",{class:"cs-title",id:"cs-title"},"Service terminal"),A("span",{class:"cs-note"},"Runs in your browser. Nothing you type is sent anywhere."),p),c,f,P,A("p",{class:"cs-hint"},A("kbd",null,"Enter")," to send, ",A("kbd",null,"/")," for commands, ",A("kbd",null,"Esc")," to close")),V=A("div",{class:"cs-scrim"});V.addEventListener("click",()=>ee()),l=A("div",{class:"cs",hidden:!0},V,I,d),l.addEventListener("keydown",Tt),l.addEventListener("wheel",de,{passive:!1}),l.addEventListener("touchmove",de,{passive:!1}),document.body.append(l)}function oe(v={}){if(g){v.prefill!=null&&(h.value=v.prefill,gt()),h.focus({preventScroll:!0});return}l||Ce(),_=v.opener||document.activeElement,g=!0,Nt(!0),l.hidden=!1,document.documentElement.classList.add("cs-open"),l.offsetWidth,l.classList.add("is-open"),c.children.length||Ct(),v.prefill!=null&&(h.value=v.prefill,gt()),Et(),window.visualViewport&&(visualViewport.addEventListener("resize",Et),visualViewport.addEventListener("scroll",Et)),h.focus({preventScroll:!0}),R()}function ee(v={}){if(!g)return;w&&w(),g=!1,dt(),l.classList.remove("is-open"),document.documentElement.classList.remove("cs-open"),window.visualViewport&&(visualViewport.removeEventListener("resize",Et),visualViewport.removeEventListener("scroll",Et));let p=()=>{g||(l.hidden=!0)};i?p():setTimeout(p,150),Nt(!1),v.restore!==!1&&_&&_.isConnected&&typeof _.focus=="function"&&_.focus({preventScroll:!0}),_=null}let G=()=>g?ee():oe();function Me(v){if((v.ctrlKey||v.metaKey)&&!v.altKey&&!v.shiftKey&&v.key.toLowerCase()==="k"){v.preventDefault(),G();return}v.key==="/"&&!v.ctrlKey&&!v.metaKey&&!v.altKey&&!g&&!Ey(v.target)&&(v.preventDefault(),oe({prefill:"/"}))}function se(v){let p=v.target.closest&&v.target.closest("[data-open-console]");p&&(v.preventDefault(),oe({opener:p,prefill:p.dataset.prefill}))}return document.addEventListener("keydown",Me),document.addEventListener("click",se),t&&(E=t.on("toast",v=>{g&&v&&v.text&&Q(v.text,v.kind)})),{open:oe,close:ee,toggle:G,get isOpen(){return g},destroy(){ee({restore:!1}),document.removeEventListener("keydown",Me),document.removeEventListener("click",se),E&&E(),l&&l.remove(),l=null}}}var cn=window.PORTFOLIO;if(!cn)throw new Error("data.js did not load");var jc=di(),sf={get(n,t){try{let e=localStorage.getItem(n);return e==null?t:JSON.parse(e)}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},Bs=document.documentElement;function Ay(){let n=cn.person;he("#h-name").textContent=n.name,he("#hero-role").textContent=n.role.charAt(0).toUpperCase()+n.role.slice(1);let t=n.openTo.length>1?`${n.openTo.slice(0,-1).join(", ")}, or ${n.openTo[n.openTo.length-1]}`:n.openTo[0];he("#hero-status").textContent=`${n.status}: ${t}`,he("#hero-pitch").textContent=n.pitch,he("#hero-glance").replaceChildren(...cn.glance.map(s=>A("div",null,A("dt",null,s.label),A("dd",null,dh(s.text,cn))))),zs("[data-resume]").forEach(s=>{s.setAttribute("href",n.resume),s.addEventListener("click",()=>we.emit("unlock","resume"))});let i=`mailto:${n.email}?subject=Opportunity%20for%20Arjun`;he("#contact-email").setAttribute("href",i),he("#contact-email").textContent=n.email}var Zc=he("#theme-toggle");function rf(n,t){Bs.setAttribute("data-theme",n),Zc.setAttribute("aria-pressed",String(n==="light")),Zc.setAttribute("aria-label",n==="light"?"Switch to night theme":"Switch to daylight theme");let e=document.querySelector('meta[name="theme-color"]');if(e&&e.setAttribute("content",getComputedStyle(Bs).getPropertyValue("--bg").trim()),t){try{localStorage.setItem("theme",n)}catch{}we.emit("theme",n),we.emit("unlock","theme")}}function Jc(){rf(Bs.getAttribute("data-theme")==="light"?"dark":"light",!0)}Zc.addEventListener("click",Jc);rf(Bs.getAttribute("data-theme")==="light"?"light":"dark",!1);var qc=he("#toasts");we.on("toast",({text:n,kind:t})=>{if(Bs.classList.contains("cs-open"))return;let e=A("div",{class:`toast${t?" toast--"+t:""}`},n);for(qc.append(e);qc.children.length>3;)qc.firstChild.remove();setTimeout(()=>e.remove(),5200)});var of=he("#menu-toggle"),Kc=he("#nav-links");function il(n){Kc.classList.toggle("is-open",n),of.setAttribute("aria-expanded",String(n))}of.addEventListener("click",()=>il(!Kc.classList.contains("is-open")));Kc.addEventListener("click",n=>{n.target.closest("a")&&il(!1)});function af(n){let t=document.getElementById(n);t&&(t.scrollIntoView({behavior:jc?"auto":"smooth",block:"start"}),il(!1))}we.on("goto",af);var lf=new Map(zs(".nav-links a").map(n=>[n.getAttribute("href").slice(1),n])),Cy=new IntersectionObserver(n=>{for(let t of n)t.isIntersecting&&lf.forEach((e,i)=>i===t.target.id?e.setAttribute("aria-current","true"):e.removeAttribute("aria-current"))},{rootMargin:"-45% 0px -50% 0px"});lf.forEach((n,t)=>{let e=document.getElementById(t);e&&Cy.observe(e)});var Ry=he("#nav-progress"),Yc=!1;addEventListener("scroll",()=>{Yc||(Yc=!0,requestAnimationFrame(()=>{Yc=!1;let n=document.documentElement.scrollHeight-innerHeight;Ry.style.transform=`scaleX(${n>0?Math.min(1,scrollY/n):0})`}))},{passive:!0});var jn=[["cell-start","Start the cell","Press Start on the operator panel."],["cell-sorted","Sort a part","Let the robot place one in a bin."],["cell-batch","Complete a batch","Six parts sorted. Then press Reset."],["cell-estop","Hit the E-stop","Everything should freeze at once."],["cell-grab","Inspect a part","Click a part on the belt or in a bin."],["cell-grab-all","Inspect all three shapes","Cube, cylinder and hexagon."],["ladder-open","Read the logic","Click a rung, a contact or a row in the watch table."],["graph-select","Follow a skill to its evidence","Select a skill on the map or in the list."],["timeline-select","Open a trace on the timeline","Select an internship, a course or a club."],["project-open","Filter the builds","Pick an area or a skill."],["github-open","Open a repository","Use the live GitHub feed."],["console-ask","Ask the console a question","Press Ctrl K, or use Ask in the menu."],["console-cmd","Run a console command","Type /help in the console."],["theme","Switch theme","Daylight or night shift."],["resume","Download the r\xE9sum\xE9","The PDF is a click away."],["secret","Find the hidden command","Some commands are not listed."]],ji=new Set(sf.get("sat",[])),Ji=he("#sat"),Ki=he("#sat-toggle"),Iy=he("#sat-count"),Py=()=>Lt("svg",{viewBox:"0 0 16 16",width:12,height:12,"aria-hidden":"true"},Lt("path",{d:"M3 8.5 6.5 12 13 4.5",fill:"none",stroke:"currentColor","stroke-width":2.4,"stroke-linecap":"round","stroke-linejoin":"round"})),cf=A("i"),hf=A("div",{class:"sat-bar",role:"progressbar","aria-label":"Checks passed","aria-valuemin":"0","aria-valuemax":String(jn.length),"aria-valuenow":"0"},cf),uf=A("p",{class:"sat-sub"}),df=A("ul"),ff=A("button",{type:"button",class:"sat-x","aria-label":"Close the checklist"},Lt("svg",{viewBox:"0 0 16 16",width:14,height:14,"aria-hidden":"true",focusable:"false"},Lt("path",{d:"M3 3l10 10M13 3L3 13",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round"})));Ji.append(ff,A("h2",null,"Site acceptance test"),uf,hf,df);var nl=new Map;for(let[n,t,e]of jn){let i=n==="secret",s=A("span",{class:"sat-t"},t),r=A("span",{class:"sat-h"},e),o=A("li",null,A("span",{class:"sat-box","aria-hidden":"true"},Py()),A("span",null,s,r));nl.set(n,{li:o,t:s,hnt:r,secret:i,title:t,hint:e}),df.append(o)}function pf(){let n=ji.size,t=jn.length;Iy.textContent=`${n}/${t}`,Ki.setAttribute("aria-label",`Site acceptance test checklist, ${n} of ${t} passed`),uf.textContent=n===t?"All checks passed. Site accepted.":`${n} of ${t} checks passed. Each one is a feature of this site worth trying.`,cf.style.transform=`scaleX(${n/t})`,hf.setAttribute("aria-valuenow",String(n)),Ny(),nl.forEach((e,i)=>{let s=ji.has(i);e.li.classList.toggle("is-done",s),e.t.textContent=e.secret&&!s?"Hidden check":e.title,e.hnt.textContent=e.secret&&!s?"Found by trying things.":e.hint})}we.on("unlock",n=>{if(ji.has(n)||!nl.has(n))return;ji.add(n),sf.set("sat",Array.from(ji)),pf();let t=nl.get(n);we.emit("toast",{text:`Check passed: ${t.title}`,kind:"ok"}),ji.size===jn.length&&we.emit("toast",{text:"All checks passed. Site accepted. Email Arjun?",kind:"ok"})});var tf=he("#signoff-fill"),Ly=he("#signoff-count"),Dy=he("#signoff-text"),ef=he("#signoff");function Ny(){if(!ef)return;let n=ji.size;Ly.textContent=`${n} of ${jn.length}`,tf.style.transform=`scaleX(${n/jn.length})`,tf.parentElement.setAttribute("aria-valuenow",String(n)),ef.classList.toggle("is-accepted",n===jn.length),Dy.textContent=n===jn.length?"All checks passed. Site accepted. The next step is an email.":n===0?`This page has ${jn.length} things worth trying. Each one you pass is ticked off.`:`${jn.length-n} to go. Each check is a feature of this page worth trying.`}function Fr(n){Ji.hidden=!n,Ki.setAttribute("aria-expanded",String(n))}Ki.addEventListener("click",()=>Fr(Ji.hidden));var nf=he("#signoff-open");nf&&nf.addEventListener("click",()=>{Fr(!0),Ki.focus({preventScroll:!0})});ff.addEventListener("click",()=>{Fr(!1),Ki.focus()});document.addEventListener("keydown",n=>{if(n.key!=="Escape")return;let t=!Ji.hidden&&Ji.contains(document.activeElement);Fr(!1),il(!1),t&&Ki.focus()});document.addEventListener("pointerdown",n=>{!Ji.hidden&&!Ji.contains(n.target)&&!Ki.contains(n.target)&&Fr(!1)});pf();function li(n,t){try{return t()}catch(e){return console.error(`[${n}]`,e),null}}Ay();var mn=li("cell",()=>Sd(he("#cell-mount"),{bus:we,calm:jc,onLadder:()=>we.emit("goto","logic")}));li("projects",()=>Bd(he("#projects-mount"),cn,{bus:we}));li("github",()=>zd(he("#github-mount"),{user:cn.person.githubUser,bus:we,hide:cn.person.githubHide||[]}));var Uy=li("graph",()=>Gd(he("#graph-mount"),cn,{bus:we}));li("timeline",()=>Dd(he("#timeline-mount"),cn,{bus:we}));li("proof",()=>Nd(he("#proof-mount"),cn));li("certs",()=>Ud(he("#certs-mount"),cn));if(mn){let n=he("#ladder-mount");li("ladder",()=>Id(n,mn.plc,{onFirstInteract:()=>we.emit("unlock","ladder-open"),powerCycle:()=>mn.controls.powerCycle()})),Jn(n,t=>t?mn.hold("ladder"):mn.release("ladder"),{rootMargin:"0px"})}{let n=he("#hero-ask-text"),t=n&&n.closest("button");if(t){let e=["Why hire Arjun?","What PLCs has he used?","Show vision projects","Which robots has he worked with?","How do I contact him?"],i=0,s=!0;t.dataset.prefill=e[0],Jn(t,r=>{s=r},{rootMargin:"0px"}),jc||setInterval(()=>{!s||document.hidden||Bs.classList.contains("cs-open")||(i=(i+1)%e.length,n.classList.add("is-out"),setTimeout(()=>{n.textContent=e[i],t.dataset.prefill=e[i],n.classList.remove("is-out")},200))},3600)}}/Mac|iPhone|iPad/.test(navigator.platform||"")&&(zs(".nav-kbd").forEach(n=>{n.textContent="Cmd K"}),zs("[data-open-console]").forEach(n=>n.setAttribute("aria-label","Ask a question or run a command (Cmd K)")));function Fy(){let n=mn.plc,t=i=>{try{return n.get(i)}catch{return!1}},e=n.counters&&n.counters.C0;return[["state",n.inputs.ESTOP_OK?t("BATCH_DONE")?"Batch complete":t("RUN")?"Running":"Stopped":"E-stop pressed"],["sorted",`${e?e.cv:0} of ${e?e.pv:6}`],["conveyor",t("CONVEYOR")?"on":"off"],["stack light",t("LAMP_RED")?"red":t("LAMP_AMBER")?"amber":t("LAMP_GREEN")?"green":"off"]]}var Oy=li("console",()=>Qd({data:cn,bus:we,actions:{goto:n=>we.emit("goto",n),filter:n=>we.emit("filter",n),toggleTheme:Jc,openResume:()=>{we.emit("unlock","resume"),window.open(cn.person.resume,"_blank","noopener")},copy:async n=>{try{return await navigator.clipboard.writeText(n),we.emit("toast",{text:"Copied to the clipboard.",kind:"ok"}),!0}catch{return!1}},cell:mn?{start:()=>mn.controls.start(),stop:()=>mn.controls.stop(),estop:()=>mn.controls.estop(),release:()=>mn.controls.releaseEstop(),reset:()=>mn.controls.reset(),status:Fy}:void 0}}));window.__site={bus:we,data:cn,cell:mn,graph:Uy,term:Oy,goto:af,toggleTheme:Jc};
