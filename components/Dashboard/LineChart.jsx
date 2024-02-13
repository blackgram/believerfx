import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({chartData}, {op}) => {


  return (
    <div>
      <Line data={chartData} options={op}/>
    </div>
  );
};

export default LineChart;
