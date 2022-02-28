//Array of Korean bills and coins
let billCoinArray = [50000,10000,5000,1000,500,100]

function moneyChangeToBill(amount){
 if (amount>0){
  for(i=0; i<billCoinArray.length; i++) {
   if(amount>=billCoinArray[i]){
     console.log(billCoinArray[i] + "원 짜리는 " + Math.floor(amount/billCoinArray[i]) + "개 필요")
     amount = amount - billCoinArray[i]*Math.floor(amount/billCoinArray[i])
   }else {
    continue;
   }
  }
 }else {
 console.log("값이 0 또는 음수입니다.")
 }
}

moneyChangeToBill(52400)

