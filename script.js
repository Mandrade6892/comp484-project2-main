$(function() {

  checkAndUpdatePetInfoInHtml();
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  
});

var pet_info = {
  name: "Buddy",
  weight: 15,
  happiness: 8
};

var energy = 10;

function clickedTreatButton(){
  pet_info.happiness += 2;
  pet_info.weight += 1;

}