// HOME and REVIEWS page
document.addEventListener("DOMContentLoaded", async function () {
    const params = new URLSearchParams(window.location.search);
    const restaurantName = params.get("name"); // Get name from URL

    try {
        // Fetch data from API
        const response = await fetch("https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=BUSINESS_NAME,ADDRESS,RATING&outSR=4326&f=json");
        const data = await response.json();

        console.log("API Response Data:", data); // Debugging log

        // Find the restaurant by name if on the Reviews page
        const restaurant = data.features.find(feature =>
            feature.attributes.BUSINESS_NAME.toLowerCase().includes(restaurantName ? restaurantName.toLowerCase() : "")
        );

        if (!restaurant) {
            console.error("Restaurant not found in API.");
            return;
        }

        // Extract attributes
        const { BUSINESS_NAME, ADDRESS, RATING, BUSINESS_TYPE } = restaurant.attributes;

        console.log("Restaurant Rating:", RATING);

        // Handle missing values
        const stars = RATING ? getStars(RATING) : "No rating available";

        console.log("Converted Stars:", stars);

        // Update restaurant details
        if (restaurantName) {
            // This is for the Reviews page
            document.getElementById("restaurant-name").innerText = BUSINESS_NAME;
            document.getElementById("restaurant-stars").innerText = stars; // Update stars
            document.getElementById("restaurant-address").innerText = `📍 Address: ${ADDRESS}`;
        } else {
            // This is for the Home page (no query param, random restaurant)
            document.getElementById("restaurant-name").innerText = BUSINESS_NAME;
            document.getElementById("restaurant-address").innerText = `📍 Address: ${ADDRESS}`;
        }

    } catch (error) {
        console.error("Error fetching restaurant data:", error);
    }
});

// Function to convert numerical rating to stars
function getStars(rating) {
    if (!rating || rating < 1) return "★☆☆☆☆"; // Default 1 star if rating is missing or invalid
    const roundedRating = Math.round(rating); // Round to nearest whole number
    return "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating); // Create star string
}


/* document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", async function () {
        const params = new URLSearchParams(window.location.search);
        const restaurantName = params.get("name"); // Get name from URL
    
        if (!restaurantName) {
            console.error("No restaurant name found in URL.");
            return;
        }
    
        try {
            // Fetch data from API
            const response = await fetch("https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=BUSINESS_NAME,ADDRESS,RATING,BUSINESS_TYPE&outSR=4326&f=json");
            const data = await response.json();
    
            // Find the restaurant by name (adjust based on actual API response)
            const restaurant = data.features.find(feature => 
                feature.attributes.Name.toLowerCase().includes(restaurantName.toLowerCase())
            );
    
            if (!restaurant) {
                console.error("Restaurant not found in API.");
                return;
            }
    
            // Update restaurant details on page
            document.querySelector(".rest-name h2 u").innerText = restaurant.attributes.Name;
            document.querySelector(".rest-name img").src = "/docs/images/default_restaurant.png"; // Placeholder image
    
            // Populate Reviews (if available in API)
            const reviewsContainer = document.querySelector(".reviews-grid");
            reviewsContainer.innerHTML = ""; // Clear existing reviews
    
            if (restaurant.attributes.Reviews) {
                restaurant.attributes.Reviews.split(";").forEach(reviewText => {
                    const reviewHTML = `
                        <div class="review-card">
                            <div class="review-header">
                                <img src="/docs/images/profilepicture.png" alt="Avatar" class="avatar">
                                <div class="reviewer-info">
                                    <h3>Anonymous</h3>
                                </div>
                            </div>
                            <div class="review-text">
                                "${reviewText}"
                            </div>
                        </div>
                    `;
                    reviewsContainer.innerHTML += reviewHTML;
                });
            } else {
                reviewsContainer.innerHTML = "<p>No reviews available for this location.</p>";
            }
    
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    });
    

    if (restaurantId && restaurantData[restaurantId]) {
        const restaurant = restaurantData[restaurantId];

        // Update Restaurant Name
        document.querySelector(".rest-name h2").innerText = restaurant.name;

    }
});
*/
// MAP(foodfinder) page script
// Request user geolocation and redirect with lat, lon
function getLocation(page) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(loc) { // permission granted
                const lat = loc.coords.latitude;
                const lon = loc.coords.longitude;
                location.href = `${page}?lat=${lat}&lon=${lon}&zoom=14`;
            },
            function() { // permission denied
                // Default location (Central Bristol)
                location.href = `${page}?lat=51.454514&lon=-2.587910&zoom=14`;
            }
        );
    } else { // Geolocation not supported
        alert("Geolocation is not supported by this browser.");
        location.href = `${page}?lat=51.454514&lon=-2.587910&zoom=14`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const lat = getQueryParam("lat") || 51.454514;  // Default: Bristol
    const lon = getQueryParam("lon") || -2.587910;
    const zoom = getQueryParam("zoom") || 14;  // Default zoom level

    // Use correct Open Data Bristol Feature Layer
    const mapURL = `https://www.arcgis.com/apps/mapviewer/index.html?panel=gallery&layers=7d0994dded2348d5aff6d419b0c76bb9&center=${lon},${lat}&level=${zoom}`;

    // Update the map iframe
    const mapFrame = document.getElementById("mapFrame");
    if (mapFrame) {
        mapFrame.src = mapURL;
    }
});



// https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=BUSINESS_NAME,ADDRESS,BUSINESS_TYPE,RATING,RATING_DATE,POSTCODE&outSR=4326&f=json
// CHATBOT page script
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send-btn").addEventListener("click", sendMessage);
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    // Display user message
    chatBox.innerHTML += `<div style="color: #463b1e; text-align: right; padding: 10px; margin: 5px; border-radius: 10px 10px 0 10px; background-color: #dcb856ce;"><strong>You:</strong> ${userInput}</div>`;

    // Get bot response
    let botResponse = getBotResponse(userInput);
    setTimeout(() => {
        chatBox.innerHTML += `<div style="color: white; text-align: left; padding: 10px; margin: 5px; border-radius: 10px 10px 10px 0; background-color: #c19b34;"><strong>Bot:</strong> ${botResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }, 500);

    // Clear input
    document.getElementById("user-input").value = "";
}

function cleanInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/gi, ''); // Removes punctuation
}

function getBotResponse(input) {
    let lowerInput = cleanInput(input);
    
    let responses = {
        "hello": "Hi there!",
        "hi": "Hi there!",
        "how are you": "I'm just a simple bot, but I'm good!",
        "can you help me": "Sure, What can I help you with?",
        "what is your name":"My name is Gastrobot", "what's your name?":"My name is Gastrobot",
        "nice to meet you":"Nice to meet you too!",
        "what are the benefits of a mediterranean diet":"The Mediterranean diet is rich in healthy fats, fiber, and antioxidants. It helps reduce heart disease risk, supports brain health, and promotes longevity. Staples include olive oil, fish, nuts, and fresh vegetables.",
        "what are some high protein indian meals":"For vegetarian options, try lentil-based dishes like dal, paneer tikka, or chickpea curry. If you eat meat, grilled tandoori chicken and fish curries are great protein-rich choices.",
        "how can i write a review":"To write a review, first select the restaurant that you want to leave your review on, then write your name, your review and how many stars you rate it. Finally click on submit to post your review.",
        "how do i search for a restaurant":"To search for a restaurant, first click on foodfinder located on the navigation bar above and write the name of the restaurant on the search.",
        "how can i look for restaurants near me":"To search for restaurants near you simply go to the foodfinder located at the navigation bar above and look at the map, it will show the food places that are near you",
        "how do i sign up to my account":"To sign in to your account you just need to click on account and use your details to sign in.",
        "bye": "Goodbye!",
    };

    return responses[lowerInput] || "Sorry, I don't understand.";
}

