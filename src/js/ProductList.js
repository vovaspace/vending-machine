export default class ProductList {
  constructor(productsArr) {
    this._products = {};
    productsArr.forEach((product) => {
      this._products[product.id] = product;
    });
  }

  render(nodeEl) {
    this._nodeEl = nodeEl;

    const listEl = document.createElement('ul');
    listEl.classList.add('product-list');
    this._listEl = listEl;
    nodeEl.appendChild(listEl);

    function createListItemEl(product) {
      return new Promise((resolve) => {
        const listItemEl = document.createElement('li');
        listItemEl.classList.add('product-list__item');
        listItemEl.appendChild(product.render());

        setTimeout(() => {
          resolve(listItemEl);
        }, 80);
      });
    }

    const THIS = this;

    (async function appendListItem() {
      // eslint-disable-next-line no-restricted-syntax
      for (const product of THIS.arr) {
        const listItemEl = await createListItemEl(product);
        THIS._listEl.appendChild(listItemEl);
      }
    }());
  }

  deleteEmpty() {
    return new Promise((resolve) => {
      let isDeleted = false;

      Object.keys(this._products).forEach((id) => {
        if (this._products[id].count === 0) {
          delete this._products[id];
          isDeleted = true;
        }
      });

      resolve(isDeleted);
    });
  }

  rerender() {
    this._listEl.parentNode.removeChild(this._listEl);
    this.render(this._nodeEl);
  }

  unSetActiveAll() {
    Object.values(this._products).forEach(product => product.unsetActive());
  }

  get maxPrice() {
    let maxPrice = 0;
    Object.values(this._products).forEach((product) => {
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    });
    return maxPrice;
  }

  get arr() {
    return Object.values(this._products).sort();
  }
}
