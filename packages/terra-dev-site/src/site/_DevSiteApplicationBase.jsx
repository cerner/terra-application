import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApplicationBase from 'terra-application';

import AppSettingsContext from './_AppSettingsContext';

const propTypes = {
  /**
   * The remainder of the application to render.
   */
  children: PropTypes.node,
};

const DevSiteApplicationContainer = ({ children }) => {
  const isRaw = useRouteMatch('/raw');
  const { currentLocale, currentThemeClassName } = React.useContext(AppSettingsContext);
  return (
    <ApplicationBase
      locale={currentLocale}
      themeName={currentThemeClassName}
      themeIsGlobal
      unloadPromptIsDisabled={!!isRaw}
    >
      {children}
    </ApplicationBase>
  );
};

DevSiteApplicationContainer.propTypes = propTypes;

export default DevSiteApplicationContainer;
