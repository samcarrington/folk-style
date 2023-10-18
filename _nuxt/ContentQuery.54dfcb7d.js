import{a as g,Q as C,R as S,q as b,L as Q,S as N,U as _,N as $,v as m,P as k}from"./entry.96b66011.js";const A=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:n,without:o,where:a,sort:l,limit:d,skip:f,locale:s,find:y}=C(u),p=S(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!b().public.content.experimental.advanceQuery;Q(()=>u,()=>r(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:r}=await N(`content-query-${_(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),n.value&&(e=e.only(n.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),l.value&&(e=e.sort(l.value)),d.value&&(e=e.limit(d.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),y.value==="one"?e.findOne().then(i):y.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:p,data:v,refresh:r}},render(u){var c;const t=$(),{data:n,refresh:o,isPartial:a,path:l,only:d,without:f,where:s,sort:y,limit:p,skip:h,locale:i,find:v}=u,r={path:l,only:d,without:f,where:s,sort:y,limit:p,skip:h,locale:i,find:v};if(r.find==="one"){if(!n&&(t!=null&&t["not-found"]))return t["not-found"]({props:r,...this.$attrs});if(t!=null&&t.empty&&(n==null?void 0:n._type)==="markdown"&&!((c=n==null?void 0:n.body)!=null&&c.children.length))return t.empty({props:r,...this.$attrs})}else if((!n||!n.length)&&t!=null&&t["not-found"])return t["not-found"]({props:r,...this.$attrs});return t!=null&&t.default?t.default({data:n,refresh:o,isPartial:a,props:r,...this.$attrs}):((w,q)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:n,props:r,isPartial:a})}}),O=A,P=O;export{P as default};
