let currentPercentage;

// Calculates tip based on the given percent
const calculateTip = (percent) => {
  setCurrentPercentage(percent.toString());
  const bill = document.getElementById("bill").value;
  const tipPercentage = percent / 100;
  const tipAmount = (bill * tipPercentage).toFixed(2);
  document.getElementById("tip").innerHTML = `$${tipAmount}`;
};

// Saves the current tip percentage being shown, and highlights the button for it
const setCurrentPercentage = (newPercentage) => {
  if (currentPercentage) {
    document.getElementById(currentPercentage).className = "";
  }
  currentPercentage = newPercentage;
  document.getElementById(currentPercentage).className = "current-percentage";
};
