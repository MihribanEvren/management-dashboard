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
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
          color: '#f1f5f9',
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 50,
        grid: {
          drawBorder: false,
          drawTicks: false,
          color: '#f1f5f9',
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#475569',
        bodyColor: '#475569',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
  };

  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Target',
        data: [30, 25, 8, 38, 42, 45],
        borderColor: '#f97316',
        backgroundColor: '#f97316',
        borderWidth: 2.5,
        fill: false,
      },
      {
        label: 'Achieved',
        data: [20, 15, 35, 40, 15, 25],
        borderColor: '#1e40af',
        backgroundColor: '#1e40af',
        borderWidth: 2.5,
        fill: false,
      },
    ],
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">
          Project deliveries
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDeliveries;
