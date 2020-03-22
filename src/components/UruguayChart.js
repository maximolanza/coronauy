import React, { useContext } from 'react';
import CanvasJSReact  from '../canvas/canvasjs.react';

import  { StateContext } from '../context/StateContext';

const UruguayChart = () => {

    const { all } = useContext(StateContext);
    const uruguay = all.uruguay;
    const historicaluy = all.historicaluy;

    const { country,
        cases,
        todayCases,
        deaths,
        active,
        todayDeaths,
        recovered,
        critical } = uruguay;
    
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dateFilter = '13/3/20'
    
    const convertDate = str =>{
        const dateParts = str.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2] + '20';
        return year + '-' + month + '-' + day;
    }
    
    const casos = all.casesuy;
    const recuperados= all.recovereduy;
    const fallecidos= all.deathsuy;

    let dataCases = [];
    let dataRecovered= [];
    let dataDeaths= [];

    const timeline = historicaluy  ;

const now = new Date();
const filter = new Date('2020-03-13');
const stringDate = (now.getFullYear()  + '-' + now.getMonth() + '-' + now.getDate());
console.log(now.getDate());

let strRecuperados =JSON.stringify(recuperados).split(',');
for ( let i=0; i < strRecuperados.length; i++){
    strRecuperados[0] = strRecuperados[0].replace("{","");
    strRecuperados[strRecuperados.length-1] = strRecuperados[strRecuperados.length-1].replace("}","");
    const caso = strRecuperados[i].split(':');
    if (new Date(convertDate(caso[0].replace("\"","").replace("\"",""))) > filter ){
        dataRecovered.push({
            y: parseInt(caso[1]),
            label: convertDate(caso[0].replace("\"","").replace("\"",""))
        })
    }
    console.log(convertDate(caso[0].replace("\"","").replace("\"","")));
}


dataRecovered.push({
    y: recovered,
    label: stringDate
})


let strcasos =JSON.stringify(casos).split(',');
    for ( let i=0; i < strcasos.length; i++){
        strcasos[0] = strcasos[0].replace("{","");
        strcasos[strcasos.length-1] = strcasos[strcasos.length-1].replace("}","");
        const caso = strcasos[i].split(':');
        if (new Date(convertDate(caso[0].replace("\"","").replace("\"",""))) > filter ){
            dataCases.push({
                y: parseInt(caso[1]),
                label: convertDate(caso[0].replace("\"","").replace("\"",""))
            })
        }
        console.log(convertDate(caso[0].replace("\"","").replace("\"","")));
    }

    dataCases.push({
        y: cases,
        label: stringDate
    })



    let strfallecidos =JSON.stringify(fallecidos).split(',');
    for ( let i=0; i < strfallecidos.length; i++){
        strfallecidos[0] = strfallecidos[0].replace("{","");
        strfallecidos[strfallecidos.length-1] = strfallecidos[strfallecidos.length-1].replace("}","");
        const caso = strfallecidos[i].split(':');
        if (new Date(convertDate(caso[0].replace("\"","").replace("\"",""))) > filter ){
            dataDeaths.push({
                y: parseInt(caso[1]),
                label: convertDate(caso[0].replace("\"","").replace("\"",""))
            })
        }
        console.log(convertDate(caso[0].replace("\"","").replace("\"","")));
    }

    dataDeaths.push({
        y: deaths,
        label: stringDate
    })




    const options = {
        animationEnabled: true,	
        title:{
            text: "Histórico de Uruguay"
        },
        axisY : {
            title: "Cantidad de casos",
            includeZero: false
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


    return (<div >
    
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    
    </div>
     );
}
 
export default UruguayChart;