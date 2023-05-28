import {React} from "react";
import Stocks from "./Stocks";
import Dashboard from "./Dashboard";
import "./StockList.css";

const StockList = () => {

  return (
    <div className="stocklist">
      <Stocks/>
      <Dashboard/>
    </div>
  );
};

export default StockList;
