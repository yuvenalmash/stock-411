import { render, screen,} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../features/homepage/Card';

const mockQuote = {
  '01. symbol': 'IBM',
  '02. open': '135.8300',
  '03. high': '136.3200',
  '04. low': '134.9500',
  '05. price': '136.1800',
  '06. volume': '4841300',
  '07. latest trading day': '2023-02-06',
  '08. previous close': '136.9400',
  '09. change': '-0.7600',
  '10. change percent': '-0.5550%',
}

describe('Details.js component', () => {
  test('renders Details component', async () => {
    render(
      <BrowserRouter>
        <Card quote={mockQuote} />
      </BrowserRouter>,
    );
    expect(screen.getByText('IBM')).toBeInTheDocument();
    expect(screen.getByText(/136.1800/i)).toBeInTheDocument();
  });
});