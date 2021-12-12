
var sliders=document.querySelectorAll('.slider');
var tpBullets=document.querySelectorAll('.tp-bullet');
console.log(tpBullets);
slideIndex=0;

for (let i=0; i<sliders.length; i++) {
 tpBullets[i].onclick=function(){
     sliders[slideIndex].classList.remove('slider--active');
     tpBullets[slideIndex].classList.remove('tp-bullet--active');
     slideIndex=i;
     sliders[slideIndex].classList.add('slider--active');
     tpBullets[slideIndex].classList.add('tp-bullet--active');
    }
}

// 
var navbar=document.querySelector('.app');
console.log(navbar);
var menuBtn=document.querySelector('.header-options-btn');
menuBtn.onclick=function(){
    var height=navbar.clientWidth;
    if(height>=1023)
    {
        document.querySelector('.modal').classList.add('modal--active');
        document.querySelector('.sidebar').classList.add('sidebar--active');
    }else{
        document.querySelector('.modal').classList.add('modal--active');
        document.querySelector('.nav-mobile').classList.add('nav-mobile--active');
    }
}
document.querySelector('.sidebar__close').onclick=function(){
    document.querySelector('.sidebar').classList.remove('sidebar--active');
    document.querySelector('.modal').classList.remove('modal--active');
}
document.querySelector('.nav-mobile__close').onclick=function(){
    document.querySelector('.nav-mobile').classList.remove('nav-mobile--active');
    document.querySelector('.modal').classList.remove('modal--active');
}