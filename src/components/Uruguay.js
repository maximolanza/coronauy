import React, { useContext } from 'react';
import ContadorUruguay from './ContadorUruguay';
import { StateContext } from '../context/StateContext';
import { formatNumber } from './helper';


const Uruguay = () => {

    const { all } = useContext(StateContext);
    const uruguay = all.uruguay;



    let { country,
        cases,
        todayCases,
        deaths,
        active,
        todayDeaths,
        recovered,
        critical,
        tests } = uruguay;


    /*if (cases < 494) {
        cases = 494;
        active = cases - (recovered + deaths);
    }*/

    const formatDots = (number) =>{
        return number ? Number(number).toLocaleString('de-DE') : 0;
    }

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
                        indicador="Tests:"
                        valor={ formatDots(tests) } />

                    <ContadorUruguay className="contaodr"
                        indicador="Casos:"
                        valor={ formatDots(cases) } />
                    {   // Descomentar para obtener los casos del día 
                        /*
                    <ContadorUruguay className="contaodr"
                    indicador="Casos HOY:"
                    valor={todayCases} />
                    */}
                    <ContadorUruguay className="contaodr"
                        indicador="Activos:"
                        valor={ formatDots(active) } />

                    <ContadorUruguay className="contaodr"
                        indicador="Criticos:"
                        valor={formatDots(critical) } />

                    <ContadorUruguay className="contaodr"
                        indicador="Recuperados:"
                        valor={ formatDots(recovered) } />

                    <ContadorUruguay className="contaodr"
                        indicador="Fallecidos:"
                        valor={ formatDots(deaths) } />

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