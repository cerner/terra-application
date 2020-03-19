import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Scroll from 'terra-scroll';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';

import PendingActionToggle from './PendingActionToggle';
import styles from './ModalPresenter.module.scss';
import Expand from '../../../../filter/Expand';
import Expand2 from '../../../../filter/Expand2';
import Expand3 from '../../../../filter/Expand3';
import SingleListbox from '../../../../filter/SingleListbox';
import NativeSelect from '../../../../filter/NativeSelect';

const cx = classNames.bind(styles);

const ModalContent = ({ name, onSubmit }) => {
  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);
  const disclosureManager = useContext(DisclosureManagerContext);
  const [hasError, setHasError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIsInitialized(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isInitialized]);

  if (!isInitialized) {
    return (
      <>
        <DisclosureManagerHeaderAdapter title={name} />
        <ApplicationLoadingOverlay isOpen backgroundStyle="clear" />
      </>
    );
  }

  if (hasError) {
    throw new Error('Modal Page failed to render');
  }

  return (
    <>
      <DisclosureManagerHeaderAdapter title={name} />
      <Scroll>
        <div className={cx('modal-content')}>
          <h2>{name}</h2>
          <h3>Modal Dismissal</h3>
          <p>This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed.</p>
          <button
            type="button"
            onClick={() => {
              /**
               * The registered dismiss check is overridden prior to calling onSubmit to allow the modal to be closed cleanly
               * without prompting the user.
               */
              disclosureManager.registerDismissCheck();
              onSubmit();
            }}
          >
          Done
          </button>
          <h3>Configuration Properties</h3>
          <p>
            Active Breakpoint:
            {' '}
            <span>{activeBreakpoint}</span>
          </p>
          <p>
            Intl Locale:
            {' '}
            <span>{applicationIntl.locale}</span>
          </p>
          <h3>Error Handling</h3>
          <p>Press the button below to throw an exception that will be caught and handled by the framework.</p>
          <button type="button" onClick={() => { setHasError(true); }}>Throw Error</button>
          <PendingActionToggle />
          <p>Multi-select Filtered Dialog</p>
          <Expand />
          <p>Single-select Filtered Dialog</p>
          <Expand2 />
          <p>Multi-select Non-filtered Dialog</p>
          <Expand3 />
          <p>Single-select Non-filtered Inline</p>
          <SingleListbox
            {...{ style: { height: '300px', width: '200px' } }}
            columnData={{
              id: 'box-inline-modal-1',
              onSearch: () => {},
              onSelectItem: () => {},
              items: [{
                key: 'opt',
                node: 'option 1',
                metaData: { key: 'opt' },
              },
              {
                key: 'opt2',
                node: 'option 2',
                metaData: { key: 'opt2' },
              }],
            }}
          />
          <p>Single Select Native</p>
          <NativeSelect />
        </div>
      </Scroll>
    </>
  );
};

ModalContent.propTypes = {
  name: PropTypes.string,
  onSubmit: PropTypes.func,
};

const ModalPresenter = () => {
  const disclosureManager = useContext(DisclosureManagerContext);
  const disclosureRef = useRef();

  return (
    <div>
      <h3>Modal Presenter</h3>
      <p>This component uses the DisclosureManagerContext to present a modal.</p>
      <button
        type="button"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'large',
            content: {
              key: 'modal_component_demo',
              component: (
                <ModalContent
                  name="Modal Component Demo"
                  onSubmit={() => {
                    if (disclosureRef.current) {
                      disclosureRef.current();
                      disclosureRef.current = undefined;
                    }
                  }}
                />
              ),
            },
          }).then(({ dismissDisclosure }) => {
            disclosureRef.current = dismissDisclosure;
          });
        }}
      >
      Show Modal
      </button>
    </div>
  );
};

export default ModalPresenter;
export { ModalContent };
