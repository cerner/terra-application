import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import ThemeContext from "terra-theme-context";
import IconCheckmark from "terra-icon/lib/icon/IconCheckmark";
import { KEY_SPACE, KEY_RETURN } from "keycode-js";
import {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
} from "./_TabUtils";

import styles from "./HiddenTab.module.scss";

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * Identifer for the Tab to be returned with onSelect.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Callback function triggering on selection. onSelect(itemKey, metaData)
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * @private
   * The function callback when an event occurs.
   */
  onBlur: PropTypes.func.isRequired,
  /**
   * @private
   * The function callback when an event occurs.
   */
  onFocus: PropTypes.func.isRequired,
};

const defaultProps = {
  isSelected: false,
};

const HiddenTab = ({
  id,
  associatedPanelId,
  index,
  isSelected,
  label,
  itemKey,
  metaData,
  onBlur,
  onFocus,
  onSelect,
  tabIds,
  jumpToActiveTab,
}) => {
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const tabRef = useRef(null);
  const hiddenClassNames = cx(
    "hidden",
    { "is-active": isSelected },
    theme.className
  );

  const handleOnSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();

    enableFocusStyles(event);
    onSelect(itemKey, metaData);
  };

  const onKeyDown = (event) => {
    if (
      event.nativeEvent.keyCode === KEY_RETURN ||
      event.nativeEvent.keyCode === KEY_SPACE
    ) {
      handleOnSelect(event);
    } else {
      handleArrows(event, index, tabIds);
    }
  };

  attributes.onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleOnSelect(e);
    jumpToActiveTab(tabRef);
  };

  return (
    <div
      {...attributes}
      id={id}
      role="none"
      className={hiddenClassNames}
      ref={tabRef}
    >
      <div className={cx("checkbox")}>
        {isSelected ? <IconCheckmark /> : null}
      </div>
      <div className={cx("label")}>{label}</div>
    </div>
  );
};

HiddenTab.propTypes = propTypes;
HiddenTab.defaultProps = defaultProps;

export default HiddenTab;
