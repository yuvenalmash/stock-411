import { Link, useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const quote = location.state;
  return (
    <>
      <Link to="/">back</Link>
      <h2>
        Details:&nbsp;
        {quote['01. symbol']}
      </h2>
      <p>
        Price:&nbsp;
        {quote['05. price']}
        $
      </p>
      <p>
        Open:&nbsp;
        {quote['02. open']}
      </p>
      <p>
        High:&nbsp;
        {quote['03. high']}
      </p>
      <p>
        Low:&nbsp;
        {quote['04. low']}
      </p>
      <p>
        Volume:&nbsp;
        {quote['06. volume']}
      </p>
      <p>
        Latest trading day:&nbsp;
        {quote['07. latest trading day']}
      </p>
      <p>
        Previouse close:&nbsp;
        {quote['08. previous close']}
      </p>
      <p>
        Change:&nbsp;
        {quote['09. change']}
      </p>
      <p>
        Change percent:&nbsp;
        {quote['10. change percent']}
      </p>
    </>
  );
};

export default Details;
