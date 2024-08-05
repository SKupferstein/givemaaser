import "./TotalBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import Total_comp from "./Total_comp";
import { GetTotal } from "./Totals";

function TotalBox({ incomeArray, donationsArray }) {
  const totalComps = [
    {
      rl: "left",
      header: "Income",
      icon: faDollarSign,
      total: GetTotal(incomeArray),
      percent: 100,
    },
    {
      rl: "right",
      header: "Donations",
      icon: faHandHoldingHeart,
      total: GetTotal(donationsArray),
      percent: 100,
    },
  ];
  return (
    <div class="box total-box">
      {totalComps.map((comp, index) => {
        return (
          <Total_comp
            rl={comp.rl}
            header={comp.header}
            icon={comp.icon}
            total={comp.total}
            percent={comp.percent}
            key={index}
          ></Total_comp>
        );
      })}
    </div>
  );
}

export default TotalBox;
