// ==UserScript==
// @name         MelhorLeituraAPPQConcurso
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.qconcursos.com/cursos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

let myElements = document.querySelectorAll('p');

for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.lineHeight = '25px';
}

let myElements1 = document.querySelectorAll('li');

for (let i = 0; i < myElements1.length; i++) {
	myElements1[i].style.lineHeight = '25px';
}
})();
