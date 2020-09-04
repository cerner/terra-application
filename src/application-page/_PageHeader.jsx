import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import Popup from 'terra-popup';
import IconRollup from 'terra-icon/lib/icon/IconRollup';

import List, { Item as ListItem } from 'terra-list';
import ActionHeader from 'terra-action-header';

import PageContainerContext from '../page-container/PageContainerContext';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageHeader = ({
  actions, onBack, title,
}) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const moreActionsButtonRef = React.useRef();
  const pageContainerContext = React.useContext(PageContainerContext);

  return (
    <div className={cx('page-layout-header')}>
      {onBack || pageContainerContext?.leftActionComponent ? (
        <div className={cx('back-button-container')}>
          {pageContainerContext?.leftActionComponent ? (
            <>
              {pageContainerContext?.leftActionComponent}
              <div className={cx('actions-divider')} />
            </>
          ) : null}
          {onBack ? (
            <Button
              className={cx(['header-button', 'back-button'])}
              icon={<span className={cx('back')} />}
              text="Back"
              onClick={onBack}
              variant={ButtonVariants.UTILITY}
            />
          ) : null}
        </div>
      ) : null}
      <div className={cx('title-container')}>
        {title}
      </div>
      <div className={cx('actions-container')}>
        {actions && actions.slice(0, 2).map((action) => (
          <Button
            refCallback={action.buttonRefCallback}
            key={action.key}
            className={cx(['header-button'])}
            isIconOnly
            icon={action.icon}
            text={action.text}
            variant={ButtonVariants.UTILITY}
            onClick={(event) => { event.preventDefault(); action.onSelect(); }}
            isDisabled={action.isDisabled}
          />
        ))}
        {(actions && actions.slice(2).length) ? (
          <Button
            refCallback={(ref) => {
              moreActionsButtonRef.current = ref;

              actions.slice(2).forEach((action) => {
                if (action.buttonRefCallback) {
                  action.buttonRefCallback(ref);
                }
              });
            }}
            className={cx('header-button')}
            isIconOnly
            icon={<IconRollup />}
            text="More Actions"
            variant={ButtonVariants.UTILITY}
            onClick={(event) => { event.preventDefault(); setShowPopup(true); }}
          />
        ) : undefined}
        {showPopup && (
          <Popup
            isOpen
            targetRef={() => moreActionsButtonRef.current}
            onRequestClose={() => { setShowPopup(false); }}
            contentAttachment="top right"
            targetAttachment="bottom right"
            contentHeight="auto"
            contentWidth="240"
          >
            <ActionHeader title="More Actions" />
            <List dividerStyle="standard" role="listbox" aria-label="It's Side Navigation">
              {actions.slice(2).map((action) => (
                <ListItem
                  key={action.key}
                  isSelectable={!action.isDisabled}
                  onSelect={() => {
                    setShowPopup(false);
                    action.onSelect();
                  }}
                >
                  <div style={{ padding: '1rem', display: 'flex' }}>
                    <div style={{ paddingRight: '5px' }}>
                      {action.icon}
                    </div>
                    <div>{action.text}</div>
                  </div>
                </ListItem>
              ))}
            </List>
          </Popup>
        )}
        {pageContainerContext?.rightActionComponent ? (
          <>
            <div className={cx('actions-divider')} />
            {pageContainerContext?.rightActionComponent}
          </>
        ) : null}
      </div>
    </div>
  );
};

PageHeader.propTypes = propTypes;

const BreadcrumbsPageHeader = ({
  actions, title, backLinks,
}) => (
  <div className={cx('page-layout-header', 'breadcrumb-header')}>
    {/* {onBack ? (
      <div className={cx('back-button-container')}>
        <Button
          className={cx(['header-button', 'back-button'])}
          icon={<span className={cx('back')} />}
          text={backText}
          onClick={onBack}
          variant={ButtonVariants.UTILITY}
          aria-label={`Return to ${backText}`}
        />
      </div>
    ) : null} */}
    <div className={cx('breadcrumbs')}>
      {backLinks.map((link) => (
        <>
          <Button variant={ButtonVariants['DE-EMPHASIS']} className={cx('link-button')} text={link.title} onClick={link.onRequestClose} isCompact />
          <div className={cx('divider')}>/</div>
        </>
      ))}
      <span className={cx('endpoint')}>
        {title}
      </span>
    </div>
    <div className={cx('actions-container')}>
      {actions && actions.map((action) => (
        <Button
          key={action.key}
          className={cx(['header-button'])}
          isIconOnly
          icon={action.icon}
          text={action.text}
          variant={ButtonVariants.UTILITY}
          onClick={(event) => { event.preventDefault(); action.onSelect(); }}
          isDisabled={action.isDisabled}
        />
      ))}
    </div>
  </div>
);

BreadcrumbsPageHeader.defaultProps = {
  backLinks: [],
};

export default PageHeader;
export { BreadcrumbsPageHeader };
