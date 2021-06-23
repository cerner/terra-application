import React from "react";
import classNames from "classnames/bind";
import TabContentTemplate from "./TabContentTemplate";
// @ts-ignore
import styles from "./TestStyles.module.scss";

const cx = classNames.bind(styles);

const MockContent = ({ fruit = "" }) => {
  const fruitText = TabContentTemplate[fruit];
  return (
    <>
      <div className={cx("content-container")}>
        {fruitText.map((elem) => {
          return <p>{elem.props.children}</p>;
        })}
      </div>
    </>
  );
};

export default MockContent;
