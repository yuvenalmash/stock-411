import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './features/homepage/Homepage';
import Gainers from './features/gainers/Gainers';
import Losers from './features/losers/Losers';
import Movers from './features/movers/Movers';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="gainers" element={<Gainers />} />
        <Route path="losers" element={<Losers />} />
        <Route path="movers" element={<Movers />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
