import TextBoard from './TextBoard';
import printText from './printText';

export default class Form {
  constructor(labelText, descText) {
    this._labelText = labelText;
    this._descText = descText || null;
    this._isOn = false;
  }

  prerender() {
    const formEl = document.createElement('form');
    formEl.classList.add('form');

    const label = new TextBoard(this._labelText, 'label');
    const labelEl = label.prerender();
    labelEl.classList.add('form__label');
    formEl.appendChild(labelEl);
    this._label = label;
    this._labelEl = labelEl;

    const inputContainerEl = document.createElement('div');
    inputContainerEl.classList.add('form__input-container');
    inputContainerEl.classList.add('form__input-container_off');

    const inputEl = document.createElement('input');
    inputEl.classList.add('form__input');
    inputEl.classList.add('form__input_disable');
    inputEl.setAttribute('type', 'text');
    inputEl.disabled = true;
    inputContainerEl.appendChild(inputEl);
    this._inputContainerEl = inputContainerEl;
    this._inputEl = inputEl;
    formEl.appendChild(inputContainerEl);

    if (this._descText) {
      const descEl = document.createElement('span');
      descEl.classList.add('form__desc');
      descEl.innerHTML = this._descText;
      formEl.appendChild(descEl);
      this._descEl = descEl;
    }

    this._formEl = formEl;
    return formEl;
  }

  render() {
    this._inputContainerEl.classList.remove('form__input-container_off');
    this._label.render();
    this._inputEl.setAttribute('placeholder', '.');
  }

  turnOn() {
    if (!this._isOn) {
      this._isOn = true;

      this._inputEl.classList.remove('form__input_disable');
      this._inputEl.disabled = false;

      this._inputEl.setAttribute('placeholder', '');

      printText('...', 40, (symbol) => {
        let placeholderText = this._inputEl.getAttribute('placeholder');
        placeholderText += symbol;
        this._inputEl.setAttribute('placeholder', placeholderText);
      });

      this._label.turnOn();
    }
  }

  turnOff() {
    this._isOn = false;
    this.disable();
    this._label.turnOff();
    this._inputEl.setAttribute('placeholder', '.');
    this._inputEl.value = '';
  }

  disable() {
    this._inputEl.classList.add('form__input_disable');
    this._inputEl.disabled = true;
  }

  changeLabelText(message) {
    this._label.changeText(message);
  }

  showMessage(message) {
    this._label.showMessage(message);
  }

  addSubmitListener(func) {
    this._inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        func();
      }
    });
  }

  get value() {
    return this._inputEl.value;
  }
}
