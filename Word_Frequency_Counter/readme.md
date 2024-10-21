# Word Frequency Counter

## Overview
The **Word Frequency Counter** is a beginner Flask web application that allows users to input text or upload text/PDF files to analyze the most common words. Users can specify the number of top words to display. The application processes the input, counts word frequencies, and presents the results in a user-friendly format.

## Features
- Input text directly or upload a text/PDF file.
- Count the frequency of words in the provided text.
- Display the top N most common words based on user input.
- User-friendly interface with drag-and-drop file upload functionality.

## Technologies Used
- **Python**: Programming language used for development.
- **Flask**: Web framework for creating the web application.
- **HTML/CSS**: For the user interface design.
- **PyPDF2**: Library for extracting text from PDF files.
- **Jinja2**: Templating engine used by Flask.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Avinash24R/Word_Frequency_Counter.git
   cd word_frequency_counter
   ```

2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install flask PyPDF2
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Usage
1. You can either type or upload text/pdf.
2. Enter the number of top words you want to display in the corresponding input field.
3. Click on the "Submit" button to analyze the text.
4. The results will display the top N most common words along with their frequencies.

## File Structure
```
word-frequency-counter/
│
├── app.py                  # Main application file
├── templates/              # Folder for HTML templates
│   └── index.html          # Main page of the web app
├── static/                 # Folder for static files (CSS, JS)
│   └── style.css           # CSS file for styling
│   └── script.js           # JavaScript file for interactivity
├── requirements.txt        # File for Python package dependencies
└── README.md               # Project documentation
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for new features.



## Acknowledgments
- Thanks to the Flask community for their excellent documentation and support.
- Special thanks to the creators of PyPDF2 for providing a useful library for PDF text extraction.
