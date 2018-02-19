$(document).ready(()=>{var size=10;var colBg='rgba(240,240,240)';var colGrid='rgba(0,40,8,0.5)';var colSnake='rgba(0,255,0,0.02)';var colSnake2='rgba(23,100,0,0.01)';var colTextLine='0,200,20';var colTextLine2='0,100,0';var colTextBg='rgba(0,0,0,0)';var canvas=document.getElementById("text");canvas.width=window.innerWidth;canvas.height=window.innerHeight;var context=canvas.getContext('2d');context.translate(0.5,0.5);var center={x:0,y:0};function line(ctx,x1,y1,x2,y2,col,width){ctx.strokeStyle=col;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.closePath();ctx.stroke();}
var bgcanv=document.createElement("canvas");bgcanv.width=canvas.width;bgcanv.height=canvas.height;var bgcont=bgcanv.getContext('2d');bgcont.translate(0.5,0.5);bgcont.fillStyle=colBg;bgcont.fillRect(0,0,bgcanv.width,bgcanv.height);var nx=Math.ceil(bgcanv.height/size);var ny=Math.ceil(bgcanv.width/size);for(var q=1;q<=ny;q++){line(bgcont,q*size,0,q*size,bgcanv.height,colGrid,1);}
for(var i=0;i<=nx;i++){line(bgcont,0,i*size,bgcanv.width,i*size,colGrid,1);}
for(var i=0;i<=(nx+ny);i++){line(bgcont,0,(i*size)-bgcanv.width,bgcanv.width,i*size,colGrid,1);line(bgcont,0,(i*size),bgcanv.width,(i*size)-bgcanv.width,colGrid,1);}
var dirs=[{name:'up',x:0,y:-1},{name:'upright',x:1,y:-1},{name:'right',x:1,y:0},{name:'downright',x:1,y:1},{name:'down',x:0,y:1},{name:'downleft',x:-1,y:1},{name:'left',x:-1,y:0},{name:'upleft',x:-1,y:-1}];function snake(){this.points=[{y:Math.floor((Math.random()*nx)+1)*size,x:Math.floor((Math.random()*ny)+1)*size}];this.draw=snakeDraw;this.move=snakeMove;this.dir=(Math.floor((Math.random()*8)+1));}
function snakeMove(){var rand=(Math.floor((Math.random()*3)-1));var dir=this.dir+rand;if(dir<0){dir=7;}
if(7<dir){dir=0;}
var lpoint=this.points[this.points.length-1];if(lpoint.x<10){dir=2;}
if(lpoint.y<10){dir=4;}
if(canvas.width-10<lpoint.x){dir=6;}
if(canvas.height-10<lpoint.y){dir=0;}
this.dir=dir;var npoint={x:lpoint.x+(dirs[dir].x*size),y:lpoint.y+(dirs[dir].y*size)};this.points.push(npoint);if(10<this.points.length){this.points.shift();}}
function snakeDraw(){var p=this.points;for(m=1;m<p.length;m++){context.beginPath();context.moveTo(p[m-1].x,p[m-1].y);context.lineTo(p[m].x,p[m].y);context.closePath();context.lineWidth=1;context.strokeStyle=colSnake;context.stroke();context.lineWidth=10;context.strokeStyle=colSnake2;context.stroke();}}
function snakes(n){this.snakeys=[];for(var p=0;p<n;p++){this.snakeys.push(new snake());}
this.go=snakesGo;}
function snakesGo(){for(var r=0;r<this.snakeys.length;r++){this.snakeys[r].move();this.snakeys[r].draw();}}
var sn=new snakes(20);var txt,thetext;function go(){context.drawImage(bgcanv,0,0);txt=document.getElementById("txt").value;}
go();setInterval(function(){context.globalAlpha=0.2;context.drawImage(bgcanv,0,0);context.globalAlpha=1;sn.go();},1000/30);});
