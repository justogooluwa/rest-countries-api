// import React, { useState, useEffect } from 'react';
// import Countries from './Countries';
// import Filter from './Filter';



// const CountryApp = () => {
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState('');
//   const [region, setRegion] = useState('');

//   const fetchCountryData = async () => {
//     const response = await fetch('./data.json');
//     const countries = await response.json();
//     setCountries(countries);
//   };

//   useEffect(() => {
//     fetchCountryData();
//   }, []);

//   const filteredCountries = countries.filter((country) => {
//     return (
//       country.name.common.toLowerCase().includes(search.toLowerCase()) &&
//       (region === 'Filter by region' || country.region === region)
//     );
//   });

//   return (
//     <>
//       <Filter setSearch={setSearch} setRegion={setRegion} />
//       <Countries countries={filteredCountries} />
//     </>
//   );
// };

// export default CountryApp;