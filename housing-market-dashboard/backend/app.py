from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    # Run on default Flask port 5000, accessible from localhost
    app.run(host="0.0.0.0", port=5000, debug=True)
