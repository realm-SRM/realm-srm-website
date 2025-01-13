from flask import Blueprint, jsonify

recruitment_routes = Blueprint('recruitment_routes', __name__)

@recruitment_routes.route('/recruitment', methods=['POST'])
def api_recruitment():
    #sheets api code here to add the form data to the recruitment sheet
    return jsonify({"message": "Recruitment form submitted!"}), 200

#rsponse will be same as contact form