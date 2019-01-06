# App Fuelo Microservice - MVC Domain Driven Design

An app demonstrating simple MVC Domain Driven Design API implementation with NodeJs, Express and Sqlite3

The `api` uri preceeds all API endpoints and the following endpoints are currently available

+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| Method | Route             | Params    | Description                                                                                                                                                             | Use Bearer token |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| POST   | /sso/authenticate | email*    |                                                                                                                                                                         | No               |
|        |                   | password* |                                                                                                                                                                         |                  |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /users            |           | Returns a list of users.                                                                                                                                                | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /users/:id        |           | Returns detailed information about an user.                                                                                                                             | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /fuels            |           | Returns a list of fuels.                                                                                                                                                | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /fuels/:id        |           | Returns detailed information about a fuel.                                                                                                                              | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /brands           |           | Returns a list of brands.                                                                                                                                               | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /brands/:id       |           | Returns detailed information about a brand.                                                                                                                             | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /provinces        |           | Returns a list of provinces.                                                                                                                                            | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /provinces/:id    |           | Returns detailed information about a province.                                                                                                                          | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /average-prices/  | fuel*     | Returns the average price by fuel type and date.                                                                                                                        | Yes              |
|        |                   | date      |                                                                                                                                                                         |                  |
|        |                   |           | fuel - One of the following types of fuel: gasoline, diesel, lpg or methane.                                                                                            |                  |
|        |                   |           | date - The date for which you want an average fuel price in the YYYY-MM-DD format. If not specified, the current day is taken.                                          |                  |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /gasstations      | brand_id  | Returns a list of gas stations filtered by criteria.                                                                                                                    | Yes              |
|        |                   | fuel      |                                                                                                                                                                         |                  |
|        |                   | limit     | brand_id - Brand identification number in our database. Can be found from the URL on the site or through an API request.                                                |                  |
|        |                   | offset    | fuel - The fuel that must be available at petrol stations. One of the following types: gasoline, diesel, lpg or methane.                                                |                  |
|        |                   |           | limit - The maximum number of service stations to be returned from the application, default is 50                                                                       |                  |
|        |                   |           | offset - The deviation from the first result. Convenient for paging. If this parameter is not available, default is 0.                                                  |                  |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /gasstations/:id  |           | Returns detailed information about a gas station.                                                                                                                       | Yes              |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /nears            | lat*      | Returns a list of service stations according to geographic coordinates.                                                                                                 | Yes              |
|        |                   | lon*      |                                                                                                                                                                         |                  |
|        |                   | fuel      | lat - The latitude around it will be searched.                                                                                                                          |                  |
|        |                   | limit     | lon - The geographic length around which will be searched.                                                                                                              |                  |
|        |                   | distance  | fuel - The fuel that must be available at petrol stations. One of the following types: gasoline, diesel, lpg or methane.                                                |                  |
|        |                   |           | limit - The maximum number of service stations to be returned from the application. In the absence of this parameter, default is 100 objects. The maximum value is 100. |                  |
|        |                   |           | distance - Radius in kilometers to search for. In the absence of this parameter, default is 100 kilometers. The maximum value is 100.                                   |                  |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| GET    | /news             | count     | Returns a list of last news.                                                                                                                                            | Yes              |
|        |                   | brand     |                                                                                                                                                                         |                  |
|        |                   | fuel      | count - Number of news to show. By default is 10. The maximum value is 100.                                                                                             |                  |
|        |                   |           | brand - Brand ID in our base for which the news should relate. Can be found from the URL on the site or through an API request.                                         |                  |
|        |                   |           | fuel - The fuel for which the news must necessarily relate. One of the following types: gasoline, diesel, lpg or methane.                                               |                  |
+--------+-------------------+-----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+

The live app is available on heroku here
demo:
   email: demo@domain.com
   password: 123
[https://app-ms-fuelo.herokuapp.com/](https://app-ms-fuelo.herokuapp.com/)


Get in Touch
===============

[I am available on](https://www.linkedin.com/in/angel-baev-33730150/)
