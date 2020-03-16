import React from 'react';


const ContadorGlobal = ({ indicador, valor }) => {
    return ( 
        
        <li className="list-group-item d-flex justify-content-between align-items-center mr-2" style={{ "font-size": "1rem"}}>
        { indicador }
        <span className="badge badge-primary badge-pill ml-3 notice" style={{ "font-size": "1rem"}}> { valor }</span>
      </li>
        
        );
}
 
export default ContadorGlobal;