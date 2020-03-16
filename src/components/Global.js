import React from 'react';
import ContadorGlobal from './ContadorGlobal';


const Global = ({ global }) => {

    const { cases, deaths, recovered } = global;
    return (
        <div className="card border-secondary mb-3" style={{ maxwidth: "20rem" }}>
            <div className="card-header">Global</div>
            <div className="card-body">
                <ul className="list-group">

                    <ContadorGlobal className="contaodr"
                        indicador="Casos:"
                        valor={cases} />

                    <ContadorGlobal className="contaodr"
                        indicador="Recuperados:"
                        valor={recovered} />

                    <ContadorGlobal className="contaodr"
                        indicador="Fallecidos:"
                        valor={deaths} />




                </ul>
            </div>
        </div>





    );
}

export default Global;

/* { global.data.map( country =>
                    if(country.country === "uruguay"){
                        <ContadorGlobal
                            indicador="Infectados"
                            valor={167000} />
                    }*/