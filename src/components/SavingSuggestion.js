import { useBudget } from "@/app/context/BudgetContext";

const SavingsSuggestion = () => {
  const { expenses, budgetLimit } = useBudget();

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  const categorySuggestions = expenses.reduce((suggestions, expense) => {
    const categoryLimit = budgetLimit[expense.category] || 0;
    if (parseFloat(expense.amount) > categoryLimit * 0.8) {
      suggestions.push(
        `Kategori: ${expense.category} - Tasarruf önerisi: Bu kategoride harcamanızı %20 azaltmayı deneyin.`
      );
    }
    return suggestions;
  }, []);

  let generalSuggestion = "";
  if (totalExpenses > budgetLimit * 0.8) {
    generalSuggestion =
      "Dikkat! Bütçenizin %80'ine yaklaştınız. Harcamalarınızı gözden geçirin ve tasarruf yapın.";
  }

  if (totalExpenses > budgetLimit) {
    generalSuggestion =
      "Bütçenizi aştınız! Tasarruf yaparak giderlerinizi dengelemeniz gerekebilir.";
  }

  let incomeSuggestion = "";
  if (totalExpenses > budgetLimit) {
    incomeSuggestion =
      "Geliriniz, giderlerinizin gerisinde kalıyor. Gelir artırıcı yollar aramayı veya giderlerinizi azaltmayı düşünün.";
  }

  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h3 className="text-xl font-semibold">Tasarruf Önerileri</h3>
      {generalSuggestion && <p className="text-red-500">{generalSuggestion}</p>}
      {incomeSuggestion && <p className="text-red-500">{incomeSuggestion}</p>}

      {categorySuggestions.length > 0 && (
        <div>
          <h4 className="text-lg font-medium mt-2">Kategori Bazlı Öneriler:</h4>
          <ul className="list-disc pl-5">
            {categorySuggestions.map((suggestion, index) => (
              <li key={index} className="text-gray-700">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SavingsSuggestion;
