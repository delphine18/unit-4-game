
$( document ).ready(function(){
// Random number to be shown at the start of the game
  var random=Math.floor(Math.random()*101)+19

  $('#randomNumber').text(random);

    var num1= Math.floor(Math.random()*11)+1
    var num2= Math.floor(Math.random()*11)+1
    var num3= Math.floor(Math.random()*11)+1
    var num4= Math.floor(Math.random()*11)+1
  
 
  var total = 0; 
  var wins = 0;
  var losses = 0;

$('.winsNum').text(wins);
$('.lossesNum').text(losses);


//resets the game
function reset(){
      random=Math.floor(Math.random()*101)+19;
      $('#randomNumber').text(random);
      num1= Math.floor(Math.random()*11)+1;
      num2= Math.floor(Math.random()*11)+1;
      num3= Math.floor(Math.random()*11)+1;
      num4= Math.floor(Math.random()*11)+1;
      total = 0;
      $('#finalScore').text(total);
      } 

//The click function & win/lose conditions
  $('.one').on ('click', function(){
    total = total + num1;
    $('#finalScore').text(total); 

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

  $('.two').on ('click', function(){
    total = total + num2;
    $('#finalScore').text(total); 

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


  $('.three').on ('click', function(){
    total = total + num3;
    $('#finalScore').text(total);

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

  $('.four').on ('click', function(){
    total = total + num4;
    $('#finalScore').text(total); 
      
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

})