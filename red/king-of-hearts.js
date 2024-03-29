var HeartsBackground = {
  heartHeight: 40,
  heartWidth: 44,
  hearts: [],
  heartImage: 'https://i.imgur.com/gvPRiiX.png',
  maxHearts: 30,
  minScale: 0.4,
  draw: function () {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.hearts.length; i++) {
      var heart = this.hearts[i];
      heart.image = new Image();
      heart.image.style.height = heart.height;
      heart.image.src = this.heartImage;
      this.ctx.globalAlpha = heart.opacity;
      this.ctx.drawImage(heart.image, heart.x, heart.y, heart.width, heart.height);
    }
    this.move();
  },
  move: function () {
    for (var b = 0; b < this.hearts.length; b++) {
      var heart = this.hearts[b];
      heart.y += heart.ys;
      if (heart.y > this.h) {
        heart.x = Math.random() * this.w;
        heart.y = -1 * this.heartHeight;
      }
    }
  },
  setCanvasSize: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
  },
  initialize: function (i) {
    this.canvas = $('.hearts')[i];
    if (!this.canvas.getContext)
      return;
    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');
    for (var a = 0; a < this.maxHearts; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.hearts.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        height: scale * this.heartHeight,
        width: scale * this.heartWidth,
        opacity: scale
      });
    }
    setInterval($.proxy(this.draw, this), 30);
  }
};
$(document).ready(function () {
  HeartsBackground.initialize(0);
  var music = document.getElementById("song"),
    state = "pause";
  song.volume = 0.1;

  function stabby(time, tabNum) {
    setTimeout(function () {
      $(`.tab${tabNum}`).addClass("stab");
    }, time);
  }
  stabby(8000, ".one");
  stabby(8200, ".five");
  stabby(8400, ".two");
  stabby(8600, ".four");
  stabby(8800, ".three");
  $("#music").click(() => {
    if (state == "pause") {
      song.play();
      state = "play";
    } else {
      song.pause();
      state = "pause";
    }
  })
  $(".tab").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("stab");
      $(this).removeClass("selected");
      $(".whiteSlide").removeClass("clicked");
      $(".tab").fadeIn();
      stabby(200, ".one");
      stabby(400, ".five");
      stabby(800, ".two");
      stabby(1000, ".four");
      stabby(1200, ".three");
    } else {
      var opens = $(this).attr("opens");
      $(".tab").not(this).removeClass("selected");
      $(".tab").not(this).fadeOut();
      $(this).addClass("selected");
      setTimeout(function () {
        $(opens).addClass("clicked");
        $(".tab").not(this).removeClass("stab");
      }, 200);
    }
  });
  $('.friend').each(function () {
    var img = $(this).attr("img");
    if (!img) {
      img = "https://media.istockphoto.com/photos/romantic-greeting-card-of-red-rose-against-black-and-white-roses-picture-id693991438?k=6&m=693991438&s=612x612&w=0&h=5wfXo3M8jKyGLpFUU5XRzkfgswEjL9eE4nTPOlQSdQk=";
    }
    $(this).css("background-image", `url(${img})`);
  });
  $('.friend').click(function () {
    var name = $(this).find(".name").html();
    var desc = $(this).find(".desc").html();
    var link = $(this).attr("profile");
    var img = $(this).attr("img");
    if (!name && !desc) {
      name = "Coming soon!";
    } else if (!name && desc) {
      name = "";
    }
    if (!desc) {
      desc = "";
    }
    if (!link) {
      $(".friendPopout a").css("display", "none");
    } else {
      $(".friendPopout a").css("display", "block");
    }
    if (!img) {
      img = "https://media.istockphoto.com/photos/romantic-greeting-card-of-red-rose-against-black-and-white-roses-picture-id693991438?k=6&m=693991438&s=612x612&w=0&h=5wfXo3M8jKyGLpFUU5XRzkfgswEjL9eE4nTPOlQSdQk=";
    }
    $(".friendPopout .img").css("background-image", `url(${img})`);
    $(".friendPopout .name").html(name);
    $(".friendPopout .desc .scroller").html(desc);
    $(".friendPopout a").attr("href", link);
    $(".friendPopout").addClass("clicked");
  });
  $(".friendPopout .exit").click(() => {
    $(".friendPopout").removeClass("clicked");
  })
});
