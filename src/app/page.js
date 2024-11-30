"use client";
import { useState, useEffect } from "react";

import BudgetSettings from "@/components/BudgetSettings";
import Form from "@/components/Form";
import Chart from "@/components/Chart";
import { useTheme } from "./context/ThemeContext";
import DownloadPDF from "@/components/DownloadPdf";
import SavingsSuggestion from "@/components/SavingSuggestion";

export default function Home() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [alert, setAlert] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg mt-8 mb-8 text-gray-700 dark:text-gray-700 dark:bg-background-dark dark:text-text-dark">
      <h1 className="text-4xl font-bold text-center text-gray-700 dark:bg-background-dark dark:text-text-dark mb-8">
        Gelir ve Gider Takip Uygulaması
      </h1>
      <button
        className="bg-blue-600 text-white p-3 w-full rounded-md hover:bg-blue-700 transition duration-300 mb-3"
        onClick={() => setIsDarkMode(() => !isDarkMode)}
      >
        Tema Değiştir
      </button>

      {/* Bütçe Ayarları */}
      <BudgetSettings />

      {/* Gelir ve Gider Ekleme Formu */}
      <Form setAlert={setAlert} />

      {/* Uyarı */}
      {alert && (
        <>
          <div className="text-red-500 mt-4 text-center font-semibold">
            {alert}
          </div>
          {/* Tasarruf Önerisi */}
          <SavingsSuggestion />
        </>
      )}

      {/* Grafikler */}
      <Chart />

      {/* PDF İndirme */}
      <DownloadPDF />
    </div>
  );
}
