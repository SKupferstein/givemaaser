import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMoneyBillTrendUp,
  faCircleDollarToSlot,
  faGear,
  faArrowRightFromBracket,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import SideNav_Item from "./SideNav_Item";
import { useState } from "react";

function Sidebar({ updatePage, page }) {
  const sidebar_list = [
    {
      tag: "Dashboard",
      icon: faHouseChimney,
    },
    { tag: "Income", icon: faMoneyBillTrendUp },
    { tag: "Donations", icon: faCircleDollarToSlot },
    { tag: "Inbox", icon: faMessage },
    { tag: "Settings", icon: faGear },
    {
      tag: "Log Out",
      icon: faArrowRightFromBracket,
    },
  ];

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar__logo">
          <h2 className="sidebar__logo-header">The Ma'aser App</h2>
        </div>
        <ul className="side-nav">
          {sidebar_list.map((list_item, index) => {
            return (
              <SideNav_Item
                tag={list_item.tag}
                icon={list_item.icon}
                key={index}
                updatePage={updatePage}
                page={page}
              ></SideNav_Item>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
