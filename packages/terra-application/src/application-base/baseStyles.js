import logger from '../utils/logger';
import './Base.scss';

// Check to ensure dir attribute is set on html element
if (!document.documentElement.hasAttribute('dir')) {
  // eslint-disable-next-line
  logger.warn('The html element is missing the dir attribute. ' + 
  'For Terra\'s directionality-based styles to render correctly, '
  + 'add dir="ltr" or dir="rtl" to the html element.');
}
