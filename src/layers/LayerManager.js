// import LayerTypes from './LayerTypes';

// class LayerTreeNode {
//   constructor(id, children) {
//     this._id = id;

//     this._children = [...children];
//   }

//   addChild(child) {
//     this._children = [...this._children, child];
//   }

//   removeChild(child) {
//     this._children = this._children.filter((c) => c !== child);
//   }

//   find(searchFunc) {
//     if (searchFunc(this)) {
//       return this;
//     }

//     let searchNode;
//     for (let i = 0; i < this._children.length; i++) {
//       searchNode = this._children[i].find(searchFunc);

//       if (searchNode) {
//         break;
//       }
//     }

//     return searchNode;
//   }

//   findById(id) {
//     return this.find((node) => node._id === id);
//   }
// }

// class LayerTree {
//   constructor() {
//     this._children = [];
//   }

//   addChild(child) {
//     this._children = [...this._children, child];
//   }

//   removeChild(child) {
//     this._children = this._children.filter((c) => c !== child);
//   }

//   find(id) {
//     let searchNode;
//     for (let i = 0; i < this._children.length; i++) {
//       searchNode = this._children[i].findById(id);

//       if (searchNode) {
//         break;
//       }
//     }

//     return searchNode;
//   }

//   find(searchFunc) {
//     if (searchFunc(this)) {
//       return this;
//     }

//     let searchNode;
//     for (let i = 0; i < this._children.length; i++) {
//       searchNode = this._children[i].find(searchFunc);

//       if (searchNode) {
//         break;
//       }
//     }

//     return searchNode;
//   }
// }

// class LayerManager {
//   constructor() {
//     this._tree = new LayerTree();

//     this._nodes = {};
//     this._addUpdates = [];
//     this._removeUpdates = [];
//   }

//   // const node = window.LayerManager.getNode(keyRef.current, parentLayerManager.layerId, parentLayerManager.layerIndex, layerType, parentLayerManager.parentLayerId);

//   getNode(portalKey, layerKey, layerIndex, layerType, parentLayerKey) {
//     const existingNode = this._tree.find(portalKey);

//     if (existingNode) {
//       return existingNode.element;
//     }

//     const newPortalElement = document.createElement('div');
//     newPortalElement.style.zIndex = 1;
//     newPortalElement.style.position = 'absolute';
//     newPortalElement.style.top = 0;
//     newPortalElement.style.bottom = 0;
//     newPortalElement.style.left = 0;
//     newPortalElement.style.right = 0;

//     const newTreeNode = new LayerTreeNode(portalKey, parentLayerKey);

//     const parentTreeNode = this._tree.find((n) => n.parentLayerId === parentLayerKey);

//     if (parentTreeNode) {
//       parentTreeNode.addChild(newTreeNode);
//     } else {
//       this._tree.setRoot(newTreeNode);
//     }

//     this._scheduleUpdate();

//     return newNode;
//   }

//   releaseNode(key) {
//     if (!this._nodes[key]) {
//       return;
//     }

//     this._removeUpdates.push(this._nodes[key]);

//     this._nodes = { ...this._nodes };
//     delete this._nodes[key];

//     this._scheduleUpdate();
//   }

//   _scheduleUpdate() {
//     if (this._updateTimeout) {
//       clearTimeout(this._updateTimeout);
//     }

//     this._updateTimeout = setTimeout(() => {
//       this._addUpdates.map((node) => {
//         if (!document.body.contains(node)) {
//           document.body.appendChild(node);
//         }
//       });

//       this._addUpdates = [];

//       this._removeUpdates.map((node) => {
//         if (document.body.contains(node)) {
//           document.body.removeChild(node);
//         }
//       });

//       this._removeUpdates = [];

//       document.dispatchEvent(new CustomEvent('terra-application.layer-manager.render-complete', {
//         detail: {
//           activeLayerId:
//         },
//       }));
//     }, 50);
//   }
// }

// export default LayerManager;
