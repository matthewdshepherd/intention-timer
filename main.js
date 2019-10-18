

// QUERY SELECTORS
const categorySelect = document.querySelector('.main__section__container--selectcategory');
const activityInput = document.querySelector('.button--startactivity');



categorySelect.addEventListener('click', () => {
  if (event.target.classList[1] === 'cat-study') {
    document.getElementById('cat-meditate').classList.remove('border-color-meditate')
    document.getElementById('cat-excercise').classList.remove('border-color-excercise')
    document.getElementById('cat-study').classList.add('border-color-study')
  } else if (event.target.classList[1] === 'cat-meditate'){
    document.getElementById('cat-study').classList.remove('border-color-study')
    document.getElementById('cat-excercise').classList.remove('border-color-excercise')
    document.getElementById('cat-meditate').classList.add('border-color-meditate')
  } else if (event.target.classList[1] === 'cat-excercise'){
    document.getElementById('cat-meditate').classList.remove('border-color-meditate')
    document.getElementById('cat-study').classList.remove('border-color-study')
    document.getElementById('cat-excercise').classList.add('border-color-excercise')
  }
})

activityInput.addEventListener('click', () => {
  console.log(event)
  const seconds = document.querySelector('.seconds').value;
  const accomplishment = document.querySelector('.accomplishment').value;
  const minutes = document.querySelector('.minutes').value;
 
  hideForm()
  getActiveCategory()
  appendTimer(accomplishment, minutes, seconds, getActiveCategory())
  clearInputs()
})

const clearInputs = () => {
  document.querySelector('.userinput__div--accomplishinput--input').value = '';
  document.querySelector('.userinput__div--minutesandseconds--holder__div--input').value = '';
  document.querySelector('.userinput__div--minutesandseconds--holder__div--input').value = '';
};

const hideForm = () => {
  document.getElementById('selectcategory').classList.add('hiddenForm')
  document.getElementById('userinput').classList.add('hiddenForm')
}

const showForm = () => {
  document.getElementById('selectcategory').classList.remove('hiddenForm')
  document.getElementById('userinput').classList.add('hiddenForm')
}

const appendTimer = (title, mins, seconds, activeClass) => {
  document.querySelector('.main__section').insertAdjacentHTML('afterbegin', 
    ` <container class="timer--container ">
          <h1 class="timer--Title">${title}</h1>
          <p class="time--count">${mins}:${seconds}</p>
          <button type="button" class="start--timer ${activeClass}">START</button>
        </container>`)
}

const getActiveCategory = () => {
  if (document.getElementsByClassName('border-color-study').length) {
   return 'start--timer--study'
  } else if (document.getElementsByClassName('start--timer--med').length) {
   return 'border-color-meditate'
  } else if (document.getElementsByClassName('start--timer--ex').length) {
   return 'border-color-excercise'
  }
}
