const disableCSSAnimations = (browser) => {
  browser.execute(`
    var animationOverride = document.createElement('style');
    animationOverride.appendChild(document.createTextNode('body * { animation: none !important; }'));
    document.head.appendChild(animationOverride);
  `);
};

export default disableCSSAnimations;
