import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



export default function BarChart(props: any) {
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const data = {
  labels: props?.selectedOption==="Product type"?props?.productTypeData?.map((item:any)=>item.TYPE):props?.dateTypeData?.map((item:any)=>item.DATE),
  datasets: [
    {
      label: props?.selectedOption==="Product type"?"PRODUCT TYPE":"DATE TYPE",
      data: props?.selectedOption==="Product type"?props?.productTypeData?.map((item:any)=>item.COUNT):props?.dateTypeData?.map((item:any)=>item.COUNT),
      backgroundColor: '#61DAFB',
    }
  ],
  
};
  return <Bar options={options} data={data} className="mt-5 pt-5"/>;
}
