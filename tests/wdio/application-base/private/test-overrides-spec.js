/* TODO Import this helper from terra-toolkit - https://github.com/cerner/terra-toolkit-boneyard/issues/397 */
const dispatchCustomEvent = (name, metaData) => {
  /* If IE support is removed, convert below to use event constructors. */
  browser.execute((eventName, eventMetaData) => {
    const event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
    event.metaData = eventMetaData;
    window.dispatchEvent(event);
  }, name, metaData);
};

Terra.describeViewports('TestOverrides', ['small'], () => {
  before(() => browser.url('/raw/tests/terra-application/application-base/private/test-overrides-test'));
  it('updates the locale of ApplicationBase from `en` to `pt` via custom event', () => {
    dispatchCustomEvent('applicationBase.testOverride', { locale: 'pt' });
    Terra.validates.element({ selector: '#root' });
  });
});
