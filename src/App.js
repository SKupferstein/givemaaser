import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./SideBar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Income from "./Income";
import { catagories } from "./Catagories";

function App() {
  const [page, updatePage] = useState("Dashboard");
  const [yes, no] = [
    { Catagory: "Yes", icon: faCheck },
    { Catagory: "No", icon: faXmark },
  ];
  const [incomeArray, updateIncomeArray] = useState([
    {
      name: "Compuskills",
      date: "Jan 01,2023",
      amount: 5000,
      exempt: true,
    },
    {
      name: "Agency",
      date: "Jan 01,2023",
      amount: 2000,
      exempt: false,
    },
    {
      name: "Agency",
      date: "Jan 01,2023",
      amount: 2000,
      exempt: false,
    },
    {
      name: "Agency",
      date: "Jan 01,2023",
      amount: 2000,
      exempt: true,
    },
    {
      name: "Agency",
      date: "Jan 01,2023",
      amount: 2000,
      exempt: false,
    },
    {
      name: "Agency",
      date: "Jan 01,2023",
      amount: 2000,
      exempt: false,
    },
    {
      name: "Tax returns",
      date: "Jan 01,2023",
      amount: 3000,
      exempt: true,
    },
  ]);
  const [donationsArray, updateDonations] = useState([
    {
      name: "Yad Eliezer",
      date: "Jan 01,2023",
      amount: 100,
      catagory: 2,
    },
    {
      name: "The Kallah Fund",
      date: "Jan 01,2023",
      amount: 200,
      catagory: 0,
    },
    {
      name: "Kollel",
      date: "Jan 01,2023",
      amount: 100,
      catagory: 3,
    },
    {
      name: "Kollel",
      date: "Jan 01,2023",
      amount: 50,
      catagory: 2,
    },
    {
      name: "Kollel",
      date: "Jan 01,2023",
      amount: 50,
      catagory: 1,
    },
  ]);

  return (
    <body>
      <div className="container">
        <Sidebar updatePage={updatePage} page={page}></Sidebar>
        <main class="main-content">
          <Header></Header>
          {page == "Dashboard" && (
            <Dashboard
              incomeArray={incomeArray}
              donationsArray={donationsArray}
            ></Dashboard>
          )}
          {page == "Income" && <Income incomeArray={incomeArray}></Income>}
          {page == "Donations" && <div>You are in donations</div>}
          {page == "Inbox" && <div>You are in Inbox</div>}
          {page == "Settings" && <div>You are in Settings</div>}
        </main>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </body>
  );
}

export default App;
