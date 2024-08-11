import { useEffect, useState } from "react"; 
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
    const { name: { common },capital } = country;
   
    return (
      
       <div className="countrysubdiv">
       <h4>{common}</h4>
       <p>{capital}</p>
       </div>
     
    );
  })
}
    </>
  );
}

export default Country;