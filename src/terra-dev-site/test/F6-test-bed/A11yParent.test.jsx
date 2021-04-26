import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import A11yContainer from './A11yContainer.test';
import styles from './A11yParentTest.module.scss';

const cx = classNames.bind(styles);

const AllyParentTest = () => {
  const regionRefs = React.useRef({});
  const lastActiveRegionKey = React.useRef('fake-root');

  const onRootFocus = e => { console.log('focus root'); onFocus(e, 'fake-root'); };

  const onRootKeyDown = e => onKeyDown(e);

  useEffect(() => {
    document.addEventListener('focus', onRootFocus);
    document.addEventListener('keydown', onRootKeyDown);
    onRefUpdate(document.body, 'fake-root');
    document.body.tabIndex = "-1";

    return () => {
      document.removeEventListener('focus', onRootFocus);
      document.removeEventListener('keydown', onRootKeyDown);
      delete regionRefs.current['fake-root'];
      document.body.tabIndex = "";
    };
  }, []);

  const onRefUpdate = (ref, key) => {
    if (!regionRefs.current) {
      regionRefs.current = {};
    }
    if (ref !== undefined && ref !== null) {
      regionRefs.current[key] = { ref, activeChildRef: undefined };
    } else {
      delete regionRefs.current[key];
    }
  };

  // DOM traversal or context registration?
  const getNextRegionKey = (key) => {
    let regionKey;
    switch(key) {
      case 'fake-root':
        regionKey =  'unique-0';
        break;
      case 'unique-0':
        regionKey =  'unique-1';
        break;
      case 'unique-1':
        regionKey =  'unique-2';
        break;
      case 'unique-2':
        regionKey =  'unique-3';
        break;
      default:
        regionKey =  'fake-root';
        break;
    };
    // return regionRefs.current[regionKey];
    return regionKey;
  };

  // DOM traversal or context registration?
  const getPreviousRegionKey = (key) => {
    let regionKey;
    switch(key) {
      case 'unique-1':
        regionKey =  'unique-0';
        break;
      case 'unique-2':
        regionKey =  'unique-1';
        break;
      case 'unique-3':
        regionKey =  'unique-2';
        break;
      case 'fake-root':
        regionKey =  'unique-3';
        break;
      default:
        regionKey =  'fake-root';
        break;
    };
    // return regionRefs.current[regionKey];
    return regionKey;
  };

  const focusRegionKey = (regionKey) => {
    const region = regionRefs.current[regionKey];
    const focusElement = region.activeChildRef ? region.activeChildRef : region.ref;
    // may need style difference if "isRegion"
    focusElement.focus();
    
  };

  const isRegion = element => {
    if (document.documentElement === element || document.body === element) {
      return true;
    }

    let regionFound = false;
    const regionArray = Object.keys(regionRefs.current);
    for (let i = 0; i < regionArray.length; i += 1) {
      const region = regionRefs.current[regionArray[i]];
      if (element === region) {
        regionFound = true;
        break;
      }
    }
    return regionFound;
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 117) {
    // if (event.nativeEvent.keyCode === 117) {
      event.preventDefault();
      event.stopPropagation();

      const currentActiveNode = document.activeElement;
      const currentRegion = regionRefs.current[lastActiveRegionKey.current];
      if (!isRegion(currentActiveNode) && currentRegion.ref.contains(currentActiveNode)) {
        currentRegion.activeChildRef = currentActiveNode;
      } else {
        currentRegion.activeChildRef = undefined;
      }

      let regionKey;
      if (event.shiftKey) {
        regionKey = getPreviousRegionKey(lastActiveRegionKey.current);
      } else {
        regionKey = getNextRegionKey(lastActiveRegionKey.current);
      }
      lastActiveRegionKey.current = regionKey;

      focusRegionKey(regionKey);
    }
  };

  const onFocus = (event, key) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(`focus that bad boy: ${key}`);

    // determine original source
    lastActiveRegionKey.current = key;
  };

  return (
    <div
      className={cx('parent')}
      // ref={ref => onRefUpdate(ref, 'fake-root')}
      // onFocus={e => onFocus(e, 'fake-root')}
      // onBlurCapture={onBlur}
      // onKeyDownCapture={onKeyDown}
      aria-label="web view"
      // role="landmark"
      // tabIndex="-1"
      // id="fake-root"
    >
      <div className={cx('header', 'nav')}>
        <button id="root-button" role="button">Button Root 1</button>
      </div>
      <div className={cx('fill')}>
        <div className={cx('header')}>
          <A11yContainer onFocus={onFocus} id="unique-0" index={0} refCallback={onRefUpdate} label="First Container" />
        </div>
        <div className={cx('fill', 'sub')}>
          <div className={cx('start')}>
            <A11yContainer onFocus={onFocus} id="unique-1" index={1} refCallback={onRefUpdate} label="Second Container" />
          </div>
          <div className={cx('middle')}>
            <A11yContainer onFocus={onFocus} id="unique-2" index={2} refCallback={onRefUpdate} label="Third Container" />
          </div>
          <div className={cx('end')}>
            <A11yContainer onFocus={onFocus} id="unique-3" index={3} refCallback={onRefUpdate} label="Fourth Container" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllyParentTest;
