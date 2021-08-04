import React from 'react';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconTile from 'terra-icon/lib/icon/IconTile';
import ApplicationNavigation from 'terra-application/lib/application-navigation';

import DevSitePage from '../pages/_DevSitePage';
import PageContainer from '../terra-application-temporary/page-container';
// import NotFoundPage from '../pages/_NotFoundPage';
// import SettingsModal from '../modals/_SettingsModal';
// import SearchModal from '../modals/_SearchModal';
// import ApplicationSwitcherModal from '../modals/_ApplicataionSwitcherModal';

import siteConfigShape from '../site/siteConfigShapes';
import DevSiteSecondaryNavigation from './_DevSiteSecondaryNavigationLayout';
import DevSiteContentLayout from './_ContentLayout';

const propTypes = {
  /**
   * The site config for the application.
   */
  siteConfig: siteConfigShape.isRequired,
};

const DevSiteNavigationLayout = ({ siteConfig }) => {
  const location = useLocation();
  const history = useHistory();
  // const [showSettingsModal, setShowSettingsModal] = React.useState(false);
  // const [extensionModal, setExtensionModal] = React.useState();
  // const [utilityModal, setUtilityModal] = React.useState();
  const isHome = useRouteMatch('/home');

  console.log('siteConfig', siteConfig);

  const setNavigationState = (key) => {
    history.push(siteConfig.routesMap[key]);
  };

  // const handleSettingsSelection = () => {
  //   setShowSettingsModal(true);
  // };

  // const handleExtensionSelection = (key, metaData) => {
  //   setExtensionModal(metaData);
  // };

  // const handleUtilityItemSelection = (key, metaData) => {
  //   setUtilityModal(metaData);
  // };

  const getExtensionItems = () => {
    const extensionArray = (siteConfig.extensionItems || []).map((ext) => ({
      icon: <ext.icon />,
      key: ext.key,
      text: ext.text,
      // metaData: { render: () => (<ext.modal onRequestClose={() => { setExtensionModal(); }} />) },
    }));

    extensionArray.unshift({
      icon: <IconSearch />,
      key: 'terra-dev-site.search',
      text: 'Search',
      // metaData: { render: () => (<SearchModal pageConfig={siteConfig.pageConfig} onRequestClose={() => { setExtensionModal(); }} />) },
    });
    return extensionArray;
  };

  const getUtilityItems = (sites) => {
    const utilityItems = [];
    if (sites.length > 0) {
      utilityItems.push({
        icon: <IconTile />,
        key: 'terra-dev-site.application-switcher',
        text: 'Application Switcher',
        // metaData: { render: () => (<ApplicationSwitcherModal sites={sites} onRequestClose={() => { setUtilityModal(); }} />) },
      });
    }

    return utilityItems;
  };

  const activeNavigationKey = `/${location.pathname.split('/')[1]}`;

  const getContent = () => {
    const navItem = siteConfig.navigationConfig.find((element) => element.path === activeNavigationKey);
    if (navItem.pageConfig) {
      if (isHome) {
        return (
          <DevSiteContentLayout pageContentConfig={navItem.pageConfig} contentImports={siteConfig.contentImports} />
        );
      }
      return (
        <PageContainer>
          <DevSitePage pageContentConfig={navItem.pageConfig} contentImports={siteConfig.contentImports} />
        </PageContainer>
      );
    }
    return (
      // <div> sideNav </div>
      <DevSiteSecondaryNavigation label={navItem.label} id={navItem.path.substring(1)} config={navItem.children} contentImports={siteConfig.contentImports} />
    );
  };

  return (
    <>
      <ApplicationNavigation
        id="terra-dev-site"
        titleConfig={siteConfig.titleConfig}
        navigationItems={siteConfig.navigationConfig.map((navItem) => ({
          key: navItem.path,
          text: navItem.label,
        }))}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        activeNavigationItemKey={activeNavigationKey}
        extensionItems={getExtensionItems()}
        utilityItems={getUtilityItems(siteConfig.sites)}
      >
        {
          getContent()
        }
      </ApplicationNavigation>
      {/* <PrimaryNavigationLayout
        id="terra-dev-site"
        titleConfig={siteConfig.titleConfig}
        activeNavigationKey={firstDir()}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        // onSelectSettings={handleSettingsSelection}
        // onSelectExtensionItem={handleExtensionSelection}
        // onSelectUtilityItem={handleUtilityItemSelection}
        // extensionItems={getExtensionItems()}
        // utilityItems={getUtilityItems(siteConfig.sites)}
        renderNavigationFallback={() => (
          <PageContainer isMain>
            <NotFoundPage />
          </PageContainer>
        )}
      >
        {siteConfig.navigationConfig.map((navItem) => {
          const renderProps = {};
          if (navItem.pageConfig) {
            if (isHome) {
              renderProps.renderLayout = () => (
                <DevSiteContentLayout pageContentConfig={navItem.pageConfig} contentImports={siteConfig.contentImports} />
              );
            } else {
              renderProps.renderPage = () => (
                <DevSitePage pageContentConfig={navItem.pageConfig} contentImports={siteConfig.contentImports} />
              );
            }
          } else {
            renderProps.renderLayout = () => (
              <DevSiteSecondaryNavigation label={navItem.label} id={navItem.path.substring(1)} config={navItem.children} contentImports={siteConfig.contentImports} />
            );
          }
          return (
            <NavigationItem
              key={navItem.path}
              navigationKey={navItem.path}
              label={navItem.label}
              {...renderProps}
            />
          );
        })}
      </PrimaryNavigationLayout> */}
      {/* {showSettingsModal && <SettingsModal onRequestClose={() => { setShowSettingsModal(false); }} />}
      {extensionModal && extensionModal.render()}
      {utilityModal && utilityModal.render()} */}
    </>
  );
};

DevSiteNavigationLayout.propTypes = propTypes;

export default DevSiteNavigationLayout;
