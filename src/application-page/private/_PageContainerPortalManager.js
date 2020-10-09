class PageContainerPortalManager {
  constructor(containerRef) {
    this._containerRef = containerRef;
    this._nodeMap = {};
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

      setTimeout(() => { nodeData.setVisibility(false); }, 0);
    }

    if (nodeData.ancestor) {
      this.hideAncestors(nodeData.ancestor);
    }
  }

  getNode(pageKey, ancestorPageKey, setVisibility, pageTitleId) {
    if (!this._containerRef.current) {
      return;
    }

    const existingNode = this._nodeMap[pageKey];

    if (existingNode) {
      return existingNode.element;
    }

    if (this._nodeMap[ancestorPageKey]?.child) {
      // duplicate page request
      return undefined;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.position = 'relative';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';

    this._nodeMap[pageKey] = {
      ancestor: ancestorPageKey,
      element: newPortalElement,
      child: undefined,
      setVisibility,
      pageTitleId,
    };

    if (this._nodeMap[ancestorPageKey]) {
      this._nodeMap[ancestorPageKey].child = pageKey;
    }

    this._containerRef.current.appendChild(newPortalElement);
    this._containerRef.current.setAttribute('aria-labelledby', pageTitleId);

    this.hideAncestors(ancestorPageKey);

    setTimeout(() => {
      document.body.focus();
    }, 0);

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

      setTimeout(() => { this._nodeMap[page.ancestor].setVisibility(true); }, 0);
    }

    setTimeout(() => {
      document.body.focus();
    }, 0);

    this._nodeMap[pageKey] = undefined;
  }
}

export default PageContainerPortalManager;
