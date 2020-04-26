import React,{ useContext } from 'react';
import CanvasJSReact from '../canvas/canvasjs.react';
import Skeleton from '@material-ui/lab/Skeleton';
import { StateContext } from '../context/StateContext';

const Chart = ({ options }) => {
    const { cargandoWeb } = useContext(StateContext);

    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    

    return ( 

        <div>
            { cargandoWeb ? 
            <div className="center" width="100%">
            <Skeleton variant="rect"  height={"400px"}  animation="wave" style={{ margin:"0"}}/> 
            </div>

        

        /* onRef={ref => this.chart = ref} */
       
        :
        <CanvasJSChart options={options} />
       }
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

    </div>
    
     );
}
 
export default Chart;