# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

## Manual Tests
# Test Case ID: UC1 FR1 
Description: The system must allow restaurant owner registration (basic profile creation). <br>
Prerequisites: User's email and phone number, user profile storage<br>
Test Data: 
<div class="form">
        <form id ="account_form">
        <div class="input-group">
            <label>* Account Owner</label>
            <input type="text" name="name" placeholder="Your name..." required>
        </div>
        <div class="input-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Your number...">
        </div>
                <br>
This shows that the restaurant owner can create an account by filling in the required information.

# Test Case ID: UC1 FR2
Description: The system must allow restaurant profile management(changing details or removing account).<br>
Prerequisites: user profile storage<br>
Test Data: 
<div class="form">
        <form id ="account_form">
        <div class="input-group">
            <label>* Account Owner</label>
            <input type="text" name="name" placeholder="Your name..." required>
        </div>
        <div class="input-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Your number...">
        </div>
                <br>
This shows that the restaurant owner can change some details by filling in the required information.

# Test Case ID: UC1 FR3 
Description: The system should have interaction metrics(customer engagement tracking like viewing reviews).<br>
Prerequisites: Accessible API, connection to Database, Error messages <br>
Test Data: 
 <h3 class="intro">Highest rated restaurants in Bristol...</h3>   

        <section class="Item1" id="restaurant1">
            <article>
                <a href="reviews.html?name=Aardman Animations Limited">
                    <img src="images/restaurant1.jpg" class="restaurant_img" alt="Aardman Animations Limited">
                </a>
                <section>
                    <h3 id="restaurant-name1">Aardman Animations ltd</h3><br>
                    <p id="restaurant-type1">Fetching type...</p>
                    <p id="restaurant-rating1" class="rating">Fetching rating...</p>
                    </section>   
            </article> 
        </section>
        <br>
This shows that the user can view reviews by clicking on the restaurant's image, which uses the API to fetch the data.

# Test Case ID: UC2 FR1 
Description: The system should allow customers to create an account.<br>
Prerequisites: User's email and phone number, user profile storage <br>
Test Data: 
<div class="form">
        <form id ="account_form">
        <div class="input-group">
            <label>* Account Owner</label>
            <input type="text" name="name" placeholder="Your name..." required>
        </div>
        <div class="input-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Your number...">
        </div>
                <br>
This shows that the customer can create an account by filling in the required information.

# Test Case ID: UC2 FR2
Description: The system should allow customers to browse through potential food options.<br>
Prerequisites: Accessible API <br>
Test Data: 
<section class="Item2" id="restaurant2">
            <article>
                <a href="/reviews.html?name=808 CAFE BAR LTD"><img src="images/restaurant1.jpg" class="restaurant_img" alt="808 CAFE BAR LTD"></a>
                <section>
                    <h3 id="restaurant-name2">808 CAFE BAR LTD</h3><br>
                    <p id="restaurant-type2">Fetching type...</p>
                    <p id="restaurant-rating2" class="rating">Fetching rating...</p>
                </section>
            </article>
</section>
<br>
This shows that the customer can browse through food options.

# Test Case ID: UC2 FR3
Description: The system should allow users to browse, write and upload reviews for restaurants.<br>
Prerequisites: Accessible API, connection to Database, Error messages <br>
Test Data: 
(1)
<section class="Item2" id="restaurant2">
            <article>
                <a href="/reviews.html?name=808 CAFE BAR LTD"><img src="images/restaurant1.jpg" class="restaurant_img" alt="808 CAFE BAR LTD"></a>
                <section>
                    <h3 id="restaurant-name2">808 CAFE BAR LTD</h3><br>
                    <p id="restaurant-type2">Fetching type...</p>
                    <p id="restaurant-rating2" class="rating">Fetching rating...</p>
                </section>
            </article>
        </section>
(2)
star.addEventListener("click", () => {
            selectedRating = index + 1;  // Set the rating to the clicked star index + 1
            document.getElementById("rating").value = selectedRating;  // Update the hidden input
            resetStars();  // Reset all stars to gray
            for (let i = 0; i < selectedRating; i++) {
                stars[i].style.color = "gold";  // Highlight the selected stars
            }
        });
    });
(3)
// Show that the review is submitted successfully with a message.
        document.getElementById("responseMessage").innerText = "Review submitted successfully!";
        <br>
              
This shows that the customer can browse (1), write (2), and upload their reviews, showing a response message when uploaded successfully (3). 

# Test Case ID: UC2 FR4 
Description: The system should allow users to ask health-related queries to a chatbot.<br>
Prerequisites: correct input formatting, response display system, Error messages <br>
Test Data: 
<!-- Section where all the messages are goint to be in -->
        <section id="message">
            <!-- user and chatbot interactions displayed -->
            <div class="message-container">
                <!-- chatbot responses -->
                <div id="chat-box"></div>
                <!-- place where the user is going to write -->
                <input type="text" id="user-input" placeholder="Message...">
                <button onclick="sendMessage()">send</button>
            </div>
        </section>
        <br>
This shows that users can ask their questions, and get a generated response from the chatbot.

# Test Case ID: UC2 FR5 
Description: The system should allow users to manage their account, changing any personal information if necessary.<br>
Prerequisites: user profile storage <br>
Test Data: 
<div class="form">
        <form id ="account_form">
        <div class="input-group">
            <label>* Account Owner</label>
            <input type="text" name="name" placeholder="Your name..." required>
        </div>
        <div class="input-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Your number...">
        </div>
                <br>
This shows that the customer can change some details by filling in the required information.

Test Runs

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
| UC1         | FR1            | manageaccount.html|Pass|
| UC1         | FR2            | manageaccount.htm|Pass|
| UC1         | FR3            | reviews.hmtl|Pass|
| UC1         | FR4            | map.html|Pass|
| UC1         | FR5            | reviews.html| Fail(data last updated 2/4/25) |
| UC1         | FR6            | home.html | Fail(data last updated 2/4/25) |
| UC1         | FR7.1            | home.html | Pass |
| UC1         | FR7.2            | reviews.html | Pass |
| UC1         | FR7.3            | map.html | Pass |
| UC1         | NFR1             | ALL | Pass |
| UC1         | NFR2             | ALL | Pass |
| UC1         | NFR3             | manageaccount.html| Fail(data last updated 2/4/25) |


![Insert your test case table here](images/testcasee1.png)
