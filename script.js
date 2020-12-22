

document.querySelector("form").onsubmit = () => {
  if (document.querySelector(".form-control").value === "") {
    document.querySelector("#result").classList.add("red");
    document.querySelector("#result").innerHTML ="Please fill-up the above fields!!";
    return false;
  } else {
    const currency = document.querySelector("#currency").value.toUpperCase();
    const base = document.querySelector("#base").value.toUpperCase();
    const amount = document.querySelector("#amount").value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then((response) => response.json())
      .then((data) => {
        const rates = data.rates[currency] * amount;
        const baseCurr = data.base;
        if (rates != undefined) {
          
          document.querySelector("#result").innerHTML = `${amount} ${baseCurr} is equals to ${rates.toFixed(3)} ${currency}.`;
          document.querySelector("#result").classList.add("green");
          console.log(data[rates]);
        } else {
          document.querySelector("#result").innerHTML = "Invalid Input :|";
        }
      })
      .catch((error) => {
        console.log("Error!", error);
      });
    return false;
  }
};
