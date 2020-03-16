import React from 'react';


const Footer = () => {

    var style = {
        borderTop: "1px solid grey",
        textAlign: "center",
     
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "70px",
        width: "100%",
    };

    

    return ( 

       <div style={style}>
<footer className="page-footer font-small blue footer">

 
  <div className="footer-copyright text-center py-1">Máximo Lanza  </div>
  <div className="footer-copyright text-center py-1">© 2020 Copyright:
    <a href="https://github.com/maximolanza/coronauy.git"> GitHub</a>
  </div>
 

</footer>
</div>


     );
}
 
export default Footer;