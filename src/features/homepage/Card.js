import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { quote } = props;
  return (
    <section className="card">
      <header>
        <h2>
          Card&nbsp;
          {quote['01. symbol']}
        </h2>
      </header>
      <ul id="card-list">
        <p id="card-price">
          Price:&nbsp;
          {quote['05. price']}
          $
        </p>
        <p id="card-change">
          change:&nbsp;
          {quote['09. change']}
        </p>
      </ul>
      <Link to="details" state={quote}>Details</Link>
    </section>
  );
};

export default Card;

Card.propTypes = {
  quote: PropTypes.objectOf(PropTypes.string).isRequired,
};
