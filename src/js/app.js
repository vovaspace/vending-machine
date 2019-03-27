import Form from './Form';
import Product from './Product';
import ProductList from './ProductList';
import BanknoteStorage from './BanknoteStorage';
import CoinStorage from './CoinStorage';
import Output from './Output';
import parseChoice from './parseChoice';
import Preloader from './Preloader';
import load from './load';

const products = [
  new Product(1, 'Cola', 'Cold drink', 130, 50),
  new Product(2, 'Evian', 'Water', 90, 50),
  new Product(3, 'Durex', 'Condoms', 600, 50),
  new Product(4, 'Snickers', 'Choco bar', 105, 50),
  new Product(5, 'Wagon Wheels', 'Choco cookies', 165, 50),
  new Product(6, 'WTF, Alice?', 'I don\'t know', 200, 1),
  new Product(7, 'Fanta', 'Cold drink', 130, 50)
];
const productList = new ProductList(products);

const banknotes = new BanknoteStorage();
const currentBanknotes = new BanknoteStorage();

const coins = new CoinStorage(200, 200, 500, 1000);

const showcaseEl = document.getElementById('showcase');
const controlPanelEl = document.getElementById('control-panel');

const moneyForm = new Form(
  'Insert banknotes...',
  'Available banknotes: 50, 100,  <br>200, 500 or 1000 R. <br>The machine gives change <br>in 1, 2, 5 and 10 R coins.'
);
const choiceForm = new Form('Choose product...');
const output = new Output();

const preloader = new Preloader();

(async function init() {
  await new Promise((resolve) => {
    const preloaderEl = preloader.render();
    preloaderEl.classList.add('page__preloader');
    showcaseEl.appendChild(preloaderEl);
    controlPanelEl.appendChild(moneyForm.prerender());
    controlPanelEl.appendChild(choiceForm.prerender());
    controlPanelEl.appendChild(output.prerender());
    resolve();
  });

  await load(preloader);

  await new Promise((resolve) => {
    moneyForm.render();
    choiceForm.render();
    output.render();
    preloader.delete();
    productList.render(showcaseEl);
    resolve();
  });

  moneyForm.turnOn();
  moneyForm.setFocus();
}());

moneyForm.addSubmitListener(async () => {
  try {
    const response = await currentBanknotes.add(moneyForm.value);

    productList.arr.forEach((product) => {
      if (product.price <= currentBanknotes.sum) {
        choiceForm.turnOn();
        product.setActive();
      }
    });

    if (response >= productList.maxPrice) {
      moneyForm.changeLabelText(`Inserted money: ${response} R. Enough for any product.`);
      moneyForm.disable();
      choiceForm.setFocus();
    } else {
      moneyForm.changeLabelText(`Inserted money: ${response} R`);
    }
  } catch (error) {
    moneyForm.showMessage(error.message);
  }
});

choiceForm.addSubmitListener(async () => {
  try {
    const product = await parseChoice(choiceForm.value, productList.arr);
    product.decreaseCount(1);

    const changeVal = currentBanknotes.sum - product.price;
    const change = await coins.decreaseBy(changeVal);
    await banknotes.merge(currentBanknotes);
    await currentBanknotes.reset();

    choiceForm.changeLabelText('Success!');

    const outputMessage = change.response ? 'Take your product and change!' : 'Not enough change. Sorry!';

    moneyForm.disable();
    choiceForm.disable();

    output.outputChange(change);
    output.outputProduct(product);
    output.changeText(outputMessage);

    output.addPickingUpProductListener(async () => {
      moneyForm.turnOff();
      choiceForm.turnOff();
      output.turnOff();
      productList.unSetActiveAll();
      const isDeleted = await productList.deleteEmpty();

      if (isDeleted) {
        productList.rerender();
      }

      moneyForm.turnOn();
      moneyForm.setFocus();
    });
  } catch (error) {
    choiceForm.showMessage(error.message);
  }
});
