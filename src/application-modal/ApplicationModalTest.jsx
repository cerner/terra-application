import React from 'react';
import ReactDOM from 'react-dom';

const domNodes = {};

let portalIncrementer = 0;
const getPortalContainerId = () => (`portal-container-${portalIncrementer}`);

const getDomNode = (key) => {
  let portalContainer = document.querySelector(`#${getPortalContainerId()}`);
  if (!portalContainer) {
    portalContainer = document.createElement('div');
    portalContainer.id = getPortalContainerId();
    document.body.appendChild(portalContainer);
  }

  let node = domNodes[key];
  if (!node) {
    node = document.createElement('div');
    domNodes[key] = node;
  }

  if (!portalContainer.contains(node)) {
    portalContainer.appendChild(node);
  }

  return node;
};

const shuffle = () => {
  portalIncrementer++;
};

const removeDomNode = (key) => {
  const element = domNodes[key];

  document.body.removeChild(element);

  delete domNodes[key];
};

let modalComponentId = 0;
const ModalComponent = () => {
  const [incrementer, setIncrementer] = React.useState(0);
  const renderCountRef = React.useRef(++modalComponentId);
  console.log('rendering modal component');

  return (
    <div>
      Modal rendered
      {' '}
      {renderCountRef.current}
      {' '}
      time(s)
      {' '}
      {Date.now()}
      Count:
      {' '}
      {incrementer}
      <button
        type="button"
        onClick={() => {
          setIncrementer((val) => val + 1);
        }}
      >
      +
      </button>
    </div>
  );
};

let applicationModalId = 0;

const ApplicationModal = ({ content }) => {
  const [update, setUpdate] = React.useState(false);
  const modalKey = React.useRef(++applicationModalId);
  const portalElementRef = React.useRef(getDomNode(modalKey.current));

  React.useEffect(() => () => {
    removeDomNode(modalKey.current);
  }, []);

  console.log('rendering modal');

  return (
    <>
      <button type="button" onClick={() => { shuffle(); setUpdate((state) => !state); }}>Shuffle</button>
      {ReactDOM.createPortal(content, portalElementRef.current)}
    </>
  );
};

ApplicationModal.defaultProps = {
  content: <ModalComponent key="huh" />,
};

export default ApplicationModal;
export { ModalComponent };
