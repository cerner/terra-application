import PropTypes from 'prop-types';

const actionItemPropType = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string,
  onAction: PropTypes.func,
  icon: PropTypes.element,
  isSelected: PropTypes.bool,
}));

const actionGroupPropType = PropTypes.shape({
  items: PropTypes.arrayOf(actionItemPropType),
});

const actionsPropType = PropTypes.arrayOf(PropTypes.oneOfType([actionItemPropType, actionGroupPropType]));

export default {
  actionItemPropType, actionGroupPropType, actionsPropType,
};

export {
  actionItemPropType, actionGroupPropType, actionsPropType,
};
