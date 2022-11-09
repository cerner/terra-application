import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Avatar, { Generic } from 'terra-avatar';
import ThemeContext from 'terra-theme-context';
import Button from 'terra-button';

import { userConfigPropType, userActionConfigPropType } from '../utils/propTypes';

import styles from './PopupMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  An id for the user action button
   */
  id: PropTypes.string,
  /**
   * A configuration object to render an action button for user Config.
   */
  userActionConfig: userActionConfigPropType,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType.isRequired,
};

const PopupMenuUser = ({ userConfig, userActionConfig, id }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('utility-user-layout', theme.className)}>
      <div className={cx('avatar-container')}>
        <div className={cx('avatar-outline')} />
        {
      (userConfig.initials || userConfig.imageSrc)
        ? <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials || userConfig.name} size="1.174rem" isAriaHidden />
        : <Generic alt={userConfig.name} size="1.174rem" isAriaHidden />
      }
      </div>
      <div className={cx('info-container')}>
        <div aria-hidden className={cx('name')}>{userConfig.name}</div>
        {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
        { userActionConfig && (
          <Button
            id={id || undefined}
            text={userActionConfig.text}
            onClick={userActionConfig.userActionCallback}
            data-navigation-popupmenu-item-user-action
            className={cx('action-button')}
            variant="ghost"
            isCompact
          />
        )}
      </div>
    </div>
  );
};

PopupMenuUser.propTypes = propTypes;

export default PopupMenuUser;
