// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import "purecss/build/grids-min.css";
// import "purecss/build/grids-responsive-min.css";

import "/src/sass/style.scss";

try {
    // init Swiper:
    new Swiper('.works__slider', {
        // Default parameters
        slidesPerView: 1,
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        modules: [Navigation, Pagination],

        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },

        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },

            1920: {
                spaceBetween: 35,
                slidesPerView: 3,
            },
        },
    });
} catch (e) {}