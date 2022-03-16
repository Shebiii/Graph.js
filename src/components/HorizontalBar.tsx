import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';




export function HorizontalBar() {
  const dummy=[
    {
      "label": "15/12/2021",
      "products": 34
    },
    {
      "label": "16/12/2021",
      "products": 35
    }
   ]
   const [tempData,setTempData]=useState<any>(dummy);
   const [selectedOption,setselectedOption]=useState<string>("Product type");
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: `Horizontal Bar Chart`,
      },
    },
  };
  


    const data = {
      labels:tempData.map((item:any)=>item.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: tempData.map((item:any)=>item.products),
        borderColor: '#61DAFB',
        backgroundColor: '#61DAFB',
      }
    ],
  };
  const clickHandler=(e:any)=>{
    setselectedOption(e)
    setTempData([
      {
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },{
        "label": "shoaib",
        "products": 2
      },
      {
        "label": "mohsin",
        "products": 4
      },
     ])
   
  }
  useEffect(()=>{

  },[tempData])
  return <>
  <Dropdown className="pt-5">
  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
    {selectedOption}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>clickHandler('By Product Type')}>By Product Type</Dropdown.Item>
    <Dropdown.Item onClick={()=>clickHandler('By Date')}>By Date</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  <Bar options={options} data={data} /></>;
}
