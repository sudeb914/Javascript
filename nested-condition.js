var denishPrice = 50;
var butterBrade = 25;
var toadtBiscuits = 10;
var money = 30;
var packedWell = false;


/* if(denishPrice < money){
  console.log("ami denish khabo");
}
else if(butterBrade < money){
  console.log("ami butterBrade khabo");
}
else if(toadtBiscuits < money){
  console.log("ami toast   khabo");
}
else{
    console.log("khabo na");
} */

if(denishPrice < money){
    if(packedWell == true){
        console.log("denish khabo");
    }
    else{
        console.log("denish khabo na maci kheye ordek kore felse");
    }
}