import { useContext } from "react";
import { FormContext } from "../context/FormContext.tsx";

const Form = () => {
  const { formData, handleInputChange, handleSubmit, deliveryFeeContent } =
    useContext(FormContext);
  return (
    <section className="calculator">
      <h1 className="header">Delivery Fee calculator</h1>

      <form className="to__deliver" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="value">Cart value (€):</label>
          <input
            id="value"
            className="to__deliver-value"
            name="cartValue"
            type="text"
            placeholder="0.00"
            value={formData.cartValue}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="distance">Delivery distance (m):</label>
          <input
            id="distance"
            className="to__deliver-distance"
            name="distance"
            type="text"
            placeholder="0"
            value={formData.distance}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="items">Cart items: </label>
          <input
            id="items"
            name="items"
            className="to__deliver-items"
            type="text"
            placeholder="0"
            value={formData.items}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Order time: </label>
          <input
            id="time"
            className="to__deliver-time"
            name="time"
            type="datetime-local"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Calculate</button>
      </form>
      {deliveryFeeContent}
    </section>
  );
};

export default Form;