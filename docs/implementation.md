# Implementation

## Introduction
The system employs a dataset containing food hygiene ratings in Bristol.  It includes fields such as; object_ID, business_name, address, business_type, rating, rating_date, and postcode.  The data is stored in an open data platform where we use the API Explorer to retrieve the information required.  The dataset of a recently inspected site is updated at least every 28 days. This is to make sure that there is access to the most recent food hygiene ratings. 

Some issues that may occur is that some records may be labelled as ‘undefined’. This could be due to missing values. Also, there may be delays when a piece of data is too large to run in the web-app. 

The configuration data involved are; API configuration, database configuration, ratings configuration, data update and sync configuration. The API configuration receives the restaurant details and the ratings from Bristol Open Data. The database configuration is the storage for the ratings, and the restaurant details. The data can be filtered for a quick search. The ratings configuration is important so it displays each restaurants’ ratings clearly so that users can use it to quickly make their dining choice. The data update and sync configuration ensures that valid, new inspection data is replacing the older data, without manual updates. 

## Project Structure


```
└── 📁app
    └── 📁images
    └── chatbot.html
    └── farihinscript.js
    └── farihinstyle.css
    └── index.html
    └── manageaccount.html
    └── map.html
    └── paulascript.js
    └── paulastyle.css
    └── reviews.html
└── 📁docs
    └── 📁images
    └── design.md
    └── implementation.md
    └── planning.md
    └── requirements.md
    └── testing.md
└── README.md
```

A table listing the number of jslint warnings/reports for each module.
![Insert your jslint warnings table here](images/jslintwarningss.png)

## Software Architecture
The major components of our architecture are Gastrella; the actual web-app itself, and BristolOpenData which is the platform we’re using to access the data we require. 

The architectural styles being used include a colour scheme of pastel green, orange and white. Hygiene is the focus so these represent cleanliness. We used a font of ‘Carter One’, so that the reviews are easy to read. The reviews are measured with the number of stars. This is a quick visual indicator of the highest scoring restaurants. 

![Insert your component Diagram here](images/componentdiagram.png)

## Bristol Open Data API
####UML by Paula: Query used in the index used to fetch the name, rating and business type. The top level represents the entire JSON response.
- The fields represent the properties
- The spatial reference defines coordinate system information
- Features contain attributes(BUSINESS_NAME, RATING, BUSINESS_TYPE) and have a relationship with geometry <br>
Query URL: https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=BUSINESS_NAME,RATING,BUSINESS_TYPE&outSR=4326&f=json
![UML Class diagram 1 representing JSON query results](images/js_uml.png)
<br>
####UML by Farihin: Query used in the reviews page used to fetch the name, rating and address. Just as the previous diagram, the top level represents the entire JSON response.
- The fields represent the properties
- The spatial reference defines coordinate system information
- Features contain attributes(BUSINESS_NAME, RATING, ADDRESS) and have a relationship with geometry <br>
Query URL: https://maps2.bristol.gov.uk/server2/rest/services/ext/food/MapServer/0/query?where=1%3D1&outFields=BUSINESS_NAME,ADDRESS,RATING&outSR=4326&f=json <br>
![UML Class diagram 2 representing JSON query results](images/js_uml2.png)

# User guide
This guide will help you navigate the website.
1. <b>Home</b>
![Home screenshot 1](images/home_ss1.png)
Search and explore featured restaurants.
![Home screenshot 2](images/home_ss2.png)
2. <b>Chatbot:</b> Navigate to the chatbot page by clicking the icon at the bottom right corner in any page.
![Chatbot screenshot 1](images/chatbot_ss1.png)
Type queries like:
- "how are you?”
- "can you help me?"
- "what is your name?"
- "what are the benefits of a Mediterranean diet?"
- "what are some high protein Indian meals?"
- "how can I write a review?"
- "how do I search for a restaurant?"
- "how can I look for restaurants near me?"
![Chatbot screenshot 2](images/chatbot_ss2.png)
3. <b>Reviews:</b> Open a restaurant's profile.
![Reviews screenshot 1](images/reviews_ss1.png)
Scroll through the reviews section.
![Reviews screenshot 2](images/reviews_ss2.png)
Fill in the review form and add a rating.
![Reviews screenshot 3](images/reviews_ss3.png)
Finally submit it.
![Reviews screenshot 4](images/reviews_ss4.png)
4. <b>Foodfinder:</b> Click on foodfinder located in the navigation bar to access the next page. To access to restaurants near you click on Find Restaurants Near Me, then it will ask you for permission to access your location. 
![Food finder screenshot 1](images/foodfinder_ss1.png)
Then if you click on any of the markers it will give you information about that restaurant.
![Food finder screenshot 2](images/foodfinder_ss2.png)
5. <b>Manage account:</b> Click on account located at the right in the navigation map.
![Manage account screenshot 1](images/manageaccount_ss1.png)
Fill in the form with your details.
![Manage account screenshot 2](images/manageaccount_ss2.png)
Then click save and a message will pop up indicating that you signed up successfully(it is not saving the details anywhere). And if you click cancel it will take you back to the previous page.
![Manage account screenshot 3](images/manageaccount_ss3.png)
