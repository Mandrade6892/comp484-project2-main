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

    $('.pet-message').text("Buddy says: Yum!");
    $('.pet-message').toggle(); // jQuery Method #1
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info.happiness += 3;
  pet_info.weight -= 1;
  energy -= 2;

    $('.pet-message').text("Buddy says: That was fun!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  pet_info.happiness -= 1;
  pet_info.weight -= 2;
  energy -= 1;

    $('.pet-message').text("Buddy says: I'm tired!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  energy += 4;
  pet_info.happiness += 1;

    $('.pet-message').text("Buddy says: That was a nice nap!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml(){
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (energy < 0) {
    energy = 0;
  }

}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(energy);

  // jQuery Method #2
    if (pet_info.happiness <= 2) {
      $('.happiness').addClass("warning");
    } else {
      $('.happiness').removeClass("warning");
    }
}