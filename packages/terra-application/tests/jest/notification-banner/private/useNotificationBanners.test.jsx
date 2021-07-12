import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

import NotificationBanner from '../../../../src/notification-banner';
import useNotificationBanners from '../../../../src/notification-banner/private/useNotificationBanners';

import MockApplication from '../../MockApplication';

describe('useNotificationBanners', () => {
  let NotificationBannersTestHarness;
  beforeEach(() => {
    NotificationBannersTestHarness = ({ children }) => { // eslint-disable-line react/prop-types
      const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

      return (
        <MockApplication>
          <div>
            <div>
              <NotificationBanners label="Test Banners Label" />
            </div>
            <div>
              <NotificationBannerProvider>
                {children}
              </NotificationBannerProvider>
            </div>
          </div>
        </MockApplication>
      );
    };
  });

  test('should provide components that render banners upon NotificationBanner registration', () => {
    const view = render(<NotificationBannersTestHarness />);

    expect(screen.getByRole('region', { name: 'terraApplication.notifications.regionLabel' })).toBeInTheDocument();

    view.rerender((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
      </NotificationBannersTestHarness>
    ));

    const hazardHighListItem = screen.getByLabelText('terraApplication.notificationBanner.alert', { selector: 'li' });
    expect(hazardHighListItem).toBeInTheDocument();
    expect(hazardHighListItem).toHaveAttribute('aria-posinset', '1');
    expect(hazardHighListItem).toHaveAttribute('aria-setsize', '1');
    expect(hazardHighListItem).toHaveTextContent('High Hazard Test Description');

    view.rerender((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
        <NotificationBanner variant="hazard-medium" description="Medium Hazard Test Description" />
      </NotificationBannersTestHarness>
    ));

    const hazardMediumListItem = screen.getByLabelText('terraApplication.notificationBanner.warning', { selector: 'li' });
    expect(hazardMediumListItem).toBeInTheDocument();
    expect(hazardMediumListItem).toHaveAttribute('aria-posinset', '2');
    expect(hazardMediumListItem).toHaveAttribute('aria-setsize', '2');
    expect(hazardMediumListItem).toHaveTextContent('Medium Hazard Test Description');

    view.rerender((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
        <NotificationBanner variant="hazard-medium" description="Medium Hazard Test Description" />
        <NotificationBanner variant="hazard-low" description="Low Hazard Test Description" />
      </NotificationBannersTestHarness>
    ));

    const lowHazardListItem = screen.getByLabelText('terraApplication.notificationBanner.info', { selector: 'li' });
    expect(lowHazardListItem).toBeInTheDocument();
    expect(lowHazardListItem).toHaveAttribute('aria-posinset', '3');
    expect(lowHazardListItem).toHaveAttribute('aria-setsize', '3');
    expect(lowHazardListItem).toHaveTextContent('Low Hazard Test Description');

    view.rerender((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
        <NotificationBanner variant="hazard-medium" description="Medium Hazard Test Description" />
        <NotificationBanner variant="hazard-low" description="Low Hazard Test Description" />
        <NotificationBanner variant="custom" custom={{ signalWord: 'Custom Signal', customIconClass: 'custom-icon-class' }} description="Custom Test Description" />
      </NotificationBannersTestHarness>
    ));

    const customListItem = screen.getByLabelText('Custom Signal', { selector: 'li' });
    expect(customListItem).toBeInTheDocument();
    expect(customListItem).toHaveAttribute('aria-posinset', '4');
    expect(customListItem).toHaveAttribute('aria-setsize', '4');
    expect(customListItem).toHaveTextContent('Custom Test Description');
  });

  test('should provide components that remove banners when they are no longer rendered', () => {
    const view = render((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
        <NotificationBanner variant="hazard-medium" description="Medium Hazard Test Description" />
      </NotificationBannersTestHarness>
    ));

    expect(screen.getByRole('region', { name: 'terraApplication.notifications.regionLabel' })).toBeInTheDocument();

    let hazardHighListItem = screen.getByLabelText('terraApplication.notificationBanner.alert', { selector: 'li' });
    expect(hazardHighListItem).toBeInTheDocument();
    expect(hazardHighListItem).toHaveAttribute('aria-posinset', '1');
    expect(hazardHighListItem).toHaveAttribute('aria-setsize', '2');

    const hazardMediumListItem = screen.getByLabelText('terraApplication.notificationBanner.warning', { selector: 'li' });
    expect(hazardMediumListItem).toBeInTheDocument();
    expect(hazardMediumListItem).toHaveAttribute('aria-posinset', '2');
    expect(hazardMediumListItem).toHaveAttribute('aria-setsize', '2');

    view.rerender((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" />
      </NotificationBannersTestHarness>
    ));

    hazardHighListItem = screen.getByLabelText('terraApplication.notificationBanner.alert', { selector: 'li' });
    expect(hazardHighListItem).toBeInTheDocument();
    expect(hazardHighListItem).toHaveAttribute('aria-posinset', '1');
    expect(hazardHighListItem).toHaveAttribute('aria-setsize', '1');

    view.rerender(<NotificationBannersTestHarness />);

    expect(screen.getByTestId('notification-banners-list').childElementCount).toBe(0);
  });

  test('should provide components that render banners with custom actions', () => {
    const mockAction = { text: 'Test Action', onClick: jest.fn() };

    render((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" bannerAction={mockAction} />
      </NotificationBannersTestHarness>
    ));

    const action = screen.getByText('Test Action');
    expect(action).toBeInTheDocument();

    userEvent.click(action);

    expect(mockAction.onClick).toHaveBeenCalled();
  });

  test('should provide components that render dismiss-able banners', async () => {
    const mockOnRequestClose = jest.fn();

    const view = render((
      <NotificationBannersTestHarness>
        <NotificationBanner variant="hazard-high" description="High Hazard Test Description" onRequestClose={mockOnRequestClose} />
      </NotificationBannersTestHarness>
    ));

    const dismissButton = screen.getByText('terraApplication.notificationBanner.dismiss');
    expect(dismissButton).toBeInTheDocument();

    userEvent.click(dismissButton);

    expect(mockOnRequestClose).toHaveBeenCalled();

    view.rerender(<NotificationBannersTestHarness />);

    // Make sure the removal text for screen readers gets cleaned up after a timeout
    await waitFor(() => expect(screen.getByTestId('removed-banner-log')).not.toHaveTextContent('terraApplication.notifications.totalCountLabel'), { interval: 1000, timeout: 4000 });
  });
});
