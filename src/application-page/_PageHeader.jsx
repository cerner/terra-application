import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageHeader = ({
  actions, onSelectAction, onBack, title,
}) => (
  <div className={cx('page-layout-header')}>
    {onBack ? (
      <div className={cx('back-button-container')}>
        <Button
          className={cx(['header-button', 'back-button'])}
          isIconOnly
          icon={<span className={cx('back')} />}
          text="Back"
          onClick={onBack}
          variant={ButtonVariants.UTILITY}
        />
      </div>
    ) : null}
    <div className={cx('title-container')}>
      {title}
    </div>
    <div className={cx('actions-container')}>
      {actions && actions.map((action) => (
        <Button
          key={action.key}
          className={cx(['header-button'])}
          isIconOnly
          icon={action.icon}
          text={action.text}
          variant={ButtonVariants.UTILITY}
          onClick={(event) => { event.preventDefault(); action.onSelect(); }}
          isDisabled={action.isDisabled}
        />
      ))}
    </div>

  </div>
);

PageHeader.propTypes = propTypes;

export default PageHeader;
