// /components/MainPanel.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LineChart from './Graphique/LineChart';
import BarChart from './Graphique/BarChart';
import PriceChart from './Graphique/PriceChart';
import Header from './Header';
import Footer from './Footer';
import './StyleCss/MainPanel.css';

// Cette fonction pourrait être utilisée pour transformer vos données d'actions en données de graphique
const transformerActionsEnDonneesDeGraphique = (actions) => {
  // Logique pour transformer les données d'actions en format approprié pour les graphiques
  // Par exemple, séparer les noms et les prix dans deux tableaux pour les labels et les données
  return {
    labels: actions.map(action => action.nom),
    data: actions.map(action => action.prix),
  };
};

const MainPanel = () => {

  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Performance',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Volume des ventes',
      data: [],
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1,
    }]
  });

  const [priceChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Prix',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  });

  useEffect(() => {
    axios.get('http://localhost:3000/actions')
      .then(response => {
        const transformedData = transformerActionsEnDonneesDeGraphique(response.data);
        setLineChartData(currentData => ({
          ...currentData,
          labels: transformedData.labels,
          datasets: currentData.datasets.map(dataset => ({
            ...dataset,
            data: transformedData.data
          }))
        }));
        setBarChartData(currentData => ({
          ...currentData,
          labels: transformedData.labels,
          datasets: currentData.datasets.map(dataset => ({
            ...dataset,
            data: transformedData.data
          }))
        }));
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données", error);
      });
  }, []);

  // Options pour le graphique en ligne
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Options pour le graphique à barres
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="main-panel">
      <Header />
      {lineChartData.datasets[0].data.length > 0 && (
        <LineChart data={lineChartData} options={lineChartOptions} />
      )}
      {barChartData.datasets[0].data.length > 0 && (
        <BarChart data={barChartData} options={barChartOptions} />
      )}
      {priceChartData.datasets[0].data.length > 0 && (
        <PriceChart data={priceChartData} />
      )}
      <Footer />
    </div>
  );
}
export default MainPanel;