import { createContext } from 'react';
import PropTypes from 'prop-types';

const ActiveMainPageRegistrationContext = createContext();

const contextShape = {
  registerActiveMainPage: PropTypes.func,
};

export default ActiveMainPageRegistrationContext;
export { contextShape };
