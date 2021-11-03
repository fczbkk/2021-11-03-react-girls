window.addEventListener('load', function () {

  let randomNumber = getRandomNumber()

  let submitButton = document.querySelector('.submitButton')
  let guessInput = document.querySelector('.userInput')

  submitButton.addEventListener('click', function () {
    let guessedNumber = Number(guessInput.value)

    if (guessedNumber === randomNumber) {
      console.log('Gratulujem, uhadla si!')
    } else {
      console.log('Nespravny tip.')
    }

  })

  console.log('myslim si cislo', randomNumber)

  function getRandomNumber () {
    return Math.floor(Math.random() * 100) + 1
  }

})


