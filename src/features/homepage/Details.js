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
        <Link to="/"><BsChevronLeft className="navIcon" /></Link>
        Company Details
        <div id="rightNav">
          <BsMic className="navIcon" />
          <BsGear className="navIcon" />
        </div>
      </nav>
      <header id="home-header">
        <div className="headerImg">
          <Img symbol={quote['01. symbol']} />
        </div>
        <h2>
          Company:&nbsp;
          <br />
          {quote['01. symbol']}
        </h2>
      </header>
      <div id="separator"><h2>COMPANY BREAKDOWN</h2></div>
      <ul id="details-list">
        <li>
          <p>Price:</p>
          <div className="listRightSec">
            <p>
              {quote['05. price']}
              $
            </p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Open:</p>
          <div className="listRightSec">
            <p>{quote['02. open']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>High:</p>
          <div className="listRightSec">
            <p>{quote['03. high']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Low:</p>
          <div className="listRightSec">
            <p>{quote['04. low']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Volume:</p>
          <div className="listRightSec">
            <p>{quote['06. volume']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Latest trading day:</p>
          <div className="listRightSec">
            <p>{quote['07. latest trading day']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Previouse close:</p>
          <div className="listRightSec">
            <p>{quote['08. previous close']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Change:</p>
          <div className="listRightSec">
            <p>{quote['09. change']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
        <li>
          <p>Change percent:</p>
          <div className="listRightSec">
            <p>{quote['10. change percent']}</p>
            <BsArrowRightCircle id="enterIcon" />
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Details;
