//header scroll 
let nav=document.querySelector(".navbar");
if(document.documentElement.scrollTop>100){
    nav.classList.add("header-scrolled");
}
else{
    nav.classList.remove("header-scrolled");
}

//nave hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener ;{"click",function(){
        navCollapse.classList.remove("show");
    }}
})