var num = 0;

window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bakery";
}

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;
    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 50 ){
        num += 5;
        upgradeLevel.innerHTML = "Granny Level";
    }
    //automatic factory upgrade to 10x
    if(num >= 1000) {
        num += 100;
        upgradeLevel.innerHTML = "Factory Level";
    }
    //automatic plant upgrade to 30x
    if(num >= 5000) {
        num += 500;
        upgradeLevel.innerHTML = "Plant Level";
    }
    //automatic super factory upgrade to 1000x
    if(num >= 1000000000) {
        num += 1000000;
        upgradeLevel.innerHTML = "Super-Plant Level";
    }
}
