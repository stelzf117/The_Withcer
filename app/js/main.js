var mySwiper = new Swiper('.swiper-container', {
	speed: 600,
	spaceBetween: 0,
	slidesPerView: 1,
	loop: true,
	navigation: {
    nextEl: '.arrow',
	},
	breakpoints: {
		551: {
		slidesPerView: 2
		}
	}
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function(){
	menuButton.classList.toggle('menu-button-active'); 
	menu.classList.toggle('header-active');
})

