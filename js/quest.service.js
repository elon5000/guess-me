'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function createQuestsTree() {
  gQuestsTree = createQuest('Male?')
  gQuestsTree.yes = createQuest('Gandhi')
  gQuestsTree.no = createQuest('Rita')
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  gPrevQuest = gCurrQuest
  gCurrQuest = gPrevQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  gCurrQuest[lastRes] = createQuest(newQuestTxt)
  gCurrQuest[lastRes].yes = createQuest(newGuessTxt)
  console.log(gQuestsTree)
}

function getCurrQuest() {
  return gCurrQuest
}
