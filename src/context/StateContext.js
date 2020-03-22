import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const StateContext = createContext();

// Provider: Donde se encuentran las funciones y el state
const StateProvider = (props) => {


  const [all, saveAll] = useState({
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

  const obtenerDatos = () => {

    const callApi = async () => {
      const urlGlobal = `https://corona.lmao.ninja/all`;
      const urlCountries = `https://corona.lmao.ninja/countries?sort=cases`;
      const urlUruguay = `https://corona.lmao.ninja/countries/uruguay`;
      const urlChina = `https://corona.lmao.ninja/countries/china`;
      const urlHistoricaluy = `https://corona.lmao.ninja/historical/uruguay`;

      const [cglobal, ccountries, curuguay, cchina,chistoricaluy] = await Promise.all([
        axios(urlGlobal),
        axios(urlCountries),
        axios(urlUruguay),
        axios(urlChina),
        axios(urlHistoricaluy)
      ]);
      const timeline = chistoricaluy.data.timeline ;
    
      saveAll({
        countries: ccountries.data,
        uruguay: curuguay.data,
        global: cglobal.data,
        china: cchina.data,
        historicaluy: timeline,
        casesuy : timeline.cases,
        recovereduy: timeline.recovered,
        deathsuy: timeline.deaths,
      })
    }
    callApi();
  };

  return (
    <StateContext.Provider
      value={{
        all
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}

export default StateProvider;