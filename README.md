# Exercise API

## Audience

This API is designed to help you learn exercises, what muscles those exercises use and what equipment is need to complete those exercises.

## Technologies Used

* API was created using Express, Mongoose, Node.js
* Testing completed on Postman
* Deployed via Heroku
* Hosted by MongoDB Atlas

## Dependencies

* "express": "^4.17.1"
* "mongoose": "^5.5.13"
* "nodemon": "^1.19.1"


## Project Approach

* Prioritize planning stage. Create ERD and lay out initial plans in a planning directory and document.
* Commit early and often.
* Create a controllers directory with appropriate files inside to set routes.
* Create a db directory with appropriate files inside including seed file and connection file.
* Create a models directory with appropriate files inside to set schemas.
* Populate json files for each model.
* Test that all routes are working on Postman.
* Deploy using Heroku.
* Record a screencast.

## Things I've learned



## Object Examples

### Muscles
```
{
        "id": 2,
        "name": "Anterior deltoid",
        "is_front": true
}
```
### Equipment
```
{
    "id": 8,
    "name": "Bench"
}
```

### Exercises
```
{
      "id": 148,
      "license_author": "wger.de",
      "status": "2",
      "description": "<p>.</p>",
      "name": "Lateral Raises",
      "name_original": "Lateral raises",
      "creation_date": "2013-05-05",
      "uuid": "5345766a-c092-457a-aa21-8ee6ffa855d4",
      "license": 1,
      "category": 13,
      "language": 2,
      "muscles": [2],
      "muscles_secondary": [],
      "equipment": [3]
}
```
## Paths

### Muscles
##### /api/muscles/
When set to "get", this will return all muscles.
##### /api/muscles/:name
This path will return a single muscle based on its name.


### Equipment
##### /api/equipment/
When set to "get", this will return all equipment.
##### /api/equipment/:name
This path will return a single equipment based on its name.


### Exercises
##### /api/exercise/
When set to "get", this will return all exercises.
##### /api/exercise/id/:id
This path will return a single exercise based on its _id.
##### /api/exercise/:name
This path will return a single exercise based on its name.
##### /api/exercise/:name
This path will create a new exercise entry.
##### /api/exercise/:id
This path will update a planet based on its _id.
##### /api/planets/exercise/:id
This path will delete a planet based on its _id.
