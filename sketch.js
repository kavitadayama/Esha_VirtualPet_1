var dog,happyDog
var food, foodStock
var database;

function preload()
{
  Dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
 }

 function setup() {
  database = firebase.database()
  createCanvas(500,500);
  dog = createSprite(250,250,2,2);
  dog.addImage(Dog);

  foodStock = database.ref('food');
  foodStock.on("value" , readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(happyDog);
  }


  drawSprites();  

  fill(255,255,254);
  stroke("black");
  text("Food remaining : " +food,170,150);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
//function to read values from database
function readStock(data){
  food=data.val();
}


//function to write values to database
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    //reducing the value of food by 1
    x=x-1;
  }
  database.ref('/').update({
  food:x
})
}


