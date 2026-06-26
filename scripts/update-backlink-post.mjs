import { createClient } from "@sanity/client";
const client = createClient({ projectId:"67vl8x07", dataset:"production", apiVersion:"2024-03-01", token:process.env.SANITY_API_TOKEN, useCdn:false });
const post = await client.fetch(`*[_type=="post" && slug.current=="backlink-nedir-seo-icin-onemi-ve-nasil-yapilir"][0]{_id, body}`);
const out = post.body.map((b)=>{
  if(b._key!=="k0") return b;
  return { ...b,
    markDefs:[{_key:"bl1",_type:"link",href:"/seo/link-building"},{_key:"bl2",_type:"link",href:"/blog/seo-nedir"}],
    children:[
      {_key:"k0a",_type:"span",marks:[],text:"Backlink nedir? En basit haliyle, başka bir sitenin sana verdiği bağlantıdır — ve Google için bu bir güven oyu gibidir. Bir siteye ne kadar çok kaliteli backlink gelirse, arama motoru o siteyi o kadar güvenilir sayar ve sıralamada yukarı taşır. Ama dikkat: sayı değil kalite kazandırır; yanlış ve yapay linkler seni cezalandırabilir bile. Bu rehberde backlink türlerini, nasıl kaliteli link kazanacağını ve profesyonel "},
      {_key:"k0b",_type:"span",marks:["bl1"],text:"link building"},
      {_key:"k0c",_type:"span",marks:[],text:" çalışmasının nasıl yürütüldüğünü anlatıyoruz. Temel kavramlar için "},
      {_key:"k0d",_type:"span",marks:["bl2"],text:"SEO nedir"},
      {_key:"k0e",_type:"span",marks:[],text:" yazımız iyi bir başlangıç olur."},
    ],
  };
});
await client.patch(post._id).set({ body:out, "seo.focusKeyword":"backlink nedir", "seo.seoTitle":"Backlink Nedir? Türleri ve Nasıl Kazanılır?" }).commit();
console.log("✅ backlink-nedir: hook + odak kelime + 2 iç link (link-building, seo-nedir), meta set.");
