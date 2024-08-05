import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberSettings } from "../NumberSettings";

function Total_comp({ rl, header, icon, total, percent }) {
  return (
    <div className={`total-box__${rl}`}>
      <div className="header-container">
        <h3 className="section-header">Total {header}</h3>
        <i className="fa-solid fa-square-dollar"></i>
        <FontAwesomeIcon icon={icon} size="2xl" />
      </div>

      <h1 class="price">
        ${total.toLocaleString("en-US", numberSettings)}
        <span className="price-currency">(USD)</span>
      </h1>
      <p>
        <span className="percentage-increase">{percent}%</span> increase
        compared to last year
      </p>
    </div>
  );
}

export default Total_comp;
