import styles from "./TabButtons.module.css";

const TabButtons = ({ onClick, activeTab, tabs }) => {
  return (
    <div className={styles.tabsButtons}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={styles.tabsButton}
          style={{
            borderBottom: activeTab === index ? "5px solid #d84343" : "none",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
