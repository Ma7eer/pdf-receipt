const form = document.querySelector("form");
// document.querySelector('button').addEventListener('click', function() {
//   var doc = new jsPDF()

// doc.text('Hello world!', 10, 10)
// doc.save('a4.pdf')
// })

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("works");
})