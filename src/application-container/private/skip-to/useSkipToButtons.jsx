import React from 'react';
import classNames from 'classnames/bind';

import EventEmitter from '../../../utils/event-emitter';

import SkipToButtonsContext from './SkipToButtonsContext';

import styles from './SkipToButton.module.scss';

const cx = classNames.bind(styles);

const useSkipToButtons = () => {
  /**
   * The registered SkipToButton entries are stored in a ref to limit updates to the hook consumer.
   * Any updates to the rendered buttons are performed with the updateButtonsStateRef.
   */
  const registeredButtonsRef = React.useRef({});

  /**
   * The hook-created SkipToButtons component assigns a setState callback to this ref. The hook
   * executes this callback when the registered SkipToButton entries change to ensure the proper content
   * is rendered without updating the entire application tree.
   */
  const updateButtonsStateRef = React.useRef();

  const useSkipToButtonsExports = React.useMemo(() => {
    const registerButton = (key, description, isMain, onSelect) => {
      if (!key) {
        throw new Error('A SkipToButton cannot be registered without an identifier.');
      }

      registeredButtonsRef.current[key] = {
        key, description, isMain, onSelect,
      };

      if (updateButtonsStateRef.current) {
        updateButtonsStateRef.current({ ...registeredButtonsRef.current });
      }
    };

    const unregisterButton = (key) => {
      if (!key) {
        throw new Error('A SkipToButton cannot be unregistered without an identifier.');
      }

      if (!registeredButtonsRef.current[key]) {
        return;
      }

      delete registeredButtonsRef.current[key];

      if (updateButtonsStateRef) {
        updateButtonsStateRef.current({ ...registeredButtonsRef.current });
      }
    };

    const providerValue = { registerButton, unregisterButton };

    return {
      SkipToButtonsProvider: ({ children }) => ( // eslint-disable-line react/prop-types
        <SkipToButtonsContext.Provider value={providerValue}>
          {children}
        </SkipToButtonsContext.Provider>
      ),
      SkipToButtons: () => {
        const [buttons, setButtons] = React.useState({});

        /**
         * The setState function is assigned to the hook's ref so that
         * the hook can trigger updates externally.
         *
         * Note: This does mean that only a single instance of the SkipToButtons component
         * can be created.
         */
        updateButtonsStateRef.current = setButtons;

        function buildButtonElement(data) {
          return (
            <button
              key={data.key}
              className={cx('skip-to-button')}
              type="button"
              role="link" // TODO verify role
              onClick={() => {
                EventEmitter.emit('terra-application.dismiss-transient-layers');

                setTimeout(() => { data.onSelect(); }, 0);
              }}
            >
              Skip to
              {' '}
              {data.description}
            </button>
          );
        }

        const registeredButtons = Object.values(buttons);
        const mainButtons = [];
        const otherButtons = [];

        registeredButtons.forEach((buttonData) => {
          if (buttonData.isMain) {
            /**
             * Any button indicated to be for main content is rendered first. Should more than
             * one button be indicated as such, they will be rendered in registration order.
             */
            mainButtons.push(buildButtonElement(buttonData));
          } else {
            otherButtons.push(buildButtonElement(buttonData));
          }
        });

        return (
          <div>
            {mainButtons}
            {otherButtons}
          </div>
        );
      },
    };
  }, []);

  return useSkipToButtonsExports;
};

export default useSkipToButtons;
