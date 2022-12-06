'use strict'

$(document).ready(init)
$('.btn-start').click(onStartGuessing)
$('.btn-yes').click(onUserResponse)
$('.btn-no').click(onUserResponse)
$('.lang-select').change(onSetLang)
$('.btn-add-guess').click(onAddGuess)

function init() {
  resetAllGlobalVars()
}

function onStartGuessing() {
  $('.game-start').hide()
  _renderQuest()
  $('.quest').show()
}

function onUserResponse(ev) {
  const res = ev.target.dataset.ans
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
    _renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault()
  const newGuess = $('#newGuess').val()
  const newQuest = $('#newQuest').val()
  _clearInputs([$('#newGuess'), $('#newQuest')])
  addGuess(newQuest, newGuess)
  onRestartGame()
}

function onRestartGame() {
  $('.new-quest').hide()
  $('.game-start').show()
  resetAllGlobalVars()
}

function onSetLang(ev) {
  const lang = ev.delegateTarget.value
  setLang(lang)
  doTrans()
}

function _clearInputs(inputs) {
  inputs.forEach(input => {
    input.val('')
  })
}

function _renderQuest() {
  $('.quest').find('h2').text(getCurrQuest().txt)
}
