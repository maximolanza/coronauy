import React, { Fragment, useState, useEffect } from 'react';
import Global from './components/Global';
import Uruguay from './components/Uruguay';
import Footer from './components/Footer';
import Alerta from './components/Alerta';
import axios from 'axios';

function App() {

  const [global, saveGlobal] = useState(
    {
      cases: 0,
      deaths: 0,
      recovered: 0
    }
  );


  const [uruguay, saveUruguay] = useState(
    {
      country: "",
      cases: 0,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  )

  useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = () => {

    const callApi = async () => {
      const urlGlobal = `https://corona.lmao.ninja/all`;
      const urlCountries = `https://corona.lmao.ninja/countries`;

      const [cglobal, curuguay] = await Promise.all([
        axios(urlGlobal),
        axios(urlCountries)
      ]);

      console.log(cglobal.data);

      curuguay.data.map((c) => {
        if (c.country === "Uruguay") {
          console.log("resultado: " + c.country);
          saveUruguay(c);
          console.log(c)
          return curuguay;
        }

        //console.log( c.country);

      })


      saveGlobal(cglobal.data);

    }

    callApi();
  }


  return (
    <Fragment>
      <Alerta />
      <h2 className="title text-center">Monitoreo</h2>
      <div className="container">
        
        <div className="row">
        <div className="grid-item">
          <div className="item">
            <Global
              global={global}
            />
            </div>
         </div>  
         <div className="grid-item">
         <div className="item">
            <Uruguay
              uruguay={uruguay}
            />
            </div>
         </div>
         </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
