// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  yearsEmployed: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default employeeShape;
