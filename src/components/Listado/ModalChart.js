import React, { useContext, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import { StateContext } from '../../context/StateContext';
import CountryChart from '../CountryChart';
import Spinner from '../Spinner';

const ModalChart = () => {

    const { showModal, saveShowModal, historicalCases, historicalDeaths, currentCountryData,  cargandoHistorico, 
        saveCargandoHistorico } = useContext(StateContext);

    const handleClose = () => {
       
        saveShowModal(false);
      
    }



    /*const estaVacio = historicalCases.length < 3;
    console.log("c " + currentCountryData);
    console.log("h " + historicalCases);
    console.log("ev " + estaVacio);*/

 
    return (
        <Fragment>


            <Modal
                show={showModal}
                centered={true}
                size="lg"
                onHide={handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body >
                   {/*historicalCases.length > 3 ?
                        <CountryChart
                            casesCountry={historicalCases}
                            deathsCountry={historicalDeaths}
                            country={currentCountryData}
                  /> : mensajeError*/}

                  { cargandoHistorico ? 
                    <Spinner />
                :
                (  <CountryChart
                    casesCountry={historicalCases}
                    deathsCountry={historicalDeaths}
                    country={currentCountryData}
                 />)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                        size="lg"
                        style={{ margin: "auto", width: "100%" }}
                        onClick={handleClose}>
                        Cerrar
      </Button>

                </Modal.Footer>
            </Modal>


        </Fragment>
    );
}

export default ModalChart;