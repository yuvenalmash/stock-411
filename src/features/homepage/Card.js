import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Card.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  SiIbm, SiMicrosoft, SiApple, SiAmazon,
} from 'react-icons/si';
import { TbBrandMeta } from 'react-icons/tb';

export const Img = ({ symbol }) => {
  if (symbol === 'MSFT') {
    return <SiMicrosoft className="logos" />;
  } if (symbol === 'IBM') {
    return <SiIbm className="logos" />;
  } if (symbol === 'AAPL') {
    return <SiApple className="logos" />;
  } if (symbol === 'AMZN') {
    return <SiAmazon className="logos" />;
  } if (symbol === 'META') {
    return <TbBrandMeta className="logos" />;
  }
  return <img src="" alt="not found" />;
};

const Card = (props) => {
  const { quote } = props;
  return (
    <section className="card">
      <header id="card-header">
        <div id="imgContainer">
          <Img symbol={quote.ticker} />
        </div>
        <Link to="details" state={quote}><BsArrowRightCircle id="enterIcon" /></Link>
      </header>
      <h2>
        {quote.ticker}
      </h2>
      <p id="card-price">
        {quote.price}
        $
      </p>
    </section>
  );
};

export default Card;

Card.propTypes = {
  quote: PropTypes.shape({
    ticker: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
Img.propTypes = {
  symbol: PropTypes.string.isRequired,
};
