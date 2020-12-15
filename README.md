[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)


## Description

The problem / challenge / goal was to implement authentication or sign-up with an identity provider of choice. I chose Google because i believe they are more ubiquitous than the others. Also, i chose this challenge because i have always wanted to implement authentication with identity providers, but to no avail due to lack of time, so i thought i might as well kill two birds with one stone. I am glad i did.


## Solution

My solution focuses on the full stack of web development, using React.js and Redux for the front-end, Node.js / express.js for the back-end, and MongoDB for the database. The front-end is deployed with Github Pages(An alternative would be Netlify, but i chose github pages for its simplicity with configurations), and the back-end is staged on a heroku pipeline connected to github for automatic or manual deployment.


## Technical and Architectural choices

Against create-react-app, i started this project with the barebones setup/template for JavaScript / Node projects by buildforsdg@andela.com which uses parcel bundler, a minimalist bundler compared to webpack. This template gives me the freedom to implement PWA features(like offline post, etc) that create-react-app doesn't allow. Last i checked, i could only implement cache strategies.

As a rule of thumb, i choose a multi repo over a mono repo architecture every other time. It allows for clear separation of the backend from the frontend, and also allows different backend teams to have clear ownership, as in the case of micro services.


## Design

To get a sleek and consistent UI, a design system is needed. I used the Material Design system by Material UI to achieve a beautiful, snappy, and fun-to-use UI across the frontend. That means tweaking Material UI components to achieve set goal. 

## Trade-offs

CORS: In the server, i coded setHeaders to allow all origins to access the api. For a real app in production, implementing CORS and defining authorized origins would be the way to go.

Google Login Token Id Verification: For this i used the decode method of jwt(i.e jwt.decode) to verify ID tokens. Upon researching the jwt npm page i found a warning about using jwt.decode: "Warning: This will not verify whether the signature is valid. You should not use this for untrusted messages. You most likely want to use jwt.verify instead." jwt.verify requires a minimum of token and public key(public.pem). I am yet to understand the public key param, but i guess i found a solution alas; apparently there is the "google-auth-library" npm package by Google that does the job.

Error Handling and Friendly Error Messages: Given more time i would return appropiate error messages that are user friendly.

Unit and Integration tests: I mostly test manually, i am working on covering major unit test cases, and will like to write integration tests for CI/CD if time permits.

Linting: As easy as linting may be, i thought i'd lint when all the requirements are in.

Monitoring and Logging: This took the back burner amongst all the requirements for this challenge, so i traded viewing logs on heroku over setting up a more robust one. 

This app is hosted at https://stteem.github.io/signinwith


## LICENSE
MIT

