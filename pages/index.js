import HomePage from "@/components/Home/HomePage";
import ContactUs from "@/components/Menu/ContactUs";
import Markets from "@/components/Menu/Markets";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import {
  setLoadingMarketdata,
  setMarketData,
} from "@/Redux/features/marketNewsSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../components/Home";
import hardMarketData from "@/components/Menu/hardMarketData";

const Home = () => {
  const dispatch = useDispatch();

  const activeMenu = useSelector(
    (state) => state.data.activeMainMenu.activeMenu
  );
  const marketData = useSelector((state) => state.data.marketNews.marketData);

  {
    /*News Api*/
  }

  const apiKey = process.env.NEWS_API_KEY;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       //newsapi won't allow me use their data for production lol

  //       // const currentDate = new Date().toISOString().split("T")[0];
  //       // const oneMonthDate = new Date();
  //       // oneMonthDate.setMonth(oneMonthDate.getMonth() - 1);
  //       // const newOneMonthDate = oneMonthDate.toISOString().split("T")[0];

  //       // const response = await fetch(
  //       //   `https://newsapi.org/v2/everything?q=bitcoin|crypto|trading|ethereum|stock&from=${newOneMonthDate}&to=${currentDate}&language=en&sortBy=relevancy&page=1&apiKey=828c109c04764c629d50554e625ed2a3`
  //       // );
  //       // const data = await response.json();
  //       // console.log(data);
  //       dispatch(setMarketData(hardMarketData));

  //       if (response.data == "ok") {
  //         dispatch(setLoadingMarketdata(false));
  //       } else {
  //         console.error("Error fetching data. Status:", response.status);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
