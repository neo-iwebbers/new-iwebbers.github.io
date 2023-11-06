import{_ as T,a as I,b as W}from"./tag.504dd4c6.js";import{g as b,o as i,c,a as n,t as m,b as u,F as w,r as k,h as $,k as C,l as B,w as N,d as j,j as s,s as L,i as V,u as q,m as D}from"./entry.43ed863a.js";import H from"./ContentRenderer.b4368382.js";import{_ as O}from"./nuxt-link.c33810fd.js";import{q as z,u as R}from"./query.8d2600e1.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.vue.38d87a6c.js";import"./index.288f722b.js";import"./preview.53ed4b88.js";const A={class:"text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center"},F={class:"text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400"},E={class:"flex w-full justify-center text-xs md:text-base my-8"},S={class:"md:flex dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm"},G={class:"flex items-center font-semibold"},J={class:"flex items-center gap-2 flex-wrap my-5"},K=b({__name:"Header",props:{title:{default:"no-title"},image:{default:"#"},alt:{default:"no-img"},description:{default:"no description"},date:{default:"no-date"},tags:{default:()=>[]}},setup(v){return(t,l)=>{const a=T,o=I,d=W;return i(),c("header",null,[n("h1",A,m(t.title||""),1),u(a,{src:t.image||"",alt:t.alt||"",width:"600",class:"m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"},null,8,["src","alt"]),n("p",F,m(t.description),1),n("div",E,[n("div",S,[n("div",G,[u(o),n("p",null,m(t.date||""),1)]),n("div",J,[u(d),(i(!0),c(w,null,k(t.tags,e=>(i(),c("span",{key:e,class:"bg-gray-200 dark:bg-zinc-700 rounded-md px-2 py-1 font-semibold"},m(e),1))),128))])])])])}}}),M={class:"lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end"},P={class:"border dark:border-gray-800 p-3 rounded-md min-w-[200px]"},Q=n("h1",{class:"text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2"}," Table Of Content ",-1),U=b({__name:"Toc",async setup(v){let t,l;const{path:a}=$(),d=([t,l]=C(()=>z(a).findOne()),t=await t,l(),t).body.toc.links;return(e,_)=>{const p=O;return i(),c("div",M,[n("div",P,[Q,(i(!0),c(w,null,k(s(d),r=>(i(),B(p,{key:r.id,to:`#${r.id}`,class:"block text-xs mb-3 hover:underline"},{default:N(()=>[j(m(r.text),1)]),_:2},1032,["to"]))),128))])])}}}),X={class:"px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12"},Y={class:"col-span-12 lg:col-span-9"},Z={class:"prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"},ee=n("p",null,"No content found.",-1),de=b({__name:"[post]",async setup(v){let t,l;const{path:a}=$(),{data:o,error:d}=([t,l]=C(()=>R(`blog-post-${a}`,()=>z(a).findOne())),t=await t,l(),t);d.value&&L("/404");const e=V(()=>{var _,p,r,g,x,f,h,y;return{title:((_=o.value)==null?void 0:_.title)||"no-title available",description:((p=o.value)==null?void 0:p.description)||"no-descriptoin available",image:((r=o.value)==null?void 0:r.image)||"/nuxt-blog/no-image_cyyits.png",alt:((g=o.value)==null?void 0:g.alt)||"no alter data available",ogImage:((x=o.value)==null?void 0:x.ogImage)||"/nuxt-blog/no-image_cyyits.png",date:((f=o.value)==null?void 0:f.date)||"not-date-available",tags:((h=o.value)==null?void 0:h.tags)||[],published:((y=o.value)==null?void 0:y.published)||!1}});return q({title:e.value.title+" | iWebbers.com"||"",meta:[{name:"description",content:e.value.description},{name:"description",content:e.value.description},{property:"og:site_name",content:"iWebbers's Blog"},{hid:"og:type",property:"og:type",content:"website"},{property:"og:url",content:`https://blog-nuriWebbers.vercel.app/${a}`},{property:"og:title",content:e.value.title},{property:"og:description",content:e.value.description},{property:"og:image",content:e.value.ogImage||e.value.image},{name:"twitter:site",content:"@qdnvubp"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:`https://blog-nuriWebbers.vercel.app/${a}`},{name:"twitter:title",content:e.value.title},{name:"twitter:description",content:e.value.description},{name:"twitter:image",content:e.value.ogImage||e.value.image}],link:[{rel:"canonical",href:`https://blog-nuriWebbers.vercel.app/${a}`}]}),(_,p)=>{const r=K,g=H,x=U;return i(),c("div",X,[n("div",Y,[u(r,{title:s(e).title,image:s(e).image,alt:s(e).alt,date:s(e).date,description:s(e).description,tags:s(e).tags},null,8,["title","image","alt","date","description","tags"]),n("div",Z,[s(o)?(i(),B(g,{key:0,value:s(o)},{empty:N(()=>[ee]),_:1},8,["value"])):D("",!0)])]),u(x)])}}});export{de as default};
