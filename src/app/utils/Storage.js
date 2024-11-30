const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const keys = {
  THEME: "theme",
  BUDGET_LIMIT: "budgetLimit",
  EXPENSES: "expenses",
  INCOME: "income",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { saveStorage, getStorage, keys };
