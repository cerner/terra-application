import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container';
import { ActiveBreakpointContext } from '../../../src/breakpoints';
import PrimaryNavigationLayout, { NavigationItem } from '../../../src/primary-navigation-layout';

import MockApplication from '../MockApplication';
import MockPage from '../MockPage';

const TestPrimaryNavigationLayout = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <PrimaryNavigationLayout {...props} />
    </ApplicationContainer>
  </MockApplication>
);

const TestPrimaryNavigationLayoutSmall = (props) => (
  <MockApplication>
    <ActiveBreakpointContext.Provider value="small">
      <ApplicationContainer>
        <PrimaryNavigationLayout {...props} />
      </ApplicationContainer>
    </ActiveBreakpointContext.Provider>
  </MockApplication>
);

describe('desktop size', () => {
  test('renders content provided as children', () => {
    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
      >
        <div data-testid="test-content">Test Child Content</div>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-content')).toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to not be rendered since no NavigationItems are provided
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders content provided with renderLayout prop', () => {
    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        renderLayout={() => (
          <div data-testid="test-content">Test Layout Content</div>
        )}
      />
    ));

    expect(screen.queryByTestId('test-content')).toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to not be rendered since no NavigationItems are provided
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders content provided with renderPage prop', () => {
    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        renderPage={() => (
          <MockPage label="Page Label">
            <div data-testid="test-content">Test Page Content</div>
          </MockPage>
        )}
      />
    ));

    expect(screen.queryByTestId('test-content')).toBeInTheDocument();
    expect(screen.queryByRole('main', { name: 'Page Label' })).toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to not be rendered since no NavigationItems are provided
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders content provided as navigation items', () => {
    const view = render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-nav-1')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-2"
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to be rendered since NavigationItems are provided
    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });

  test('renders Page content provided as navigation items', () => {
    const view = render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
          renderPage={() => (
            <MockPage label="Nav 1 Page">
              <div data-testid="test-nav-1">Nav 1</div>
            </MockPage>
          )}
        />
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
          renderPage={() => (
            <MockPage label="Nav 2 Page">
              <div data-testid="test-nav-2">Nav 2</div>
            </MockPage>
          )}
        />
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
          renderPage={() => (
            <MockPage label="Nav 3 Page">
              <div data-testid="test-nav-3">Nav 3</div>
            </MockPage>
          )}
        />
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByRole('main', { name: 'Nav 1 Page' })).toBeInTheDocument();

    expect(screen.queryByTestId('test-nav-1')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-2"
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
          renderPage={() => (
            <MockPage label="Nav 1 Page">
              <div data-testid="test-nav-1">Nav 1</div>
            </MockPage>
          )}
        />
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
          renderPage={() => (
            <MockPage label="Nav 2 Page">
              <div data-testid="test-nav-2">Nav 2</div>
            </MockPage>
          )}
        />
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
          renderPage={() => (
            <MockPage label="Nav 3 Page">
              <div data-testid="test-nav-3">Nav 3</div>
            </MockPage>
          )}
        />
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByRole('main', { name: 'Nav 2 Page' })).toBeInTheDocument();

    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to be rendered since NavigationItems are provided
    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });

  test('cleans up navigation items removed on subsequent renders', () => {
    const view = render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-nav-1')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-2"
      >
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-3"
      >
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).toBeInTheDocument();
  });

  test('renders navigation fallback when no match is detected', () => {
    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-99"
        renderNavigationFallback={() => <div data-testid="test-fallback" />}
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByTestId('test-fallback')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
  });

  test('renders selectable controls for navigation items', () => {
    const mockOnSelectNavigationItem = jest.fn();

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
        onSelectNavigationItem={mockOnSelectNavigationItem}
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayout>
    ));

    expect(screen.queryByRole('link', { name: 'Nav 1' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Nav 2' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Nav 3' })).toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'Nav 2' }));

    expect(mockOnSelectNavigationItem).toHaveBeenCalledWith('key-2', undefined);
  });

  test('renders header titles', () => {
    const view = render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
        }}
      />
    ));

    expect(screen.queryByText('Test App Name')).toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
          headline: 'Test Headline',
        }}
      />
    ));

    expect(screen.queryByText('Test App Name')).toBeInTheDocument();
    expect(screen.queryByText('Test Headline')).toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
          subline: 'Test Subline',
        }}
      />
    ));

    expect(screen.queryByText('Test App Name')).toBeInTheDocument();
    expect(screen.queryByText('Test Subline')).toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'element title',
          element: <div data-testid="test-title-element" />,
        }}
      />
    ));

    expect(screen.queryByTestId('test-title-element')).toBeInTheDocument();
  });

  test('renders extension items', () => {
    const mockOnSelectExtensionItem = jest.fn();
    const extension1Meta = {};
    const extension2Meta = {};

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        extensionItems={[{
          key: 'extension-1',
          icon: <div data-testid="extension-1-icon" />,
          text: 'Extension 1',
          metaData: extension1Meta,
        }, {
          key: 'extension-2',
          icon: <div data-testid="extension-2-icon" />,
          text: 'Extension 2',
          metaData: extension2Meta,
        }]}
        onSelectExtensionItem={mockOnSelectExtensionItem}
      />
    ));

    expect(screen.queryByTestId('extension-1-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('extension-2-icon')).toBeInTheDocument();

    userEvent.click(screen.queryByLabelText('Extension 1'));
    expect(mockOnSelectExtensionItem).toHaveBeenCalledWith('extension-1', extension1Meta);

    mockOnSelectExtensionItem.mockClear();

    userEvent.click(screen.queryByLabelText('Extension 2'));
    expect(mockOnSelectExtensionItem).toHaveBeenCalledWith('extension-2', extension2Meta);
  });

  test('renders utility button without user config', () => {
    const mockOnSelectUtilityItem = jest.fn();
    const item1Meta = {};
    const item2Meta = {};

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        utilityItems={[{
          key: 'item-1',
          icon: <div data-testid="utility-1-icon" />,
          text: 'Utility Item 1',
          metaData: item1Meta,
        }, {
          key: 'item-2',
          icon: <div data-testid="utility-2-icon" />,
          text: 'Utility Item 2',
          metaData: item2Meta,
        }]}
        onSelectUtilityItem={mockOnSelectUtilityItem}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleNoUser',
    });

    expect(utilityButton).toBeInTheDocument();

    userEvent.click(utilityButton);

    expect(screen.queryByRole('listbox', {
      name: 'terraApplication.applicationNavigation.utilityMenu.headerTitle',
    })).toBeInTheDocument();
    expect(screen.queryByTestId('utility-1-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('utility-2-icon')).toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'Utility Item 1' }));
    expect(mockOnSelectUtilityItem).toHaveBeenCalledWith('item-1', item1Meta);

    mockOnSelectUtilityItem.mockClear();

    userEvent.click(utilityButton);
    userEvent.click(screen.queryByRole('link', { name: 'Utility Item 2' }));
    expect(mockOnSelectUtilityItem).toHaveBeenCalledWith('item-2', item2Meta);
  });

  test('renders utility button with user config and hero', () => {
    const mockOnSelectUtilityItem = jest.fn();
    const item1Meta = {};

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        hero={<div data-testid="test-hero" />}
        userConfig={{
          name: 'Test User',
          detail: 'Test Detail',
          initials: 'TU',
        }}
        utilityItems={[{
          key: 'item-1',
          icon: <div data-testid="utility-1-icon" />,
          text: 'Utility Item 1',
          metaData: item1Meta,
        }]}
        onSelectUtilityItem={mockOnSelectUtilityItem}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleUser',
    });
    expect(utilityButton).toBeInTheDocument();

    userEvent.click(utilityButton);

    expect(screen.queryByRole('listbox', {
      name: 'terraApplication.applicationNavigation.utilityMenu.headerTitle',
    })).toBeInTheDocument();
    expect(screen.queryByTestId('utility-1-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('test-hero')).toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'Utility Item 1' }));
    expect(mockOnSelectUtilityItem).toHaveBeenCalledWith('item-1', item1Meta);
  });

  test('renders utility button with user config and imageSrc', () => {
    const mockOnSelectUtilityItem = jest.fn();
    const item1Meta = {};

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        hero={<div data-testid="test-hero" />}
        userConfig={{
          name: 'Test User',
          detail: 'Test Detail',
          imageSrc: 'www.test.com',
        }}
        utilityItems={[{
          key: 'item-1',
          icon: <div data-testid="utility-1-icon" />,
          text: 'Utility Item 1',
          metaData: item1Meta,
        }]}
        onSelectUtilityItem={mockOnSelectUtilityItem}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleUser',
    });
    expect(utilityButton).toBeInTheDocument();
  });

  test('renders utility button with user config without initials or image', () => {
    const mockOnSelectUtilityItem = jest.fn();
    const item1Meta = {};

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        hero={<div data-testid="test-hero" />}
        userConfig={{
          name: 'Test User',
          detail: 'Test Detail',
        }}
        utilityItems={[{
          key: 'item-1',
          icon: <div data-testid="utility-1-icon" />,
          text: 'Utility Item 1',
          metaData: item1Meta,
        }]}
        onSelectUtilityItem={mockOnSelectUtilityItem}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleUser',
    });
    expect(utilityButton).toBeInTheDocument();
  });

  test('renders default Settings utility item', () => {
    const mockOnSelectSettings = jest.fn();

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectSettings={mockOnSelectSettings}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleNoUser',
    });
    userEvent.click(utilityButton);

    userEvent.click(screen.queryByRole('link', {
      name: 'terraApplication.applicationNavigation.utilityMenu.settings',
    }));
    expect(mockOnSelectSettings).toHaveBeenCalled();
  });

  test('renders default Help utility item', () => {
    const mockOnSelectHelp = jest.fn();

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectHelp={mockOnSelectHelp}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleNoUser',
    });
    userEvent.click(utilityButton);

    userEvent.click(screen.queryByRole('link', {
      name: 'terraApplication.applicationNavigation.utilityMenu.help',
    }));
    expect(mockOnSelectHelp).toHaveBeenCalled();
  });

  test('renders default Logout utility item', () => {
    const mockOnSelectLogout = jest.fn();

    render((
      <TestPrimaryNavigationLayout
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectLogout={mockOnSelectLogout}
      />
    ));

    const utilityButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.utilityButtonTitleNoUser',
    });
    userEvent.click(utilityButton);

    userEvent.click(screen.queryByText('terraApplication.applicationNavigation.utilityMenu.logout'));
    expect(mockOnSelectLogout).toHaveBeenCalled();
  });
});

describe('compact size', () => {
  test('renders content provided as children', () => {
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
      >
        <div data-testid="test-content">Test Child Content</div>
      </TestPrimaryNavigationLayoutSmall>
    ));

    expect(screen.queryByTestId('test-content')).toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to not be rendered since no NavigationItems are provided
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders content provided with renderLayout prop', () => {
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        renderLayout={() => (
          <div data-testid="test-content">Test Layout Content</div>
        )}
      />
    ));

    expect(screen.queryByTestId('test-content')).toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to not be rendered since no NavigationItems are provided
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders content provided as navigation items', () => {
    const view = render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
        onSelectNavigationItem={jest.fn()}
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayoutSmall>
    ));

    expect(screen.queryByTestId('test-nav-1')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    view.rerender((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-2"
        onSelectNavigationItem={jest.fn()}
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayoutSmall>
    ));

    expect(screen.queryByTestId('test-nav-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-2')).toBeInTheDocument();
    expect(screen.queryByTestId('test-nav-3')).not.toBeInTheDocument();

    // Expect <header> to be rendered
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    // Expect <nav> to be rendered since NavigationItems are provided
    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });

  test('renders selectable controls for navigation items', () => {
    const mockOnSelectNavigationItem = jest.fn();
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        activeNavigationKey="key-1"
        onSelectNavigationItem={mockOnSelectNavigationItem}
      >
        <NavigationItem
          navigationKey="key-1"
          label="Nav 1"
        >
          <div data-testid="test-nav-1">Nav 1</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-2"
          label="Nav 2"
        >
          <div data-testid="test-nav-2">Nav 2</div>
        </NavigationItem>
        <NavigationItem
          navigationKey="key-3"
          label="Nav 3"
        >
          <div data-testid="test-nav-3">Nav 3</div>
        </NavigationItem>
      </TestPrimaryNavigationLayoutSmall>
    ));

    const drawerMenuButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.menuButtonTitle',
    });
    userEvent.click(drawerMenuButton);

    expect(screen.queryByRole('link', { name: 'Nav 1' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Nav 2' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Nav 3' })).toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'Nav 2' }));

    expect(mockOnSelectNavigationItem).toHaveBeenCalledWith('key-2', undefined);
  });

  test('renders header titles', () => {
    const view = render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
        }}
      />
    ));

    // Titles are rendered twice, once in the header and once in the
    // drawer menu. So we have to check for both elements here.
    screen.queryAllByText('Test App Name').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });

    view.rerender((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
          headline: 'Test Headline',
        }}
      />
    ));

    screen.queryAllByText('Test App Name').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });
    screen.queryAllByText('Test Headline').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });

    view.rerender((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test App Name',
          subline: 'Test Subline',
        }}
      />
    ));

    screen.queryAllByText('Test App Name').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });
    screen.queryAllByText('Test Subline').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });

    view.rerender((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'element title',
          element: <div data-testid="test-title-element" />,
        }}
      />
    ));

    screen.queryAllByTestId('test-title-element').forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('renders extension items', () => {
    const mockOnSelectExtensionItem = jest.fn();
    const extension1Meta = {};
    const extension2Meta = {};

    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        extensionItems={[{
          key: 'extension-1',
          icon: <div data-testid="extension-1-icon" />,
          text: 'Extension 1',
          metaData: extension1Meta,
        }, {
          key: 'extension-2',
          icon: <div data-testid="extension-2-icon" />,
          text: 'Extension 2',
          metaData: extension2Meta,
        }]}
        onSelectExtensionItem={mockOnSelectExtensionItem}
      />
    ));

    expect(screen.queryByTestId('extension-1-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('extension-2-icon')).toBeInTheDocument();

    userEvent.click(screen.queryByLabelText('Extension 1'));
    expect(mockOnSelectExtensionItem).toHaveBeenCalledWith('extension-1', extension1Meta);

    mockOnSelectExtensionItem.mockClear();

    userEvent.click(screen.queryByLabelText('Extension 2'));
    expect(mockOnSelectExtensionItem).toHaveBeenCalledWith('extension-2', extension2Meta);
  });

  test('renders utility button without user config', () => {
    const mockOnSelectUtilityItem = jest.fn();
    const item1Meta = {};
    const item2Meta = {};

    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        utilityItems={[{
          key: 'item-1',
          icon: <div data-testid="utility-1-icon" />,
          text: 'Utility Item 1',
          metaData: item1Meta,
        }, {
          key: 'item-2',
          icon: <div data-testid="utility-2-icon" />,
          text: 'Utility Item 2',
          metaData: item2Meta,
        }]}
        onSelectUtilityItem={mockOnSelectUtilityItem}
      />
    ));

    const drawerMenuButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.menuButtonTitle',
    });

    expect(drawerMenuButton).toBeInTheDocument();

    userEvent.click(drawerMenuButton);

    expect(screen.queryByTestId('utility-1-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('utility-2-icon')).toBeInTheDocument();

    userEvent.click(screen.queryByRole('option', { name: 'Utility Item 1' }));
    expect(mockOnSelectUtilityItem).toHaveBeenCalledWith('item-1', item1Meta);

    mockOnSelectUtilityItem.mockClear();

    userEvent.click(drawerMenuButton);
    userEvent.click(screen.queryByRole('option', { name: 'Utility Item 2' }));
    expect(mockOnSelectUtilityItem).toHaveBeenCalledWith('item-2', item2Meta);
  });

  test('renders drawer menu with user config', () => {
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        userConfig={{
          name: 'Test User',
          detail: 'Test Detail',
          initials: 'TU',
        }}
      />
    ));

    expect(screen.queryByText('Test User')).toBeInTheDocument();
    expect(screen.queryByText('TU')).toBeInTheDocument();
    expect(screen.queryByText('Test Detail')).toBeInTheDocument();
  });

  test('renders drawer menu with user config and imageSrc', () => {
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        userConfig={{
          name: 'Test User',
          detail: 'Test Detail',
          imageSrc: 'www.test.com',
        }}
      />
    ));

    expect(screen.queryByText('Test User')).toBeInTheDocument();
    expect(screen.queryByText('Test Detail')).toBeInTheDocument();
  });

  test('renders utility button with user config without initials or image', () => {
    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        userConfig={{
          name: 'Test User',
        }}
      />
    ));

    expect(screen.queryByText('Test User')).toBeInTheDocument();
  });

  test('renders default Settings utility item', () => {
    const mockOnSelectSettings = jest.fn();

    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectSettings={mockOnSelectSettings}
      />
    ));

    const drawerMenuButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.menuButtonTitle',
    });
    userEvent.click(drawerMenuButton);

    userEvent.click(screen.queryByRole('option', {
      name: 'terraApplication.applicationNavigation.utilityMenu.settings',
    }));
    expect(mockOnSelectSettings).toHaveBeenCalled();
  });

  test('renders default Help utility item', () => {
    const mockOnSelectHelp = jest.fn();

    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectHelp={mockOnSelectHelp}
      />
    ));

    const drawerMenuButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.menuButtonTitle',
    });
    userEvent.click(drawerMenuButton);

    userEvent.click(screen.queryByRole('option', {
      name: 'terraApplication.applicationNavigation.utilityMenu.help',
    }));
    expect(mockOnSelectHelp).toHaveBeenCalled();
  });

  test('renders default Logout utility item', () => {
    const mockOnSelectLogout = jest.fn();

    render((
      <TestPrimaryNavigationLayoutSmall
        id="test-id"
        titleConfig={{
          title: 'Test Title',
        }}
        onSelectLogout={mockOnSelectLogout}
      />
    ));

    const drawerMenuButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.header.menuButtonTitle',
    });
    userEvent.click(drawerMenuButton);

    const logoutButton = screen.queryByRole('button', {
      name: 'terraApplication.applicationNavigation.utilityMenu.logout',
    });
    userEvent.click(logoutButton);
    expect(mockOnSelectLogout).toHaveBeenCalled();
  });
});
