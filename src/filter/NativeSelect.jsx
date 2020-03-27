import React, {
  useState,
  useRef,
} from 'react';
import classNames from 'classnames/bind';
import styles from './NativeSelect.module.scss';

const cx = classNames.bind(styles);

const NativeSelect = () => {
  const [currentValue, setCurrentValue] = useState('volvo');
  const refSelect = useRef();

  // need focus and blur events to style parent

  return (
    <div className={cx('outer')}>
      <div className={cx('frame')}>
        <div className={cx('display')}>
          {currentValue}
        </div>
        <div className={cx('arrow-icon')} />
      </div>
      <select ref={refSelect} value={currentValue} onChange={event => setCurrentValue(event.currentTarget.value)} className={cx('select')}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default NativeSelect;
