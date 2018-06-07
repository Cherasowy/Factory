var inputXML = prompt("Please write your items inside order tag","<order><item type='car'/><item type='truck'/><item type='car'/><item type='motorcycle'/></order>");
var car = 0;
var truck = 0;
var motorcycle = 0;
var cost = 0;
var carCount = 0;
var motorcycleCount = 0;
var truckCount = 0;
var itemsArr;
parser = new DOMParser();

$("#start").click(function(){
  var xmlDoc = parser.parseFromString(inputXML,"text/xml");
    itemsArr = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < itemsArr.length ; i++){
      if(itemsArr[i].getAttribute('type')==="car"){
        carCount++;
      } else if(itemsArr[i].getAttribute('type')==="motorcycle"){
        motorcycleCount++;
      } else if(itemsArr[i].getAttribute('type')==="truck"){
        truckCount++;
      } else {
        console.log("Nieznany Typ pojazdu!");
      }
    }
    console.log("Startuję Fabrykę!");
    display();
    console.log(`Produkcja ${carCount} samochodów`);
    carFactory(carCount);
    console.log(`Produkcja ${motorcycleCount} motorów`);
    motorcycleFactory(motorcycleCount);
    console.log(`Produkcja ${truckCount} ciężarówek`);
    truckFactory(truckCount);
    $("#start").css("display","none");
    $("#reset").css("display","block");
});

async function display(){
  $("#car").text(car);
  $("#motorcycle").text(motorcycle);
  $("#truck").text(truck);
  $("#cost").text(cost);
}

async function carFactory(cars){
  for(y=0;y<cars;y++){
    await sleep(10000);
    car++;
    cost+=1000;
    display();
  }
}

async function motorcycleFactory(motors){
  for(x=0;x<motors;x++){
    await sleep(5000);
    motorcycle++;
    cost+=600;
    display();
  }
}

async function truckFactory(trucks){
  for(z=0;z<trucks;z++){
    await sleep(15000);
    truck++;
    cost+=2000;
    display();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#reset").click(function(){
  location.reload();
});
