import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SubscriptionCard from "./SubscriptionCard";

const PlanSection = () => {
  return (
    <div className="w-full bg-hero-pattern bg-cover min-h-[40vh] p-4 pt-[50px] lg:pb-12 flex lg:flex-col items-center justify-center flex-wrap">
      <div className="text-[32px] text-primary text-center mb-5 ">
        Our Trading Subscription Plans
      </div>
      <div className="lg:w-full lg:flex lg:items-center lg:justify-evenly lg:gap-5">
        <SubscriptionCard
          name="STARTER PLAN"
          desc="Within 14 days"
          ct="35%"
          hashing="7"
          min="100"
          max="499"
          range="300"
          slider="40"
        />
        <SubscriptionCard
          name="SILVER PLAN"
          desc="10% daily"
          ct="50%"
          hashing="6"
          min="500"
          max="4999"
          range="800"
          slider="50"
        />
        <SubscriptionCard
          name="GOLD PLAN"
          desc="15% daily"
          ct="75%"
          hashing="5"
          min="5000"
          max="9999"
          range="7500"
          slider="75"
        />
      </div>
    </div>
  );
};

export default PlanSection;
