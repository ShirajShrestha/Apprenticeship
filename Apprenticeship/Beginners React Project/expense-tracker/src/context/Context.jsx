import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("income");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);
  const handleFormSubmit = ({ fromData }) => {
    if (!formData.description || !formData.amount) return;

    setAllTransactions([...allTransactions, { ...formData, id: Date.now() }]);
  };
  console.log(allTransactions);
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}{" "}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
