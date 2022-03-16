import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

export function HorizontalBar(props: any) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
        display: false,
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: `Horizontal Bar Chart`,
      },
    },
  }

  const data = {
    labels:
      props?.selectedOption === 'Product type'
        ? props?.productTypeData?.map((item: any) => item.TYPE)
        : props?.dateTypeData?.map((item: any) => item.DATE),
    datasets: [
      {
        label: "count",
        data:
          props?.selectedOption === 'Product type'
            ? props?.productTypeData?.map((item: any) => item.COUNT)
            : props?.dateTypeData?.map((item: any) => item.COUNT),
        borderColor: '#61DAFB',
        backgroundColor: '#61DAFB',
      },
    ],
  }
  return <Bar options={options} data={data} />
}
