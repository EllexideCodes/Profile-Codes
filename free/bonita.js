$(document).ready(()=>{let hover=document.getElementById('hover');let click=document.getElementById('click');let music=document.getElementById('moosic');let creepy=document.getElementById('creepy');$(document).keydown(function(event){if(event.keyCode==123){return false;}
else if(event.ctrlKey&&event.shiftKey&&event.keyCode==73||(event.ctrlKey&&event.shiftKey&&event.keyCode==74)){return false;}});document.addEventListener('contextmenu',function(event){{}event.preventDefault();},false);function brap(){if(event.which==3)$('#credit').show();return;}
function boop(){if(event.which==3)$('#credit').hide();return;}
$(document).mousedown(()=>{brap();})
$(document).mouseup(()=>{boop();})
hover.volume=0.05;click.volume=0.05;music.volume=0.7;music.play();$('.choice').mouseenter(()=>{hover.play();});$('.choice').mouseleave(()=>{hover.pause();hover.currentTime=0;})});

// other functions
function skip(){$('p').removeClass('type');$('.choice').removeClass('appear');}
function choice(babap){$('.page').hide();$(babap).show();$('p').addClass('type');$('.choice').addClass('appear');document.getElementById('click').play();}
function mute(){let music=document.getElementById('moosic');$('#sound').hide();$('#mute').show();music.pause();music.currentTime=0;}
function unmute(){let music=document.getElementById('moosic');$('#mute').hide();$('#sound').show();music.play();}
function glitch(){let music=document.getElementById('moosic');let creepy=document.getElementById('creepy');$('#skip').addClass('glitch');music.pause();music.currentTime=0;creepy.play();}
function normal(){let music=document.getElementById('moosic');let creepy=document.getElementById('creepy');$('#skip').removeClass('glitch');creepy.pause();creepy.currentTime=0;music.play();}