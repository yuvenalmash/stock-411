import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './features/homepage/Homepage';
import Details from './features/homepage/Details';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/stock-411/">
        <Route index element={<Homepage />} />
        <Route path="/stock-411/details" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
