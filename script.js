const button=document.getElementById("langBtn");let lang="en";
function setLanguage(next){
  lang=next;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-en][data-tr]").forEach(el=>{
    el.innerHTML=el.dataset[lang];
  });
  button.textContent=lang==="en"?"TR":"EN";
  document.title=lang==="en"?"Erasmus Days 2026 | Şemikler Anatolian High School":"Erasmus Days 2026 | Şemikler Anadolu Lisesi";
}
button.addEventListener("click",()=>setLanguage(lang==="en"?"tr":"en"));
setLanguage("en");

document.querySelectorAll(".photo img").forEach(img=>{
  img.addEventListener("error",()=>{
    img.style.display="none";
    const card=img.closest(".photo");
    card.classList.add("missing");
    if(!card.querySelector(".photo-placeholder")){
      const p=document.createElement("div");
      p.className="photo-placeholder";
      p.innerHTML='<span>PHOTO</span><small>Add your image here</small>';
      card.prepend(p);
    }
  });
});