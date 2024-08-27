import React, {useState,useEffect} from 'react'



const Countries = () => {
    const [countries, setCountries] = useState([])
    
    const fetchCountryData = async()=>{
        const response = await fetch('/data.json')
        const countries = await response.json()
        setCountries(countries)
     }
    useEffect(()=>{
     fetchCountryData()
    }, [])
  return (
    <>
     <section className='grid'>
     {countries.map((country)=>{
        const{cca3, flags, name, population, region, capital} = country
        return(
        <article key={cca3}>
            <img src={flags.svg}  alt={name} className='country-flag'/>
        <div className='details'>
        <h4 className='country-name'>{name}</h4>
        <h4>Population: <span>{population}</span></h4>
         <h4>Region: <span>{region}</span></h4>
         <h4>Capital: <span>{capital}</span></h4>
        </div>
        </article>
        )
    })}
     </section>
       </>
  )
}

export default Countries