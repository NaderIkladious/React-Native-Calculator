
export default function operate(numberOne, numberTwo, operation) {
  const one = numberOne || "0";
  const two = numberTwo || "0";
  if (operation === "+") {
    return parseFloat(parseFloat(one) + parseFloat(two)).toString();
  }
  if (operation === "-") {
    return parseFloat(parseFloat(one) - parseFloat(two)).toString();
  }
  if (operation === "x") {
    return parseFloat(parseFloat(one) * parseFloat(two)).toString();
  }
  if (operation === "÷") {
    return parseFloat(parseFloat(one) / parseFloat(two)).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}