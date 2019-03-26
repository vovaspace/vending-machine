export default class Product {
  constructor(id, name, desc, price, count) {
    this._id = id;
    this._name = name;
    this._desc = desc;
    this._price = price;
    this._count = count;
  }

  render(isCold = false) {
    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const nameEl = document.createElement('span');
    nameEl.classList.add('product__name');
    nameEl.innerHTML = this._name;

    const descEl = document.createElement('span');
    descEl.classList.add('product__desc');
    descEl.innerHTML = this._desc;

    const priceEl = document.createElement('span');
    priceEl.classList.add('product__price');
    priceEl.innerHTML = `${this._price} R`;

    const idEl = document.createElement('span');
    idEl.classList.add('product__id');
    idEl.innerHTML = this._id;

    productEl.appendChild(nameEl);
    productEl.appendChild(descEl);
    productEl.appendChild(priceEl);
    productEl.appendChild(idEl);

    if (isCold) {
      return productEl;
    }

    this._productEl = productEl;
    return productEl;
  }

  coldRender() {
    return this._productEl;
  }

  setActive() {
    this._productEl.classList.add('product_active');
  }

  unsetActive() {
    this._productEl.classList.remove('product_active');
  }

  decreaseCount(n) {
    this._count -= n;
  }

  get id() {
    return this._id;
  }

  get price() {
    return this._price;
  }

  get count() {
    return this._count;
  }
}
