const menuBtn = document.querySelector('.menu');
//console.log('menuBtn',menuBtn)
const navItem = document.querySelector('.nav-items');
menuBtn.addEventListener("click", function(){

navItem.classList.toggle('show');
if(navItem.classList.contains('show')){
    menuBtn.src = './photo/icon/cross.svg';
} else{
    menuBtn.src = './photo/icon/menu.svg';
}
})