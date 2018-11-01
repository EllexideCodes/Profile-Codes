function tooltip(){var title=$(this).attr("title");$(this).removeAttr("title");this.TooltipMessage=$("<div/>",{class:"tooltipMessage",style:"display: none;"});this.TooltipMessage.html("<span>"+title+"</span>");$("body").append(this.TooltipMessage);if($(this).hasClass("tooltipLeft")){this.TooltipMessage.addClass("left");}
$(this).hover(tooltipFadeIn,tooltipFadeOut);$(this).mousemove(tooltipMousemove);}
function tooltipFadeIn(){this.TooltipMessage.stop(true,false).fadeIn();}
function tooltipFadeOut(){this.TooltipMessage.stop(true,false).fadeOut();}
function tooltipMousemove(e){var offset={left:e.pageX,top:e.pageY+25};if(this.TooltipMessage.hasClass("left")){offset.left-=this.TooltipMessage.width()+20;}else{offset.left-=130;}
this.TooltipMessage.offset(offset);}
$(function(e){$(".tooltip").each(tooltip);});
