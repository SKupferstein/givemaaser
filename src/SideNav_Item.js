import "./SideNav_Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNav_Item({ tag, icon, updatePage, page }) {
  function clickNavHandler(tag) {
    updatePage(tag);
  }
  return (
    <li
      onClick={() => clickNavHandler(tag)}
      className={`side-nav__item ${
        page == tag ? "side-nav__item-active" : ""
      } `}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{tag}</span>
    </li>
  );
}

export default SideNav_Item;
