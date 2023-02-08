import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BsGraphUp, BsFillBarChartLineFill, BsFillCalculatorFill,
  BsFillCalendar2DateFill, BsFillPieChartFill, BsFillRssFill,
  BsChatQuoteFill, BsCoin, BsCpuFill, BsGraphDown, BsTerminalFill,
  BsMic, BsGear, BsChevronLeft,
} from 'react-icons/bs';
import {
  RiAtLine, RiCloudLine, RiCodeBoxFill, RiBaseStationLine,
  RiComputerLine, RiRadarFill, RiSave3Fill, RiWifiFill,
} from 'react-icons/ri';
import { selectAllQuotes, selectState, fetchQoutes } from './homepageSlice';
import Card from './Card';
import './css/Homepage.css';

// import headerImg from '../../assets/images/homeHeader1.png';

const Homepage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectState);
  const contents = useSelector(selectAllQuotes);
  useEffect(() => {
    if (contents.length === 0 && status === 'idle') {
      dispatch(fetchQoutes());
    }
  });
  const quotes = useSelector(selectAllQuotes);
  return (
    <main className="homepage">
      <nav id="home-nav">
        <BsChevronLeft className="navIcon" />
        Tech Stock
        <div id="rightNav">
          <BsMic className="navIcon" />
          <BsGear className="navIcon" />
        </div>
      </nav>
      <header id="home-header">
        {/* <img id="home-img" src={headerImg} alt="stock-market" /> */}
        <div className="headerImg">
          <BsGraphUp className="homeImg" />
          <RiComputerLine className="homeImg" />
          <BsFillBarChartLineFill className="homeImg" />
          <BsFillCalculatorFill className="homeImg" />
          <RiBaseStationLine className="homeImg" />
          <BsFillCalendar2DateFill className="homeImg" />
          <BsFillPieChartFill className="homeImg" />
          <BsFillRssFill className="homeImg" />
          <BsChatQuoteFill className="homeImg" />
          <BsCoin className="homeImg" />
          <BsCpuFill className="homeImg" />
          <BsGraphDown className="homeImg" />
          <BsTerminalFill className="homeImg" />
          <RiAtLine className="homeImg" />
          <RiCloudLine className="homeImg" />
          <RiCodeBoxFill className="homeImg" />
          <RiRadarFill className="homeImg" />
          <RiSave3Fill className="homeImg" />
          <RiWifiFill className="homeImg" />
        </div>
        <h1>
          Tech
          <br />
          Stock
          <br />
          411
        </h1>
      </header>
      <div id="separator"><h2>STATS BY COMPANY</h2></div>
      <ul id="home-list">
        {quotes.map((quote) => (
          <li key={quote.ticker}>
            <Card
              quote={quote}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Homepage;
