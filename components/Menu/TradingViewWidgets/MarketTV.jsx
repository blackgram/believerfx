// TradingViewWidget.js
import React, { useEffect } from "react";

const MarketTV = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = `{
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "300",
      height: "550",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(106, 109, 120, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            {
              s: "FOREXCOM:SPXUSD",
              d: "S&P 500 Index",
            }
            // ... (other symbols)
          ],
          originalTitle: "Indices",
        },
        // ... (other tabs)
      ],
    }`;

    document
      .getElementById("tradingview-market-overview-script")
      .appendChild(script);

  }, []);

  return (
    <div className="tradingview-widget-container tv-embed-widget-wrapper">
      <div className="tradingview-widget-container__widget max-w-full"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          {/* <span className="blue-text">Track all markets on TradingView</span> */}
        </a>
      </div>
      <div id="tradingview-market-overview-script"></div>
    </div>
  );
};

export default MarketTV;
