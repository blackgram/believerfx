import HomePage from "@/components/Home/HomePage";
import ContactUs from "@/components/Menu/ContactUs";
import Markets from "@/components/Menu/Markets";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import { setLoadingMarketdata, setMarketData } from "@/Redux/features/marketNewsSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../components/Home";

const Home = () => {
  const dispatch = useDispatch()

  const activeMenu = useSelector(
    (state) => state.data.activeMainMenu.activeMenu
  );
  const marketData = useSelector((state) => state.data.marketNews.marketData)

  {
    /*News Api*/
  }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/fetch-news');
          const data = await response.json();
          dispatch(setMarketData(data.articles))
          
          if (response.data == 'ok') {dispatch(setLoadingMarketdata(false))}
          else {console.error('Error fetching data. Status:', response.status)}
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  let componentTorender;

  switch (activeMenu) {
    case "Home":
      componentTorender = <HomePage />;
      break;
    case "Contact Us":
      componentTorender = <ContactUs />;
      break;
    case "Markets":
      componentTorender = <Markets />;
      break;
    default:
      componentTorender = <HomePage />;
      break;
  }

  return (
    <div className="font-poppins overflow-hidden bg-black min-h-full">
      <Header />
      {componentTorender}
      {console.log(activeMenu)}
      <Footer cta={true} />
      <TradingViewTickerTape display="down" />
    </div>
  );
};

export default Home;
