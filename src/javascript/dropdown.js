document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("europe-dropdown").addEventListener("click", function() {
      document.querySelector(".europe").classList.toggle("europe-hide")
  });

  document.getElementById("health-dropdown").addEventListener("click", function() {
      document.querySelector(".health").classList.toggle("health-hide")
  });

  document.getElementById("sports-dropdown").addEventListener("click", function() {
      document.querySelector(".sports").classList.toggle("sports-hide")
  });

  document.getElementById("business-dropdown").addEventListener("click", function() {
      document.querySelector(".business").classList.toggle("business-hide")
  });
  
  document.getElementById("travel-dropdown").addEventListener("click", function() {
      document.querySelector(".travel").classList.toggle("travel-hide")
  });
});
