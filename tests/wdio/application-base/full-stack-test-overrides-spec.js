/* TODO Import this helper from terra-toolkit - https://github.com/cerner/terra-toolkit/issues/397 */
const dispatchCustomEvent = (name, metaData) => {
  browser.execute((eventName, eventMetaData) => {
    const event = new CustomEvent(eventName, { detail: eventMetaData });
    window.dispatchEvent(event);
  }, name, metaData);
};

Terra.describeViewports('FullStackTestOverrides', ['medium'], () => {
  before(() => browser.url('/raw/tests/terra-application/application-base/full-stack-test-overrides-test'));

  it('updates the locale of ApplicationBase via custom event', () => {
    dispatchCustomEvent('[full-stack]override', { locale: 'pt' });
    const locale = $('full-stack-test-example').getText();
    expect(locale).to.equal('pt');
  });
});
