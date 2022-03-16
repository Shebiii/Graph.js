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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const tempData=[
  {
    "date": "15/12/2021",
    "products": 34
  },
  {
    "date": "16/12/2021",
    "products": 35
  },
  {
    "date": "17/12/2021",
    "products": 36
  },
  {
    "date": "18/12/2021",
    "products": 37
  },
  {
    "date": "19/12/2021",
    "products": 38
  }
 ]
export const data = {
  labels:tempData.map((item)=>item.date),
  datasets: [
    {
      label: 'By date',
      data: tempData.map((item)=>item.products),
      backgroundColor: '#61DAFB',
    }
  ],
  
};

export default function BarChart() {
  return <Bar options={options} data={data} className="mt-5 pt-5"/>;
}
