import React, { Fragment } from 'react';


const Pais = ({ index, maxC, maxR, maxD, pais }) => {
  

    const { cases, recovered, deaths, country, todayDeaths, todayCases, active, critical, casesPerOneMillion, countryInfo } = pais;
    const { flag } = countryInfo;
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

        
  <tr className={ tableClass } id={country} >
   <td className="columnaIndex textlg" style={{ paddingRight: "0"}}> { index +1 }</td> 
   <td className="columna textsm"  style={{ paddingRight: "0", paddingLeft: "0"}}><img src={ flag } alt={country + "flag"} className="rounded-circle flag" ></img></td>
     <td className="columnaPais textlg" style={{ paddingRight: "0"}}>{ country }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ cases }</td>
   {/*   <td id="fultimos" className="columnaAncha textsm" style={{ paddingRight: "0"}}>{ todayCases }</td>*/}
     <td  className="columna textsm importante" style={{ paddingRight: "0"}}>{ active }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ critical }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ recovered}</td>
     <td  className="columna textsm red" style={{ paddingRight: "0" , justifyContent: "center" }}>{ deaths }</td>
    {/*  <td id="ffallecidos" className="columnaUltima textsm" style={{ paddingRight: "0"}}>{ todayDeaths }</td>*/}
   </tr>

       );
}

export default Pais;