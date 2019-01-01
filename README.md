# App Fuelo Microservice - MVC Domain Driven Design

An app demonstrating simple MVC Domain Driven Design API implementation with NodeJs, Express and Sqlite3

The `api` uri preceeds all API endpoints and the following endpoints are currently available
* POST `/sso/authenticate` - {"email": "demo@nodomain.com", "password": "123"}
* GET `/users/contacts` - use authorization header token from /sso/authenticate : authorization: Bearer token | user list
* GET `/users/:id` - use authorization header token from /sso/authenticate : authorization: Bearer token | user details

The live app is available on heroku here
https://app-ms-fuelo.herokuapp.com/


Get in Touch
===============

I am available on https://www.linkedin.com/in/angel-baev-33730150/