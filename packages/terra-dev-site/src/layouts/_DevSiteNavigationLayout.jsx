import React from 'react';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconTile from 'terra-icon/lib/icon/IconTile';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';

import DevSitePage from '../pages/_DevSitePage';
import PageContainer from '../terra-application-temporary/page-container';
import NotFoundPage from '../pages/_NotFoundPage';
import SettingsModal from '../modals/_SettingsModal';
import SearchModal from '../modals/_SearchModal';
import ApplicationSwitcherModal from '../modals/_ApplicationSwitcherModal';

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
  const isHome = useRouteMatch('/home');
  const disclosureManager = React.useContext(DisclosureManagerContext);

  console.log('siteConfig', siteConfig);

  const setNavigationState = (key) => {
    history.push(siteConfig.routesMap[key]);
  };



  const handleSettingsSelection = () => {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'terra-dev-site.settings',
        component: (
          <SettingsModal />
        ),
      },
    });
  };

  const handleExtensionSelection = (key, metaData) => {
    metaData.disclose();
  };

  const handleUtilityItemSelection = (key, metaData) => {
    metaData.disclose();
  };

  const getExtensionItems = () => {
    const extensionArray = (siteConfig.extensionItems || []).map((ext) => ({
      icon: <ext.icon />,
      key: ext.key,
      text: ext.text,
      metaData: {
        disclose: () => {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'large',
            content: {
              key: ext.key,
              component: (
                <ext.modal />
              ),
            },
          });
        },
      },
    }));

    extensionArray.unshift({
      icon: <IconSearch />,
      key: 'terra-dev-site.search',
      text: 'Search',
      metaData: {
        disclose: () => {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'large',
            content: {
              key: 'terra-dev-site.search',
              component: (
                <SearchModal pageConfig={siteConfig.pageConfig} />
              ),
            },
          });
        },
      },
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
        metaData: {
          disclose: () => {
            disclosureManager.disclose({
              preferredType: 'modal',
              size: 'tiny',
              content: {
                key: 'terra-dev-site.application-switcher',
                component: (
                  <ApplicationSwitcherModal sites={sites} />
                ),
              },
            });
          },
        },
      });
    }

    return utilityItems;
  };

  const activeNavigationKey = `/${location.pathname.split('/')[1]}`;
  const activeNavItem = siteConfig.navigationConfig.find((element) => element.path === activeNavigationKey);

  const getContent = () => {
    if (!activeNavItem) {
      return (
        <PageContainer>
          <NotFoundPage />
        </PageContainer>
      );
    }
    if (activeNavItem.pageConfig) {
      if (isHome) {
        return (
          <DevSiteContentLayout pageContentConfig={activeNavItem.pageConfig} contentImports={siteConfig.contentImports} />
        );
      }
      return (
        <PageContainer>
          <DevSitePage pageContentConfig={activeNavItem.pageConfig} contentImports={siteConfig.contentImports} />
        </PageContainer>
      );
    }
    return (
      <DevSiteSecondaryNavigation label={activeNavItem.label} id={activeNavItem.path.substring(1)} config={activeNavItem.children} contentImports={siteConfig.contentImports} />
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
        onSelectSettings={handleSettingsSelection}
        onSelectExtensionItem={handleExtensionSelection}
        onSelectUtilityItem={handleUtilityItemSelection}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        activeNavigationItemKey={activeNavItem ? activeNavigationKey : undefined}
        extensionItems={getExtensionItems()}
        utilityItems={getUtilityItems(siteConfig.sites)}
      >
        {
          getContent()
        }
      </ApplicationNavigation>
    </>
  );
};

DevSiteNavigationLayout.propTypes = propTypes;

export default DevSiteNavigationLayout;
