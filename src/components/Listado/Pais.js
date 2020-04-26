import React, { useContext, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { StateContext } from '../../context/StateContext';
import Skeleton from '@material-ui/lab/Skeleton';
import { timeout } from 'q';

const Pais = ({ index, maxC, maxR, maxD, pais }) => {
    const { 
      modalCall } = useContext(StateContext);

    const { cases, recovered, deaths, country, todayDeaths, todayCases, active, critical, casesPerOneMillion, countryInfo } = pais;
    const { flag } = countryInfo;


    const callModal = () =>{
        modalCall(pais.country, pais);

    }

    let tableClass = "table-secondary";

   if( country === "Uruguay"){
    tableClass =  "table-info";
   };

   let imageClass = "rounded-circle flag";
   if( country === "Nepal"){
    imageClass =  "rounded-circle flag whitebackground";
   };

   

   
    return (



        
  <tr className={ tableClass } id={country} >
   <td className="columnaIndex textlg" style={{ paddingRight: "0"}}> { index +1 }</td> 
   <td className="columna textsm"  style={{ paddingRight: "0", paddingLeft: "0"}}>
     {flag.search("unknown") != -1 ? 
     (<img src={ "https://ui-avatars.com/api/?name=" + country.replace(" ", "+") } alt={country + " flag"} className="rounded-circle flag" ></img>)
     :
     ( 
       <Fragment>
      <Skeleton  variant="circle" width={20} height={20} animation="wave" style={{zIndex: 0, position: 'absolute'}}/>
      <img src={ flag } alt={country + "flag"}  className={ imageClass } style={{zIndex: 1, position: 'absolute'}}></img>
      </Fragment>

     )}
     
     </td>
     <td className="columnaPais textlg" style={{ paddingRight: "0"}}>{ country }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ cases }</td>
     <td  className="columna textsm importante" style={{ paddingRight: "0"}}>{ active }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ critical }</td>
     <td  className="columna textsm" style={{ paddingRight: "0"}}>{ recovered}</td>
     <td  className="columna textsm red" style={{ paddingRight: "0" , justifyContent: "center",paddingLeft: "1px" }}>{ deaths }</td>
     <td  className="columna textsm" style={{ paddingRight: "0", justifyContent: "center"}}><FontAwesomeIcon onClick={ () => ( callModal() )  } icon={faChartLine}  size="2x" className="manito text-warning" /></td>
   </tr>

       );
}

export default Pais;