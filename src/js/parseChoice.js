export default function parseChoice(choice, products, moneySum) {
  return new Promise((resolve, reject) => {
    const choiceId = parseInt(choice, 10);

    if (Number.isNaN(choiceId)) {
      reject(new Error('Choice must be a number!'));
    }

    const ids = [];

    products.forEach((product) => {
      if (product.id === choiceId && product.price <= moneySum) {
        resolve(product);
      }

      ids.push(product.id);
    });

    if (!ids.some(id => id === choiceId)) {
      reject(new Error('Enter the correct number!'));
    }

    reject(new Error('Not enough money!'));
  });
}
