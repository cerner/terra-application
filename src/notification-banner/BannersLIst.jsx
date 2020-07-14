import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';

/**
 * The Banner Checkpoint manages prioritizing and displaying all Workflow Banners
 * rendered within the Checkpoint Context in a list above all other content in the tree.
 */

const NotificationBannerList = ({ banners }) => {
  // const bannerRegistration = React.useContext(BannerRegistrationContext);

  // const { registeredBanners: banners } = bannerRegistration;
  if (!banners.length) {
    return null;
  }

  return (
    <>
      {banners.map((bannerProps) => {
        const {
          description, type, bannerAction, onRequestDismiss, key,
        } = bannerProps;

        let actionButton = null;
        if (bannerAction) {
          actionButton = <Button text={bannerAction.text} variant="ghost" onClick={bannerAction.onClick} />;
        }

        return (
          <Alert
            key={key}
            action={actionButton}
            onDismiss={onRequestDismiss}
            type={type}
            data-terra-application-notification-banner={type}
          >
            {description}
          </Alert>
        );
      })}
    </>
  );
};

export default NotificationBannerList;
