// QUERY SELECTORS
const categorySelect = document.querySelector('.main__section__container--selectcategory');
const activityInput = document.querySelector('.button--startactivity');
let mainSection = document.querySelector('.main__section');
let currentTopic;
let time;
let activity;
let counter = 0;
let timeStart;

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
  currentTopic = accomplishment
  time = `${minutes}:${seconds}`
  activity = getActiveCategory().split('-')[2]

  timeStart = convertTimeToSecs(minutes, seconds)
  hideForm()
  appendTimer(accomplishment, minutes, seconds, getActiveCategory())
  clearInputs()
})

mainSection.addEventListener('click', () => {
  if (event.target.innerText === "START") {
    timer()
  }
})

const convertTimeToSecs = (mins, secs) => {
  return ((parseInt(mins) * 60) + parseInt(secs))
}

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

const timer = () => {
  const secondCounter = () => {
    counter++
    updateCount()
    if (timeStart === counter) {
      clearInterval(interval)
      makesideCard()
    }
  }
  const interval = setInterval(secondCounter, 1000);
}

const updateCount = () => {
  document.querySelector('.time--count').innerText=''
  document.querySelector('.time--count').insertAdjacentText('afterbegin',
    `${timeConversion(timeStart - counter)}
  `)
}

const timeConversion = (s) => {
  const min = Math.floor(s/60)
  const sec = s % 60
  return `${min}:${sec}`
}


const makesideCard = () => {
  document.querySelector('.aside').insertAdjacentHTML('beforeend',
    ` <div class="activityCard">
        <div class="activityCard--hold--study-time-indicator">
          <div class="activityCard--hold--study-time-indicator__div--study-time">
            <h5 class="hold--study-time-indicator__div--study-time__h5--activity">${activity}</h4>
            <p class="hold--study-time-indicator__div--study-time__h5--time">${time}</p>
          </div>
          <div class="indicator" id="${getClass(activity)}"></div>
        </div>
        <p class="activityCard--hold--intention--text__p--intention--text">${currentTopic}</p>
      </div>`)
}


// const makesideCard = () => {
//   document.querySelector('.aside').insertAdjacentText('beforeend',
//   ``)
// }


const getClass = (activity) => {
  if (activity === 'study'){
    return 'study'
  } else if (activity === 'meditate') {
    return 'meditate'
  } else if (activity === 'excercise') {
    return 'excercise'
  }
}