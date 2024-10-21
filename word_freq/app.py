from flask import Flask, render_template , request ,url_for, redirect
from word_freq_counter import WordFreqCounter
import PyPDF2
import re

app = Flask(__name__)
counter = WordFreqCounter()

def clean_text(text):
    text = text.lower()  # Convert to lowercase
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
    return text

def extract_text_from_pdf(file):
    """Extract text from an uploaded PDF file."""
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

@app.route("/", methods=["GET", "POST"])
def index():
    word_freq = {}
    error = None  # For storing error messages

    if request.method == "POST":
        text = request.form.get("text", "").strip()
        num_words = request.form.get("num_words", "").strip()
        uploaded_file = request.files.get("file")

        # Input validation: Ensure either text or a file is provided
        if not text and not uploaded_file:
            error = "Please enter some text or upload a valid file."

        # Handle the number of words input validation
        if not num_words.isdigit():
            error = "Please enter a valid number for most frequent words."

        if not error:
            # If a file is uploaded, read its content
            if uploaded_file and uploaded_file.filename.endswith(".pdf"):
                text = extract_text_from_pdf(uploaded_file)
            elif uploaded_file and uploaded_file.filename.endswith(".txt"):
                text = uploaded_file.read().decode("utf-8")

            if text:
                words = counter.text_to_words(text)
                counter.count_freq(words)
                word_freq = dict(
                    sorted(counter.word_frequency_count.items(), key=lambda x: x[1], reverse=True)[:int(num_words)]
                )

    return render_template("index.html", word_freq=word_freq, error=error)
        
if __name__ == "__main__":
    app.run(debug=True)