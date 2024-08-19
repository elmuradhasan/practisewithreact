import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"; 
import  axios  from 'axios';

const CountryDetails = ()=>{
    const {  common } = useParams();
      console.log(common,"Salamm");
      
        const [countriesdetails, setcountriesdetails] = useState([]);
        useEffect(() => {
            getCountriesDetails();
        },[common])
    const getCountriesDetails = ()=>{
        axios(`https://restcountries.com/v3.1/name/${common}`).then(responnse=>
            setcountriesdetails(responnse.data)
        ).catch(error=>console.log(error));
   }
  
    return <>
      {
  countriesdetails.map((country, index) => {
    const { name: { common },capital, maps : {googleMaps},region } = country;     
    console.log(country,"mfdkl;m");
    
    return (
      <>
      <div className='detailmaindiv'>
      <h2>Country: {common}</h2>
       <p>Capital:{capital}</p>
       <img src={country.flags.png} alt={country.flag} className="flagclass" />
       <img src={country.coatOfArms.svg} alt={country.flag}  />
        <span>Region {region}</span>
         <a className="googleMaps" href={googleMaps} > Google Map</a>
      </div>
      </>
      
    );
  })
}
    </>
}
export  default CountryDetails;