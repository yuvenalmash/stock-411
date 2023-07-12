import { Link, useLocation } from 'react-router-dom';
import {
  BsChevronLeft,
} from 'react-icons/bs';
import { Img } from './Card';
import './css/Homepage.css';
import './css/Details.css';

const Details = () => {
  const location = useLocation();
  const quote = location.state;

  const lastTradeTime = `${quote.last_trade_time.slice(0, 10)} ${quote.last_trade_time.slice(11, 19)}`;

  const quoteItems = {
    Currency: quote.currency,
    Price: quote.price,
    Open: quote.day_open,
    High: quote.day_high,
    Low: quote.day_low,
    Change: quote.day_change,
    Volume: quote.volume,
    'Last trade time': lastTradeTime,
    'Previouse close': quote.previous_close_price,
  };
  return (
    <main className="details">
      <nav id="details-nav">
        <Link to="/stock-411/" id="button"><BsChevronLeft className="navIcon" /></Link>
        Company Details
        <div id="rightNav" />
      </nav>
      <header id="home-header">
        <div className="headerImg">
          <Img symbol={quote.ticker} />
        </div>
        <h2>
          Company:&nbsp;
          <br />
          {quote.ticker}
        </h2>
      </header>
      <div id="separator"><h3>COMPANY BREAKDOWN</h3></div>
      <div id="details-list-container">
        <ul id="details-list">
          {Object.keys(quoteItems).map((key) => (
            <li key={key}>
              <p>
                {key}
                :
              </p>
              <div className="listRightSec">
                <p>{quoteItems[key]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Details;
