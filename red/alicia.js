function init(){var style=["style1","style2","style3","style4"];var tam=["tam1","tam1","tam1","tam2","tam3"];var opacity=["opacity1","opacity1","opacity1","opacity2","opacity2","opacity3"];function getRandomArbitrary(min,max){return Math.floor(Math.random()*(max-min))+min;}
var star="";var qtdestars=250;var noite=document.querySelector(".constelations");var widthWindow=window.innerWidth;var heightWindow=window.innerHeight;for(var i=0;i<qtdestars;i++){star+="<span class='star "+style[getRandomArbitrary(0,4)]+" "+opacity[getRandomArbitrary(0,6)]+" "
+tam[getRandomArbitrary(0,5)]+"' style='animation-delay: ."+getRandomArbitrary(0,9)+"s; left: "
+getRandomArbitrary(0,widthWindow)+"px; top: "+getRandomArbitrary(0,heightWindow)+"px;'></span>";}
noite.innerHTML=star;var numeroAleatorio=5000;setTimeout(function(){carregarmeteor();},numeroAleatorio);function carregarmeteor(){setTimeout(carregarmeteor,numeroAleatorio);numeroAleatorio=getRandomArbitrary(5000,10000);var meteor="<div class='meteor "+style[getRandomArbitrary(0,4)]+"'></div>";document.getElementsByClassName('meteorRain')[0].innerHTML=meteor;setTimeout(function(){document.getElementsByClassName('meteorRain')[0].innerHTML="";},1000);}}
function tooltip(){var title=$(this).attr("title");$(this).removeAttr("title");this.TooltipMessage=$("<div/>",{class:"tooltipMessage",style:"display: none;"});this.TooltipMessage.html("<span>"+title+"</span>");$("body").append(this.TooltipMessage);if($(this).hasClass("tooltipLeft")){this.TooltipMessage.addClass("left");}
$(this).hover(tooltipFadeIn,tooltipFadeOut);$(this).mousemove(tooltipMousemove);}
function tooltipFadeIn(){this.TooltipMessage.stop(true,false).fadeIn();}
function tooltipFadeOut(){this.TooltipMessage.stop(true,false).fadeOut();}
function tooltipMousemove(e){var offset={left:e.pageX,top:e.pageY+25};if(this.TooltipMessage.hasClass("left")){offset.left-=this.TooltipMessage.width()+20;}else{offset.left-=130;}
this.TooltipMessage.offset(offset);}
$(function(e){$(".tooltip").each(tooltip);});$(document).ready(()=>{init();$('.tomb').click(event=>{$('.tomb').removeClass('selected');$(event.currentTarget).addClass('selected');})
$('#warning').click(()=>{$('#warning').fadeOut('fast','swing');})
$(document).mousedown(()=>{if(event.which==3){$('#warning').show();}})});
