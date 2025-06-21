gsap.from(".line h1",{
    y:150,
    stagger:0.1,
    duration:0.7
})
var count=document.querySelector("#countline")
var counter=0;
setInterval(()=>{
    if(counter<100){
    count.textContent=counter++}else{
        count.textContent=100;
    }
},30)