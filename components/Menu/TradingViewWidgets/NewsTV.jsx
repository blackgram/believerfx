import React, { useEffect } from 'react';

const NewsTV = () => {
  useEffect(() => {
    // Load the TradingView widget script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = `
      {
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": 400,
        "height": 650,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;
    document.getElementById('tradingview-widget-script').appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
      <div id="tradingview-widget-script"></div>
    </div>
  );
};

export default NewsTV;
