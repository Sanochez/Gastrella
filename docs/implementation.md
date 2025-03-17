# Implementation

## Introduction
The system employs a dataset containing food hygiene ratings in Bristol.  It includes fields such as; object_ID, business_name, address, business_type, rating, rating_date, and postcode.  The data is stored in an open data platform where we use the API Explorer to retrieve the information required.  The dataset of a recently inspected site is updated at least every 28 days. This is to make sure that there is access to the most recent food hygiene ratings. 

Some issues that may occur is that some records may be labelled as ‘undefined’. This could be due to missing values. Also, there may be delays when a piece of data is too large to run in the web-app. 

The configuration data involved are; API configuration, database configuration, ratings configuration, data update and sync configuration. The API configuration receives the restaurant details and the ratings from Bristol Open Data. The database configuration is the storage for the ratings, and the restaurant details. The data can be filtered for a quick search. The ratings configuration is important so it displays each restaurants’ ratings clearly so that users can use it to quickly make their dining choice. The data update and sync configuration ensures that valid, new inspection data is replacing the older data, without manual updates. 

## Project Structure
health-food-app/  
│── 📂 public/               # Static files (images, icons, etc.)  
│   ├── index.html           # Main HTML file  
│   ├── favicon.ico          # App icon  
│   ├── assets/              # Static assets (e.g., images, fonts)  
│── 📂 src/                  # Main source code directory  
│   ├── 📂 components/       # Reusable UI components  
│   │   ├── Navbar.js        # Navigation bar  
│   │   ├── Footer.js        # Footer section  
│   │   ├── RecipeCard.js    # Card displaying a recipe  
│   ├── 📂 pages/            # Page components  
│   │   ├── Home.js          # Homepage  
│   │   ├── Recipes.js       # Recipes listing page  
│   │   ├── About.js         # About page  
│   │   ├── Contact.js       # Contact page  
│   ├── 📂 services/         # API service calls  
│   │   ├── api.js           # Handles API requests  
│   ├── 📂 styles/           # Styling files  
│   │   ├── global.css       # Global styles  
│   ├── 📂 utils/            # Utility functions  
│   │   ├── helpers.js       # Helper functions  
│   ├── App.js               # Main React app component  
│   ├── index.js             # Entry point for React  
│── 📂 tests/                # Unit and integration tests  
│── 📂 config/               # Configuration files  
│   ├── env.js               # Environment variables  
│── 📂 scripts/              # Automation scripts  
│── package.json             # Dependencies and scripts  
│── README.md                # Project documentation  
│── .eslintrc.js             # Linting configuration  
│── .gitignore               # Files to ignore in Git  


## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.
