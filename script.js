var aboutButton = document.querySelector('#aboutButton')
var workButton = document.querySelector('#workButton')
var contactButton = document.querySelector('#contactButton')
var resumeButton = document.querySelector('#resumeButton')
var projectButton = document.querySelector('#projectButton')
var submitButton = document.querySelector('#submitButton')
var resume = document.querySelector('#resumeImg')

aboutButton.addEventListener('click', function () {
  aboutButton.className = 'nav-link active'
  workButton.className = 'nav-link'
  contactButton.className = 'nav-link'
  resumeButton.className = 'nav-link'
  resume.className = 'hidden'
})

workButton.addEventListener('click', function () {
  workButton.className = 'nav-link active'
  aboutButton.className = 'nav-link'
  contactButton.className = 'nav-link'
  resumeButton.className = 'nav-link'
  resume.className = 'hidden'
})

contactButton.addEventListener('click', function () {
  contactButton.className = 'nav-link active'
  workButton.className = 'nav-link'
  aboutButton.className = 'nav-link'
  resumeButton.className = 'nav-link'
  resume.className = 'hidden'
})

resumeButton.addEventListener('click', function () {
  resumeButton.className = 'nav-link active'
  workButton.className = 'nav-link'
  contactButton.className = 'nav-link'
  aboutButton.className = 'nav-link'
  resume.classList.remove('hidden')
})

projectButton.addEventListener('click', function () {
  contactButton.className = 'nav-link active'
  workButton.className = 'nav-link'
  aboutButton.className = 'nav-link'
  resumeButton.className = 'nav-link'
  resume.className = 'hidden'
})

submitButton.addEventListener('click', function (e) {
  // e.preventDefault();
  alert('Message not received, please type louder!')
})
