// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isHousebroken: PropTypes.bool.isRequired,
});

export default { dogShape };
