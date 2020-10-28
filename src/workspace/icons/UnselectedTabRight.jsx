/* eslint-disable */
import React from 'react';
// import classNames from 'classnames';
// import classNamesBind from 'classnames/bind';
// import ThemeContext from 'terra-theme-context';
import IconBase from 'terra-icon/lib/IconBase';
// import styles from '../IconAbnormal.module.scss';

// const cx = classNamesBind.bind(styles);

const UnselectedTabRight = (customProps) => {
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
      <title>Group Copy 30</title>
      <defs>
        <rect id="path-1" x="0" y="0" width="34" height="40"></rect>
        <path d="M17.4187513,0 L40.5812487,0 C44.9870583,2.74337958e-15 48.8737754,2.88345872 50.1514927,7.09992605 L58,33 L58,33 L0,33 L7.84850726,7.09992605 C9.12622463,2.88345872 13.0129417,4.36204778e-15 17.4187513,0 Z" id="path-3"></path>
        <filter x="-12.9%" y="-22.7%" width="125.9%" height="145.5%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-Copy-30" transform="translate(17.000000, 20.000000) scale(-1, 1) translate(-17.000000, -20.000000) ">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g id="Mask"></g>
          <g id="Group-Copy-28" mask="url(#mask-2)">
            <g transform="translate(8.000000, 7.000000)" id="tab-body-copy-12">
                <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                <path strokeOpacity="0.3" stroke="#979797" strokeWidth="1" d="M40.5812487,0.5 C42.6740083,0.5 44.6434833,1.18482145 46.2414975,2.37034839 C47.8395116,3.55587533 49.0660648,5.24210777 49.6729805,7.24492974 L49.6729805,7.24492974 L57.3260321,32.5 L0.673967868,32.5 L8.32701946,7.24492974 C8.93393521,5.24210777 10.1604884,3.55587533 11.7585025,2.37034839 C13.3565167,1.18482145 15.3259917,0.5 17.4187513,0.5 L17.4187513,0.5 Z" strokeLinejoin="square" fill="#E8E9E9" fillRule="evenodd"></path>
            </g>
          </g>
        </g>
      </g>
    </IconBase>
  );
};

UnselectedTabRight.displayName = "UnselectedTabRight";
UnselectedTabRight.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default UnselectedTabRight;
/* eslint-enable */
