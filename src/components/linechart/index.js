import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const labels = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Alerm",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      yAxisID: "y1"
    },
    {
      type: "bar",
      label: "Incident",
      backgroundColor: "rgb(75, 192, 192)",
      yAxisID: "y"
    },
    {
      type: "bar",
      label: "Event",
      backgroundColor: "rgb(53, 162, 235)",
      yAxisID: "y"
    }
  ]
};

export const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      position: "bottom"
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false
    },
    y: {
      stacked: false,
      max: 100,
      min: 0
    },
    y1: {
      stacked: false,
      position: "right",
      max: 10,
      min: 0
    }
  }
};

export default function Linechart(){
  const chartRef = useRef(null);

  useEffect(() => {
    randomData();
  }, []);

  const randomData = () => {
    let data1 = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < labels.length; i++) {
      data1.push(getRandomInt(10));
      data2.push(getRandomInt(100));
      data3.push(getRandomInt(100));
    }

    chartRef.current.data.datasets[0].data = data1;
    chartRef.current.data.datasets[1].data = data2;
    chartRef.current.data.datasets[2].data = data3;

    chartRef.current.update();
  };

  return (
    <Chart
      ref={chartRef}
      type={"bar"}
      data={data}
      options={options} 
    />
  );
}

