import{w as C,ai as T,o as F,g as P,v as A,j as N,k as d,c as E,h as O,l as k,i as V,m as q,n as I,aj as $}from"./index.7c89327f.js";let g,m=0;const s=new Array(256);for(let e=0;e<256;e++)s[e]=(e+256).toString(16).substring(1);const U=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return a=>{const r=new Uint8Array(a);return e.getRandomValues(r),r}}return a=>{const r=[];for(let o=a;o>0;o--)r.push(Math.floor(Math.random()*256));return r}})(),M=4096;function Q(){(g===void 0||m+16>M)&&(m=0,g=U(M));const e=Array.prototype.slice.call(g,m,m+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,s[e[0]]+s[e[1]]+s[e[2]]+s[e[3]]+"-"+s[e[4]]+s[e[5]]+"-"+s[e[6]]+s[e[7]]+"-"+s[e[8]]+s[e[9]]+"-"+s[e[10]]+s[e[11]]+s[e[12]]+s[e[13]]+s[e[14]]+s[e[15]]}const _={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},G=["beforeShow","show","beforeHide","hide"];function L({showing:e,canShow:a,hideOnRouteChange:r,handleShow:o,handleHide:f,processOnMount:p}){const c=P(),{props:n,emit:i,proxy:y}=c;let u;function R(t){e.value===!0?h(t):v(t)}function v(t){if(n.disable===!0||t!==void 0&&t.qAnchorHandled===!0||a!==void 0&&a(t)!==!0)return;const l=n["onUpdate:modelValue"]!==void 0;l===!0&&(i("update:modelValue",!0),u=t,A(()=>{u===t&&(u=void 0)})),(n.modelValue===null||l===!1)&&b(t)}function b(t){e.value!==!0&&(e.value=!0,i("beforeShow",t),o!==void 0?o(t):i("show",t))}function h(t){if(n.disable===!0)return;const l=n["onUpdate:modelValue"]!==void 0;l===!0&&(i("update:modelValue",!1),u=t,A(()=>{u===t&&(u=void 0)})),(n.modelValue===null||l===!1)&&w(t)}function w(t){e.value!==!1&&(e.value=!1,i("beforeHide",t),f!==void 0?f(t):i("hide",t))}function S(t){n.disable===!0&&t===!0?n["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!1):t===!0!==e.value&&(t===!0?b:w)(u)}C(()=>n.modelValue,S),r!==void 0&&T(c)===!0&&C(()=>y.$route.fullPath,()=>{r.value===!0&&e.value===!0&&h()}),p===!0&&F(()=>{S(n.modelValue)});const x={show:v,hide:h,toggle:R};return Object.assign(y,x),x}var z=N({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:r}}=P(),o=V(q,d);if(o===d)return console.error("QPage needs to be a deep child of QLayout"),d;if(V(I,d)===d)return console.error("QPage needs to be child of QPageContainer"),d;const p=E(()=>{const n=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const i=o.isContainer.value===!0?o.containerHeight.value:r.screen.height;return e.styleFn(n,i)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-n+"px":r.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":r.screen.height-n+"px"}}),c=E(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>O("main",{class:c.value,style:p.value},k(a.default))}});const B=`CONSTRAINTS:

1. ~4000 word limit for short term memory. Your short term memory is short, so immediately save important information to files.
2. If you are unsure how you previously did something or want to recall past events, thinking about similar events will help you remember.
3. No user assistance
4. Exclusively use the commands listed in double quotes e.g. "command name"

COMMANDS:

1. Google Search: "google", args: "input": "<search>"
2. Browse Website: "browse", args: "url": "<url>", "question": "<what_you_want_to_find_on_website>"
3. Task Complete (Shutdown): "shutdown", args: "reason": "<reason>"
4. Do Nothing: "doNothing", args: ""

RESOURCES:

1. Internet access for searches and information gathering.
2. Long Term memory management.
3. GPT-3.5 powered Agents for delegation of simple tasks.
4. File output.

PERFORMANCE EVALUATION:

1. Continuously review and analyze your actions to ensure you are performing to the best of your abilities.
2. Constructively self-criticize your big-picture behavior constantly.
3. Reflect on past decisions and strategies to refine your approach.
4. Every command has a cost, so be smart and efficient. Aim to complete tasks in the least number of steps.

You should only respond in JSON format as described below

RESPONSE FORMAT:
{
    "command": {
        "name": "command name",
        "args":{
            "key": "value"
        }
    },
    "thoughts": {
        "text": "thought",
        "reasoning": "reasoning",
        "plan": [short bulleted,list that conveys,long-term plan],
        "criticism": "constructive self-criticism",
        "speak": "thoughts summary to say to user"
    }
}

Ensure the response can be parsed by Javascript JSON.parse() function.
`,j=(e,a)=>`"""
${e}
"""

Using the above text, please answer the following question: "${a}" -- if the question cannot be answered using the text, please summarize the text.
`,Y=$("assistant",{state:()=>({name:"",role:"",goals:[""]}),getters:{demo(){return{name:"ChefGPT",role:"an AI designed to browse the web to discover the next upcoming event and invent a unique and original recipe that would suit it.",goals:["Invent an original and out-of-the-box recipe to suit a current event, such as Easter.","Save the resulting recipe to a file.","Shutdown upon achieving the goal."]}},prompt(e){let a=`You are ${e.name}, ${e.role}
Your decisions must always be made independently without seeking user assistance. Play to your strengths as an LLM and pursue simple strategies with no legal complications.

GOALS:

`;return this.goals.forEach((r,o)=>{a+=`${o+1}. ${r}
`}),a+=`
`,a+=B,a},completed(e){return e.name&&e.role&&e.goals.length>=1&&e.goals[0]}},actions:{addGoal(){this.goals.push("")},removeGoal(e){this.goals.splice(e,1)},setDemoAssistant(){this.name=this.demo.name,this.role=this.demo.role,this.goals=this.demo.goals}},persist:!0}),D=$("credential",{state:()=>({openai:"",google:{key:"",engine:""}}),getters:{requireOpenAICredential(){return this.openai===""}},actions:{},persist:!0});export{z as Q,_ as a,G as b,L as c,Y as d,D as e,j as g,Q as u};
