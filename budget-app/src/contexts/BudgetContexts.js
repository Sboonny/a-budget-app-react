import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContexts = React.createContext();

export const useBudgets = () => {
  return useContext(BudgetsContexts);
};

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const getBudgetExpenses = (budgetId) =>
    expenses.filter((expenses) => expenses.budgetId === budgetId);

  const addExpenses = (description, amount, budgetId) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: uuidv4(), description, amount, budgetId },
    ]);
  };

  const addBudget = (name, max) => {
    setBudgets((prevBudgets) =>
      prevBudgets.find((budget) => budget.name === name)
        ? prevBudgets
        : [...prevBudgets, { id: uuidv4(), name, max }]
    );
  };

  const deleteBudget = ({ id }) =>
    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.id !== id)
    );

    const deleteExpense = ({ id }) =>
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );

  return (
    <BudgetsContexts.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addBudget,
        addExpenses,
        deleteBudget,
        deleteExpense
      }}
    >
      {children}
    </BudgetsContexts.Provider>
  );
};
