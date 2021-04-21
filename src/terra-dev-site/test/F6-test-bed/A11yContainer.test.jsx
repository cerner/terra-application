// reuse context, 3 buttons, 
import React from 'react';
import classNames from 'classnames/bind';
import styles from './A11yContainerTest.module.scss';

const cx = classNames.bind(styles);

const A11yContainerTest = ({ label, refCallback, id, index, onFocus }) => {
  return (
    <div
      id={id}
      className={cx('container')}
      aria-label={label}
      role="landmark"
      data-application-landmark={index}
      tabIndex="-1"
      ref={ref => refCallback(ref, id)}
      onFocusCapture={e => onFocus(e, id)}
    >
      <p>{`Container ${index}`}</p>
      <button id={`button-${id}-1`} role="button">{`Button ${index} 1`}</button>
      <button id={`button-${id}-2`} role="button">{`Button ${index} 2`}</button>
      <button id={`button-${id}-3`} role="button">{`Button ${index} 3`}</button>
    </div>
  );
};

export default A11yContainerTest;
