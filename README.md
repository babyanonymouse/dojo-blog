# Dojo Blog

A modern blog application built with React, featuring a full-featured blog management system.

## 🚀 Features

- **Create Blogs**: Detailed form to add new blog posts with titles, authors, and body content.
- **Read Blogs**: View a list of all blogs or read individual blog details.
- **Delete Blogs**: Remove unwanted blog posts easily.
- **Client-Side Routing**: Smooth navigation between pages using `react-router-dom`.
- **Mock Backend**: Uses `json-server` for a realistic REST API experience.

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router 5
- **Styling**: Sass / CSS
- **API**: JSON Server (Mock REST API)

## 🏁 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

- [Download Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.
2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Application

This project requires both the mock backend and the frontend server to be running.

1.  **Start the Mock API (Backend)**
    Open a terminal and run:

    ```bash
    npm run start:api
    ```

    _This starts the JSON server on port `8800` watching `data/db.json`._

2.  **Start the React App (Frontend)**
    Open a second terminal window and run:

    ```bash
    npm start
    ```

    _This runs the app in development mode on [http://localhost:3000](http://localhost:3000)._

## 📜 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm run start:api`: Starts the JSON server backend.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
