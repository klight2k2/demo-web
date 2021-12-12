const buyBtns =document.querySelectorAll(".js-buy-ticket");
const modal=document.querySelector('.js-modal')
const modalContainer=document.querySelector('.js-container')
const modalClose=document.querySelector('.js-modal-close')
function showBuyticket(){
    modal.classList.add('open')
}
function closeBuyticket(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click',showBuyticket);
}
modalClose.addEventListener('click',closeBuyticket);
modal.addEventListener('click',closeBuyticket);
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
});