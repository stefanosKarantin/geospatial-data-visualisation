from flask import Flask
from flask import render_template

# creates a Flask application, named app
app = Flask(__name__, static_folder="build/static", template_folder="build")
@app.route("/")
def hello():
    return render_template('index.html')

# run the application
if __name__ == "__main__":
    app.run(debug=True)
