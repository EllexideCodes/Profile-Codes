$(document).ready(()=>{var timer;$('.contain').hover(()=>{timer=setTimeout(()=>{$('.contain').delay(10000).fadeOut(2000,'swing');$('#monsters').fadeIn('slow','swing');$('#title').show();console.log('hovered for 2 seconds');},2000);},()=>{clearTimeout(timer);});$('#title').click(()=>{$('#title, #monsters').fadeOut('fast','swing');$('#profile').fadeIn(1000,'swing');});});function tab(id){$('.infotab').hide();$(id).fadeIn('fast','swing');}