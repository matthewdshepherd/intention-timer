

// QUERY SELECTORS
const categorySelect = document.querySelector('.main__section__container--selectcategory');
const activityInput = document.querySelector('.button--startactivity');
let mainSection = document.querySelector('.main__section');



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
  const seconds = document.querySelector('.seconds').value;
  const accomplishment = document.querySelector('.accomplishment').value;
  const minutes = document.querySelector('.minutes').value;
 
  hideForm()
  appendTimer(accomplishment, minutes, seconds, getActiveCategory())
  clearInputs()
})

mainSection.addEventListener('click', () => {
  if (event.target.innerText === "START") {
    timer(event)
  }
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
  <h1 class="timer--Title" id="timer--title">${title}</h1>
  <p class="time--count" id="time--count">${mins}:${seconds}</p>
  <button type="button" class="start--timer ${activeClass}">START</button>
  </container>`)
}

const getActiveCategory = () => {
  if (document.getElementsByClassName('border-color-study').length) {
    return 'border-color-study'
  } else if (document.getElementsByClassName('border-color-meditate').length) {
   return 'border-color-meditate'
  } else if (document.getElementsByClassName('border-color-excercise').length) {
   return 'border-color-excercise'
  }
}

let counter = 0;
const timer = () => {
  
  const secondCounter = () => {
    counter++
    console.log('COUNTING')
    updateCount()
  }
  
  setInterval(secondCounter, 1000);

}

const updateCount = () => {
  document.querySelector('.time--count').innerText=''
  document.querySelector('.time--count').insertAdjacentText('afterbegin',
  `${counter}
  `)
}

