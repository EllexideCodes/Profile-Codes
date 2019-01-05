$(document).ready(()=>{

  $(".eye").click(function(){
    var opens = $(this).attr("opens");
    if($(opens).is(":visible")) {
      return;
    }
    $(".eye").removeClass("selected");
    $(this).addClass("selected");
    $(".tab").fadeOut(500);
    $(opens).fadeIn(500);
  })

  $(".tab").hover(
    function(){
      $(this).addClass("hovered");
    },
    function(){
      $(this).removeClass("hovered")
    }
  );

  $(".friend .face").each(function(){
    $(this).css("background-image", `url(${$(this).attr("img")})`);
  })

  $("body").append("<script src=\"https://ellexidecodes.github.io/custom-scrollbar/jquery.mCustomScrollbar.js\"></script>");
  $("body").append(`
  <script>
    $(window).on("load",function(){
        $(".tab").mCustomScrollbar({
          theme: "rounded-dots"
        });
    });
  </script>
  `)

})