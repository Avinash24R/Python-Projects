from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    data = request.json
    amount = float(data['amount'])  # Convert amount to float
    from_currency = data['from']
    to_currency = data['to']

    # Call the external API to get exchange rates
    response = requests.get(f'https://api.exchangerate-api.com/v4/latest/{from_currency}')
    exchange_rates = response.json()['rates']
    exchange_rate = exchange_rates[to_currency]
    converted_amount = amount * exchange_rate

    return jsonify({
        'converted_amount': converted_amount,
        'exchange_rate': exchange_rate
    })

if __name__ == '__main__':
    app.run(debug=True)
