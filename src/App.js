import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Country from './country/Country';
import CountryDetails from './country/CountryDetails';

function App() {
  return (
    <>
     <h2 className='titlecountry'>Create React App</h2>
     <div className='countrymaindiv'>
      <Router>
        <Routes>
          <Route path="/"  element={<Country/>}/> 
          <Route path="/details" element={<CountryDetails />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
