# PrimaryNavigationLayout

## Description

The PrimaryNavigationLayout component is a layout, a class of component generally
tasked with the organization and positioning of content (Pages, nested layouts, or uncodified components).
Additional UI may be included on a per-layout basis.
Layouts may also provide navigation using the included NavigationItem component and APIs.

The PrimaryNavigationLayout is specifically responsible for:

* Rendering controls for high-level (global) application features
  * application heading
  * extensions
  * user information
  * concept banner
  * about/settings/help
* Rendering a variety of content, including distinct navigable endpoints using the NavigationItem API.

## TODO

* Add back renderPage prop when Page work is completed
* Add renderPage prop back to NavigationItem as well
* Add back session user/actions integrations when those contexts are completed
* Add aria-label to nav element once we figure out naming