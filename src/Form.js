import { catagories } from "./Catagories";

function Form() {
  return (
    <div class="transaction-box">
      <div class="header-container">
        <h3 class="section-header"></h3>
        <form>
          <div>
            <label id="name" htmlFor="name">
              Company Name
            </label>
            <br />
            <input type="text" name="name" id="name"></input>
          </div>
          <div>
            <label id="date" htmlFor="date">
              Date
            </label>
            <br />
            <input type="date" name="date" id="date"></input>
          </div>
          <div>
            <label id="amount" htmlFor="amount">
              Amount
            </label>
            <br />
            <input type="number" name="amount" id="amount"></input>
          </div>
          <div>
            <label id="catagories" htmlFor="catagories">
              Catagory
            </label>
            <br />
            {catagories.map(function (cg) {
              return;
            })}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
