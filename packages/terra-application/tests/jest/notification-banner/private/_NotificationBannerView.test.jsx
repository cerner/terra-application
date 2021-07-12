import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import NotificationBannerView, { NotificationTypes } from '../../../../src/notification-banner/private/_NotificationBannerView';

import MockApplication from '../../MockApplication';

const TestNotificationBannerView = (props) => (
  <MockApplication>
    <NotificationBannerView {...props} />
  </MockApplication>
);

describe('NotificationBannerView', () => {
  test('should render banner with alert type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.ALERT} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.ALERT}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-alert')).toBeInTheDocument();
  });

  test('should render banner with error type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.ERROR} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.ERROR}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-error')).toBeInTheDocument();
  });

  test('should render banner with warning type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.WARNING} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.WARNING}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-warning')).toBeInTheDocument();
  });

  test('should render banner with unsatisfied type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.UNSATISFIED} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.UNSATISFIED}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-unsatisfied')).toBeInTheDocument();
  });

  test('should render banner with unverified type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.UNVERIFIED} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.UNVERIFIED}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-unverified')).toBeInTheDocument();
  });

  test('should render banner with advisory type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.ADVISORY} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.ADVISORY}`)).toBeInTheDocument();
  });

  test('should render banner with info type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.INFO} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.INFO}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-info')).toBeInTheDocument();
  });

  test('should render banner with success type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.SUCCESS} />);

    expect(screen.getByText(`terraApplication.notificationBanner.${NotificationTypes.SUCCESS}`)).toBeInTheDocument();
    expect(screen.getByTestId('banner-icon-success')).toBeInTheDocument();
  });

  test('should render banner with custom type', () => {
    render(<TestNotificationBannerView type={NotificationTypes.CUSTOM} title="Test Title" customIcon={<span data-testid="test-custom-icon" />} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByTestId('test-custom-icon')).toBeInTheDocument();
  });

  test('should render banner with dismiss button', () => {
    const mockOnDismiss = jest.fn();
    render(<TestNotificationBannerView type={NotificationTypes.ALERT} onDismiss={mockOnDismiss} />);

    userEvent.click(screen.getByText('terraApplication.notificationBanner.dismiss'));

    expect(mockOnDismiss).toHaveBeenCalled();
  });

  test('should render banner with action button', () => {
    render(<TestNotificationBannerView type={NotificationTypes.ALERT} action={<span data-testid="test-action" />} />);

    expect(screen.getByTestId('test-action')).toBeInTheDocument();
  });
});
