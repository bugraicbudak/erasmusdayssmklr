// VIDEO LINKS: paste your two YouTube/Vimeo links between the quotes.
const VIDEO_1_URL = "";
const VIDEO_2_URL = "";

function toEmbedUrl(url) {
  if (!url) return "";
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (u.pathname.startsWith("/shorts/")) {
        const shortId = u.pathname.split("/shorts/")[1].split("/")[0];
        return `https://www.youtube.com/embed/${shortId}`;
      }
    }

    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return `https://player.vimeo.com/video/${id}`;
    }

    return url;
  } catch {
    return "";
  }
}

function mountVideo(frameId, url) {
  const frame = document.getElementById(frameId);
  const embed = toEmbedUrl(url);
  if (!frame || !embed) return;

  frame.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.src = embed;
  iframe.title = frameId === "videoFrame1" ? "Video 1" : "Video 2";
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  frame.appendChild(iframe);
}

mountVideo("videoFrame1", VIDEO_1_URL);
mountVideo("videoFrame2", VIDEO_2_URL);

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