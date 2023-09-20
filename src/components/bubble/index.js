import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble as BubbleChart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false,
      max: 100,
      min: 0,
      title: {
	  text: "Duration",
	  display: true,
      },
      grid: {
          display: false,
      },
    },
    y: {
      stacked: false,
      max: 120,
      min: 0,
      title: {
	  text: "Connection",
	  display: true,
      },
    },
  }
};

export const data = {
  datasets: [
    {
      data: Array.from({ length: 10 }, () => ({
        x: faker.datatype.number({ min: 0, max: 100 }),
        y: faker.datatype.number({ min: 0, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function Bubble() {
  return <BubbleChart options={options} data={data} />;
}

export default Bubble;

