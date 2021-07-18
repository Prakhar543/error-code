const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var particles=[];
var divisions=[];
var plinkos=[];
var divisionHeight=300;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    for(var i=40;i<=800;i=i+50)
    {
        plinkos.push(new Plinko(i,75,7,7))
    }

    for(var i=15;i<=800-10;i=i+50)
    {
        plinkos.push(new Plinko(i,175,7,7))
    }

    for(var i=40;i<=800;i=i+50)
    {
        plinkos.push(new Plinko(i,275,7,7))
    }

    for(var i=15;i<=800-10;i=i+50)
    {
        plinkos.push(new Plinko(i,375,7,7))
    }

    for(var i=0;i<=800;i=i+80)
    {
        divisions.push(new Division(i,650,10,300))
    }
 ground=new Ground(50,600,900,10)
 
}



function draw(){
    background("black");
    Engine.update(engine);

    if(frameCount%60===0)
{
    particles.push(new Particle(random(width/2-10,width/2+10),70,7));
} 

    ground.display();

    
for(var k=0;k<=plinkos.length;k++)
{
    plinkos[k].display();
}

    for(var h=0;h<=particles.length;h++)
{
    particles[h].display();
}
    for(var j=0;j<=divisions.length;j++)
    {
        divisions[j].display();
    }

}