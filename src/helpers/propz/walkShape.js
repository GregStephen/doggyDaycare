// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dogId: PropTypes.string.isRequired,
  doggoImage: PropTypes.string.isRequired,
  doggoName: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  employeeImage: PropTypes.string.isRequired,
  employeeName: PropTypes.string.isRequired,
});

export default walkShape;
