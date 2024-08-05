import "./Main_Right.css";
import BalanceBox from "./BalanceBox";
import Card from "../Card";
import SpendingBox from "./SpendingBox";

function Main_Right({ incomeArray, donationsArray }) {
  return (
    <div className="bottom-container__right">
      <Card>
        <BalanceBox
          incomeArray={incomeArray}
          donationsArray={donationsArray}
        ></BalanceBox>
      </Card>
      <Card>
        <SpendingBox donationsArray={donationsArray}></SpendingBox>
      </Card>
    </div>
  );
}

export default Main_Right;
