import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from './components/Loading';
import Catalog from './pages/catalog';
import Cart from './pages/cart';

const App = () => {
  return (
    <div className="App">
     <Router>
        <Suspense fallback={<Loading cover="content" />}>
            <Routes>
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
            </Routes>
        </Suspense>
     </Router>
    </div>
  );
}

export default App;
