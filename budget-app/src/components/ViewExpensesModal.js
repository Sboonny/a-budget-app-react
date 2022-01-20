import { Modal, Button, Stack } from "react-bootstrap";
import {
  useBudgets,
  UNCATEGORIZED_BUDGET_ID,
} from "../contexts/BudgetContexts";

export default function AddExpensesModal({
  budgetId,
  handleClose,
  defaultIdId,
}) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpenses } =
    useBudgets();

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={budgetId !== null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses -{budget?.name}</div>
            { budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <Button onClick={() =>{
                deleteBudget(budget)
                handleClose()
              }} variant="outline-danger">Delete</Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal>
  );
}
