import calculateChange from './calculateChange';

export default class CoinStorage {
  constructor(c1, c2, c5, c10) {
    this._c1 = c1;
    this._c2 = c2;
    this._c5 = c5;
    this._c10 = c10;
  }

  decreaseBy(num) {
    return new Promise((resolve) => {
      const change = calculateChange(num, this.obj);
      const keys = Object.keys(change.change);
      keys.forEach((key) => {
        this[`_c${key}`] -= change.change[key];
      });

      if (change.response) {
        resolve({ response: true, change: change.change });
      }
      resolve({ response: false, change: change.change });
    });
  }

  get obj() {
    const keys = Object.keys(this);
    const coinKeys = keys.filter(key => /^_c\d+$/.test(key));

    const coinStorageObj = {};

    coinKeys.forEach((key) => {
      coinStorageObj[key.match(/\d+/)] = this[key];
    });

    return coinStorageObj;
  }
}
