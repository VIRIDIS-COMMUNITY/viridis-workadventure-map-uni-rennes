class A{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const z="https://unpkg.com/@workadventure/scripting-api-extra@1.7.4/dist";class ne{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new A(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(z+"/configuration.html"+e,!0)}async function re(t,e){const n=await WA.room.getTiledMap(),r=new Map;return X(n.layers,r,t,e),r}function X(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(n&&o.name!==n||r&&!r.includes(a.name))continue;e.set(a.name,new ne(a))}}else o.type==="group"&&X(o.layers,e,n,r)}let R;async function T(){return R===void 0&&(R=oe()),R}async function oe(){return ae(await WA.room.getTiledMap())}function ae(t){const e=new Map;return Y(t.layers,"",e),e}function Y(t,e,n){for(const r of t)r.type==="group"?Y(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function J(){const t=await T(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ie(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++)a[s+i*t.width]!==0&&(e=Math.min(e,s),o=Math.max(o,s),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function Q(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const i=ie(a);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var se=Object.prototype.toString,S=Array.isArray||function(e){return se.call(e)==="[object Array]"};function j(t){return typeof t=="function"}function ue(t){return S(t)?"array":typeof t}function x(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function U(t,e){return t!=null&&typeof t=="object"&&e in t}function le(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ce=RegExp.prototype.test;function fe(t,e){return ce.call(t,e)}var pe=/\S/;function ge(t){return!fe(pe,t)}var he={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function de(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return he[n]})}var ye=/\s*/,me=/\s+/,_=/\s*=/,ve=/\s*\}/,we=/#|\^|\/|>|\{|&|=|!/;function be(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],i=!1,s=!1,u="",c=0;function p(){if(i&&!s)for(;a.length;)delete o[a.pop()];else a=[];i=!1,s=!1}var d,m,P;function C(w){if(typeof w=="string"&&(w=w.split(me,2)),!S(w)||w.length!==2)throw new Error("Invalid tags: "+w);d=new RegExp(x(w[0])+"\\s*"),m=new RegExp("\\s*"+x(w[1])),P=new RegExp("\\s*"+x("}"+w[1]))}C(e||h.tags);for(var f=new E(t),v,l,y,M,k,b;!f.eos();){if(v=f.pos,y=f.scanUntil(d),y)for(var B=0,te=y.length;B<te;++B)M=y.charAt(B),ge(M)?(a.push(o.length),u+=M):(s=!0,n=!0,u+=" "),o.push(["text",M,v,v+1]),v+=1,M===`
`&&(p(),u="",c=0,n=!1);if(!f.scan(d))break;if(i=!0,l=f.scan(we)||"name",f.scan(ye),l==="="?(y=f.scanUntil(_),f.scan(_),f.scanUntil(m)):l==="{"?(y=f.scanUntil(P),f.scan(ve),f.scanUntil(m),l="&"):y=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(l==">"?k=[l,y,v,f.pos,u,c,n]:k=[l,y,v,f.pos],c++,o.push(k),l==="#"||l==="^")r.push(k);else if(l==="/"){if(b=r.pop(),!b)throw new Error('Unopened section "'+y+'" at '+v);if(b[1]!==y)throw new Error('Unclosed section "'+b[1]+'" at '+v)}else l==="name"||l==="{"||l==="&"?s=!0:l==="="&&C(y)}if(p(),b=r.pop(),b)throw new Error('Unclosed section "'+b[1]+'" at '+f.pos);return We(Ae(o))}function Ae(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function We(t){for(var e=[],n=e,r=[],o,a,i=0,s=t.length;i<s;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function E(t){this.string=t,this.tail=t,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function W(t,e){this.view=t,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,i,s,u=!1;o;){if(e.indexOf(".")>0)for(a=o.view,i=e.split("."),s=0;a!=null&&s<i.length;)s===i.length-1&&(u=U(a,i[s])||le(a,i[s])),a=a[i[s++]];else a=o.view[e],u=U(o.view,e);if(u){r=a;break}o=o.parent}n[e]=r}return j(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||h.tags).join(":"),a=typeof r<"u",i=a?r.get(o):void 0;return i==null&&(i=be(e,n),a&&r.set(o,i)),i};g.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),i=this.parse(e,a),s=n instanceof W?n:new W(n,void 0);return this.renderTokens(i,s,r,e,o)};g.prototype.renderTokens=function(e,n,r,o,a){for(var i="",s,u,c,p=0,d=e.length;p<d;++p)c=void 0,s=e[p],u=s[0],u==="#"?c=this.renderSection(s,n,r,o,a):u==="^"?c=this.renderInverted(s,n,r,o,a):u===">"?c=this.renderPartial(s,n,r,a):u==="&"?c=this.unescapedValue(s,n):u==="name"?c=this.escapedValue(s,n,a):u==="text"&&(c=this.rawValue(s)),c!==void 0&&(i+=c);return i};g.prototype.renderSection=function(e,n,r,o,a){var i=this,s="",u=n.lookup(e[1]);function c(m){return i.render(m,n,r,a)}if(u){if(S(u))for(var p=0,d=u.length;p<d;++p)s+=this.renderTokens(e[4],n.push(u[p]),r,o,a);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")s+=this.renderTokens(e[4],n.push(u),r,o,a);else if(j(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),c),u!=null&&(s+=u)}else s+=this.renderTokens(e[4],n,r,o,a);return s}};g.prototype.renderInverted=function(e,n,r,o,a){var i=n.lookup(e[1]);if(!i||S(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,a)};g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),i=0;i<a.length;i++)a[i].length&&(i>0||!r)&&(a[i]=o+a[i]);return a.join(`
`)};g.prototype.renderPartial=function(e,n,r,o){if(r){var a=this.getConfigTags(o),i=j(r)?r(e[1]):r[e[1]];if(i!=null){var s=e[6],u=e[5],c=e[4],p=i;u==0&&c&&(p=this.indentPartial(i,c,s));var d=this.parse(p,a);return this.renderTokens(d,n,r,p,o)}}};g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||h.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===h.escape?String(a):o(a)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){L.templateCache=t},get templateCache(){return L.templateCache}},L=new g;h.clearCache=function(){return L.clearCache()};h.parse=function(e,n){return L.parse(e,n)};h.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return L.render(e,n,r,o)};h.escape=de;h.Scanner=E;h.Context=W;h.Writer=g;class F{constructor(e,n){this.template=e,this.state=n,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(a),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Se(){var t;const e=await J();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new F(o.value,WA.state);if(a.isPureString())continue;const i=a.getValue();await D(n.name,o.name,i),a.onChange(async s=>{await D(n.name,o.name,s)})}}}async function Ce(){var t;const e=await T();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const i=new F(a.value,WA.state);if(i.isPureString())continue;const s=i.getValue();N(n,a.name,s),i.onChange(u=>{N(n,a.name,u)})}}}async function D(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function N(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const Me="https://admin.workadventu.re/html";let V,G=0,I=0;function q(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Le(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ee(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Te(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ee(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Z(t){return t.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ee(t){const e=Z(t),n=Q(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(G-r,2)+Math.pow(I-o,2))}function Ee(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Le(t):Te(t),q(t)}),q(t)}function K(t,e,n,r){const o=t.name;let a,i,s=!1;const u=n.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const p=!!u;function d(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function P(){let l;if(t.type==="tilelayer")l=Q(Z(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);l={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}i=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:l.right*32,y:l.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){i&&(WA.room.website.delete(i.name),i=void 0)}function f(){if(s=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(n.getString("code")||n.getString("codeVariable"))){P();return}c&&(WA.state[e.name]?d():m())}function v(){s=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),C()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(v)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{s&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&C(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Pe(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-G,2)+Math.pow(t.y-I,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Pe(t)})}function $(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const a=n.name;WA.room.onEnterLayer(a).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=n.name;WA.room.area.onEnter(a).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Be(t){t=t??Me;const e=await re();V=await T();for(const n of e.values())n.properties.get("door")&&Ee(n),n.properties.get("bell")&&ke(n);for(const n of V.values()){const r=new A(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');K(n,i,r,t)}const a=r.getString("bellVariable");a&&n.type==="tilelayer"&&$(a,r,n)}for(const n of await J()){const r=new A(n.properties),o=r.getString("doorVariable");if(o){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');K(n,i,r,t)}const a=r.getString("bellVariable");a&&$(a,r,n)}WA.player.onPlayerMove(n=>{G=n.x,I=n.y})}function Re(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),i=t.getString("tag");xe(n,e,r,o,a,i)}}function xe(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ve(){const t=await T();for(const e of t.values()){const n=new A(e.properties);Re(n,e.name)}}let H;async function je(t){const e=await WA.room.getTiledMap();t=t??z,H=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new A(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of H.values()){const i=new A(a.properties),s=i.getString("openConfig");s&&a.type==="tilelayer"&&Ge(s.split(","),a.name,i)}}}function Ge(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function i(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(t)})}function s(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");a&&(u&&u==="onaction"?i():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),s()})}function Ie(){return WA.onInit().then(()=>{Be().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ce().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");(async()=>(await WA.onInit(),await WA.players.configureTracking({players:!0,movement:!1}),await WA.player.getPosition()))();WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags);const t=WA.room.mapURL,e=t.substring(0,t.lastIndexOf("/"));let n="campus";WA.player.tags.includes("admin")&&WA.player.setOutlineColor(0,119,141),WA.ui.actionBar.addButton({id:"move-btn",type:"action",imageSrc:e+"/../arrows-to-center.svg",toolTip:"M'envoyer à l'accueil de Villejean",callback:()=>{console.log("Returning to starting point from "+n),WA.nav.goToRoom("https://workadventure.lab.viridis.info/_/global/workadventure.lab.viridis.info/map-storage/maps/maps/Accueil_Villejean.tmj#moveTo=from-presidence")}}),WA.ui.actionBar.addButton({id:"map-btn",type:"action",imageSrc:"https://hugoaverty.github.io/map-overview/img/map.svg",toolTip:"Map overview",callback:()=>{Oe()}}),Ie().then(()=>{console.log("Scripting API Extra ready"),WA.player.state.tutorialDone||WA.ui.modal.openModal({title:"Tutorial",src:"https://workadventure.github.io/scripting-api-extra/tutorialv1.html",allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}).catch(r=>console.error(r))}).catch(t=>console.error(t));const Oe=async()=>{WA.ui.modal.closeModal();const t=await WA.player.getPosition();WA.ui.modal.openModal({src:"https://menu.lgeorget.eu/?x="+t.x+"&y="+t.y,allow:"fullscreen",title:"Map Overview",allowApi:!0,position:"center"})};
