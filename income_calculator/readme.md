
# Income Calculator Web App

## Overview
The **Income Calculator** is a web application built with Flask that helps users track their income sources and calculate their monthly and annual income. Additionally, it computes the income tax based on the latest tax slabs, allowing users to understand their tax liabilities.

## Features
- Add multiple income sources and amounts.
- Calculate total monthly and annual income.
- Calculate income tax based on updated tax rules.
- User-friendly interface with a toggle feature to show/hide income sources in a table format.

## Technologies Used
- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **Environment**: Anaconda or any Python virtual environment

## Setup Instructions

### Prerequisites
- Python 3.x installed on your machine.
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
   git clone https://github.com/Avinash24R/Python-Projects/income_calculator.git
   ```

### Project Structure
```
income_calculator/
├── app.py               # Main application file
├── income_calculator.py  # Contains the IncomeCalculator class
├── static/
│   └── styles.css       # CSS styles for the web app
├── templates/
│   └── index.html       # HTML template for the web app
└── README.md            # Project documentation
```

### Running the Application
1. Navigate to the cloned project directory:
   ```bash
   cd income_calculator
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
1. Enter your income source and amount in the form provided.
2. Click on "Add Income" to save the source.
3. Click the "Show/Hide Income Table" button to view your income sources and their amounts.
4. View your total monthly and annual income, along with the income tax to be paid.

## Tax Calculation Rules
- **Up to ₹3 lakh**: Nil
- **₹3 lakh - ₹7 lakh**: 5%
- **₹7 lakh - ₹10 lakh**: 10%
- **₹10 lakh - ₹12 lakh**: 15%
- **₹12 lakh - ₹15 lakh**: 20%
- **More than ₹15 lakh**: 30%

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for any improvements or bugs.


