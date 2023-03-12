// Write your code here!
const main = document.querySelector('#main');
main.remove();

document.addEventListener("DOMContentLoaded", function() {
  const newHeader = document.createElement("h1");
  newHeader.id = "victory";
  newHeader.innerHTML = "Your-Name is the champion";
  document.body.appendChild(newHeader);
});

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Your Name is the champion";
document.body.appendChild(newHeader);
