import React from "react";

const TradeStatistics = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly ">
      <div className="row1 flex flex-col w-full justify-between p-4">
        <div className="flex justify-between ">
          <span>Total Profit:</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span>Daily  Profit:</span>
          <span>0.000%</span>
        </div>
        <div className="flex justify-between">
          <span>Weekly  Profit:</span>
          <span>0.000%</span>
        </div>
        <div className="flex justify-between">
          <span>Drawdown:</span>
          <span>670.170%</span>
        </div>
        <div className="flex justify-between">
          <span>Profit Factor:</span>
          <span>0.000%</span>
        </div>
        <div className="flex justify-between">
          <span># Trades Per Week:</span>
          <span>17.73</span>
        </div>
        <div className="flex justify-between">
          <span>Days Traded:</span>
          <span>917</span>
        </div>
      </div>
      <div className="row2 w-full p-4">
        <div className="flex justify-between">
            <span># of Trades:</span>
            <span>2323</span>
        </div>
        <div className="flex justify-between">
            <span># Trades won:</span>
            <span>1604</span>
        </div>
        <div className="flex justify-between">
            <span># Trades lost:</span>
            <span>718</span>
        </div>
        <div className="flex justify-between">
            <span># Long Trades:</span>
            <span>889</span>
        </div>
        <div className="flex justify-between">
            <span># Short Trades:</span>
            <span>1434</span>
        </div>
        <div className="flex justify-between">
            <span># Open Trades:</span>
            <span>15</span>
        </div>
        <div className="flex justify-between">
            <span>Avg Trade Duration:</span>
            <span>51:06:14</span>
        </div>
        <div className="flex justify-between">
            <span>Win Ratio:</span>
            <span>2</span>
        </div>
      </div>
      <div className="row3 w-full p-4">
        <div className="flex justify-between">
            <span>Best Trade:</span>
            <span>173.161%</span>
        </div>
        <div className="flex justify-between">
            <span>Worst Trade:</span>
            <span>-42.931%</span>
        </div>
        <div className="flex justify-between">
            <span>Won Trades Profit:</span>
            <span>195.121%</span>
        </div>
        <div className="flex justify-between">
            <span>Lost Trades Profit:</span>
            <span>0.000%</span>
        </div>
        <div className="flex justify-between">
            <span>Longest Winning Streak:</span>
            <span>82</span>
        </div>
        <div className="flex justify-between">
            <span>Longest Losing Streak:</span>
            <span>9</span>
        </div>
      </div>
    </div>
  );
};

export default TradeStatistics;
