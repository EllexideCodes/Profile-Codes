function tooltip(){
    var title=$(this).attr("title");
    $(this).removeAttr("title");
    this.TooltipMessage=$("<div/>",{class:"tooltipMessage",style:"display: none;"});
    this.TooltipMessage.html("<span>"+title+"</span>");
    $("body").append(this.TooltipMessage);

    if($(this).hasClass("tooltipLeft")){
        this.TooltipMessage.addClass("left");
        }

    $(this).hover(tooltipFadeIn,tooltipFadeOut);
    $(this).mousemove(tooltipMousemove);
}

function tooltipFadeIn(){this.TooltipMessage.stop(true,false).fadeIn();}
function tooltipFadeOut(){this.TooltipMessage.stop(true,false).fadeOut();}
function tooltipMousemove(e){
    var offset={left:e.pageX,top:e.pageY+25};
    if(this.TooltipMessage.hasClass("left")){
        offset.left-=this.TooltipMessage.width()+20;
    } else {
        offset.left-=130;
    }
    this.TooltipMessage.offset(offset);
}

$(function(e){$(".tooltip").each(tooltip);});
</script>
   <style>
   
   div.tooltipMessage {
        z-index: 9001;
        position: absolute;
        max-width: 25%;
        text-align: center;
        background: rgba(0,0,0,0.6);
        padding: 8px;
        border: 2px solid var(--green);
        padding: 10px;
        }

        div.tooltipMessage > span {
        display: inline-block;
        color: var(--green);
    }

    div.tooltipMessage.left > span {
    float: right;
    }
