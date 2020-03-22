import React, { Fragment, useState, useContext, useEffect } from 'react';
import Pais from './Pais';
import  { StateContext } from '../../context/StateContext';



const ListadoPaises = () => {

  const { all } = useContext(StateContext);
  const countries = all.countries;
  const global = all.global;

  // Descomentar para calcular maximos valores de ProgressBar
/*
       let maxC = 0;
       let maxR = 0;
       let maxD = 0;
       
       if ( countries ){
        countries.map((c) => {
          if (c.cases > maxC ) {
            maxC = c.cases;
          }
          if (c.recovered > maxR ) {
            maxR = c.recovered;
          }

          if (c.deaths > maxD ) {
            maxD = c.deaths;
          }

         
          
         })
   console.log(maxC + ' ' + maxR + ' ' + maxD);

        }

        */
    return ( 

      /* Descomentar para obtener la CARD que contiene las ProgressBar */
      
        /*<div className="itemListado card border-secondary mb-3 d-flex">
            <div className="card-header">Listado de paises</div>
            <div className="card-body paises">
     
    { countries.map( ( c, index ) => (
                    //console.log(c),
                    <Pais 
                        key= { index }
                        index= { index }
                     
                        maxC = { global.cases}
                        maxR = { global.cases}
                        maxD = { global.cases }
                        pais = { c } />
                    )
                ) 
     }
           </div>
    </div>*/
    
    <table className="table table-hover">
    <thead>
      <tr>
      <th scope="col" className="columnaIndex textsm" style={{ paddingRight: "0"}}> Nº</th>
        <th scope="col" className="columnaPais textsm" style={{ paddingRight: "0", width:"10%"}}>País</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Casos</th>
       {/* <th id="tultimos" scope="col" className="columnaAncha textsm" style={{ paddingRight: "0"}}>Ultimos casos</th>*/}
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Activos</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Críticos</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Recuperados</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "1px", justifyContent: "center" }}>Fallecidos</th>
       {/* <th id="tfallecidos" scope="col" className="columnaUltima textsm" style={{ paddingRight: "0"}}>Ultimos fallecimientos</th>*/}
      </tr>
    </thead>
    <tbody>
    { countries.map( ( c, index ) => (
      <Pais 
          key= { index }
          index= { index }
          pais = { c } />
      )
  ) 
}
    </tbody>
    </table>
 
        );
}
 
export default ListadoPaises;