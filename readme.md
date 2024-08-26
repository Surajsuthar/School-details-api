# Project Title
Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [endpoints](#endpoints)
## Installation
1. Clone the repository:
```bash
 git clone https://github.com/Surajsuthar/School-details-api.git
```

2. Install dependencies:
```bash
 npm install
 ```
3. Add .env file in root folder && add connection details
```bash
 DB_HOST = 
 DB_USER = 
 DB_PASSWORD = 
 DB_DATABASE = 
 DB_PORT = 
 PORT = 
 ```
## Usage
To run the project, use the following command:
```bash
node index.js
```
## endpoints
api endpoints with request body
1. POST  /addSchool
```
https://school-details-api.vercel.app/api/v1/addSchool
body :- {
    "name": "Lakeside Academy",
    "address": "1415 Lake Avenue, Orlando, FL 32801",
    "latitude": 28.5383,
    "longitude": -81.3792
}
```
2. POST /listSchool
```
https://school-details-api.vercel.app/api/v1/listSchool
body :- {
    "latitude": 58.5383,
    "longitude": -61.3792
}
```
