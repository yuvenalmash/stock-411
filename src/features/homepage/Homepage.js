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
    <>
      <h1>Home Page</h1>
      <ul>
        {quotes.map((quote) => (
          <Card
            key={quote['01. symbol']}
            quote={quote}
          />
        ))}
      </ul>
    </>
  );
};

export default Homepage;
