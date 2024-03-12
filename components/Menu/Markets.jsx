import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuLayout from "./MenuLayout";
import MarketTV from "./TradingViewWidgets/MarketTV";
import NewsTV from "./TradingViewWidgets/NewsTV";
import { DotLoader } from "react-spinners";

const Markets = () => {
  const marketData = useSelector((state) => state.data.marketNews.marketData);
  const [articlesToShow, setArticlesToShow] = useState(5);


  const handleLoadMore = () => {
    setArticlesToShow((prevCount) => prevCount + 5);
  };

  const calculateTimeAgo = (publishedAt) => {
    const now = new Date();
    const articleDate = new Date(publishedAt);

    const timeDifference = now - articleDate;
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

    return hoursAgo <= 24
      ? `${hoursAgo} hours ago`
      : articleDate.toDateString();
  };

  return (
    <MenuLayout>
      <div className="xl:px-[7rem]  py-[2rem] xl:py-[7rem] bg-nb4 flex flex-col xl:flex-row items-center xl:items-start justify-center  w-full ">
        {!marketData? <div className="min-h-[50vh] flex justify-center items-center "><DotLoader size={150} color='#9AD953' className=" p-4 rounded-lg" /></div> : <><div className="text-white px-4 xl:px-10 ">
          {marketData
            .filter((article) => article.urlToImage)
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, articlesToShow)
            .map((article, i) => (
              <div
                key={i}
                className=" cursor-pointer md:p-4  bg-nb3 hover:bg-primary hover:text-black my-4 rounded-lg flex flex-col md:flex-row gap-4 text-ash text-[12px] lg:text-[16px]"
              >
                <img
                  src={article.urlToImage}
                  alt="article image"
                  className=" w-full md:w-[200px] lg:w-[280px] max-w-[100%] rounded-lg"
                />
                <div className="p-2 md:p-0">
                  <div className=" text-[18px] lg:text-[24px] text-white font-semibold pb-4">
                    {article.title}
                  </div>
                  <div className="pb-4  ">{article.description}</div>
                  <div className="italic flex justify-between">
                    <div>{calculateTimeAgo(article.publishedAt)}</div>
                    <div>Read more {'>>>'}</div>
                  </div>
                </div>
              </div>
            ))}
          <div className="w-full flex justify-center my-8">
            <button
              type="submit"
              onClick={handleLoadMore}
              className="text-[#030303] text-[20px] py-3 px-5 flex items-center justify-center gap-1 border-solid border-1 border-primary rounded-lg p-1 bg-primary transition-all duration-500 ease-in-out close hover:bg-secondary  "
            >
              <div>Load more</div>
            </button>
          </div>
        </div>
        <div className="widgets flex lg:pb-[5rem] flex-col lg:flex-row gap-4 h-full ">
          <MarketTV />
          <NewsTV />
        </div></>}
      </div>
    </MenuLayout>
  );
};

export default Markets;
