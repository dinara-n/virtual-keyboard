import './style.css';
import drawHtml from './draw-html';
import keyboard from './keyboard';
import showApropriateKeys from './show-appropriate-keys';

let htmlKeyboard;

keyboard.language = 'en';

document.addEventListener('DOMContentLoaded', () => {
  drawHtml();
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
    keyboard.language = storedLanguage;
  }
  showApropriateKeys();
  htmlKeyboard = document.querySelector('.keyboard');
  const htmlDisplay = document.querySelector('.display');
  let cursor = 0;
  let keySelected;
  htmlDisplay.focus();
  htmlKeyboard.addEventListener('click', (event) => {
    const htmlKey = event.target.closest('.btn');
    if (htmlKey && htmlKey.classList.contains('btn--regular')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKey.querySelector('.show').innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--tab')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}    ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 4;
      htmlDisplay.selectionEnd = cursor + 4;
    }
    if (htmlKey && htmlKey.classList.contains('btn--backspace')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart - 1)
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor - 1;
      htmlDisplay.selectionEnd = cursor - 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--del')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart)
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd + 1);
      htmlDisplay.selectionStart = cursor;
      htmlDisplay.selectionEnd = cursor;
    }
    if (htmlKey && htmlKey.classList.contains('btn--enter')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}\n${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--space')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)} ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--tab')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}    ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 4;
      htmlDisplay.selectionEnd = cursor + 4;
    }
    if (htmlKey && htmlKey.classList.contains('btn--backspace')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart - 1)
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor - 1;
      htmlDisplay.selectionEnd = cursor - 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--del')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart)
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd + 1);
      htmlDisplay.selectionStart = cursor;
      htmlDisplay.selectionEnd = cursor;
    }
    if (htmlKey && htmlKey.classList.contains('btn--enter')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}\n${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--space')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)} ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--arrow')) {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart)
      + htmlKey.innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
    }
    if (htmlKey && htmlKey.classList.contains('btn--capslock')) {
      if (keyboard.capslockOn) {
        keyboard.capslockOn = false;
      } else {
        keyboard.capslockOn = true;
      }
      showApropriateKeys();
    }
    if (htmlKey && htmlKey.classList.contains('btn--alt')) {
      keyboard.languageToggle();
      showApropriateKeys();
      localStorage.setItem('language', keyboard.language);
    }
    htmlDisplay.focus();
  });
  htmlKeyboard.addEventListener('mousedown', (event) => {
    const htmlKeyShift = event.target.closest('.btn--shift');
    if (htmlKeyShift) {
      keyboard.shiftPressed = true;
      showApropriateKeys();
    }
  });
  htmlKeyboard.addEventListener('mouseup', (event) => {
    const htmlKey = event.target.closest('.btn--shift');
    if (htmlKey) {
      keyboard.shiftPressed = false;
      showApropriateKeys();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code !== 'F5') {
      event.preventDefault();
    }
    if (event.code === 'Backquote') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--backquote').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--backquote');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit1') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--1').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--1');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit2') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--2').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--2');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit3') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--3').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--3');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit4') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--4').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--4');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit5') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--5').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--5');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit6') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--6').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--6');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit7') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--7').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--7');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit8') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--8').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--8');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit9') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--9').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--9');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Digit0') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--0').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--0');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.key === '-') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--minus').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--minus');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Equal') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--equal').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--equal');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyQ') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--q').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--q');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyW') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--w').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--w');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyE') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--e').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--e');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyR') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--r').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--r');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyT') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--t').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--t');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyY') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--y').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--y');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyU') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--u').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--u');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyI') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--i').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--i');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyO') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--o').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--o');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyP') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--p').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--p');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'BracketLeft') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--bracketL').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--bracketL');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'BracketRight') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--bracketR').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--bracketR');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyA') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--a').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--a');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyS') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--s').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--s');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyD') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--d').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--d');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyF') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--f').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--f');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyG') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--g').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--g');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyH') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--h').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--h');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyJ') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--j').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--j');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyK') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--k').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--k');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyL') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--l').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--l');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Semicolon') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--semicolon').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--semicolon');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Quote') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--quote').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--quote');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Backslash') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--backslash').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--backslash');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyZ') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--z').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--z');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyX') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--x').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--x');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyC') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--c').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--c');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyV') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--v').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--v');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyB') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--b').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--b');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyN') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--n').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--n');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'KeyM') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--m').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--m');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.key === ',') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--comma').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--comma');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Period') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--dot').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--dot');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Slash') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--question').querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--question');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Tab') {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}    ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 4;
      htmlDisplay.selectionEnd = cursor + 4;
      keySelected = htmlKeyboard.querySelector('.btn--tab');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Backspace') {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart - 1)
        + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor - 1;
      htmlDisplay.selectionEnd = cursor - 1;
      keySelected = htmlKeyboard.querySelector('.btn--backspace');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.key === 'Delete') {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart)
        + htmlDisplay.value.slice(htmlDisplay.selectionEnd + 1);
      htmlDisplay.selectionStart = cursor;
      htmlDisplay.selectionEnd = cursor;
      keySelected = htmlKeyboard.querySelector('.btn--del');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Enter') {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)}\n${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--enter');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'Space') {
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = `${htmlDisplay.value.slice(0, htmlDisplay.selectionStart)} ${htmlDisplay.value.slice(htmlDisplay.selectionEnd)}`;
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--space');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ArrowUp') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--up').innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--up');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--left').innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--left');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--down').innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--down');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ArrowRight') {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector('.btn--right').innerHTML + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector('.btn--right');
      keySelected.style.backgroundColor = '#6b6b6b';
    }
    if (event.key === 'CapsLock') {
      event.preventDefault();
      if (keyboard.capslockOn) {
        keyboard.capslockOn = false;
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '#000000';
      } else {
        keyboard.capslockOn = true;
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '#6b6b6b';
      }
      showApropriateKeys();
    }
    if (event.key === 'Shift') {
      event.preventDefault();
      htmlKeyboard.querySelector('.btn--shift').style.backgroundColor = '#6b6b6b';
      if (!event.repeat) {
        keyboard.shiftPressed = true;
        showApropriateKeys();
      }
    }
    if (event.key === 'Alt') {
      event.preventDefault();
      keyboard.languageToggle();
      showApropriateKeys();
      localStorage.setItem('language', keyboard.language);
      htmlKeyboard.querySelector('.btn--alt').style.backgroundColor = '#6b6b6b';
    }
    htmlDisplay.focus();
  });
  document.addEventListener('keyup', () => {
    keyboard.shiftPressed = false;
    showApropriateKeys();
    keySelected.style.backgroundColor = '#000000';
  });
});
