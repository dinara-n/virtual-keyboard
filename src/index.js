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
  htmlKeyboard.addEventListener('click', (event) => {
    const htmlKey = event.target.closest('.btn');
    if (htmlKey && htmlKey.classList.contains('btn--regular')) {
      htmlDisplay.innerHTML += htmlKey.querySelector('.show').innerHTML;
    }
    if (htmlKey && htmlKey.classList.contains('btn--tab')) {
      htmlDisplay.innerHTML += '    ';
    }
    if (htmlKey && htmlKey.classList.contains('btn--enter')) {
      htmlDisplay.innerHTML += '\n';
    }
    if (htmlKey && htmlKey.classList.contains('btn--space')) {
      htmlDisplay.innerHTML += ' ';
    }
    if (htmlKey && htmlKey.classList.contains('btn--arrow')) {
      htmlDisplay.innerHTML += htmlKey.innerHTML;
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
  });
  htmlKeyboard.addEventListener('mousedown', (event) => {
    const htmlKeyShift = event.target.closest('.btn--shift');
    // const htmlKeyCtrl = event.target.closest('.btn--ctrl');
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
    if (event.key !== 'F5') {
      event.preventDefault();
    }
    if (event.code === 'Backquote' || event.code === 'Digit1' || event.code === 'Digit2' || event.code === 'Digit3' || event.code === 'Digit4' || event.code === 'Digit5'
    || event.code === 'Digit6' || event.code === 'Digit7' || event.code === 'Digit8' || event.code === 'Digit9' || event.code === 'Digit0' || event.key === '-'
    || event.code === 'Equal' || event.code === 'KeyQ' || event.code === 'KeyW' || event.code === 'KeyE' || event.code === 'KeyR' || event.code === 'KeyT' || event.code === 'KeyY'
    || event.code === 'KeyU' || event.code === 'KeyI' || event.code === 'KeyO' || event.code === 'KeyP' || event.code === 'BracketLeft' || event.code === 'BracketRight'
    || event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD' || event.code === 'KeyF' || event.code === 'KeyG' || event.code === 'KeyH' || event.code === 'KeyJ'
    || event.code === 'KeyK' || event.code === 'KeyL' || event.code === 'Semicolon' || event.code === 'Quote' || event.code === 'Backslash' || event.code === 'KeyZ'
    || event.code === 'KeyX' || event.code === 'KeyC' || event.code === 'KeyV' || event.code === 'KeyB' || event.code === 'KeyN' || event.code === 'KeyM' || event.key === ','
    || event.code === 'Period' || event.code === 'Slash' || event.code === 'Space') {
      htmlDisplay.innerHTML += event.key;
    }
    if (event.code === 'ArrowUp') {
      htmlDisplay.innerHTML += '&uarr;';
    }
    if (event.code === 'ArrowLeft') {
      htmlDisplay.innerHTML += '&larr;';
    }
    if (event.code === 'ArrowDown') {
      htmlDisplay.innerHTML += '&darr;';
    }
    if (event.code === 'ArrowRight') {
      htmlDisplay.innerHTML += '&rarr;';
    }
    if (event.key === 'CapsLock') {
      if (keyboard.capslockOn) {
        keyboard.capslockOn = false;
      } else {
        keyboard.capslockOn = true;
      }
      showApropriateKeys();
    }
    if (event.key === 'Shift') {
      if (!event.repeat) {
        keyboard.shiftPressed = true;
        showApropriateKeys();
      }
    }
    if (event.key === 'Alt') {
      keyboard.languageToggle();
      showApropriateKeys();
      localStorage.setItem('language', keyboard.language);
    }
  });
  document.addEventListener('keyup', () => {
    keyboard.shiftPressed = false;
    showApropriateKeys();
  });
});
