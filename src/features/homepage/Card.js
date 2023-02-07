import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { quote } = props;
  console.log(`state1 = ${quote}`);
  return (
    <>
      <h2>
        Card&nbsp;
        {quote['01. symbol']}
      </h2>
      <p>
        Price:&nbsp;
        {quote['05. price']}
        $
      </p>
      <p>
        change:&nbsp;
        {quote['09. change']}
      </p>
      <Link to="details" state={quote}>Details</Link>
    </>
  );
};

export default Card;

Card.propTypes = {
  quote: PropTypes.objectOf(PropTypes.string).isRequired,
};
