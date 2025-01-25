from flask import Blueprint, jsonify

joinus_routes = Blueprint('joinus_routes', __name__)

@joinus_routes.route('/joinus', methods=['POST'])
def api_joinus():
    #sheets api code here to add the form data to the joinussheet
    return jsonify({"message": "joinus form submitted!"}), 200

#rsponse will be same as contact form