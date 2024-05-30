import React, { useState } from "react";
import DashLayout from "./DashLayout";
import Image from "next/image";
import Faq from "./Faq";
import faq from "../../assets/faq.png";
import { RiMailSendFill } from "react-icons/ri";
import Link from "next/link";

const Support = () => {
  const [faqDrop, setFaqDrop] = useState(false);

  const handleFAQ = () => {
    setFaqDrop(!faqDrop);
  };

  return (
    <DashLayout>
      <div className="px-4 py-12 lg:p-8 min-h-full flex flex-col  items-center gap-20">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-full text-center font-medium text-[24px] xl:text-[32px] ">
            Anytime Support from our team
          </div>
          <div className="max-w-[500px] text-ash mt-2">
            We&apos;re constantly improving our trading platform, trying to make
            it the best on the market and we would love your feedback
          </div>
        </div>

        <Link href="mailto:support@believersfx.com">
          <div className="bg-secondary/75 cursor-pointer hover:scale-110 hover:bg-secondary/85 transition-all ease-in-out duration-500 flex flex-col justify-center items-center gap-5 md:w-1/2 p-10 rounded-md font-bold text-2xl">
            <div className=" text-primary flex justify-center items-center gap-5">
              <div>Click here to send us a mail</div>
              <RiMailSendFill className=" text-4xl" />
            </div>
            <div className="text-lg text-center">
              Let us know how we can assist you.
              <br />
              (15mins average response time)
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-primary text-[20px]">FAQ&apos;s</div>
            <div className="text-[30px] font-bold ">
              Frequently Asked Questions
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center py-14 w-full gap-10">
            <div className="lg:w-[60%] flex flex-col gap-4">
              <Faq
                question={"What is trading"}
                answer="Trading is the buying and selling of financial instruments like stocks, bonds, currencies, and commodities to make a profit. It involves analyzing market conditions and making strategic decisions based on price movements."
              />
              <Faq
                question={"How can I get started with trading?"}
                answer={`BFx provides an easy solution as you can take advantage of our 'Managed Trading' feature, with little or no experience, start earning profits as our team of professionals handle your business.  You can also 'Self Trade' if you are confident enough in your ability`}
              />
              <Faq
                question={"What are the different types of trading?"}
                answer={
                  <div className=" my-2 flex flex-col gap-2">
                    <div>
                      Day Trading: Buying and selling financial instruments
                      within the same trading day.
                    </div>{" "}
                    <div>
                      Swing Trading: Holding positions for several days to weeks
                      to capture short- to medium-term gains. Position Trading:
                      Holding investments for months or years, focusing on
                      long-term trends.{" "}
                    </div>{" "}
                    <div>
                      Scalping: Making numerous small trades throughout the day
                      to profit from minor price changes.{" "}
                    </div>
                    <div>
                      Algorithmic Trading: Using computer algorithms to execute
                      trades at optimal conditions.
                    </div>
                    <div>
                      High-Frequency Trading (HFT): Using powerful computers to
                      execute large numbers of orders at extremely high speeds.{" "}
                    </div>
                    <div>
                      Options Trading: Trading options contracts that give the
                      right, but not the obligation, to buy or sell an asset at
                      a set price.{" "}
                    </div>
                    <div>
                      Forex Trading: Trading currencies in the foreign exchange
                      market.{" "}
                    </div>
                    <div>
                      Cryptocurrency Trading: Buying and selling digital
                      currencies like Bitcoin and Ethereum.
                    </div>
                  </div>
                }
              />
              <Faq
                question={"What are the risks associated with trading?"}
                answer={
                  <div className="my-2 flex flex-col gap-2">
                    <div>
                      Market Risk: The risk of losses due to market
                      fluctuations.
                    </div>
                    <div>
                      Liquidity Risk: The risk of not being able to buy or sell
                      assets quickly without affecting the price.
                    </div>
                    <div>
                      Leverage Risk: The potential for significant losses when
                      using borrowed funds to trade.
                    </div>
                    <div>
                      Interest Rate Risk: The risk that changes in interest
                      rates will affect asset prices.
                    </div>
                    <div>
                      Credit Risk: The risk that a counterparty will fail to
                      fulfill their financial obligations.
                    </div>
                    <div>
                      Operational Risk: The risk of losses due to system
                      failures, human errors, or fraud.
                    </div>
                    <div>
                      Regulatory Risk: The risk of changes in laws and
                      regulations affecting trading activities.
                    </div>
                    <div>
                      Psychological Risk: The risk of making poor trading
                      decisions due to emotional factors like fear and greed.
                    </div>
                    <div>
                      Economic Risk: The risk that economic events, such as
                      recessions, will negatively impact markets.
                    </div>
                  </div>
                }
              />
              <Faq question={"How do i fund my wallet"} answer="Click on 'Funding' on your dashboard menu, Enter the amount you wish to deposit into your wallet, select your preferred crptocurrency mode of payment, send exact amount to the generated wallet and send a confirmation mail to 'support@believersfx.com'" />
              <Faq question={"How do I withdraw my funds"} answer="Click on 'Withdrawal' on your dashboard menu, Enter the amount you wish to withdraw from your wallet, select your preferred crptocurrency wallet for payment, carefully enter in your wallet address and you will recieve a mail immediately with your withdrawal recipt and transaction details." />
            </div>
            <Image src={faq} sizes="100%" alt="faq" className="lg:w-[40%]" />
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Support;
