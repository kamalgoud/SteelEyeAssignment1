import styles from "./ListRow.module.css";

const ListCell = ({ children, onItemClick }) => {
  const handleClick = (item) => {
    // console.log(item[0].props.children);
    onItemClick(item[0].props.children);
  };
  return <tr onClick={() => handleClick(children)} className={styles.cell}>{children}</tr>;
};

export default ListCell;
