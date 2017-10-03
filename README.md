# Remote U

This repo houses the Node/React application for RU's online class portal. Active development on the `develop` branch.

## Tech Stack:
  * MongoDB via Mlab.com
  * Node/Express Server
  * React (Create React App) + React Router + Redux Client
  * Cookie Session for session management
  * Google Oauth for authentication (via Passport)
  
The production build is deployed to Heroku: 

## To Run Locally:
1. Clone the project
2. Run `npm install` on the root directory and again in ./client
3. Ask Mike for his **dev.js** keys
4. Add **dev.js** to the config directory (alongside **prod.js** and **keys.js**
5. Run `npm run dev` to concurrently launch the server and client
6. Navigate to http://localhost:3000
