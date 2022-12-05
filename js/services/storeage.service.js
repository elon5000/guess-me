'use strict'

function saveToLocalStorage(key, entity) {
    localStorage.setItem(key, JSON.stringify(entity))
}

function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}