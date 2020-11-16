# Welcome to Cubit

Project made in React and Material-UI

this application consists of consuming an API and displaying the information that comes from the API correctly.

You can try it in the following link: https://cubit.vercel.app/

## Launch locally

```shell

$ git clone https://github.com/jpalacio0612/Cubit.git

$ cd cubit

$ npm install

$ npm run start

```

## How to run the tests

```shell

$ npm run test

$ npm run test:lint

```

## Operation of the application

In the home, the request to the api is made through axios that brings us all the users with their proper paging, if we click on any user we can see a modal that opens with the rest of the information of each user. All requests are being intercepted thanks to the interceptor functionality provided by axios and which is found in the highest part of our component tree (index.js).
In the menu and clicking on an option we can navigate between the two views that the application has this thanks to react-router-dom.
