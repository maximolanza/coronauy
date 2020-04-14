import React, { Fragment } from 'react';

const Barra = ( index, max, pais ) => {

    const cases = 79;
    const recovered = 2;
    const deaths = 5;


    return ( 
        <Fragment>
        
        <div className="progress" style={{height: '1.5rem'}}>
        <h6 style={{ marginRight: "5px", marginBottom: "1px", }}> { pais.country }  </h6>
            <div className="progress-bar bg-info" role="progressbar" style={{ width: cases+'%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> 79</div>
            <div className="progress-bar bg-success" role="progressbar" style={{ width: recovered+'%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">2</div>
            <div className="progress-bar danger" role="progressbar" style={{ width: deaths+'%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">5</div>
        </div>
        </Fragment>
     );
}
 
export default Barra;