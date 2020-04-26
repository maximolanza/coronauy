import React, { useContext } from 'react';
import ContadorGlobal from './ContadorGlobal';
import { StateContext } from '../context/StateContext';

import Skeleton from '@material-ui/lab/Skeleton';


const Global = () => {

    const { all } = useContext(StateContext);

    const global = all.global;

    const { cases, deaths, recovered, tests, active, critical } = global;

    const countries = all.countries;

    /* let activeTotal = 0;
     countries.map((c) => (
         activeTotal += c.active
     )
     )
 
     let criticalTotal = 0;
     countries.map((c) => (
         criticalTotal += c.critical
     )
     )*/

    const formatDots = (number) => {
        return number ? Number(number).toLocaleString('de-DE') : 0;
    }
    return (
        <div className="item card border-secondary mb-3 d-flex">
            <div className="card-header">Global</div>
            <div className="card-body">

                {cases ?
                    <ul className="list-group">

                        <ContadorGlobal className="contaodr"
                            indicador="Tests:"
                            valor={formatDots(tests)} />

                        <ContadorGlobal className="contaodr"
                            indicador="Casos:"
                            valor={formatDots(cases)} />

                        <ContadorGlobal className="contaodr"
                            indicador="Activos:"
                            valor={formatDots(active)} />

                        <ContadorGlobal className="contaodr"
                            indicador="Criticos:"
                            valor={formatDots(critical)} />

                        <ContadorGlobal className="contaodr"
                            indicador="Recuperados:"
                            valor={formatDots(recovered)} />

                        <ContadorGlobal className="contaodr"
                            indicador="Fallecidos:"
                            valor={formatDots(deaths)} />




                    </ul>

                    :

                    <div className="grid-item" style={{ height: "100%" }}>

                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />
                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />
                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />
                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />
                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />
                        <Skeleton className="item" variant="rect" width={5} height={"2rem"} style={{ margin: "20px" }} animation="wave" />

                    </div>
                }
            </div>
        </div>





    );
}

export default Global;

