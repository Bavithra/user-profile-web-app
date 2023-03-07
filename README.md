# User Profile Web App
This application is to enter user details Name, Email, Profile picture, Age and Work experiences. The user can add a new entry or modify the existing entry by editing all the feilds except email, email is used as the unique source to identify people and fetch their data from the database

## 💻 Tech Stack

# Frontend
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Typescript](https://www.typescriptlang.org/)

# Backend
- [Node](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [ElephantSQL](https://www.elephantsql.com/)

## 💡 Features

- Able to enter user datails like Name, Email, Profile picture, Age and Work experiences
- Able to Edit all the information provided
- Able to fetch the existing information by entering the email -> upon entering email and clicking outside the app will check if there are existing profile for the same email id and it will fetch the details if present
- While entering company name, the company logo will automatically be loaded via Clearbit API
- Used Redux Persist so the data will be stored incase of connection loss and will persist

## 🔎 Hosting


Web App frontend is Hosted using Netlify
[![Deploy](https://d33wubrfki0l68.cloudfront.net/65a18ef24e011fbc0b5ddb411d611c0e1d1111a6/17e0b/images/deploy-button.svg)](https://gleaming-beignet-d30838.netlify.app/)

Backend is Hosted in Heroku 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://glints-web-be-user-profile.herokuapp.com)

## 🔗 Hosting Links

- Web App -> https://gleaming-beignet-d30838.netlify.app/
- Backend -> https://glints-web-be-user-profile.herokuapp.com

## 📹 Demo
- Create new user profile

![ezgif-2-d75295457d](https://user-images.githubusercontent.com/3985553/179118058-bc7d8746-9835-4118-95d6-df3e993e4f52.gif)

- Fetching and Editing existing user profile

![ddd](https://user-images.githubusercontent.com/3985553/179118185-043dbf6d-10a9-456c-93db-9deeec0b8db6.gif)





