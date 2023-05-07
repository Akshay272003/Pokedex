import {useEffect} from 'react';
import Chart from 'chart.js/auto';

const StatsBarGraph = ({raw_data})=>{

    useEffect(()=>{
        if(raw_data){
            try{
                new Chart(
                  document.getElementById('chart'),
                  {
                    type: 'bar',
                    options:{
                        plugins : {
                            legend : false,
                        },
                        tooltip : {
                            enabled : false
                        },
                        scales : {
                          y : {
                            type: 'linear',
                            min: 0,
                            max: 120
                          }
                        }
                    },
                    data: {
                      labels: ["Hp", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"],
                      datasets: [
                        {
                          data: raw_data.map(val => val.base_stat),
                          backgroundColor : ["green", "red", "gray", "orange", "slate", "blue"]
                        }
                      ]
                    }
                  }
                );

            }
            catch(e){
                console.log(e.message);
            }
        }

    }, [raw_data]);


    return (
        <>
            {raw_data && <canvas id='chart'></canvas>}
        
        </>
    )
}

export default StatsBarGraph;