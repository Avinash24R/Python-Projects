# Password Generator

A web-based application for generating secure passwords based on user-defined criteria.

## Features
- Customizable password length
- Options to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters


## Technologies Used
- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **Environment**: Anaconda or any Python virtual environment

## Setup Instructions

### Prerequisites
- Python 3.10 installed on your machine.
- Git installed on your machine.
- Flask library. If you don't have Flask installed, you can install it using pip:
  ```bash
  pip install Flask
  ```

### Cloning the Repository
1. Open your terminal (Command Prompt, Git Bash, etc.).
2. Navigate to the directory where you want to clone the repository:
   ```bash
   cd path/to/your/directory
   ```
3. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/Avinash24R/Python-Projects/tree/main/password_gen
   ```

### Project Structure
```
password_gen/
├── app.py               # Main application file
├── income_calculator.py  # Contains the PasswordGenerator class
├── static/
│   └── styles.css       # CSS styles for the web app
├── templates/
│   └── index.html       # HTML template for the web app
└── README.md            # Project documentation
```

### Running the Application
1. Navigate to the cloned project directory:
   ```bash
   cd password_gen
   ```
2. (Optional) Create a virtual environment and activate it:
   ```bash
   # Create a virtual environment
   python -m venv venv

   # Activate the virtual environment
   # For Windows
   venv\Scripts\activate
   # For macOS/Linux
   source venv/bin/activate
   ```
3. Install Flask if not already installed:
   ```bash
   pip install Flask
   ```
4. Run the Flask application:
   ```bash
   python app.py
   ```
5. Open your web browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Usage
- Open your browser and go to `http://127.0.0.1:5000`.
- Enter the desired password criteria and generate your password!



