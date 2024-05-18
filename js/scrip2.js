
var topBtn = document.getElementById("top-buutn")

window.addEventListener("scroll" , function(){
   
    if(document.documentElement.scrollTop > 300) 
        topBtn.style.display= "block"
    else topBtn.style.display="none"    


})




