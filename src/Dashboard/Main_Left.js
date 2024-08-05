import "./Main_Left.css";
import Card from "../Card";
import TotalBox from "./TotalBox";
import TransBox from "./TransBox";

function Main_Left({ incomeArray, donationsArray }) {
  return (
    <div class="bottom-container__left">
      <Card>
        <TotalBox
          incomeArray={incomeArray}
          donationsArray={donationsArray}
        ></TotalBox>
      </Card>

      <TransBox
        incomeArray={incomeArray}
        donationsArray={donationsArray}
      ></TransBox>
    </div>
  );
}

export default Main_Left;
