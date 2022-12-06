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
    }
}

function setLang(lang) {
    gLang = lang
}

function doTrans() {
    const $els = $('[data-trans]')
    console.log($els)
    $els.each(function() {this.innerText = gTrans[this.dataset.trans][gLang]})
}
