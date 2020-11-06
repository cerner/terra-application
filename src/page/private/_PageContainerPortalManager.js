import { getPersistentScrollMap, applyScrollData } from '../../utils/scroll-persistence/scroll-persistence';

class PageContainerPortalManager {
  constructor(containerRef) {
    this.containerRef = containerRef;
    this.nodeMap = {};
  }

  setPagePresentationCallback(callback) {
    this.pagePresentationCallback = callback;
  }

  getNode({ nodeId, ancestorNodeId, setPageActive }) {
    if (!this.containerRef.current) {
      return null;
    }

    const existingNode = this.nodeMap[nodeId];

    if (existingNode) {
      return existingNode.element;
    }

    if (this.nodeMap[ancestorNodeId]?.child) {
      // duplicate page request
      return null;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.position = 'relative';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';

    this.nodeMap[nodeId] = {
      ancestor: ancestorNodeId,
      element: newPortalElement,
      child: undefined,
      setPageActive,
    };

    if (this.nodeMap[ancestorNodeId]) {
      this.nodeMap[ancestorNodeId].child = nodeId;
    }

    this.containerRef.current.appendChild(newPortalElement);

    const ancestorNodeData = this.nodeMap[ancestorNodeId];
    if (ancestorNodeData && this.containerRef.current.contains(ancestorNodeData.element)) {
      ancestorNodeData.overflowData = getPersistentScrollMap(ancestorNodeData.element);

      const hasUnsafeElements = ancestorNodeData.element.querySelectorAll('iframe');
      if (hasUnsafeElements.length) {
        ancestorNodeData.element.style.display = 'none';
        ancestorNodeData.element.inert = true;
      } else {
        this.containerRef.current.removeChild(ancestorNodeData.element);
      }

      if (ancestorNodeData.setPageActive) {
        ancestorNodeData.setPageActive(false);
      }
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(nodeId);
    }

    if (setPageActive) {
      setPageActive(true);
    }

    return newPortalElement;
  }

  releaseNode({ nodeId }) {
    if (!this.containerRef.current) {
      return;
    }

    const page = this.nodeMap[nodeId];

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

      applyScrollData(visiblePageData.overflowData, visiblePageData.element);

      if (visiblePageData.setPageActive) {
        visiblePageData.setPageActive(true);
      }
    }

    if (this.pagePresentationCallback) {
      this.pagePresentationCallback(page.ancestor);
    }

    this.nodeMap[nodeId] = undefined;
  }
}

export default PageContainerPortalManager;
