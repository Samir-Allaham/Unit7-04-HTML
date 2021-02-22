document.getElementById('button').addEventListener('click', movie)

let age = 12

let day = ''

function movie () {
  age = document.getElementById('input').value
  age = parseInt(age)
  day = document.getElementById('hello').value
  if ( (age >12 && age<21) || (day=="Tuesday" || day=="Thursday") ) {

    document.getElementById('answer').innerHTML = 'You get in for free'

  } else {
    document.getElementById('answer').innerHTML = 'You need to pay'
  }
  document.getElementById('movie').innerHTML = 'Thank for verifying your age and day of the week!'
}