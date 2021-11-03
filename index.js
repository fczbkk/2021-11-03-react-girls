function getRandomNumber () {
  return Math.floor(Math.random() * 100) + 1
}

window.addEventListener('load', function () {

  let randomNumber = getRandomNumber()
  console.log(randomNumber)

  let highestGuessedNumber = 100
  let lowestGuessedNumber = 1

  let counter = 0

  let submitButton = document.querySelector('.submitButton')
  let guessInput = document.querySelector('.userInput')
  let messageElement = document.querySelector('.message')
  let highGuessHint = document.querySelector('.highGuess')
  let lowGuessHint = document.querySelector('.lowGuess')
  let winNumberHint = document.querySelector('.winNumber')
  let startAgainButton = document.querySelector('.startAgainButton')
  let guessPanel = document.querySelector('.guessPanel')

  startAgainButton.addEventListener('click', function () {
    // document.location = document.location

    counter = 0

    randomNumber = getRandomNumber()
    console.log(randomNumber)

    messageElement.innerHTML = 'GUESS!'
    winNumberHint.innerHTML = '?'
    highGuessHint.innerHTML = '100'
    lowGuessHint.innerHTML = '1'

    guessPanel.style.visibility = 'visible'
  })

  submitButton.addEventListener('click', function () {
    counter = counter + 1

    let guessedNumber = Number(guessInput.value)

    if (isNaN(guessedNumber)) {
      messageElement.innerHTML = 'Niekde je chyba.'
    } else if (guessedNumber === randomNumber) {
      messageElement.innerHTML = `Gratulujem, uhadla si na ${counter} pokusov!`
      winNumberHint.innerHTML = String(guessedNumber)
      guessPanel.style.visibility = 'hidden'
    } else if (guessedNumber > randomNumber) {
      messageElement.innerHTML = 'Myslim si mensi cislo.'
      if (guessedNumber < highestGuessedNumber) {
        highGuessHint.innerHTML = String(guessedNumber - 1)
        highestGuessedNumber = guessedNumber
      }
    } else {
      messageElement.innerHTML = 'Myslim si vetsi cislo.'
      if (guessedNumber > lowestGuessedNumber) {
        lowGuessHint.innerHTML = String(guessedNumber + 1)
        lowestGuessedNumber = guessedNumber
      }
    }

    guessInput.value = ''
    guessInput.focus()

  })

})


