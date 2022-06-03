const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var holder,ball,ground,stand1,stnd2,ball;
var slingshot;
var  block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var  block17, block18, block19, block20, block21;
function preload(){

}
function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(900,400);
    ground=new Ground(450,390,900,20);
    stand1=new Stand(380,300,270,10);
    stnd2=new Stand(700,200,200,10);

    block1=new Block(280,275,30,40);
    block2=new Block(310,275,30,40);
    block3=new Block(340,275,20,40);
    block4=new Block(370,275,30,40);
    block5=new Block(400,275,30,40);
    block6=new Block(430,275,30,40);
    block7=new Block(460,275,30,40);
    block8=new Block(490,275,30,40);

    block9=new Block(310,235,30,40);
    block10=new Block(340,235,30,40);
    block11=new Block(370,235,30,40);
    block12=new Block(400,235,30,40);
    block13=new Block(430,235,30,40);
    block14=new Block(460,255,30,40);
    block15=new Block(340,195,30,40);
    block16=new Block(370,195,30,40);
    block17=new Block(400,195,30,40);
    block18=new Block(430,195,30,40);

    block19=new Block(370,155,30,40);
    block20=new Block(400,155,30,40);
    block21=new Block(385,115,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot=new Slingshot(this.ball,{x:200,y:200});

}
function draw(){
    background(0);
    stroke(15);

    stand1.display();
    

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    slingshot.display();
    ellipse(ball.position.x,ball.position.y,20);
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
