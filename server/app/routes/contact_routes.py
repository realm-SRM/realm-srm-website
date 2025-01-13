from flask import Blueprint, jsonify

contact_routes = Blueprint('contact_routes', __name__)

@contact_routes.route('/contact', methods=['POST'])
def api_contact():
    #mail and sheets api code here
    return jsonify({"message": "Contact form submitted!"}), 200 
'''
if success: return the above response with a 200 status code
if failed: return a response with a 503 status code {"message": "Failed to submit contact form!"}
'''

