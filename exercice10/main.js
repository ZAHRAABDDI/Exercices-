const message = '<strong>Promo</strong> : -20 % sur les claviers';
const buttonGo=document.getElementById("go")
const zoneTexte=document.getElementById("zoneTexte")
const zoneHtml=document.getElementById("zoneHtml")

buttonGo.addEventListener("click",()=>{
    zoneTexte.textContent= message
    zoneHtml.innerHTML=message
})