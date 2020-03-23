import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import BannerRegistrationContext from './_BannerRegistrationContext';
import { BANNER_TYPES } from './_Utils';

const propTypes = {
  /**
   * An action element to be added to the action section of the banner.
   */
  action: PropTypes.element,
  /**
   * Nodes providing the message content for the banner. Can contain text and HTML.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause
   * the Dismiss button to be included on the banner.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the banner which will be bolded. Providing a title will override the default title.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `info`, `success` or `custom`.
   */
  type: PropTypes.oneOf([
    BANNER_TYPES.ALERT,
    BANNER_TYPES.ERROR,
    BANNER_TYPES.WARNING,
    BANNER_TYPES.INFO,
    BANNER_TYPES.SUCCESS,
    BANNER_TYPES.CUSTOM,
  ]).isRequired,
};

const Banner = (props) => {
  /**
   * A unique identifier is generated for each Banner during construction. This will be used to
   * uniquely register/unregister the banner with ancestor Banner Managers without requiring consumers to
   * define unique identifiers themselves.
   */
  const uuid = React.useRef(uuidv4());
  const bannerRegistration = React.useContext(BannerRegistrationContext);

  React.useEffect(() => {
    /**
     * If the bannerRegistration value is the ProviderRegistrationContext's default value,
     * then there is not a matching BannerCheckpoint above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (!bannerRegistration && process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('A Banner was not rendered within the context of a BannerCheckpoint. If this is unexpected, validate that the expected version of the terra-application package is installed.');
      /* eslint-enable no-console */
    }

    bannerRegistration.registerBanner(uuid.current, props);

    return () => {
      bannerRegistration.unregisterBanner(uuid.current, props.type);
    };
  }, [props]);

  return null;
};

Banner.propTypes = propTypes;

export default Banner;
