import React from "react";
import classNames from "classnames/bind";
import TabContentTemplate from "./TabContentTemplate";
// @ts-ignore
import styles from "./TestStyles.module.scss";

const cx = classNames.bind(styles);

const MockContent = ({ tab }) => {
  const tabContent = TabContentTemplate[tab];
  return (
    <div className={cx("content-container")} dangerouslySetInnerHTML={{__html: tabContent}}></div>
  );
};

export default MockContent;
