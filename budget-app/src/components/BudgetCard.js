import { Card, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
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
        <ProgressBar className="rounded-pill" variant={getProgressBarVarient(amount, max)} 
        min={0}
        max={max}
        now={amount}/>
      </Card.Body>
    </Card>
  );
}

const getProgressBarVarient = (amount, max) => {
 const ratio = amount / max
 return (ratio < 0.5) ? "primary" : (ratio < 0.75) ? "warning" : "danger"
}