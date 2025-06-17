document.addEventListener("DOMContentLoaded", function () {
    // Select all project cards
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach(card => {
      // Find the title and description elements
      const title = card.querySelector("h2");
      const description = card.querySelector("p");
  
      // Hide the description initially if it exists
      if (description) {
        description.style.display = "none";
      }
  
      card.addEventListener("click", function () {
        if (!description || !title) return;
  
        const isTitleVisible = title.style.display !== "none";
  
        // Toggle visibility
        title.style.display = isTitleVisible ? "none" : "block";
        description.style.display = isTitleVisible ? "block" : "none";
      });
    });
  });
  