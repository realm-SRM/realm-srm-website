from flask import Blueprint, jsonify

members_routes = Blueprint('members_routes', __name__)

@members_routes.route('/members', methods=['GET'])
def api_members():
    #get members from sheets api and structure it in a json response
    return jsonify({"message": "Members page!"}), 200
