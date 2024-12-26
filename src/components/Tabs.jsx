import { useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabsButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={styles.tabsButton}
            style={{
              borderBottom: activeTab === index ? "5px solid #d84343" : "none",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabsContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
