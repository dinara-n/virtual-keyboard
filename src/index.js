import './style.css';
import drawHtml from './draw-html';
import keyboard from './keyboard';
import showApropriateKeys from './show-appropriate-keys';

let htmlKeyboard;
const keysToBtns = new Map([
  ['Backquote', '.btn--backquote'],
  ['Digit1', '.btn--1'],
  ['Digit2', '.btn--2'],
  ['Digit3', '.btn--3'],
  ['Digit4', '.btn--4'],
  ['Digit5', '.btn--5'],
  ['Digit6', '.btn--6'],
  ['Digit7', '.btn--7'],
  ['Digit8', '.btn--8'],
  ['Digit9', '.btn--9'],
  ['Digit0', '.btn--0'],
  ['Minus', '.btn--minus'],
  ['Equal', '.btn--equal'],
  ['KeyQ', '.btn--q'],
  ['KeyW', '.btn--w'],
  ['KeyE', '.btn--e'],
  ['KeyR', '.btn--r'],
  ['KeyT', '.btn--t'],
  ['KeyY', '.btn--y'],
  ['KeyU', '.btn--u'],
  ['KeyI', '.btn--i'],
  ['KeyO', '.btn--o'],
  ['KeyP', '.btn--p'],
  ['BracketLeft', '.btn--bracketL'],
  ['BracketRight', '.btn--bracketR'],
  ['KeyA', '.btn--a'],
  ['KeyS', '.btn--s'],
  ['KeyD', '.btn--d'],
  ['KeyF', '.btn--f'],
  ['KeyG', '.btn--g'],
  ['KeyH', '.btn--h'],
  ['KeyJ', '.btn--j'],
  ['KeyK', '.btn--k'],
  ['KeyL', '.btn--l'],
  ['Semicolon', '.btn--semicolon'],
  ['Quote', '.btn--quote'],
  ['Backslash', '.btn--backslash'],
  ['KeyZ', '.btn--z'],
  ['KeyX', '.btn--x'],
  ['KeyC', '.btn--c'],
  ['KeyV', '.btn--v'],
  ['KeyB', '.btn--b'],
  ['KeyN', '.btn--n'],
  ['KeyM', '.btn--m'],
  ['Comma', '.btn--comma'],
  ['Period', '.btn--dot'],
  ['Slash', '.btn--question'],
]);
const keysToBtnsSpecial = new Map([
  ['Tab', '.btn--tab'],
  ['Backspace', '.btn--backspace'],
  ['Delete', '.btn--del'],
  ['Enter', '.btn--enter'],
  ['Space', '.btn--space'],
  ['CapsLock', '.btn--capslock'],
  ['ShiftLeft', '.btn--shift-left'],
  ['ShiftRight', '.btn--shift-right'],
  ['AltLeft', '.btn--alt-left'],
  ['AltRight', '.btn--alt-right'],
  ['ControlLeft', '.btn--ctrl-left'],
  ['ControlRight', '.btn--ctrl-right'],
  ['ArrowUp', '.btn--up'],
  ['ArrowLeft', '.btn--left'],
  ['ArrowDown', '.btn--down'],
  ['ArrowRight', '.btn--right'],
]);

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
  const pressedKeys = new Set();
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
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '';
      } else {
        keyboard.capslockOn = true;
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '#6b6b6b';
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
    pressedKeys.add(event.code);
    if (keysToBtns.has(event.code)) {
      event.preventDefault();
      cursor = htmlDisplay.selectionStart;
      htmlDisplay.value = htmlDisplay.value.slice(0, htmlDisplay.selectionStart) + htmlKeyboard.querySelector(keysToBtns.get(event.code)).querySelector('.show').innerHTML
      + htmlDisplay.value.slice(htmlDisplay.selectionEnd);
      htmlDisplay.selectionStart = cursor + 1;
      htmlDisplay.selectionEnd = cursor + 1;
      keySelected = htmlKeyboard.querySelector(keysToBtns.get(event.code));
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
    if (event.code === 'CapsLock') {
      event.preventDefault();
      if (keyboard.capslockOn) {
        keyboard.capslockOn = false;
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '';
      } else {
        keyboard.capslockOn = true;
        htmlKeyboard.querySelector('.btn--capslock').style.backgroundColor = '#6b6b6b';
      }
      showApropriateKeys();
    }
    if (event.code === 'ShiftLeft') {
      event.preventDefault();
      htmlKeyboard.querySelector('.btn--shift-left').style.backgroundColor = '#6b6b6b';
      if (!event.repeat) {
        keyboard.shiftPressed = true;
        showApropriateKeys();
      }
    }
    if (event.code === 'ShiftRight') {
      event.preventDefault();
      htmlKeyboard.querySelector('.btn--shift-right').style.backgroundColor = '#6b6b6b';
      if (!event.repeat) {
        keyboard.shiftPressed = true;
        showApropriateKeys();
      }
    }
    if (event.code === 'AltLeft') {
      event.preventDefault();
      keyboard.languageToggle();
      showApropriateKeys();
      localStorage.setItem('language', keyboard.language);
      htmlKeyboard.querySelector('.btn--alt-left').style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'AltRight') {
      event.preventDefault();
      keyboard.languageToggle();
      showApropriateKeys();
      localStorage.setItem('language', keyboard.language);
      htmlKeyboard.querySelector('.btn--alt-right').style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ControlLeft') {
      event.preventDefault();
      htmlKeyboard.querySelector('.btn--ctrl-left').style.backgroundColor = '#6b6b6b';
    }
    if (event.code === 'ControlRight') {
      event.preventDefault();
      htmlKeyboard.querySelector('.btn--ctrl-right').style.backgroundColor = '#6b6b6b';
    }
    htmlDisplay.focus();
  });

  document.addEventListener('keyup', (event) => {
    if (pressedKeys.has(event.code) && keysToBtns.has(event.code)) {
      htmlKeyboard.querySelector(keysToBtns.get(event.code)).style.backgroundColor = '';
      pressedKeys.delete(event.code);
    }
    if (pressedKeys.has(event.code) && keysToBtnsSpecial.has(event.code) && event.code !== 'CapsLock') {
      htmlKeyboard.querySelector(keysToBtnsSpecial.get(event.code)).style.backgroundColor = '';
      pressedKeys.delete(event.code);
      if (!pressedKeys.has('ShiftLeft') && !pressedKeys.has('ShiftRight')) {
        keyboard.shiftPressed = false;
        showApropriateKeys();
      }
    }
    pressedKeys.delete(event.code);
  });
});
