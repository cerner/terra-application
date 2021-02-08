import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import MoreButton from './_MoreButton';
import TabDropDown from './_TabDropDown';
import Tab from './_Tab';
import HiddenTab from './_HiddenTab';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label to set on the tablist element.
   */
  label: PropTypes.string.isRequired,
  /**
   * Currently active Tabs.Pane content to be displayed.
   */
  tabData: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The id string to associate to the 'tab'.
     */
    id: PropTypes.string.isRequired,
    /**
     * The id string to associate to the 'tabpanel'.
     */
    associatedPanelId: PropTypes.string.isRequired,
    /**
     * The label to display for the tab.
     */
    label: PropTypes.string.isRequired,
    /**
     * Whether or not the tab is selected.
     */
    isSelected: PropTypes.bool,
    /**
     * The function callback for selection of a tab.
     * Returns the event and metaData e.g. onSelect(event, metaData).
     */
    onSelect: PropTypes.func,
    /**
     * The metaData to return with the onSelect callback.
     */
    metaData: PropTypes.object,
  })).isRequired,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.moreButtonRef = React.createRef();

    this.setIsOpen = this.setIsOpen.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHiddenBlur = this.handleHiddenBlur.bind(this);
    this.handleHiddenFocus = this.handleHiddenFocus.bind(this);
    this.handleOnMoreButtonSelect = this.handleOnMoreButtonSelect.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.wrapOnSelect = this.wrapOnSelect.bind(this);
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
    this.positionDropDown = this.positionDropDown.bind(this);
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.containerRef.current);
    this.handleResize();
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else if (this.props.tabData.length !== prevProps.tabData.length) {
      this.resetCache();
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.containerRef.current);
  }

  handleResize() {
    if (!this.moreButtonRef.current || !this.containerRef.current) {
      return;
    }

    // NOTE: get width from bounding client rect instead of r4esize observer, zoom throws off safari.
    const { width } = this.containerRef.current.parentNode.getBoundingClientRect();

    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginLeft = parseInt(moreStyle.getPropertyValue('margin-left'), 0);
    const moreMarginRight = parseInt(moreStyle.getPropertyValue('margin-right'), 0);
    const moreButtonWidth = this.moreButtonRef.current.getBoundingClientRect().width + moreMarginLeft + moreMarginRight;
    const availableWidth = width - moreButtonWidth;

    // Calculate hidden index
    const tabCount = this.props.tabData.length;
    let newHideIndex = tabCount;
    let calcMinWidth = 0;
    let showMoreButton = false;
    for (let i = 0; i < tabCount; i += 1) {
      const tab = this.containerRef.current.children[i];
      const tabStyle = window.getComputedStyle(tab, null);
      const tabMarginLeft = parseFloat(tabStyle.getPropertyValue('margin-left'));
      const tabMarginRight = parseFloat(tabStyle.getPropertyValue('margin-right'));
      const tabMinWidth = parseFloat(tabStyle.getPropertyValue('min-width'));

      calcMinWidth += (tabMinWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === tabCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        showMoreButton = true;
        break;
      }
    }

    if (this.showMoreButton !== showMoreButton || this.hiddenStartIndex !== newHideIndex) {
      this.showMoreButton = showMoreButton;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  handleHiddenFocus() {
    this.setIsOpen(true);
  }

  handleHiddenBlur() {
    this.setIsOpen(false);
  }

  handleOnMoreButtonSelect() {
    this.setIsOpen(true);
  }

  handleOutsideClick() {
    this.setIsOpen(false);
  }

  setIsOpen(value) {
    this.isOpen = value;
    this.forceUpdate();
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.showMoreButton = true;
    this.isOpen = false;
  }

  positionDropDown() {
    if (!this.dropdownRef.current || !this.moreButtonRef.current) {
      return;
    }

    // more button computed
    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginRight = parseInt(moreStyle.getPropertyValue('margin-right'), 0);

    // container's parentNode computed (parent contains relative position)
    const parentStyle = window.getComputedStyle(this.containerRef.current.parentNode, null);
    const parentMarginRight = parseInt(parentStyle.getPropertyValue('margin-right'), 0);

    // getBoundingClientRect - using adding 6px for visual offset effect
    const moreRect = this.moreButtonRef.current.getBoundingClientRect();
    const parentRect = this.containerRef.current.parentNode.getBoundingClientRect();
    const calcRight = Math.floor(parentRect.right - moreRect.right - moreMarginRight + parentMarginRight - 6);

    // calculate right
    this.dropdownRef.current.style.right = `${calcRight}px`;
  }

  wrapOnSelect(onSelect) {
    return (itemKey, metaData) => {
      this.setIsOpen(false);
      onSelect(itemKey, metaData);
    };
  }

  wrapOnSelectHidden(onSelect) {
    return (itemKey, metaData) => {
      if (this.isOpen) {
        onSelect(itemKey, metaData);
      }
      this.setIsOpen(!this.isOpen);
    };
  }

  render() {
    const { tabData, label } = this.props;
    const theme = this.context;
    const ids = tabData.map(tab => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    let isHiddenSelected = false;

    tabData.forEach((tab, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleTabs.push(
          <Tab
            {...tab}
            key={tab.id}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelect(tab.onSelect)}
            zIndex={tab.isSelected ? tabData.length : tabData.length - index}
          />,
        );
      } else {
        hiddenTabs.push(
          <HiddenTab
            {...tab}
            key={tab.id}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelectHidden(tab.onSelect)}
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
          />,
        );
        hiddenIds.push(tab.id);

        if (tab.isSelected) {
          isHiddenSelected = true;
        }
      }
    });

    if (this.showMoreButton && this.dropdownRef.current) {
      this.positionDropDown();
    }

    let attrs;
    if (this.isCalculating) {
      attrs = {
        'data-tab-is-calculating': 'true',
      };
    }

    return (
      <div
        {...attrs}
        className={cx('tab-container', theme.className)}
        ref={this.containerRef}
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        aria-owns={hiddenIds.join(' ')}
      >
        {visibleTabs}
        <TabDropDown
          onFocus={this.handleHiddenFocus}
          onBlur={this.handleHiddenBlur}
          isOpen={this.isOpen}
          onRequestClose={this.handleOutsideClick}
          refCallback={node => { this.dropdownRef.current = node; }}
        >
          {hiddenTabs}
        </TabDropDown>
        {this.showMoreButton ? (
          <MoreButton
            isOpen={this.isOpen}
            hiddenIndex={this.hiddenStartIndex}
            isActive={isHiddenSelected}
            zIndex={tabData.length - this.hiddenStartIndex}
            onBlur={this.handleHiddenBlur}
            onSelect={this.handleOnMoreButtonSelect}
            refCallback={node => { this.moreButtonRef.current = node; }}
            tabIds={ids}
          />
        ) : undefined}
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.contextType = ThemeContext;

export default Tabs;
