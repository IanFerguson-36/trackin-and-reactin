import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Cool Ranch Doritos", amount: 1000, date: new Date(2021, 4, 19) },
    { title: "Donuts", amount: 1200, date: new Date(2021, 4, 20) },
    { title: "Waffles", amount: 1300, date: new Date(2021, 4, 21) },
    { title: "Ferrari", amount: 6, date: new Date(2021, 4, 21) },
  ];
  return (
    <div>
      <h2> Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
