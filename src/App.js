
import './App.css';
import {Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<ProductDetails />} />  
      </Routes>      
    </div>
  );
}

export default App;
