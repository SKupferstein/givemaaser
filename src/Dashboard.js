import "./Dashboard.css";
import Card from "./Card";
import Main_Left from "./Dashboard/Main_Left";
import Main_Right from "./Dashboard/Main_Right";

function Dashboard({ incomeArray, donationsArray }) {
  return (
    <div className="bottom-container">
      <Main_Left
        incomeArray={incomeArray}
        donationsArray={donationsArray}
      ></Main_Left>
      <Main_Right
        incomeArray={incomeArray}
        donationsArray={donationsArray}
      ></Main_Right>
    </div>
  );
}

export default Dashboard;
