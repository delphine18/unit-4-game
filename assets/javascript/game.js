
$( document ).ready(function(){
// Random number to be shown at the start of the game
  var random = Math.floor(Math.random()*102)+19
  $('#randomNumber').text(random);

  var total = 0; 
  var wins = 0;
  var losses = 0;

var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgauaajcPDpWoddWoh__PZ2PI0rJiQEgUT55K8qmx8TwPs4wPzpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfxXidBEjy8Uz_wa6NFo98ozBfazAGWhp1oB7A-efj0B6smnj","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQippCHDqN9kK9ViFLJFy8wBnsESl8ATSDI__B-Wsj0rM0XRh1VDg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGT_DrhPa4siZ_Vws_gYlGQXDo4ttdmLDIg98m7tgw3seqJS2MEA"]

//resets the game
function reset(){
  random=Math.floor(Math.random()*102)+19;
  $('#randomNumber').text(random);
  num= Math.floor(Math.random()*12)+1;
  console.log("Yooo" + num)
  total = 0;
  $('.finalScore').text(total);
} 

//creates crystals images and the associated data
for (var i = 0;i<4;i++){
  var num = Math.floor(Math.random()*12)+1;
  var newCrystal = $("<img>");
  newCrystal.attr("src",images[i]);
  newCrystal.attr("class","crystal");
  newCrystal.attr("data-value",num);
  $(".crystals").append(newCrystal);
}

$(".crystal").on("click",function(){
  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(crystalValue);
  total = total + crystalValue;
   $('.finalScore').text(total); 

        if (total == random){
          $(".message").html("You won!")
          wins++; 
          $('.winsNum').text(wins);
          reset();
        }

        else if ( total > random){
          $(".message").html("You lost!")
          losses++;
          $('.lossesNum').text(losses);
          reset()  
        } 
      })
});

    



 