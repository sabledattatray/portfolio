document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");

  if (searchInput) {
    searchInput.addEventListener("focus", function () {
      this.parentElement.style.boxShadow = "0 0 0 4px rgba(10, 149, 255, 0.15)";
    });

    searchInput.addEventListener("blur", function () {
      this.parentElement.style.boxShadow = "none";
    });

    // You would add search functionality here
    // For example, making an API call when the user types
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.trim();

      if (searchTerm.length > 2) {
        // In a real app, you would make an API call here
        console.log("Searching for:", searchTerm);
      }
    });
  }
});
