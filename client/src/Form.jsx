import { useState } from "react";
export default function Form() {
  const [myOrder, setMyOrder] = useState("");

  return (
    <form>
      <label>Customer Name</label>
      <input type="text" name="name" required />
      <label>Order</label>
      <select value={myOrder}>
        <option value="">Please select</option>
        <option value="Pancakes">Pancakes</option>
        <option value="French Toast">French Toast</option>
        <option value="Benedict">Eggs Benedict</option>
        <option value="Royale">Eggs Royale</option>
        <option value="Florentine">Eggs Florentine</option>
      </select>
      <input type="text" required />
    </form>
  );
}
