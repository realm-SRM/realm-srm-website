from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/')
def api_root():
    return jsonify({"message": "Hello from Flask backend!"})