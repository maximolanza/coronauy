import React, { useContext } from 'react';
import Global from './components/Global';
import Uruguay from './components/Uruguay';
import Footer from './components/Footer';
import Alerta from './components/Alerta';
import ListadoPaises from './components/Listado/ListadoPaises';
import CountryChart from './components/CountryChart';
import { StateContext } from './context/StateContext';
import ModalChart from './components/Listado/ModalChart';

function App() {
   const { all } = useContext(StateContext);

  return (
    <div className="container">
      <Alerta />  
      <ModalChart/>
      <div className="row">

      <div className="grid-item" style={{ height: "100%"}}>
      <div className="item" style={{ marginRight: "0.8rem", marginLeft: "0"}}>
        <Uruguay
        />
      </div>
    </div>
    
        <div className="grid-item">
          <div className="item">
            <Global
            />
          </div>
        </div>
       

       
      </div>
      <div className="row">
      <div className="itemListado chart" >
      <CountryChart
    
      casesCountry = { all.casesuy }
      deathsCountry = { all.deathsuy }
      recoveredCountry = { all.recovereduy }
        country = { all.uruguay }
      />
      
      </div>
  </div>
    

<div className="row">
        <div className="itemListado">
          <ListadoPaises />
        </div>


      </div>

      <Footer />
    </div>
  );
}

export default App;
