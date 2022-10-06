const ratingNumbers = document.querySelector('.rating-numbers');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.button');
const submittedComponentWrapper = document.querySelector(
  '.submitted-rating-component-wrapper'
);
const startAppContent = document.querySelector('.start-app-content-wrapper');
const punctuationWrapper = document.querySelector('.punctuation-container');

callEventListeners();

function callEventListeners() {
  ratingNumbers.addEventListener('click', registerRating);
  submitBtn.addEventListener('click', submitRating);
}

function registerRating(e) {
  cleaningPrevSelections();
  if (e.target.classList.contains('rating')) {
    e.target.classList.add('rating-active');
  }
}

function submitRating() {
  ratings.forEach((rating) => {
    if (rating.classList.contains('rating-active')) {
      const ratingValue = rating.getAttribute('data-value');
      submittedResponse(ratingValue);
    }
  });
}

function submittedResponse(ratingValue) {
  submittedComponentWrapper.style.display = 'block';
  startAppContent.style.display = 'none';
  const punctuation = document.createElement('p');
  punctuation.classList.add('punctuation');
  punctuation.textContent = `You selected ${ratingValue} out of 5`;
  punctuationWrapper.appendChild(punctuation);
}

function cleaningPrevSelections() {
  ratings.forEach((rating) => {
    if (rating.classList.contains('rating-active')) {
      rating.classList.remove('rating-active');
    }
  });
}
