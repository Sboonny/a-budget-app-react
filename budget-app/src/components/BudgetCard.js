import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
const cardColor= [] 

export default function BudgetCard({ name, max, amount }) {
  (max < amount)
    ? cardColor.push("bg-danger", "bg-opacity-10")
    : cardColor.push("bg-light");

  return (
    <Card className={cardColor.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2"> {name} </div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            <span className="text-muted- fs-6 ms-1">
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVarient(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button variant="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expense</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

const getProgressBarVarient = (amount, max) => {
  const ratio = amount / max;
  return ratio < 0.5 ? "primary" : ratio < 0.75 ? "warning" : "danger";
};
