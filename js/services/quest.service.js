'use strict'

const DB_KEY = 'quest_db'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function createQuestsTree() {
  const questTree = createQuest('Male?')
  questTree.yes = createQuest('Gandhi')
  questTree.no = createQuest('Rita')
  return questTree
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function resetAllGlobalVars() {
  gQuestsTree = loadFromLocalStorage(DB_KEY) || createQuestsTree()
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

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  const lastQuest = gCurrQuest.txt
  console.log('prevQuestText', lastQuest)
  gCurrQuest.txt = newQuestTxt
  gCurrQuest.no = createQuest(lastQuest)
  gCurrQuest.yes = createQuest(newGuessTxt)
  saveToLocalStorage(DB_KEY, gQuestsTree)
}

function getCurrQuest() {
  return gCurrQuest
}
