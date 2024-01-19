import React, { useEffect } from 'react';

const ViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'BINANCE:BTCUSDT',
      interval: '30',
      timezone: 'exchange',
      theme: 'dark',
      style: '9',
      locale: 'en',
      enable_publishing: false,
      backgroundColor: '#ffffff',
      gridColor: 'rgba(42, 46, 57, 0.06)',
      allow_symbol_change: true,
      support_host: 'https://www.tradingview.com',
      hide_side_toolbar: false,
    });

    const container = document.getElementById('viewchart-widget-container');
    container.appendChild(script);

    return () => {
    //   container.removeChild(script);
    };
  }, []);

  return (
    <div id="viewchart-widget-container" style={{ height: '60vh', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: '', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">_</span>
        </a>
      </div>
    </div>
  );
};

export default ViewChart;
