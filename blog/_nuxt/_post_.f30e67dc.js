import{_ as T,a as I,b as j}from"./tag.aa793809.js";import{g as b,o as i,c,a as n,t as p,b as _,F as w,r as k,h as $,k as C,l as B,w as N,d as L,j as s,s as V,i as q,u as D,m as H}from"./entry.449d8a85.js";import O from"./ContentRenderer.10670a81.js";import{_ as R}from"./nuxt-link.d371a606.js";import{q as z,u as A}from"./query.b10bc11e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.vue.19084fb0.js";import"./index.288f722b.js";import"./preview.10feeb9e.js";const F={class:"text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center"},W={class:"text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400"},E={class:"flex w-full justify-center text-xs md:text-base my-8"},S={class:"md:flex dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm"},G={class:"flex items-center font-semibold"},J={class:"flex items-center gap-2 flex-wrap my-5"},K=b({__name:"Header",props:{title:{default:"no-title"},image:{default:"#"},alt:{default:"no-img"},description:{default:"no description"},date:{default:"no-date"},tags:{default:()=>[]}},setup(v){return(e,l)=>{const a=T,o=I,d=j;return i(),c("header",null,[n("h1",F,p(e.title||""),1),_(a,{src:e.image||"",alt:e.alt||"",width:"600",class:"m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"},null,8,["src","alt"]),n("p",W,p(e.description),1),n("div",E,[n("div",S,[n("div",G,[_(o),n("p",null,p(e.date||""),1)]),n("div",J,[_(d),(i(!0),c(w,null,k(e.tags,t=>(i(),c("span",{key:t,class:"bg-gray-200 dark:bg-zinc-700 rounded-md px-2 py-1 font-semibold"},p(t),1))),128))])])])])}}}),M={class:"lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end"},P={class:"border dark:border-gray-800 p-3 rounded-md min-w-[200px]"},Q=n("h1",{class:"text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2"}," Table Of Content ",-1),U=b({__name:"Toc",async setup(v){let e,l;const{path:a}=$(),d=([e,l]=C(()=>z(a).findOne()),e=await e,l(),e).body.toc.links;return(t,u)=>{const m=R;return i(),c("div",M,[n("div",P,[Q,(i(!0),c(w,null,k(s(d),r=>(i(),B(m,{key:r.id,to:`#${r.id}`,class:"block text-xs mb-3 hover:underline"},{default:N(()=>[L(p(r.text),1)]),_:2},1032,["to"]))),128))])])}}}),X={class:"px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12"},Y={class:"col-span-12 lg:col-span-9"},Z={class:"prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"},tt=n("p",null,"No content found.",-1),dt=b({__name:"[post]",async setup(v){let e,l;const{path:a}=$(),{data:o,error:d}=([e,l]=C(()=>A(`blog-post-${a}`,()=>z(a).findOne())),e=await e,l(),e);d.value&&V("/404");const t=q(()=>{var u,m,r,g,x,f,h,y;return{title:((u=o.value)==null?void 0:u.title)||"no-title available",description:((m=o.value)==null?void 0:m.description)||"no-descriptoin available",image:((r=o.value)==null?void 0:r.image)||"/nuxt-blog/no-image_cyyits.png",alt:((g=o.value)==null?void 0:g.alt)||"no alter data available",ogImage:((x=o.value)==null?void 0:x.ogImage)||"/nuxt-blog/no-image_cyyits.png",date:((f=o.value)==null?void 0:f.date)||"not-date-available",tags:((h=o.value)==null?void 0:h.tags)||[],published:((y=o.value)==null?void 0:y.published)||!1}});return D({title:t.value.title+" | iWebbers.com"||"",meta:[{name:"description",content:t.value.description},{name:"description",content:t.value.description},{property:"og:site_name",content:"iWebbers's Blog"},{hid:"og:type",property:"og:type",content:"website"},{property:"og:url",content:`https://iwebbers.com/blog${a}`},{property:"og:title",content:t.value.title},{property:"og:description",content:t.value.description},{property:"og:image",content:"/blog"+t.value.ogImage||"/blog"+t.value.image},{name:"twitter:site",content:"@qdnvubp"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:`https://iwebbers.com/blog${a}`},{name:"twitter:title",content:t.value.title},{name:"twitter:description",content:t.value.description},{name:"twitter:image",content:t.value.ogImage||t.value.image}],link:[{rel:"canonical",href:`https://iwebbers.com/blog${a}`}]}),(u,m)=>{const r=K,g=O,x=U;return i(),c("div",X,[n("div",Y,[_(r,{title:s(t).title,image:s(t).image,alt:s(t).alt,date:s(t).date,description:s(t).description,tags:s(t).tags},null,8,["title","image","alt","date","description","tags"]),n("div",Z,[s(o)?(i(),B(g,{key:0,value:s(o)},{empty:N(()=>[tt]),_:1},8,["value"])):H("",!0)])]),_(x)])}}});export{dt as default};
