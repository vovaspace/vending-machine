import printText from './printText';

export default class TextBoard {
  constructor(text, tag) {
    this._text = text;
    this._currentText = text;
    this._tag = tag || 'div';
  }

  prerender() {
    const textBoardEl = document.createElement(this._tag);
    textBoardEl.classList.add('text-board');
    textBoardEl.classList.add('text-board_disable');

    const textEl = document.createElement('span');
    textEl.classList.add('text-board__text');
    this._textEl = textEl;

    textBoardEl.appendChild(textEl);
    this._textBoadrEl = textBoardEl;
    return textBoardEl;
  }

  render() {
    this._textBoadrEl.classList.remove('text-board_disable');
    this._textEl.innerHTML = '.';
  }

  turnOn() {
    this._textEl.innerHTML = '';
    printText(this._text, 10, (symbol) => {
      let currentText = this._textEl.innerHTML;
      currentText += symbol;
      this._textEl.innerHTML = currentText;
    });
  }

  turnOff() {
    this._textEl.innerHTML = '.';
    this._currentText = this._text;
  }

  changeText(message) {
    this._currentText = message;
    this._textEl.innerHTML = message;
  }

  resetText() {
    this._currentText = this._text;
    this._textEl.innerHTML = this._currentText;
  }

  showMessage(message) {
    return new Promise((resolve) => {
      const currentText = this._currentText;

      this._textEl.innerHTML = message;

      setTimeout(() => {
        if (!this._currentText || this._currentText === currentText) {
          this._textEl.innerHTML = currentText;
          resolve();
        }
      }, 2000);
    });
  }
}
