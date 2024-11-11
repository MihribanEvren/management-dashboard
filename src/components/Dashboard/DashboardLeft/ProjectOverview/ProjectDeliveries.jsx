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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProjectDeliveries = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
          color: 'black',
          width: 1,
        },
        ticks: {
          color: 'black',
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 50,
        grid: {
          display: false,
        },
        border: {
          display: true,
          color: 'black',
          width: 1,
        },
        ticks: {
          color: 'black',
          font: {
            size: 12,
          },
        },
        stepSize: 10,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#475569',
        },
      },
      tooltip: {
        backgroundColor: '#475569',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y} projects`;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 3,
      },
      point: {
        radius: 0,
        hoverRadius: 0,
      },
    },
  };

  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Target',
        data: [28, 10, 10, 18, 18, 25],
        borderColor: '#F8BD8D',
        backgroundColor: '#F8BD8D',
        fill: false,
      },
      {
        label: 'Achieved',
        data: [18, 10, 30, 20, 16, 25],
        borderColor: '#465F85',
        backgroundColor: '#465F85',
        fill: false,
      },
    ],
  };

  return (
    <Card className="w-full h-64 p-6 bg-white basis-2/3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Project deliveries</h3>
      </div>
      <div className="w-full h-48">
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};

export default ProjectDeliveries;
