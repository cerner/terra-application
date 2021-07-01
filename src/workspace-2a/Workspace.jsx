import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classNamesBind from "classnames/bind";
import ThemeContext from "terra-theme-context";
import IconSettings from "terra-icon/lib/icon/IconSettings";
import IconPanelRight from "terra-icon/lib/icon/IconPanelRight";
import Popup from "terra-popup";

import ActionMenu, {
  ActionMenuDivider,
  ActionMenuItem,
  ActionMenuGroup,
  ActionMenuRadio,
} from "../action-menu";
import { ApplicationIntlContext } from "../application-intl";
import usePortalManager, { getPortalElement } from "./shared/usePortalManager";
import WorkspaceButton from "./subcomponents/_WorkspaceButton";

import Tabs from "./subcomponents/_Tabs";

import styles from "./Workspace.module.scss";

const cx = classNamesBind.bind(styles);

const sizeOptionShape = PropTypes.shape({
  /**
   * The key associated to the given size.
   */
  key: PropTypes.string.isRequired,
  /**
   * The text display associated to the given size.
   */
  text: PropTypes.string.isRequired,
  /**
   * Whether or not the size option should be disabled.
   */
  isDisabled: PropTypes.bool,
});

const propTypes = {
  /**
   * The itemKey associated to the active WorkspaceItem.
   */
  activeItemKey: PropTypes.string.isRequired,
  /**
   * The size string value matching the active size option.
   */
  activeSize: PropTypes.string,
  /**
   * The child WorkspaceItems.
   */
  children: PropTypes.node.isRequired,
  /**
   * The unique identifier used for accessibility mappings.
   */
  id: PropTypes.string.isRequired,
  /**
   * Whether or not the face up dismiss button should be displayed.
   * Also requires the onRequestDismiss prop.
   */
  dismissButtonIsVisible: PropTypes.bool,
  /**
   * Whether or not the Workspace is being presented as an overlay and thus
   * should render with its overlay-specific styling.
   */
  isPresentedAsOverlay: PropTypes.bool,
  /**
   * The function callback triggering when a item is selected.
   * Returns the associated itemKey and metaData. e.g. onRequestActivate(itemKey, metaData)
   */
  onRequestActivate: PropTypes.func.isRequired,
  /**
   * The function callback triggering when the close toggle button is selected..
   * The presence of this callback indicates the visibility of the close toggle button.
   * Returns the event e.g. onRequestDismiss(event)
   */
  onRequestDismiss: PropTypes.func,
  /**
   * The function callback triggering when a size is selected from the size menu.
   * Returns the size key e.g. onRequestSizeChange(option.key)
   */
  onRequestSizeChange: PropTypes.func,
  /**
   * The array containing size objects to map in the size menu.
   */
  sizeOptions: PropTypes.arrayOf(sizeOptionShape),
};

const getTabId = (id, itemKey) => `${id}-${itemKey}`;

const getAssociatedPanelId = (id, itemKey) => `${getTabId(id, itemKey)}-panel`;

const createOptions = (options, size, onRequestSizeChange, onDismissMenu) =>
  options.map((option) => (
    <ActionMenuRadio
      key={option.key}
      actionKey={option.key}
      label={option.text}
      icon={option.icon}
      isChecked={option.key === size}
      isDisabled={option.isDisabled}
      onAction={() => {
        onDismissMenu();
        onRequestSizeChange(option.key);
      }}
    />
  ));

const Workspace = ({
  id,
  activeItemKey,
  activeSize,
  children,
  dismissButtonIsVisible,
  isPresentedAsOverlay,
  onRequestActivate,
  onRequestSizeChange,
  onRequestDismiss,
  sizeOptions,
  ...customProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = React.useContext(ThemeContext);
  const intl = React.useContext(ApplicationIntlContext);
  const sizeMenuRef = useRef();

  const [workspaceContainerRef, workspacePortalsRef] =
    usePortalManager(activeItemKey);

  const ariaLabel = intl.formatMessage({
    id: "terraApplication.workspace.workspaceLabel",
  });

  const tabData = React.Children.map(children, (child) => ({
    id: getTabId(id, child.props.itemKey),
    itemKey: child.props.itemKey,
    associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
    label: child.props.label,
    isSelected: child.props.itemKey === activeItemKey,
    onSelect: onRequestActivate,
    metaData: child.props.metaData,
  }));

  let dismissButton;
  if (dismissButtonIsVisible && onRequestDismiss) {
    dismissButton = (
      <WorkspaceButton
        ariaLabel={intl.formatMessage({
          id: "terraApplication.workspace.hideWorkspaceLabel",
        })}
        icon={<IconPanelRight />}
        onActivate={onRequestDismiss}
      />
    );
  }

  let sizeButton;
  if (sizeOptions || onRequestDismiss) {
    let dismissItem;
    let sizeItems;
    let dividerItem;

    if (sizeOptions && sizeOptions.length) {
      sizeItems = createOptions(
        sizeOptions,
        activeSize,
        onRequestSizeChange,
        () => {
          setIsMenuOpen(false);
        }
      );
    }

    if (onRequestDismiss) {
      dismissItem = (
        <ActionMenuItem
          actionKey="workspace-dismiss-action"
          label={intl.formatMessage({
            id: "terraApplication.workspace.hideWorkspaceLabel",
          })}
          onAction={() => {
            setIsMenuOpen(false);
            onRequestDismiss();
          }}
        />
      );
    }

    if (sizeOptions && dismissItem) {
      sizeItems = <ActionMenuGroup>{sizeItems}</ActionMenuGroup>;
      dividerItem = <ActionMenuDivider />;
    }

    sizeButton = (
      <>
        <WorkspaceButton
          ariaLabel={intl.formatMessage({
            id: "terraApplication.workspace.workspaceSettingsLabel",
          })}
          icon={<IconSettings />}
          onActivate={() => setIsMenuOpen(true)}
          refCallback={(node) => {
            sizeMenuRef.current = node;
          }}
          testId={`workspace-${id}-settings-button`}
        />
        <Popup
          isOpen={isMenuOpen}
          targetRef={() => sizeMenuRef.current}
          onRequestClose={() => {
            setIsMenuOpen(false);
          }}
          contentHeight="auto"
          contentWidth="auto"
          contentAttachment="top right"
          isContentFocusDisabled
          isHeaderDisabled
          popupContentRole="none"
        >
          <ActionMenu
            isHeaderDisplayed
            label={intl.formatMessage({
              id: "terraApplication.workspace.workspaceSettingsLabel",
            })}
            onRequestClose={() => {
              setIsMenuOpen(false);
            }}
          >
            {sizeItems}
            {dividerItem}
            {dismissItem}
          </ActionMenu>
        </Popup>
      </>
    );
  }

  const containerClassNames = classNames(
    cx(
      "workspace-container",
      { "is-overlay": isPresentedAsOverlay },
      theme.className
    ),
    customProps.className
  );

  const [newLabel, setNewLabel] = useState("Tabs Menu");
  const [newSpeed, setNewSpeed] = useState("0.1");
  const [shadowsDisplay, setShadowsDisplay] = useState({
    displayLeft: {
      display: "none",
    },
    displayRight: {
      display: "block",
    },
  });

  let smallMediumAdjustment = "",
    slideTabs = "",
    shadowDisplay = "";
  const tabsContainerRef = useRef(null);
  const [updatedStyles, setUpdatedStyles] = useState({
    newMarginRight: {
      marginRight: "128px",
    },
    newRightStyle: { right: "127px" },
  });

  if (activeSize === "small" || activeSize === "medium") {
    smallMediumAdjustment = "smallMediumStyles";
    slideTabs = "slidingTabsStyles";
  } else if (activeSize === "large") {
    shadowDisplay = "shadowDisplay";
  }

  const tabTranslateSlide = (tabRef, translateX) => {
    tabRef.parentNode.style.transform = `translate(${translateX}px, 0)`;
  };

  const tabSlideSmallSize = (tabSlideRef, tabId) => {
    switch (tabId) {
      case "Apples":
        tabTranslateSlide(tabSlideRef, 0);
        break;
      case "Oranges":
        tabTranslateSlide(tabSlideRef, 0);
        break;
      case "Strawberries":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "block",
          },
        });
        tabTranslateSlide(tabSlideRef, -36);
        break;
      case "Pineapples":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "block",
          },
        });
        tabTranslateSlide(tabSlideRef, -112);
        break;
      case "Lemons":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "block",
          },
        });
        tabTranslateSlide(tabSlideRef, -188);
        break;
      case "Kiwis":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "none",
          },
        });
        tabTranslateSlide(tabSlideRef, -263);
        break;
      default:
        tabTranslateSlide(tabSlideRef, 0);
    }
  };

  const tabSlideMedSize = (tabSlideRef, tabId) => {
    switch (tabId) {
      case "Apples":
        tabTranslateSlide(tabSlideRef, 0);
        break;
      case "Oranges":
        tabTranslateSlide(tabSlideRef, 0);
        break;
      case "Lemons":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "block",
          },
        });
        tabTranslateSlide(tabSlideRef, -58);
        break;
      case "Kiwis":
        setShadowsDisplay({
          displayLeft: {
            display: "block",
          },
          displayRight: {
            display: "none",
          },
        });
        tabTranslateSlide(tabSlideRef, -135);
        break;
      default:
        tabTranslateSlide(tabSlideRef, 0);
    }
  };

  const mainContainer = tabsContainerRef.current;

  const tabSlide = (tabRef, tabType) => {
    let tabSlideRef = {};

    if (mainContainer && activeSize !== "large") {
      if (tabType === "hiddenTab") {
        mainContainer.children[3].children.forEach((elem) => {
          if (elem.title === tabRef.title) {
            tabSlideRef = elem;
          }
        });
      } else {
        tabSlideRef = tabRef;
      }
      const tabId = tabSlideRef.title;

      const containerLeft = mainContainer.getBoundingClientRect().left;
      const menuLeft = mainContainer.children[1].getBoundingClientRect().left;
      const currentTabLeft = tabSlideRef.getBoundingClientRect().left;
      const currentTabRight = tabSlideRef.getBoundingClientRect().right;

      if (activeSize === "small") {
        if (currentTabLeft < containerLeft) {
          setShadowsDisplay({
            displayLeft: {
              display: "none",
            },
            displayRight: {
              display: "block",
            },
          });
          tabSlideSmallSize(tabSlideRef, tabId);
        } else if (currentTabRight > menuLeft) {
          tabSlideSmallSize(tabSlideRef, tabId);
        }
      } else if (activeSize === "medium") {
        if (currentTabLeft < containerLeft) {
          setShadowsDisplay({
            displayLeft: {
              display: "none",
            },
            displayRight: {
              display: "block",
            },
          });
          tabSlideMedSize(tabSlideRef, tabId);
        } else if (currentTabRight > menuLeft) {
          tabSlideMedSize(tabSlideRef, tabId);
        }
      }
    }
  };

  const resizeMask = (key) => {
    let currentMenuWidth =
      mainContainer.children[1].getBoundingClientRect().width + 18;
    let currentRight = currentMenuWidth;

    if (key !== "Backspace" && key !== "Delete") {
      currentMenuWidth += 1;
      currentRight = currentMenuWidth - 1;
    }

    setUpdatedStyles({
      newMarginRight: {
        marginRight: currentMenuWidth,
      },
      newRightStyle: {
        right: `${currentRight}px`,
      },
    });
  };

  const resetValues = () => {
    setNewLabel("Tabs Menu");
    setNewSpeed("0.1");
    setUpdatedStyles({
      newMarginRight: {
        marginRight: "128px",
      },
      newRightStyle: { right: "127px" },
    });
  };

  const shadowRightStyles = {
    ...shadowsDisplay.displayRight,
    ...updatedStyles.newRightStyle,
  };

  return (
    <div {...customProps} id={id} className={containerClassNames} role="none">
      <div className={cx("workspace")} role="none">
        <div className={cx("textLegend")}>
          <h1 tabIndex={0}>Option 2 A</h1>
          <p aria-hidden>Only Tabs are keyboard accesible</p>
          <div className={cx("btnsContainer", shadowDisplay)}>
            <div className={cx("inputMenuName")}>
              <label htmlFor="labelTitleName">Menu name</label>
              <input
                tabIndex={-1}
                type="text"
                value={newLabel}
                id="labelTitleName"
                onKeyUp={(e) => {
                  resizeMask(e.key);
                }}
                onChange={(e) => {
                  setNewLabel(e.target.value);
                }}
              />
            </div>
            <div className={cx("inputMenuSpeed")}>
              <label htmlFor="labelTitleSpeed">A. Speed</label>
              <input
                tabIndex={-1}
                type="number"
                value={newSpeed}
                id="labelTitleSpeed"
                onChange={(e) => {
                  setNewSpeed(e.target.value);
                }}
              />
            </div>
            <div className={cx("buttonReset")}>
              <button tabIndex={-1} onClick={resetValues}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div role="none" className={cx("button-header")}>
          {sizeButton}
        </div>
        <div
          role="none"
          className={cx(
            "tab-header",
            {
              "has-dismiss-button": onRequestDismiss && dismissButtonIsVisible,
            },
            "slider-items-container",
            smallMediumAdjustment
          )}
          ref={tabsContainerRef}
          style={updatedStyles.newMarginRight}
        >
          <div
            className={cx("shadowsContainerLeft", shadowDisplay)}
            style={shadowsDisplay.displayLeft}
          >
            <img
              className={cx("imgShadows")}
              src="https://amikoosvet.com/images/provi/left_shadow.png"
            />
          </div>
          <Tabs
            ariaLabel={ariaLabel}
            tabData={tabData}
            label={newLabel}
            slideTabs={slideTabs}
            newSpeedAnimation={newSpeed}
            tabSlide={tabSlide}
            activeSize={activeSize}
          />
          {activeSize === "large" || (
            <div
              className={cx("shadowsContainerRight", shadowDisplay)}
              style={shadowRightStyles}
            >
              <img
                className={cx("imgShadows")}
                src="https://amikoosvet.com/images/provi/right_shadow.png"
              />
            </div>
          )}
        </div>
        <div role="none" className={cx("body")} ref={workspaceContainerRef}>
          {React.Children.map(children, (child) => {
            let portalElement =
              workspacePortalsRef.current[child.props.itemKey]?.element;
            if (!portalElement) {
              portalElement = getPortalElement();
              portalElement.setAttribute("role", "none");

              workspacePortalsRef.current[child.props.itemKey] = {
                element: portalElement,
              };
            }

            return React.cloneElement(child, {
              key: child.props.itemKey,
              id: getTabId(id, child.props.itemKey),
              associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
              isActive: child.props.itemKey === activeItemKey,
              portalElement,
            });
          })}
        </div>
      </div>
    </div>
  );
};

Workspace.propTypes = propTypes;

export default Workspace;
