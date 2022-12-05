'use strict'

const DB_KEY = 'quest_db'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function resetAllGlobalVars() {
  gQuestsTree = loadFromLocalStorage(DB_KEY) || _createQuestsTree()
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  gPrevQuest = gCurrQuest
  gCurrQuest = gPrevQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt) {
  const lastQuestTxt = gCurrQuest.txt
  gCurrQuest.txt = newQuestTxt
  gCurrQuest.no = _createQuest(lastQuestTxt)
  gCurrQuest.yes = _createQuest(newGuessTxt)
  saveToLocalStorage(DB_KEY, gQuestsTree)
}

function getCurrQuest() {
  return gCurrQuest
}

function _createQuestsTree() {
  const questTree = _createQuest('Male?')
  questTree.yes = _createQuest('Gandhi')
  questTree.no = _createQuest('Rita')
  return questTree
}

function _createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}
