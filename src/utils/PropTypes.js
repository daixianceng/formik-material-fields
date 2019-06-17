import PropTypes from 'prop-types';

export const fieldShape = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
});

export const formShape = PropTypes.shape({
  touched: PropTypes.object,
  errors: PropTypes.object,
  setFieldTouched: PropTypes.func,
});

export const optionShape = PropTypes.shape({
  label: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
});
