import { useBudget } from "@/app/context/BudgetContext";
import Storage from "@/app/utils/Storage";
import React, { useCallback, useEffect, useState } from "react";

const Form = ({ setAlert }) => {
  const { expenses, setExpenses, budgetLimit, incomeData, setIncomeData } =
    useBudget();

  const [income, setIncome] = useState(incomeData?.amount ?? "");
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const checkBudgetLimit = useCallback(
    (expenseAmount) => {
      if (budgetLimit) {
        const currentTotal =
          expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0) +
          parseFloat(expenseAmount);
        if (currentTotal >= budgetLimit * 0.8) {
          setAlert("Dikkat! Harcamanızın %80'ine yaklaştınız.");
        } else {
          setAlert("");
        }
      }
    },
    [budgetLimit, expenses, setAlert]
  );

  const handleIncomeSubmit = useCallback(() => {
    if (income) {
      const newIncome = [
        ...incomeData,
        { amount: income, date: null, category: "Income" },
      ];
      Storage.saveStorage(Storage.keys.INCOME, newIncome);
      setIncomeData(newIncome);
    }
  }, [income, incomeData, setIncomeData]);

  const handleExpenseSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (expense) {
        const newExpense = { amount: expense, date, category };
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        Storage.saveStorage(Storage.keys.EXPENSES, updatedExpenses);

        checkBudgetLimit(newExpense.amount);
      }

      setIncome("");
      setExpense("");
      setCategory("");
      setDate("");
    },
    [expense, date, category, expenses, setExpenses, checkBudgetLimit]
  );

  return (
    <>
      <form
        onSubmit={handleIncomeSubmit}
        className="mb-8 p-6 bg-white border rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Gelir Ekle
        </h2>
        <div className="mb-4">
          <label
            htmlFor="income"
            className="block text-lg font-medium"
          >
            Gelir Tutarı:
          </label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border p-3 w-full rounded-md mt-2"
            placeholder="Gelir tutarını girin"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 w-full rounded-md hover:bg-blue-700 transition duration-300"
        >
          Kaydet
          <span className="text-sm font-semibold text-white-500 ml-2">
            ({incomeData.length} Gelir)
          </span>
        </button>
      </form>
      <form
        onSubmit={handleExpenseSubmit}
        className="mb-8 p-6 bg-white border rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Gider Ekle
        </h2>

        <div className="mb-4">
          <label
            htmlFor="expense"
            className="block text-lg font-medium text-gray-700"
          >
            Gider Tutarı:
          </label>
          <input
            type="number"
            id="expense"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            className="border p-3 w-full rounded-md mt-2"
            placeholder="Gider tutarını girin"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Kategori:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 w-full rounded-md mt-2"
          >
            <option value="">Seçin</option>
            <option value="Yiyecek">Yiyecek</option>
            <option value="Ulaşım">Ulaşım</option>
            <option value="Eğlence">Eğlence</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700"
          >
            Tarih:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-3 w-full rounded-md mt-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 w-full rounded-md hover:bg-blue-700 transition duration-300"
        >
          Kaydet
        </button>
      </form>
    </>
  );
};

export default Form;
