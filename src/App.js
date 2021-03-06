import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Cool Ranch Doritos", amount: 1000, date: new Date(2021, 4, 19) },
    { title: "Donuts", amount: 1200, date: new Date(2021, 4, 20) },
    { title: "Waffles", amount: 1300, date: new Date(2021, 4, 21) },
    { title: "Ferrari", amount: 6, date: new Date(2021, 4, 21) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
