document
  .getElementById("interestForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rateSlider").value) / 100;
    const timesCompounded = parseFloat(
      document.getElementById("timesCompounded").value
    );
    const years = parseFloat(document.getElementById("years").value);

    if (
      isNaN(principal) ||
      isNaN(rate) ||
      isNaN(timesCompounded) ||
      isNaN(years)
    ) {
      document.getElementById("totalAmount").textContent =
        "Please fill in all fields with valid numbers.";
      document.getElementById("totalAmountSection").classList.add("visible");
      return;
    }

    const totalAmount =
      principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years);
    const interest = totalAmount - principal;

    document.getElementById("totalAmount").innerHTML = `
    <p style="margin-bottom: 10px;"><strong>Total Interest (Interest Only):</strong> $${interest.toFixed(
      2
    )}</p>
    <p><strong>Total Amount (Principal + Interest):</strong> $${totalAmount.toFixed(
      2
    )}</p>
  `;

    document.getElementById("totalAmountSection").classList.add("visible");

    const gifPopup = document.getElementById("gifPopup");
    gifPopup.style.display = "block";
    gifPopup.style.opacity = 1;

    setTimeout(() => {
      gifPopup.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
      gifPopup.style.display = "none";
    }, 2000);
  });

document.getElementById("rateSlider").addEventListener("input", function () {
  document.getElementById("rateValue").textContent = `${this.value}%`;
});
