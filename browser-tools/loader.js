"use strict";(()=>{var he=new Set([".git","node_modules","target","dist","build",".next",".angular",".venv","venv","vendor","coverage"]),we=/^\.(?:github\/(?:instructions|skills|agents|prompts)|claude\/(?:skills|agents)|agents\/skills)\/.+\.(?:md|txt)$/i,Y=3e4,V=300,F=131072;function T(e){let t=e.toLowerCase();return/(?:^|\/)(agents|claude|gemini)\.md$/.test(t)||t===".github/copilot-instructions.md"||t===".claude/claude.md"||/^\.github\/instructions\/.+\.instructions\.md$/.test(t)?"INSTRUCTIONS":/^\.(github|claude|agents)\/skills\/[^/]+\/skill\.md$/.test(t)?"SKILLS":/^\.(github|claude)\/agents\/[^/]+\.md$/.test(t)?"AGENTS":[".vscode/mcp.json",".github/mcp.json",".mcp.json"].includes(t)?"MCP":/^\.github\/prompts\/.+\.prompt\.md$/.test(t)?"PROMPTS":"CONTEXT"}function x(e){return e.length<=500&&!/[\u0000-\u001f\\:]/.test(e)&&e.split("/").every(t=>t!==""&&t!=="."&&t!==".."&&!he.has(t.toLowerCase()))&&!/(?:^|\/)\.env(?:\.|$)/i.test(e)}function _(e){return e.replace(/([a-z]+:\/\/)[^/\s"'@]+@/gi,"$1[UKRYTO]@").replace(/(\bname=["'][^"']*(?:token|password|secret|api[_-]?key|authorization)[^"']*["'][^>]*\bvalue=["'])([^"']+)(["'])/gi,"$1[UKRYTO]$3").replace(/(\bvalue=["'])([^"']+)(["'][^>]*\bname=["'][^"']*(?:token|password|secret|api[_-]?key|authorization)[^"']*["'])/gi,"$1[UKRYTO]$3").replace(/\b(?:gh[pousr]_[A-Za-z0-9_]{16,}|github_pat_[A-Za-z0-9_]{16,}|sk-[A-Za-z0-9_-]{20,})\b/g,"[UKRYTO]").replace(/\bBearer\s+[A-Za-z0-9._~+/=-]{12,}\b/gi,"Bearer [UKRYTO]").replace(/-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----[\s\S]*?-----END (?:[A-Z ]+ )?PRIVATE KEY-----/g,t=>t.split(`
`).map(()=>"[UKRYTO]").join(`
`)).replace(/(["']?(?:[\w.-]*(?:token|password|secret|api[_-]?key|authorization))["']?\s*[:=]\s*["']?)([^\s,"';}]+)/gi,(t,r,o)=>/^[\[$]/.test(o)||["null","true","false"].includes(o)||o.length<6?t:r+"[UKRYTO]")}async function q(e){if(e.size>F)throw new Error("TOO_LARGE");let t=typeof e.arrayBuffer=="function"?await e.arrayBuffer():await new Promise((o,a)=>{let n=new FileReader;n.onload=()=>n.result instanceof ArrayBuffer?o(n.result):a(new Error("UNREADABLE")),n.onerror=()=>a(new Error("UNREADABLE")),n.readAsArrayBuffer(e)}),r;try{r=new TextDecoder("utf-8",{fatal:!0}).decode(t).replace(/\r\n?/g,`
`).replace(/^\uFEFF/,"")}catch{throw new Error("UNSUPPORTED_ENCODING")}if(r.includes("\0"))throw new Error("UNSUPPORTED_ENCODING");return r}async function ie(e,t){let r=new Map;for(let s of e.entries)x(s.path)&&T(s.path)!=="CONTEXT"&&r.set(s.path,s);let o=[],a=[...r.values()].sort((s,i)=>+(T(s.path)==="CONTEXT")-+(T(i.path)==="CONTEXT")||s.path.localeCompare(i.path)),n=new Set;for(let s=0;s<a.length&&o.length<V;s++){t?.throwIfAborted();let i=a[s];if(!n.has(i.path)){n.add(i.path);try{let d=await i.read(),c=await q(d),g=_(c);o.push({...i,category:T(i.path),content:g,bytes:new TextEncoder().encode(g).length,redacted:c!==g,selected:!0})}catch(d){t?.throwIfAborted();let c=d instanceof Error?d.message:"",g=c==="TOO_LARGE"||c==="UNSUPPORTED_ENCODING"||c==="LIMIT"?c:"UNREADABLE";o.push({...i,category:T(i.path),content:"",bytes:0,redacted:!1,selected:!1,omissionReason:g,error:g==="TOO_LARGE"?"Plik przekracza 128 KiB.":g==="UNSUPPORTED_ENCODING"?"Plik nie jest tekstem UTF-8.":"Nie uda\u0142o si\u0119 odczyta\u0107 pliku."})}}}return{files:o,complete:e.complete&&a.every(s=>n.has(s.path))}}function B(e,t){return[...t.matchAll(/\]\(([^)\s#]+)(?:#[^)\s]*)?\)/g)].map(r=>ye(e,r[1])).filter(r=>!!r&&we.test(r)&&x(r))}function ye(e,t){if(/^(?:\/|~|[a-z]+:)/i.test(t)||t.includes("$")||t.includes("\\"))return;let r=e.split("/").slice(0,-1);for(let o of t.split("/"))if(o===".."){if(!r.length)return;r.pop()}else o!=="."&&o&&r.push(o);return r.join("/")}function Z(e){return/^\.vscode\/(settings|extensions)\.json$/i.test(e)||/^[^/]+\.code-workspace$/i.test(e)||/^\.aiassistant\/rules\/.+\.md$/i.test(e)||[".aiignore",".noai"].includes(e)||/^\.idea\/[^/]+\.xml$/i.test(e)}function J(e){return[...e.matchAll(/<component\b[^>]*\bname=["'][^"']*(?:aiassistant|github[-_.]?copilot|junie)[^"']*["'][^>]*(?:\/>|>[\s\S]*?<\/component>)/gi)].map(t=>t[0]).join(`
`)}async function se(e,t){let r=[],o=e.entries.filter(n=>Z(n.path)),a=o.length<=300;for(let n of o.slice(0,300)){t?.throwIfAborted();try{let s=await q(await n.read());if(n.path.toLowerCase().startsWith(".idea/")&&(s=J(s),!s))continue;let i=_(s);r.push({path:n.path,content:i,bytes:new TextEncoder().encode(i).length,redacted:i!==s,omissionReason:null})}catch(s){if(t?.throwIfAborted(),n.path.toLowerCase().startsWith(".idea/")){a=!1;continue}let i=s instanceof Error?s.message:"";r.push({path:n.path,content:"",bytes:0,redacted:!1,omissionReason:i==="TOO_LARGE"||i==="UNSUPPORTED_ENCODING"||i==="LIMIT"?i:"UNREADABLE"})}}return{files:r,complete:a}}var P=class extends Error{constructor(r){super("GitLab zwr\xF3ci\u0142 HTTP "+r+". Sprawd\u017A sesj\u0119 i dost\u0119p do repozytorium.");this.status=r}status},$=class{constructor(t,r,o=(...a)=>fetch(...a)){this.base=t;this.signal=r;this.request=o;this.api=new URL("api/v4/",t)}base;signal;request;api;async json(t,r={}){let o=await this.get(t,r);if(!o.headers.get("content-type")?.includes("application/json"))throw new Error("API GitLaba nie zwr\xF3ci\u0142o JSON. Sprawd\u017A logowanie i adres instalacji.");return{value:JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(await this.bytes(o,2*1024*1024))),next:o.headers.get("x-next-page")}}async file(t,r,o){let a=await this.get("projects/"+t+"/repository/files/"+encodeURIComponent(r)+"/raw",{ref:o});if(a.headers.get("content-type")?.includes("text/html"))throw new Error("UNREADABLE");let n=await this.bytes(a,F);if(new TextDecoder().decode(n.subarray(0,100)).startsWith("version https://git-lfs.github.com/spec/v1"))throw new Error("UNREADABLE");return new File([n],r)}async get(t,r){let o=new URL(t,this.api);if(o.origin!==this.base.origin||!o.pathname.startsWith(this.api.pathname))throw new Error("Niepoprawny zakres API.");for(let[a,n]of Object.entries(r))o.searchParams.set(a,n);for(let a=0;;a++){this.signal.throwIfAborted();let n=await this.request(o,{credentials:"same-origin",redirect:"error",cache:"no-store",signal:AbortSignal.any([this.signal,AbortSignal.timeout(12e4)])});if(n.status===429&&a<2){let s=n.headers.get("retry-after"),i=s&&/^\d+$/.test(s)?Number(s)*1e3:s?Date.parse(s)-Date.now():1e3;if(await n.body?.cancel(),!Number.isFinite(i)||i>3e4)throw new P(429);await Re(Math.max(250,i),this.signal);continue}if(!n.ok)throw await n.body?.cancel(),new P(n.status);if(n.redirected||n.url&&new URL(n.url).origin!==this.base.origin)throw await n.body?.cancel(),new Error("GitLab przekierowa\u0142 odczyt poza wybrane API.");return n}}async bytes(t,r){if(Number(t.headers.get("content-length"))>r)throw await t.body?.cancel(),new Error("TOO_LARGE");if(!t.body)throw new Error("UNREADABLE");let o=t.body.getReader(),a=[],n=0;try{for(;;){this.signal.throwIfAborted();let{value:d,done:c}=await o.read();if(c)break;if(n+=d.byteLength,n>r)throw new Error("TOO_LARGE");a.push(d)}}finally{await o.cancel().catch(()=>{}),o.releaseLock()}let s=new Uint8Array(n),i=0;for(let d of a)s.set(d,i),i+=d.length;return s}};function Re(e,t){return new Promise((r,o)=>{t.throwIfAborted();let a=()=>{clearTimeout(n),t.removeEventListener("abort",a),o(t.reason)},n=setTimeout(()=>{t.removeEventListener("abort",a),r()},e);t.addEventListener("abort",a,{once:!0})})}var K=1,v=8*1024*1024;function ce(){let e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return[t.slice(0,8),t.slice(8,12),t.slice(12,16),t.slice(16,20),t.slice(20)].join("-")}var E=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),Q=e=>typeof e=="string"&&/^[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}$/i.test(e);function le(e){if(typeof e!="string")return!1;try{let t=new URL(e);return["http:","https:"].includes(t.protocol)&&t.origin===e}catch{return!1}}function H(e){try{return new TextEncoder().encode(JSON.stringify(e)).byteLength}catch{throw new Error("Niepoprawna paczka repozytorium.")}}function w(e){if(!e)throw new Error("Niepoprawna paczka repozytorium lub zakres plik\xF3w.")}function M(e,t){return typeof e=="string"&&e.length>0&&e.length<=t&&!/[\u0000-\u001f]/.test(e)}function ae(e){w(M(e,2e3));let t=new URL(e);return w(["http:","https:"].includes(t.protocol)&&!t.username&&!t.password&&!t.search&&!t.hash),t}function ee(e,t){w(E(e)&&e.kind==="gitlab");let r=ae(e.baseUrl),o=ae(e.webUrl);w(r.pathname.endsWith("/")&&r.origin===o.origin&&(!t||r.origin===t)),w(Number.isSafeInteger(e.projectId)&&Number(e.projectId)>0);let a=e.projectPath;return w(M(a,500)&&a.split("/").length>=2&&a.split("/").every(n=>/^[\p{L}\p{N}_.-]+$/u.test(n)&&n!=="."&&n!=="..")),w(decodeURIComponent(o.pathname).replace(/\/$/,"")===decodeURIComponent(r.pathname)+a),w(M(e.ref,500)&&["branch","tag","commit"].includes(String(e.refKind))&&typeof e.commit=="string"&&/^(?:[a-f\d]{40}|[a-f\d]{64})$/i.test(e.commit)),{kind:"gitlab",baseUrl:r.href,projectId:Number(e.projectId),projectPath:a,webUrl:o.href.replace(/\/$/,""),ref:e.ref,refKind:e.refKind,commit:e.commit}}function de(e,t){w(H(e)<=v&&E(e)),w(e.format==="agent-scanner-repository-transfer"&&e.version===K&&Q(e.transferId)&&M(e.name,200)&&typeof e.inventoryComplete=="boolean"&&typeof e.collectedAt=="string"&&Number.isFinite(Date.parse(e.collectedAt)));let r=ee(e.source,t),o=new Set,a=(c,g)=>(w(Array.isArray(c)&&c.length<=V),c.map(p=>{w(E(p)&&typeof p.path=="string"&&x(p.path)&&!o.has(p.path)&&typeof p.content=="string"&&!p.content.includes("\0")&&typeof p.selected=="boolean");let b=p.path;o.add(b);let h=p.omissionReason;w(h===null||["UNREADABLE","TOO_LARGE","LIMIT","UNSUPPORTED_ENCODING"].includes(String(h))),w(new TextEncoder().encode(p.content).length<=F&&(!h||p.content===""&&!p.selected)),g&&w(Z(b));let u=p.content.replace(/\r\n?/g,`
`).replace(/^\uFEFF/,"");return g&&b.toLowerCase().startsWith(".idea/")&&(u=J(u)),{path:b,content:_(u),selected:p.selected,omissionReason:h}})),n=a(e.files,!1),s=a(e.reportFiles,!0),i=new Set(n.filter(c=>T(c.path)!=="CONTEXT").flatMap(c=>B(c.path,c.content)));w(n.every(c=>T(c.path)!=="CONTEXT"||i.has(c.path))),w(Array.isArray(e.issues)&&e.issues.length<=50&&e.issues.every(c=>M(c,300)));let d={format:"agent-scanner-repository-transfer",version:1,transferId:e.transferId,collectedAt:new Date(e.collectedAt).toISOString(),name:_(e.name),source:r,inventoryComplete:e.inventoryComplete,issues:e.issues.map(c=>_(String(c))),files:n,reportFiles:s};return w(H(d)<=v),d}function pe(e,t,r){let o=E(r)&&typeof r.relative_url_root=="string"?r.relative_url_root:void 0,a=e.querySelector("[data-project-full-path]")??e.body,n=e.querySelector("[data-ref-type][data-ref]")??e.querySelector("[data-ref]");return{url:t,relativeRoot:o,projectPath:a.dataset.projectFullPath,projectId:e.body.dataset.projectId??e.querySelector("[data-project-id]")?.dataset.projectId,ref:n?.dataset.ref,refKind:n?.dataset.refType}}function Ee(e){if(!E(e)||!Number.isSafeInteger(e.id)||typeof e.name!="string"||typeof e.path_with_namespace!="string"||typeof e.web_url!="string")throw new Error("Nie rozpoznano projektu GitLaba.");return{id:Number(e.id),name:e.name,path:e.path_with_namespace,webUrl:e.web_url,defaultBranch:typeof e.default_branch=="string"?e.default_branch:null}}async function Se(e,t){let r=new URL(e.url),o=decodeURIComponent(r.pathname.split("/-/")[0]).replace(/\/$/,""),a=o.split("/").filter(Boolean),n=[];if(e.projectPath&&o.endsWith("/"+e.projectPath)&&n.push({base:new URL(o.slice(0,-e.projectPath.length),r.origin),path:e.projectPath}),e.relativeRoot!==void 0){let i="/"+e.relativeRoot.split("/").filter(Boolean).join("/"),d=i==="/"?"/":i+"/";o.startsWith(d)&&n.push({base:new URL(d,r.origin),path:e.projectPath??o.slice(d.length)})}for(let i=0;i<=Math.min(a.length-2,12);i++)n.push({base:new URL("/"+(i?a.slice(0,i).map(encodeURIComponent).join("/")+"/":""),r.origin),path:a.slice(i).join("/")});let s=new Set;for(let i of n){if(t.signal.throwIfAborted(),s.has(i.base.href))continue;s.add(i.base.href);let d=new $(i.base,t.signal,t.request);try{let c=e.projectId&&/^\d+$/.test(e.projectId)?e.projectId:i.path,g=Ee((await d.json("projects/"+encodeURIComponent(c))).value),p=new URL(g.webUrl);if(p.origin!==r.origin||decodeURIComponent(p.pathname).replace(/\/$/,"")!==o)continue;return{client:d,project:g}}catch(c){if(!(c instanceof P)||c.status!==404)throw c}}throw new Error("Nie rozpoznano repozytorium. Uruchom zak\u0142adk\u0119 na g\u0142\xF3wnej stronie projektu lub widoku plik\xF3w GitLaba.")}async function Ae(e,t,r,o){let a=new URL(r.url),n=a.pathname.split("/-/")[1]??"",s=r.ref??"";if(n.startsWith("commit/")&&(s=decodeURIComponent(n.slice(7).split("/")[0])),!s&&!n&&(s=e.defaultBranch??""),!s&&/^(tree|blob)\//.test(n)&&(s=await o.chooseRef(decodeURIComponent(n.replace(/^(tree|blob)\//,"")))??""),!s)throw new Error("Nie ustalono rewizji. Wybierz ga\u0142\u0105\u017A w GitLabie i uruchom zak\u0142adk\u0119 ponownie.");let i=s,d="commit";if(!/^(?:[a-f\d]{40}|[a-f\d]{64})$/i.test(s)){let p=r.refKind==="tags"||r.refKind==="tag"?["tags","branches"]:["branches","tags"],b=!1;for(let h of p)try{let u=(await t.json("projects/"+e.id+"/repository/"+h+"/"+encodeURIComponent(s))).value;if(!E(u)||u.name!==s||!E(u.commit)||typeof u.commit.id!="string")throw new Error("Nie ustalono commita wybranej rewizji.");i=u.commit.id,d=h==="branches"?"branch":"tag",b=!0;break}catch(u){if(!(u instanceof P)||u.status!==404)throw u}if(!b)throw new Error("Nie potwierdzono rodzaju rewizji. Wybierz ga\u0142\u0105\u017A, tag lub pe\u0142ny SHA commita.")}let c=ee({kind:"gitlab",baseUrl:t.base.href,projectId:e.id,projectPath:e.path,webUrl:e.webUrl,ref:s,refKind:d,commit:i},a.origin),g=(await t.json("projects/"+e.id+"/repository/commits/"+encodeURIComponent(i))).value;if(!E(g)||g.id!==i)throw new Error("Nie potwierdzono commita wybranej rewizji.");return c}async function ue(e,t){t.progress("Rozpoznaj\u0119 repozytorium i rewizj\u0119\u2026");let{project:r,client:o}=await Se(e,t),a=await Ae(r,o,e,t),n=[],s=new Set,i=[],d=!0,c=1,g=0,p=0,b=new Map,h=l=>{!i.includes(l)&&i.length<50&&i.push(l)};try{for(;;){t.signal.throwIfAborted(),t.progress("Odczytuj\u0119 list\u0119 plik\xF3w \xB7 strona "+c);let l=await o.json("projects/"+r.id+"/repository/tree",{recursive:"true",ref:a.commit,per_page:"100",page:String(c)});if(!Array.isArray(l.value))throw new Error("Niepoprawna lista plik\xF3w.");for(let m of l.value){if(++g>Y){d=!1;break}if(!E(m)||typeof m.path!="string"||!["tree","blob","commit"].includes(String(m.type)))throw new Error("Niepoprawna lista plik\xF3w.");let y=m.path;if(s.has(y))throw new Error("Powt\xF3rzona strona listy plik\xF3w.");if(s.add(y),m.type==="tree"||!x(y))continue;if(m.type==="commit"){d=!1,h("Pomini\u0119to submodu\u0142y repozytorium.");continue}let O=m.mode==="120000";n.push({path:y,read:()=>O?Promise.reject(new Error("UNREADABLE")):(b.has(y)||b.set(y,(async()=>{if(t.signal.throwIfAborted(),p>=v)throw new Error("LIMIT");t.progress("Odczytuj\u0119 plik: "+y);let D=await o.file(r.id,y,a.commit);if(p+=D.size,p>v)throw new Error("LIMIT");return D})()),b.get(y))})}if(g>Y){h("Osi\u0105gni\u0119to limit listy plik\xF3w.");break}if(l.next===""||l.next===null&&l.value.length<100)break;let U=l.next===null?c+1:Number(l.next);if(!Number.isSafeInteger(U)||U<=c)throw new Error("Niepoprawna paginacja.");c=U}}catch{t.signal.throwIfAborted(),d=!1,h("Nie odczytano ca\u0142ej listy plik\xF3w GitLaba.")}let u={name:r.name,entries:n,complete:d,gitDetected:!0,refreshable:!1},S=await ie(u,t.signal),L=await se(u,t.signal);t.signal.throwIfAborted();let R={format:"agent-scanner-repository-transfer",version:1,transferId:ce(),collectedAt:new Date().toISOString(),name:r.name,source:a,inventoryComplete:d&&S.complete&&L.complete,issues:i,files:S.files.map(l=>({path:l.path,content:l.content,selected:l.selected,omissionReason:l.omissionReason??null})),reportFiles:L.files.map(l=>({path:l.path,content:l.content,selected:!1,omissionReason:l.omissionReason}))};for(let l of[...R.reportFiles,...R.files].reverse()){if(H(R)<=v)break;l.content="",l.selected=!1,l.omissionReason="LIMIT",R.inventoryComplete=!1,h("Osi\u0105gni\u0119to limit rozmiaru paczki.")}let X=new Set(R.files.filter(l=>T(l.path)!=="CONTEXT").flatMap(l=>B(l.path,l.content)));return R.files=R.files.filter(l=>T(l.path)!=="CONTEXT"||X.has(l.path)),de(R,new URL(e.url).origin)}var G=window,te=document.currentScript,W=G.__agentScannerImport;if(W&&te instanceof HTMLScriptElement){let e=new URL(te.src),t=new URL(W.url);Q(W.nonce)&&t.origin===e.origin&&t.pathname===new URL("../",e).pathname?Te(W,t):delete G.__agentScannerImport,te.remove()}function Te(e,t){document.querySelector("aside[data-agent-scanner-tools]")?.remove();let r=document.createElement("aside");r.dataset.agentScannerTools="";let o=r.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=`/* Single source of visual values. Components consume semantic tokens, never palette literals. */
:host {
  color-scheme: dark;

  --color-bg: #0a0c10;
  --color-surface: #11161d;
  --color-surface-raised: #1b232d;
  --color-surface-inset: #0c1016;
  --color-surface-hover: #242f3c;
  --color-border: #303c4a;
  --color-border-strong: #566779;
  --color-text: #eef2f6;
  --color-text-secondary: #c1cbd5;
  --color-text-muted: #9ba9b8;
  --color-text-inverse: #10160c;

  --color-accent: #b8f36b;
  --color-info: #75d9df;
  --color-output: #ff9b73;
  --color-warning: #f5b86d;
  --color-danger: #ff7b79;
  --color-violet: #d5b4f1;
  --color-accent-soft: color-mix(in srgb, var(--color-accent) 8%, var(--color-surface));
  --color-accent-border: color-mix(in srgb, var(--color-accent) 40%, var(--color-border));
  --color-info-soft: color-mix(in srgb, var(--color-info) 8%, var(--color-surface));
  --color-info-border: color-mix(in srgb, var(--color-info) 40%, var(--color-border));
  --color-output-soft: color-mix(in srgb, var(--color-output) 8%, var(--color-surface));
  --color-output-border: color-mix(in srgb, var(--color-output) 40%, var(--color-border));
  --color-warning-soft: color-mix(in srgb, var(--color-warning) 8%, var(--color-surface));
  --color-warning-border: color-mix(in srgb, var(--color-warning) 40%, var(--color-border));
  --color-danger-soft: color-mix(in srgb, var(--color-danger) 8%, var(--color-surface));
  --color-danger-border: color-mix(in srgb, var(--color-danger) 40%, var(--color-border));
  --color-violet-soft: color-mix(in srgb, var(--color-violet) 8%, var(--color-surface));
  --color-violet-border: color-mix(in srgb, var(--color-violet) 40%, var(--color-border));
  --color-backdrop: rgb(2 5 8 / 72%);
  --color-shadow: rgb(0 0 0 / 48%);
  --color-selection: color-mix(in srgb, var(--color-accent) 24%, transparent);

  /* Stable telemetry roles, independent of the component that displays them. */
  --metric-fresh: var(--color-accent);
  --metric-cache: var(--color-info);
  --metric-output: var(--color-output);
  --metric-credits: var(--color-warning);
  --metric-cache-write: var(--color-violet);

  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  --text-xs: 0.6875rem;
  --text-sm: 0.75rem;
  --text-base: 0.8125rem;
  --text-md: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.125rem;
  --text-2xl: 1.25rem;
  --text-3xl: 1.5rem;
  --text-4xl: 1.75rem;
  --text-5xl: 2rem;
  --text-display: 2.5rem;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;
  --tracking-label: 0.08em;
  --tracking-heading: -0.025em;

  --space-1: 2px;
  --space-2: 4px;
  --space-3: 6px;
  --space-4: 8px;
  --space-5: 12px;
  --space-6: 16px;
  --space-7: 20px;
  --space-8: 24px;
  --space-9: 32px;
  --space-10: 40px;
  --space-11: 48px;
  --space-12: 64px;
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  --shadow-overlay: 0 20px 64px var(--color-shadow);
  --shadow-aside: -24px 0 64px var(--color-shadow);
  --focus-ring: 2px solid var(--color-info);
  --focus-offset: 2px;
  --control-height: 36px;
  --control-height-sm: 32px;
  --control-height-lg: 44px;
  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
  /* Compact glyph sizes for dense telemetry rows; controls retain their own hit area. */
  --icon-12: 12px;
  --icon-14: 14px;
  --icon-16: 16px;
  --icon-18: 18px;
  --icon-20: 20px;
  --icon-22: 22px;
  --icon-24: 24px;
  --icon-28: 28px;
  --icon-32: 32px;
  --icon-40: 40px;
  --icon-48: 48px;
  --topbar-height: 68px;
  --sidebar-width: 304px;
  --page-padding: clamp(var(--space-6), 3vw, var(--space-10));
  --panel-padding: var(--space-8);
  --motion-fast: 160ms;
  --motion-normal: 240ms;
  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --z-toolbar: 20;
  --z-aside: 1000;
}

@media (max-width: 700px) {
  :host { --panel-padding: var(--space-6); }
}

/* Explicit, opt-in presentation contracts. Feature CSS owns layout and domain visuals. */
.ui-button, .ui-icon-button {
  display: inline-flex;
  min-height: var(--control-height);
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-5);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  color: var(--color-text);
  background: var(--color-surface-raised);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast);
}

.ui-icon-button {
  width: var(--control-height);
  height: var(--control-height);
  min-width: var(--control-height);
  flex: 0 0 auto;
  padding: 0;
}

.ui-button > mat-icon, .ui-icon-button > mat-icon {
  width: var(--icon-md);
  height: var(--icon-md);
  flex: 0 0 var(--icon-md);
  margin: 0;
  font-size: var(--icon-md);
  line-height: 1;
}

.ui-button:hover:not(:disabled), .ui-icon-button:hover:not(:disabled) {
  border-color: var(--color-info);
  background: var(--color-surface-hover);
}

.ui-button--primary {
  border-color: var(--color-accent);
  color: var(--color-text-inverse);
  background: var(--color-accent);
}
.ui-button--primary:hover:not(:disabled) {
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 85%, var(--color-text));
}
.ui-button--ghost { border-color: transparent; background: transparent; }
.ui-button--danger { color: var(--color-danger); border-color: var(--color-danger-border); }
.ui-button--danger:hover:not(:disabled) { border-color: var(--color-danger); background: var(--color-danger-soft); }
.ui-button--small { min-height: var(--control-height-sm); font-size: var(--text-xs); }
.ui-button:disabled, .ui-icon-button:disabled { opacity: .5; cursor: not-allowed; }

.ui-card { min-width: 0; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-surface); }
.ui-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-6) var(--panel-padding);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}
.ui-eyebrow {
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-label);
  line-height: var(--leading-normal);
}
.ui-badge { display: inline-flex; align-items: center; gap: var(--space-3); padding: var(--space-2) var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-pill); color: var(--color-text-secondary); font-size: var(--text-xs); }

.ui-tabs { display: flex; gap: var(--space-2); overflow-x: auto; border-bottom: 1px solid var(--color-border); }
.ui-tabs > button {
  display: inline-flex;
  min-height: var(--control-height-lg);
  flex: 0 0 auto;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-5) var(--space-6);
  border: 0;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  background: transparent;
  font-size: var(--text-md);
  font-weight: var(--weight-semibold);
  white-space: nowrap;
}
.ui-tabs > button:hover { color: var(--color-text); background: var(--color-surface); }
.ui-tabs > button:is(.active, [aria-selected="true"], [aria-current="page"]) { color: var(--color-text); border-bottom-color: var(--color-accent); }
.ui-tabs > button > span { color: var(--color-text-muted); font-size: var(--text-xs); }

.ui-segmented { display: flex; max-width: 100%; gap: var(--space-2); padding: var(--space-2); overflow-x: auto; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface-inset); }
.ui-segmented > button {
  display: inline-flex;
  min-width: var(--control-height-sm);
  min-height: var(--control-height-sm);
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-xs);
  color: var(--color-text-muted);
  background: transparent;
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  white-space: nowrap;
}
.ui-segmented > button:hover { color: var(--color-text); background: var(--color-surface-hover); }
.ui-segmented > button:is(.active, .selected, [aria-pressed="true"], [aria-selected="true"]) { color: var(--color-info); border-color: var(--color-info-border); background: var(--color-info-soft); }

.ui-code { overflow: auto; scrollbar-gutter: stable; color: var(--color-text-secondary); background: var(--color-surface-inset); font: var(--text-sm)/var(--leading-relaxed) var(--font-mono); white-space: pre-wrap; overflow-wrap: anywhere; }
.info-tip.mat-icon { width: var(--icon-18); height: var(--icon-18); flex: 0 0 var(--icon-18); overflow: visible; color: var(--color-info); font-size: var(--icon-18); line-height: 1; vertical-align: -4px; cursor: help; }
.info-tip.mat-icon.warning { color: var(--color-warning); }
.info-tip.mat-icon:focus-visible { outline: var(--focus-ring); outline-offset: var(--focus-offset); border-radius: 50%; }

:host { all: initial; position: fixed; bottom: var(--space-6); right: var(--space-6); z-index: 2147483647; width: 380px; max-width: calc(100vw - var(--space-9)); color-scheme: dark; }
*, *::before, *::after { box-sizing: border-box; }
.capture-panel { overflow: auto; max-height: calc(100dvh - var(--space-9)); padding: var(--space-7); font: var(--text-md)/var(--leading-normal) var(--font-sans); color: var(--color-text); box-shadow: var(--shadow-overlay); }
.capture-header { display: flex; align-items: center; gap: var(--space-5); padding-bottom: var(--space-6); border-bottom: 1px solid var(--color-border); }
.capture-brand { display: flex; align-items: flex-end; justify-content: center; gap: var(--space-2); width: var(--space-11); height: var(--space-11); flex: 0 0 auto; padding: var(--space-5); border: 1px solid var(--color-accent-border); border-radius: var(--radius-lg); background: var(--color-accent-soft); }
.capture-brand i { width: var(--space-2); height: var(--space-5); border-radius: var(--radius-xs); background: var(--color-accent); }
.capture-brand i:nth-child(2) { height: var(--space-8); }
.capture-brand i:nth-child(3) { height: var(--space-6); }
.capture-title { min-width: 0; }
.capture-title h2 { margin: var(--space-2) 0 0; font: var(--weight-semibold) var(--text-lg)/var(--leading-tight) var(--font-sans); color: var(--color-text); }
.capture-eyebrow { color: var(--color-text-muted); font-size: var(--text-xs); letter-spacing: var(--tracking-label); font-weight: var(--weight-semibold); }
.capture-status { margin-top: var(--space-6); padding: var(--space-6); border: 1px solid var(--color-info-border); border-radius: var(--radius-md); background: var(--color-info-soft); }
.capture-state { display: flex; align-items: center; gap: var(--space-4); color: var(--color-info); font-size: var(--text-sm); font-weight: var(--weight-semibold); }
.capture-state::before { content: ''; width: var(--space-4); height: var(--space-4); flex: 0 0 auto; border: 2px solid currentColor; border-radius: var(--radius-pill); }
[data-state="working"] .capture-state::before { border-right-color: transparent; animation: capture-spin 1s linear infinite; }
.capture-status p { margin: var(--space-4) 0 0; overflow-wrap: anywhere; }
[data-state="success"] .capture-status { border-color: var(--color-accent-border); background: var(--color-accent-soft); }
[data-state="success"] .capture-state { color: var(--color-accent); }
[data-state="error"] .capture-status { border-color: var(--color-danger-border); background: var(--color-danger-soft); }
[data-state="error"] .capture-state { color: var(--color-danger); }
[data-state="waiting"] .capture-status { border-color: var(--color-warning-border); background: var(--color-warning-soft); }
[data-state="waiting"] .capture-state { color: var(--color-warning); }
.capture-privacy { margin: var(--space-5) 0 var(--space-6); color: var(--color-text-muted); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
.capture-controls { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: var(--space-4); }
button:focus-visible, .capture-panel:focus-visible { outline: var(--focus-ring); outline-offset: -2px; }
[hidden] { display: none; }
@keyframes capture-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none; transition: none; }
}
@media (forced-colors: active) {
  .capture-panel, .capture-status, .capture-brand { background: Canvas; color: CanvasText; border-color: CanvasText; }
  .capture-state, .capture-title h2, .capture-eyebrow, .capture-privacy { color: CanvasText; }
  .capture-brand i { background: CanvasText; }
  .ui-button { border-color: ButtonText; color: ButtonText; background: ButtonFace; }
  button:focus-visible, .capture-panel:focus-visible { outline-color: Highlight; }
}
`;let n=document.createElement("section");n.className="ui-card capture-panel",n.tabIndex=-1,n.setAttribute("aria-label","Import do Agent Scannera");let s=document.createElement("header");s.className="capture-header",s.innerHTML='<div class="capture-brand" aria-hidden="true"><i></i><i></i><i></i></div><div class="capture-title"><span class="capture-eyebrow">CAPTURE \xB7 GITLAB</span><h2>AI Agent Scanner</h2></div>';let i=document.createElement("div");i.className="capture-status",i.setAttribute("role","status"),i.setAttribute("aria-atomic","true");let d=document.createElement("span");d.className="capture-state";let c=document.createElement("p");i.append(d,c);let g=document.createElement("p");g.className="capture-privacy",g.textContent="Konfiguracje trafi\u0105 do tej przegl\u0105darki. Bez wysy\u0142ania na serwer Scannera ani do AI.";let p=document.createElement("div");p.className="capture-controls",o.append(a,n),n.append(s,i,g,p),document.documentElement.append(r);let b=new AbortController,h=null,u=!1,S=!1,L=!1,R=null,X=0,l=Date.now(),U=0,m=(f,A="working")=>{L||(c.textContent=f,n.dataset.state=A,d.textContent={working:"Import w toku",waiting:"Oczekiwanie na po\u0142\u0105czenie",error:"Import wymaga uwagi",success:"Gotowe",cancelled:"Import anulowany"}[A],i.setAttribute("role",A==="error"?"alert":"status"))};m("\u0141\u0105cz\u0119 z GitLabem i przygotowuj\u0119 odczyt konfiguracji\u2026");let y=(f,A={})=>{e.receiver&&!e.receiver.closed&&e.receiver.postMessage({type:f,version:K,nonce:e.nonce,...A},t.origin)},O=(f,A)=>{let C=document.createElement("button");return C.type="button",C.textContent=f,C.className="ui-button",C.onclick=A,p.append(C),C},D=()=>{u=!1,S=!1,l=Date.now(),e.receiver=window.open(t.href,"agent-scanner-"+e.nonce+"-"+ ++X),m("\u0141\u0105cz\u0119 ze Scannerem\u2026")},j=O("Otw\xF3rz Scanner ponownie",D),N=O("Pon\xF3w przekazanie",D);j.classList.add("ui-button--primary"),N.classList.add("ui-button--primary"),N.hidden=!0,j.hidden=!!e.receiver;let k=O("Anuluj",()=>{if(S){m("Trwa zapis. Poczekaj na potwierdzenie przed zamkni\u0119ciem.");return}y("CANCEL"),I(),r.remove()});k.classList.add("ui-button--ghost");let z=O("Zamknij",()=>{I(),r.remove()});z.hidden=!0,e.focus=()=>{n.focus({preventScroll:!0})},n.addEventListener("keydown",f=>{f.key==="Escape"&&(z.hidden?k:z).click()});function re(){!u||!h||S||L||(S=!0,U=Date.now(),N.hidden=!0,k.disabled=!0,y("SNAPSHOT",{packet:h}),m("Zapisuj\u0119 pliki w przegl\u0105darce Scannera\u2026"))}function ne(f){if(!(f.source!==e.receiver||f.origin!==t.origin||!E(f.data)||f.data.nonce!==e.nonce||f.data.version!==K))switch(l=Date.now(),f.data.type){case"READY":u=!0,j.hidden=!0,y("CONNECTED"),R?(y("ERROR",{message:R}),I()):re();break;case"SAVED":if(!h||f.data.transferId!==h.transferId)return;m("Zapisano repozytorium. Raport jest otwarty w Agent Scannerze.","success"),k.hidden=!0,N.hidden=!0,j.hidden=!0,z.hidden=!1,I();break;case"ERROR":S=!1,k.disabled=!1,N.hidden=!h,m(typeof f.data.message=="string"?f.data.message.slice(0,300):"Scanner odrzuci\u0142 dane repozytorium.","error");break;case"CANCEL":m("Import anulowany w Scannerze.","cancelled"),I(),k.hidden=!0,z.hidden=!1;break}}window.addEventListener("message",ne);let me=window.setInterval(()=>{if(!L){if(e.receiver?.closed&&u){m("Karta Scannera zosta\u0142a zamkni\u0119ta. Uruchom import ponownie.","error"),I(),k.hidden=!0,z.hidden=!1;return}if(!u&&Date.now()-l>6e4){if(R){I();return}j.hidden=!1,h&&m(`Brak po\u0142\u0105czenia ze Scannerem przez ${6e4/1e3} s. Otw\xF3rz go ponownie. Je\u015Bli polityka GitLaba blokuje po\u0142\u0105czenie kart, u\u017Cyj lokalnego folderu w Scannerze.`,"waiting")}S&&Date.now()-U>12e4&&(S=!1,k.disabled=!1,N.hidden=!1,m(`Brak potwierdzenia zapisu przez ${12e4/1e3} s. Mo\u017Cesz bezpiecznie ponowi\u0107 przekazanie danych.`,"error")),u&&!S&&y("PROGRESS",{message:c.textContent})}},1e3),oe=()=>{y("CANCEL"),I()};window.addEventListener("pagehide",oe,{once:!0});function I(){L=!0,b.abort(),clearInterval(me),j.hidden=!0,N.hidden=!0,h=null,window.removeEventListener("message",ne),window.removeEventListener("pagehide",oe),G.__agentScannerImport===e&&delete G.__agentScannerImport}if(!le(location.origin)){m("Otw\xF3rz stron\u0119 GitLaba przez HTTP lub HTTPS.","error"),I();return}ue(pe(document,location.href,G.gon),{signal:b.signal,progress:m,chooseRef:async f=>window.prompt("Nie rozpoznano rewizji. Podaj dok\u0142adn\u0105 nazw\u0119 ga\u0142\u0119zi, tagu lub SHA (bez \u015Bcie\u017Cki pliku):",f)}).then(f=>{b.signal.aborted||(h=f,re(),u||m("Pliki gotowe. Czekam na kart\u0119 Scannera\u2026","waiting"))}).catch(f=>{if(b.signal.aborted)return;let A=f instanceof Error?f.message:"Nie uda\u0142o si\u0119 odczyta\u0107 repozytorium.";R=A,m(A,"error"),y("ERROR",{message:A}),k.hidden=!0,z.hidden=!1,u&&I()})}})();
