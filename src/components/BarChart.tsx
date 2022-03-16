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
const toMonth=(date:any)=>{
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date(date);
let name = month[d.getMonth()];
return name
}

const data = {
  labels: props?.latestLaunchedProducts?.map((item:any)=>toMonth(item.DATE)),
  datasets: [
    {
      label: "Launched Product in last 3 months",
      data:props?.latestLaunchedProducts?.map((item:any)=>item.COUNT),
      backgroundColor: '#61DAFB',
    }
  ],
  
};
  return <Bar options={options} data={data} className="mt-5 pt-5"/>;
}
