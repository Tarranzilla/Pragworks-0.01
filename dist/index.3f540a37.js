let e=!1,t=localStorage.getItem("lgpd");const o="https://jsonplaceholder.typicode.com/posts",l=document.getElementById("lgpd-cont");document.getElementById("lgpd-but").addEventListener("click",(()=>{!async function(){if(1==e){l.classList.add("lgpd-inactive"),l.classList.remove("lgpd-active"),document.body.classList.remove("body-overflow"),console.log("Banner LGPD Fechado");let e=await fetch(o);if(""!=(await e.json()).error){let e="123_test";localStorage.setItem("lgpd",e),console.log("Usuario aceitou o LGPD")}}}()})),t||(document.body.classList.add("body-overflow"),l.classList.add("lgpd-active"),l.classList.remove("lgpd-inactive"),console.log("Banner LGPD Aberto"),e=!0);
//# sourceMappingURL=index.3f540a37.js.map