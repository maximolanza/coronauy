import React, { Fragment } from 'react';


//import { StateContext } from '../context/StateContext';
import Chart from './Chart';

const CountryChart = ({ casesCountry, deathsCountry, recoveredCountry, country }) => {

    const { cases, deaths, recovered } = country;

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


    /*const convertDateWithoutSubstractOneDay = str => {
        const dateParts = str.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2] + '20';
        return year + '-' + month + '-' + day;

    }
*/

    const casos = casesCountry;
    const fallecidos = deathsCountry;
    const recuperados = recoveredCountry;

    let dataCases = [];
    let dataDeaths = [];
    let dataRecovered = [];
    let dataActivos = [];
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
    /* CASOS */
    let strcasos = JSON.stringify(casos).split(',');
    let indexCero = 0;

    // Saber el index del primer dia con casos
    for (let i2 = 0; i2 < strcasos.length; i2++) {
        strcasos[strcasos.length - 1] = strcasos[strcasos.length - 1].replace("}", "").replace("{", "");
        const caso2 = strcasos[i2].split(':');
        if (parseInt(caso2[1]) > 0) {
            indexCero = i2 - 1;
            break;
        }
    }

    const now = new Date();
    const stringDate = (now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate());
    lastDay = stringDate;


    //console.log('lastday ' + lastDay)
    /* CASOS */
    for (let i = indexCero; i < strcasos.length; i++) {
        if (strcasos[i]) {
            strcasos[strcasos.length - 1] = strcasos[strcasos.length - 1].replace("}", "").replace("{", "");
            const caso = strcasos[i].split(':');

            dataCases.push({
                //Corrijo el día para que no quede mal en el chart
                y: correccionDia(convertDate(limpiar(caso[0])), parseInt(caso[1])),
                label: convertDate(limpiar(caso[0]))
            })

            console.log('Fecha1: ' + limpiar(caso[0]) + ' Casos: ' + parseInt(caso[1]));
            //Descomentar para que la ultima fecha sea la del historico
            ///lastDay = convertDateWithoutSubstractOneDay(limpiar(caso[0]));
            // Día Actual
        }
    }
    // if( < cases){


        // Controlar cuando el casos actuales es menor que el ultimo del historico
    let value = {
        y: 0,
        label: ''
    };

    if (dataCases.length > 0) {
        value = dataCases[dataCases.length - 1];
        //console.log();
        if (value.y < cases) {
            dataCases.push({
                y: cases,
                label: lastDay,
            })
        }
    }


    // }


    /* Fallecidos */
    let strfallecidos = JSON.stringify(fallecidos).split(',');

    for (let i = indexCero; i < strfallecidos.length; i++) {
        if (strfallecidos[i]) {
            strfallecidos[0] = strfallecidos[0].replace("{", "");
            strfallecidos[strfallecidos.length - 1] = strfallecidos[strfallecidos.length - 1].replace("}", "");
            const caso = strfallecidos[i].split(':');
            dataDeaths.push({
                y: parseInt(caso[1]),
                label: convertDate(limpiar(caso[0]))
            })
        }
    }

/*
    let valueDeaths = {
        y: 0,
        label: ''
    };

    if (dataDeaths.length > 0) {
        valueDeaths = dataDeaths[dataDeaths.length - 1];
        //console.log();
        if (valueDeaths.y < deaths) {
            dataDeaths.push({
                y: deaths,
                label: lastDay
            })
        }
    }
*/
if (dataCases.length > 0) {
    value = dataCases[dataCases.length - 1];
    //console.log();
    if (value.y < cases) {
        dataDeaths.push({
            y: deaths,
            label: lastDay
        })
    }
}
  




    /* RECUPERADOS */

    let strrecuperados = JSON.stringify(recuperados).split(',');

    for (let i = indexCero; i < strrecuperados.length; i++) {
        if (strrecuperados[i]) {
            strrecuperados[0] = strrecuperados[0].replace("{", "");
            strrecuperados[strrecuperados.length - 1] = strrecuperados[strrecuperados.length - 1].replace("}", "");
            const caso = strrecuperados[i].split(':');
            dataRecovered.push({
                y: parseInt(caso[1]),
                label: convertDate(limpiar(caso[0]))
            })
        }
    }

/*
    let valueRecovereds = {
        y: 0,
        label: ''
    };

    if (dataDeaths.length > 0) {
        valueRecovereds = dataDeaths[dataDeaths.length - 1];
        //console.log();
        if (valueRecovereds.y < deaths) {
            dataRecovered.push({
                y: recovered,
                label: lastDay
            })
        }
    }
*/

if (dataCases.length > 0) {
    value = dataCases[dataCases.length - 1];
    //console.log();
    if (value.y < cases) {
        dataRecovered.push({
            y: recovered,
            label: lastDay
        })
    }
}
   





    /* ACTIVOS */

    // Recorro los casos totales
    for (let ic = 0; ic < dataCases.length; ic++) {
        // Creo variables para guardar los numeros
        let c = dataCases[ic];
        // en 'number' guardo los casos en cada dia del array
        let number = c.y;
        // en recovered voy a guardar la cantidad de recuperados en el mismo dia del array de casos
        let recovered = 0;
        // en recovered voy a guardar la cantidad de fallecidos en el mismo dia del array de casos
        let death = 0;
        let a = {
            y: 0,
            label: ''
        };
        // Solo hago el calculo si tengo  casos > 0
        if (number > 0) {
            // Recorro los recuperados y capturo el numero en 'recovered' cuando es el mismo dia que current item
            for (let ir = 0; ir < dataRecovered.length; ir++) {
                let r = dataRecovered[ir];
                if (c.label === r.label) {
                    recovered = r.y;
                }
            }
            // Recorro los fallecidos y capturo el numero en 'deaths' cuando es el mismo dia que current item
            for (let id = 0; id < dataDeaths.length; id++) {
                let d = dataDeaths[id];
                if (c.label === d.label) {
                    death = d.y;
                }
            }
        }
        // en 'a' guardo la fecha (label) y la cantidad de activos (y)
        a.label = c.label;
        // activos = (casos_totales - (recuperados + fallecidos))
        a.y = number - (recovered + death);
        // guardo el activo correspondiente en el array
        dataActivos.push({
            y: a.y,
            label: a.label
        })
    }


    //Paso los arrays de datos para cada línea del CHART
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
        },
        {
            type: "spline",
            name: "Recuperados",
            showInLegend: true,
            dataPoints: dataRecovered
        }, {
            type: "spline",
            name: "Activos",
            showInLegend: true,
            dataPoints: dataActivos
        }

        ]
    };

    //Evito que se cargu el chart si no tiene elementos.
    const estaVacio = casesCountry.length < 3;
    const mensajeError = `Ups! No se encontraron datos historicos para ${country.country}`;

    return (
        <Fragment>
            {!estaVacio ?
                (<Chart
                    options={options}
                />)
                :
                (mensajeError)
            }
        </Fragment>
    );
}

export default CountryChart;