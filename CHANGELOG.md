# Changelog

## Unreleased

* Breaking
  * Upgraded to intl v5

* Removed
  * References to terra-base and moved terra-base logic to terra-application-base

* Added
  * Added i18n logic

* Changed
  * Updated application-base to initialize `inert`.
  * Injecting an empty link with id `inert-style` to head in order avoid CSP violations.
  * Updated browserlist config.
  * Use terra-cli for releasing and change log updating.

## 1.35.0 - (September 22, 2020)

* Changed
  * Updated documentation for ApplicationBase and its unsaved changes handling across browsers.
  * Updated error boundary jest snapshots.

## 1.34.0 - (September 8, 2020)

* Added
  * Added Notification Banners and provide in disclosure manager content container.

## 1.33.0 - (September 3, 2020)

* Added
  * Added `aria` role to announce error boundary error text.

## 1.32.0 - (September 1, 2020)

* Added
  * Added EventEmitter
  * Add terra-notification-dialog dependency to project

* Changed
  * Update terra-navigation-prompt to use the latest version
  * Update terra-application/lib/notification-prompt to use the ContentLayoutAsList component provided from terra-notification-dialog
      to apply the correct list styles when an unsaved dialog is presented.

## 1.31.1 - (Aug 19, 2020)

* Changed
  * Reverted "Updated `uuid` dependency to `v8.0.0`" due to IE10 compatibility issues

## 1.31.0 - (Aug 18, 2020)

* Changed
  * Updated `uuid` dependency to `v8.0.0`.

* Fixed
  * Fix ApplicationStatusOverlayProvider contextType warning

## 1.30.0 - (Aug 11, 2020)

* Added
  * Added ApplicationStatusOverlay
  * Added ApplicationStatusOverlayProvider to ApplicationBase, ApplicationNavigation, ModalManager and SlidePanelManager
* Fixed
  * Fixed firefox tests for application navigation
* Changed
  * Update changelog formatting

## 1.29.1 - (July 15, 2020)

* Fixed
  * Returning Promise from registerDismissCheck implementation

## 1.29.0 - (July 15, 2020)

* Fixed
  * Allowed components disclosed by the DisclosureManager to override the default registerDismissCheck implementation

## 1.28.0 - (July 7, 2020)

* Changed
  * Corrected typo in `.gitignore` file.
  * Updated Docs to point to main branch for terra-toolkit-boneyard.

## 1.27.0 - (June 23, 2020)

* Changed
  * Updated reference links.
  * Changed the file extension for the breakpoints doc.
  * Update translated navigation prompt messages
* Fixed
  * Fixed ErrorBoundary intl prop-type checking

## 1.26.0 - (June 16, 2020)

* Added
  * Added a logger utility.
* Changes
  * Updated errorBoundary to have a default error message when there is none provided.

## 1.25.0 - (June 9, 2020)

* Changed
  * Updated eslint-config-terra to @cerner/eslint-config-terra v^4.0.0
  * Removed unnecessary disabled rules.

## 1.24.0 - (May 12, 2020)

* Added
  * Track callback functions to close currently disclosed content. Each disclosure will be registered to the same stack. This will allow disclosures to be be closed by external events like the Android back button.

## 1.23.0 - (May 5, 2020)

* Added
  * Added data attribute `data-terra-application-base` to application base. This will be used as the base selector for wdio full stack integration tests.

## 1.22.0 - (April 28, 2020)

* Changed
  * Update terra-toolkit dev dependency to 6.0.0

## 1.21.0 - (April 22, 2020)

* Added
  * Added theme strategy guide

## 1.20.0 - (April 14, 2020)

* Added
  * Added event listener to ApplicationBase via custom React hook to support test overrides.

## 1.19.0 - (April 7, 2020)

* Added
  * Added theme context to allow components to access the current theme.
* Removed
  * As a part of updating theme provider the `themeIsGlobal` prop has been removed. While this traditionally would be considered non-passive, this prop was broken, removing it is considered a bug fix.

## 1.18.0 - (March 24, 2020)

* Changed
  * Updated locale to be an optional prop for application base
* Added
  * Added a fallback strategy for obtaining the preferred language from the browser if no locale is provided in application base

## 1.17.0 - (February 18, 2020)

* Changed
  * Open up the version for terra-application-navigation

## 1.16.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.15.0 - (January 7, 2020)

* Added
  * Adding ApplicationNavigation component with framework integration.
  * Adding ApplicationIntlContext and integrating throughout.
  * Adding Demo page for user demonstration and guidance.
  * Adding getUnsavedChangesPromptOptions utility function that generates NavigationPromptCheckpoint prompt configurations.
* Changed
  * Using getUnsavedChangesPromptOptions to generate default navigation prompt options within ModalManager/SlidePanelManager if prompt options are not otherwise provided.

* Fixed
  * Fix jest test by updating jest snapshot.

## 1.14.2 - (November 22, 2019)

* Fixed
  * Renamed terra-application folder to just application.

## 1.14.1 - (November 22, 2019)

* Fixed
  * terra-dev-site doc to reference lib folder.

## 1.14.0 - (November 21, 2019)

* Changed
  * Bumped minimum minor dependency versions of terra-disclosure-manager, terra-modal-manager, terra-slide-panel-manager, and terra-navigation prompt
* Added
  * Added ApplicationLoadingOverlay, ApplicationErrorBoundary, and NavigationPrompt handling to ModalManager/SlidePanelManager disclosure content
  * Added more documentation to support the added features
  * Added custom prop support to ApplicationLoadingOverlayProvider

## 1.13.0 - (October 30, 2019)

* Added
  * Added ApplicationLoadingOverlay and ApplicationErrorBoundary
  * Integrated ApplicationLoadingOverlay and ApplicationErrorBoundary into ApplicationBase
  * Added NavigationPrompt handling to ApplicationBase

## 1.12.0 - (October 21, 2019)

* Changed
  * Minor dependency updates

## 1.11.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 1.10.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 1.9.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 1.8.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

## 1.7.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 1.6.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 1.5.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 1.4.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 1.3.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 1.3.0 - (July 23, 2019)

* Changed
  * Normalized terra-doc-template dev dependency version to match other terra-framework packages

## 1.2.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 1.1.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 1.0.0 - (July 2, 2019)

* Initial release
