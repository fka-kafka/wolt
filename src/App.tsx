import { useState } from "react";
import handleSubmit from "./modules/submitModule.ts";

function App() {
  const [cartValue, setCartValue] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [items, setItems] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const today: Date = new Date();
  const min: string = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}T00:00`;

  return (
    <section className="calculator">
      <h1 className="header">Delivery Fee calculator</h1>

      <form
        className="to__deliver"
        onSubmit={(e) => handleSubmit(e, cartValue, distance, items, time)}
      >
        <div>
          <label htmlFor="value">Cart value (€):</label>
          <input
            id="value"
            name="cartValue"
            type="text"
            required
            value={cartValue}
            onChange={(e) => setCartValue(e.target.value)}
            className="to__deliver-value"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="distance">Delivery distance (m):</label>
          <input
            id="distance"
            name="distance"
            type="text"
            required
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="to__deliver-distance"
            placeholder="0"
          />
        </div>

        <div>
          <label htmlFor="items">Cart items: </label>
          <input
            id="items"
            name="items"
            type="text"
            required
            value={items}
            onChange={(e) => setItems(e.target.value)}
            placeholder="0"
            className="to__deliver-items"
          />
        </div>

        <div>
          <label htmlFor="time">Order time: </label>
          <input
            id="time"
            name="time"
            type="datetime-local"
            value={time}
            min={min}
            onChange={(e) => setTime(e.target.value)}
            className="to__deliver-time"
            required
          />
        </div>

        <button type="submit">Calculate</button>
      </form>
    </section>
  );
}

export default App;
