let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.lenght; i++){
    filters[i].checked = true;
}


//Aventure filter
let adventureFilter = document.getElementById("checkbox-adventure")
adventureFilter.onchange = function(){
    if(adventureFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//Action filter
let actionFilter = document.getElementById("checkbox-action")
actionFilter.onchange = function(){
    if(actionFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//sport
let sportFilter = document.getElementById("checkbox-sport")
sportFilter.onchange = function(){
    if(sportFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){
                allGames[i].style.display = "none";
            }
        }
    }
}

// Price filter
let priceFilter = document.getElementById("checkbox-price");
priceFilter.onchange = function() {
  let price = parseFloat(priceFilter.value);
  for (let i = 0; i < allGames.length; i++) {
    let gamePrice = parseFloat(allGames[i].dataset.price);
    if (gamePrice <= price) {
      allGames[i].style.display = "block";
    } else {
      allGames[i].style.display = "none";
    }
  }
};

