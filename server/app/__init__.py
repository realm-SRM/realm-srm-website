from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["*"])  # Allow all origins

    # import routes
    from app.routes.contact_routes import contact_routes
    from app.routes.members_routes import members_routes
    from app.routes.recruitment_routes import recruitment_routes

    # register routes
    app.register_blueprint(contact_routes, url_prefix="/api")
    app.register_blueprint(members_routes, url_prefix="/api")
    app.register_blueprint(recruitment_routes, url_prefix="/api")

    return app