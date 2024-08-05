import "./TransBox.css";
import TransBox_Box from "./TransBox_Box";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { catagories } from "../Catagories";

function TransBox({ incomeArray, donationsArray }) {
  const boxInfo = [
    {
      title: "Income History",
      header: "Company",
      lastColumn: "Exempt from Maaser",
      activities: incomeArray,
    },
    {
      title: "Donation History",
      header: "Orgenization",
      lastColumn: "Category",
      activities: donationsArray,
    },
  ];
  return (
    <div>
      {boxInfo.map(function (item) {
        return (
          <Card>
            <TransBox_Box box={item} displayNumber={3}></TransBox_Box>
          </Card>
        );
      })}
    </div>
  );
}

export default TransBox;
