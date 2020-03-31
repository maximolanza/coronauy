import React, { Fragment } from 'react';


//import { StateContext } from '../context/StateContext';
import Chart from './Chart';

const CountryChart = ({ casesCountry, deathsCountry, country }) => {

    //const { all } = useContext(StateContext);
    //const country = all.uruguay;


    const { cases, deaths } = country;

    const convertDate = str => {
        const dateParts = str.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2] + '20';
        let c = new Date(year, month, day);
        // Se resta 1 día por diferencia de fecha de carga de datos del dataset
        c.setDate(c.getDate() - 1);
        return c.getFullYear() + '-' + c.getMonth() + '-' + c.getDate();

    }


    const convertDateWithoutSubstractOneDay = str => {
        const dateParts = str.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2] + '20';
        return year + '-' + month + '-' + day;

    }


    const casos = casesCountry;
    const fallecidos = deathsCountry;

    let dataCases = [];
    let dataDeaths = [];
    let lastDay = '';

    const correccionDia = (dia, valorActual) => {
        let valorFinal = valorActual;
        if (country.country === "Uruguay") {
            if (dia === '2020-3-22') {
                valorFinal = parseInt('158');
            } else if (dia === '2020-3-21') {
                valorFinal = parseInt('135');
            }
        }
        return valorFinal;
    }

    const limpiar = text => {
        return text.replace("\"", "").replace("\"", "").replace("\\", "").replace("\\", "").replace("}", "").replace("{", "").replace("\"", "");
    }

    let strcasos = JSON.stringify(casos).split(',');
    let indexCero = 0;

    // Saber el index del primer dia con casos
    for (let i2 = 0; i2 < strcasos.length; i2++) {
        strcasos[strcasos.length - 1] = strcasos[strcasos.length - 1].replace("}", "").replace("{", "");
        const caso2 = strcasos[i2].split(':');
        if (parseInt(caso2[1]) > 0) {
            indexCero = i2;
            break;
        }
    }

    for (let i = indexCero; i < strcasos.length - 1; i++) {
        strcasos[strcasos.length - 1] = strcasos[strcasos.length - 1].replace("}", "").replace("{", "");
        const caso = strcasos[i].split(':');
        console.log(country.country + ' ' + limpiar(caso[0]));
        dataCases.push({
            //Corrigo el día para que no quede mal en el chart
            y: correccionDia(convertDate(limpiar(caso[0])), parseInt(caso[1])),
            label: convertDate(limpiar(caso[0]))
        })
        lastDay = convertDateWithoutSubstractOneDay(limpiar(caso[0]));
    }
    dataCases.push({
        y: cases,
        label: lastDay,
    })

    let strfallecidos = JSON.stringify(fallecidos).split(',');

    for (let i = indexCero; i < strfallecidos.length - 1; i++) {
        strfallecidos[0] = strfallecidos[0].replace("{", "");
        strfallecidos[strfallecidos.length - 1] = strfallecidos[strfallecidos.length - 1].replace("}", "");
        const caso = strfallecidos[i].split(':');
        dataDeaths.push({
            y: parseInt(caso[1]),
            label: convertDate(limpiar(caso[0]))
        })
    }
    dataDeaths.push({
        y: deaths,
        label: lastDay
    })

    const options = {
        animationEnabled: false,
        title: {
            text: "Histórico - " + country.country
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
            name: "Fallecidos",
            showInLegend: true,
            dataPoints: dataDeaths
        }
    
        ]
    };

    //Evito que se cargu el chart si no tiene elementos.
    const estaVacio = casesCountry.length < 3;
    const mensajeError = `Ups! No se encontraron datos historicos para ${country.country}`;

    return (
        <Fragment>
        { !estaVacio ?
            ( <Chart
                options={options}
            />)
            :
            (mensajeError)
        }
      </Fragment>
    );
}

export default CountryChart;