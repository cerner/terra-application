import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import BannerRegistrationContext from './private/BannerRegistrationContext';

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
   * The variant of notification banner to be rendered. This renders the banner with the corresponding header and icon to the
   * variant concept.
   * Use one of `hazard-high`, `hazard-medium`, `hazard-low`, `error`, `unsatisfied`, or `unverified`, or `custom`.
   */
  variant: PropTypes.oneOf([
    'hazard-high',
    'hazard-medium',
    'hazard-low',
    'error',
    'unsatisfied',
    'unverified',
    'custom',
  ]).isRequired,
  /**
   * The pieces to populate a banner when `variant="custom"`.
   */
  custom: PropTypes.shape({
    /**
     * The keyword used to represent & emphasis the intention of banner description that is being shown to the user.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the banner.
     */
    iconClassName: PropTypes.string,
  }),
};

const NotificationBanner = ({
  bannerAction, custom, description, onRequestClose, variant,
}) => {
  /**
   * A unique identifier is generated for each Banner during construction. This will be used to
   * uniquely register/unregister the banner with ancestor Banner Managers without requiring consumers to
   * define unique identifiers themselves.
   */
  const bannerRegistration = React.useContext(BannerRegistrationContext);

  React.useEffect(() => {
    const uuid = uuidv4();

    /**
     * If the bannerRegistration value is the ProviderRegistrationContext's default value,
     * then there is not a matching BannerProvider above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (!bannerRegistration) {
      throw new Error('A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.');
    }

    if (bannerRegistration && bannerRegistration.registerNotificationBanner) {
      bannerRegistration.registerNotificationBanner(uuid, {
        bannerAction,
        custom,
        description,
        key: uuid,
        onRequestClose,
        variant,
      });
    }

    return () => {
      if (bannerRegistration && bannerRegistration.unregisterNotificationBanner) {
        bannerRegistration.unregisterNotificationBanner(uuid, variant);
      }
    };
  }, [bannerRegistration, description, custom, bannerAction, onRequestClose, variant]);

  return null;
};

NotificationBanner.propTypes = propTypes;

export default NotificationBanner;
