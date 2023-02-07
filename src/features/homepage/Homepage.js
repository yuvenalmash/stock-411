import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAllQuotes, selectState, fetchQoutes } from './homepageSlice';
import Card from './Card';

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
  console.log(`quotes = ${JSON.stringify(quotes)}`);
  return (
    <main className="homepage">
      <nav id="home-nav">Tech Stock</nav>
      <header id="home-header">
        <h1>Tech Stock 411</h1>
      </header>
      <ul id="home-list">
        {quotes.map((quote) => (
          <Card
            key={quote['01. symbol']}
            quote={quote}
          />
        ))}
      </ul>
    </main>
  );
};

export default Homepage;
