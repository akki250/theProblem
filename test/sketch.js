const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var slingshot;


function setup(){
createCanvas(1200,600);



slingShot = new SlingShot(this.ball,{x:100,y:200});




}
function draw(){
    background("blue");
    
   
   
   
    slingshot.display ();
}