$(document).ready(()=>{var music=document.getElementById("music");music.volume=0.1;var name;$("#yourName").keypress(function(event){var keycode=(event.keyCode?event.keyCode:event.which);if(keycode=='13'){music.play();name=$("#yourName").val()?$("#yourName").val():"Guest";$(".cover, #yourName").fadeOut(500);$("#intro h2").html("Nice to meet you, "+name+".");$("#intro h2").animate({paddingTop:"5vw"},2000,function(){$("#intro h2").fadeOut(500);setTimeout(function(){$("#intro h2").html("The doctor will see you now.");},500);setTimeout(function(){$("#intro h2").fadeIn(500);},700);});setTimeout(function(){$("#intro").fadeOut(200);},5000);setTimeout(function(){$("#saphee, #container").show();$("#container .content h1 .name").text(name);},6000);setTimeout(function(){$(".navi").css("opacity","1");},12000)}});$(".button").click(function(){var opens=$(this).attr("opens");if($(this).hasClass("music")){$(this).toggleClass("off");if(music.volume==0){music.volume=0.1;music.play();}else{music.pause();music.volume=0;}
return;};if($(opens).is(":visible")||$(this).attr("id")=="patients"){return;};$(".button").removeClass("selected");$(this).addClass("selected");$(".tab").fadeOut(200);setTimeout(function(){$(opens).fadeIn(200);},200);})
var totalImages=$("#gallery .image").length;var currentOpenIndex;$(".image").click(function(){var image=$(this).attr("img");currentOpenIndex=$(this).index();console.log(currentOpenIndex);$("#gallOverlay #picture img").attr("src",image);$("#gallOverlay").fadeIn(500);});$(".gallery .image, .patient .face").each(function(){$(this).css("background-image",`url(${$(this).attr("img")})`);});$("#gallOverlay .prev").click(()=>{console.log("back")
var image;$("#gallOverlay #picture img").attr("src","https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif")
if(currentOpenIndex==0){currentOpenIndex=totalImages-1;}else{currentOpenIndex=currentOpenIndex-1;};console.log(currentOpenIndex);image=$(".gallery .image").eq(currentOpenIndex).attr("img");$("#gallOverlay #picture img").attr("src",image)});$("#gallOverlay .next").click(()=>{console.log("next!")
$("#gallOverlay #picture img").attr("src","https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif")
var image;if(currentOpenIndex==totalImages-1){currentOpenIndex=0;}else{currentOpenIndex=currentOpenIndex+1;};console.log(currentOpenIndex);image=$("#gallery .image").eq(currentOpenIndex).attr("img");$("#gallOverlay #picture img").attr("src",image)});$("#gallOverlay #picture").click(()=>{$("#gallOverlay").fadeOut(200);});var patients=$("#patOverlay .patientWrap").length;var patCount;var currentOpenPat=0;$("#patients").click(()=>{$("#patOverlay").fadeIn(200);})
$("#patExit").click(()=>{$("#patOverlay").fadeOut(200);})
$("#patOverlay .prev").attr("href","#patientNum-0");for(patCount=0;patCount<patients;patCount++){$("#patOverlay .patientWrap").eq(patCount).attr("id",`patientNum-${patCount}`);};$("#patOverlay .next").click(function(){console.log(patients);if(currentOpenPat==patients-1){currentOpenPat=0;}else{currentOpenPat=currentOpenPat+1;}
$("#patOverlay .next").attr("href","#patientNum-"+currentOpenPat);})
$("#patOverlay .prev").click(function(){console.log(patients);if(currentOpenPat==0){currentOpenPat=patients-1;}else{currentOpenPat=currentOpenPat-1;}
$("#patOverlay .prev").attr("href","#patientNum-"+currentOpenPat);})});