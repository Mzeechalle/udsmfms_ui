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

const data = {
    labels: ['DoETE', 'DoCSE', 'CVL'],
    datasets: [
      {
          label: 'Staff',
          backgroundColor: 'rgba(255,199,132,0.2)',
          borderColor: 'rgba(255,199,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,199,132,0.4)',
          hoverBorderColor: 'rgba(255,199,132,1)',
          data: [65, 59, 80]
      },
      {
          label: 'Students',
          backgroundColor: 'rgba(25,199,132,0.2)',
          borderColor: 'rgba(25,199,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(25,199,132,0.4)',
          hoverBorderColor: 'rgba(25,199,132,1)',
          data: [34, 39, 78]
      }
    ]
  };
  
  const AllRequests = () => {
      return (
          <>
              <Bar
                  data={data}
                  width={100}
                  height={300}
                  options={{
                  maintainAspectRatio: false
                  }}
              />
          </>
        );
  }
  
  export default AllRequests;
