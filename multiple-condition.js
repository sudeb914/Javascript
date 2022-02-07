//variable
var gotJob = true;
var savedMoney = 250000;
var hasFlat = false;
var hasHouse = true;
//condition
/* if (gotJob == true && savedMoney > 2000000) {
  console.log("Cholo biye kore feli!!");
} else {
  console.log("tor koaple biya nai!!");
} */

// condition
/* if (gotJob == true && savedMoney > 2000000 && hasFlat == true) {
    console.log("Cholo biye kore feli!!");
  } else {
    console.log("tor koaple biya nai!!");
  }
 */

//condition

if ((gotJob == true && savedMoney > 2000000) || hasHouse == true) {
  console.log("Cholo biye kore feli!!");
} else {
  console.log("tor koaple biya nai!!");
}
