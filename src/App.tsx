import { useState } from "react";

function App() {

  type CalculatorType = {
    cart_value: number,
    delivery_distance: number,
    number_of_items: number,
    time: string
  }

  type CalculatorStateType = { cart: CalculatorType}

  const initState: CalculatorStateType = { cart: {} }

  const [cart, setCart] = useState<CalculatorStateType>(initState)

  const handleSubmit = () => {
    
  }

  return (
    <section className="calculator">
      <h1 className="header">Delivery Fee calculator</h1>

      <form action="" className="to__deliver">
        <div>
          <label htmlFor="value">Cart value (€):</label>
          <input
            id="value"
            type="text"
            className="to__deliver-value"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label htmlFor="distance">Delivery distance (m):</label>
          <input
            id="distance"
            type="text"
            className="to__deliver-distance"
            required
          />
        </div>

        <div>
          <label htmlFor="items">Cart items: </label>
          <input
            id="items"
            type="text"
            className="to__deliver-items"
            required
          />
        </div>

        <div>
          <label htmlFor="date">Delivery date: </label>
          <input id="date" type="date" className="to__deliver-date" required />
        </div>

        <button type="submit" onSubmit={handleSubmit}>Calculate</button>
      </form>
    </section>
  );
}

export default App;
