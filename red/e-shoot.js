$(document).ready(()=>{var size=10;var colBg='rgba(10,10,10)';var colGrid='rgba(0,40,8,0.5)';var colSnake='rgba(0,255,0,0.02)';var colSnake2='rgba(23,100,0,0.01)';var colTextLine='0,200,20';var colTextLine2='0,100,0';var colTextBg='rgba(0,0,0,0)';var canvas=document.getElementById("text");canvas.width=window.innerWidth;canvas.height=window.innerHeight;var context=canvas.getContext('2d');context.translate(0.5,0.5);var center={x:0,y:0};function line(ctx,x1,y1,x2,y2,col,width){ctx.strokeStyle=col;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.closePath();ctx.stroke();}
var bgcanv=document.createElement("canvas");bgcanv.width=canvas.width;bgcanv.height=canvas.height;var bgcont=bgcanv.getContext('2d');bgcont.translate(0.5,0.5);bgcont.fillStyle=colBg;bgcont.fillRect(0,0,bgcanv.width,bgcanv.height);var nx=Math.ceil(bgcanv.height/size);var ny=Math.ceil(bgcanv.width/size);for(var q=1;q<=ny;q++){line(bgcont,q*size,0,q*size,bgcanv.height,colGrid,1);}
for(var i=0;i<=nx;i++){line(bgcont,0,i*size,bgcanv.width,i*size,colGrid,1);}
for(var i=0;i<=(nx+ny);i++){line(bgcont,0,(i*size)-bgcanv.width,bgcanv.width,i*size,colGrid,1);line(bgcont,0,(i*size),bgcanv.width,(i*size)-bgcanv.width,colGrid,1);}
var hover={trigger:false,x:0,y:0};function hoverOn(e){hover.trigger=true;hover.x=e.offsetX;hover.y=e.offsetY;}
function hoverOff(e){hover.trigger=false;}
function hoverMove(e){if(hover.trigger){hover.x=e.offsetX;hover.y=e.offsetY;}}
if(canvas.addEventListener){canvas.addEventListener("mouseover",hoverOn,false);canvas.addEventListener("mouseout",hoverOff,false);canvas.addEventListener("mousemove",hoverMove,false);}else if(canvas.attachEvent){}
var explode=10;var letters={space:{size:{x:2,y:6},arr:[]},c:{size:{x:3,y:6},arr:[{x1:0,y1:1,x2:1,y2:0,xslide:-1,yslide:1},{x1:1,y1:0,x2:2,y2:0,xslide:-1,yslide:0},{x1:2,y1:0,x2:3,y2:1,xslide:-1,yslide:-1},{x1:3,y1:1,x2:3,y2:2,xslide:0,yslide:-1},{x1:3,y1:2,x2:2,y2:2,xslide:1,yslide:0},{x1:2,y1:2,x2:2,y2:1,xslide:0,yslide:-1},{x1:2,y1:1,x2:1,y2:1,xslide:-1,yslide:0},{x1:1,y1:1,x2:1,y2:5,xslide:0,yslide:1},{x1:1,y1:5,x2:2,y2:5,xslide:1,yslide:0},{x1:2,y1:5,x2:2,y2:4,xslide:0,yslide:1},{x1:2,y1:4,x2:3,y2:4,xslide:1,yslide:0},{x1:3,y1:4,x2:3,y2:5,xslide:0,yslide:0},{x1:3,y1:5,x2:2,y2:6,xslide:1,yslide:-1},{x1:2,y1:6,x2:1,y2:6,xslide:1,yslide:0},{x1:1,y1:6,x2:0,y2:5,xslide:1,yslide:1},{x1:0,y1:5,x2:0,y2:1,xslide:0,yslide:-1}]},d:{size:{x:3,y:6},arr:[{x1:0,y1:0,x2:2,y2:0,xslide:-1,yslide:0},{x1:2,y1:0,x2:3,y2:1,xslide:-1,yslide:-1},{x1:3,y1:1,x2:3,y2:1,xslide:-1,yslide:-1},{x1:1,y1:1,x2:1,y2:5,xslide:0,yslide:-1},{x1:1,y1:5,x2:2,y2:5,xslide:-1,yslide:0},{x1:2,y1:5,x2:2,y2:1,xslide:0,yslide:1},{x1:2,y1:1,x2:1,y2:1,xslide:1,yslide:0},{x1:3,y1:1,x2:3,y2:5,xslide:0,yslide:1},{x1:3,y1:5,x2:2,y2:6,xslide:1,yslide:-1},{x1:2,y1:6,x2:0,y2:6,xslide:1,yslide:0},{x1:0,y1:6,x2:0,y2:0,xslide:0,yslide:-1}]},e:{size:{x:3,y:6},arr:[{x1:0,y1:0,x2:3,y2:0,xslide:-1,yslide:0},{x1:3,y1:0,x2:3,y2:1,xslide:0,yslide:-1},{x1:3,y1:1,x2:1,y2:1,xslide:1,yslide:0},{x1:1,y1:1,x2:1,y2:2,xslide:0,yslide:1},{x1:1,y1:2,x2:2,y2:2,xslide:-1,yslide:0},{x1:2,y1:2,x2:2,y2:3,xslide:0,yslide:-1},{x1:2,y1:3,x2:1,y2:3,xslide:1,yslide:0},{x1:1,y1:3,x2:1,y2:5,xslide:0,yslide:1},{x1:1,y1:5,x2:3,y2:5,xslide:-1,yslide:0},{x1:3,y1:5,x2:3,y2:6,xslide:0,yslide:-1},{x1:3,y1:6,x2:0,y2:6,xslide:1,yslide:0},{x1:0,y1:6,x2:0,y2:0,xslide:0,yslide:1}]},i:{size:{x:1,y:6},arr:[{x1:0,y1:0,x2:1,y2:0,xslide:-1,yslide:0},{x1:1,y1:0,x2:1,y2:6,xslide:0,yslide:-1},{x1:1,y1:6,x2:0,y2:6,xslide:1,yslide:0},{x1:0,y1:6,x2:0,y2:0,xslide:0,yslide:1}]},l:{size:{x:2,y:6},arr:[{x1:0,y1:0,x2:1,y2:0,xslide:-1,yslide:0},{x1:1,y1:0,x2:1,y2:5,xslide:0,yslide:-1},{x1:1,y1:5,x2:2,y2:5,xslide:1,yslide:0},{x1:2,y1:5,x2:2,y2:6,xslide:0,yslide:1},{x1:2,y1:6,x2:0,y2:6,xslide:-1,yslide:0},{x1:0,y1:6,x2:0,y2:0,xslide:0,yslide:1}]},o:{size:{x:3,y:6},arr:[{x1:0,y1:1,x2:1,y2:0,xslide:-1,yslide:1},{x1:1,y1:0,x2:2,y2:0,xslide:-1,yslide:0},{x1:2,y1:0,x2:3,y2:1,xslide:1,yslide:1},{x1:3,y1:1,x2:3,y2:1,xslide:-1,yslide:-1},{x1:1,y1:1,x2:1,y2:5,xslide:0,yslide:-1},{x1:1,y1:5,x2:2,y2:5,xslide:-1,yslide:0},{x1:2,y1:5,x2:2,y2:1,xslide:0,yslide:1},{x1:2,y1:1,x2:1,y2:1,xslide:1,yslide:0},{x1:3,y1:1,x2:3,y2:5,xslide:0,yslide:1},{x1:3,y1:5,x2:2,y2:6,xslide:1,yslide:-1},{x1:2,y1:6,x2:1,y2:6,xslide:1,yslide:0},{x1:1,y1:6,x2:0,y2:5,xslide:-1,yslide:-1},{x1:0,y1:5,x2:0,y2:1,xslide:0,yslide:-1}]},s:{size:{x:3,y:6},arr:[{x1:0,y1:1,x2:1,y2:0,xslide:-1,yslide:1},{x1:1,y1:0,x2:2,y2:0,xslide:-1,yslide:0},{x1:2,y1:0,x2:3,y2:1,xslide:-1,yslide:-1},{x1:3,y1:1,x2:3,y2:2,xslide:0,yslide:-1},{x1:3,y1:2,x2:2,y2:2,xslide:1,yslide:0},{x1:2,y1:2,x2:2,y2:1,xslide:0,yslide:1},{x1:2,y1:1,x2:1,y2:1,xslide:1,yslide:0},{x1:1,y1:1,x2:1,y2:2,xslide:0,yslide:-1},{x1:1,y1:2,x2:3,y2:4,xslide:-1,yslide:-1},{x1:3,y1:4,x2:3,y2:5,xslide:0,yslide:1},{x1:3,y1:5,x2:2,y2:6,xslide:1,yslide:-1},{x1:2,y1:6,x2:1,y2:6,xslide:1,yslide:0},{x1:1,y1:6,x2:0,y2:5,xslide:1,yslide:1},{x1:0,y1:5,x2:0,y2:4,xslide:0,yslide:1},{x1:0,y1:4,x2:1,y2:4,xslide:-1,yslide:0},{x1:1,y1:4,x2:1,y2:5,xslide:0,yslide:-1},{x1:1,y1:5,x2:2,y2:5,xslide:1,yslide:0},{x1:2,y1:5,x2:2,y2:4,xslide:0,yslide:1},{x1:2,y1:4,x2:0,y2:2,xslide:1,yslide:1},{x1:0,y1:2,x2:0,y2:1,xslide:0,yslide:1}]},x:{size:{x:3,y:6},arr:[{x1:0,y1:0,x2:1,y2:0,xslide:-1,yslide:0},{x1:1,y1:0,x2:1,y2:2,xslide:0,yslide:-1},{x1:1,y1:2,x2:2,y2:2,xslide:-1,yslide:0},{x1:2,y1:2,x2:2,y2:0,xslide:0,yslide:1},{x1:2,y1:0,x2:3,y2:0,xslide:1,yslide:0},{x1:3,y1:0,x2:3,y2:2,xslide:0,yslide:-1},{x1:3,y1:2,x2:2,y2:3,xslide:1,yslide:-1},{x1:2,y1:3,x2:2,y2:4,xslide:0,yslide:1},{x1:2,y1:4,x2:3,y2:5,xslide:1,yslide:1},{x1:3,y1:5,x2:3,y2:6,xslide:0,yslide:1},{x1:3,y1:6,x2:2,y2:6,xslide:1,yslide:0},{x1:2,y1:6,x2:2,y2:5,xslide:0,yslide:-1},{x1:2,y1:5,x2:1,y2:5,xslide:-1,yslide:0},{x1:1,y1:5,x2:1,y2:6,xslide:0,yslide:1},{x1:1,y1:6,x2:0,y2:6,xslide:1,yslide:0},{x1:0,y1:6,x2:0,y2:5,xslide:0,yslide:-1},{x1:0,y1:5,x2:1,y2:4,xslide:-1,yslide:1},{x1:1,y1:4,x2:1,y2:3,xslide:0,yslide:-1},{x1:1,y1:3,x2:0,y2:2,xslide:-1,yslide:-1},{x1:0,y1:2,x2:0,y2:0,xslide:0,yslide:-1}]},};var posi=$('#ycoord').offset();var ycoord=posi.top;console.log(`The y coordinate:${ycoord}`)
function letter(lref,x,y,fsize,ex,es,rgbf,rgbl){this.rgbFill=rgbf;this.rgbLine=rgbl;this.wait=0;this.explode=ex;this.exSpeed=es;this.position={x:x,y:-ycoord};this.arr=letters[lref].arr;this.size=letters[lref].size;this.fontSize=fsize;this.count=0;this.hover=false;this.movingOut=false;this.movingIn=false;this.checkLetter=checkLetter;this.moveOutStart=moveOutStart;this.moveInStart=moveInStart;this.moveOut=moveOut;this.moveIn=moveIn;this.drawLetterLines=drawLetterLines;this.drawLetterBlock=drawLetterBlock;this.letterHover=letterHover;}
function letterHover(){if(hover.x<=(center.x+this.position.x+(this.size.x*this.fontSize)+this.fontSize)&&hover.y<=(center.y+this.position.y+(this.size.y*this.fontSize)+this.fontSize)&&center.x+this.position.x-this.fontSize<=hover.x&&center.y+this.position.y-this.fontSize<=hover.y){this.moveOutStart();}}
function moveOutStart(){if(!this.movingIn&&!this.movingOut){this.movingOut=true;this.count=0;}}
function moveInStart(){if(!this.movingIn&&!this.movingOut){this.movingIn=true;this.count=this.explode+this.arr.length;}}
function moveOut(){this.offset=false;if((this.explode+(this.arr.length-1))<this.count){this.count=this.explode;this.movingOut=false;this.moveInStart();}else{this.count+=1;}
this.drawLetterBlock();this.drawLetterLines();}
function moveIn(){this.offset=true;if(this.count<1){this.count=0;this.wait++;this.movingIn=false;}else{this.count-=1;}
this.drawLetterBlock();this.drawLetterLines();}
function drawLetterLines(){for(i=0;i<this.arr.length;i++){var q=0;if(this.movingIn){q=i;}
var off=(this.count-q);if(off<1){off=0;}
if(this.movingOut){var check=off-(this.arr.length-i);if(this.explode<check){off=this.explode+(this.arr.length-i);}}
var x1=(this.arr[i].x1*this.fontSize)+((this.arr[i].xslide*this.fontSize)*this.exSpeed*off)+this.position.x+center.x;var y1=(this.arr[i].y1*this.fontSize)+((this.arr[i].yslide*this.fontSize)*this.exSpeed*off)+this.position.y+center.y;var x2=(this.arr[i].x2*this.fontSize)+((this.arr[i].xslide*this.fontSize)*this.exSpeed*off)+this.position.x+center.x;var y2=(this.arr[i].y2*this.fontSize)+((this.arr[i].yslide*this.fontSize)*this.exSpeed*off)+this.position.y+center.y;var col=1-((1/(this.explode))*off);var col2=(1-((1/(this.explode))*off))*0.07;line(context,x1,y1,x2,y2,'rgba('+colTextLine2+','+col2+')',6);line(context,x1,y1,x2,y2,'rgba('+colTextLine+','+col+')',1);}}
function drawLetterBlock(){context.beginPath();for(i=0;i<this.arr.length;i++){var x1=(this.arr[i].x1*this.fontSize)+this.position.x+center.x;var y1=(this.arr[i].y1*this.fontSize)+this.position.y+center.y;if(i==0){context.moveTo(x1-0.5,y1-0.5);}else{context.lineTo(x1-0.5,y1-0.5);}}
context.fillStyle=colTextBg;context.fill();context.closePath();}
function checkLetter(){if(this.movingOut){this.moveOut();}else
if(this.movingIn){this.moveIn();}else{if(hover.trigger){this.letterHover();}
this.drawLetterBlock();this.drawLetterLines();}}
function drawWord(){for(q=0;q<this.letters.length;q++){this.letters[q].checkLetter();}}
function word(s,offx,offy,fsize,kern){this.fullWidth=0;this.string=s.replace(/[^a-z]+/gi," ");this.string=this.string.toLowerCase();this.fontSize=fsize;this.position={x:offx,y:offy};this.arr=this.string.split('');this.kerning=kern;this.letters=[];this.createWord=createWord;this.createWord();center.x=Math.ceil(Math.round((canvas.width-this.fullWidth)/2)/size)*size;center.y=Math.ceil(Math.round((canvas.height-(this.fontSize*6))/2)/size)*size;this.drawWord=drawWord;}
function createWord(){for(m=0;m<this.arr.length;m++){var rgbFill='10,20,10';var rgbLine='0,180,0';var lett=this.arr[m];if(lett==" "){lett="space";}
this.letters[m]=new letter(lett,this.position.x+this.fullWidth,this.position.y,this.fontSize,15,1,rgbFill,rgbLine);this.fullWidth+=this.letters[m].size.x*this.fontSize;this.fullWidth+=this.kerning;}}
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
var sn=new snakes(20);var txt,thetext;function go(){context.drawImage(bgcanv,0,0);txt=document.getElementById("txt").value;thetext=new word(txt,0,0,size,0);}
go();setInterval(function(){context.globalAlpha=0.2;context.drawImage(bgcanv,0,0);context.globalAlpha=1;sn.go();thetext.drawWord();},1000/30);});
