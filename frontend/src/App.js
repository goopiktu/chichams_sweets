// Components
import Homepage from './components/homepage/homepage.jsx'
import CustomerForm from './components/form/form.jsx'
import PopupCalendar from './components/calendar/calendar.jsx'
import ProductCatalog from './components/product_catalog/product_catalog.jsx';
import AboutUs from './components/about_us/about_us.jsx';

// Bootstrap CSS
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
        <Route path='/Calendar' element={<PopupCalendar/>}/>
        <Route path='/Products' element={<ProductCatalog/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
