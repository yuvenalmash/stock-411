import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../__mocks__/test-utils';
import Homepage from '../features/homepage/Homepage';

describe('Homepage.js component', () => {
  test('renders Homepage component', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText('Tech Stock')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('STATS BY COMPANY')).toBeInTheDocument();
    });
  });
});
