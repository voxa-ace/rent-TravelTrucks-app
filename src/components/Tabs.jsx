import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs, activeTab }) => {
  return (
    <>
      <div className={styles.tabsContent}>{tabs[activeTab].content}</div>
    </>
  );
};

export default Tabs;
