from flask import Flask
from flask_cors import CORS

from projects.CodeInsight.codeApp import code_bp
from projects.HeartDiseasePrediction.heartApp import heart_bp
from projects.MovieRecommendationSystem.movieApp import movie_bp

app = Flask(__name__)
CORS(app)

# Register all APIs
app.register_blueprint(code_bp)
app.register_blueprint(heart_bp)
app.register_blueprint(movie_bp)

if __name__ == "__main__":
    app.run(debug=True)