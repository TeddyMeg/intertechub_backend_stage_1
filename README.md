# Simple Express Server

A basic Express.js server demonstrating RESTful routes with static responses.

The server will start on `http://localhost:3000`

## Deployment

This server is deployed on [Render](https://render.com). You can access the live version at: [https://intertechub-backend-stage-1.onrender.com/](https://intertechub-backend-stage-1.onrender.com/)

## GitHub Repository

The source code for this project is available on GitHub: [https://github.com/TeddyMeg/intertechub_backend_stage_1](https://github.com/TeddyMeg/intertechub_backend_stage_1)

## Routes

- `GET /name`: Returns the developer's name
- `GET /hobby`: Returns a favorite hobby as JSON
- `GET /dream`: Returns a motivational message

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run start
   ```

The server will run on port 3000 by default.

## API Documentation

### GET /name
Returns the developer's name as plain text.

**Response**: `200 OK`
```
Teddy Tassew
```

### GET /hobby
Returns a hobby as a JSON object.

**Response**: `200 OK`
```json
{
  "hobby": "Programming",
  "details": "Creating software and solving problems through code"
}
```

### GET /dream
Returns a motivational message about goals.

**Response**: `200 OK`
```
To become a world-class software engineer and make a positive impact through technology
```