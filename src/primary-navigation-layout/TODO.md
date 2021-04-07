# PrimaryNavigationLayout

## Description

The PrimaryNavigationLayout is a Layout, a class of component generally
tasked with the organization and positioning of content (Pages, nested layouts,
or otherwise uncodified components). Additional UI may be included on a per-layout basis.
Layouts may also provide navigation workflows using the included NavigationItem component.

The PrimaryNavigationLayout is specifically responsible for:

* Rendering controls for high-level (global) application features
  * application heading
  * extensions
  * user information
  * concept banner
  * about/settings/help
  * navigation controls
* Rendering a variety of content, including distinct navigable endpoints using the NavigationItem API.

## TODO

* Add back renderPage prop when Page work is completed
* Add renderPage prop back to NavigationItem as well
* Add back session user/actions integrations when those contexts are completed
* Add aria-label to nav element once we figure out naming
* Remove this file