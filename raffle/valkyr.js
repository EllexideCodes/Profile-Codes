$(document).ready(()=>{$('a.friend').each(function(i){var image=$(this).attr('image');if(!image){image='https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg'}
var background=`background-image:url(${image})`;$(this).attr('style',background);})});function tab(idShow,idHide){if(idShow==="#main-body"){$('#holoContainer').addClass('open');$('.name').addClass('name-moved');$(idShow).addClass('selectedBody');$('#exit').css('left','20%');}else if(idShow==='#ooc'){$(idShow).addClass('selectedOOC');$('#exit').css('left','40%');}
$(idShow).addClass('selected');$(idHide).fadeOut();$('#exit').fadeIn();};function exit(){$('.screen').removeClass('selected');$('.screen').removeClass('selectedBody');$('.screen').removeClass('selectedOOC');$('#holoContainer').removeClass('open');$('.name').removeClass('name-moved');$('.screen').fadeIn();$('#exit').fadeOut();}

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": "#32c9e4"
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ccc"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1.8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "direction": "top",
      "speed": 8
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 50,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});