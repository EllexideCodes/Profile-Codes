$(document).ready(()=>{var song=document.getElementById('actualMusic');song.volume=0;$('.camera').click(()=>{flash();})
$('.friendo, .scene').each(function(i){var image=$(this).attr('image');if(!image){image='https://olpschool.org/wp-content/uploads/sites/23/2015/02/picture-placeholder-female.gif';};var background=`background-image:url(${image})`;$(this).attr('style',background);})
$('.scene').click(()=>{var image=$(event.currentTarget).attr('image');var details=$(event.currentTarget).attr('details');var header=$(event.currentTarget).attr('name');if(!image){image='https://olpschool.org/wp-content/uploads/sites/23/2015/02/picture-placeholder-female.gif';};if(!header){header='Scene coming soon!';}
if(!details){details='Coming soon!';}
console.log(header);console.log(details);$('.rpScenes').fadeOut();$('.sceneDetails').fadeIn();$('.sceneDetails .image').css('background-image','url('+image+')');$('.sceneDetails .detail').html(`<h1>${header}</h1>${details}`);})})
function flash(){var flash=$('#flash');var shutter=document.getElementById('shutter');shutter.volume=.1;flash.addClass('click');shutter.play();setTimeout(function(){shutter.currentTime=0},200);setTimeout(function(){flash.removeClass()},200);}
function toggleSound(){var song=document.getElementById('actualMusic');var music=$('.music');if(song.paused){song.play();}
if(song.volume==0){song.volume=0.05;}else if(song.volume!=0){song.volume=0;}
music.toggleClass('on');music.toggleClass('off');}
function tab(newTab){setTimeout(function(){$(newTab).show();},150);}
function back(thisTab){flash();setTimeout(function(){$(thisTab).hide();},150);}
function backToScenes(){$('.sceneDetails').fadeOut();$('.rpScenes').fadeIn();}