import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Avatar, { Generic } from 'terra-avatar';
import ThemeContext from 'terra-theme-context';
import { userConfigPropType } from '../utils/propTypes';

import styles from './DrawerMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType.isRequired,
  /**
   * Size variant of the user. One of values [`small`, `large`].
   */
  variant: PropTypes.oneOf(['small', 'large']),
};

const defaultProps = {
  variant: 'small',
};

const DrawerMenuUser = ({ userConfig, variant }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx(variant === 'small' ? 'small-user-layout' : 'large-user-layout', theme.className)}>
      <div className={cx('avatar-container')}>
        <div className={cx('avatar-outline')} />
        <div className={cx('avatar-inner')}>
          {
        (userConfig.initials || userConfig.imageSrc)
          ? <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials || userConfig.name} isAriaHidden />
          : <Generic alt={userConfig.name} isAriaHidden />
        }
        </div>
      </div>
      <div className={cx('info-container')}>
        <div aria-hidden className={cx('name')}>{userConfig.name}</div>
        {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
      </div>
    </div>
  );
};

DrawerMenuUser.propTypes = propTypes;
DrawerMenuUser.defaultProps = defaultProps;

export default DrawerMenuUser;
