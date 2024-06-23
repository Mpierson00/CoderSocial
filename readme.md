# CoderSocial - Social Network API
Author: Michael Pierson

Welcome to CoderSocial, a social network API built with Express.js and MongoDB using the Mongoose ODM. This project allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The project aims to handle large amounts of unstructured data efficiently.

## Table of Contents
- [CoderSocial - Social Network API](#codersocial---social-network-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Users](#users)
    - [Thoughts](#thoughts)
    - [Friends](#friends)
    - [Reactions](#reactions)
  - [Walkthrough Video](#walkthrough-video)
  - [License](#license)
## Description
CoderSocial is designed as an API for a social network web application. It utilizes MongoDB for its database, making it a suitable choice for handling extensive and unstructured data. This API supports operations for managing users, thoughts, reactions, and friend lists.

## Installation
1. Clone the repository:

    ```bash

    git clone https://github.com/Mpierson00/CoderSocial.git
    cd CoderSocial
    ```
2. Install dependencies:
    ```bash

    npm install
    ```
3. Set up MongoDB:

    Ensure you have MongoDB installed and running on your machine. The application will connect to a local MongoDB instance by default.

4. Seed the database (optional):

    ```bash

    npm run seed
    ```
5. Start the server:

    ```bash

    npm start
    ```
## Usage
To use the API, you can utilize tools like Postman or Insomnia to send HTTP requests to the server. The server runs on http://localhost:3001 by default.

## API Endpoints
Here is a brief overview of the main API endpoints:

### Users
- GET /api/users: Get all users.
- GET /api/users/
    : Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/
    : Update a user by ID.
- DELETE /api/users/
    : Delete a user by ID.
### Thoughts
- GET /api/thoughts: Get all thoughts.
- GET /api/thoughts/
    : Get a single thought by ID.
- POST /api/thoughts: Create a new thought.
- PUT /api/thoughts/
    : Update a thought by ID.
- DELETE /api/thoughts/
    : Delete a thought by ID.
### Friends
- POST /api/users/
    /friends/
    : Add a friend.
- DELETE /api/users/
    /friends/
    : Remove a friend.
### Reactions
- POST /api/thoughts/
    /reactions: Add a reaction to a thought.
- DELETE /api/thoughts/
    /reactions/
    : Remove a reaction from a thought.
## Walkthrough Video
For a comprehensive walkthrough of the CoderSocial API functionality, please watch the following video:

 [Walkthrough Video](https://www.youtube.com/watch?v=V7z73Y2WUrs)

## License
This project is licensed under the MIT License.

For any further questions or issues, please feel free to contact me via GitHub: [Mpierson00](https://github.com/Mpierson00).