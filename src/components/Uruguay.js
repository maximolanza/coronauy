import React, { useContext } from 'react';
import ContadorUruguay from './ContadorUruguay';
import { StateContext } from '../context/StateContext';



const Uruguay = () => {

    const { all } = useContext(StateContext);
    const uruguay = all.uruguay;

    const { country,
        cases,
        todayCases,
        deaths,
        active,
        todayDeaths,
        recovered,
        critical } = uruguay;




    return (
        <div className="item card border-secondary mb-3 d-flex" >
            <div className="card-header manito btn-primary btn-outline-warning"
                // Centro al elemento id=Uruguay de la lista de paises al hacer click
                onClick={() => {
                    //Controlo que exista el elemento con ID antes de centrarlo
                    if (document.getElementById("Uruguay")) {
                        document.getElementById("Uruguay").scrollIntoView({
                            block: "center"
                        });
                    }
                }
                }>
                <p style={{ margin: "0" }} className="linkUru" > {country} </p>

            </div>
            <div className="card-body">
                <ul className="list-group">

                    <ContadorUruguay className="contaodr"
                        indicador="Casos:"
                        valor={cases} />
                    {   // Descomentar para obtener los casos del día 
                        /*
                    <ContadorUruguay className="contaodr"
                    indicador="Casos HOY:"
                    valor={todayCases} />
                    */}
                    <ContadorUruguay className="contaodr"
                        indicador="Activos:"
                        valor={active} />

                    <ContadorUruguay className="contaodr"
                        indicador="Criticos:"
                        valor={critical} />

                    <ContadorUruguay className="contaodr"
                        indicador="Recuperados:"
                        valor={recovered} />

                    <ContadorUruguay className="contaodr"
                        indicador="Fallecidos:"
                        valor={deaths} />

                    {  // Descomentar para obtener los fallecidos del día 
                        /*<ContadorUruguay className="contaodr"
                    indicador="Fallecidos hoy:"
                    valor={todayDeaths} />
                    */}


                </ul>
            </div>
        </div>

    );
}

export default Uruguay;