// Calculates tip based on the given percent
const calculateTip = (percent) => {
  const bill = document.getElementById("bill").value;
  const tipPercentage = percent / 100;
  const tipAmount = bill * tipPercentage;
  document.getElementById("tip").innerHTML = `You Should Tip $${tipAmount}`;
};
