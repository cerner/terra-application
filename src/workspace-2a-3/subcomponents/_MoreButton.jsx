import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import ThemeContext from "terra-theme-context";
import IconCaretDown from "terra-icon/lib/icon/IconCaretDown";
import { handleMoreButtonArrows } from "./_TabUtils";

import styles from "./Tab.module.scss";

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The index of the first hidden item in the dropdown.
   */
  hiddenIndex: PropTypes.number.isRequired,
  /**
   * Whether or not the an active item is present.
   */
  isActive: PropTypes.bool,
  /**
   * Whether or not the associated dropdown is open.
   */
  isOpen: PropTypes.bool,
  /**
   * Blur callback function.
   */
  onBlur: PropTypes.func,
  /**
   * Selection callback function.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The z-index style to apply to the button based upon order and state.
   */
  zIndex: PropTypes.number,
};

const setFocus = (event) => {
  event.currentTarget.setAttribute("tabindex", "-1");
  event.currentTarget.focus();
};

const removeFocus = (event) => {
  event.currentTarget.removeAttribute("tabindex");
};

const MoreButton = ({
  hiddenIndex,
  isActive,
  isOpen,
  onBlur,
  onSelect,
  refCallback,
  tabIds,
  zIndex,
  label,
  activeSize,
}) => {
  const theme = React.useContext(ThemeContext);

  const handleOnKeyDown = (event) =>
    handleMoreButtonArrows(event, hiddenIndex, tabIds);

  const handleOnMouseDown = (event) => setFocus(event);

  const handleOnSelect = (event) => {
    setFocus(event);
    if (onSelect) {
      onSelect(event);
    }
  };

  const handleOnBlur = (event) => {
    removeFocus(event);
    if (onBlur) {
      onBlur(event);
    }
  };

  /* eslint-disable react/forbid-dom-props */

  let classSizes = "";

  if (activeSize === "small" || activeSize === "medium") {
    classSizes = "dropdownSmMdButton";
  }

  return (
    <div
      ref={refCallback}
      onClick={handleOnSelect}
      onKeyDown={handleOnKeyDown}
      onBlur={handleOnBlur}
      onMouseDown={handleOnMouseDown}
      className={cx(
        "tab-menu",
        "tab-dropdown-button",
        classSizes,
        theme.className
      )}
      style={{ zIndex: isOpen && "0" }}
      data-testid="workspace-tabs-more-button"
    >
      <div className={cx("inner")}>
        <div className={cx("icon", "tab-dropdown-button-inner")}>
          {label} <IconCaretDown />
        </div>
      </div>
    </div>
  );
  /* eslint-disable react/forbid-dom-props */
};

MoreButton.propTypes = propTypes;

export default MoreButton;
