Changelog
=========

Unreleased
----------

1.22.0 - (April 28, 2020)
------------------
### Changed
* Update terra-toolkit dev dependency to 6.0.0

1.21.0 - (April 22, 2020)
------------------
### Added
* Added theme strategy guide

1.20.0 - (April 14, 2020)
------------------
### Added
* Added event listener to ApplicationBase via custom React hook to support test overrides.

1.19.0 - (April 7, 2020)
------------------
### Added
* Added theme context to allow components to access the current theme.

### Removed
* As a part of updating theme provider the `themeIsGlobal` prop has been removed. While this traditionally would be considered non-passive, this prop was broken, removing it is considered a bug fix.

1.18.0 - (March 24, 2020)
------------------
### Changed
* Updated locale to be an optional prop for application base

### Added
* Added a fallback strategy for obtaining the preferred language from the browser if no locale is provided in application base

1.17.0 - (February 18, 2020)
------------------
### Changed
* Open up the version for terra-application-navigation

1.16.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

1.15.0 - (January 7, 2020)
------------------
### Added
* Adding ApplicationNavigation component with framework integration.
* Adding ApplicationIntlContext and integrating throughout.
* Adding Demo page for user demonstration and guidance.
* Adding getUnsavedChangesPromptOptions utility function that generates NavigationPromptCheckpoint prompt configurations.

### Changed
* Using getUnsavedChangesPromptOptions to generate default navigation prompt options within ModalManager/SlidePanelManager if prompt options are not otherwise provided.

### Fixed
* Fix jest test by updating jest snapshot.

1.14.2 - (November 22, 2019)
------------------
### Fixed
* Renamed terra-application folder to just application.

1.14.1 - (November 22, 2019)
------------------
### Fixed
* terra-dev-site doc to reference lib folder.

1.14.0 - (November 21, 2019)
------------------
### Changed
* Bumped minimum minor dependency versions of terra-disclosure-manager, terra-modal-manager, terra-slide-panel-manager, and terra-navigation prompt

### Added
* Added ApplicationLoadingOverlay, ApplicationErrorBoundary, and NavigationPrompt handling to ModalManager/SlidePanelManager disclosure content
* Added more documentation to support the added features
* Added custom prop support to ApplicationLoadingOverlayProvider

1.13.0 - (October 30, 2019)
------------------
### Added
* Added ApplicationLoadingOverlay and ApplicationErrorBoundary
* Integrated ApplicationLoadingOverlay and ApplicationErrorBoundary into ApplicationBase
* Added NavigationPrompt handling to ApplicationBase

1.12.0 - (October 21, 2019)
------------------
### Changed
* Minor dependency updates

1.11.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

1.10.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

1.9.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

1.8.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

1.7.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files

1.6.0 - (August 21, 2019)
------------------
### Changed
* Replaced Object.assign syntax with Object spread syntax

1.5.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

1.4.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

1.3.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

1.3.0 - (July 23, 2019)
------------------
### Changed
* Normalized terra-doc-template dev dependency version to match other terra-framework packages

1.2.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

1.1.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (July 2, 2019)
------------------
* Initial release
