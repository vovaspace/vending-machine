export default function laod(preloader) {
  return new Promise(async (resolve) => {
    preloader.setProgress(20);

    await new Promise((r) => {
      setTimeout(() => {
        preloader.setProgress(40);
        r();
      }, 600);
    });

    // Fonts load spechialy font by font.
    const monacoFont = new FontFace('Monaco', 'url(/fonts/Monaco.woff)');
    await monacoFont.load();
    document.fonts.add(monacoFont);
    preloader.setProgress(60);

    const ptSansFont = new FontFace('PT Sans', 'url(/fonts/PTSans-Regular.woff)');
    await ptSansFont.load();
    document.fonts.add(ptSansFont);
    preloader.setProgress(80);

    await new Promise((r) => {
      setTimeout(() => {
        preloader.setProgress(100);
        r();
      }, 600);
    });

    resolve();
  });
}
