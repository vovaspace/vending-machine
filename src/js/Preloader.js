export default class Preloader {
  render() {
    const preloaderEl = document.createElement('div');
    preloaderEl.classList.add('preloader');

    const progressBarEl = document.createElement('div');
    progressBarEl.classList.add('preloader__progressbar');
    this._progressBarEl = progressBarEl;

    preloaderEl.appendChild(progressBarEl);
    this._preloaderEl = preloaderEl;
    return preloaderEl;
  }

  delete() {
    this._preloaderEl.parentNode.removeChild(this._preloaderEl);
  }

  setProgress(num) {
    this._progressBarEl.style.width = `${num}%`;
  }
}
