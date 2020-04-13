/* TODO Import this helper from terra-toolkit - https://github.com/cerner/terra-toolkit/issues/397 */
const dispatchCustomEvent = (name, metaData) => {
  /*If IE support is removed, convert below to use event constructors. */
  browser.execute((eventName, eventMetaData) => {
    const event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
    event.metaData = eventMetaData;
    window.dispatchEvent(event);
  }, name, metaData);
};

Terra.describeViewports('FullStackTestOverrides', ['small'], () => {
  before(() => browser.url('/raw/tests/terra-application/application-base/full-stack-test-overrides-test'));

  it('updates the locale of ApplicationBase via custom event', () => {
    dispatchCustomEvent('[full-stack]override', { locale: 'pt' });
    browser.waitForVisible('#full-stack-test-example')
    Terra.validates.screenshot('#full-stack-test-example')
  });
});
