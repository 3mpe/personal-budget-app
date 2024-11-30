import { jsPDF } from "jspdf";
import { useBudget } from "@/app/context/BudgetContext";
import { useMemo } from "react";

const DownloadPDF = () => {
  const { expenses, incomeData } = useBudget();

  const generatePDF = useMemo(() => {
    const doc = new jsPDF();

    // Başlık
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Gelir ve Gider Raporu", 20, 20);

    let y = 30;

    // Gelir
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Gelirler:", 20, y);
    incomeData.forEach((item, index) => {
      y += 10;
      doc.text(`Gelir ${index + 1}: ${item.amount} TL`, 20, y);
    });

    y += 20;

    // Giderler
    doc.text("Giderler:", 20, y);
    expenses.forEach((item, index) => {
      y += 10;
      doc.text(
        `Gider ${index + 1} (${item.category}): ${item.amount} TL`,
        20,
        y
      );
    });

    doc.save("rapor.pdf");
  }, [expenses, incomeData]);

  return (
    <button
      onClick={generatePDF}
      className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
    >
      Raporu İndir
    </button>
  );
};

export default DownloadPDF;
