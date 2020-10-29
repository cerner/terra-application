class PageContainerPortalManager {
  constructor(containerRef) {
    this.containerRef = containerRef;
    this.nodeMap = {};
  }

  setPagePresentationCallback(callback) {
    this.pagePresentationCallback = callback;
  }

  // hideAncestors(key) {
  //   if (!this.containerRef.current) {
  //     return;
  //   }

  //   const nodeData = this.nodeMap[key];

  //   if (!nodeData) {
  //     return;
  //   }

  //   if (this.containerRef.current.contains(nodeData.element)) {
  //     nodeData.lastScrollPosition = nodeData.element.querySelector('[data-page-overflow-container]').scrollTop;
  //     this.containerRef.current.removeChild(nodeData.element);
  //   }

  //   if (nodeData.ancestor) {
  //     this.hideAncestors(nodeData.ancestor);
  //   }
  // }

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
      ancestorNodeData.lastScrollPosition = ancestorNodeData.element.querySelector('[data-page-overflow-container]').scrollTop;
      this.containerRef.current.removeChild(ancestorNodeData.element);
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

    if (this.nodeMap[page.ancestor]) {
      this.nodeMap[page.ancestor].child = undefined;

      this.containerRef.current.appendChild(this.nodeMap[page.ancestor].element);
      this.containerRef.current.setAttribute('aria-labelledby', this.nodeMap[page.ancestor].pageTitleId);

      this.nodeMap[page.ancestor].element.querySelector('[data-page-overflow-container]').scrollTop = this.nodeMap[page.ancestor].lastScrollPosition;
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(page.ancestor);
    }

    this.nodeMap[pageKey] = undefined;
  }
}

export default PageContainerPortalManager;
