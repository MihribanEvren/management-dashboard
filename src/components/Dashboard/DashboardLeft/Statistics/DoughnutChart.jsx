import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useEffect, useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

function DoughnutChart({ percentage, chartColor }) {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [chartColor, '#F4F7FE'],
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: -90,
    circumference: 360,
    maintainAspectRatio: true,
  };

  return (
    <div className="relative w-10 h-10">
      <Doughnut ref={chartRef} data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-medium">{percentage}%</span>
      </div>
    </div>
  );
}

export default DoughnutChart;
