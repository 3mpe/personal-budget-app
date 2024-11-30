"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import Storage from "../utils/Storage";

const BudgetContext = createContext();
export const BudgetProvider = ({ children }) => {
  const [budgetLimit, setBudgetLimit] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    const budget = Storage.getStorage(Storage.keys.BUDGET_LIMIT);
    if (budget) setBudgetLimit(budget);
  }, []);

  useEffect(() => {
    const storedExpenses = Storage.getStorage(Storage.keys.EXPENSES) || [];
    setExpenses(storedExpenses);

    const storedIncome = Storage.getStorage(Storage.keys.INCOME) || [];
    setIncomeData(storedIncome);

  }, [setExpenses, setIncomeData]);

  return (
    <BudgetContext.Provider
      value={{
        budgetLimit,
        setBudgetLimit,
        expenses,
        setExpenses,
        incomeData,
        setIncomeData,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
