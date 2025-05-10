var toggle=document.getElementById("menu-toggle")
var list=document.getElementById("list")
var number=document.getElementById("number")

toggle.addEventListener('click',function(){
  if(list.style.display==='none'){
    list.style.display='flex';
    number.style.display='block';
  
    
  }else{
    list.style.display='none';
    number.style.display='none';
    
  }
})