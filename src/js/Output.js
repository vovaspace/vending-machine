import TextBoard from './TextBoard';

export default class Output {
  prerender() {
    const outputEl = document.createElement('div');
    outputEl.classList.add('output');

    const textBoard = new TextBoard('');
    const textBoardEl = textBoard.prerender();
    textBoardEl.classList.add('output__text-board');
    outputEl.appendChild(textBoardEl);
    this._textBoard = textBoard;
    this._textBoardEl = textBoardEl;

    const bottomEl = document.createElement('div');
    bottomEl.classList.add('output__bottom');

    const changeEl = document.createElement('div');
    changeEl.classList.add('output__output');
    changeEl.classList.add('output__output_disable');
    changeEl.id = 'changeOutput';
    this._changeEl = changeEl;


    const productEl = document.createElement('div');
    productEl.classList.add('output__output');
    productEl.classList.add('output__output_product');
    productEl.id = 'productOutput';
    this._productEl = productEl;

    bottomEl.appendChild(changeEl);
    bottomEl.appendChild(productEl);

    outputEl.appendChild(bottomEl);
    this._outputEl = outputEl;
    return outputEl;
  }

  render() {
    this._textBoard.render();
    this._changeEl.classList.remove('output__output_disable');
  }

  turnOn() {
    this._textBoard.turnOn();
  }

  async turnOff() {
    this._changeEl.innerHTML = '';
    this._productEl.innerHTML = '';
    await this._textBoard.showMessage('Thank you!');
    this._textBoard.turnOff();
  }

  outputChange(changeObj) {
    const coinValues = Object.keys(changeObj.change);
    const outputEls = [];

    coinValues.forEach((value) => {
      if (changeObj.change[value] > 0) {
        const text = `${value} R: <br>${changeObj.change[value]} coins`;
        const changeItemEl = document.createElement('span');
        changeItemEl.classList.add('output__change-item');
        changeItemEl.innerHTML = text;

        outputEls.push(changeItemEl);
      }
    });

    if (outputEls.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const el of outputEls) {
        this._changeEl.appendChild(el);
      }
    } else {
      const changeItemEl = document.createElement('span');
      changeItemEl.classList.add('output__change-item');

      switch (changeObj.response) {
        case true:
          changeItemEl.innerHTML = 'No change.';
          break;
        default:
          changeItemEl.innerHTML = '¯\\_(ツ)_/¯';
          break;
      }

      this._changeEl.appendChild(changeItemEl);
    }
  }

  outputProduct(product) {
    const productItemEl = document.createElement('div');
    productItemEl.classList.add('output__product-item');
    productItemEl.appendChild(product.render(true));
    this._productEl.appendChild(productItemEl);
    this._productItemEl = productItemEl;
  }

  changeText(message) {
    this._textBoard.changeText(message);
  }

  addPickingUpProductListener(func) {
    this._productItemEl.addEventListener('click', (e) => {
      e.preventDefault();
      func();
    });
  }
}
