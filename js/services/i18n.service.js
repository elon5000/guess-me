'use strict'

let gLang = 'en'

const gTrans = {
    logo: {
        en: 'Guess me®',
        he: 'נחש אותי®'
    },
    genieGameStart: {
        en: 'Think of Someone...',
        he: '...תחשבו על מישהו'
    },
    startBtn: {
        en: 'I\'m Ready!',
        he: '!אני מוכן'
    },
    yesBtn: {
        en: 'Yes',
        he: 'כן'
    },
    noBtn: {
        en: 'No',
        he: 'לא'
    }
}

function setLang(lang) {
    gLang = lang
}

function doTrans() {
    const $els = $('[data-trans]')
    $els.each(function() {this.innerText = gTrans[this.dataset.trans][gLang]})
}
