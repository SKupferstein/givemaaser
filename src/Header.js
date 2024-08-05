import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="top-container">
      {" "}
      <div className="date"></div>
      <div className="" dates>
        <form class="dates">
          For Dates Between:
          <input type="date" value="2023-01-01" required="required" />
          <input type="date" value="2023-01-01" required="required" />
          <button class="btn-purple submit-btn">Go</button>
        </form>
      </div>
      <div action="#" className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          className="search__input"
          placeholder="Search something here"
        />
      </div>
      <div className="user-nav">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} size="2xl" />
          <span className="user-name">Leora Waldman</span>

          <span>Log Out</span>
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default Header;
