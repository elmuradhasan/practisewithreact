import { useEffect, useState } from "react"; 
import {  Link } from 'react-router-dom';
import axios from "axios"
const Country = () =>{
    const [countries, setcountries] = useState([]);
    useEffect(() => {
    getCountries();
    },[])
    
    const getCountries = ()=>{
         axios("https://restcountries.com/v3.1/all").then(responnse=>
            setcountries(responnse.data)
         ).catch(error=>console.log(error));
    }
   
    
  return (
    < >
{
  countries.map((country, index) => {
    const { name: { common },capital, maps : {googleMaps} } = country;
      
    return (
      
       <Link to="details">
        <div className="countrysubdiv">
       <h2>Country: {common}</h2>
       <p>Capital:{capital}</p>
       <img src={country.flags.png} alt={country.flag} className="flagclass" />
         <a className="googleMaps" href={googleMaps} > Google Map</a>
       </div>
        </Link>
     
    );
  })
}
    </>
  );
}

export default Country;