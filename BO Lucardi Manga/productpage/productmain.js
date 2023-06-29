const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let champagne1 = 0; 
let champagne2 = 0;
let champagne3 = 0;
let champagne4 = 0;
let champagne5 = 0;
let champagne6 = 0;
let champagne7 = 0;
let champagne8 = 0;
let champagne9 = 0;
let champagne10 = 0;
let champagne11 = 0;
let champagne12 = 0;

let totalValue = 0;
let totalValue1 = 0;
let totalValue2 = 0;
let totalValue3 = 0;
let totalValue4 = 0;
let totalValue5 = 0;
let totalValue6 = 0;
let totalValue7 = 0;
let totalValue8 = 0;
let totalValue9 = 0;
let totalValue10= 0;
let totalValue11= 0;
let totalValue12= 0;


document.getElementById("total--price").innerText = "Total price: €"+ totalValue.toFixed(2).toString();
document.getElementById("total--price1").innerText = "€ " + totalValue1.toFixed(2).toString();
document.getElementById("total--price2").innerText = "€ " + totalValue2.toFixed(2).toString();
document.getElementById("total--price3").innerText = "€ " + totalValue3.toFixed(2).toString();
document.getElementById("total--price4").innerText = "€ " + totalValue4.toFixed(2).toString();
document.getElementById("total--price5").innerText = "€ " + totalValue5.toFixed(2).toString();
document.getElementById("total--price6").innerText = "€ " + totalValue6.toFixed(2).toString();
document.getElementById("total--price7").innerText = "€ " + totalValue7.toFixed(2).toString();
document.getElementById("total--price8").innerText = "€ " + totalValue8.toFixed(2).toString();
document.getElementById("total--price9").innerText = "€ " + totalValue9.toFixed(2).toString();
document.getElementById("total--price10").innerText = "€ " + totalValue10.toFixed(2).toString();
document.getElementById("total--price11").innerText = "€ " + totalValue11.toFixed(2).toString();
document.getElementById("total--price12").innerText = "€ " + totalValue12.toFixed(2).toString();

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function() {
      cartMessage += 1;
      cartMessageValue.innerHTML = cartMessage;
      switch (addToCartButtons[i].dataset.product) {
        case "champagne1":
          champagne1 += 1;
          totalValue1 += 14.99;
          break;
        case "champagne2":
          champagne2 += 1;
          totalValue2 += 14.99;
          break;
        case "champagne3":
          champagne3 += 1;
          totalValue3 += 14.99;
          break;
        case "champagne4":
          champagne4 += 1;
          totalValue4 += 14.99;
          break;
        case "champagne5":
          champagne5 += 1;
          totalValue5 += 14.99;
          break;
        case "champagne6":
          champagne6 += 1;
          totalValue6 += 14.99;
          break;
        case "champagne7":
          champagne7 += 1;
          totalValue7 += 19.99;
          break;
        case "champagne8":
          champagne8 += 1;
          totalValue8 += 19.99;
          break;
        case "champagne9":
          champagne9 += 1;
          totalValue9 += 19.99;
          break;
        case "champagne10":
          champagne10 += 1;
          totalValue10 += 11.99;
          break;
        case "champagne11":
          champagne11 += 1;
          totalValue11 += 11.99;
          break;
        case "champagne12":
          champagne12 += 1;
          totalValue12 += 11.99;
          break;
      }

      totalValue = totalValue1 + totalValue2 + totalValue3 + totalValue4 + totalValue5 + totalValue6 + totalValue7 + totalValue8 + totalValue9 + totalValue10 + totalValue11 + totalValue12;

      document.getElementById("total--price").innerText = "Total price : €" + totalValue.toFixed(2).toString();
      document.getElementById("total--price1").innerText = "€ " + totalValue1.toFixed(2).toString();
      document.getElementById("total--price2").innerText = "€ " + totalValue2.toFixed(2).toString();
      document.getElementById("total--price3").innerText = "€ " + totalValue3.toFixed(2).toString();
      document.getElementById("total--price4").innerText = "€ " + totalValue4.toFixed(2).toString();
      document.getElementById("total--price5").innerText = "€ " + totalValue5.toFixed(2).toString();
      document.getElementById("total--price6").innerText = "€ " + totalValue6.toFixed(2).toString();
      document.getElementById("total--price7").innerText = "€ " + totalValue7.toFixed(2).toString();
      document.getElementById("total--price8").innerText = "€ " + totalValue8.toFixed(2).toString();
      document.getElementById("total--price9").innerText = "€ " + totalValue9.toFixed(2).toString();
      document.getElementById("total--price10").innerText = "€ " + totalValue10.toFixed(2).toString();
      document.getElementById("total--price11").innerText = "€ " + totalValue11.toFixed(2).toString();
      document.getElementById("total--price12").innerText = "€ " + totalValue12.toFixed(2).toString();

  
      if (modalIOpen === false) {
        shoppingModal.style.display = "flex";
        modalIOpen = true;
        setTimeout(function() {
          shoppingModal.style.display = "none";
          modalIOpen = false;
        }, 2000);
      }
    };
  }
  

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        document.getElementById("js--amount-champagne1").innerHTML = champagne1 + "x";
        document.getElementById("js--amount-champagne2").innerHTML = champagne2 + "x";
        document.getElementById("js--amount-champagne3").innerHTML = champagne3 + "x";
        document.getElementById("js--amount-champagne4").innerHTML = champagne4 + "x";
        document.getElementById("js--amount-champagne5").innerHTML = champagne5 + "x";
        document.getElementById("js--amount-champagne6").innerHTML = champagne6 + "x";
        document.getElementById("js--amount-champagne7").innerHTML = champagne7 + "x";
        document.getElementById("js--amount-champagne8").innerHTML = champagne8 + "x";
        document.getElementById("js--amount-champagne9").innerHTML = champagne9 + "x";
        document.getElementById("js--amount-champagne10").innerHTML = champagne10 + "x";
        document.getElementById("js--amount-champagne11").innerHTML = champagne11 + "x";
        document.getElementById("js--amount-champagne12").innerHTML = champagne12 + "x";


        return;
    }
        document.querySelector("main").style.display = "block";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;


}