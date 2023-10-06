import "./Expenseitem.css";
function Expenseitem() {
  const expenseData = new Date(2021, 2, 28);
  const expenseTitle = "food";
  const expenseAmount = 256;
  return (
    <div className="main">
      <h1>Expense Items</h1>

      <div id="one">Food Rs 10</div>
      <div d="one">Petrol Rs 100</div>

      <div d="one">Movies Rs 200</div>

      <h5> spent money {Math.random()}</h5>
    </div>
  );
}
export default Expenseitem;
