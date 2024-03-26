import HomePage from "@/components/Home/HomePage";
import ContactUs from "@/components/Menu/ContactUs";
import Markets from "@/components/Menu/Markets";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../components/Home";
import Careers from "@/components/Menu/Careers";
import { useInView } from "react-intersection-observer";
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { setPageLoading } from "@/Redux/features/pageLoadingSlice";

const Home = () => {
  const dispatch = useDispatch();

  const pageloading = useSelector(
    (state) => state.data.pageLoading.pageLoading
  );

  const activeMenu = useSelector(
    (state) => state.data.activeMainMenu.activeMenu
  );

  useEffect(() => {

    const timer = setTimeout(() => {
      dispatch(setPageLoading(false))
    }, 2000);

    return () => clearTimeout(timer)
  }, [])

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    case "Careers" || "About Us":
      componentTorender = <Careers />;
      break;
    default:
      componentTorender = <HomePage />;
      break;
  }

  return (
    <div className="transition-all duration-300">
      {pageloading ? (
        <LoadingScreen />
      ) : (
        <div className="font-poppins overflow-hidden bg-black min-h-full">
          <Header />
          {componentTorender}
          {console.log(activeMenu)}
          <Footer cta={true} />
          <ScrollToTop scroll={showScrollToTop} />
          <TradingViewTickerTape display="down" />
        </div>
      )}
    </div>
  );
};

export default Home;
