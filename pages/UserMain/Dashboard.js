'use client'
import { Footer, Header, Navbar } from "@/components";
import DashNav from "@/components/DashNav";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import ViewChart from "@/components/ViewChart";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const [user] = useAuthState(auth)
  const router = useRouter()
  const userSession = sessionStorage.getItem('user')


  if (!user && !userSession){
    router.push('/Login')
  }

  return (
    <div className="min-h-100vh w-full overflow-hidden text-white bg-black">
      <DashNav />
      <div>
        <div className="p-4 lg:p-8">
          <div className="w-full text-left font-medium text-[24px]">
            Welcome, User
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
                    <div className="text-[24px] font-semibold">$0.00</div>
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
                    <div className="text-[24px] font-semibold">$0.00</div>
                  </div>
                </div>
              </div>
              <div className="card1 bg-nb3 w-[350px] rounded-md p-4 lg:h-[150px] lg:flex lg:justify-center lg:items-center  ">
                <div className="flex justify-between items-center lg:w-full lg:text-[20px]">
                  <div>
                    <div>Trading Percentage</div>
                    <div className="text-[24px] font-semibold">0%</div>
                  </div>
                  <div className="text-[40px] lg:text-[60px] ">
                    <AiOutlineStock />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-center bg-nb3 py-3">Live Update:</div>
          <TradingViewTickerTape className="block" />
        </div>
        <div className="p-4 bg-nb3 min-h-[30vh]">
          <ViewChart />
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
