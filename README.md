# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

Before you run this application, you need to install all the dependencies. Please type `npm install`
in your project terminal to install.

### `npm start`

To run the app in the development mode, you need to type `npm start` in your project terminal.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.



### `Design`

At first, I design a basic layout for building this app. This basic design help me to choose which component should\
I place where. And if you want a high level understanding of this project without see any code you should go through this design.

Here is the design link [https://www.figma.com/file/YAb198Vvcf2wlfmHns9mcZ/Restaurant-Finder-App?node-id=0%3A1](https://www.figma.com/file/YAb198Vvcf2wlfmHns9mcZ/Restaurant-Finder-App?node-id=0%3A1)


### `Live Site`

Here is the live site link of this app after build.[Restaurant Finder App](https://festive-nobel-72c7e4.netlify.app/)

### `Project Structure`

Here, I followed a basic but really useful structure which is easy to understant and maintainable.\
I differentiate stateless functional component and stateful class component in different folder\
which is components and containers accordingly. Then I indroduce apis and utils named 2 new folders.\
The reason behind these 2 folder is very important. In apis folder, I wrote all the apis which is need\
all through the application. So, I made it just because of a single source of information. Which is really\
helpful for bug fixing and future changes.

And the reason behind the utils folder is accessibility and scalability. Cause, in my application there were\
some api keys. Which may expire after a decent amount of time. So, in case of future access or at least run\
I need to change those keys, with new keys. So, this is useful, I hope.

### `Scalability`

Again, the utils folder is useful to scale up the application. Here, we can change some parameter like radius,\
so if we want to get information from a bigger radius, we can change this parameter. Another is category, which\
is really amazing, cause our primary goal of this app is to find restaurant, but we can change the category of\
for drinks, coffee etc.

### `Test`

Here, I setup a simple test file for RestaurantList component. With the help of jest and enzyme library,\
I managed to test this component. Though, I could create separate folder to manage test scripts\
but as I'm writing only one script, I keep it in the component folder. You can run test by writing\
`npm run test Restaurant.test.js` in your project terminal.

### `Things may confuse end user`

Here, I use google map api key to load the google map. But recently, google does not providing free api key for development.\
They said to setup a billable account to proceed. And they push an error in browser console and gives a pop-up.\
So, it may confuse users. But if you have a key with this validity, you can use your own to load map. I can not\
manage myself to create a billable google account.

### `Things I left out`

Here, I would use Redux, Material UI and do this project in TypeScript for sure if I got more time.
