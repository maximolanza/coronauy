import React, { Fragment, useState, useEffect } from 'react';
import Global from './components/Global';
import Uruguay from './components/Uruguay';
import axios from 'axios';

function App() {

  const [ global, saveGlobal ] = useState(
    {
      cases: 0,
      deaths: 0,
      recovered: 0
      }
  );


  const [ uruguay, saveUruguay ] = useState(
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

    const callApi = async () =>{
      const urlGlobal = `https://corona.lmao.ninja/all`;
      const urlCountries = `https://corona.lmao.ninja/countries`;

      const [ cglobal, curuguay ] = await Promise.all([
        axios(urlGlobal),
        axios(urlCountries)
      ]);

      console.log(cglobal.data);

       curuguay.data.map((c) => {
        if( c.country === "Uruguay" ){
         console.log("resultado: " + c.country);
         saveUruguay(c);
         console.log( c)
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
      <div className="alert alert-dismissible alert-warning">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h4 className="alert-heading">Recordá!</h4>
        <p className="mb-0"> Lavarse en forma correcta es una de las formas más eficaces de combatir muchas enfermedades transmisibles entre ellas el virusde la enfermedad COVID -19.</p>
      </div>

      <div>
        <div className="row">
          <h2 className="appheader">Monitoreo</h2>
        </div>
        <div className="row cglobal">
        <div className="row cglobalspace">
          <Global 
            global = { global } 
          />
       
          <Uruguay 
            uruguay = { uruguay } 
          />
        </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
