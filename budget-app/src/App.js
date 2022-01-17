import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpensesModal from "./components/AddExpensesModal";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";
import { useBudgets } from "./contexts/BudgetContexts";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpensesModal, setShowAddExpensesModal] = useState(false);
  const [addExpensesModalBudgetId, setAddExpensesModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  const openAddExpensesModal = (budgetId) => {
    setShowAddBudgetModal(true)
    setAddExpensesModalBudgetId(budgetId)
  }


  const budgetCard = budgets.map((budget) => {
    const amount = getBudgetExpenses(budget.id).reduce(
      (total, expenses) => total + expenses.amount,
      0
    );


    return (
      <BudgetCard
        key={budget.id}
        name={budget.name}
        amount={amount}
        max={budget.max}
        openAddExpensesClick={() => openAddExpensesModal(budget.id)}
      />
    );
  });
  return (
    <>
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budgets
          </Button>
          <Button variant="outline-primary" onClick={openAddExpensesModal}>Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgetCard}
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpensesModal
        show={showAddExpensesModal}
        handleClose={() => setShowAddExpensesModal(false)}
      />
    </>
  );
}

export default App;
