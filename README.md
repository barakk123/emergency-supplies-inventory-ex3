
# Emergency Supply Management System - Frontend

This repository contains the frontend application for the Emergency Supply Management System, developed with React and Vite for a modern, efficient, and responsive user interface. It interacts with the backend server deployed on Render to manage and display emergency supply data effectively. For the backend part of this project, please visit [this link](https://github.com/barakk123/emergency-supplies-inventory-ex2).

## Getting Started

This guide will help you set up the frontend application on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14 or newer)
- npm (version 6 or newer)
- Access to the backend API. The system has been deployed to Render, and the API base URL is `https://emergency-supplies-inventory.onrender.com/supplies`.

### Installation

1. Clone this repository to your local machine.
   ```
   git clone https://github.com/barakk123/emergency-supplies-inventory-ex3
   ```
2. Navigate to the project directory.
   ```
   cd emergency-supplies-inventory-ex3
   ```
3. Install dependencies.
   ```
   npm install
   ```
4. Start the development server.
   ```
   npm run dev
   ```
   The application will be available at: `http://localhost:5173/`.

### Configuration

To connect the frontend application to your backend server, update the [apiService]`src/services/appiService.js` file with the base URL of your backend API.

Example:
```js
export const API_BASE_URL = 'https://emergency-supplies-inventory.onrender.com/supplies';
```

## Usage

Navigate to `http://localhost:5173/` to view and interact with the application. The frontend is designed to provide a user-friendly interface for managing emergency supplies, including adding, updating, and deleting supply data.


## License

This project is licensed under the MIT License - see the LICENSE file in the repository for details.

------------------------------------------------------------------------------------------------------------------------------------------------
Thank you for reading this and for checking out my mini project
------------------------------------------------------------------------------------------------------------------------------------------------
Barak Daniel (c) 2024