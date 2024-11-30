import React, { useMemo, useState } from "react";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useBudget } from "@/app/context/BudgetContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { expenses, incomeData } = useBudget();

  const expenseCategories = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + parseFloat(item.amount);
    return acc;
  }, {});

  const pieChartData = useMemo(
    () => ({
      labels: Object.keys(expenseCategories),
      datasets: [
        {
          label: "Giderler",
          data: Object.values(expenseCategories),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    }),
    [expenseCategories]
  );

  const totalIncome = incomeData.reduce(
    (acc, item) => acc + parseFloat(item.amount),
    0
  );
  const totalExpense = expenses.reduce(
    (acc, item) => acc + parseFloat(item.amount),
    0
  );

  const barChartData = useMemo(
    () => ({
      labels: ["Gelir", "Gider"],
      datasets: [
        {
          label: "Tutar",
          data: [totalIncome, totalExpense],
          backgroundColor: ["#4caf50", "#f44336"],
        },
      ],
    }),
    [totalExpense, totalIncome]
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Gelir ve Gider Dağılımı
      </h2>

      {/* Gider Kategorileri Grafik */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">
          Gider Kategorileri
        </h3>
        <Pie data={pieChartData} />
      </div>

      {/* Aylık Gelir ve Gider Grafik */}
      <div>
        <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">
          Aylık Gelir ve Gider
        </h3>
        <Bar data={barChartData} />
      </div>
    </div>
  );
};

export default Chart;
