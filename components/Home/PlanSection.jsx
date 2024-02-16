import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SubscriptionCard from "./SubscriptionCard";

const PlanSection = () => {
  return (
    <div className="w-full bg-hero-pattern bg-cover min-h-[40vh] p-4 pt-[50px] lg:pb-12 flex lg:flex-col items-center justify-center flex-wrap">
      <div className="text-[32px] text-white text-center mb-5 ">
        Our Trading Subscription Plans
      </div>
      <div className="lg:w-full lg:flex lg:items-center lg:justify-evenly lg:gap-5">
        <SubscriptionCard
          name="STARTER PLAN"
          color='bg-primary'
          accent='text-primary'
          desc="Within 14 days"
          ct="35"
          hashing="7"
          min="100"
          max="499"
          range="300"
          sliderBg="[&::-webkit-slider-runnable-track]:bg-primary/25"
          sliderThumb="[&::-webkit-slider-thumb]:bg-primary"
        />
        <SubscriptionCard
          name="SILVER PLAN"
          color='bg-silver'
          accent='text-silver'
          desc="10% daily"
          ct="50"
          hashing="6"
          min="500"
          max="4999"
          range="800"
          sliderBg="[&::-webkit-slider-runnable-track]:bg-silver/25"
          sliderThumb="[&::-webkit-slider-thumb]:bg-silver"
        />
        <SubscriptionCard
          name="GOLD PLAN"
          color='bg-gold'
          accent='text-gold'
          desc="15% daily"
          ct="75"
          hashing="5"
          min="5000"
          max="10000"
          range="7500"
          sliderBg="[&::-webkit-slider-runnable-track]:bg-gold/25"
          sliderThumb="[&::-webkit-slider-thumb]:bg-gold"
        />
      </div>
    </div>
  );
};

export default PlanSection;
