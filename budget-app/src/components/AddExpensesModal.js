import  { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetContexts";

export default function AddExpensesModal({ show, handleClose, defaultBudgetId }) {
  
  const { addExpenses, budgets } = useBudgets()
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    addExpenses({
      descriptionRef: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
             ref={descriptionRef}
             type="text" 
             required 
             />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              min={0}
              step={0.01}
              required
            />
          </Form.Group> <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}
            >
              {budgets.map(budgets => {
                <option key={budgets.id} value={budgets.id}>{budgets.name}</option>
              })}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
