from flask import Flask, render_template, request, redirect, url_for
from income_calculator import IncomeCalculator

app = Flask(__name__)
calculator = IncomeCalculator()

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        source = request.form["source"]
        amount = float(request.form["amount"])
        calculator.add_income(source, amount)
        return redirect(url_for("index"))

    income_sources = calculator.get_income_sources()
    monthly_income = calculator.calculate_monthly_income()
    annual_income = calculator.calculate_annual_income()
    income_tax = calculator.calculate_income_tax(annual_income)
    
    return render_template("index.html", 
                           income_sources=income_sources, 
                           monthly_income=monthly_income, 
                           annual_income=annual_income,
                           income_tax=income_tax
                        )

if __name__ == "__main__":
    app.run(debug=True)
