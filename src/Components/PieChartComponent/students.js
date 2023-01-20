import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['DoETE', 'DoCSE', 'CVL'],
  datasets: [
    {
      label: '# of Users',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(100, 194, 166, 0.2)',
        'rgba(45, 135, 187, 0.2)',
        'rgba(170, 222, 167, 0.2)'
      ],
      borderColor: [
        'rgba(100, 194, 166, 1)',
        'rgba(45, 135, 187, 1)',
        'rgba(170, 222, 167, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const StudentsPieChart = () => {
    return(
        <Doughnut 
            data={data}
            width={100}
            height={300}
            options={{
                maintainAspectRatio: true
            }}
        />
    );
};

export default StudentsPieChart;
