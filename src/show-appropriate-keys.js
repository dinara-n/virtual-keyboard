import keyboard from './keyboard';

function showApropriateKeys() {
  keyboard.findKeysToShow();
  const keysArray = [...document.querySelectorAll('.btn--regular')];
  keysArray.forEach((key) => {
    const elem = [...key.querySelectorAll('span')];
    elem.forEach((span) => {
      span.classList.remove('show');
      if (span.classList.contains(keyboard.keysToShow)) {
        span.classList.add('show');
      }
    });
  });
}
export default showApropriateKeys;
