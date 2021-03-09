import React from "react";

const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }

    return (
        <div style={{ margin: "auto", width: "70%", textAlign: "left" }}>
            {
                allTabs.map((item, index) => (
                    <div className={`tab ${tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
                        { item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;