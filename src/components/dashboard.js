import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Qualidade da Agua - 2023',
    },
  },
};

const labels = ['01/2023', '02/2023', '03/2023', '04/2023', '05/2023', '06/2023', '07/2023', '08/2023', '09/2023', '10/2023', '11/2023', '12/2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Nivel de PH',
      data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 14)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Tempertura da Água',
      data:  Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Turbidez da Água',
      data:  Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100)),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Nivel da Água',
      data:  Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100)),
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    },
    {
      label: 'Solidos Totais Dissolvidos',
      data:  Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100)),
        // orange
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
  ],
};

const Dashboard = () =>{
  return <Line options={options} data={data} />;
}

export default Dashboard;
