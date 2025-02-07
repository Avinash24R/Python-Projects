# Google Sheets WebApp

This project is a web application that interacts with Google Sheets to manage contact information. It provides functionalities to insert, update, delete, and filter contacts.

## Project Structure


## Backend

The backend is built with Node.js and Express. It handles API requests to interact with Google Sheets.

### Download the credentials.json file
1. Set Up Google Sheets API
Create a Google Cloud Project:

- Go to the Google Cloud Console.

- Create a new project.

2. Enable Google Sheets API:

- Navigate to "APIs & Services" > "Library".

- Search for "Google Sheets API" and enable it.

3. Create Credentials:

- Go to "APIs & Services" > "Credentials".

- Click "Create Credentials" and choose "Service Account".

- Download the JSON key file for the service account.

4. Share Your Google Sheet:

- Create a new Google Sheet.

- Share the sheet with the editor mode.

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a .env file in the `backend` directory with the following content:
    ```
    PORT=2000
    SHEET_ID=your_google_sheet_id
    ```

4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints

- `GET /out`: Get all contact data.
- `POST /add`: Add a new contact.
- `PUT /update/:id`: Update an existing contact.
- `DELETE /delete/:id`: Delete a contact.
- `GET /filter`: Filter contacts based on criteria.

## Frontend

The frontend is built with React. It provides a user interface to interact with the backend API.

### Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Components

- `Insert`: Form to add a new contact.
- `Update`: Form to update an existing contact.
- `Delete`: Form to delete a contact.
- `Filter`: Form to filter contacts.
- `Output`: Displays the list of contacts.
