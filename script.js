console.log("App Loaded ✅");

// balance set
let balance = 12.50;
document.getElementById("balance").innerText = balance.toFixed(2);

// নিচে dummy content add
const content = document.getElementById("content");

content.innerHTML = `
  <h3>Recent Activity</h3>
  <ul>
    <li>Earned +2.00 USDT</li>
    <li>Earned +1.50 USDT</li>
    <li>Earned +3.00 USDT</li>
  </ul>
`;