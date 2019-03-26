export default class BanknoteStorage {
  constructor(b50, b100, b200, b500, b1000) {
    this._b50 = b50 || 0;
    this._b100 = b100 || 0;
    this._b200 = b200 || 0;
    this._b500 = b500 || 0;
    this._b1000 = b1000 || 0;
  }

  get sum() {
    return this._b50 * 50
      + this._b100 * 100
      + this._b200 * 200
      + this._b500 * 500
      + this._b1000 * 1000;
  }

  add(value) {
    return new Promise((resolve, reject) => {
      const banknote = parseInt(value, 10);

      if (Number.isNaN(banknote)) {
        reject(new Error('Bankote must be a number!'));
      }

      switch (banknote) {
        case 50:
          this._b50 += 1;
          break;
        case 100:
          this._b100 += 1;
          break;
        case 200:
          this._b200 += 1;
          break;
        case 500:
          this._b500 += 1;
          break;
        case 1000:
          this._b1000 += 1;
          break;
        default:
          reject(new Error('Unknown banknote!'));
      }

      resolve(this.sum);
    });
  }

  merge(banknoteStorage) {
    return new Promise((resolve) => {
      this._b50 += banknoteStorage._b50;
      this._b100 += banknoteStorage._b100;
      this._b200 += banknoteStorage._b200;
      this._b500 += banknoteStorage._b500;
      this._b1000 += banknoteStorage._b1000;
      resolve();
    });
  }

  reset() {
    return new Promise((resolve) => {
      this._b50 = 0;
      this._b100 = 0;
      this._b200 = 0;
      this._b500 = 0;
      this._b1000 = 0;
      resolve();
    });
  }
}
