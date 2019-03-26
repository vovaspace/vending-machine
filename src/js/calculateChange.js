export default function calculateChange(sum, coinsObj) {
  const awailableCoinValues = Object.keys(coinsObj);
  awailableCoinValues.sort((a, b) => b - a);
  const localCoins = coinsObj;
  let currentSum = sum;
  let i = 0;

  const change = {};
  awailableCoinValues.forEach((key) => {
    change[key] = 0;
  });

  function adafad() {
    if (localCoins[awailableCoinValues[i]] === 0) {
      awailableCoinValues.splice(i, 1);
      adafad();
    }

    if (currentSum - awailableCoinValues[i] >= 0 && currentSum > 0) {
      currentSum -= awailableCoinValues[i];
      localCoins[awailableCoinValues[i]] -= 1;
      change[awailableCoinValues[i]] += 1;
      i = 0;
      adafad();
    } else if (i !== awailableCoinValues.length) {
      i += 1;
      adafad();
    }

    if (currentSum === 0) {
      return true;
    }


    return false;
  }

  const response = adafad();

  if (response) {
    return { response: true, change };
  }
  return { response: false, change };
}
