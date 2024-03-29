import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BsGraphUp, BsFillBarChartLineFill, BsFillCalculatorFill,
  BsFillCalendar2DateFill, BsFillPieChartFill, BsFillRssFill,
  BsChatQuoteFill, BsCoin, BsCpuFill, BsGraphDown, BsTerminalFill,
} from 'react-icons/bs';
import {
  RiAtLine, RiCloudLine, RiCodeBoxFill, RiBaseStationLine,
  RiComputerLine, RiRadarFill, RiSave3Fill, RiWifiFill,
} from 'react-icons/ri';
import { selectAllQuotes, selectState, fetchQoutes } from './homepageSlice';
import Card from './Card';
import './css/Homepage.css';

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
        <div id="leftNav" />
        Tech Stock
        <div id="rightNav" />
      </nav>
      <header id="home-header">
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
      <div id="separator"><h3>STATS BY COMPANY</h3></div>
      <div id="home-list-container">
        <ul id="home-list">
          {quotes.map((quote) => (
            <li key={quote.ticker}>
              <Card
                quote={quote}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Homepage;
