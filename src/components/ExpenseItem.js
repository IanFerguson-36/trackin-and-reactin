import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 19 2021</div>
      <div className="expense-item__description">
        <h2>Car Inusrance</h2>
        <div className="expense-item__price">$69</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
