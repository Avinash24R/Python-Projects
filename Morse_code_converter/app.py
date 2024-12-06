from flask import Flask, render_template, request
from morse_code import text_to_morse, morse_to_text

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""
    error = ""
    if request.method == "POST":
        text_input = request.form.get("text")
        morse_input = request.form.get("morse")
        
        if text_input:
            try:
                result = text_to_morse(text_input)
            except Exception as e:
                error = str(e)
        
        if morse_input:
            try:
                result = morse_to_text(morse_input)
            except Exception as e:
                error = str(e)

    return render_template("index.html", result=result, error=error)

if __name__ == "__main__":
    app.run(debug=True)
