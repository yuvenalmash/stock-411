import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../features/homepage/Card';

const mockQuote = {
  ticker: 'META',
  name: 'Meta Platforms Inc',
  exchange_short: 'NASDAQ',
  exchange_long: 'NASDAQ Stock Exchange',
  mic_code: 'XNAS',
  currency: 'USD',
  price: 183.5,
  day_high: 190.82,
  day_low: 182.94,
  day_open: 190.3,
  '52_week_high': 236.86,
  '52_week_low': 88.09,
  market_cap: 502465953792,
  previous_close_price: 191.71,
  previous_close_price_time: '2023-02-07T15:59:53.000000',
  day_change: -4.47,
  volume: 856883,
  is_extended_hours_price: false,
  last_trade_time: '2023-02-08T15:49:19.000000',
};

describe('Details.js component', () => {
  test('renders Details component', async () => {
    render(
      <BrowserRouter>
        <Card quote={mockQuote} />
      </BrowserRouter>,
    );
    expect(screen.getByText('META')).toBeInTheDocument();
    expect(screen.getByText(/183.5/i)).toBeInTheDocument();
  });
});

export default mockQuote;
