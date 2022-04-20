import React, { Component } from "react";
import Chart from 'chart.js/auto';



// VARIABLES DE COMPONENTE
let myChart;



// COMPONENTES BASADOS EN CLASES

class IntegrarLibreriaApp extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {
        return (
            <div>
                <Graficas />
            </div>
        )
    }

}

class Graficas extends Component {

    // REFERENCIAS
    grafica = React.createRef()




    // MÉTODOS

    /**
     * Utilizado para inicializarse al cargar el componente.
     */
    componentDidMount() {
        const ctx = this.grafica.current.getContext('2d')

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {
        return (
            <div>
                <canvas
                    ref={this.grafica}
                    style={ {
                        width: "100px",
                        height: "100px",
                    } }
                >
                </canvas>
            </div>
        )
    }

}



// EXPORT

export default IntegrarLibreriaApp
