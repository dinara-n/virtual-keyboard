class Keyboard {
  constructor() {
    this.language = 'en';
    this.capslockOn = false;
    this.shiftPressed = false;
    this.keysToShow = 'en-lower';
  }

  findKeysToShow() {
    if (this.language === 'en') {
      if (this.capslockOn) {
        if (this.shiftPressed) {
          this.keysToShow = 'en-lower';
        } else {
          this.keysToShow = 'en-upper';
        }
      } else if (this.shiftPressed) {
        this.keysToShow = 'en-upper';
      } else {
        this.keysToShow = 'en-lower';
      }
    } else if (this.capslockOn) {
      if (this.shiftPressed) {
        this.keysToShow = 'ru-lower';
      } else {
        this.keysToShow = 'ru-upper';
      }
    } else if (this.shiftPressed) {
      this.keysToShow = 'ru-upper';
    } else {
      this.keysToShow = 'ru-lower';
    }
  }

  languageToggle() {
    if (this.language === 'en') {
      this.language = 'ru';
    } else {
      this.language = 'en';
    }
  }
}
const keyboard = new Keyboard();
export default keyboard;
