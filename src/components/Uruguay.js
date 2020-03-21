import React, {  useContext } from 'react';
import ContadorUruguay from './ContadorUruguay';
import  { StateContext } from '../context/StateContext';



const Uruguay = () => {

    //const { uruguay } = useContext(StateContext);
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
            <div className="card-header manito"
            onClick={ () =>{ document.getElementById("Uruguay").scrollIntoView({
                block: "center"
              }); }}> <p style={{ margin: "0" }} className="linkUru" > {country} </p></div>
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
                        indicador="Activos:"
                        valor={active} />

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