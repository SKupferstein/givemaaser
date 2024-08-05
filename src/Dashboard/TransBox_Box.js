import "./TransBox_Box.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faCircleDollarToSlot,
  faAngleDown,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { numberSettings } from "../NumberSettings";
import { catagories } from "../Catagories";

function TransBox_Box({ box, displayNumber }) {
  return (
    <div class="transaction-box">
      <div class="header-container">
        <h3 class="section-header">{box.title}</h3>
      </div>
      <table class="transaction-history">
        <tr>
          <th>{box.header}</th>
          <th>
            Date
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            Amount
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            {box.lastColumn}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
        </tr>
        {box.activities.slice(0, displayNumber).map(function (item) {
          return (
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircleDollarToSlot} size="xl" />
                {item.name}
              </td>
              <td>{item.date}</td>
              <td>${item.amount.toLocaleString("en-US", numberSettings)}</td>
              <td>
                {item.catagory >= 0 && (
                  <div className="pie-chart__labels-item">
                    <div className="label">
                      <div
                        className={`label__color ${
                          catagories[item.catagory].class
                        }`}
                      ></div>
                      {catagories[item.catagory].name}
                    </div>
                  </div>
                )}
                {item.exempt == true && (
                  <div>
                    <FontAwesomeIcon icon={faCheck} size="xl" />
                    &nbsp;Yes
                  </div>
                )}
                {item.exempt == false && (
                  <div>
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                    &nbsp;No
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </table>
      <div class="footer-container ">
        <button class="btn btn-white ">See More..</button>
      </div>
    </div>
  );
}

export default TransBox_Box;
