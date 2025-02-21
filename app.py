import random
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    card_values = ["🔥", "🔥", "💎", "💎", "🌟", "🌟", "🎩", "🎩"]
    random.shuffle(card_values)
    return render_template("index.html", card_values=card_values)

if __name__ == "__main__":
    app.run(debug=True)