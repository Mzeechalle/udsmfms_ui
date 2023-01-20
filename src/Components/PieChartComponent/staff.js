import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { countUsersByPosition } from "../../Data/Users";

ChartJS.register(ArcElement, Tooltip, Legend);

const StaffPieChart = (props) => {

  const [ staff, setStaff ] = useState(0);
  useEffect(() => {
    countUsersByPosition(
      "Staff",
      (data) => {
        setStaff(data.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const data = {
    labels: ['DoETE', 'DoCSE', 'CVL'],
    datasets: [
        {
          label: '# of Users',
          data: [5, 20, 11],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1,
        },
      ],
  };
    return(
        <Doughnut 
            data={data}
            width={props.width}
            height={props.height}
            options={{
                maintainAspectRatio: true
            }}
        />
    );
};

export default StaffPieChart;
