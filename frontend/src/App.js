// Components
import Homepage from './components/homepage/homepage.jsx'
import CustomerForm from './components/form/form.jsx'
import ProductCatalog from './components/product_catalog/product_catalog.jsx';
import AboutUs from './components/about_us/about_us.jsx';
import ContactUs from './components/contact_us/contactus.jsx';
import Calendar from './components/calendar/calendar.jsx';

// Bootstrap CSS
import Receipt from './components/receipt/receipt.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

// Router Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Form' element={<CustomerForm/>} />
        <Route path='/Form/:itemName' element={<CustomerForm/>} />
        <Route path='/Products' element={<ProductCatalog/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/receipt' element={<Receipt/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/calendar' element={<Calendar/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
