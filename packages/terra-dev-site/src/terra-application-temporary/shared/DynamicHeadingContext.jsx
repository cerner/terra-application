import React from 'react';

const DynamicHeadingContext = React.createContext(1);

const useDynamicHeading = () => {
  const headingLevel = React.useContext(DynamicHeadingContext);
  return {
    level: Math.min(headingLevel, 6),
  };
};

const DynamicHeading = (props) => {
  const { level } = useDynamicHeading();

  const Element = `h${level}`;

  return <Element {...props} />;
};

const DynamicHeadingProvider = ({ children, isRoot }) => {
  const headingLevel = React.useContext(DynamicHeadingContext);

  return (
    <DynamicHeadingContext.Provider value={isRoot ? 1 : headingLevel + 1}>
      {children}
    </DynamicHeadingContext.Provider>
  );
};

export default DynamicHeadingContext;
export { useDynamicHeading, DynamicHeadingProvider, DynamicHeading };
