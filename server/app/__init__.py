from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["*"])  # Allow all origins

    # Register routes
    from .routes import api
    app.register_blueprint(api, url_prefix="/api")

    return app