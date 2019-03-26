export default function printText(text, time, cb) {
  const textArr = text.toString().split('');

  if (textArr.length > 0) {
    cb(textArr[0]);
    delete textArr[0];

    setTimeout(() => {
      printText(textArr.join(''), time, cb);
    }, time);
  }
}
