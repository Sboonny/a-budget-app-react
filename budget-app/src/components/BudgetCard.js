import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
const cardColor = [];

export default function BudgetCard({
  name,
  max,
  amount,
  hideButtons,
  openAddExpensesClick,
  onViewExpensesClick,
}) {
  max < amount
    ? cardColor.push("bg-danger", "bg-opacity-10")
    : cardColor.push("bg-light");

  return (
    <Card className={cardColor.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          {/* issue is in this code */}
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
          {/* ^^^^^ */}
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVarient(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={openAddExpensesClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expense
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
}

const getProgressBarVarient = (amount, max) => {
  const ratio = amount / max;
  return ratio < 0.5 ? "primary" : ratio < 0.75 ? "warning" : "danger";
};
