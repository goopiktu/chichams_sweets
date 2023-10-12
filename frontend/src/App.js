import Homepage from './components/homepage/homepage.jsx'
import CustomerForm from './components/form/form.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Form' element={<CustomerForm/>} />
      </Routes>
    
    </BrowserRouter>


    
  );
}

export default App;
