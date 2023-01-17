import { useState } from "react";

interface ITabs {
  name: string;
  content: JSX.Element;
}

const useTabs = (initialIdx: number, allTabs: ITabs[]) => {
  const [currentTab, setCurrentTab] = useState(initialIdx);
  return {
    item: allTabs[currentTab].content,
    setItem: setCurrentTab,
  };
};

export default useTabs;
