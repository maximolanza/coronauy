import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const StateContext = createContext();

// Provider: Donde se encuentran las funciones y el state
const StateProvider = (props) => {
  const [ countryForSearch, saveCountryForSearch] = useState('');
  const [ historicalCases, saveHistoricalCases] = useState({});
  const [ historicalDeaths, saveHistoricalDeaths] = useState({});
  const [ historicalRecovered, saveHistoricalRecovered] = useState({});
  const [ showModal, saveShowModal] = useState(false);
  const [ currentCountryData, saveCurrentCountryData ] = useState({});
  const [ cargandoHistorico, saveCargandoHistorico ] = useState(true);
  const [ cargandoWeb, saveCargandoWeb ] = useState(true);

  const [ all, saveAll] = useState({
    countries: [],
    uruguay: {},
    global: {},
    china: {},
    historicaluy: {},
    casesuy: {},
    recovereduy: {},
    deathsuy: {}
  })

  // ejecutar el llamado a la api
  useEffect(() => {
    obtenerDatos();
  }, [])

  const modalCall = (country, pais) =>{
        saveCountryForSearch(country);
        saveCurrentCountryData( pais );
        getHistoricalData(country);

  }
  const getHistoricalData = (countryForSearch) => {
    saveCargandoHistorico(true);
    if (countryForSearch) {
      const callApiCountry = async () => {
        
        const urlHistoricalCountry = `https://corona.lmao.ninja/v2/historical/${countryForSearch.toString().toLowerCase()}`;
        
        const [historicalCountry/*, dataCountry*/] = await Promise.all([
          axios(urlHistoricalCountry),

        ]);

        const timeline = historicalCountry.data.timeline;

        saveHistoricalCases( JSON.stringify(timeline.cases));
        saveHistoricalDeaths( JSON.stringify(timeline.deaths));
        saveHistoricalRecovered( JSON.stringify(timeline.recovered) )
      }
      callApiCountry();
      saveShowModal(true);
      
      setTimeout(() => {
        saveCargandoHistorico(false);
      }, 2000);

    }
    

  }






  const obtenerDatos = () => {

    const callApi = async () => {
      
      const urlGlobal = `https://corona.lmao.ninja/v2/all`;
      const urlCountries = `https://corona.lmao.ninja/v2/countries?sort=cases`;
      const urlUruguay = `https://corona.lmao.ninja/v2/countries/uruguay`;
      const urlHistoricaluy = `https://corona.lmao.ninja/v2/historical/uruguay`;


      const [cglobal, ccountries, curuguay, chistoricaluy] = await Promise.all([
        axios(urlGlobal),
        axios(urlCountries),
        axios(urlUruguay),
        axios(urlHistoricaluy)
      ]);
      
      const timeline = chistoricaluy.data.timeline;

      saveAll({
        countries: ccountries.data,
        uruguay: curuguay.data,
        global: cglobal.data,
        casesuy: timeline.cases,
        deathsuy: timeline.deaths,
        recovereduy: timeline.recovered,
      })

      saveCargandoWeb(false);
    }
    callApi();
  };

  return (
    <StateContext.Provider
      value={{
        all,
        showModal,
        historicalCases,
        historicalDeaths,
        historicalRecovered,
        countryForSearch,
        currentCountryData,
        cargandoHistorico, 
        cargandoWeb,
        saveCargandoWeb,
        saveCargandoHistorico,
        getHistoricalData,
        saveCountryForSearch,
        saveHistoricalCases,
        saveHistoricalDeaths,
        saveShowModal,
        saveCurrentCountryData,
        modalCall

      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}

export default StateProvider;