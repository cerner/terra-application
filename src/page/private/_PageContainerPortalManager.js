class PageContainerPortalManager {
  constructor(containerRef) {
    this._containerRef = containerRef;
    this._nodeMap = {};

    this.pagePresentationCallback = undefined;
  }

  hideAncestors(key) {
    if (!this._containerRef.current) {
      return;
    }

    const nodeData = this._nodeMap[key];

    if (!nodeData) {
      return;
    }

    if (this._containerRef.current.contains(nodeData.element)) {
      nodeData.lastScrollPosition = nodeData.element.querySelector('[data-page-overflow-container]').scrollTop;
      this._containerRef.current.removeChild(nodeData.element);
    }

    if (nodeData.ancestor) {
      this.hideAncestors(nodeData.ancestor);
    }
  }

  getNode(pageKey, ancestorPageKey, pageTitleId) {
    if (!this._containerRef.current) {
      return null;
    }

    const existingNode = this._nodeMap[pageKey];

    if (existingNode) {
      return existingNode.element;
    }

    if (this._nodeMap[ancestorPageKey]?.child) {
      // duplicate page request
      return null;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.position = 'relative';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';

    this._nodeMap[pageKey] = {
      ancestor: ancestorPageKey,
      element: newPortalElement,
      child: undefined,
      pageTitleId,
    };

    if (this._nodeMap[ancestorPageKey]) {
      this._nodeMap[ancestorPageKey].child = pageKey;
    }

    this._containerRef.current.appendChild(newPortalElement);
    this._containerRef.current.setAttribute('aria-labelledby', pageTitleId);

    this.hideAncestors(ancestorPageKey);

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(pageKey);
    }

    return newPortalElement;
  }

  releaseNode(pageKey) {
    if (!this._containerRef.current) {
      return;
    }

    const page = this._nodeMap[pageKey];

    if (!page) {
      return;
    }

    if (this._containerRef.current.contains(page.element)) {
      this._containerRef.current.removeChild(page.element);
    }

    if (this._nodeMap[page.ancestor]) {
      this._nodeMap[page.ancestor].child = undefined;

      this._containerRef.current.appendChild(this._nodeMap[page.ancestor].element);
      this._containerRef.current.setAttribute('aria-labelledby', this._nodeMap[page.ancestor].pageTitleId);

      this._nodeMap[page.ancestor].element.querySelector('[data-page-overflow-container]').scrollTop = this._nodeMap[page.ancestor].lastScrollPosition;
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(page.ancestor);
    }

    this._nodeMap[pageKey] = undefined;
  }
}

export default PageContainerPortalManager;
