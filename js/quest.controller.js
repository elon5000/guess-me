'use strict'

$(document).ready(init)
$('.btn-start').click(onStartGuessing)
$('.btn-yes').click({ans: 'yes'}, onUserResponse)
$('.btn-no').click({ans: 'no'}, onUserResponse)
$('.btn-add-guess').click(onAddGuess)

function init() {
  resetAllGlobalVars()
}

function onStartGuessing() {
  $('.game-start').hide()
  renderQuest()
  $('.quest').show()
}

function renderQuest() {
  $('.quest').find('h2').text(getCurrQuest().txt)
}

function onUserResponse(ev) {
  const res = ev.data.ans
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!')
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!')
      $('.quest').hide()
      $('.new-quest').show()
    }
  } else {
    moveToNextQuest(res)
    renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault()
  const newGuess = $('#newGuess').val()
  const newQuest = $('#newQuest').val()
  addGuess(newQuest, newGuess)
  onRestartGame()
}

function onRestartGame() {
  $('.new-quest').hide()
  $('.game-start').show()
  resetAllGlobalVars()
}
