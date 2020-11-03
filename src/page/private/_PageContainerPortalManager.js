import { getPersistentScrollMap, applyScrollData } from '../../utils/scroll-persistence/scroll-persistence';

class PageContainerPortalManager {
  constructor(containerRef) {
    this.containerRef = containerRef;
    this.nodeMap = {};
  }

  setPagePresentationCallback(callback) {
    this.pagePresentationCallback = callback;
  }

  getNode(pageKey, ancestorPageKey, pageTitleId) {
    if (!this.containerRef.current) {
      return null;
    }

    const existingNode = this.nodeMap[pageKey];

    if (existingNode) {
      return existingNode.element;
    }

    if (this.nodeMap[ancestorPageKey]?.child) {
      // duplicate page request
      return null;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.position = 'relative';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';

    this.nodeMap[pageKey] = {
      ancestor: ancestorPageKey,
      element: newPortalElement,
      child: undefined,
      pageTitleId,
    };

    if (this.nodeMap[ancestorPageKey]) {
      this.nodeMap[ancestorPageKey].child = pageKey;
    }

    this.containerRef.current.appendChild(newPortalElement);
    this.containerRef.current.setAttribute('aria-labelledby', pageTitleId);

    const ancestorNodeData = this.nodeMap[ancestorPageKey];
    if (ancestorNodeData && this.containerRef.current.contains(ancestorNodeData.element)) {
      ancestorNodeData.overflowData = getPersistentScrollMap(ancestorNodeData.element);

      const hasUnsafeElements = ancestorNodeData.element.querySelectorAll('iframe');
      if (hasUnsafeElements.length) {
        ancestorNodeData.element.style.display = 'none';
        ancestorNodeData.element.inert = true;
      } else {
        this.containerRef.current.removeChild(ancestorNodeData.element);
      }
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(pageKey);
    }

    return newPortalElement;
  }

  releaseNode(pageKey) {
    if (!this.containerRef.current) {
      return;
    }

    const page = this.nodeMap[pageKey];

    if (!page) {
      return;
    }

    if (this.containerRef.current.contains(page.element)) {
      this.containerRef.current.removeChild(page.element);
    }

    const visiblePageData = this.nodeMap[page.ancestor];
    if (visiblePageData) {
      visiblePageData.child = undefined;

      if (this.containerRef.current.contains(visiblePageData.element)) {
        visiblePageData.element.style.removeProperty('display');
        visiblePageData.element.inert = false;
      } else {
        this.containerRef.current.appendChild(visiblePageData.element);
      }

      this.containerRef.current.setAttribute('aria-labelledby', visiblePageData.pageTitleId);

      applyScrollData(visiblePageData.overflowData, visiblePageData.element);
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(page.ancestor);
    }

    this.nodeMap[pageKey] = undefined;
  }
}

export default PageContainerPortalManager;
