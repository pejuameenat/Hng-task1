const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const date = new Date()
const currentDay = date.getDay()
const today = daysOfTheWeek[currentDay]
document.getElementById('currentDay').textContent = `${today}.`
const centerLinks = document.querySelector('.centerLinks')
document.querySelector('.menuSpan').addEventListener('click', function () {
//   console.log('clicked')
centerLinks.classList.toggle('hidden')
})