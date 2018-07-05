$(document).ready(()=>{let thunder=document.getElementById('thunder');let anthem=document.getElementById('ussranthem');anthem.volume=0.5;thunder.volume=0.05;thunder.play();var nbDrop=858;function randRange(minNum,maxNum){return(Math.floor(Math.random()*(maxNum-minNum+1))+minNum);}
function createRain(){for(i=1;i<nbDrop;i++){var dropLeft=randRange(0,1920);var dropTop=randRange(-1000,1920);$('.rain').append('<div class="drop" id="drop'+i+'"></div>');$('#drop'+i).css('left',dropLeft);$('#drop'+i).css('top',dropTop);}}
createRain();$("#cloud").click(()=>{$("#cloud").hide();$("#shush").show();thunder.pause();})
$("#shush").click(()=>{$("#shush").hide();$("#cloud").show();thunder.play();})
$('#phone').click(()=>{$('#bigphone').fadeIn('fast','swing');$('#phone').fadeOut('fast','swing');})
$('#homebutton').click(()=>{$('#bigphone').fadeOut('fast','swing');$('#phone').fadeIn('fast','swing');})
$('.gallimg').each(function(i){var image=$(this).attr('image');var background=`background-image:url(${image})`;$(this).attr('style',background);});$('.gallimg').click((event)=>{var image=$(event.currentTarget).attr('image');$('#gallproper').hide();$('.bigimg').fadeIn('fast','swing');$('.bigimg').css('background-image','url('+image+')');})
$('.bigimg').click(()=>{$('.bigimg').fadeOut('fast','swing');$('#gallproper').show();})})
function tab(id){if($(id).is(':visible'))return;$('.tab').hide();$(id).fadeIn('slow','swing');}
function app(id){if($(id).is(':visible'))return;$('.app').hide();$(id).fadeIn('slow','swing');}
function searchName(){var input,filter,ul,li,a,i;input=document.getElementById('search');filter=input.value.toUpperCase();ul=document.getElementById("friends");li=ul.getElementsByTagName('li');for(i=0;i<li.length;i++){a=li[i].getElementsByTagName("a")[0];if(a.innerHTML.toUpperCase().indexOf(filter)>-1){li[i].style.display="";}else{li[i].style.display="none";}}}