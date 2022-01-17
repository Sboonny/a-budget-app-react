import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";
import BudgetCard from "./BudgetCard";

export default function UncategorizedBudgetCard(props) {
  const getBudgetExpenses = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expenses) => total + expenses.amount,
    0
  );

  return amount === 0 ? null : (
    <BudgetCard amount={amount} name="Uncategorized" />
  );
}
