import React, { Fragment, useState, useContext, useEffect } from 'react';
import Pais from './Pais';
import  { StateContext } from '../../context/StateContext';



const ListadoPaises = () => {

  
  const [ busqueda, guardarBusqueda ] = useState();
  const { all } = useContext(StateContext);
  let countries = all.countries;
  const [ paises, guardarPaises ] = useState([]);
 
  


  useEffect(() => {

    if(busqueda){
      guardarPaises(filterCountries( busqueda ));
    }
  }, [busqueda])

  
  const actualizar = e =>{
    e.preventDefault();
    guardarBusqueda(e.target.value);
    document.getElementById("input").scrollIntoView({
      block: "center"
    });
  }
  
  const filterCountries = (query) => {
    return countries.filter((c) => {
      //console.log(c);
        return c.country.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
    })
  }
 
    return ( 

     
     <Fragment>
   {}
 <div className="item card border-secondary mb-4 d-flex center">
 <h4 id="busqueda">Buscar País</h4>
 <div className="form-group col-sm-8 item center ">
  <input className="form-control form-control-lg mt-3" type="text"
  id="input"
  name="pais"
  placeholder="Ej: Uruguay"  
  onChange={ actualizar } 
  value={ busqueda }/>
</div>
</div>
    <table className="table table-hover">
    <thead>
      <tr>
      <th scope="col" className="columnaIndex textsm" style={{ paddingRight: "0"}}> Nº</th>
      <th scope="col" className="columnaIndex textsm" style={{ paddingRight: "0"}}> </th>
        <th scope="col" className="columnaPais textsm" style={{ paddingRight: "0", width:"15%"}}>País</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Casos</th>
       {/* <th id="tultimos" scope="col" className="columnaAncha textsm" style={{ paddingRight: "0"}}>Ultimos casos</th>*/}
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Activos</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Críticos</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>Recuperados</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "1px", justifyContent: "center",paddingLeft: "1px"  }}>Fallecidos</th>
        <th scope="col" className="columna textsm" style={{ paddingRight: "0"}}>  Gráfico </th>
        {/* <th id="tfallecidos" scope="col" className="columnaUltima textsm" style={{ paddingRight: "0"}}>Ultimos fallecimientos</th>*/}
      </tr>
    </thead>
    <tbody>
    { 

      busqueda ? (paises.map( ( c, index ) => (
        <Pais 
            key= { index }
            index= { index }
            pais = { c } />
        )
    ) ) : (countries.map( ( c, index ) => (
      <Pais 
          key= { index }
          index= { index }
          pais = { c } />
      )
  ) )
}
    </tbody>
    </table>
    </Fragment>
        );
}
 
export default ListadoPaises;