/* eslint-disable */
import React from 'react';
// import classNames from 'classnames';
// import classNamesBind from 'classnames/bind';
// import ThemeContext from 'terra-theme-context';
import IconBase from 'terra-icon/lib/IconBase';
// import styles from '../IconAbnormal.module.scss';

// const cx = classNamesBind.bind(styles);

const SelectedTabLeft = (customProps) => {
  // const attributes = Object.assign({}, customProps);
  // const theme = React.useContext(ThemeContext);
  // const iconClassNames = classNames(
  //   cx(
  //     'IconAbnormal',
  //     theme.className,
  //   ),
  //   customProps.className,
  // );

  return (
    <IconBase {...customProps}>
      <title>Group 3 Copy 30</title>
      <defs>
        <rect id="path-1" x="0" y="0" width="34" height="40"></rect>
        <path d="M17.5430141,0 L115.456986,0 C119.921789,2.73254256e-15 123.845649,2.95977314 125.072225,7.25278872 L133,35 L133,35 L0,35 L7.92777465,7.25278872 C9.15435053,2.95977314 13.0782105,-2.73254256e-15 17.5430141,0 Z" id="path-3"></path>
        <filter x="-5.6%" y="-21.4%" width="111.3%" height="142.9%" filterUnits="objectBoundingBox" id="filter-4">
          <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-3-Copy-30">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g id="Mask"></g>
          <g mask="url(#mask-2)" id="🚫tab-body-copy-10">
            <g transform="translate(8.000000, 5.000000)">
              <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
              <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-3" />
            </g>
          </g>
        </g>
      </g>
    </IconBase>
  );
};

SelectedTabLeft.displayName = "SelectedTabLeft";
SelectedTabLeft.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SelectedTabLeft;
/* eslint-enable */
