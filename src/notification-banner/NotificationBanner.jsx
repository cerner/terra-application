import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import BannerRegistrationContext from './private/BannerRegistrationContext';
import { BANNER_TYPES } from './private/utils';

const propTypes = {
  /**
   * The text and corresponding callback to populate the action button of the banner.
   */
  bannerAction: PropTypes.shape({
    /**
     * The text to display in the banner button.
     */
    text: PropTypes.string,
    /**
     * The Callback function triggered when the action button is clicked. No parameters are passed.
     */
    onClick: PropTypes.func,
  }),
  /**
   * The message content to display in the banner.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when the dismiss button is clicked. The presence of this prop will cause
   * the dismiss button to be included on the banner. No parameters are passed.
   */
  onRequestClose: PropTypes.func,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified` or `advisory`.
   */
  type: PropTypes.oneOf([
    BANNER_TYPES.ALERT,
    BANNER_TYPES.ERROR,
    BANNER_TYPES.WARNING,
    BANNER_TYPES.UNSATISFIED,
    BANNER_TYPES.UNVERIFIED,
    BANNER_TYPES.ADVISORY,
  ]).isRequired,
};

const NotificationBanner = ({
  bannerAction, description, onRequestClose, type,
}) => {
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
     * then there is not a matching BannerProvider above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (!bannerRegistration && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.');
    }

    if (bannerRegistration && bannerRegistration.registerNotificationBanner) {
      bannerRegistration.registerNotificationBanner(uuid.current, {
        bannerAction,
        description,
        key: uuid.current,
        onRequestClose,
        type,
      });
    }
  }, [bannerRegistration, description, bannerAction, onRequestClose, type]);

  React.useEffect(() => () => {
    if (bannerRegistration && bannerRegistration.unregisterNotificationBanner) {
      bannerRegistration.unregisterNotificationBanner(uuid.current, type);
    }
  }, [bannerRegistration, type]);

  return null;
};

NotificationBanner.propTypes = propTypes;

export default NotificationBanner;
