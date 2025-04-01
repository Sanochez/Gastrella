// HOME and REVIEWS page
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", async function () {
        const params = new URLSearchParams(window.location.search);
        const restaurantName = params.get("name"); // Get name from URL
    
        if (!restaurantName) {
            console.error("No restaurant name found in URL.");
            return;
        }
    
        try {
            // Fetch data from API
            const response = await fetch("https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json");
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

        // Update Image
        document.querySelector(".rest-name img").src = restaurant.image;

        // Populate Reviews
        const reviewsContainer = document.querySelector(".reviews-grid");
        reviewsContainer.innerHTML = ""; // Clear existing reviews

        restaurant.reviews.forEach(review => {
            const reviewHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <img src="/docs/images/profilepicture.png" alt="Avatar" class="avatar">
                        <div class="reviewer-info">
                            <h3>${review.name}</h3>
                        </div>
                    </div>
                    <div class="rating">
                        <span class="stars">${review.rating}</span>
                    </div>
                    <div class="review-text">
                        "${review.comment}"
                    </div>
                </div>
            `;
            reviewsContainer.innerHTML += reviewHTML;
        });
    }
});

// MAP(foodfinder) page script
function outputTable(json) {
    let element = document.getElementById("results");
    let features = json.features;
    for (i=0; i<features.length; i++) {
      tr = document.createElement('tr');
      let a = features[i].attributes;
      let g = features[i].geometry;
      let td = document.createElement('td');
      td.innerHTML = a.NAME;
      tr.appendChild(td);
      td = document.createElement('td');
      td.innerHTML = a.TYPE;
      tr.appendChild(td);
      element.appendChild(tr);
    }
  }

  function search(string) {
    let urlEncoded = encodeURIComponent(string);
    url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/28/query?where=&text=${urlEncoded}&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson`;
    fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }})
    .then (response => response.json())
    .then(outputTable);
  }


  var urlParams = new URLSearchParams(location.search);
  var searchterm = urlParams.get('searchterm');
  search(searchterm);


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
