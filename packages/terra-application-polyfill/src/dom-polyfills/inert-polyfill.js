import './inertStyles.scss';

/**
 * Components within the framework utilize the inert property (https://html.spec.whatwg.org/multipage/interaction.html#inert)
 * to build accessible interactions with modal or otherwise disclosed content. Support for the inert property is not uniform
 * across the framework's supported browsers, so a polyfill is added on an as-need basis to ensure feature parity.
 */

// eslint-disable-next-line no-prototype-builtins
if (!Element.prototype.hasOwnProperty('inert')) {
  // We create a link whose presence indicates that the polyfill should not create
  // inline inert styles in the document. This prevents certain issues with strict CSP settings:
  // https://github.com/WICG/inert#strict-content-security-policy
  const inertStyleLink = document.createElement('link');
  inertStyleLink.id = 'inert-style';

  const styleLinkParent = document.head || document.body;
  styleLinkParent.appendChild(inertStyleLink);

  // eslint-disable-next-line global-require
  require('wicg-inert/dist/inert');
}
