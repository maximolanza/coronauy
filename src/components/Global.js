import React, { useContext } from 'react';
import ContadorGlobal from './ContadorGlobal';
import { StateContext } from '../context/StateContext';



const Global = () => {

    const { all } = useContext(StateContext);

    const global = all.global;

    const { cases, deaths, recovered } = global;

    const countries = all.countries;

    let activeTotal = 0;
    countries.map((c) => (
        activeTotal += c.active
    )
    )

    let criticalTotal = 0;
    countries.map((c) => (
        criticalTotal += c.critical
    )
    )


    return (
        <div className="item card border-secondary mb-3 d-flex">
            <div className="card-header">Global</div>
            <div className="card-body">
                <ul className="list-group">

                    <ContadorGlobal className="contaodr"
                        indicador="Casos:"
                        valor={cases} />

                    <ContadorGlobal className="contaodr"
                        indicador="Activos:"
                        valor={activeTotal} />

                    <ContadorGlobal className="contaodr"
                        indicador="Criticos:"
                        valor={criticalTotal} />

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

