
## [MovieApp](https://movie-app-mongodb.onrender.com/) :movie_camera::performing_arts:	:clapper::ticket: 

 
 *Movie Search and Management Web Application*: 
   This project was done by [Javier Fuertes](https://github.com/ZManak), [Gabriela García](https://github.com/GabrielaSpace) and [Pablo Mateos](https://github.com/PabloMatMar), and consists of developing a movie search and management web application with two different user roles: User and Administrator.   The application will allow users to search and view information about the movies, and the Administrator to manage the movies and the information associated with them.

**Features and Endpoints:** 


*Movie Search:* Users will be able to search for movies by title, genre, director, release year, among other criteria.

*View Movie Information*: Users will be able to view detailed information about movies, including title, picture, release year, director, genre, duration, plot, actors, language, etc.

*Add movies to favorites:* Users will be able to add movies to their favorites list for easy access later.

*Movie management by Administrator:* The Administrator will be able to manage the movies and the information associated with them, including the creation, editing and deletion of movies.

*Security:* The application will have security measures to guarantee that only authenticated users can access the corresponding functionalities and endpoints.

**Used technology:**

This project uses the following technologies:
JavaScript, Node.js, Express,Pug, Mongo, SQL,  puppeteer

**Installation Instructions**
To install and run this project in your local environment, follow these steps:

 - Clone the repository to your local environment:

		git clone https://github.com/gabrielaSpace/MovieApp.git

 - Install the necessary dependencies:

		npm install

 - Start the application:

		npm start


## General endpoints of the app(user):

 - Access the application in your browser at the address

		http://localhost:3000

 - Dashboard view of the app

		http://localhost:3000/dashboard

 - Movie search engine

		http://localhost:3000/search
		
- Favorites view of the app

		http://localhost:3000/favmovies

 - Movie detail view of the app
		
		http://localhost:3000/search/local/:title (Fetch Mongo)
		http://localhost:3000/search/:title (Fecth Api)
		
		
 - My movies view of the app

		http://localhost:3000/movies

 - Sign up in the application

		http://localhost:3000/signup
		
 -  Make login in the application

		http://localhost:3000/login
		
- Logout application

		http://localhost:3000/logout

 -  Recover password

		http://localhost:3000/recoverpassword


## General endpoints of the app (admin):

 -  Create movie 

		http://localhost:3000/movies/createMovie
		
 -   Edit movie

	     http://localhost:3000/movies/updateMovie

 -   Delete movie

	     http://localhost:3000/movies/deleteMovie?


 -  Movies 

		http://localhost:3000/movies

## Documentation:

 - Swagger

		http://localhost:3000/api-docs-swagger


In this project we have used the [OMDB API](https://www.omdbapi.com/) and the pages [FilmAffinity](https://www.filmaffinity.com/es/main.html) and [SensaCine](https://www.sensacine.com/peliculas/criticas-sensacine/) to get the reviews.

We also invite you to visit our website [MovieApp](https://movie-app-mongodb.onrender.com/) and so you can interact with the application.

Here are some views of our app :sparkles:

 ![Control panel ](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewControl.png)
 ![Search by title](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewTitle.png)

 ![Control panel ](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewControl.png)
 ![Search by title](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewTitle.png)

 ![View admin mobile version](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewadminC.png)
 
 ![View search by title mobile version](https://github.com/GabrielaSpace/MovieApp/blob/develop/public/assets/viewAdmin2.png)





## This project was done by:

[Javier Fuertes](https://github.com/ZManak)

[Gabriela García](https://github.com/GabrielaSpace)

[Pablo Mateos](https://github.com/PabloMatMar)

 

