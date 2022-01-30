console.log("hola david");
var cuadrado;
function setup(){
    createCanvas(400,400);
cuadrado = createSprite (200,200,20,20);
cuadrado.shapeColor = "red";
}
function draw (){
    background("white");
    drawSprites();
}