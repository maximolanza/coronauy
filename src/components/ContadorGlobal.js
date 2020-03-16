import React from 'react';


const ContadorGlobal = ({ indicador, valor }) => {
    return ( 
        
        <li className="list-group-item d-flex justify-content-between align-items-center mr-2" style={{ "fontSize": "1rem"}}>
        { indicador }
        <span className="badge badge-primary badge-pill ml-3 notice" style={{ "fontSize": "1rem"}}> { valor }</span>
      </li>
        
        );
}
 
export default ContadorGlobal;