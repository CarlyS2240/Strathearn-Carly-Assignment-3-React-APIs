# Assignment 3: React and APIs
## Website: Cosmic Cinemas
## Author: Carly Strathearn 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description of Application

A simple movie database using Google Firebase Firestore connected to a React app. 

### Website Rationale

For this assignment, I decided to create a movie ticket website for a hypothetical company called “Cosmic Cinemas”. This website contains information about a variety of movies and if fully functional it would allow for the purchasing of movie tickets. I decided to create an API that stores information about movies because I was able to come up with a wide range of categories of data that could be stored in the Firebase database and displayed on the React website. For example, some of the categories I chose were: title of movie, movie poster, movie genre, movie director, image from a scene in the movie, MPAA rating, release date, runtime, and storyline. Additionally, I wanted to create a visually pleasing website. Therefore, by choosing movies to base my database and website on, I had the opportunity to use a variety of visually stunning movie posters and images from movie scenes. 

### Page Rationale

The pages that I selected to recreate were the MoviesHomePage and the MovieDetailsPage. 

The MoviesHomePage was selected to display the MovieItem component. The MoviesHomePage maps the data in the API to props which are passed to the MovieItem component and displayed on the screen. The following information is displayed in the MovieItem component: movie poster, movie title, lead actor/actress, MPAA rating, movie genre, and movie rating. I decided to display this information in the MovieItem component that is displayed on the MoviesHomePage because I felt it was quick and relevant information that users would like to see about a movie before reading more about it. For example, users might be more likely to purchase tickets to a movie that has a well know lead actor/actress. Additionally, a user might not be interested in reading more about a movie with a 1 out of 5-star rating as opposed to a movie that has a 5 out of 5-star rating. The MovieDetailsPage was selected to contain additional information about a specific movie. This page is dynamically routed and the data that is displayed about a particular movie corresponds to the id of the movie. The following additional information is displayed on the MovieDetailsPage: runtime, release date, director, and storyline.

### Component Rationale

  **(1) Navigation Bar Component**: Selected to allow users to easily navigate back to the MoviesHomePage from the MovieDetailsPage.
        
  **(2) Header Component**: Selected to showcase movies that have recently been released to theatres. The header is a reusable component that uses props for the movie image and the movie title text, therefore they can easily be updated to feature a different movie. 
  
  **(3) Button Component**: Selected to guide users along the process of purchasing movie tickets. Currently, the Button component displays an alert when clicked on. If this was a fully-functional website the user would click on the Button component to add movie tickets to their cart. This component was used on the MoviesHomePage component and the MovieDetailsPage component. 

  **(4) MovieItem Component (Card Component)**: Selected to display information about a specific movie on the MoviesHomePage in a card layout: movie poster, movie title, lead actor/actress, MPAA rating, movie genre, and movie rating.
        
  **(5) MoviesHomePage Component**: Selected to be the homepage of the website.Contains the navigation bar component, the footer component, and the MovieItem component. 

  **(6) MovieDetailsPage Component**: Selected to contain additional information about a specific movie: runtime, release date, director, and storyline. 
        
  **(7) ShowtimeButtons Component**: Selected to display various times that a movie is being shown. Users use this component to select a time that they would like to see a particular movie at. 
  
  **(8) Footer Component**: Selected to contain quick links to the MoviesHomePage and the MovieDetailspage. 

### npm install

To install the necessary packages and their dependencies for this application please run the 

```
npm install
```
command in the terminal.

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Website Navigation

Open [http://localhost:3000/](http://localhost:3000/) to access the MoviesHomePage (homepage)

Click on a movie poster on the MoviesHomePage to access the MovieDetailsPage. 
