import { useBudgets } from "../contexts/BudgetContexts";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce(
    (total, expenses) => total + expenses.amount,
    0
  );

  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);

  return amount === 0 ? null : (
    <BudgetCard amount={amount} name="Total" max={max} hideButtons />
  );
}
