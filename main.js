const rock = document.querySelector("#rock");
const papier = document.querySelector("#papier");
const sisers = document.querySelector("#sisers");
const wins = document.querySelector("#wins");
const loses = document.querySelector("#loses");
const ties = document.querySelector("#ties");
let resultForTies = 1;
let resultForLoses = 1;
let resultForWins = 1;
rock.addEventListener("click", () => {
  let computerMove = Math.floor(Math.random() * 100);
  if (resultForWins === 5) {
    alert(`გილოცავთ თქვენ დააგროვეთ ${resultForWins}, თქვენ გაიმარჯვეთ!`);
  } else if (resultForTies === 5) {
    alert(`თამაშის დროს დაფიქსირდა ${resultForTies} ფრე, ამიტომ ფრეა!`);
  } else if (resultForLoses === 5) {
    alert(`კომპიუტერმა დააგროვა ${resultForLoses} ქულა, თქვენ წააგეთ`);
  } else if (computerMove > 0 && computerMove < 33) {
    ties.innerHTML = `ფრე ` + resultForTies++;
  } else if (computerMove > 33 && computerMove < 65) {
    loses.innerHTML = `წაგება ` + resultForLoses++;
  } else if (computerMove > 65 && computerMove <= 100) {
    wins.innerHTML = `მოგება ` + resultForWins++;
  }
});
papier.addEventListener("click", () => {
  let computerMove = Math.floor(Math.random() * 100);
  if (resultForWins === 5) {
    alert(`გილოცავთ თქვენ დააგროვეთ ${resultForWins}, თქვენ გაიმარჯვეთ!`);
  } else if (resultForTies === 5) {
    alert(`თამაშის დროს დაფიქსირდა ${resultForTies} ფრე, ამიტომ ფრეა!`);
  } else if (resultForLoses === 5) {
    alert(`კომპიუტერმა დააგროვა ${resultForLoses} ქულა, თქვენ წააგეთ`);
  } else if (computerMove > 0 && computerMove < 33) {
    wins.innerHTML = `მოგება ` + resultForWins++;
  } else if (computerMove > 33 && computerMove < 65) {
    ties.innerHTML = `ფრე ` + resultForTies++;
  } else if (computerMove > 65 && computerMove <= 100) {
    loses.innerHTML = `წაგება ` + resultForLoses;
  }
});
sisers.addEventListener("click", () => {
  let computerMove = Math.floor(Math.random() * 100);
  if (resultForWins === 5) {
    alert(`გილოცავთ თქვენ დააგროვეთ ${resultForWins}, თქვენ გაიმარჯვეთ!`);
  } else if (resultForTies === 5) {
    alert(`თამაშის დროს დაფიქსირდა ${resultForTies} ფრე, ამიტომ ფრეა!`);
  } else if (resultForLoses === 5) {
    alert(`კომპიუტერმა დააგროვა ${resultForLoses} ქულა, თქვენ წააგეთ`);
  } else if (computerMove > 0 && computerMove < 33) {
    loses.innerHTML = `წაგება ` + resultForLoses++;
  } else if (computerMove > 33 && computerMove < 65) {
    wins.innerHTML = `მოგება ` + resultForWins++;
  } else if (computerMove > 65 && computerMove <= 100) {
    ties.innerHTML = `ფრე ` + resultForTies++;
  }
});
