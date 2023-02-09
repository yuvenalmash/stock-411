import { Link, useLocation } from 'react-router-dom';
import {
  BsMic, BsGear, BsChevronLeft, BsArrowRightCircle,
} from 'react-icons/bs';
import { Img } from './Card';
import './css/Homepage.css';
import './css/Details.css';

const Details = () => {
  const location = useLocation();
  const quote = location.state;
  return (
    <main className="details">
      <nav id="details-nav">
        <Link to="/stock-411/"><BsChevronLeft className="navIcon" /></Link>
        Company Details
        <div id="rightNav">
          <BsMic className="navIcon" />
          <BsGear className="navIcon" />
        </div>
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
      <ul id="details-list">
        <li>
          <p>Currency:</p>
          <div className="listRightSec">
            <p>{quote.currency}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Price:</p>
          <div className="listRightSec">
            <p>{quote.price}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Open:</p>
          <div className="listRightSec">
            <p>{quote.day_open}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>High:</p>
          <div className="listRightSec">
            <p>{quote.day_high}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Low:</p>
          <div className="listRightSec">
            <p>{quote.day_low}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Change:</p>
          <div className="listRightSec">
            <p>{quote.day_change}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Volume:</p>
          <div className="listRightSec">
            <p>{quote.volume}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Last trade time:</p>
          <div className="listRightSec">
            <p>{quote.last_trade_time}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Previouse close:</p>
          <div className="listRightSec">
            <p>{quote.previous_close_price}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Exchange:</p>
          <div className="listRightSec">
            <p>{quote.exchange_short}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Details;
