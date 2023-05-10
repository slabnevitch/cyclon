// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// import Parallax from 'parallax-js'
import {docSlider} from "/node_modules/docslider/docSlider.js"
console.log(docSlider)

// import Swiper, { Navigation, Mousewheel } from 'swiper';
// Swiper.use([Navigation, Mousewheel]);

// import FormHandler from 'formhandler.js';


//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
//- require('./vendor/libs-vanilla/service-functions/remove-class.js')

//- siblings--------------------------
//- require('./vendor/libs-vanilla/service-functions/siblings.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- isMobile--------------------------
// require('./vendor/libs-vanilla/service-functions/mobileDetect.js')

//- All in one file--------------------------
// require('./vendor/libs-vanilla/service-functions/all-functions.js')


//- WITH JQUERY===================================
//- jquery--------------------------
// require('./vendor/libs/jquery/jquery-3.1.1.min.js')

//- jquery-UI--------------------------Не проверено!
// require('./vendor/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// require('./vendor/libs/dlmenu/js/modernizr.custom.js')
// var dlmenu = require('./vendor/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// require('./vendor/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('./vendor/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('./vendor/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('./vendor/libs/superfish/dist/js/hoverIntent.js')
// require('./vendor/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
// require('./vendor/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('./vendor/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('./vendor/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('./vendor/libs-vanilla/multilevel-dropdown/multidropdown.js')
		
//- lazysizes--------------------------Не проверено!
// require('./vendor/libs-vanilla/lazysizes/lazysizes.min.js')
	
//- accordion--------------------------
// require('./vendor/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('./vendor/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('./vendor/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// var MicroModal = require('./vendor/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// require('./vendor/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------Не проверено!
// require('./vendor/libs-vanilla/tiny-slider/dist/tiny-slider.js')

//- wNumb--------------------------
// var wNumb = require('./vendor/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('./vendor/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('./vendor/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('./vendor/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('./vendor/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// require('./vendor/libs-vanilla/scroll-to-sects/scrolltosect.js')

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE:	new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('./vendor/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('./vendor/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('./vendor/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')

// var tingle = require('./vendor/libs-vanilla/tingle-master/dist/tingle.js')
// var docSlider = require('./vendor/libs-vanilla/docSlider/docSlider.js')
	
//- end VANILLA JS===================================

// require('./vendor/color-scheme-switcher.js')
// require('./vendor/jquery-scrollify/jquery.scrollify.js')
require('./vendor/libs-vanilla/waypoints/noframework.waypoints.js')
require('./vendor/libs-vanilla/waypoints/shortcuts/inview.min.js')

document.addEventListener('DOMContentLoaded', () => {

	var inview = new Waypoint.Inview({
	  element: document.querySelector('.page-03'),
	  enter: function(direction) {
	    console.log('Enter triggered with direction ' + direction)
	  },
	  entered: function(direction) {
	    console.log('Entered triggered with direction ' + direction)
	  },
	  exit: function(direction) {
	   console.log('Exit triggered with direction ' + direction)
	  },
	  exited: function(direction) {
	    console.log('Exited triggered with direction ' + direction)
	  }
	});

	var observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			console.log('goal!!')
			// var targetElement = entry.target,
			// 	skotnik = 
		})
	});
	observer.observe(document.querySelector('.page-12'));

}); //DOMContentLoaded
	// Для правильного импорта нужно добавить " exports.docSlider = docSlider;" в node_modules/docslider/docSlider.js
	var globalDocsliderFlag = true,
		pages = Array.prototype.slice.call(document.querySelectorAll('.page'));

	docSlider.init({
		scrollReset: true,
		complete: function() {
        	if(pages.indexOf(document.querySelector('.docSlider-current')) !== -1){
        		pages[pages.indexOf(document.querySelector('.docSlider-current')) + 1].classList.add('docSlider-next');
        	}
        	if(pages.indexOf(document.querySelector('.docSlider-current')) > 0){
        		pages[pages.indexOf(document.querySelector('.docSlider-current')) - 1].classList.add('docSlider-prev');
        	}
 
		},
		beforeChange: function(index) {
        // console.log(arguments );
		// toPage.classList.add('docSlider-next'); 
		 // document.querySelectorAll('.page')[index-1].classList.add('docSlider-prev');
		},
		afterChange: function(toIndex){
			var currentPage = document.querySelectorAll('.page')[toIndex];
			pages.forEach(function(item) {
				item.classList.remove('docSlider-prev');
				item.classList.remove('docSlider-next');
			});

			if(pages.indexOf(document.querySelector('.docSlider-current')) !== -1){
        		// pages[pages.indexOf(document.querySelector('.docSlider-current'))].classList.remove('docSlider-prev');
        		// pages[pages.indexOf(document.querySelector('.docSlider-current'))].classList.remove('docSlider-next');
        		if(pages[pages.indexOf(document.querySelector('.docSlider-current')) + 1]){
        			console.log(pages[pages.indexOf(document.querySelector('.docSlider-current')) + 1]);
        			pages[pages.indexOf(document.querySelector('.docSlider-current')) + 1].classList.add('docSlider-next');

        		}
        		if(pages[pages.indexOf(document.querySelector('.docSlider-current')) - 1]){
        			pages[pages.indexOf(document.querySelector('.docSlider-current')) - 1].classList.add('docSlider-prev');
        		}
        	}

			if(currentPage.querySelectorAll('[data-animated-counter]') && currentPage.getAttribute('data-flag') === "true"){
				digitsCountersInit(currentPage.querySelectorAll('[data-animated-counter]'));
				currentPage.setAttribute('data-flag', 'false');
			}
		}
	});

window.addEventListener('load', winLoad);
	function digitsCountersInit(digitsCountersItems) {
		var digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll('[data-animated-counter]');
		if (digitsCounters){
			digitsCounters.forEach(function(digitsCounter) {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	function digitsCountersAnimate(digitsCounter) {
		var startTimestamp = null,
			duration = parseInt(digitsCounter.dataset.animatedCounter) ? parseInt(digitsCounter.dataset.animatedCounter) : 2000,
			startValue = parseInt(digitsCounter.innerHTML),
			startPosition = 0,
			step = function(timestamp) {
				if(!startTimestamp){
					startTimestamp = timestamp;
				}
				var progress = Math.min((timestamp - startTimestamp) / duration, 1);
				digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));

				if(progress < 1){
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
	}
function winLoad() {

	// digitsCountersInit();
}