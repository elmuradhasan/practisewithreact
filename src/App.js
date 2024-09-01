import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Country from './country/Country';
import CountryDetails from './country/CountryDetails';
import Posts from './features/posts/Posts';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './Navbar';

function App() {
   return (
      <>
         <Provider store={store}>
            <div className="countrymaindiv">
               <Router>
                  <Navbar />

                  <Routes>
                     <Route path="/country" element={<Country />} />
                     <Route path="/posts" element={<Posts />} />
                     <Route
                        path="/details/:common"
                        element={<CountryDetails />}
                     />
                  </Routes>
               </Router>
            </div>
         </Provider>
      </>
   );
}

export default App;
