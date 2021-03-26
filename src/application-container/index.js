import ApplicationContainer from './ApplicationContainer';
import useActiveMainPage from './useActiveMainPage';
import ApplicationContainerContext, {
  useApplicationContainer,
  contextShape as applicationContainerContextShape,
} from './ApplicationContainerContext';

export default ApplicationContainer;
export {
  useActiveMainPage,
  ApplicationContainerContext,
  useApplicationContainer,
  applicationContainerContextShape,
};
