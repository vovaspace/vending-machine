export default function render(
  showcaseEl, controlPanelEl, moneyForm, choiceForm, output, preloader, productList
) {
  return new Promise((resolve) => {
    moneyForm.render();
    choiceForm.render();
    output.render();
    preloader.delete();
    productList.render(showcaseEl);
    resolve();
  });
}
