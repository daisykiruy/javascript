let counter = 0;

let span = document.getElementById("value");

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const all = event.currentTarget.classList;
    if (all.contains("increase")) {
      counter++;
      span.style.color = "green";
      span.innerText = counter;
    } else if (all.contains("decrease")) {
      counter--;
      span.style.color = "red";
      span.innerHTML = counter;
    } else {
      counter = 0;
      span.style.color = "black";
      span.textContent = counter;
    }
  });
});
