export default function prerender(
  showcaseEl, controlPanelEl, moneyForm, choiceForm, output, preloader
) {
  return new Promise((resolve) => {
    const preloaderEl = preloader.render();
    preloaderEl.classList.add('page__preloader');
    showcaseEl.appendChild(preloaderEl);
    controlPanelEl.appendChild(moneyForm.prerender());
    controlPanelEl.appendChild(choiceForm.prerender());
    controlPanelEl.appendChild(output.prerender());
    resolve();
  });
}
