$(window).ready(function(){$('#enchiridion').turn({autoCenter:true,display:'double',acceleration:true,when:{turned:function(){$(".friend .face").each(function(){var image=$(this).attr("img");$(this).css("background-image",`url(${image})`);})}},duration:1200,});});$(window).on('keydown',function(e){if(e.keyCode==37)
  $('#enchiridion').turn('previous');else if(e.keyCode==39)
  $('#enchiridion').turn('next');});