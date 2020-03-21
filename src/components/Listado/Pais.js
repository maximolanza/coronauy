import React, { Fragment } from 'react';


const Pais = ({ index, maxC, maxR, maxD, pais }) => {
  

    const { cases, recovered, deaths, country, todayDeaths, todayCases, active, critical, casesPerOneMillion } = pais;

    // Descomentar para calcular porcentajes de ProgressBar
/*
    const casesPr = Math.round(((100 / maxC) * cases));
    const recoveredsPr = Math.round(((100 / maxR) * recovered));
    const deathsPr =  Math.round(((100 / maxD) * deaths));
   */
    let tableClass = "table-secondary";
   if( country === "Uruguay"){
    tableClass =  "table-info";
   };
    return (
     

          // Descomentar para obtener ProgressBar
        /*
            <div className="row">
                <div className="col- mr-5" style={{ margin: "auto", backgroundColor: "grey", borderRadius: "20%" }}> <p style={{ margin: "5px"}}> <b>{ (index + 1) + ' ' + country } </b> </p> </div>
                <div className="col- ">  
                <p style={{ margin: "0"}}> Casos: <span>{cases} </span> </p>
                <p style={{ margin: "0"}}> Casos: <span>{recovered} </span> </p>
                <p style={{ margin: "0"}}> Casos: <span>{deaths} </span> </p> </div>
                <div className="col-lg">
                    <div className="progress"  style={{height: "20px",marginBottom: "5px" }}>
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: casesPr + '%',height: "30px" }} aria-valuenow={casesPr} aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    
                    <div className="progress" style={{height: "20px",marginBottom: "5px" }}>
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: recoveredsPr + '%',height: "30px" }} aria-valuenow={recoveredsPr} aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>

                    <div className="progress" style={{height: "20px",marginBottom: "5px" }}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: deathsPr + '%',height: "30px" }} aria-valuenow={deathsPr} aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
 */
/*      <th scope="col"> Nº</td>
        <th scope="col">Pais</td>
        <tthh scope="col">Casos</tthh>
        <th scope="col">Ultimos casos</td>
        <th scope="col">Activos</td>
        <th scope="col">Criticos</td>
        <th scope="col">Recuperados</td>
        <th scope="col">Fallecidos</td>
        <td scope="col">Ultimos fallecimientos</td>*/
        
  <tr className={ tableClass } id={country} >
   <td classname="columnaIndex textlg" style={{ paddingRight: "0"}}> { index +1 }</td> 
     <td className="columnaPais textlg" style={{ paddingRight: "0"}}>{ country }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ cases }</td>
   {/*   <td id="fultimos" className="columnaAncha textsm" style={{ paddingRight: "0"}}>{ todayCases }</td>*/}
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ active }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ critical }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ recovered}</td>
     <td  className="columna textsm" style={{ paddingRight: "0" , justifyContent: "center" }}>{ deaths }</td>
    {/*  <td id="ffallecidos" className="columnaUltima textsm" style={{ paddingRight: "0"}}>{ todayDeaths }</td>*/}
   </tr>
/*<tr className={ tableClass } id={country} >
   <td classname="columnaIndex">{ index +1 }</td>
     <td className="columnaPais">{ country }</td>
     <td className="columna">{ cases }</td>
     <td className="columnaAncha">{ todayCases }</td>
     <td className="columna">{ active }</td>
     <td className="columna">{ critical }</td>
     <td className="columna">{ recovered}</td>
     <td className="columna">{ deaths }</td>
     <td className="columnaUltima">{ todayDeaths }</td>
   </tr>*/
       );
}

export default Pais;