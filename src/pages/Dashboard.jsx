import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";


const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const [selectedItem, setSelectedItem] = useState(null);

  const handleListItemClick = (item) => {
    const p1 = mockData.results.filter((n) => (n["&id"] === item))
    const p2 = timestamps.results.filter((n) => (n["&id"] === item))
    setSelectedOrderDetails(p1[0].executionDetails);
    setSelectedOrderTimeStamps(p2[0].timestamps)
    setSelectedItem(item);
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={mockData.results.length} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.card}>
            <Card
              cardData={selectedOrderDetails}
              title="Selected Order Details"
            />
          </div>
          <div className={styles.card}>
            <Card
              cardData={selectedOrderTimeStamps}
              title="Selected Order Timestamps"
            />
          </div>
        </div>
        <List rows={mockData.results} item={currency} search={searchText} onItem={handleListItemClick} />
      </div>
    </div>
  );
};

export default Dashboard;
