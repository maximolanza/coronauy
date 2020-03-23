import React, { useContext } from 'react';


import { StateContext } from '../context/StateContext';
import Chart from './Chart';

const UruguayChart = () => {
   
    const { all } = useContext(StateContext);
    const uruguay = all.uruguay;
    

    const { cases, deaths, recovered } = uruguay;
    const convertDate = str => {
        const dateParts = str.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2] + '20';
        return year + '-' + month + '-' + day;
    }

    const casos = all.casesuy;
    const recuperados = all.recovereduy;
    const fallecidos = all.deathsuy;

    let dataCases = [];
    let dataRecovered = [];
    let dataDeaths = [];

    const now = new Date();
    const filter = new Date('2020-03-13');
    const stringDate = (now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate());

    let strcasos = JSON.stringify(casos).split(',');
    const indexCero = strcasos.indexOf("\"3/13/20\":0");
    for (let i = 51; i < strcasos.length; i++) {
        strcasos[strcasos.length - 1] = strcasos[strcasos.length - 1].replace("}", "");
        const caso = strcasos[i].split(':');
        
            
            dataCases.push({
                y: parseInt(caso[1]),
                label: convertDate(caso[0].replace("\"", "").replace("\"", ""))
            })
    }
    dataCases.push({
        y: cases,
        label: stringDate
    })


    
    let strRecuperados = JSON.stringify(recuperados).split(',');
    for (let i = 51; i < strRecuperados.length; i++) {
        strRecuperados[0] = strRecuperados[0].replace("{", "");
        strRecuperados[strRecuperados.length - 1] = strRecuperados[strRecuperados.length - 1].replace("}", "");
        const caso = strRecuperados[i].split(':');
            dataRecovered.push({
                y: parseInt(caso[1]),
                label: convertDate(caso[0].replace("\"", "").replace("\"", ""))
            })
    }
    dataRecovered.push({
        y: recovered,
        label: stringDate
    })

    let strfallecidos = JSON.stringify(fallecidos).split(',');
    
    for (let i = 51; i < strfallecidos.length; i++) {
        strfallecidos[0] = strfallecidos[0].replace("{", "");
        strfallecidos[strfallecidos.length - 1] = strfallecidos[strfallecidos.length - 1].replace("}", "");
        const caso = strfallecidos[i].split(':');
            dataDeaths.push({
                y: parseInt(caso[1]),
                label: convertDate(caso[0].replace("\"", "").replace("\"", ""))
            })
    }
    dataDeaths.push({
        y: deaths,
        label: stringDate
    })

    const options = {
        animationEnabled: false,
        title: {
            text: "Histórico de Uruguay"
        },
        axisY: {
            title: "Cantidad de casos",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "Casos",
            showInLegend: true,
            dataPoints: dataCases
        },
        {
            type: "spline",
            name: "Recuperados",
            showInLegend: true,
            dataPoints: dataRecovered
        },
        {
            type: "spline",
            name: "Fallecidos",
            showInLegend: true,
            dataPoints: dataDeaths
        }
        ]
    }

    
    return (
        <Chart
        options = { options }
        />
    );
}

export default UruguayChart;