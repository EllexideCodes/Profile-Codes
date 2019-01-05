$(document).ready(()=>{$(".eye").click(function(){var opens=$(this).attr("opens");if($(opens).is(":visible")){return;}
$(".eye").removeClass("selected");$(this).addClass("selected");$(".tab").fadeOut(500);$(opens).fadeIn(500);})
$(".friend .face").each(function(){$(this).css("background-image",`url(${$(this).attr("img")})`);})})