import { Link } from 'react-router-dom';

const Homepage = () => (
  <>
    <h1>Home Page</h1>
    <Link to="/">Homepage</Link>
    <Link to="gainers">Gainers</Link>
    <Link to="losers">Losers</Link>
    <Link to="movers">Movers</Link>
  </>
);

export default Homepage;
