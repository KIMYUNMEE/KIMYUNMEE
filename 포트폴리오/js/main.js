const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
  e.preventDefault(); 
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
}
const tab = document.querySelector("#tab"); 
const dts = tab.querySelectorAll("dt"); 
const dds = tab.querySelectorAll("dd"); 
const dt_a = document.querySelectorAll("dt>a");

dts.forEach((el, index)=>{
   el.addEventListener("click", e=>{
      e.preventDefault();
      
      let isOn = e.currentTarget.classList.contains("on"); 
      if(isOn) return; 

      activation(dts, index); 
      activation(dds, index); activation(dda, index); 
   })
   el.addEventListener("click", e=>{
      e.preventDefault();
      
      let isOn = e.currentTarget.classList.contains("on"); 
      if(isOn) return; 
      activation(dts, index); 
      activation(dds, index); 
   })
})
dt_a.forEach((el,index)=>{

   el.addEventListener("focusin", e=>{
      activation(dts, index); 
      activation(dds, index); 
   })
}) 
function activation(items, index){
 
      for(let item of items){
         item.classList.remove("on"); 
      }
      items[index].classList.add("on"); 
}
