document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    fetch('/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, from, to })
    }).then(response => response.json()).then(data => {
        const resultElement = document.getElementById('result');
        resultElement.innerText = `Converted Amount: ${data.converted_amount}\nExchange Rate: 1 ${from} = ${data.exchange_rate} ${to}`;
    }).catch(error => {
        console.error('Error:', error);
    });
});
