document.getElementById("nextButton").addEventListener("click", function() {
    var cardSection = document.getElementById("cardSection");
    if (cardSection.style.display === "none") {
      cardSection.style.display = "block";
    } else {
      cardSection.style.display = "none";
    }
  });