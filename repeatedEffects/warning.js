$(document).ready(()=>{$(document).mousedown(()=>{if(event.which==3){$('#warning').show();}})
$.ajax({url:'https://rawgit.com/EllexideCodes/Profile-Codes/master/repeatedEffects/warning.txt',dataType:'text',success:function(data){$('#warning').html(data);}})})
