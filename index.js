function getRandomNumber () {
  return Math.floor(Math.random() * 100) + 1
}

window.addEventListener('load', function () {

  let randomNumber = getRandomNumber()

  let submitButton = document.querySelector('.submitButton')
  let guessInput = document.querySelector('.userInput')
  let messageElement = document.querySelector('.message')
  let highGuessHint = document.querySelector('.highGuess')
  let lowGuessHint = document.querySelector('.lowGuess')

  submitButton.addEventListener('click', function () {
    let guessedNumber = Number(guessInput.value)

    if (isNaN(guessedNumber)) {
      messageElement.innerHTML = 'Niekde je chyba.'
    } else if (guessedNumber === randomNumber) {
      messageElement.innerHTML = 'Gratulujem, uhadla si!'
    } else if (guessedNumber > randomNumber) {
      messageElement.innerHTML = 'Myslim si mensi cislo.'
      highGuessHint.innerHTML = String(guessedNumber)
    } else {
      messageElement.innerHTML = 'Myslim si vetsi cislo.'
      lowGuessHint.innerHTML = String(guessedNumber)
    }

  })

  console.log('myslim si cislo', randomNumber)

})


