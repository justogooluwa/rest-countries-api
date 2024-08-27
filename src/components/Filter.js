import React, { useState, useEffect } from "react";

const url = '/data.json';

const Filter = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Filter by region');

  const fetchCountryData = async (query = '', region = '') => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filteredCountries = data.filter(country => 
          (query === '' || country.name.toLowerCase().includes(query.toLowerCase())) &&
          (region === 'Filter by region' || country.region === region)
        );
      
      setCountries(filteredCountries);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    fetchCountryData(searchTerm, selectedRegion);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    fetchCountryData(searchTerm, e.target.value);
  };

  return (
    <div>
      <section className='filter'>
        <form className='form-control' onSubmit={(e) => e.preventDefault()}>
          <div className="search">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSearch}
            ></i>
            <input
              type='search'
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='Search for a country'
            />
          </div>
        </form>

        <div className='region-filter'>
          <select
            name='select'
            id='select'
            className='select'
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value='Filter by region'>Filter by region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </section>

      {
        countries.length > 0 ? (
          <section className='grid'>
            {countries.map((country) => (
              <article key={country.cca3}>
                <img src={country.flags.svg} alt={country.name} className='country-flag'/>
                <div className='details'>
                  <h4 className='country-name'>{country.name}</h4>
                  <h4>Population: <span>{country.population}</span></h4>
                  <h4>Region: <span>{country.region}</span></h4>
                  <h4>Capital: <span>{country.capital}</span></h4>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="empty">
            <h2>No Country found</h2>
          </div>
        )
      }
    </div>
  );
};

export default Filter;
