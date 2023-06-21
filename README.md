# **Flixxit - Video Streaming App**

## Technology Stack Used 

#### React, Redux Toolkit, Firebase, Styled Components, Axios, Node.js, Express and MongoDB Atlas.


> ### [Working App Link](http://lustrous-mandazi-fffc8a.netlify.app)
> First Sign Up with email id and password if a new user.

#### Sample Id and password to login with if some problem occurs-
> heyriz@gmail.com
> 
> `password`: abc123

---

## Getting Started

Please follow the instructions to set up the app on your local host -

1. First Clone this repository to your local repository.
   
2. For starting up the frontend of the application go to **`src`** folder, run ``npm install`` and then run ``npm start``

3. Now to start up the backend you need to go to the **`server`** folder , run ``npm install`` and then run ``npm start `` to start up the server and connection to the database

---

## **Features**

1. Sign Up Functionality.
   
2. Login Functionality.
   
3. Video attached to every movie preview.
   
4. Movies page based on genres.
   
5. TV Shows page based on genres.
   
6. User can add movies and TV shows to their list.
   
7. User can remove movies and TV shows from their list.

---

 ### **Details and Breakdown of the App**

 >  ### `Frontend`

   1. React app is contained in the `src` folder.

   2. It further contains `app` folder which consists of **Components**, **store** and **utils** folders.
   3. **Components** folder consists of all the pages to be rendered in the app for the UI.
   4. **store** folder consists of the redux store to manage the state and data of the app.
   5. **utils** folder consists of the firebase config file for the purpose of authentication and a  `constants.js` file which has API key and the API for fetching movies
   6. For Styling the components `Styled Components` are used in every component.

---

#### **Movies, TV shows data is being fetched from the given link below** 

 > [Movie Database Link](https://www.themoviedb.org/)

---

 > ### `Backend`

 1. It is located in `server` folder.


 2. It further consists of `contollers`, `models` and `routes` folders and a main `server.js` file.


 3. **MVC** architecture is used here.

---

> ### **Authentication**

Authentication for the users logging in and signing up with their email id and passwords are managed by **`Firebase`**.

> ### **Database**

For storing the data when user adds and removes movies from their list cloud version of `MongoDB` is used here which is `MongoDB Atlas` , connected with its own uri string.


> ### **Deployment**

Deployment of `Frontend` is done through netlify.

Deployment of `Backend` is done though [render.com](render.com).

> Link of Backend Service
 [Backend Live Url](https://flixxit.onrender.com)












