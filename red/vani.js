$(document).ready(()=>{$('.nav__item').click(()=>{if($(event.currentTarget).hasClass('selected'))return;$('.nav__item').removeClass('selected');$(event.currentTarget).addClass('selected');});$('a.friend').each(function(i){var image=$(this).attr('image');var background=`background-image:url(${image})`;$(this).attr('style',background);});});function tab(id){if($(id).is(':visible'))return;$('.tab').fadeOut('fast','swing');$(id).fadeIn('slow','swing');}