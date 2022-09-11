
// hiển thị menu khi cuộn trang đến vị trí nhất định
const scrollMenuDestop = () => {
  const header = document.querySelector('.header')
  const headerTop = document.querySelector('.header-top');
  const headerContact = document.querySelector('.header-contact')
  const heightHeader = header.offsetHeight
  if(headerTop){
    let scrollValue = window.scrollY;
    if(scrollValue < heightHeader){
      headerTop.classList.remove('menu-scroll');
      headerContact.style.display = "flex";
    }
    else{
      headerTop.classList.add('menu-scroll');
      headerContact.style.display = "none";
    }
  }
  
}
window.addEventListener('scroll', scrollMenuDestop);

// hiển thị menu-mobile khi cuộn trang đến vị trí nhất định
const scrollMenuMobile = () => {
  const headerMobile = document.querySelector('.header-mobile')
  const header = document.querySelector('.header');
  const heightHeader = header.offsetHeight
  if(headerMobile){
    let scrollValue = window.scrollY;
    if(scrollValue < heightHeader){
      headerMobile.classList.remove('menu-scroll_mobile');
    }
    else{
      headerMobile.classList.add('menu-scroll_mobile');
    }
  }
  
}
window.addEventListener('scroll', scrollMenuMobile);

// slider discover
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  wrapAround: true,
  freeScroll: true,
});


// cuộn lên đầu trang
const toTop = document.querySelector('#arrow-backtotop')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})




