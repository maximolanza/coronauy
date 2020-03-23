import React from 'react';
import Global from './components/Global';
import Uruguay from './components/Uruguay';
import Footer from './components/Footer';
import Alerta from './components/Alerta';
import ListadoPaises from './components/Listado/ListadoPaises';
import UruguayChart from './components/UruguayChart';


function App() {


  return (
    <div className="container">
      <Alerta />
      <h2 className="title text-center">Monitoreo</h2>


      <div className="row">
        <div className="grid-item">
          <div className="item">
            <Global
            />
          </div>
        </div>
        <div className="grid-item" style={{ height: "100%"}}>
          <div className="item" style={{ margin: "0"}}>
            <Uruguay
            />
          </div>
        </div>

       
      </div>
      <div className="row">
      <div className="itemListado chart" >
      <UruguayChart
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
