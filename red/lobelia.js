$(document).ready(()=>{$(".box").prepend("<div class=\"blurBack\"></div> <div class=\"lobelia\"></div>");var allFriends=$("a.friend").length;var animationDuration=allFriends*5;console.log(allFriends);$("#marquee").css("animation-duration",`${animationDuration}s`);$('.friend').each(function(){var image=$(this).attr("image");var name=$(this).attr("name");var desc=$(this).attr("desc");$(this).addClass("tooltip");if(!name&&!desc){$(this).attr("title","Coming Soon!");}else{if(!name){name="";}else{name=`<h1>${name}</h1>`;}
if(!desc){desc="";}else{desc=`<p>${desc}</p>`;}
$(this).attr("title",`${name}${desc}`);}
if(!image){image="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png";}
$(this).attr("style",`background-image:url(${image})`);});$(".nav div").each(function(){$(this).removeClass("lotus");$(this).html("<div class='lotus'></div>");})
$(".nav>div").click(function(){var allNav=$(".nav>div");var open=$(this).attr("opens");allNav.removeClass("selected");$(this).addClass("selected");$(".tab").hide();$(`#${open}`).show();})
$(".flexBox .image").each(function(){var background=$(this).attr("image");$(this).css("background-image",`url(${background})`);})
$(".flexBox .image").click(function(){var background=$(this).attr("image");$("#gallOverlay .bigImage").html(`<img src="${background}">`);$("#gallOverlay").fadeIn(200);})
$("#gallOverlay .exit").click(()=>{$("#gallOverlay").fadeOut(200);})})