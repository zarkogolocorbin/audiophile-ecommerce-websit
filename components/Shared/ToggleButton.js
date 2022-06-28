export default function ToggleButton({
  counter,
  decrement,
  increment,
  quantity,
}) {
  return (
    <div className={`counter ${counter}-counter`}>
      <p onClick={decrement}>-</p>
      <span>{quantity}</span>
      <p onClick={increment}>+</p>
    </div>
  );
}
