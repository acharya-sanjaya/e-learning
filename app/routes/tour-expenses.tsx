import {useState} from "react";
import Button from "~/components/ShiningButton";

interface ExpenseType {
  name: string;
  amount: number;
  quantity: number;
}

interface ExpenseFieldProps {
  expense: ExpenseType;
  index: number;
  updateExpense: (index: number, newAmount: number, newQuantity: number) => void;
}

const ExpenseField = ({expense, index, updateExpense}: ExpenseFieldProps) => {
  return (
    <>
      <td className="px-2">{expense.name}</td>
      <td>
        <input
          type="number"
          className="w-full bg-transparent px-2 text-center"
          value={expense.amount}
          onChange={(e) => updateExpense(index, Number(e.target.value), expense.quantity)}
        />
      </td>
      <td>
        <input
          type="number"
          className="w-full bg-transparent px-2 text-center"
          value={expense.quantity}
          onChange={(e) => updateExpense(index, expense.amount, Number(e.target.value))}
        />
      </td>
      <td className="px-2 text-right">{expense.amount * expense.quantity}</td>
    </>
  );
};

const TourExpenses = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([
    {name: "SnacksM", amount: 70, quantity: 90},
    {name: "Lunch", amount: 300, quantity: 90},
    {name: "SnacksE", amount: 80, quantity: 90},
    {name: "Bus Fare", amount: 20000, quantity: 2},
    {name: "TS", amount: 80, quantity: 78},
    {name: "TT", amount: 150, quantity: 12},
    {name: "medical", amount: 2000, quantity: 1},
  ]);

  // New expense inputs
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [newQuantity, setNewQuantity] = useState(1);

  // Update expense in parent state
  const updateExpense = (index: number, newAmount: number, newQuantity: number) => {
    setExpenses((prev) => {
      const newExpenses = [...prev];
      newExpenses[index] = {...newExpenses[index], amount: newAmount, quantity: newQuantity};
      return newExpenses;
    });
  };

  // Add new expense
  const addExpense = () => {
    if (!newName.trim()) return;
    setExpenses((prev) => [...prev, {name: newName, amount: newAmount, quantity: newQuantity}]);
    setNewName("");
    setNewAmount(0);
    setNewQuantity(1);
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount * exp.quantity, 0);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-auto p-4 text-[8px]">
      <div className="flex w-fit flex-col gap-4 rounded-xl border-2 p-4">
        {/* Add New Expense */}
        <div className="flex gap-2">
          <input
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border px-2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(Number(e.target.value))}
            className="w-20 border px-2"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
            className="w-20 border px-2"
          />
          <button className="border px-4" onClick={addExpense}>
            Add
          </button>
        </div>

        {/* Expenses Table */}
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border px-2">Expense</th>
              <th className="border px-2">Amount</th>
              <th className="border px-2">Quantity</th>
              <th className="border px-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="border">
                <ExpenseField expense={expense} index={index} updateExpense={updateExpense} />
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right font-bold">Total Expenses: {totalExpenses}</div>

        {/* Calculate Button */}
        <Button label="Calculate" />
      </div>
    </div>
  );
};

export default TourExpenses;
