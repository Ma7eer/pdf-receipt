const form = document.querySelector('form');
const nameInput = document.getElementById('item-name');
const dateInput = document.getElementById('date');
const idInput = document.getElementById('payment-id');
const methodInput = document.getElementById('payment-method');
const paymentInput = document.getElementById('amount');
const unitInput = document.getElementById('unit');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const doc = new jsPDF();

  doc.setFontSize(26);
  doc.setTextColor(92, 76, 76);
  doc.text(20, 20, 'Transaction Details');
  doc.setLineWidth(0.5);
  doc.setDrawColor(214,214,214);
  doc.line(20, 30, 180, 30);
  doc.setFontSize(18);
  doc.text(20, 45, `Name: ${name}`);
  doc.text(20, 65, `Transaction Date: ${date}`);
  doc.text(20, 85, `Transaction ID: ${id}`);
  doc.text(20, 105, `Payment Method: ${method}`);
  doc.text(20, 125, `Charged Amount: ${payment} ${unit}`);

  doc.save('receipt.pdf');
})

let name = nameInput.value;
nameInput.addEventListener('input', (e) => {
  name = e.target.value;
})

let date = dateInput.value;
dateInput.addEventListener('input', (e) => {
  date = e.target.value;
})

let id = idInput.value;
idInput.addEventListener('input', (e) => {
  id = e.target.value;
})

let method = methodInput.value;
methodInput.addEventListener('input', (e) => {
  method = e.target.value;
})

let payment = paymentInput.value;
paymentInput.addEventListener('input', (e) => {
  payment = e.target.value;
})

let unit = unitInput.value;
unitInput.addEventListener('input', (e) => {
  unit = e.target.value;
})