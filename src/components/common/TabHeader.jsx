const TabHeader = ({ title, activeTab, setActiveTab }) => {
  return (
    <h2
      onClick={() => setActiveTab(title)}
      className={`inter-bolder capitalize text-2xl cursor-pointer ${
        activeTab === title ? 'text-white' : 'text-secondary'
      }`}
    >
      {title}
    </h2>
  );
};

export default TabHeader;
