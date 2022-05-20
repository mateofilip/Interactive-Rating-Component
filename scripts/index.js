let score = document.querySelectorAll('.score');
let selectedScore;
let unselectedScore;
let number;

document.querySelector('.thankYou').style.display = 'none';

score.forEach((element) => {
  element.addEventListener('click', () => {
    if (selectedScore !== element) {
      if (!selectedScore) selectedScore = element;
      unselectedScore = selectedScore;
      unselectedScore.classList.remove('selected');

      selectedScore = element;
      selectedScore.classList.add('selected');
      number = selectedScore.firstElementChild.innerHTML;
    } else if (selectedScore === element) {
      if (selectedScore.className.includes('selected')) {
        selectedScore.classList.remove('selected');
        number = undefined;
      } else {
        selectedScore.classList.add('selected');
        number = selectedScore.firstElementChild.innerHTML;
      }
    }
  });
});

let submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', () => {
  //   !number
  //     ? alert('Please select a number')
  //     : (document.querySelector('.rating').style.display = 'none');
  //   document.querySelector('.thankYou').style.display = block;

  if (!number) {
    alert('Please select a number');
  } else {
    document.querySelector('.rating').style.display = 'none';

    document.querySelector('.number').innerHTML = number;

    document.querySelector('.thankYou').style.display = 'grid';
  }
});
