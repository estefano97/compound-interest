import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IFormInteres } from "./FormInteres/IFormInteres";
import { CalculateInvertion, CalculateLabels, chartOptions, roundToTwo } from "./ChartVisualizerToolkit";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IChartVisualizerProps {
  FormInteresState: IFormInteres | undefined;
}

const ChartVisualizer = ({ FormInteresState: data }: IChartVisualizerProps) => {

  if (!data) return <p>Realiza un calculo!, ctmr</p>;

  //haciendo un arreglo de la longitud de los anios que me pasen y cogiendo como valor su indice
  const MyLabels: string[] = CalculateLabels(data.years);

  const { WithInvertion, WithoutInvertion} = CalculateInvertion(data);

  const myData = {
    labels: MyLabels,
    datasets: [
      {
        label: "Sin invertir",
        data: WithoutInvertion,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Invertiendo",
        data: WithInvertion,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{transform: "scale(0.9)"}}>
      <h3>Totales Sin Invertir: ${WithoutInvertion[data.years -1]}</h3>
      <h3>Totales Invirtiendo: ${WithInvertion[data.years -1]}</h3>
      <h3>Diferencia: ${roundToTwo(WithInvertion[data.years -1] - WithoutInvertion[data.years -1])}</h3>
      <Line options={chartOptions} data={myData} />
    </div>
  );
};

export default ChartVisualizer;
