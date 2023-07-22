# Node JS, Express and MongoDB Starter template

This is a starter template for a REST API built on Node JS, Express and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Setting up Environment Variables](#setting-up-environment-variables)
  - [Installing Dependencies](#installing-dependencies)
  - [Starting the Application](#starting-the-application)

## Getting Started

Follow the steps below to set up and run the REST API on your local machine.

### Cloning the Repository

To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/urwah1248/Node-Express-Mongodb-Starter.git
```

### Setting up Environment Variables

1. Navigate to the root folder of the cloned repository.
2. Create a new file named `.env` by copying the provided `.env.example` file.
3. Edit the `.env` file and add your MongoDB URI to the `MONGODB_URI` variable. It should look something like this:

```env
PORT=3000
MONGODB_URI=mongodb://your-username:your-password@your-host:your-port/your-database
```

Replace the placeholder values with your actual MongoDB credentials.

### Installing Dependencies

Before running the application, you need to install its dependencies. Make sure you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) installed.

1. Open a terminal or command prompt.
2. Navigate to the root folder of the cloned repository.
3. Run the following command to install the required dependencies:

```bash
npm install
```

### Starting the Application

Once the dependencies are installed and the environment variables are set up, you can start the application. The `start` script is used for production, and the `dev` script is used for development.

To start the application in production mode, run:

```bash
npm start
```

To start the application in development mode, which uses tools like [nodemon](https://nodemon.io/) for automatic restarts on file changes, run:

```bash
npm run dev
```

The API will be available at [http://localhost:3000](http://localhost:3000) by default (you can change the port in the `.env` file).