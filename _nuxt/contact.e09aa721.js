import{_ as d,o as u,c as m,a as t,i as n,v as a,j as _,t as f,k as h,d as l,l as v}from"./entry.777bdb27.js";import{u as b}from"./index.c36a0918.js";const g={props:["mail"],data(){return{subjectTypePlan:"plan request info",info:{}}},mounted(){localStorage.getItem("plan")&&(this.info.subject=this.subjectTypePlan,this.info.message="plan: "+localStorage.getItem("plan"),localStorage.removeItem("plan"))},methods:{linkMailTo:function(){let s;if(!(!this.info.email||!this.info.message||!this.info.subject||!this.info.name))return s=`${this.mail}?subject=${this.info.subject}&body=${this.info.message}

${this.info.name}
`,s+=`email:(${this.info.email})`,s},sendEmail:function(){if(!this.linkMailTo()){alert("Per favore compila tutti i campi");return}window.location.href="mailto:"+this.linkMailTo()}}},w={id:"contact",class:"contact-area pt-95 pb-100"},x={class:"container"},y=h('<div class="row justify-content-center"><div class="col-lg-6"><div class="section-title text-center pb-20"><h4 class="title">Get in touch</h4><p class="text">Smetti di sprecare tempo e denaro progettando e gestendo un sito web che non ottiene risultati. Felicità garantita!</p></div></div></div>',1),j={class:"row"},S=t("div",{class:"col-lg-6"},[t("div",{class:"contact mt-30"},[t("h4",{class:"contact-title"},"Ci piace sentire la tua opinione o hai un progetto in mente? parliamo."),t("p",{class:"text"},[l("La nostra associazione di sviluppatori web sarà lieta di seguirti nella creazione del tuo business. "),t("br"),l(),t("br"),l(" Smetti di sprecare tempo e denaro progettando e gestendo un sito web che non ottiene risultati. Felicità garantita!")])])],-1),k={class:"col-lg-6"},T={class:"contact-form form-style-one mt-15"},M={id:"contact-form"},E={class:"form-input mt-15"},V=t("label",null,"Name",-1),C={class:"input-items default"},I=t("i",{class:"lni-user"},null,-1),N={class:"form-input mt-15"},P=t("label",null,"Email",-1),z={class:"input-items default"},B=t("i",{class:"lni-envelope"},null,-1),U={class:"form-input mt-15"},G=t("label",null,"Subject",-1),D={class:"input-items default"},F=t("option",{value:"",default:""},"Please select",-1),L=t("option",{value:"new site"},"New Site",-1),W=t("option",{value:"maintenance site"},"Maintenance site",-1),q=["value"],O=t("option",{value:"generic info"},"Generic info",-1),R={class:"form-input mt-15"},A=t("label",null,"Message",-1),H={class:"input-items default"},J=t("i",{class:"lni-pencil-alt"},null,-1),K=t("p",{class:"form-message"},null,-1),Q={class:"form-input standard-buttons mt-20"};function X(s,e,p,c,i,r){return u(),m("section",w,[t("div",x,[y,t("div",j,[S,t("div",k,[t("div",T,[t("form",M,[t("div",E,[V,t("div",C,[n(t("input",{name:"name",type:"text",placeholder:"Name","onUpdate:modelValue":e[0]||(e[0]=o=>i.info.name=o)},null,512),[[a,i.info.name]]),I])]),t("div",N,[P,t("div",z,[n(t("input",{name:"email",type:"text",placeholder:"Email","onUpdate:modelValue":e[1]||(e[1]=o=>i.info.email=o)},null,512),[[a,i.info.email]]),B])]),t("div",U,[G,t("div",D,[n(t("select",{name:"subject",type:"text",placeholder:"Email","onUpdate:modelValue":e[2]||(e[2]=o=>i.info.subject=o)},[F,L,W,t("option",{value:i.subjectTypePlan},f(i.subjectTypePlan),9,q),O],512),[[_,i.info.subject]])])]),t("div",R,[A,t("div",H,[n(t("textarea",{name:"message",placeholder:"Message","onUpdate:modelValue":e[3]||(e[3]=o=>i.info.message=o)},null,512),[[a,i.info.message]]),J])]),K,t("div",Q,[t("button",{class:"main-btn standard-two",type:"button",onClick:e[4]||(e[4]=(...o)=>r.sendEmail&&r.sendEmail(...o)),title:"Invia una richieta ai Webbers"},"Invia richiesta")])])])])])])])}const Y=d(g,[["render",X]]);const Z={__name:"contact",setup(s){return b({title:"Contattaci - Ottieni Risultati Garantiti per il Tuo Sito Web",description:"Smetti di sprecare tempo e denaro progettando e gestendo un sito web che non ottiene risultati. Con il nostro supporto, garantiamo la felicità! Condividi la tua opinione o raccontaci del tuo progetto. La nostra associazione di sviluppatori web è pronta ad aiutarti nella creazione del tuo business.",keywords:"contattaci, risultati garantiti, supporto sviluppatori web, progetto aziendale, felicità"}),(e,p)=>{const c=Y;return u(),v(c,{mail:"iwebbers.info@gmail.com"})}}},et=d(Z,[["__scopeId","data-v-e13c5230"]]);export{et as default};
