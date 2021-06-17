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
  extraConfig,
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

  let newResizeClass = "",
    sliderMainClass = "",
    sliderItemsClass = "";

  let slideRef = useRef(null);
  let slideMainRef = useRef(null);

  if (activeSize === "small") {
    newResizeClass = "small-adjustment-css";
    sliderMainClass = "slider-main-container-sm";
    sliderItemsClass = "slider-items-container";
  } else if (activeSize === "medium") {
    newResizeClass = "small-adjustment-css";
    sliderMainClass = "slider-main-container-md";
    sliderItemsClass = "slider-items-container";
  } else if (activeSize === "large") {
    newResizeClass = "";
    sliderMainClass = "slider-main-container-lg";
    sliderItemsClass = "";
  }

  const jumpToActiveTab = (tabRefVal) => {
    let activeTabFromMenu, lastTabActive;
    let activeTabPosLeft = 0,
      slideMainPosLeft = 0,
      activeTabPosRight = 0,
      slideMainPosRight = 0;

    if (tabRefVal.current && slideMainRef.current) {
      activeTabFromMenu = Array.from(
        slideMainRef.current.children[2].children[0].children
      ).filter((tab) => tab.id === tabRefVal.current.id);

      lastTabActive =
        slideMainRef.current.children[2].children[0].children[5].getBoundingClientRect()
          .right;

      console.log("Current; ", activeTabFromMenu[0]);
      console.log(
        "General: ",
        slideMainRef.current.children[2].children[0].children[5]
      );

      activeTabPosLeft = activeTabFromMenu[0].getBoundingClientRect().left;
      slideMainPosLeft = slideMainRef.current.getBoundingClientRect().left;
      activeTabPosRight = activeTabFromMenu[0].getBoundingClientRect().right;
      slideMainPosRight = slideMainRef.current.getBoundingClientRect().right;

      if (activeTabPosLeft < slideMainPosLeft) {
        slideRef.current.scrollBy({
          top: 0,
          left: -200,
          behaviour: "smooth",
        });
      } else if (activeTabPosRight > slideMainPosRight) {
        if (lastTabActive > slideMainPosRight) {
          slideRef.current.scrollBy({
            top: 0,
            left: 300,
            behaviour: "smooth",
          });
        } else {
          slideRef.current.scrollBy({
            top: 0,
            left: 100,
            behaviour: "smooth",
          });
        }
      }
    }
  };

  const scrollTabs = (tabRefVal, tabRefElem) => {
    let secondTab = "",
      selectedTab = "";
    let sliderContainerPos = 0,
      firstTabPos = 0,
      secondChild = 0;
    let tabPos;

    if (slideMainRef.current && slideRef.current) {
      sliderContainerPos = slideMainRef.current.getBoundingClientRect();
      tabPos = tabRefVal;
      secondTab = slideRef.current.children[0].children[1].id;
      selectedTab = tabRefElem.id;
      firstTabPos =
        slideRef.current.children[0].firstChild.getBoundingClientRect().left;
      secondChild =
        slideRef.current.children[0].children[1].getBoundingClientRect().left;

      if (
        firstTabPos < sliderContainerPos.left &&
        secondChild > sliderContainerPos.left &&
        secondTab === selectedTab
      ) {
        slideRef.current.scrollBy({
          top: 0,
          left: -100,
          behaviour: "smooth",
        });
      } else if (
        firstTabPos < sliderContainerPos.left &&
        secondChild < sliderContainerPos.left &&
        secondTab === selectedTab
      ) {
        slideRef.current.scrollBy({
          top: 0,
          left: -200,
          behaviour: "smooth",
        });
      } else if (tabRefVal.left < sliderContainerPos.left) {
        slideRef.current.scrollBy({
          top: 0,
          left: -100,
          behaviour: "smooth",
        });
      } else if (tabRefVal.right > sliderContainerPos.right) {
        slideRef.current.scrollBy({
          top: 0,
          left: 100,
          behaviour: "smooth",
        });
      }
    }
  };

  const checkWhenArrowing = (refVal) => {
    let currentTabNext = "",
      currentTab = "",
      lastTab = "",
      firstTab = "";
    let tabsContainerPosRight = 0,
      tabsContainerPosLeft = 0,
      currentTabPos = 0,
      tabMenu = 0;

    if (refVal.current && slideMainRef.current) {
      currentTabNext = refVal.current.nextSibling.id;
      currentTab = refVal.current.previousSibling.id;
      lastTab = slideRef.current.children[0].children[6].id;
      firstTab = slideRef.current.children[0].children[1].id;

      if (currentTabNext === lastTab) {
        currentTabPos =
          refVal.current.nextSibling.getBoundingClientRect().right;
        tabsContainerPosRight =
          slideMainRef.current.getBoundingClientRect().right;

        if (currentTabPos > tabsContainerPosRight) {
          slideRef.current.scrollBy({
            top: 0,
            left: 100,
            behaviour: "smooth",
          });
        }
      } else if (currentTab === firstTab) {
        tabMenu =
          slideRef.current.children[0].children[0].getBoundingClientRect().left;
        tabsContainerPosLeft =
          slideMainRef.current.getBoundingClientRect().left;

        if (tabMenu < tabsContainerPosLeft) {
          slideRef.current.scrollBy({
            top: 0,
            left: -100,
            behaviour: "smooth",
          });
        }
      }
    }
  };

  const singleTab = (refVal) => {
    let tabRefVal = 0;
    let tabRefElem;
    if (refVal.current) {
      tabRefElem = refVal.current;
      tabRefVal = tabRefElem.getBoundingClientRect();
      scrollTabs(tabRefVal, tabRefElem);
    }
  };

  return (
    <div {...customProps} id={id} className={containerClassNames} role="none">
      <div
        className={cx("workspace", sliderMainClass)}
        ref={slideMainRef}
        role="none"
      >
        <div aria-hidden className={cx("textLegend")}>
          <p>
            <strong>Option B:</strong> Only dropdown is keyboard accessible,
            tabs are for visual users.
          </p>
        </div>
        <div role="none" className={cx("button-header")}>
          {extraConfig && <span aria-hidden></span>}
          {sizeButton}
        </div>
        <div
          role="none"
          className={cx("tab-header", newResizeClass, sliderItemsClass, {
            "has-dismiss-button": onRequestDismiss && dismissButtonIsVisible,
          })}
          ref={slideRef}
        >
          <Tabs
            ariaLabel={ariaLabel}
            tabData={tabData}
            scrollTabs={scrollTabs}
            singleTab={singleTab}
            checkWhenArrowing={checkWhenArrowing}
            jumpToActiveTab={jumpToActiveTab}
            activeSize={activeSize}
          />
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
