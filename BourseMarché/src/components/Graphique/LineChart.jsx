/* eslint-disable no-unused-vars */
// /src/components/Graphique/LineChart.jsx
import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({ data, options }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Copiez la référence actuelle dans la portée de l'effet
    const chartInstance = chartRef.current;

    // Nettoyage lors du démontage
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
