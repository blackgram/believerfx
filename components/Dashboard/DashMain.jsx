"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAccountBalance } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { BiConversation } from "react-icons/bi";
import LineChart from "./LineChart";
import { ChartData, chartData } from "./ChartData";
import TradeStatistics from "./TradeStatistics";
import DashLayout from "./DashLayout";

const DashMain = () => {
  const user = useSelector((state) => state.data.user.user);

  const [gainData, setGainData] = useState({
    labels: chartData.map((item) => item.month),
    datasets: [
      {
        label: "Perfomance Percentage / Time",
        data: chartData.map((item) => item.gain),
        borderColor: "#9AD953",
        backgroundColor: "black",
        tension: 0,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          color: "red", // X-axis title color
          font: {
            size: 14, // X-axis title font size
            weight: "bold", // X-axis title font weight
          },
        },
        ticks: {
          color: "green", // X-axis tick color
        },
      },
      y: {
        title: {
          display: true,
          text: "Performance (%)",
          color: "blue", // Y-axis title color
          font: {
            size: 14, // Y-axis title font size
            weight: "bold", // Y-axis title font weight
          },
        },
        ticks: {
          color: "orange", // Y-axis tick color
        },
      },
    },
  };

  return (
    <DashLayout>
      <div className="p-4 lg:p-8">
        <div className="flex">
          <div className="w-full text-center font-medium text-[24px]">
            Welcome, {user ? <span>{user.username}</span> : ""}
          </div>
          {/* <button
              type="submit"
              onClick={handleLogOut}
              className="flex items-center justify-center gap-1 font-bold bg-white rounded-full p-2 text-red-500"
            >
              Logout <FaArrowRight size={15} className="text-red-500" />
            </button> */}
        </div>
        <div>
          <div className="w-full mt-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="card1 bg-nb3 w-[350px] lg:h-[150px] lg:flex lg:justify-center lg:items-center rounded-md p-4 ">
              <div className="flex justify-between lg:w-full lg:text-[20px] items-center">
                <div>
                  <div>Total Balance</div>
                  <div className="text-[24px] lg:text-[32px] font-semibold">
                    $0.00
                  </div>
                </div>
                <div className="text-[40px] lg:text-[60px] ">
                  <MdAccountBalance />
                </div>
              </div>
            </div>
            <div className="card1 bg-nb3 w-[350px] rounded-md p-4 lg:h-[150px] lg:flex lg:justify-center lg:items-center">
              <div className="flex justify-between items-center lg:w-full lg:text-[20px]">
                <div>
                  <div>Net Profit</div>
                  <div className="text-[24px] lg:text-[32px] font-semibold">
                    $0.00
                  </div>
                </div>
                <div className="text-[40px] lg:text-[60px] ">
                  <GiProfit />
                </div>
              </div>
            </div>
            <div className="card1 bg-nb3 w-[350px] rounded-md p-4 lg:h-[150px] lg:flex lg:justify-center lg:items-center">
              <div className="flex justify-between items-center lg:w-full lg:text-[20px]">
                <div>
                  <div>Referal Bonus</div>
                  <div className="text-[24px] lg:text-[32px] font-semibold">
                    $0.00
                  </div>
                </div>
                <div className="text-[40px] lg:text-[60px] ">
                  <BiConversation />
                </div>
              </div>
            </div>
            <div className="card1 bg-nb3 w-[350px] rounded-md p-4 lg:h-[150px] lg:flex lg:justify-center lg:items-center  ">
              <div className="flex justify-between items-center lg:w-full lg:text-[20px]">
                <div>
                  <div>Trading Percentage</div>
                  <div className="text-[24px] lg:text-[32px] font-semibold text-red-500">
                    0%
                  </div>
                </div>
                <div className="text-[40px] lg:text-[60px] ">
                  <AiOutlineStock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-[4rem] md:my-4 border-2 border-nb3 ">
        <div className="font-bold text-[20px] p-4 text-center bg-nb3">
          Managed Trading Performance <br />
          (6 months)
        </div>
        <div className=" lg:p-4">
          <LineChart chartData={gainData} options={options} />
        </div>
      </div>
      <div className="mx-2 md:mx-[4rem] md:my-4 border-2 border-nb3 ">
        <div className="font-bold text-[20px] p-4 text-center bg-nb3">
          Trade Statistics (6 months)
        </div>
        <div className=" lg:p-4">
          <TradeStatistics />
        </div>
      </div>
    </DashLayout>
  );
};

export default DashMain;
