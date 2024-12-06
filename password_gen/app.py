from flask import Flask, render_template, request, jsonify
from password import PasswordGenerator

app = Flask(__name__)
password_generator = PasswordGenerator()

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        try:
            length = int(request.form["length"])
            use_uppercase = "uppercase" in request.form
            use_lowercase = "lowercase" in request.form
            use_digits = "digits" in request.form
            use_special = "special" in request.form

            password = password_generator.generate_password(
                length, use_uppercase, use_lowercase, use_digits, use_special
            )
            return render_template("index.html", password=password)
        except ValueError as e:
            return render_template("index.html", error=str(e))

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
