import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import timestamp from "../../assets/timeStamps.json";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useState } from "react";




const List = ({ rows, item, search, onItem }) => {
  const filtered = rows.filter((row) => {
    return row["&id"].includes(search);
  })
  const fun = (id) => {
    const p = timestamp.results.filter((n) => ((n["&id"] === id)))
    return p[0].timestamps.orderSubmitted;
  };
  const fun2 = () => {
    return item;
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleListItemClick = (item) => {
    // console.log(item);
    onItem(item);
    setSelectedItem(item);
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {item}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filtered.map((row) => (
          <ListRow key={row["k"]} onItemClick={handleListItemClick} > 
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{fun(row["&id"])}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[fun2()]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};


export default List;
