import React from 'react';

const Alerta = () => {

  const mensaje = 'Lavarse las manos de forma correcta es una de las formas más eficaces de combatir muchas enfermedades transmisibles entre ellas el virus de la enfermedad COVID-19.';
  return (

    <div className="alert alert-dismissible alert-warning">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <h4 className="alert-heading">Recordá!</h4>
      <p className="mb-2"><b> {mensaje} </b></p>
    </div>);
}

export default Alerta;