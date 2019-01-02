# App Fuelo Microservice - MVC Domain Driven Design

An app demonstrating simple MVC Domain Driven Design API implementation with NodeJs, Express and Sqlite3

The `api` uri preceeds all API endpoints and the following endpoints are currently available
* POST `/sso/authenticate` - {"email": "demo@nodomain.com", "password": "123"}
* GET `/users` - use authorization header token from /sso/authenticate : authorization: Bearer token | user list
* GET `/users/:id` - use authorization header token from /sso/authenticate : authorization: Bearer token | user details
* GET `/fuels` - use authorization header token from /sso/authenticate : authorization: Bearer token | fuel list
* GET `/fuels/:id` - use authorization header token from /sso/authenticate : authorization: Bearer token | fuel details
* GET `/brands` - use authorization header token from /sso/authenticate : authorization: Bearer token | brand list
* GET `/brands/:id` - use authorization header token from /sso/authenticate : authorization: Bearer token | brand details
* GET `/provinces` - use authorization header token from /sso/authenticate : authorization: Bearer token | province list
* GET `/provinces/:id` - use authorization header token from /sso/authenticate : authorization: Bearer token | province details

The live app is available on heroku here
https://app-ms-fuelo.herokuapp.com/


Get in Touch
===============

I am available on https://www.linkedin.com/in/angel-baev-33730150/