import "./BalanceBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { numberSettings } from "../NumberSettings";
import { GetTotal } from "./Totals";

function BalanceBox({ incomeArray, donationsArray }) {
  const incomToMaaser = incomeArray.filter((income) => !income.exempt);
  return (
    <div>
      <div className="header-container">
        <h3 className="section-header">Your Ma'aser Balance</h3>
      </div>
      <h1 className="price">
        $
        {(
          GetTotal(donationsArray) -
          GetTotal(incomToMaaser) / 10
        ).toLocaleString("en-US", numberSettings)}{" "}
        <span className="price-currency">(USD)</span>
      </h1>
      <p>From Jan 01, 2023 to May 24, 2023</p>
      <div className="button-box">
        <button className="btn btn-purple">
          <FontAwesomeIcon icon={faCircleDollarToSlot} size="xl" />

          <span>Donate</span>
        </button>
      </div>
    </div>
  );
}

export default BalanceBox;
