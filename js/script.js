
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2 ,
        margin : 3 ,
        nav : true ,
        loop: true ,
        dots : false , 
        navText : [  '<i class="fa-solid fa-arrow-left-long rounded-pill text-white py-2  "></i>', '<i class="fa-solid fa-arrow-right-long text-white py-2 "></i>'  ] ,
        // autoplay: true ,
        autoplayTimeout : 1000 ,
        autoplayHoverPause : true ,
        responsive : {
            // breakpoint from 0 up
            0 : {
               items : 1,
               autoplay:false
            },
            // breakpoint from 991.98 up
            991.98: {
               items: 2
                
            },
           
        }
    });
  });
////
var counter_3=document.getElementById("counter_3")
var counter_4=document.getElementById("counter_4")
var counter_2=document.getElementById("counter_2")
var counter=document.getElementById("counter")
var i=0
var j=0
var f=100
var x=2
window.addEventListener("scroll" , function(){   
if(document.documentElement.scrollTop > 1350) {
 
////
 var set = setInterval(()=>{
    console.log(i)
    if(i==8000){
        clearInterval(set)
    }
    else{
        i+=50
        counter.innerText=i 
    } 
},50)
/////
var set_2 = setInterval(()=>{
    console.log(j)
    if(j==810){
        clearInterval(set_2)

    }
    else{
        j+=5
        counter_2.innerText=j
    }
   
},50)

///
var set_3 = setInterval(()=>{
    console.log(f)
    if(f==2000){
        clearInterval(set_3)
    }
    else{
        f+=20
        counter_3.innerText=f
    }
},50)
///////
var set_4 = setInterval(()=>{
    console.log(x)
    if(x==20){
        clearInterval(set_4)
    }
    else{
        x++
        counter_4.innerText=x
    }
   
},50)

    }
})


