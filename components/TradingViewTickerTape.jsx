import React, { useEffect } from "react";

const TradingViewTickerTape = (props) => {
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "Litecoin", proName: "BINANCE:LTCUSD" },
        { description: "US100", proName: "CAPITALCOM:US100" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    document
      .getElementById("tradingview-widget-script-container")
      .appendChild(script);

    return () => {
      // Cleanup on component unmount
      // document.addEventListener(
      //   "DOMContentLoaded",
      //   document
      //     .getElementById("tradingview-widget-script-container")
      //     .removeChild(script)
      // );
    };
  }, []);

  return (
    <div>
      <div
        id="tradingview-widget-script-container"
        className={`tradingview-widget-container ${props.display == 'down'? 'fixed bottom-0' : 'flex'}  max-w-[100vw]`}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default TradingViewTickerTape;
