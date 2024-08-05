import "./Income.css";
import Card from "./Card";
import Form from "./Form";
import TransBox_Box from "./Dashboard/TransBox_Box";

function Income({ incomeArray }) {
  const boxInfo = {
    title: "Income History",
    header: "Company",
    lastColumn: "Exempt from Maaser",
    activities: incomeArray,
  };
  return (
    <div className="bottom-container">
      <Card>
        <TransBox_Box box={boxInfo} displayNumber={10}></TransBox_Box>
      </Card>
      <Card>
        <Form></Form>
      </Card>
    </div>
  );
}

export default Income;
