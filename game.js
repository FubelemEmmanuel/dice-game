
var randomnumber = Math.floor(Math.random()*6)+1;
var imagepath = "images/dice" + randomnumber + ".png";
var images = document.querySelectorAll("img")[0];
images.setAttribute("src", imagepath);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var imagepath2 = "images/dice" + randomnumber2 + ".png";
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", imagepath2);


function clicking(){
if(randomnumber > randomnumber2)
    {
        document.getElementById("header").innerHTML="you win. Refreshing....!!";
    }
    else if(randomnumber < randomnumber2)
    {
        document.getElementById("header").innerHTML="Computer  wins. Refreshing....!!";
    }
    else if(randomnumber = randomnumber2){
        document.getElementById("header").innerHTML="You Draw, try again. Refreshing....";
    }
   setTimeout(function(){

    window.location.reload();

   },2500);

    }


