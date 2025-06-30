document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  const contactCard = document.getElementById("contactCard");
  const closeCard = document.getElementById("closeCard");

  contactBtn.addEventListener("click", () => {
    contactCard.classList.add("show");
    document.body.classList.add("card-open");
  });

  closeCard.addEventListener("click", () => {
    contactCard.classList.remove("show");
    document.body.classList.remove("card-open");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tictactoebox = document.querySelector(".tictactoebox");

  if (tictactoebox) {
    tictactoebox.addEventListener("click", function () {
      alert("You clicked the Tic Tac Toe box!");
    });
  }
});




 

