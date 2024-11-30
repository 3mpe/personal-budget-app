import React, { useCallback, useEffect, useRef, useState } from "react";
import Storage from "@/app/utils/Storage";
import { useBudget } from "@/app/context/BudgetContext";

const BudgetSettings = () => {
  const { budgetLimit, setBudgetLimit } = useBudget();

  const handleBudgetSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setBudgetLimit(budgetLimit);
      Storage.saveStorage(Storage.keys.BUDGET_LIMIT, budgetLimit);
    },
    [budgetLimit, setBudgetLimit]
  );

  const handleOnchange = useCallback(
    (e) => {
      setBudgetLimit(e.target.value);
    },
    [setBudgetLimit]
  );

  return (
    <form
      onSubmit={handleBudgetSubmit}
      className="mb-8 p-6 bg-white border rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Bütçe Limiti Ayarları
      </h2>
      <div className="mb-4">
        <label
          htmlFor="budgetLimit"
          className="block text-lg font-medium text-gray-700"
        >
          Bütçe Limiti:
        </label>
        <input
          type="number"
          name="budgetLimit"
          value={budgetLimit}
          onChange={handleOnchange}
          className="border p-3 w-full rounded-md mt-2"
          placeholder="Bütçe limiti girin"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white p-3 w-full rounded-md hover:bg-green-700 transition duration-300"
      >
        Bütçeyi Kaydet
      </button>
    </form>
  );
};

export default BudgetSettings;
