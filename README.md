## Project

#### CoronaUy



An application used to filter data form [NovelCOVID API](https://github.com/NovelCOVID/API "NovelCOVID API") based on Uruguay, built with React, Context, JavaScript, and CSS.

## Project Status

This project is currently in development. Users can filter coutries by name and see visual data representation of Uruguay. Functionality to see by additional visual data represntation of all countries is in progress.

## [DEMO](https://coronauy.netlify.com/ "DEMO")

#### Link:   [https://coronauy.netlify.com](https://coronauy.netlify.com "http://https://coronauy.netlify.com")



## Installation and Setup Instructions 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  


To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

  - What was the context for this project? 
   - This is a proyect to apply my knowleadge at the moment.
  - Why was this project challenging and therefore a really good learning experience?
   - This project involves a fast adaptation to the changes of the information that is available in the API and the global information that is known.
  - What were some unexpected obstacles?
   - Changes in the EndPoints of the API.
   - Changes in the relevant information.
   - Up to date data.
   - Difference of COVID19 case numbers in data sets compared to actual numbers announced by government.

  - What tools did you use to implement this project?
- create-react-app
		- Because I am trying to improve my knowleadge on ReactJs
- Axios
		- To do better use of Async HttpRequest 
- [NovelCOVID API](https://github.com/NovelCOVID/API "NovelCOVID API")
  	- API to get up to date data. 
- [Bootswatch](http://https://bootswatch.com/ "Bootswatch")
		- VIsual styled css components.
- Canvas
		- To show historical information on a fridndly chart.

#### About the project:  

This is a project built since the first case of Coronavirus in Uruguay in order to see Urugauy information about Coronavirus in a fast view and to improe my knowleadge in web development.
Project goals included using ReactJS concepts learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the [NovelCOVID API](https://github.com/NovelCOVID/API "NovelCOVID API") based on Coronavirus cases in the world as 'Active cases' or 'historical data of Uruguay'. I started this process by using the `create-react-app` , then adding `context` to manage a 'global state'.  

One of the main challenges I ran into was getting updated data. This led me to spend a few days researching an API containing current cases on historical case announcements by date.

At the end of the day, the 'tools' implemented in this project are ReactJS, Context, Axios, Canvas, and Bootswatch for CSS components.
