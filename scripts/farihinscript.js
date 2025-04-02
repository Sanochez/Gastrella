document.addEventListener("DOMContentLoaded", function () {
    let selectedRating = 0;  // To track the selected rating

    // Get all the star elements
    const stars = document.querySelectorAll(".star");

    // Add mouseover event to highlight the stars when hovered
    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {
            // Highlight stars on hover 
            resetStars();  
            for (let i = 0; i <= index; i++) {
                stars[i].style.color = "gold";  
            }
        });

        // When a star is clicked, set the rating
        star.addEventListener("click", () => {
            selectedRating = index + 1;  // Set the rating to the clicked star index + 1
            document.getElementById("rating").value = selectedRating;  // Update the hidden input
            resetStars();  // Reset all stars to gray
            for (let i = 0; i < selectedRating; i++) {
                stars[i].style.color = "gold";  // Highlight the selected stars
            }
        });
    });

    
    function resetStars() {
        stars.forEach(star => {
            star.style.color = "gray";  
        });
    }

    // Handle the form submission
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();  

        const name = document.getElementById("name").value;
        const reviewText = document.getElementById("review").value;
        const rating = selectedRating;  // Get the selected rating

        if (!name || !reviewText || rating === 0) {
            document.getElementById("responseMessage").innerText = "Please complete all fields and select a rating.";
            return;
        }

        // Create the new review card
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="/docs/images/profilepicture.png" alt="Avatar" class="avatar">
                <div class="reviewer-info">
                    <h3>${name}</h3>
                    <span>Just now</span>
                </div>
            </div>
            <div class="rating">
                <span class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
            </div>
            <div class="review-text">
                "${reviewText}"
            </div>
        `;

        document.querySelector(".reviews-grid").appendChild(reviewCard);

        // Show that the review is submitted successfully with a message.
        document.getElementById("responseMessage").innerText = "Review submitted successfully!";

        // Clear the form
        document.getElementById("reviewForm").reset();
        resetStars();  // Reset stars
        selectedRating = 0;  // Reset rating
    });
});

// MANAGE ACCOUNT script

function submitFunction() {
    document.getElementById("account_form").submit();
    alert("Signed up successfully!");
}


    
