import React from 'react';
import ContadorUruguay from './ContadorUruguay';

const Uruguay = ({ uruguay }) => {


    const { country,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        critical } = uruguay;


    return (
        <div className="card border-secondary mb-3" style={{ maxwidth: "30rem", width: "40%"}}>
            <div className="card-header"> {country} </div>
            <div className="card-body">
                <ul className="list-group">

                    <ContadorUruguay className="contaodr"
                        indicador="Casos:"
                        valor={cases} />
                    { /*
                <ContadorUruguay className="contaodr"
                    indicador="Casos HOY:"
                    valor={todayCases} />
                    */}


                    <ContadorUruguay className="contaodr"
                        indicador="Recuperados:"
                        valor={recovered} />
                       
                        { /*
                    <ContadorUruguay className="contaodr"
                        indicador="Criticos:"
                        valor={critical} />
                        */}

                    <ContadorUruguay className="contaodr"
                        indicador="Fallecidos:"
                        valor={deaths} />

                    { /*<ContadorUruguay className="contaodr"
                    indicador="Fallecidos hoy:"
                    valor={todayDeaths} />
                    */}


                </ul>
            </div>
        </div>

    );
}

export default Uruguay;