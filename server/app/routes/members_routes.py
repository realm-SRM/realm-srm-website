from flask import Blueprint
import json

members_routes = Blueprint('members_routes', __name__)

@members_routes.route('/members', methods=['GET'])
def api_members():
    with open('members.json') as f:
        data = json.load(f)
    return data,200